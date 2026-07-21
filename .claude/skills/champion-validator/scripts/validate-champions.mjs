#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
//  champion-validator  —  READ-ONLY validation of FRGE.gg champion data.
//  Produces a report to stdout and exits 1 on errors, 0 otherwise.
//  This script NEVER writes, edits, or mutates any project file.
// ─────────────────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

// ── locate project root (works regardless of where the skill is installed) ──
function findRoot() {
  const env = process.env.CLAUDE_PROJECT_DIR;
  if (env && fs.existsSync(path.join(env, "src/data/champs"))) return env;
  let d = path.dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(d, "src/data/champs"))) return d;
    const up = path.dirname(d);
    if (up === d) break;
    d = up;
  }
  return process.cwd();
}
const ROOT = findRoot();
const CHAMPS_DIR = path.join(ROOT, "src/data/champs");
const DD = path.join(ROOT, "public/ddragon");

const CLASSES = ["JUGGERNAUT","DIVER","ASSASSIN","SKIRMISHER","BURST_MAGE","BATTLEMAGE",
  "ARTILLERY","MARKSMAN","ENCHANTER","CATCHER","VANGUARD","WARDEN","SPECIALIST"];
const RUNE_REQUIRED = ["keystone","primary","primaryRunes","secondary","secondaryRunes","shards","reason"];
const REQUIRED_TOP  = ["id","display","dd","color","glow"];
// `data` is the only role field that breaks the app if absent (blank rune/item
// pages); the rest degrade gracefully, so they are reported as warnings.
const RECOMMENDED_ROLE = ["role","corePath","coreNote","sideItems"];

const F = { errors: [], warnings: [], info: [] };
const err  = (m) => F.errors.push(m);
const warn = (m) => F.warnings.push(m);
const info = (m) => F.info.push(m);

// ── ddragon reference data ──
const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
let itemJson = null, runeJson = null;
try { itemJson = readJSON(path.join(DD, "data/item.json")); } catch { err("missing public/ddragon/data/item.json — item names cannot be validated"); }
try { runeJson = readJSON(path.join(DD, "data/runesReforged.json")); } catch { err("missing public/ddragon/data/runesReforged.json — rune names cannot be validated"); }

// item name (lowercased) -> image filename; first/base item wins, mirrors App.jsx
const itemImg = {};
if (itemJson) for (const it of Object.values(itemJson.data)) {
  const k = it.name.toLowerCase();
  if (!(k in itemImg)) itemImg[k] = typeof it.image === "string" ? it.image : it.image?.full ?? null;
}
const itemExists = (name) => name && itemJson && (name.toLowerCase() in itemImg);

// rune name -> icon path; accepts this project's flat {name:icon} map OR raw DDragon array
const runeIcon = {};
if (runeJson) {
  if (Array.isArray(runeJson)) {
    for (const tree of runeJson) {
      runeIcon[tree.name] = tree.icon;
      for (const slot of tree.slots || []) for (const r of slot.runes || []) runeIcon[r.name] = r.icon;
    }
  } else Object.assign(runeIcon, runeJson);
}
const runeNames = new Set(Object.keys(runeIcon));

