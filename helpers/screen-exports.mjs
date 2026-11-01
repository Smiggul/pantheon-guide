// ─────────────────────────────────────────────────────────────────────────────
//  screen-exports.mjs: would every build import into the League client?
//
//  Runs the app's own export (buildExport, the call sendToLeague makes) for
//  every champion, role and build (primary and every alternate), against every
//  roster champion as the lane opponent and with none, in both modes, and with
//  the matchup's one-click rune swaps applied (gamePlan's lane page). Then it
//  checks the payloads against Riot's own data for the bundled patch:
//
//   Rune page  the import's pre-flight passes; 9 perk ids; keystone, primary and
//              secondary runes exist in the declared trees, one per row; each
//              shard id is one Riot's row offers (the client maps a wrong-row
//              shard to something else: Volibear, 2026-11-01).
//   Item set   every id is a purchasable Summoner's Rift item; no empty block;
//              block titles within the 24-character budget the in-game shop
//              shows; no item twice outside the rebuys; a lane start costs at
//              most 500 gold; the title leads with "FRGE.GG" (main.cjs replaces
//              earlier sets by that prefix).
//
//  Riot's data comes from Data Dragon for public/ddragon/version.txt, so the
//  checks follow the patch the app ships with. Report only; exit 1 on problems.
//
//  Run:  node helpers/screen-exports.mjs [--quick]   (--quick: no opponents)
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imp = (p) => import(pathToFileURL(path.join(ROOT, p)).href);
const { CHAMPS } = await imp("src/data/champs/index.js");
const { buildExport } = await imp("src/data/lcuExport.js");
const { gamePlan } = await imp("src/data/gamePlan.js");
const { classOf } = await imp("src/data/champClasses.js");

const ver = fs.readFileSync(path.join(ROOT, "public/ddragon/version.txt"), "utf8").trim();
const cdn = `https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US`;
const items = (await (await fetch(`${cdn}/item.json`)).json()).data;
const trees = await (await fetch(`${cdn}/runesReforged.json`)).json();

// Riot's stat shard rows (offense, flex, defense).
const SHARD_ROWS = [[5008, 5005, 5007], [5008, 5010, 5001], [5011, 5013, 5001]];
const START_TYPES = /^(Start|Jungle pet)/;
const REBUY = new Set(["2003", "2031", "2055", "3340", "3363", "3364"]);
const TITLE_MAX = 24;

const treeOf = {}, rowOf = {}, keystones = new Set();
for (const t of trees) for (const [r, slot] of t.slots.entries()) for (const rune of slot.runes) {
  treeOf[rune.id] = t.id; rowOf[rune.id] = r; if (r === 0) keystones.add(rune.id);
}

const problems = new Map();   // message -> [count, first example]
const note = (msg, where) => {
  const p = problems.get(msg);
  if (p) p[0]++; else problems.set(msg, [1, where]);
};

function checkRunes(exp, where) {
  if (!exp.runeValid) {
    note(`rune page fails the import pre-flight: ${[...exp.runeMissing, ...exp.runeWrongTree].join("; ") || "incomplete"}`, where);
    return;
  }
  const { primaryStyleId: p, subStyleId: s, selectedPerkIds: ids } = exp.runePage;
  if (ids.length !== 9) return note(`rune page has ${ids.length} perks, not 9`, where);
  const [ks, ...rest] = ids;
  if (!keystones.has(ks) || treeOf[ks] !== p) note(`keystone ${ks} is not a keystone of tree ${p}`, where);
  const prim = rest.slice(0, 3), sec = rest.slice(3, 5), shards = rest.slice(5);
  const primRows = prim.map((id) => (treeOf[id] === p ? rowOf[id] : -1));
  if (primRows.some((r) => r < 1) || new Set(primRows).size !== 3) note(`primary runes not one per row of tree ${p}: ${prim}`, where);
  const secRows = sec.map((id) => (treeOf[id] === s ? rowOf[id] : -1));
  if (secRows.some((r) => r < 1) || new Set(secRows).size !== 2) note(`secondary runes not two rows of tree ${s}: ${sec}`, where);
  if (p === s) note("primary and secondary trees are the same", where);
  shards.forEach((id, k) => {
    if (!SHARD_ROWS[k].includes(id)) note(`shard row ${k + 1} gets ${id}, which that row does not offer`, where);
  });
}

