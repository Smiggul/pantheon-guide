// ─────────────────────────────────────────────────────────────────────────────
//  patch-diff.mjs — which champions does this patch actually affect?
//
//  Runs AFTER setup_ddragon.py has pulled the new patch, comparing a snapshot of
//  the previous patch's data against the new one. It answers the question the
//  auto-patch PR used to leave to a human: "whose builds do I need to look at?"
//
//  It is deliberately built on Riot's OWN data rather than scraping a stats site
//  — no ad-walls, no Cloudflare challenges, no endpoint churn, and it works
//  offline in CI. Win-rate drift still needs a human/stats pass; everything here
//  is mechanically true.
//
//  Detects:
//    1. Items added / removed / renamed, and items whose gold or stats changed.
//    2. Which champion-roles reference each changed item (corePath, sideItems
//       and every per-class ahead/behind entry) — the review list.
//    3. BROKEN references: an item or rune the app names that no longer exists
//       in Data Dragon. This is what silently breaks a build path or renders an
//       empty rune icon (it would have caught Predator).
//    4. Champions in the patch that are missing from the roster.
//
//  Run:  node helpers/patch-diff.mjs --before <snapshot-dir> [--out report.md]
//        (snapshot-dir holds the PREVIOUS patch's item.json / runesReforged.json
//         / champion.json; the new ones are read from public/ddragon/data)
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const argOf = (flag, fallback = null) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const BEFORE = argOf("--before");
const OUT = argOf("--out");
const FROM = argOf("--from");   // previous patch version, for the PR header
const TO = argOf("--to");       // new patch version
const DATA = "public/ddragon/data";

if (!BEFORE) {
  console.error("patch-diff: --before <snapshot-dir> is required.");
  process.exit(2);
}

const readJson = (p) => {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); }
  catch { return null; }
};

