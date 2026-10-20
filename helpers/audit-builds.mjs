// ─────────────────────────────────────────────────────────────────────────────
//  audit-builds.mjs — does every role's main build open the way players do?
//
//  For each champion-role it reads lolalytics' exact build-order sets for the
//  bundled patch (Emerald+) and compares the corePath's first item, and its
//  first two items, with the most common opening. Boots and support quest items
//  are skipped on both sides. It only reports.
//
//  Why this exists: on 26.20 it found 43 of 257 roles opening with an item a
//  small minority of players buy, several of them marked "verified" in
//  CLAUDE.md. The reason is that a plain fetch of a lolalytics build page
//  returns its HIGHEST WIN tab, not Most Common, so a sweep that reads pages
//  that way records the wrong build as the meta. The build-itemset endpoint
//  used here counts real purchase orders, so it does not have that problem.
//
//  It is an unofficial endpoint: expect it to change without notice, and do not
//  wire it into CI. Data is thin for a few days after a patch.
//
//  Run:  node helpers/audit-builds.mjs [out.json]
//  A role is flagged when the most common opener is at least 1.5x the app's and
//  ahead by 15+ points (12+ for the first-two pair). Treat "(thin)" rows
//  (under 3k games) with care.
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ver = fs.readFileSync(path.join(ROOT, "public", "ddragon", "version.txt"), "utf8").trim();
const patch = ver.split(".").slice(0, 2).join(".");                // 16.20.1 -> 16.20
const { CHAMPS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "champs", "index.js")).href);
const it = (await (await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/item.json`)).json()).data;
const nm = (id) => it[id]?.name || `#${id}`;

const SKIP = /Greaves|Shoes|Steelcaps|Treads|Boots|Swiftmarch|Soles|Souls|Advance|Crushers|Lucidity|Forward|Bloodsong|Celestial Opposition|Dream Maker|Solstice Sleigh|Zaz'Zak|World Atlas|Runic Compass|Bounty of Worlds/;
const LANE = { Top: "top", Jungle: "jungle", Mid: "middle", Bot: "bottom", Support: "support" };
const SLUG = { MonkeyKing: "wukong" };                              // lolalytics' name where it differs from the dd key
const items = (p) => String(p || "").split("›").map((s) => s.trim()).filter((s) => s && !SKIP.test(s));

const rows = [];
async function audit(c, role, r) {
  const slug = SLUG[c.dd] || c.dd.toLowerCase();
  const url = `https://a1.lolalytics.com/mega/?ep=build-itemset&v=1&patch=${patch}&c=${slug}&lane=${LANE[role]}&tier=emerald_plus&queue=ranked&region=all`;
  let j;
  for (let a = 0; a < 3 && !j; a++) {
    try { const res = await fetch(url); if (res.ok) j = await res.json(); } catch { /* retry */ }
    if (!j) await new Promise((ok) => setTimeout(ok, 1500));
  }
  const at = `${c.dd} ${role}`;
  if (!j?.itemSets) { rows.push({ at, err: "no data" }); return; }
  const first = {}, pair = {};
  for (let n = 1; n <= 5; n++) for (const [k, g] of j.itemSets[`itemSet${n}`] || []) {
    const s = k.split("_").map(nm).filter((x) => !SKIP.test(x));
    if (!s[0]) continue;
    first[s[0]] = (first[s[0]] || 0) + g;
    if (s[1]) pair[`${s[0]} > ${s[1]}`] = (pair[`${s[0]} > ${s[1]}`] || 0) + g;
  }
  const tot = Object.values(first).reduce((a, b) => a + b, 0);
  const ptot = Object.values(pair).reduce((a, b) => a + b, 0);
  if (!tot) { rows.push({ at, err: "empty" }); return; }
  const [topF, topG] = Object.entries(first).sort((a, b) => b[1] - a[1])[0];
  const [topP, topPG] = Object.entries(pair).sort((a, b) => b[1] - a[1])[0] || ["", 0];
  const mine = items(r.corePath);
  const myF = mine[0], myP = mine.slice(0, 2).join(" > ");
  rows.push({ at, games: tot,
    myF, myFs: (first[myF] || 0) / tot, topF, topFs: topG / tot,
    myP, myPs: (pair[myP] || 0) / ptot, topP, topPs: topPG / ptot });
}

const jobs = CHAMPS.flatMap((c) => Object.entries(c.roles || {}).map(([role, r]) => () => audit(c, role, r)));
for (let i = 0; i < jobs.length; i += 4) await Promise.all(jobs.slice(i, i + 4).map((f) => f()));

const pct = (x) => (100 * x).toFixed(0).padStart(3) + "%";
const thin = (r) => (r.games < 3000 ? "  (thin)" : "");
const firstOff = rows.filter((r) => !r.err && r.topF !== r.myF && r.topFs >= 1.5 * r.myFs && r.topFs - r.myFs >= 0.15);
const pairOff = rows.filter((r) => !r.err && !firstOff.includes(r) && r.topP && r.topP !== r.myP
  && r.topPs >= 1.5 * r.myPs && r.topPs - r.myPs >= 0.12);

console.log(`audit-builds: ${rows.length} champion-roles, patch ${patch}, Emerald+; ${rows.filter((r) => r.err).length} without data`);
console.log(`\nFIRST ITEM differs from the most common opener (${firstOff.length}):`);
for (const r of firstOff.sort((a, b) => b.games - a.games))
  console.log(`  ${r.at.padEnd(20)} ${String(r.games).padStart(7)}g  app ${pct(r.myFs)} ${String(r.myF).padEnd(26)} top ${pct(r.topFs)} ${r.topF}${thin(r)}`);
console.log(`\nFIRST TWO differ, first item matches (${pairOff.length}):`);
for (const r of pairOff.sort((a, b) => b.games - a.games))
  console.log(`  ${r.at.padEnd(20)} ${String(r.games).padStart(7)}g  app ${pct(r.myPs)} ${r.myP.padEnd(44)} top ${pct(r.topPs)} ${r.topP}${thin(r)}`);
const missing = rows.filter((r) => r.err).map((r) => r.at);
if (missing.length) console.log(`\nno data: ${missing.join(", ")}`);
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(rows, null, 1));