// ── App.jsx text-derived constants (JSX can't be imported in node) ──
let appSrc = "";
try { appSrc = fs.readFileSync(path.join(ROOT, "src/App.jsx"), "utf8"); }
catch { warn("could not read src/App.jsx — shard + ban/replacement checks reduced"); }
const shardKeys = new Set();
{
  const m = appSrc.match(/const SHARD_ICONS\s*=\s*\{([\s\S]*?)\};/);
  if (m) for (const q of m[1].matchAll(/"([^"]+)"\s*:/g)) shardKeys.add(q[1]);
}
const DD_OVERRIDES = {};
{
  const m = appSrc.match(/const DD_OVERRIDES\s*=\s*\{([\s\S]*?)\};/);
  if (m) for (const q of m[1].matchAll(/"([^"]+)"\s*:\s*"([^"]+)"/g)) DD_OVERRIDES[q[1]] = q[2];
}
const toDD = (n) => DD_OVERRIDES[n] || n
  .replace(/'([A-Z])/g, (_, c) => c.toLowerCase())
  .replace(/\./g, "").replace(/ & .*/g, "").replace(/ /g, "").replace(/'/g, "");

// ── load the ASSEMBLED roster via dynamic import ──
// This executes every champ module, so a syntax error or a missing cross-file
// constant (which `vite build` does NOT catch — it fails only at runtime) is
// surfaced here as a hard error.
let CHAMPS = null;
try {
  const mod = await import(pathToFileURL(path.join(CHAMPS_DIR, "index.js")).href);
  CHAMPS = mod.CHAMPS;
  if (!Array.isArray(CHAMPS)) err("index.js: exported CHAMPS is not an array");
} catch (e) {
  err(`index.js failed to import (runtime error — a champ file has a syntax error or a missing/renamed cross-file constant): ${e.message}`);
}

// ── filesystem: wiring + duplicate detection ──
const champFiles = fs.existsSync(CHAMPS_DIR)
  ? fs.readdirSync(CHAMPS_DIR).filter(f => f.endsWith(".js") && f !== "index.js") : [];
const indexSrc = fs.existsSync(path.join(CHAMPS_DIR, "index.js"))
  ? fs.readFileSync(path.join(CHAMPS_DIR, "index.js"), "utf8") : "";

// every champ file must be imported in index.js (missing import = renders blank / breaks build)
for (const f of champFiles) {
  const base = f.replace(/\.js$/, "");
  if (!new RegExp(`import\\s+\\w+\\s+from\\s+["']\\./${base}\\.js["']`).test(indexSrc))
    err(`import missing: ${f} exists but is not imported in index.js`);
}
// duplicate imports + CHAMPS-array membership
{
  const importIds = [...indexSrc.matchAll(/import\s+(\w+)\s+from\s+["']\.\/[\w-]+\.js["']/g)].map(m => m[1]);
  const seen = new Set();
  for (const id of importIds) { if (seen.has(id)) err(`duplicate import identifier in index.js: ${id}`); seen.add(id); }
  const arrM = indexSrc.match(/export const CHAMPS\s*=\s*\[([\s\S]*?)\];/);
  if (arrM) {
    const listed = [...arrM[1].matchAll(/\b(\w+)\b/g)].map(m => m[1]).filter(x => importIds.includes(x));
    const cnt = {};
    for (const x of listed) cnt[x] = (cnt[x] || 0) + 1;
    for (const [x, c] of Object.entries(cnt)) if (c > 1) err(`champion listed ${c}× in CHAMPS array: ${x}`);
    for (const id of importIds) if (!listed.includes(id)) err(`imported but never added to CHAMPS array: ${id}`);
  } else warn("could not locate `export const CHAMPS = [ ... ]` in index.js");
}

// ── per-object schema / sections / runes / items / images ──
const seenIds = {}, seenDD = {};
let roleBlocks = 0, classCells = 0, skillOrderRoles = 0;

function checkItem(where, name) {
  if (name && itemJson && !itemExists(name)) err(`${where}: item not found in item.json: "${name}"`);
}
function checkRunes(where, r) {
  if (!r || typeof r !== "object") { err(`${where}: missing runes block`); return; }
  for (const k of RUNE_REQUIRED) if (!(k in r)) err(`${where}: rune block missing "${k}"`);
  if (Array.isArray(r.primaryRunes)   && r.primaryRunes.length   !== 3) warn(`${where}: primaryRunes = ${r.primaryRunes.length} (expected 3)`);
  if (Array.isArray(r.secondaryRunes) && r.secondaryRunes.length !== 2) warn(`${where}: secondaryRunes = ${r.secondaryRunes.length} (expected 2)`);
  if (Array.isArray(r.shards)         && r.shards.length         !== 3) warn(`${where}: shards = ${r.shards.length} (expected 3)`);
  const cr = (n) => { if (n && runeNames.size && !runeNames.has(n)) err(`${where}: rune not in runesReforged.json: "${n}"`); };
  cr(r.keystone); cr(r.primary); cr(r.secondary);
  for (const x of r.primaryRunes   || []) cr(x);
  for (const x of r.secondaryRunes || []) cr(x);
  for (const s of r.shards || []) if (s && shardKeys.size && !shardKeys.has(s)) err(`${where}: shard not in SHARD_ICONS: "${s}"`);
}
function checkData(where, data) {
  if (!data || typeof data !== "object") { err(`${where}: data block is not an object`); return; }
  const present = CLASSES.filter(c => c in data);
  const missing = CLASSES.filter(c => !(c in data));
  classCells += present.length;
  if (missing.length) err(`${where}: ${present.length}/13 enemy classes — missing: ${missing.join(", ")}`);
  for (const c of present) {
    const cell = data[c];
    if (!cell || typeof cell !== "object") { err(`${where}.${c}: not an object`); continue; }
    for (const side of ["ahead", "behind"]) {
      if (!Array.isArray(cell[side])) { err(`${where}.${c}: missing "${side}" item array`); continue; }
      if (cell[side].length !== 3) warn(`${where}.${c}.${side}: ${cell[side].length} items (convention is 3)`);
      for (const e of cell[side]) if (e && typeof e === "object") checkItem(`${where}.${c}.${side}`, e.name);
    }
    checkRunes(`${where}.${c}`, cell.runes);
  }
}
function checkChampImage(label, dd) {
  if (!dd) return;
  if (!fs.existsSync(path.join(DD, "img/champion", dd + ".png")))
    err(`${label}: champion image missing on disk: ddragon/img/champion/${dd}.png`);
}
function checkDraft(where, arr, key, hard) {
  if (!Array.isArray(arr)) return;
  for (const nm of arr) {
    if (!fs.existsSync(path.join(DD, "img/champion", toDD(nm) + ".png")))
      (hard ? err : warn)(`${where}.${key}: "${nm}" → ${toDD(nm)}.png not on disk`);
  }
}
function validateChamp(champ) {
  const label = champ?.id || champ?.display || "?";
  if (!champ || typeof champ !== "object") { err(`roster entry is not an object: ${label}`); return; }
  for (const k of REQUIRED_TOP) if (!(k in champ)) err(`${label}: missing top-level field "${k}"`);
  if (champ.id) { if (seenIds[champ.id]) err(`duplicate champion id "${champ.id}"`); else seenIds[champ.id] = label; }
  if (champ.dd) { if (seenDD[champ.dd] && seenDD[champ.dd] !== champ.id) warn(`duplicate dd key "${champ.dd}" (${seenDD[champ.dd]} & ${champ.id})`); else seenDD[champ.dd] = champ.id; }
  checkChampImage(label, champ.dd);

  if (champ.roles && typeof champ.roles === "object") {
    for (const [rn, rb] of Object.entries(champ.roles)) {
      roleBlocks++;
      for (const k of RECOMMENDED_ROLE) if (!(k in rb)) warn(`${label}.${rn}: missing "${k}" (build/label incomplete, not fatal)`);
      if (typeof rb.corePath === "string") rb.corePath.split("›").forEach(s => checkItem(`${label}.${rn}.corePath`, s.trim()));
      else if ("corePath" in rb) err(`${label}.${rn}: corePath is not a string`);
      if (Array.isArray(rb.sideItems)) rb.sideItems.forEach(it => checkItem(`${label}.${rn}.sideItems`, it));
      checkDraft(`${label}.${rn}`, rb.bans, "bans", false);
      checkDraft(`${label}.${rn}`, rb.replacements, "replacements", false);
      if (rb.skillOrder || rb.skills) skillOrderRoles++;
      if (rb.data) checkData(`${label}.${rn}`, rb.data);
      else err(`${label}.${rn}: missing data block`);
    }
  } else if (champ.data) {
    roleBlocks++;
    if (champ.skillOrder || champ.skills) skillOrderRoles++;
    checkData(`${label} (single-role)`, champ.data);
  } else {
    err(`${label}: has neither a roles{} map nor a flat data{} block`);
  }
}

if (Array.isArray(CHAMPS)) {
  for (const c of CHAMPS) validateChamp(c);
  info(`${CHAMPS.length} champions in assembled roster`);
  info(`${roleBlocks} role blocks, ${classCells} enemy-class cells validated`);
  info(`skill orders: ${skillOrderRoles} role(s) declare a skillOrder/skills field — NOTE: skill order is not part of the current champion schema, so this is informational and validates only if you later add the field`);
}
info(`${champFiles.length} champion source files on disk; ${runeNames.size} runes, ${itemJson ? Object.keys(itemImg).length : 0} items, ${shardKeys.size} shard icons in reference data`);

// ── report ──
const L = "─".repeat(66);
const out = [];
out.push(L, "  champion-validator  —  READ-ONLY report (no files were modified)", `  project: ${ROOT}`, L);
const sec = (title, arr, mark) => { out.push("", `${mark} ${title} (${arr.length})`); for (const m of arr) out.push(`   ${mark} ${m}`); };
if (F.errors.length)   sec("ERRORS — must fix before shipping", F.errors, "✗"); else out.push("", "✓ ERRORS: none");
if (F.warnings.length) sec("WARNINGS — review", F.warnings, "⚠");
sec("INFO", F.info, "•");
out.push("", L);
out.push(F.errors.length
  ? `RESULT: NOT CLEAN — ${F.errors.length} error(s), ${F.warnings.length} warning(s)`
  : `RESULT: CLEAN${F.warnings.length ? ` (with ${F.warnings.length} warning(s) to review)` : ""}`);
out.push(L);
console.log(out.join("\n"));
process.exit(F.errors.length ? 1 : 0);