const oldItems = readJson(path.join(BEFORE, "item.json"));
const newItems = readJson(path.join(DATA, "item.json"));
const oldRunes = readJson(path.join(BEFORE, "runesReforged.json"));
const newRunes = readJson(path.join(DATA, "runesReforged.json"));
// The repo doesn't bundle champion.json, so pull the champion list for the
// bundled version straight from the DDragon API. Network failure is non-fatal —
// the roster check is skipped rather than failing the whole run.
let newChamps = readJson(path.join(DATA, "champion.json"));
if (!newChamps?.data) {
  try {
    const ver = fs.readFileSync("public/ddragon/version.txt", "utf8").trim();
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/champion.json`);
    if (res.ok) newChamps = await res.json();
  } catch { /* offline — skip the roster check */ }
}

if (!newItems?.data) {
  console.error("patch-diff: could not read the new item.json — nothing to compare.");
  process.exit(2);
}
const haveBefore = Boolean(oldItems?.data);

// ── Item diff ────────────────────────────────────────────────────────────────
// Keyed by numeric id so a RENAME is visible as a name change rather than as an
// unrelated add + remove.
const itemsById = (j) => new Map(Object.entries(j?.data || {}).map(([id, it]) => [id, it]));
const oldById = itemsById(oldItems);
const newById = itemsById(newItems);

const added = [], removed = [], renamed = [], changed = [];

if (haveBefore) {
  for (const [id, it] of newById) {
    const prev = oldById.get(id);
    if (!prev) { added.push(it.name); continue; }
    if (prev.name !== it.name) renamed.push({ from: prev.name, to: it.name });

    const goldPrev = prev.gold?.total ?? 0, goldNow = it.gold?.total ?? 0;
    const statsPrev = JSON.stringify(prev.stats || {}), statsNow = JSON.stringify(it.stats || {});
    const descPrev = prev.description || "", descNow = it.description || "";
    const deltas = [];
    if (goldPrev !== goldNow) deltas.push(`gold ${goldPrev} → ${goldNow}`);
    if (statsPrev !== statsNow) deltas.push("stats changed");
    else if (descPrev !== descNow) deltas.push("effect text changed");
    if (deltas.length) changed.push({ name: it.name, deltas });
  }
  for (const [id, it] of oldById) if (!newById.has(id)) removed.push(it.name);
}

// Several ids can share a display name (ornn upgrades, map variants) — report a
// name once, not per id.
const uniq = (a) => [...new Set(a)];
const uniqBy = (a, key) => {
  const seen = new Set();
  return a.filter((x) => { const k = key(x); if (seen.has(k)) return false; seen.add(k); return true; });
};
added.splice(0, added.length, ...uniq(added));
removed.splice(0, removed.length, ...uniq(removed));
changed.splice(0, changed.length, ...uniqBy(changed, (c) => c.name));
renamed.splice(0, renamed.length, ...uniqBy(renamed, (r) => `${r.from}->${r.to}`));

// ── Which champion-roles reference which items ───────────────────────────────
const { CHAMPS } = await import("../src/data/champs/index.js");

// Every item string the app names, tagged with where it came from.
const refs = new Map(); // itemName -> Set("Champion (Role)")
const noteRef = (item, where) => {
  const k = String(item).trim();
  if (!k) return;
  if (!refs.has(k)) refs.set(k, new Set());
  refs.get(k).add(where);
};
const fromCorePath = (s) => String(s || "").split("›").map((x) => x.trim()).filter(Boolean);

const collectRoleBlock = (block, where) => {
  if (!block) return;
  for (const it of fromCorePath(block.corePath)) noteRef(it, where);
  for (const it of block.sideItems || []) noteRef(it, where);
  for (const entry of Object.values(block.data || {})) {
    for (const side of ["ahead", "behind"]) {
      for (const e of entry?.[side] || []) if (e?.name) noteRef(e.name, where);
    }
  }
};

// Rune names the app relies on, so a removed/renamed rune surfaces too.
const runeRefs = new Map();
const noteRune = (r, where) => {
  const k = String(r).trim();
  if (!k) return;
  if (!runeRefs.has(k)) runeRefs.set(k, new Set());
  runeRefs.get(k).add(where);
};
const collectRunes = (runes, where) => {
  if (!runes) return;
  if (runes.keystone) noteRune(runes.keystone, where);
  for (const r of runes.primaryRunes || []) noteRune(r, where);
  for (const r of runes.secondaryRunes || []) noteRune(r, where);
};
const collectRoleRunes = (block, where) => {
  if (!block) return;
  for (const entry of Object.values(block.data || {})) collectRunes(entry?.runes, where);
};

for (const c of CHAMPS) {
  if (c.roles) {
    for (const [role, block] of Object.entries(c.roles)) {
      collectRoleBlock(block, `${c.display} (${role})`);
      collectRoleRunes(block, `${c.display} (${role})`);
    }
  } else {
    collectRoleBlock(c, c.display);
    collectRoleRunes(c, c.display);
  }
  for (const [role, alts] of Object.entries(c.altBuilds || {})) {
    for (const alt of alts) {
      const where = `${c.display} (${role} — ${alt.label || "alt"})`;
      collectRoleBlock(alt, where);
      collectRunes(alt.runes, where);
    }
  }
}

// ── Broken references (the silent-failure class of bug) ──────────────────────
const newItemNames = new Set([...newById.values()].map((i) => i.name));
const brokenItems = [...refs.entries()]
  .filter(([name]) => !newItemNames.has(name))
  .map(([name, where]) => ({ name, where: [...where] }));

const runeNames = new Set(Object.keys(newRunes || {}));
const brokenRunes = runeNames.size
  ? [...runeRefs.entries()].filter(([n]) => !runeNames.has(n)).map(([name, where]) => ({ name, where: [...where] }))
  : [];

// Rune tree names declared in App.jsx (keystones/rows) that no longer resolve.
let orphanTreeRunes = [];
if (runeNames.size) {
  try {
    const src = fs.readFileSync("src/App.jsx", "utf8");
    const start = src.indexOf("const RUNE_TREES");
    if (start !== -1) {
      const block = src.slice(start, src.indexOf("\n};", start));
      const trees = new Set(["Precision", "Domination", "Sorcery", "Resolve", "Inspiration"]);
      const quoted = [...new Set([...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]))];
      orphanTreeRunes = quoted.filter(
        (n) => n.length > 3 && !runeNames.has(n) && !trees.has(n) && !n.startsWith("#") &&
               !["color", "label", "abbr", "keystones", "rows"].includes(n));
    }
  } catch { /* App.jsx unreadable — skip this check rather than fail the run */ }
}

// ── Champions new in this patch ──────────────────────────────────────────────
const rosterDd = new Set(CHAMPS.map((c) => c.dd));
const newChampKeys = Object.keys(newChamps?.data || {});
const missingFromRoster = newChampKeys.filter((k) => !rosterDd.has(k));

// ── Build the review list ────────────────────────────────────────────────────
const touched = new Set([
  ...changed.map((c) => c.name),
  ...renamed.map((r) => r.to),
  ...removed,
]);
const affected = new Map(); // "Champion (Role)" -> Set(item)
for (const item of touched) {
  for (const where of refs.get(item) || []) {
    if (!affected.has(where)) affected.set(where, new Set());
    affected.get(where).add(item);
  }
}
const affectedSorted = [...affected.entries()]
  .map(([where, items]) => ({ where, items: [...items].sort() }))
  .sort((a, b) => b.items.length - a.items.length || a.where.localeCompare(b.where));

// ── Report ───────────────────────────────────────────────────────────────────
const L = [];
// When invoked with --from/--to this doubles as the PR body, so lead with the
// summary. The numbers are computed above, which is why the script emits this
// rather than the workflow (a step cannot read its own outputs).
if (FROM && TO) {
  L.push(`Automated patch sweep — bundled Data Dragon assets go from \`${FROM}\` to **\`${TO}\`**, and \`src/data/lcuData.js\` is regenerated.`, "",
    "| | |", "| --- | --- |",
    `| Items changed | ${changed.length} |`,
    `| Champion-roles to review | ${affectedSorted.length} |`,
    `| Broken references | ${brokenItems.length + brokenRunes.length + orphanTreeRunes.length} |`,
    `| New champions missing from roster | ${missingFromRoster.length} |`, "",
    "Everything below is derived from Riot's own data, so it is mechanically true:",
    "it names every champion whose build path or situational items reference",
    "something this patch touched. **Win-rate and meta drift are NOT covered** —",
    "that still needs a stats pass.", "", "---", "");
}
const list = (arr, n = 40) =>
  arr.slice(0, n).map((x) => `- ${x}`).join("\n") + (arr.length > n ? `\n- …and ${arr.length - n} more` : "");

