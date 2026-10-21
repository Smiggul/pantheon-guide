// ─────────────────────────────────────────────────────────────────────────────
//  gen-boots-timing.mjs — when does each champion-role finish its boots?
//
//  Writes src/data/bootsTiming.js from lolalytics' raw build pages (Emerald+).
//  Each page embeds its tables in a `qwik/json` script; three of them are read:
//    Starting Item Sets   ["1055_2003", wr, pick%, games]  -> games, level-1 boots
//    Early Items (10 min) [id, wr, pick%, games]           -> tier-1 Boots by 10 min
//    Sets With Boots      ["a_b_c", wr, pick%, games]      -> the first three
//                         finished items in buying order, boots included, so the
//                         boots' position (before item 1, after item 1, later)
//  Only the counts are kept. The build-itemset endpoint used by audit-builds
//  drops boots from its orders, so it cannot answer this.
//
//  Why it exists: the owner wanted boots timing modelled ("some games you buy
//  boots at level 1 or before the first item, others only after it"). Checked on
//  16.20 first: level-1 boots is ~0% in every Top role sampled, and finishing the
//  boots before item 1 is a champion habit (Yone 83%, Garen 61%, Darius 51%,
//  Pantheon 16%), not something most matchups move. See CLAUDE.md.
//
//  Unofficial pages: expect the layout to change. Report-only, not for CI.
//  Run:  node helpers/gen-boots-timing.mjs [patch]      (default: bundled patch)
//  A patch only days old is thin; pass the previous one (e.g. 16.20) instead.
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ver = fs.readFileSync(path.join(ROOT, "public", "ddragon", "version.txt"), "utf8").trim();
const arg = process.argv[2] && process.argv[2] !== "--file" ? process.argv[2] : null;
const patch = arg || ver.split(".").slice(0, 2).join(".");
const { CHAMPS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "champs", "index.js")).href);

const LANE = { Top: "top", Jungle: "jungle", Mid: "middle", Bot: "bottom", Support: "support" };
const SLUG = { MonkeyKing: "wukong" };
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
// Finished boots: tier 2 (Berserker's, Gluttonous, Swiftness, Symbiotic, Sorcerer's,
// Steelcaps, Mercury's, Lucidity) and the tier-3 upgrades. 1001 is the tier-1 Boots.
const T2 = new Set([3006, 3008, 3009, 3010, 3020, 3047, 3111, 3158, 3117, 3170, 3171, 3172, 3173, 3174, 3175, 3176]);
const START_MARK = new Set(["2003", "2031", "1055", "1056", "1054", "1082", "1083", "1101", "1102", "1103"]);

function parse(html) {
  const tag = '<script type="qwik/json">';
  const i = html.indexOf(tag);
  if (i < 0) return null;
  const objs = JSON.parse(html.slice(i + tag.length, html.indexOf("</script>", i))).objs;
  const ref = (v) => (typeof v === "string" && /^[0-9a-z]+$/.test(v) ? parseInt(v, 36) : null);
  const res = (v, d = 0) => {
    const r = ref(v);
    if (r == null || r < 0 || r >= objs.length) return v;
    const o = objs[r];
    if (d > 6) return o;
    if (Array.isArray(o)) return o.map((x) => res(x, d + 1));
    return o;
  };
  const tables = [];
  for (const o of objs) {
    if (!Array.isArray(o) || !o.length || !o.every((x) => typeof x === "string")) continue;
    const rows = o.map((x) => res(x));
    if (rows.every((r) => Array.isArray(r) && r.length >= 4 && r.length <= 5 && typeof r[1] === "number")) tables.push(rows);
  }
  const keyParts = (r) => String(r[0]).split("_");
  const out = {};
  // Starting Item Sets: string keys of starting consumables, no finished boots.
  const start = tables.find((rows) => rows.every((r) => typeof r[0] === "string")
    && rows.some((r) => keyParts(r).some((x) => START_MARK.has(x)))
    && !rows.some((r) => keyParts(r).some((x) => T2.has(+x))));
  if (start) {
    const tot = start.reduce((a, r) => a + r[3], 0);
    out.games = tot;
    out.lv1 = +(100 * start.filter((r) => keyParts(r).includes("1001")).reduce((a, r) => a + r[3], 0) / Math.max(1, tot)).toFixed(1);
  }
  // Early Items (10 min): the integer-keyed 4-column table that holds Boots and is
  // not the Starting Items table (which holds the potion / Doran's).
  const int4 = tables.filter((rows) => rows[0].length === 4 && rows.every((r) => Number.isInteger(r[0])));
  const startSingle = int4.find((rows) => rows.some((r) => [2003, 2031, 1055, 1056, 1054].includes(r[0])));
  const early = int4.find((rows) => rows !== startSingle && rows.some((r) => r[0] === 1001));
  if (early) out.early = early.find((r) => r[0] === 1001)[2];
  // Boots: [id, wr, pick%, games, minute], mostly boots ids. The most bought
  // finished pair, and the average minute the finished boots are completed.
  const boots = tables.find((rows) => rows[0].length === 5 && (T2.has(rows[0][0]) || rows[0][0] === 1001)
    && rows.filter((r) => T2.has(r[0]) || r[0] === 1001 || r[0] === 2422).length >= 0.6 * rows.length);
  if (boots) {
    const fin = boots.filter((r) => T2.has(r[0])).sort((a, b) => b[3] - a[3]);
    if (fin.length) {
      out.pair = fin[0][0];
      out.pairPct = fin[0][2];
      out.minute = +(fin.reduce((a, r) => a + r[3] * r[4], 0) / Math.max(1, fin.reduce((a, r) => a + r[3], 0))).toFixed(1);
    }
  }
  // Item 1: the non-boots [id, wr, pick%, games, minute] table whose shares sum
  // to ~100% and whose average minute is lowest (Item 2, 3... come later; the
  // Popular / All Items tables mix slots and sum past 100%).
  const slots = tables.filter((rows) => rows[0].length === 5 && rows.every((r) => Number.isInteger(r[0]))
    && !rows.some((r) => T2.has(r[0]) || r[0] === 1001))
    .map((rows) => ({ rows, pk: rows.reduce((a, r) => a + r[2], 0),
      min: rows.reduce((a, r) => a + r[3] * r[4], 0) / Math.max(1, rows.reduce((a, r) => a + r[3], 0)) }))
    .filter((t) => t.pk >= 80 && t.pk <= 101)
    .sort((a, b) => a.min - b.min);
  if (slots.length) out.item1Min = +slots[0].min.toFixed(1);
  // Sets With Boots: three-part keys holding finished boots.
  const sets = tables.find((rows) => rows.every((r) => typeof r[0] === "string" && keyParts(r).length === 3)
    && rows.some((r) => keyParts(r).some((x) => T2.has(+x))));
  if (sets) {
    const pos = [0, 0, 0]; let tot = 0;
    for (const r of sets) {
      const b = keyParts(r).findIndex((x) => T2.has(+x));
      if (b < 0) continue;
      pos[b] += r[3]; tot += r[3];
    }
    out.sets = tot;
    [out.first, out.second, out.third] = pos.map((p) => +(100 * p / Math.max(1, tot)).toFixed(1));
  }
  return out;
}

