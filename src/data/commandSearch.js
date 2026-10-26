// ─────────────────────────────────────────────────────────────────────────────
//  commandSearch.js — what the Ctrl+K command menu finds for a query.
//
//  Entries are one per champion and lane ("Darius · Jungle") plus the app's
//  pages. A query is words: a lane word (top, jg, mid, adc, supp...) narrows
//  champions to that lane, the rest must match the name. Punctuation and spaces
//  in names are ignored ("kaisa" finds Kai'Sa, "leesin" finds Lee Sin), and
//  initials work for two-word names ("tf" finds Twisted Fate).
// ─────────────────────────────────────────────────────────────────────────────

const LANE_WORDS = {
  top: "Top", jungle: "Jungle", jg: "Jungle", jung: "Jungle", jgl: "Jungle",
  mid: "Mid", middle: "Mid", bot: "Bot", adc: "Bot", bottom: "Bot",
  support: "Support", supp: "Support", sup: "Support",
};

const flat = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");
const initials = (s) => String(s || "").split(/[\s'.&-]+/).filter(Boolean).map((w) => w[0].toLowerCase()).join("");

/** How well one name matches the query text: 0 means no match, higher is better. */
function nameScore(name, text) {
  if (!text) return 1;
  const n = flat(name);
  if (n === text) return 5;
  if (n.startsWith(text)) return 4;
  if (initials(name) === text && text.length > 1) return 3;
  if (String(name).toLowerCase().split(/[\s'.&-]+/).some((w) => flat(w).startsWith(text))) return 2;
  return n.includes(text) ? 1 : 0;
}

/** Every entry the menu can show: champions per lane first, then pages. */
export function commandEntries(champs, pages) {
  const out = [];
  for (const c of champs) {
    // Some rosters list their lanes only as role keys (Sett, Wukong, Rek'Sai...)
    const lanes = c.lanes?.length ? c.lanes : Object.keys(c.roles || {});
    for (const lane of lanes.length ? lanes : [null]) {
      out.push({ kind: "champ", id: `${c.id}|${lane || ""}`, label: c.display, lane, champ: c });
    }
  }
  for (const p of pages) out.push({ kind: "page", id: `page|${p.id}`, label: p.label, page: p, words: p.words || "" });
  return out;
}

/** The entries for a query, best first. An empty query shows the pages and the current champion. */
export function searchCommands(entries, query, { current, limit = 40 } = {}) {
  const words = String(query || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
  const lane = words.map((w) => LANE_WORDS[w]).find(Boolean) || null;
  const text = flat(words.filter((w) => !LANE_WORDS[w]).join(""));
  if (!text && !lane) {
    const mine = entries.filter((e) => e.kind === "champ" && e.champ.id === current);
    return [...entries.filter((e) => e.kind === "page"), ...mine].slice(0, limit);
  }
  const scored = [];
  entries.forEach((e, order) => {
    if (e.kind === "champ") {
      if (lane && e.lane !== lane) return;
      const s = nameScore(e.label, text);
      if (s) scored.push({ e, s, order });
    } else if (!lane) {
      const s = Math.max(nameScore(e.label, text), e.words.split(/\s+/).some((w) => w && w.startsWith(text)) ? 2 : 0);
      if (s) scored.push({ e, s: s + 0.5, order });   // a page beats a champion on the same score
    }
  });
  scored.sort((a, b) => b.s - a.s || a.order - b.order);
  return scored.slice(0, limit).map((x) => x.e);
}
