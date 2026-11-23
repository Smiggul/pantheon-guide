// ─────────────────────────────────────────────────────────────────────────────
//  lolalytics-page.mjs — read the tables a lolalytics page embeds.
//
//  Each page embeds its tables in a `qwik/json` script. Objects in its `objs`
//  array reference each other by base-36 index; mainObject() resolves the main
//  object (the one holding `header` and `startSet`). Shared by
//  gen-matchup-starts.mjs and gen-lane-counters.mjs.
//
//  NEVER read these pages with a plain WebFetch: that serves the Highest Win tab
//  (CLAUDE.md, "26.20 data audit"). The embedded tables hold every row with its
//  games, so most-common and per-matchup numbers are read off them directly.
// ─────────────────────────────────────────────────────────────────────────────

// A string INSIDE an object or array is a reference (base 36, optionally behind
// Qwik's marker characters); a string that IS an objs entry is a literal value.
const MARK = /^[\u0001-\u0007\u0010-\u0019!#&]+/;

export function mainObject(html) {
  const tag = '<script type="qwik/json">';
  const i = html.indexOf(tag);
  if (i < 0) return null;
  let objs;
  try { objs = JSON.parse(html.slice(i + tag.length, html.indexOf("</script>", i))).objs; } catch { return null; }
  const ref = (v) => {
    if (typeof v !== "string") return null;
    const s = v.replace(MARK, "");
    if (!/^[0-9a-z]+$/.test(s)) return null;
    const n = parseInt(s, 36);
    return n < objs.length ? n : null;
  };
  const expand = (o, d) => {
    if (d > 14) return null;
    if (Array.isArray(o)) return o.map((x) => at(x, d + 1));
    if (o && typeof o === "object") return Object.fromEntries(Object.entries(o).map(([k, x]) => [k, at(x, d + 1)]));
    return o;
  };
  const at = (v, d) => { const n = ref(v); return n == null ? v : expand(objs[n], d); };
  const main = objs.filter((o) => o && typeof o === "object" && !Array.isArray(o) && "header" in o && "startSet" in o);
  return main.length ? expand(main[main.length - 1], 0) : null;
}
