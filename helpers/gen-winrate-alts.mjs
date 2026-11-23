// ─────────────────────────────────────────────────────────────────────────────
//  gen-winrate-alts.mjs — a "Higher win rate" alternate where the data earns one.
//
//  The owner's rule (2026-11-23): the most popular build stays the Standard (the
//  role's main build); a build that wins clearly more often becomes an alternate,
//  labelled "Higher win rate" (separate from the Meme builds). "Clearly" means its
//  win-rate gap beats two standard errors (50/sqrt(n) per side) with at least
//  MIN_GAMES games and MIN_PICK % of the role's picks: inside the noise, nothing
//  is added.
//
//  Two checks per champion-role, from lolalytics (Emerald+, the bundled patch):
//    keystone    build page `runes.stats` [pick%, wr, games] per keystone; the
//                rows come from the page's Highest Win rune page, used only when
//                that page runs the same keystone (else the role is reported, not
//                guessed).
//    first item  build page `item1` [id, wr, pick%, games] (first items
//                compare like for like; deeper slots are inflated by survivorship).
//                The alternate's path is the most played 3-item order that opens
//                with it, plus the Standard build's boots in the same slot.
//  A role whose authored alternates already run that keystone or first item is
//  skipped: the hand-written alternate covers it.
//
//  Writes src/data/winrateAlts.js; src/data/champs/index.js appends each entry to
//  champ.altBuilds[role]. Report-only source: run by hand each patch
//  (`npm run gen:wralts`), never in CI. Pages cached under .scratch/wralts/<patch>/.
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { mainObject } from "./lolalytics-page.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ver = fs.readFileSync(path.join(ROOT, "public", "ddragon", "version.txt"), "utf8").trim();
const patch = ver.split(".").slice(0, 2).join(".");
const gamePatch = `${+patch.split(".")[0] + 10}.${patch.split(".")[1]}`;   // 16.23 -> 26.23, as the app shows it
const { CHAMPS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "champs", "index.js")).href);
// The bundled runesReforged.json is a flat name map; the tree structure comes from Riot for the same version.
const trees = await (await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/runesReforged.json`)).json();
const items = JSON.parse(fs.readFileSync(path.join(ROOT, "public", "ddragon", "data", "item.json"), "utf8")).data;

const MIN_GAMES = 2000, MIN_PICK = 10, ITEM_MIN_SHARE = 10;
const LANE = { Top: "top", Jungle: "jungle", Mid: "middle", Bot: "bottom", Support: "support" };
const SLUG = { MonkeyKing: "wukong" };
const SHARD = { 5008: "Adaptive Force", 5005: "Attack Speed", 5007: "Ability Haste", 5010: "Move Speed",
  5001: "Health (scaling)", 5011: "Health", 5013: "Tenacity" };
const BOOTS = /Greaves|Shoes|Steelcaps|Treads|Boots|Swiftmarch|Soles|Souls|Advance|Crushers|Lucidity|Forward/;
const SKIP_ITEM = /Bloodsong|Celestial Opposition|Dream Maker|Solstice Sleigh|Zaz'Zak|World Atlas|Runic Compass|Bounty of Worlds/;
const name = {}, tree = {}, keystones = new Set();
for (const t of trees) for (const [i, s] of t.slots.entries()) for (const r of s.runes) { name[r.id] = r.name; tree[r.id] = t.name; if (i === 0) keystones.add(r.id); }
const itemName = (id) => items[id]?.name || null;
const se = (n) => 50 / Math.sqrt(n);
const clear = (a, b) => b.wr - a.wr > 2 * Math.hypot(se(a.n), se(b.n));
const split = (p) => String(p || "").split("›").map((s) => s.trim()).filter(Boolean);
const CACHE = path.join(ROOT, ".scratch", "wralts", patch);
fs.mkdirSync(CACHE, { recursive: true });
const sleep = (ms) => new Promise((ok) => setTimeout(ok, ms));

async function cached(file, fetcher) {
  const f = path.join(CACHE, file);
  if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, "utf8"));
  for (let a = 1; a <= 3; a++) {
    try { const v = await fetcher(); fs.writeFileSync(f, JSON.stringify(v)); await sleep(600); return v; }
    catch (e) { if (a === 3) { console.warn(`  ${file}: ${e.message}`); return null; } await sleep(2000 * a); }
  }
}
const pageOf = (slug, lane) => cached(`${slug}-${lane}.page.json`, async () => {
  const res = await fetch(`https://lolalytics.com/lol/${slug}/build/?lane=${lane}&tier=emerald_plus&patch=${patch}`, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const m = mainObject(await res.text());
  if (!m?.header) throw new Error("no embedded data");
  return { n: m.header.n, stats: m.runes?.stats || {}, win: m.summary?.win?.runes || null, item1: m.item1 || [] };
});
const setsOf = (slug, lane) => cached(`${slug}-${lane}.sets.json`, async () => {
  const res = await fetch(`https://a1.lolalytics.com/mega/?ep=build-itemset&v=1&patch=${patch}&c=${slug}&lane=${lane}&tier=emerald_plus&queue=ranked&region=all`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const j = await res.json();
  return { s1: j.itemSets?.itemSet1 || [], s3: j.itemSets?.itemSet3 || [] };
});

const out = {}, report = [];
for (const c of CHAMPS) {
  for (const [role, r] of Object.entries(c.roles || {})) {
    const lane = LANE[role]; if (!lane) continue;
    const slug = SLUG[c.dd] || c.dd.toLowerCase();
    const main = r.data?.JUGGERNAUT?.runes || Object.values(r.data || {})[0]?.runes;
    const alts = (c.altBuilds?.[role] || []).filter((a) => !a.generated);
    const page = await pageOf(slug, lane), sets = await setsOf(slug, lane);
    if (!page || !main) continue;

    // 1) keystone
    let runes = null, ksNote = null;
    const ksStat = (id) => { const s = page.stats[id]?.[0]; return s ? { pick: s[0], wr: s[1], n: s[2] } : null; };
    const mainId = Object.keys(name).find((id) => name[id] === main.keystone && keystones.has(+id));
    const a = mainId && ksStat(mainId);
    if (a && a.n >= 300) {
      const best = [...keystones].map((id) => ({ id, ...ksStat(id) }))
        .filter((b) => b.n >= MIN_GAMES && b.pick >= MIN_PICK && String(b.id) !== String(mainId) && clear(a, b))
        .sort((x, y) => (y.wr - a.wr) - (x.wr - a.wr))[0];
      if (best && !alts.some((al) => (al.runes?.keystone) === name[best.id])) {
        const w = page.win?.set;
        if (w && +w.pri?.[0] === +best.id && w.sec?.length === 2 && w.mod?.length === 3) {
          runes = { keystone: name[best.id], primary: tree[best.id], primaryRunes: w.pri.slice(1).map((i) => name[i]),
            secondary: tree[w.sec[0]], secondaryRunes: w.sec.map((i) => name[i]), shards: w.mod.map((i) => SHARD[i] || String(i)),
            reason: `${name[best.id]} wins more often here than ${main.keystone}: ${best.wr}% to ${a.wr}% on ${gamePatch}.` };
          ksNote = { from: main.keystone, to: name[best.id], wr: best.wr, n: best.n, base: a.wr };
        } else report.push(`${c.display} ${role}: ${name[best.id]} ${best.wr}% (${best.n}g) beats ${main.keystone} ${a.wr}%, but the Highest Win page runs another keystone: not generated`);
      }
    }

    // 2) first item
    let corePath = null, itNote = null;
    const path0 = split(r.corePath), mainFirst = path0.find((n) => !BOOTS.test(n));
    // The page's first-item table [id, wr, pick%, games]. NOT the endpoint's itemSet1, which counts games that
    // ended with exactly one finished item (mostly short losses, ~30% win rates).
    const firsts = (page.item1 || []).map(([id, wr, , g]) => ({ item: itemName(id), n: g, wr }))
      .filter((x) => x.item && !BOOTS.test(x.item) && !SKIP_ITEM.test(x.item));
    const tot = firsts.reduce((s, x) => s + x.n, 0);
    const fa = firsts.find((x) => x.item === mainFirst);
    if (fa && fa.n >= 300 && tot) {
      const fb = firsts.filter((x) => x.item !== mainFirst && x.n >= MIN_GAMES && (100 * x.n) / tot >= ITEM_MIN_SHARE && clear(fa, x))
        .sort((x, y) => y.wr - x.wr)[0];
      if (fb && !alts.some((al) => split(al.corePath).find((n) => !BOOTS.test(n)) === fb.item)) {
        const tri = (sets.s3 || []).map(([k, g]) => ({ seq: k.split("_").map(itemName).filter((n) => n && !BOOTS.test(n)), g }))
          .filter((t) => t.seq[0] === fb.item && t.seq.length >= 3).sort((x, y) => y.g - x.g)[0];
        if (tri) {
          const bootsAt = path0.findIndex((n) => BOOTS.test(n));
          const seq = tri.seq.slice(0, 3);
          if (bootsAt >= 0) seq.splice(Math.min(bootsAt, seq.length), 0, path0[bootsAt]);
          corePath = seq.join("  ›  ");
          itNote = { from: mainFirst, to: fb.item, wr: +fb.wr.toFixed(1), n: fb.n, base: +fa.wr.toFixed(1) };
        }
      }
    }

    if (!runes && !corePath) continue;
    const bits = [];
    if (itNote) bits.push(`${itNote.to} first wins ${itNote.wr}% to ${itNote.from}'s ${itNote.base}%`);
    if (ksNote) bits.push(`${ksNote.to} wins ${ksNote.wr}% to ${ksNote.from}'s ${ksNote.base}%`);
    out[`${c.dd}|${role}`] = {
      label: "Higher win rate", tag: "alt", generated: true,
      corePath: corePath || r.corePath,
      coreNote: `Wins more often than the standard build on ${gamePatch}, though fewer players run it: ${bits.join("; ")}.`,
      runes: runes || { ...main },
      sideItems: r.sideItems || [],
      research: { patch, ...(ksNote ? { keystone: ksNote } : {}), ...(itNote ? { firstItem: itNote } : {}) },
    };
  }
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(ROOT, "src", "data", "winrateAlts.js"),
`// GENERATED by helpers/gen-winrate-alts.mjs (npm run gen:wralts) — do not edit by hand.
// Source: lolalytics, patch ${patch}, Emerald+, fetched ${today}. A "Higher win rate" alternate per
// champion-role where a keystone or first item wins clearly more often than the Standard build
// (gap > 2 standard errors, >= ${MIN_GAMES} games). Appended to champ.altBuilds by champs/index.js.
export const WINRATE_ALTS = {
${Object.entries(out).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n")}
};
`);
console.log(`gen-winrate-alts: ${Object.keys(out).length} "Higher win rate" alternates, patch ${patch}`);
for (const [k, v] of Object.entries(out)) console.log(`  ${k.padEnd(20)} ${v.coreNote.replace(/^Wins more often than the standard build on [\d.]+, though fewer players run it: /, "")}`);
if (report.length) { console.log("\nNot generated:"); report.forEach((l) => console.log("  " + l)); }