function checkItems(set, where) {
  if (!String(set.title).startsWith("FRGE.GG")) note("item set title does not start with FRGE.GG", where);
  const seen = new Set();
  for (const b of set.blocks) {
    if (!b.items.length) note(`empty block "${b.type}"`, where);
    if (b.type.length > TITLE_MAX) note(`block title over ${TITLE_MAX} characters: "${b.type.replace(/vs .*/, "vs <foe>")}"`, `${where} [${b.type}]`);
    let gold = 0;
    for (const { id, count } of b.items) {
      const it = items[id];
      if (!it) { note(`item id ${id} is not in Data Dragon ${ver}`, where); continue; }
      if (!it.maps?.["11"]) note(`${it.name} (${id}) is not sold on Summoner's Rift`, where);
      // Earned items (support quest upgrades) carry a specialRecipe; anything
      // else out of the store has been taken out of the shop.
      if (it.inStore === false && !it.specialRecipe) note(`${it.name} (${id}) is no longer in the shop`, where);
      else if (it.gold?.purchasable === false && !it.specialRecipe) note(`${it.name} (${id}) cannot be bought`, where);
      else if (it.specialRecipe && !/Support item|Start/.test(b.type)) note(`${it.name} (${id}) is earned, not bought`, `${where} [${b.type}]`);
      if (!(count >= 1)) note(`${it.name} has count ${count}`, where);
      if (!REBUY.has(id)) {
        if (seen.has(id)) note(`${it.name} listed twice in one set`, `${where} [${b.type}]`);
        seen.add(id);
      }
      gold += (it.gold?.total || 0) * (count || 1);
    }
    if (START_TYPES.test(b.type) && gold > 500) note(`a start block costs ${gold} gold`, `${where} [${b.type}]`);
  }
}

const quick = process.argv.includes("--quick");
const foes = [null, ...(quick ? [] : CHAMPS)];
let exports = 0;
const t0 = Date.now();
for (const champ of CHAMPS) {
  for (const [role, roleData] of Object.entries(champ.roles || {})) {
    const builds = [null, ...(champ.altBuilds?.[role] || [])];
    for (const alt of builds) {
      for (const foe of foes) {
        if (foe && foe.dd === champ.dd) continue;
        const cls = (foe && classOf(foe.dd)) || Object.keys(roleData.data || {})[0];
        // The page the app shows: the class page with this opponent's override,
        // or the alternate's own page.
        const base = alt ? alt.runes : roleData.data?.[cls]?.runes;
        const over = !alt && foe ? base?.champOverrides?.[foe.dd] : null;
        const { champOverrides: _drop, ...page } = { ...(base || {}), ...(over || {}) };
        for (const mode of ["behind", "ahead"]) {
          const where = `${champ.dd} ${role}${alt ? ` "${alt.label}"` : ""}${foe ? ` vs ${foe.dd}` : ""} ${mode}`;
          const exp = buildExport(champ, role, cls, alt, page, null, foe, { mode, enemies: [] });
          exports++;
          checkRunes(exp, where);
          checkItems(exp.itemSet, where);
          // The matchup's one-click rune swaps (what "Apply" imports).
          if (foe && mode === "behind") {
            const plan = gamePlan({ champ, roleName: role,
              roleData: alt ? { ...roleData, corePath: alt.corePath, sideItems: alt.sideItems || roleData.sideItems } : roleData,
              enemyClass: cls, mode, foe, enemies: [], page, curated: !!over });
            if (plan?.lane?.page) {
              const swapped = buildExport(champ, role, cls, alt, plan.lane.page, null, foe, { mode, enemies: [] });
              exports++;
              checkRunes(swapped, `${where} (matchup swaps)`);
            }
          }
        }
      }
    }
  }
}

const secs = ((Date.now() - t0) / 1000).toFixed(0);
if (!problems.size) {
  console.log(`screen-exports: ${exports} exports (${ver}), all importable  [${secs}s]`);
} else {
  console.log(`screen-exports: ${exports} exports (${ver}), ${problems.size} kind(s) of problem  [${secs}s]\n`);
  for (const [msg, [n, ex]] of [...problems].sort((a, b) => b[1][0] - a[1][0])) {
    console.log(`  ${String(n).padStart(6)} × ${msg}\n           e.g. ${ex}`);
  }
  process.exit(1);
}
