// gen-sr-items.mjs — writes public/ddragon/data/sr-items.json, the allowlist of
// items the Build Forge picker is allowed to offer: only things actually
// purchasable on Summoner's Rift (map 11). The bundled item.json is stripped to
// id/name/image to save space, so it can't be filtered at runtime — we fetch the
// FULL item.json for the pinned patch here and bake a clean list.
//
// Excludes: Arena-only items (map 30, not 11), champion-locked items
// (requiredChampion — Ornn masterworks etc.), non-purchasable / not-in-store
// items, and zero-cost trinkets/wards (handled separately as vision).
// Run after setup_ddragon.py:  node helpers/gen-sr-items.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const version = readFileSync(join(ROOT, "public/ddragon/version.txt"), "utf8").trim();
const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`;

const res = await fetch(url);
if (!res.ok) { console.error(`Failed to fetch ${url}: ${res.status}`); process.exit(1); }
const { data } = await res.json();

const seen = new Set();
const list = [];
for (const [id, it] of Object.entries(data)) {
  const onRift = it.maps?.["11"] === true;
  const buyable = it.gold?.purchasable === true && it.inStore !== false;
  const costs = (it.gold?.total ?? 0) > 0;          // drop free trinkets/wards
  const champLocked = !!it.requiredChampion;         // Ornn masterworks etc.
  if (!onRift || !buyable || !costs || champLocked) continue;
  if (seen.has(it.name)) continue;                   // first (base) id wins on dupes
  seen.add(it.name);
  list.push({ name: it.name, id: String(id) });
}
list.sort((a, b) => a.name.localeCompare(b.name));

const out = join(ROOT, "public/ddragon/data/sr-items.json");
writeFileSync(out, JSON.stringify({ version, count: list.length, items: list }, null, 2) + "\n");
console.log(`Wrote ${out} — ${list.length} Summoner's Rift items (ddragon ${version}).`);