// --file <saved page.html>: parse one page that is already on disk, print, exit.
if (process.argv[2] === "--file") {
  console.log(parse(fs.readFileSync(process.argv[3], "utf8")));
  process.exit(0);
}

async function page(c, role) {
  const slug = SLUG[c.dd] || c.dd.toLowerCase();
  const url = `https://lolalytics.com/lol/${slug}/build/?lane=${LANE[role]}&tier=emerald_plus&patch=${patch}`;
  for (let a = 0; a < 3; a++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": UA } });
      if (res.ok) { const p = parse(await res.text()); if (p) return p; }
    } catch { /* retry */ }
    await new Promise((ok) => setTimeout(ok, 2000));
  }
  return null;
}

const rows = {};
const jobs = CHAMPS.flatMap((c) => Object.keys(c.roles || {}).map((role) => [c, role]));
let done = 0;
for (let i = 0; i < jobs.length; i += 3) {
  await Promise.all(jobs.slice(i, i + 3).map(async ([c, role]) => {
    const p = await page(c, role);
    rows[`${c.dd}|${role}`] = p && p.sets ? p : null;
    done++;
  }));
  if (done % 30 < 3) console.error(`${done}/${jobs.length}`);
  await new Promise((ok) => setTimeout(ok, 700));
}

const keys = Object.keys(rows).sort();
const itemJson = (await (await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/item.json`)).json()).data;
const lines = keys.filter((k) => rows[k]).map((k) => {
  const r = rows[k];
  const pair = r.pair ? JSON.stringify(itemJson[r.pair]?.name || String(r.pair)) : "null";
  return `  ${JSON.stringify(k)}: { games: ${r.games ?? 0}, sets: ${r.sets}, first: ${r.first}, second: ${r.second}, third: ${r.third}, `
    + `early: ${r.early ?? 0}, lv1: ${r.lv1 ?? 0}, pair: ${pair}, pairPct: ${r.pairPct ?? 0}, minute: ${r.minute ?? 0}, item1Min: ${r.item1Min ?? 0} },`;
});
const missing = keys.filter((k) => !rows[k]);
const file = `// Generated by helpers/gen-boots-timing.mjs from lolalytics build pages
// (Emerald+, patch ${patch}). Do not edit by hand; re-run the helper instead.
//
// Per champion-role, in percent:
//   first / second / third  where the finished boots fall among the first three
//                           finished items (first = before item 1)
//   early                   games with tier-1 Boots bought in the first 10 minutes
//   lv1                     games that start with Boots
//   pair, pairPct           the most bought finished boots and its share of games
//   minute, item1Min        average minute the finished boots / the first item complete
//   games, sets             sample sizes (all games; games with three items incl. boots)
${missing.length ? `// No data for: ${missing.join(", ")}\n` : ""}export const BOOTS_PATCH = ${JSON.stringify(patch)};

export const BOOTS_TIMING = {
${lines.join("\n")}
};
`;
fs.writeFileSync(path.join(ROOT, "src", "data", "bootsTiming.js"), file);
console.log(`wrote ${lines.length} roles (${missing.length} without data) for patch ${patch}`);
