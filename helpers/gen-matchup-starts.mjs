// ─────────────────────────────────────────────────────────────────────────────
//  gen-matchup-starts.mjs — what do players actually start with, per champion-
//  role and per lane matchup?
//
//  Writes src/data/matchupStarts.js from lolalytics' raw pages (Emerald+):
//    build page    /lol/<champ>/build/?lane=<lane>
//                  -> the champion-role's Starting Item Sets, and its lane
//                     opponents with games per opponent
//    matchup page  /lol/<champ>/vs/<opponent>/build/?lane=<lane>&vslane=<lane>
//                  -> the pair's Starting Item Sets
//  Each page embeds its tables in a `qwik/json` script. Objects in its `objs`
//  array reference each other by base-36 index; the resolved main object (the
//  one holding `header` and `startSet`) carries
//    startSet: [["1055_2003", winRate, pick%, games], ...]
//  with the item ids joined by "_" and a repeated id meaning a count
//  ("1056_2003_2003" = Doran's Ring + 2 Health Potions). Trinkets are not in it.
//  NEVER read these pages with a plain WebFetch: that serves the Highest Win tab
//  (CLAUDE.md, "26.20 data audit"). The startSet table holds every set with its
//  games, so the most common one is read off it directly.
//
//  Scope, so a run stays polite and feasible: every roster champion-role gets
//  its build page. Matchup pages only for Top, Mid and Bot, and only for the
//  most played opponents that together make up 80% of the role's games, each
//  with at least 300 games against it. Support keeps the World Atlas quest
//  start, so only its most common World Atlas set is written (what goes beside
//  the quest item). Jungle keeps its pet + Health Potion start, so only which
//  pet its games start with is written (JUNGLE_PETS).
//
//  Every page is cached (gzipped raw HTML plus the parsed extract) under
//  .scratch/starts/cache/<window>/, gitignored. A rerun reuses cached pages
//  younger than --max-age days (default 7), so it only downloads what is
//  missing or stale. Requests are throttled and back off on 429/5xx.
//
//  Unofficial pages: expect the layout to change. Report-only, never in CI.
//  Run:  node helpers/gen-matchup-starts.mjs [window]     (default 30 = 30 days)
//        options: --max-age <days>, --offline (cache only), --plan (count the
//        matchup pages a run needs, then stop), --file <page.html> [--lane top]
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name, dflt) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : dflt; };
const VALUED = new Set(["--max-age", "--file", "--lane"]);
const positional = argv.filter((a, i) => !a.startsWith("--") && !VALUED.has(argv[i - 1]));
const WINDOW = positional[0] || "30";
const MAX_AGE_DAYS = Number(opt("--max-age", 7));
const OFFLINE = flag("--offline");

const LANE = { Top: "top", Jungle: "jungle", Mid: "middle", Bot: "bottom", Support: "support" };
const LANERS = new Set(["Top", "Mid", "Bot"]);
const SLUG = { MonkeyKing: "wukong" };
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const COVER = 0.8;          // opponents making up this share of the role's games
const MIN_PAIR = 300;       // games against one opponent before its start is trusted
const MIN_ROLE = 1000;      // games on the champion-role before its own start is trusted
const ALT_MIN_PICK = 3;     // an alternative start needs this share of the role's games
const KEEP_ROWS = 12;       // start-set rows kept per page in the cache extract

