// ─────────────────────────────────────────────────────────────────────────────
//  check-rune-rows.mjs — is every rune page actually legal?
//
//  A League perk page takes ONE rune from each tree row. Two runes from the same
//  row is an impossible page: it cannot be applied to the client, and the app's
//  export would hand the LCU something it rejects.
//
//  Nothing else catches this. `vite build` passes it, and champion-validator
//  documents it as a known scope limit. Four such pages shipped unnoticed until
//  the 26.19 sweep (Sion Mid, Yasuo Top, Pyke Mid, Shyvana Top).
//
//  RUNE_TREES is read straight out of src/App.jsx, so this always checks against
//  the rows the app actually renders rather than a copy that drifts when Riot
//  renames a rune. Both role pages and altBuilds pages are checked.
//
//  Run:  node helpers/check-rune-rows.mjs        (exit 1 on any problem)
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Pull the RUNE_TREES object literal out of App.jsx by brace-matching from its
// declaration, then turn it into JSON and parse it. It is pure data (strings,
// arrays, nested objects), so nothing is ever evaluated as code.
function loadRuneTrees() {
  const src = fs.readFileSync(path.join(ROOT, "src", "App.jsx"), "utf8");
  const start = src.indexOf("const RUNE_TREES");
  if (start === -1) throw new Error("RUNE_TREES not found in src/App.jsx");
  const open = src.indexOf("{", start);
  let depth = 0, i = open;
  for (; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}" && --depth === 0) break;
  }
  const json = src.slice(open, i + 1)
    .replace(/\/\/[^\n]*/g, "")                      // line comments
    .replace(/([{,\s])([A-Za-z_]\w*)\s*:/g, '$1"$2":') // bare keys -> "keys" (rune names sit inside quotes, so their colons are untouched)
    .replace(/,(\s*[}\]])/g, "$1");                  // trailing commas
  return JSON.parse(json);
}

const TREES = loadRuneTrees();
const { CHAMPS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "champs", "index.js")).href);

const rowOf = (tree, rune) => (TREES[tree]?.rows || []).findIndex((r) => r.includes(rune));
const problems = [];

function check(where, r) {
  if (!r) return;
  for (const [tree, runes, label] of [
    [r.primary, r.primaryRunes || [], "primary"],
    [r.secondary, r.secondaryRunes || [], "secondary"],
  ]) {
    if (!TREES[tree]) { problems.push(`${where}: unknown ${label} tree "${tree}"`); continue; }
    const rows = runes.map((x) => rowOf(tree, x));
    runes.forEach((x, k) => {
      if (rows[k] === -1) problems.push(`${where}: "${x}" is not a ${tree} rune`);
    });
    const dup = rows.filter((v, k) => v >= 0 && rows.indexOf(v) !== k);
    if (dup.length) {
      problems.push(`${where}: ${label} ${tree} takes two runes from one row ` +
        `(${runes.join(" / ")} -> rows ${rows.join(",")})`);
    }
  }
  if (r.primary && r.primary === r.secondary) {
    problems.push(`${where}: primary and secondary are both ${r.primary}`);
  }
  if (r.keystone && TREES[r.primary] && !TREES[r.primary].keystones.includes(r.keystone)) {
    problems.push(`${where}: keystone "${r.keystone}" is not in ${r.primary}`);
  }
}

let pages = 0;
for (const c of CHAMPS) {
  for (const [role, rv] of Object.entries(c.roles || {})) {
    // One shared constant usually backs all 13 classes; dedupe so a single bad
    // page is reported once rather than thirteen times.
    const seen = new Set();
    for (const [clsName, cls] of Object.entries(rv.data || {})) {
      if (!cls.runes) continue;
      const { champOverrides, ...base } = cls.runes;
      const key = JSON.stringify(base);
      if (!seen.has(key)) {
        seen.add(key); pages++;
        check(`${c.dd} ${role}`, base);
      }
      // Per-enemy overrides are PARTIAL: each replaces only the fields it names,
      // so what matters is the merged page, not the fragment.
      for (const [foe, o] of Object.entries(champOverrides || {})) {
        pages++;
        check(`${c.dd} ${role} ${clsName} vs ${foe}`, { ...base, ...o });
      }
    }
  }
  for (const [role, alts] of Object.entries(c.altBuilds || {})) {
    for (const a of alts) { pages++; check(`${c.dd} ${role} alt "${a.label}"`, a.runes); }
  }
}

if (problems.length) {
  console.log(`check-rune-rows: ${problems.length} problem(s) across ${pages} rune pages\n`);
  for (const p of problems) console.log("  " + p);
  process.exit(1);
}
console.log(`check-rune-rows: ${pages} rune pages, all legal`);
