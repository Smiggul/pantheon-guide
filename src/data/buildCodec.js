// ─────────────────────────────────────────────────────────────────────────────
//  buildCodec.js — shareable FRGE build codes
//
//  Serialises a build {champ, role, enemyClass, runes, items} to a compact,
//  versioned, copy-pasteable string:  FRGE1-<base64url(JSON)>
//  …and parses it back. Paste one into Discord/chat to share a build with a
//  friend; the app decodes it and loads the champ/role/rune page.
//
//  The `v:1` tag makes the format forward-extensible (custom item sets, etc.).
//  btoa/atob + TextEncoder/TextDecoder exist in the browser, the Electron
//  renderer, and Node 18+ — so this module is testable outside the app too.
// ─────────────────────────────────────────────────────────────────────────────

export const BUILD_CODE_PREFIX = "FRGE1-";

// UTF-8-safe base64url (champion/rune names can contain non-ASCII, e.g. Kai'Sa).
const toB64Url = (str) => {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const fromB64Url = (s) => {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
};

// build: { champ, role?, enemyClass?, runes?, items? }
//   champ      — champion id (the app's `champ.id` / DDragon-ish key)
//   role       — "Top" | "Jungle" | "Mid" | "Bot" | "Support"
//   enemyClass — one of the 13 class keys, or null
//   runes      — the rune-selection object the rune page produces
//   items      — optional custom item list (future Build Studio)
export function encodeBuild(build) {
  if (!build || !build.champ) return null;
  const payload = {
    v: 1,
    c: build.champ,
    r: build.role || undefined,
    k: build.enemyClass || undefined,
    runes: build.runes || undefined,
    items: (build.items && build.items.length) ? build.items : undefined,
  };
  return BUILD_CODE_PREFIX + toB64Url(JSON.stringify(payload));
}

// Returns { champ, role, enemyClass, runes, items } or null if invalid.
export function decodeBuild(code) {
  if (typeof code !== "string") return null;
  const s = code.trim();
  if (!s.startsWith(BUILD_CODE_PREFIX)) return null;
  try {
    const o = JSON.parse(fromB64Url(s.slice(BUILD_CODE_PREFIX.length)));
    if (!o || o.v !== 1 || !o.c) return null;
    return {
      champ: o.c,
      role: o.r || null,
      enemyClass: o.k || null,
      runes: o.runes || null,
      items: o.items || null,
    };
  } catch {
    return null;
  }
}

export default { encodeBuild, decodeBuild, BUILD_CODE_PREFIX };