// ── qwik/json -> the page's resolved main object ─────────────────────────────
// A string INSIDE an object or array is a reference (base 36, optionally behind
// Qwik's marker characters); a string that IS an objs entry is a literal value.
const MARK = /^[\u0001-\u0007\u0010-\u0019!#&]+/;
function mainObject(html) {
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

// The few fields this helper needs, small enough to cache by the thousand.
function extract(html, lane) {
  const m = mainObject(html);
  if (!m || !m.header) return null;
  const rows = (Array.isArray(m.startSet) ? m.startSet : [])
    .filter((r) => Array.isArray(r) && r.length >= 4 && typeof r[3] === "number")
    .sort((a, b) => b[3] - a[3]).slice(0, KEEP_ROWS)
    .map((r) => [String(r[0]), r[1], r[2], r[3]]);
  const enemy = Array.isArray(m.enemy?.[lane])
    ? m.enemy[lane].filter((r) => Array.isArray(r) && r.length >= 6).map((r) => [r[0], r[5]])
    : null;
  return { lane: m.header.lane, vsLane: m.header.vsLane ?? null, cid: m.header.cid, vs: m.header.vs ?? null,
    n: m.header.n ?? 0, startSet: rows, enemy };
}

// --file <saved page.html> [lane]: parse one page that is already on disk, print, exit.
if (flag("--file")) {
  console.log(JSON.stringify(extract(fs.readFileSync(opt("--file"), "utf8"), opt("--lane", "top")), null, 1));
  process.exit(0);
}

// ── Cached, throttled fetching ───────────────────────────────────────────────
const CACHE = path.join(ROOT, ".scratch", "starts", "cache", WINDOW);
fs.mkdirSync(path.join(CACHE, "role"), { recursive: true });
fs.mkdirSync(path.join(CACHE, "vs"), { recursive: true });
const fresh = (file) => fs.existsSync(file) && (Date.now() - fs.statSync(file).mtimeMs) / 864e5 <= MAX_AGE_DAYS;
const sleep = (ms) => new Promise((ok) => setTimeout(ok, ms));
const stats = { cached: 0, fetched: 0, failed: 0 };

async function getPage(kind, key, url, lane) {
  const json = path.join(CACHE, kind, `${key}.json`);
  if (fresh(json) || (OFFLINE && fs.existsSync(json))) {
    stats.cached++;
    return JSON.parse(fs.readFileSync(json, "utf8"));
  }
  // A raw page already on disk (fresh) is re-parsed without downloading again.
  const gz = path.join(CACHE, kind, `${key}.html.gz`);
  if (fresh(gz) || (OFFLINE && fs.existsSync(gz))) {
    const ex = extract(zlib.gunzipSync(fs.readFileSync(gz)).toString("utf8"), lane);
    if (ex) { fs.writeFileSync(json, JSON.stringify(ex)); stats.cached++; return ex; }
  }
  if (OFFLINE) { stats.failed++; return null; }
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": UA } });
      if (res.status === 429 || res.status >= 500) { await sleep(15000 * (attempt + 1)); continue; }
      if (!res.ok) break;
      const html = await res.text();
      const ex = extract(html, lane);
      if (!ex) { await sleep(2000); continue; }
      fs.writeFileSync(gz, zlib.gzipSync(html));
      fs.writeFileSync(json, JSON.stringify(ex));
      stats.fetched++;
      return ex;
    } catch { await sleep(3000); }
  }
  stats.failed++;
  return null;
}

// Runs jobs a few at a time with a pause between rounds, so the site is not hammered.
async function throttled(jobs, fn, label) {
  const out = new Array(jobs.length);
  for (let i = 0; i < jobs.length; i += 3) {
    const before = stats.fetched;
    await Promise.all(jobs.slice(i, i + 3).map(async (j, k) => { out[i + k] = await fn(j); }));
    if (stats.fetched > before) await sleep(600);
    if ((i / 3) % 40 === 0) console.error(`${label} ${Math.min(i + 3, jobs.length)}/${jobs.length}`);
  }
  return out;
}

