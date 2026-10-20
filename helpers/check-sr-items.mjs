// ─────────────────────────────────────────────────────────────────────────────
//  check-sr-items.mjs — is every item the app recommends actually sold on
//  Summoner's Rift?
//
//  Every other check (patch-diff, champion-validator, the export lookup) asks
//  whether an item NAME exists in Data Dragon. That is not the same question.
//  Duskblade of Draktharr exists — as an Arena item — so it passed all of them
//  while being impossible to buy on the Rift, and sat in a Volibear Top alternate
//  and 42 situational slots. Vigilant Wardstone, removed from the game outright
//  (it is on no map at all), was recommended 50 times the same way.
//
//  This reads Riot's FULL item.json for the bundled version (the project's own
//  public copy is slimmed and drops `maps`) and accepts a name only if some id
//  with that name is available on map 11. Quest upgrades that are earned rather
//  than bought (support items) are on map 11 but not purchasable; they pass.
//
//  It also checks that every name resolves in lcuData's ITEM_IDS, without which
//  the client export drops the item silently.
//
//  Run:  node helpers/check-sr-items.mjs        (exit 1 on any problem)
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ver = fs.readFileSync(path.join(ROOT, "public", "ddragon", "version.txt"), "utf8").trim();
const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/item.json`);
if (!res.ok) { console.error(`check-sr-items: could not fetch item.json for ${ver} (${res.status})`); process.exit(2); }
const items = (await res.json()).data;

// name -> { onRift, anywhere }
const byName = new Map();
for (const it of Object.values(items)) {
  const e = byName.get(it.name) || { onRift: false, modes: new Set() };
  if (it.maps?.["11"]) e.onRift = true;
  for (const [m, on] of Object.entries(it.maps || {})) if (on) e.modes.add(m);
  byName.set(it.name, e);
}

const { CHAMPS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "champs", "index.js")).href);
const split = (p) => String(p || "").split("›").map((s) => s.trim()).filter(Boolean);

// item name -> Set of places it is recommended
const uses = new Map();
const note = (name, where) => {
  if (!name) return;
  if (!uses.has(name)) uses.set(name, new Set());
  uses.get(name).add(where);
};

for (const c of CHAMPS) {
  for (const [role, r] of Object.entries(c.roles || {})) {
    const at = `${c.dd} ${role}`;
    split(r.corePath).forEach((n) => note(n, `${at} core`));
    (r.sideItems || []).forEach((n) => note(n, `${at} side`));
    for (const [cls, v] of Object.entries(r.data || {})) {
      for (const k of ["ahead", "behind"]) (v[k] || []).forEach((e) => note(e?.name, `${at} ${cls}`));
    }
  }
  for (const [role, alts] of Object.entries(c.altBuilds || {})) {
    for (const a of alts) {
      const at = `${c.dd} ${role} alt "${a.label}"`;
      split(a.corePath).forEach((n) => note(n, `${at} core`));
      (a.sideItems || []).forEach((n) => note(n, `${at} side`));
    }
  }
}

// The client export resolves names through lcuData's ITEM_IDS, which
// gen-lcu-data only fills with names the roster used WHEN IT LAST RAN. A newly
// recommended item (Yun Tal Wildarrows, on 26.20) passes every other check and
// is then silently dropped from the exported item set.
const { ITEM_IDS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "lcuData.js")).href);

const notOnRift = [], unknown = [], noExportId = [];
for (const [name, where] of uses) {
  const e = byName.get(name);
  if (!e) unknown.push([name, where]);
  else if (!e.onRift) notOnRift.push([name, where, [...e.modes].join(",") || "none"]);
  else if (ITEM_IDS[name.toLowerCase()] == null) noExportId.push([name, where]);
}

const show = (list, head, extra) => {
  if (!list.length) return;
  console.log(`\n${head}`);
  for (const [name, where, modes] of list.sort((a, b) => b[1].size - a[1].size)) {
    const w = [...where];
    console.log(`  ${name}${extra ? ` (maps: ${modes})` : ""} — ${w.length} use${w.length > 1 ? "s" : ""}: ` +
      w.slice(0, 6).join("; ") + (w.length > 6 ? `; +${w.length - 6} more` : ""));
  }
};

console.log(`check-sr-items: ${uses.size} distinct item names across the roster, Data Dragon ${ver}`);
show(notOnRift, "NOT sold on Summoner's Rift:", true);
show(unknown, "Not an item at all (typo or removed):", false);
show(noExportId, "No client export id (run: node helpers/gen-lcu-data.mjs):", false);
if (notOnRift.length || unknown.length || noExportId.length) process.exit(1);
console.log("  every recommended item is available on the Rift and resolves for the client export");