if (!haveBefore) {
  L.push("> No previous-patch snapshot was available, so the item diff was skipped.",
         "> Reference checks below still ran against the new data.", "");
}

const blockers = brokenItems.length + brokenRunes.length + orphanTreeRunes.length;
if (blockers) {
  L.push("## ⚠ Broken references — fix before merging", "",
    "These names appear in the app but no longer exist in Data Dragon, so they fail",
    "silently (an item drops out of a build path, a rune renders as a blank icon).", "");
  if (brokenItems.length) {
    L.push("**Items**", "");
    for (const b of brokenItems) L.push(`- \`${b.name}\` — used by ${b.where.slice(0, 6).join(", ")}${b.where.length > 6 ? ` +${b.where.length - 6} more` : ""}`);
    L.push("");
  }
  if (brokenRunes.length) {
    L.push("**Runes in champion data**", "");
    for (const b of brokenRunes) L.push(`- \`${b.name}\` — used by ${b.where.slice(0, 6).join(", ")}${b.where.length > 6 ? ` +${b.where.length - 6} more` : ""}`);
    L.push("");
  }
  if (orphanTreeRunes.length) {
    L.push("**Runes in `RUNE_TREES` (App.jsx)**", "",
      ...orphanTreeRunes.map((n) => `- \`${n}\` — listed in the rune picker but absent from Data Dragon`), "");
  }
}

if (missingFromRoster.length) {
  L.push("## Champions missing from the roster", "",
    `${missingFromRoster.length} champion(s) exist in the game but have no FRGE entry: ` +
    missingFromRoster.map((c) => `\`${c}\``).join(", "),
    "", "Each needs a `src/data/champs/<id>.js` file with all 13 enemy classes filled in.", "");
} else if (newChampKeys.length) {
  L.push("## Roster", "", `All ${newChampKeys.length} champions in the game have an FRGE entry.`, "");
}

if (haveBefore) {
  L.push("## Item changes", "");
  const bits = [];
  if (changed.length) bits.push(`${changed.length} changed`);
  if (added.length) bits.push(`${added.length} added`);
  if (removed.length) bits.push(`${removed.length} removed`);
  if (renamed.length) bits.push(`${renamed.length} renamed`);
  L.push(bits.length ? bits.join(" · ") : "No item changes detected.", "");

  if (changed.length) L.push("<details><summary>Changed items</summary>", "",
    ...changed.slice(0, 60).map((c) => `- **${c.name}** — ${c.deltas.join(", ")}`),
    changed.length > 60 ? `- …and ${changed.length - 60} more` : "", "</details>", "");
  if (added.length) L.push("<details><summary>New items</summary>", "", list(added), "</details>", "");
  if (removed.length) L.push("<details><summary>Removed items</summary>", "", list(removed), "</details>", "");
  if (renamed.length) L.push("<details><summary>Renamed items</summary>", "",
    ...renamed.map((r) => `- \`${r.from}\` → \`${r.to}\``), "</details>", "");
}

L.push("## Champions to review", "");
if (!affectedSorted.length) {
  L.push(haveBefore
    ? "No champion in the roster references an item this patch touched. Nothing to review."
    : "Skipped — needs a previous-patch snapshot.", "");
} else {
  L.push(`${affectedSorted.length} champion-roles reference an item this patch changed, most-affected first.`, "");
  L.push("| Champion (role) | Items touched |", "| --- | --- |");
  for (const a of affectedSorted.slice(0, 60)) {
    L.push(`| ${a.where} | ${a.items.join(", ")} |`);
  }
  if (affectedSorted.length > 60) L.push(`| _…and ${affectedSorted.length - 60} more_ | |`);
  L.push("");
}

const report = L.join("\n");
if (OUT) fs.writeFileSync(OUT, report, "utf8");
console.log(report);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT,
    `affected=${affectedSorted.length}\n` +
    `broken=${blockers}\n` +
    `newchamps=${missingFromRoster.length}\n` +
    `items_changed=${changed.length}\n`);
}

// Broken references are a real problem, but this runs inside a PR-opening
// workflow — surface them loudly in the report rather than failing the job.
process.exit(0);