// ── Items: Riot's full item.json for the bundled patch (names, gold, maps) ──
const ver = fs.readFileSync(path.join(ROOT, "public", "ddragon", "version.txt"), "utf8").trim();
const itemFile = path.join(ROOT, ".scratch", "starts", "cache", `item-${ver}.json`);
if (!fs.existsSync(itemFile)) {
  const r = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/item.json`);
  if (!r.ok) { console.error(`gen-matchup-starts: item.json ${ver}: HTTP ${r.status}`); process.exit(2); }
  fs.writeFileSync(itemFile, await r.text());
}
const ITEMS = JSON.parse(fs.readFileSync(itemFile, "utf8")).data;
const CONSUMABLE = new Set(["2003", "2031", "2055", "3340", "3363", "3364"]); // potions, Control Ward, trinkets

// "1056_2003_2003" -> { items: ["Doran's Ring", ["Health Potion", 2]], main, gold, bad }
function decode(key) {
  const ids = key.split("_").filter(Boolean);
  const counts = new Map();
  for (const id of ids) counts.set(id, (counts.get(id) || 0) + 1);
  const bad = ids.filter((id) => !ITEMS[id] || !ITEMS[id].maps?.["11"]);
  const items = [...counts].map(([id, n]) => (n > 1 ? [ITEMS[id]?.name, n] : ITEMS[id]?.name));
  const main = [...counts.keys()].filter((id) => !CONSUMABLE.has(id)).sort().join("_");
  const gold = ids.reduce((g, id) => g + (ITEMS[id]?.gold?.total ?? 0), 0);
  return { items, main, gold, bad, empty: ids.length === 0 };
}

// ── The roster ───────────────────────────────────────────────────────────────
const { CHAMPS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "champs", "index.js")).href);
const { CHAMP_KEYS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "lcuData.js")).href);
const DD_BY_KEY = Object.fromEntries(Object.entries(CHAMP_KEYS).map(([dd, k]) => [k, dd]));
const slug = (dd) => SLUG[dd] || dd.toLowerCase();

const roles = CHAMPS.flatMap((c) => Object.keys(c.roles || {}).map((role) => ({ dd: c.dd, role })));
const rolePages = await throttled(roles, ({ dd, role }) =>
  getPage("role", `${slug(dd)}_${LANE[role]}`,
    `https://lolalytics.com/lol/${slug(dd)}/build/?lane=${LANE[role]}&tier=emerald_plus&patch=${WINDOW}`, LANE[role]),
"build pages");

// Which opponents each laner role needs a matchup page for.
const pairs = [];
roles.forEach((r, i) => {
  const p = rolePages[i];
  r.page = p && p.lane === LANE[r.role] && p.n >= MIN_ROLE ? p : null;
  r.opps = [];
  if (!r.page || !LANERS.has(r.role) || !r.page.enemy) return;
  const list = [...r.page.enemy].filter(([cid]) => DD_BY_KEY[cid] && DD_BY_KEY[cid] !== r.dd).sort((a, b) => b[1] - a[1]);
  const total = list.reduce((s, [, n]) => s + n, 0);
  let run = 0;
  for (const [cid, n] of list) {
    if (run >= COVER * total) break;
    run += n;
    if (n < MIN_PAIR) break;   // sorted by games: nothing further down qualifies either
    r.opps.push(DD_BY_KEY[cid]);
    pairs.push({ r, foe: DD_BY_KEY[cid] });
  }
});
console.error(`${pairs.length} matchup pages needed`);
if (flag("--plan")) {
  const cached = pairs.filter(({ r, foe }) => fresh(path.join(CACHE, "vs", `${slug(r.dd)}_${LANE[r.role]}_vs_${slug(foe)}.json`))).length;
  console.log(`${roles.filter((r) => r.page).length} of ${roles.length} roles have build data; ${pairs.length} matchup pages, ${cached} already cached`);
  process.exit(0);
}
const pairPages = await throttled(pairs, ({ r, foe }) =>
  getPage("vs", `${slug(r.dd)}_${LANE[r.role]}_vs_${slug(foe)}`,
    `https://lolalytics.com/lol/${slug(r.dd)}/vs/${slug(foe)}/build/?lane=${LANE[r.role]}&vslane=${LANE[r.role]}&tier=emerald_plus&patch=${WINDOW}`,
    LANE[r.role]),
"matchup pages");

