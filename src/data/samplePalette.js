// ─────────────────────────────────────────────────────────────────────────────
//  samplePalette.js — pull a Forge palette out of the splash art actually shown.
//
//  The Forge theme randomises WHICH skin splash is displayed, but the palette
//  used to come from skinThemes.js, which stores one fixed palette per champion.
//  So Zombie Slayer Pantheon rendered with Ruined Pantheon's greens. This samples
//  the image on screen instead, so the accents always match the art.
//
//  Data Dragon serves splashes with `Access-Control-Allow-Origin: *`, so the
//  canvas stays untainted and getImageData works. Sampling happens once per
//  splash and is cached for the session; new skins therefore need no
//  regeneration step — they simply work.
// ─────────────────────────────────────────────────────────────────────────────

const cache = new Map();      // url -> {m,h,a}
const inflight = new Map();   // url -> Promise

// ── colour helpers ───────────────────────────────────────────────────────────
const rgbToHsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s, l];
};

const hslToHex = (h, s, l) => {
  h = ((h % 360) + 360) % 360; s = Math.min(1, Math.max(0, s)); l = Math.min(1, Math.max(0, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60)       [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else              [r, g, b] = [c, 0, x];
  const to = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
};

// ── the sampler ──────────────────────────────────────────────────────────────
// Buckets pixels into 24 hue bins weighted by saturation, so a large flat
// background loses to a smaller but vivid subject — which is what reads as the
// skin's colour to a person looking at it.
const BINS = 24;

function paletteFromPixels(data) {
  const weight = new Float64Array(BINS);
  const hSum = new Float64Array(BINS), sSum = new Float64Array(BINS), count = new Float64Array(BINS);

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a < 128) continue;
    const [h, s, l] = rgbToHsl(data[i], data[i + 1], data[i + 2]);
    // Ignore near-black, blown highlights and greys — they carry no hue.
    if (l < 0.12 || l > 0.92 || s < 0.18) continue;
    const bin = Math.min(BINS - 1, Math.floor((h / 360) * BINS));
    // Weight by saturation and mid-lightness: vivid mid-tones define a skin.
    const w = s * (1 - Math.abs(l - 0.5) * 1.2);
    weight[bin] += w; hSum[bin] += h * w; sSum[bin] += s * w; count[bin] += w;
  }

  const order = [...weight.keys()].sort((x, y) => weight[y] - weight[x]);
  const top = order[0];
  if (weight[top] <= 0) return null;

  const hueOf = (b) => hSum[b] / (count[b] || 1);
  const satOf = (b) => Math.min(0.85, Math.max(0.42, sSum[b] / (count[b] || 1)));

  // A secondary hue at least ~4 bins (60°) away, so the accent is distinguishable
  // rather than a second shade of the primary.
  const far = order.slice(1).find((b) => {
    const d = Math.abs(b - top);
    return weight[b] > 0 && Math.min(d, BINS - d) >= 4;
  });

  const ph = hueOf(top), ps = satOf(top);
  // Lightness is pinned to a band that stays legible on the charcoal ground —
  // sampled art is often far too dark or too pale to use as UI accents directly.
  return {
    m: hslToHex(ph, ps, 0.58),                                  // primary
    h: hslToHex(ph, Math.min(0.9, ps + 0.08), 0.72),            // highlight
    a: hslToHex(far != null ? hueOf(far) : ph + 32, Math.max(0.35, ps - 0.1), 0.42), // accent
  };
}

/**
 * Sample a palette from a splash URL. Resolves to {m,h,a} or null if the image
 * can't be read (offline, 404, or a tainted canvas). Never throws.
 */
export function samplePaletteFromUrl(url) {
  if (!url) return Promise.resolve(null);
  if (cache.has(url)) return Promise.resolve(cache.get(url));
  if (inflight.has(url)) return inflight.get(url);

  const p = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    let settled = false;
    const done = (v) => { if (settled) return; settled = true; cache.set(url, v); inflight.delete(url); resolve(v); };

    img.onload = () => {
      try {
        // 72px wide is plenty for a hue histogram and keeps this off the main
        // thread's critical path.
        const w = 72, h = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * w)) || 42;
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return done(null);
        ctx.drawImage(img, 0, 0, w, h);
        done(paletteFromPixels(ctx.getImageData(0, 0, w, h).data));
      } catch {
        done(null);   // tainted canvas or a blocked read — caller keeps its fallback
      }
    };
    img.onerror = () => done(null);
    img.src = url;
    // Don't leave the theme waiting on a stalled CDN request.
    setTimeout(() => done(null), 6000);
  });

  inflight.set(url, p);
  return p;
}