// ── Assemble ─────────────────────────────────────────────────────────────────
const SETS = [], setIndex = new Map(), problems = [];
const setOf = (key, where) => {
  const d = decode(key);
  if (d.bad.length) { problems.push(`${where}: ${key} holds ${d.bad.join(",")}, not a Rift item`); return null; }
  if (d.gold > 500) { problems.push(`${where}: ${key} costs ${d.gold}g`); return null; }
  if (!setIndex.has(key)) { setIndex.set(key, SETS.length); SETS.push({ key, ...d }); }
  return setIndex.get(key);
};
const r1 = (x) => Math.round(x * 10) / 10;
const out = {}, offLane = [], pets = {};
const PETS = new Set(["1101", "1102", "1103"]); // Scorchclaw Pup, Gustwalker Hatchling, Mosstomper Seedling
let pairOk = 0, pairThin = 0, pairFailed = 0;
pairs.forEach((p, i) => { p.page = pairPages[i]; });

for (const r of roles) {
  const k = `${r.dd}|${r.role}`;
  if (!r.page) continue;
  const rows = r.page.startSet.filter((row) => row[0] !== "");
  if (!rows.length) continue;
  if (!LANERS.has(r.role)) {
    const d = decode(rows[0][0]);
    offLane.push(`${k}: ${d.items.map((x) => (Array.isArray(x) ? `${x[0]} x${x[1]}` : x)).join(" + ")} (${r1(rows[0][2])}%)`);
    // Jungle: which pet players take, summed over its sets with and without a
    // potion (the potion splits about evenly, 53% of jungle games buy one).
    if (r.role === "Jungle") {
      const tally = {};
      let tot = 0;
      for (const row of rows) for (const id of row[0].split("_")) if (PETS.has(id)) { tally[id] = (tally[id] || 0) + row[3]; tot += row[3]; }
      const top = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
      if (top) pets[r.dd] = [ITEMS[top[0]].name, r1(100 * top[1] / tot), tot];
    }
    // Support: the World Atlas quest start, with what players buy beside it
    // (two Health Potions in 48 of 49 roles; Yuumi takes a Control Ward). Only
    // the most common set, and only when it holds the quest item; no matchups.
    if (r.role === "Support" && rows[0][0].split("_").includes("3865")) {
      const idx = setOf(rows[0][0], k);
      if (idx != null) out[k] = { games: r.page.n, own: [[idx, r1(rows[0][2]), r1(rows[0][1]), rows[0][3]]], vs: {} };
    }
    continue;
  }
  // The most common start, then up to two alternatives that are common (3%+)
  // and differ in their main item, so no block repeats another's.
  const own = [], mains = new Set();
  for (const row of rows) {
    if (own.length && (row[2] < ALT_MIN_PICK || own.length >= 3)) break;
    const main = decode(row[0]).main;
    if (own.length && (!main || mains.has(main))) continue;   // checked before the set is listed
    const idx = setOf(row[0], k);
    if (idx == null) continue;
    mains.add(main);
    own.push([idx, r1(row[2]), r1(row[1]), row[3]]);
  }
  if (!own.length) continue;
  const vs = {};
  for (const p of pairs.filter((x) => x.r === r)) {
    const pg = p.page;
    if (!pg) { pairFailed++; continue; }
    if (pg.n < MIN_PAIR || !pg.startSet.length) { pairThin++; continue; }
    const top = pg.startSet.find((row) => row[0] !== "");
    const idx = top && setOf(top[0], `${k} vs ${p.foe}`);
    if (idx == null) continue;
    vs[p.foe] = [idx, r1(top[2]), r1(top[1]), pg.n];
    pairOk++;
  }
  out[k] = { games: r.page.n, own, vs };
}

// ── Write ────────────────────────────────────────────────────────────────────
const keys = Object.keys(out).sort();
const lanerRoles = roles.filter((r) => LANERS.has(r.role)).map((r) => `${r.dd}|${r.role}`);
const supportRoles = roles.filter((r) => r.role === "Support").map((r) => `${r.dd}|${r.role}`);
const missing = [...lanerRoles, ...supportRoles].filter((k) => !out[k]).sort();
const setLines = SETS.map((s, i) => `  ${JSON.stringify(s.items)}, // ${i}: ${s.key}, ${s.gold}g`);
const roleLines = keys.map((k) => {
  const o = out[k];
  const vs = Object.entries(o.vs).sort((a, b) => b[1][3] - a[1][3])
    .map(([foe, v]) => `${/^[A-Za-z]\w*$/.test(foe) ? foe : JSON.stringify(foe)}: ${JSON.stringify(v)}`).join(", ");
  return `  ${JSON.stringify(k)}: { games: ${o.games}, own: ${JSON.stringify(o.own)},\n    vs: { ${vs} } },`;
});
const today = new Date().toISOString().slice(0, 10);
const file = `// Generated by helpers/gen-matchup-starts.mjs from lolalytics build and matchup
// pages (Emerald+, the last ${WINDOW} days, fetched ${today}). Do not edit by hand;
// re-run the helper instead (npm run gen:starts).
//
// START_SETS: every distinct starting set below, as players buy it: item names,
//   [name, count] where an item is bought more than once. The data holds no
//   trinkets; the export adds the Stealth Ward.
// MATCHUP_STARTS["<Data Dragon key>|<role>"], Top / Mid / Bot and Support:
//   games  the champion-role's games
//   own    its most common start, then up to two alternatives (${ALT_MIN_PICK}%+ of games,
//          a different main item): [set, pick %, win %, games]. Support: the most
//          common World Atlas set only.
//   vs     per lane opponent (Data Dragon key): the pair's most common start,
//          [set, pick %, win %, games in the pair]. Only the most played opponents
//          that make up ${COVER * 100}% of the role's games, each with ${MIN_PAIR}+ games.
//          Empty for Support.
// JUNGLE_PETS[<Data Dragon key>]: the pet most of the jungler's games start with,
//   [pet, share % of its pet starts, games]. junglePets.js takes it over the
//   curated pick only when it is a majority (50%+).
${missing.length ? `// No data (the export falls back to the profile start): ${missing.join(", ")}\n` : ""}export const STARTS_WINDOW = ${JSON.stringify(WINDOW)};
export const STARTS_FETCHED = ${JSON.stringify(today)};

export const START_SETS = [
${setLines.join("\n")}
];

export const MATCHUP_STARTS = {
${roleLines.join("\n")}
};

export const JUNGLE_PETS = {
${Object.keys(pets).sort().map((dd) => `  ${dd}: ${JSON.stringify(pets[dd])},`).join("\n")}
};
`;
fs.writeFileSync(path.join(ROOT, "src", "data", "matchupStarts.js"), file);

console.log(`pages: ${stats.fetched} downloaded, ${stats.cached} from cache, ${stats.failed} failed`);
console.log(`wrote ${keys.filter((k) => !k.endsWith("|Support")).length} of ${lanerRoles.length} Top/Mid/Bot roles, `
  + `${keys.filter((k) => k.endsWith("|Support")).length} of ${supportRoles.length} Support roles, ${pairOk} matchups, ${SETS.length} distinct sets (window ${WINDOW})`);
console.log(`  matchups skipped: ${pairThin} under ${MIN_PAIR} games, ${pairFailed} pages failed`);
if (missing.length) console.log(`  no role data: ${missing.join(", ")}`);
if (problems.length) console.log(`  sets left out:\n    ${problems.join("\n    ")}`);
console.log(`  ${Object.keys(pets).length} junglers' most common pet`);
console.log(`Jungle / Support most common starting sets:`);
for (const line of offLane.sort()) console.log(`  ${line}`);
