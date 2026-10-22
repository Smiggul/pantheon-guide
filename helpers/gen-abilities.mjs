// ─────────────────────────────────────────────────────────────────────────────
//  helpers/gen-abilities.mjs
//  Generates src/data/abilities.js — passive + Q/W/E/R for every champion with
//  Riot's own current ability text, numbers filled in. Everything is pinned to
//  public/ddragon/version.txt:
//   • names, icons, cooldown, cost, range — Data Dragon champion/<dd>.json
//   • the tooltip text — the game's English string table, from CommunityDragon
//     (/<major.minor>/game/en_us/data/menu/en_us/lol.stringtable.json). It is the
//     same text Data Dragon ships as `tooltip`, plus the passives' full tooltips,
//     which Data Dragon does not carry.
//   • the numbers behind its @placeholders@ — the champion's game data
//     (/<major.minor>/game/data/characters/<dd>/<dd>.bin.json): per-rank data
//     values and Riot's tooltip formulas (mSpellCalculations), resolved below
//     the way the in-game tooltip shows them ("40/48/56 (+20% AP)",
//     "35–182 (based on level)").
//  This replaced Meraki Analytics (2026-10-22), whose text had stopped at patch
//  25.15 and which had no Locke, Yunara or Zaahen at all.
//
//  Run after a patch:  node helpers/gen-abilities.mjs   (the patch workflow runs it)
//  Debugging:          node helpers/gen-abilities.mjs --cache <dir>  keeps every
//                      download in <dir> and reuses it on the next run.
//                      node helpers/gen-abilities.mjs --dry  checks without writing.
//                      --list-unresolved  names every number left out of the text.
// ─────────────────────────────────────────────────────────────────────────────
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ver = fs.readFileSync(path.join(root, "public/ddragon/version.txt"), "utf8").trim();
const cdPatch = ver.split(".").slice(0, 2).join("."); // CommunityDragon folders are major.minor: 16.21.1 → 16.21
const themes = fs.readFileSync(path.join(root, "src/data/skinThemes.js"), "utf8");
const dds = [...themes.matchAll(/^\s*"([A-Za-z0-9]+)"\s*:/gm)].map((m) => m[1]);
const argv = process.argv.slice(2);
const cacheDir = argv.includes("--cache") ? path.resolve(argv[argv.indexOf("--cache") + 1]) : null;
const DRY = argv.includes("--dry");
const LIST = argv.includes("--list-unresolved");
console.log(`patch ${ver} (CommunityDragon ${cdPatch}) — ${dds.length} champions`);

const CD = `https://raw.communitydragon.org/${cdPatch}`;
const DD = (dd) => `https://ddragon.leagueoflegends.com/cdn/${ver}/data/en_US/champion/${dd}.json`;
const BIN = (dd) => `${CD}/game/data/characters/${dd.toLowerCase()}/${dd.toLowerCase()}.bin.json`;
const STRINGS = `${CD}/game/en_us/data/menu/en_us/lol.stringtable.json`;

// Retries network errors and 5xx; a 4xx is an answer, not a blip, so it fails at once.
async function fetchJson(url, tries = 3) {
  const cached = cacheDir && path.join(cacheDir, url.replace(/^https?:\/\//, "").replace(/[^A-Za-z0-9._-]+/g, "_"));
  if (cached && fs.existsSync(cached)) return JSON.parse(fs.readFileSync(cached, "utf8"));
  for (let i = 1; ; i++) {
    let r;
    try { r = await fetch(url); } catch (e) { if (i >= tries) throw e; continue; }
    if (r.ok) {
      const text = await r.text();
      if (cached) { fs.mkdirSync(cacheDir, { recursive: true }); fs.writeFileSync(cached, text); }
      return JSON.parse(text);
    }
    if (r.status < 500 || i >= tries) throw new Error(`${r.status} ${url}`);
  }
}

// ── Tooltip formula resolution ───────────────────────────────────────────────
// A resolved value V is { r, l, s, amp? }:
//   r    per-rank flat amounts, one per ability rank (ranks 1..maxRank)
//   l    [level 1, level 18] flat amounts for values that grow with champion level
//   s    stat scalings: [{ stat, f, c }] — c is a V of its own (the coefficient)
//   amp  stats the whole value is multiplied by, shown as "(increased by ...)"
// Riot's formula parts are summed, multiplied and nested; anything this cannot
// express throws Unresolved, and the caller drops that one number from the text.
class Unresolved extends Error {}
const fail = (why) => { throw new Unresolved(why); };

// Riot's stat enum (mStat) and stat formula (mStatFormula: 0 total, 1 base,
// 2 bonus). Riot does not publish it; each id was read off the abilities that
// use it on 16.21 (Braum Q's 2.5% max health is 12, Hecarim's passive bonus
// move speed is 7/2, Pyke's lethality is 29, Urgot's bonus range is 31...).
// An id not listed throws Unresolved rather than guessing.
const STAT = {
  0: "AP", 1: "armor", 2: "AD", 4: "attack speed", 6: "magic resist", 7: "move speed",
  8: "critical strike chance", 12: "max health", 14: "current health", 18: "life steal",
  29: "Lethality", 31: "attack range",
};
// Stats that are themselves fractions (0.25 = 25%): a ratio of one reads
// "+50% critical strike chance", never "per 100".
const FRACTION_STAT = new Set([4, 8, 18]);
// Critical strike damage (9) is a multiplier, not a scaling a player can read
// off a tooltip: use its base, 175%, so "critically strikes for X" shows X.
const CRIT_DAMAGE = 9, BASE_CRIT_DAMAGE = 1.75;
// Stat 10 appears only in Jhin E's charge refresh, as "base + stat × base";
// it is 0 without items, which leaves the base refresh time.
const ABILITY_HASTE = 10;
const statLabel = (stat = 0, f = 0) => {
  const base = STAT[stat] ?? fail(`stat ${stat}`);
  if (stat === 0) return base; // all AP is bonus AP
  if (f === 2) return stat === 12 ? "bonus health" : `bonus ${base}`;
  if (f === 1) return `base ${base}`;
  return base;
};
// Riot hashes names it strips from the client: {6c540a3a} is FNV-1a 32 of
// "executetooltipcalc". Look a name up under both spellings.
const fnv1a = (s) => {
  let h = 0x811c9dc5;
  for (const ch of s.toLowerCase()) { h ^= ch.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return `{${h.toString(16).padStart(8, "0")}}`;
};
const lookup = (m, name) => m.get(String(name).toLowerCase()) ?? m.get(fnv1a(String(name)));

const C = (n, x) => ({ r: Array(n).fill(x), l: null, s: [] });
const isConst = (v) => !v.l && !v.s.length;
const add = (a, b) => ({
  r: a.r.map((x, i) => x + b.r[i]),
  l: a.l && b.l ? [a.l[0] + b.l[0], a.l[1] + b.l[1]] : a.l || (b.l && [...b.l]),
  s: mergeScalings([...a.s, ...b.s]),
  ...((a.amp || b.amp) && { amp: [...(a.amp || []), ...(b.amp || [])] }),
});
const mergeScalings = (s) => {
  const out = [];
  for (const x of s) {
    const same = !x.per100 && out.find((y) => !y.per100 && y.stat === x.stat && y.f === x.f && y.per === x.per && isConst(y.c) && isConst(x.c));
    if (same) same.c = add(same.c, x.c); else out.push({ ...x });
  }
  return out;
};
const ampOf = (...vs) => { const a = vs.flatMap((v) => v.amp || []); return a.length ? { amp: a } : {}; };
// Multiply two values. When both sides scale with stats — "(1 + critical
// strike chance) × damage", "shots (more with attack speed) × damage per
// shot" — the side with fewer scalings contributes its flat part as a factor
// and its stats as an "increased by ..." note, which is how Riot words them.
const mul = (a, b) => {
  if (!isConst(a) && isConst(b)) [a, b] = [b, a];
  if (!isConst(a)) {
    if (a.l || (!b.l && b.s.length < a.s.length)) [a, b] = [b, a];
    if (a.l || a.r.every((x) => x === 0)) fail("product of two scaling values");
    const out = mul({ r: a.r, l: null, s: [] }, b);
    return { ...out, amp: [...(out.amp || []), ...(a.amp || []), ...a.s] };
  }
  // a is per-rank constant k. A level curve times a rank-varying factor
  // cannot be one range; show it from (level 1, rank 1) to (level 18, max rank).
  const k = a.r;
  return {
    r: b.r.map((x, i) => x * k[i]),
    l: b.l && [b.l[0] * k[0], b.l[1] * k[k.length - 1]],
    s: b.s.map((x) => ({ ...x, c: mul(a, x.c) })),
    ...ampOf(a, b),
  };
};

// Context for one spell: its bin record, the whole bin (for cross-spell refs)
// and how many ranks it has. Names are stored under their FNV hash as well.
function makeSpell(bin, sp, n) {
  const both = (m, name, v) => { m.set(name.toLowerCase(), v); if (!name.startsWith("{")) m.set(fnv1a(name), v); };
  const dv = new Map();
  for (const d of sp.DataValues || sp.mDataValues || []) {
    const name = d.name ?? d.mName;
    if (name) both(dv, name, d.values ?? d.mValues ?? []);
  }
  const calcs = new Map();
  for (const [k, v] of Object.entries(sp.mSpellCalculations || {})) both(calcs, k, v);
  return { bin, sp, n, dv, calcs, effects: sp.mEffectAmount || [] };
}
// Per-rank numbers from a 7-slot array (index 0 is rank 0; ranks start at 1).
const ranksOf = (ctx, arr) => Array.from({ length: ctx.n }, (_, i) => +(arr?.[i + 1] ?? arr?.[arr.length - 1] ?? 0) || 0);
const dataValue = (ctx, name) => {
  if (!name) fail("unnamed data value");
  const v = lookup(ctx.dv, name);
  if (v === undefined) fail(`data value ${name}`);
  return { r: ranksOf(ctx, v), l: null, s: [] };
};
// A stat scaling. Critical strike damage becomes its base value (see
// CRIT_DAMAGE) and ability haste its base, 0, which leaves the cooldown as is.
const statPart = (ctx, stat = 0, f = 0, c) => {
  if (stat === CRIT_DAMAGE) return mul(c, C(ctx.n, f === 2 ? 0 : BASE_CRIT_DAMAGE));
  if (stat === ABILITY_HASTE) return C(ctx.n, 0);
  const zero = Array(ctx.n).fill(0);
  if (!c.s.length) return { r: zero, l: null, s: [{ stat, f, c }], ...ampOf(c) };
  // The ratio itself scales with a stat.
  if (c.r.some((x) => x !== 0) || c.l) // "16% bonus AD (increased by bonus attack speed)"
    return { r: zero, l: null, s: [{ stat, f, c: { r: c.r, l: c.l, s: [] } }], amp: [...(c.amp || []), ...c.s] };
  if (c.s.length === 1 && isConst(c.s[0].c)) // "+0.4% AP per 100 bonus health"
    return { r: zero, l: null, s: [{ stat, f, c: C(ctx.n, 0), per100: c.s[0] }] };
  fail("scaling coefficient that itself scales");
};
const dvAtRank1 = (ctx, name) => (name ? dataValue(ctx, name).r[0] : 0);

// Champion-level curves: value at level 1 and at level 18.
function breakpoints(level1, perLevel0, bps) {
  // bps: [{ level, add, per }] — `add` once at that level, `per` per level
  // from it on. A field Riot leaves out is 0, so a bare breakpoint stops the
  // growth (Ivern's Grove timer: 40 seconds down to 1, flat from level 16).
  const at = (L) => {
    let v = level1, per = perLevel0;
    for (let lv = 2; lv <= L; lv++) {
      const bp = bps.find((b) => b.level === lv);
      if (bp) { v += bp.add || 0; per = bp.per || 0; }
      v += per;
    }
    return v;
  };
  return [at(1), at(18)];
}

function part(ctx, p, depth = 0) {
  if (depth > 12) fail("formula nested too deep");
  if (p === undefined || p === null) fail("missing part");
  if (typeof p === "number") return C(ctx.n, p);
  const t = p.__type || "";
  const sub = (q) => part(ctx, q, depth + 1);
  switch (t) {
    case "NamedDataValueCalculationPart": return dataValue(ctx, p.mDataValue);
    case "NumberCalculationPart": return C(ctx.n, p.mNumber ?? 0);
    case "EffectValueCalculationPart": {
      const e = ctx.effects[(p.mEffectIndex ?? 1) - 1];
      return { r: ranksOf(ctx, e?.value || []), l: null, s: [] };
    }
    case "StatByCoefficientCalculationPart": return statPart(ctx, p.mStat, p.mStatFormula, C(ctx.n, p.mCoefficient ?? 0));
    case "StatByNamedDataValueCalculationPart": return statPart(ctx, p.mStat, p.mStatFormula, dataValue(ctx, p.mDataValue));
    case "StatBySubPartCalculationPart": return statPart(ctx, p.mStat, p.mStatFormula, sub(p.mSubpart));
    case "AbilityResourceByCoefficientCalculationPart":
      return { r: Array(ctx.n).fill(0), l: null, s: [{ stat: "mana", f: p.mStatFormula ?? 0, c: C(ctx.n, p.mCoefficient ?? 0) }] };
    case "BuffCounterByCoefficientCalculationPart":
      return { r: Array(ctx.n).fill(0), l: null, s: [{ stat: "stack", per: true, c: C(ctx.n, p.mCoefficient ?? 0) }] };
    case "BuffCounterByNamedDataValueCalculationPart":
      return { r: Array(ctx.n).fill(0), l: null, s: [{ stat: "stack", per: true, c: dataValue(ctx, p.mDataValue) }] };
    case "SumOfSubPartsCalculationPart":
    case "ClampSubPartsCalculationPart": // the clamp only matters at extreme stats
      return (p.mSubparts || []).map(sub).reduce(add, C(ctx.n, 0));
    case "ProductOfSubPartsCalculationPart": return mul(sub(p.mPart1), sub(p.mPart2));
    case "ByCharLevelInterpolationCalculationPart":
      return { r: Array(ctx.n).fill(0), l: [p.mStartValue ?? 0, p.mEndValue ?? 0], s: [] };
    case "ByCharLevelFormulaCalculationPart": {
      const v = p.values || p.mValues || [];
      if (v.length < 19) fail("level formula too short");
      return { r: Array(ctx.n).fill(0), l: [v[1], v[18]], s: [] };
    }
    case "ByCharLevelBreakpointsCalculationPart":
      return { r: Array(ctx.n).fill(0), l: breakpoints(p.mLevel1Value ?? 0, p.mInitialBonusPerLevel ?? 0,
        (p.mBreakpoints || []).map((b) => ({ level: b.mLevel ?? 0, add: b.mAdditionalBonusAtThisLevel, per: b.mBonusPerLevelAtAndAfter }))), s: [] };
    case "CooldownMultiplierCalculationPart": return C(ctx.n, 1); // shows the un-hasted cooldown
  }
  // Riot ships some part types under hashed names; recognise them by their fields.
  if ("mSpellCalculationKey" in p) return calc(ctx, p.mSpellCalculationKey, depth + 1);
  if ("StartDataValue" in p && "EndDataValue" in p) // level interpolation between two data values
    return { r: Array(ctx.n).fill(0), l: [dvAtRank1(ctx, p.StartDataValue), dvAtRank1(ctx, p.EndDataValue)], s: [] };
  if ("SourceObject" in p && "DataValue" in p) { // a data value of another spell
    const other = ctx.bin[p.SourceObject]?.mSpell || fail(`spell ${p.SourceObject}`);
    return dataValue(makeSpell(ctx.bin, other, ctx.n), p.DataValue);
  }
  if (t === "{b22609db}") // base + per-level growth, both data values
    return { r: Array(ctx.n).fill(0), l: breakpoints(dvAtRank1(ctx, p["{91d404a5}"]), dvAtRank1(ctx, p["{b2cd0eb0}"]), []), s: [] };
  if (t === "{4ce08984}") // breakpoints whose amounts are data values
    return { r: Array(ctx.n).fill(0), l: breakpoints(dvAtRank1(ctx, p["{91d404a5}"]), dvAtRank1(ctx, p["{bbd778a2}"]),
      (p["{9823b29a}"] || []).map((b) => ({ level: b.level ?? 0, add: dvAtRank1(ctx, b["{ae9b464d}"]), per: dvAtRank1(ctx, b["{b0d8b2ac}"]) }))), s: [] };
  fail(`part ${t}`);
}

function calcValue(ctx, c, depth) {
  const t = c.__type;
  let v;
  if (t === "GameCalculation") v = (c.mFormulaParts || []).map((p) => part(ctx, p, depth)).reduce(add, C(ctx.n, 0));
  else if (t === "GameCalculationModified") v = calc(ctx, c.mModifiedGameCalculation, depth + 1);
  else if (t === "GameCalculationConditional") v = calc(ctx, c.mDefaultGameCalculation || c.mConditionalGameCalculation, depth + 1);
  else fail(`calc ${t}`);
  if (c.mMultiplier) v = mul(part(ctx, c.mMultiplier, depth + 1), v);
  return v;
}
function calc(ctx, name, depth = 0) {
  if (depth > 12) fail("formula nested too deep");
  const c = lookup(ctx.calcs, name) || fail(`calc ${name}`);
  const v = calcValue(ctx, c, depth);
  // Display flags come from the outer calculation; one that only rescales
  // another ("Calc_Move_Speed × 1.5") shows the way the inner one does.
  return depth === 0 ? Object.assign(v, displayOf(ctx, c)) : v;
}
function displayOf(ctx, c, depth = 0) {
  const inner = depth < 12 && lookup(ctx.calcs, c.mModifiedGameCalculation || c.mDefaultGameCalculation || c.mConditionalGameCalculation || "");
  const from = inner ? displayOf(ctx, inner, depth + 1) : { pct: false, prec: undefined };
  return { pct: c.mDisplayAsPercent ?? from.pct, prec: c.mPrecision ?? from.prec };
}

// ── Formatting ───────────────────────────────────────────────────────────────
const num = (x, prec) => {
  if (!Number.isFinite(x)) fail("not a number");
  const d = prec ?? (Math.abs(x) >= 100 ? 1 : 2);
  let s = (Math.round(x * 10 ** d) / 10 ** d).toString();
  if (s === "0" && x !== 0) s = (+x.toPrecision(2)).toString();
  return s;
};
// Per-rank numbers: "40/48/56/64/72", or one number when every rank agrees.
// 9999 is Riot's "no limit" (Aurelion Sol Q's channel at rank 5); show the
// real ranks around it.
const ranksStr = (r, prec) => {
  const real = r.some((x) => x < 9999) ? r.filter((x) => x < 9999) : r;
  return real.every((x) => Math.abs(x - real[0]) < 1e-9) ? num(real[0], prec) : real.map((x) => num(x, prec)).join("/");
};
// A level curve that does not move (Bel'Veth's 20–20%) is just a number.
const flat = (v) => (v.l && Math.abs(v.l[0] - v.l[1]) < 1e-9 ? { ...v, r: v.r.map((x) => x + v.l[0]), l: null } : v);
// One coefficient as text: "60%", "50/55/60%", "10–50% (based on level)".
const coefStr = (c, scale, unit) => {
  if (c.s.length) fail("scaling coefficient that itself scales");
  c = flat(c);
  if (c.l) return `${num(c.l[0] * scale)}–${num(c.l[1] * scale)}${unit} (based on level)`;
  return `${ranksStr(c.r.map((x) => x * scale))}${unit}`;
};
// pct: a fraction shown as a percentage (0.25 → "25%"). points: Riot's text
// puts the "%" after the number itself ("@Damage@% missing Health"), so the
// value is already in percentage points and a ratio adds points per 100.
function render(v, { pct = false, points = false, prec } = {}) {
  if (points && !pct) return renderPoints(flat(v), prec);
  v = flat(v);
  const unit = pct ? "%" : "";
  const k = pct ? 100 : 1;
  const parts = [];
  const hasRanks = v.r.some((x) => x !== 0);
  if (v.l) parts.push(`${num(v.l[0] * k, prec)}–${num(v.l[1] * k, prec)}${unit} (based on level)`);
  if (hasRanks || (!v.l && !v.s.length)) parts.unshift(`${ranksStr(v.r.map((x) => x * k), prec)}${unit}`);
  const live = (s) => s.filter((x) => x.per100 || !(isConst(x.c) && x.c.r.every((y) => y === 0)));
  const labelOf = (x) => (x.stat === "mana" ? (x.f === 2 ? "bonus mana" : "max mana") : statLabel(x.stat, x.f));
  const scal = live(v.s).map((x) => {
    if (x.per100) return `${coefStr(x.per100.c, 1e4, "%")} ${labelOf(x)} per 100 ${labelOf(x.per100)}`;
    if (x.per) return `${coefStr(x.c, k, unit)} per stack`;
    // Inside a percentage, a flat stat reads per 100 of it ("+1.5% per 100 AP");
    // a stat that is itself a percentage reads straight ("+50% critical strike chance").
    if (pct && !FRACTION_STAT.has(x.stat)) return `${coefStr(x.c, 1e4, "%")} per 100 ${labelOf(x)}`;
    return `${coefStr(x.c, 100, "%")} ${labelOf(x)}`;
  });
  const amp = [...new Set(live(v.amp || []).map(labelOf))];
  const ampNote = amp.length ? ` (increased by ${amp.join(" and ")})` : "";
  if (!parts.length) return scal.join(" + ") + ampNote;
  return [parts.join(" + "), ...scal.map((s) => `(+${s})`)].join(" ") + ampNote;
}
// "12/16/20% (+5% per 100 bonus AD)", "0.1–2% (based on level)".
const levelPct = (s) => s.replace(/(\d) \(based on level\)%/, "$1% (based on level)");
function renderPoints(v, prec) {
  if (!v.s.length && !v.amp) return levelPct(`${render(v, { prec })}%`);
  const base = { ...v, s: [], amp: undefined };
  const label = (x) => (x.stat === "mana" ? (x.f === 2 ? "bonus mana" : "max mana") : statLabel(x.stat, x.f));
  const scal = v.s.filter((x) => !x.per100 && !(isConst(x.c) && x.c.r.every((y) => y === 0))).map((x) => {
    if (x.per) return `${coefStr(x.c, 1, "%")} per stack`;
    if (FRACTION_STAT.has(x.stat)) return `${coefStr(x.c, 1, "%")} per 100% ${label(x)}`;
    return `${coefStr(x.c, 100, "%")} per 100 ${label(x)}`;
  });
  if (v.s.some((x) => x.per100)) fail("ratio per 100 inside percentage points");
  const amp = [...new Set((v.amp || []).map(label))];
  const head = base.r.some((x) => x !== 0) || base.l ? levelPct(`${render(base, { prec })}%`) : "";
  const text = [head, ...scal.map((s) => (head ? `(+${s})` : s))].filter(Boolean).join(" ");
  return text + (amp.length ? ` (increased by ${amp.join(" and ")})` : "");
}

// One @placeholder@: "Name", "Name*100", "Name.1", "Spell.Other:Name*-100".
function resolvePlaceholder(ctx, raw, findSpell, points = false) {
  let m = raw.trim().match(/^(?:spell\.([A-Za-z0-9_]+):)?([A-Za-z0-9_{}]+?)(?:\.(\d+))?(?:\*(-?[\d.]+))?$/i);
  if (!m) fail(`form ${raw}`);
  const [, spellName, name, decimals, mult] = m;
  let c = ctx;
  if (spellName) c = findSpell(spellName) || fail(`spell ${spellName}`);
  const lname = name.toLowerCase();
  // "[@spell.ApheliosCalibrumQ:Hotkey@]" is the key the ability sits on.
  if (lname === "hotkey") return c.slot && c.slot !== "P" ? c.slot : (spellName?.match(/[QWER]$/)?.[0] ?? fail("hotkey"));
  const fromArr = (arr) => (arr ? { r: ranksOf(c, arr), l: null, s: [] } : fail(`no ${name}`));
  let v, flags = {};
  if (lookup(c.calcs, name)) { v = calc(c, name); flags = { pct: v.pct, prec: v.prec }; }
  else if (lookup(c.dv, name)) v = dataValue(c, name);
  else if ((m = lname.match(/^effect(\d+)amount$/) || lname.match(/^e(\d+)$/))) v = fromArr(c.effects[+m[1] - 1]?.value);
  else if (lname === "cooldown") v = fromArr(c.sp.cooldownTime);
  else if (lname === "cost") v = fromArr(c.sp.mana && [0, ...c.sp.mana]);
  else if (lname === "ammorechargetime") v = fromArr(c.sp.mAmmoRechargeTime);
  else if (lname === "maxammo") v = fromArr(c.sp.mMaxAmmo);
  else fail(`unknown ${/^f\d+$/.test(lname) ? "fN" : name}`);
  if (mult) v = mul(C(c.n, +mult), v);
  if (decimals !== undefined) flags.prec = +decimals;
  // A percentage calculation already prints its own "%"; drop Riot's extra one.
  return render(v, { ...flags, points });
}

// ── Text cleanup ─────────────────────────────────────────────────────────────
const UNRESOLVED = "\u0000";
const LINE_BREAK = /<br\s*\/?>|<\/?li>/i;
const tidy = (s) => s.replace(/\s+/g, " ").replace(/\s([.,;:)])/g, "$1").replace(/\(\s/g, "(").trim();
const stripTags = (s) => tidy(s
  .replace(/<[^>]+>/g, "")
  .replace(/%i:[A-Za-z0-9_]+%/g, "")
  .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"));
// Lines (<br>, list items) become sentences of one paragraph; a line Riot left
// without a full stop gets one, so list items do not run together.
function plain(s) {
  const lines = s.split(LINE_BREAK).map(stripTags).filter(Boolean);
  return lines.map((l, i) => (i < lines.length - 1 && !/[.!?:;,]$/.test(l) ? `${l}.` : l)).join(" ")
    .replace(/(\d%) (max|bonus) health Health\b/g, "$1 $2 Health"); // "restoring 5% max health Health"
}
// Drop a number the formulas could not supply without leaving a hole:
// "for \0 seconds" → "for a short time", "by \0%" → "", "(max: \0)" → "".
function dropUnresolved(s) {
  return tidy(s
    .replace(/\s*\([^()]*\0[^()]*\)/g, "")
    .replace(/,\s*[a-z]+\s*\0\s*(?=[.!?]|$)/gi, "")
    .replace(/\bCurrent(?: [A-Za-z]+){0,3}:[^.]*\0[^.]*\.?/g, "") // "Current: \0/100 Bonus Attack Damage."
    .replace(/\0\s*%?\s*\/\s*/g, "") // Kai'Sa's evolve thresholds read "\0/100 Bonus AD": keep the 100
    .replace(/\b(e)very \0\s*seconds?/gi, (all, e) => (e === "E" ? "Periodically" : "periodically"))
    .replace(/\bfor (?:up to )?\0\s*seconds?/gi, "for a short time")
    .replace(/\bover \0\s*seconds?/gi, "over time")
    .replace(/\b(?:by|of|up to|to) \0\s*(?:%|seconds?\b)?/gi, "")
    .replace(/\s*\0\s*seconds?\b/gi, "")
    .replace(/\0\s*times\b/gi, "several times")
    .replace(/\0\s*%?/g, "")
    .replace(/\(\s*\)|\[\s*\]/g, ""))
    .replace(/([A-Za-z0-9)])$/, "$1."); // Riot leaves some tooltips without a final full stop
}
// Runtime read-outs have no value outside a game ("Total bonus Attack Speed:
// @...@", Aurelion Sol's current Stardust, Aphelios's weapon queue). Drop a
// line or <rules> note that only exists to show one, and a heading left with
// nothing under it, before flattening.
function dropReadouts(s) {
  s = s.replace(/<rules>((?:(?!<\/rules>)[\s\S])*)<\/rules>/gi, (all, inner) => (inner.includes(UNRESOLVED) ? "" : all));
  const kept = s.split(LINE_BREAK).filter((line) => {
    if (!line.includes(UNRESOLVED) && !/\{\{/.test(line)) return true;
    const text = stripTags(line.replace(/\{\{[^}]*\}\}/g, UNRESOLVED)).replace(/\0/g, "").trim();
    return !(text === "" || /^[^.!?]{0,60}:[\s/%+-]*$/.test(text) || !/[a-z]{3}/i.test(text));
  });
  while (kept.length && /^$|:$/.test(stripTags(kept[kept.length - 1]))) kept.pop();
  return kept.join("<br>").replace(/\{\{[^}]*\}\}/g, UNRESOLVED);
}
// Some tooltips are only a pointer to the text for the champion's current
// state: "{{ game_spell_Kayn_Q_main_@f1@ }}" (form), "_@IsEvolved@" (Kha'Zix),
// "_@IsEmpowered@" (Karma), "_@GameModeInteger@". Take the default state, the
// lowest-numbered variant. Inside a sentence only an on/off pair (variants 0
// and 1, as in Syndra W's damage) defaults to 0: a longer list is a runtime
// pick, like Aphelios's current weapon, and stays unresolved.
function pickVariants(raw, strings) {
  const v = (prefix, i) => strings[`${prefix}${i}`.toLowerCase()];
  return raw.split(/(<br\s*\/?>)/i).map((seg) => {
    const m = seg.trim().match(/^\{\{\s*([A-Za-z0-9_]+?)@[^@]+@\s*\}\}$/);
    if (!m) return seg;
    for (let i = 0; i < 10; i++) if (v(m[1], i)) return v(m[1], i);
    return seg;
  }).join("").replace(/\{\{\s*([A-Za-z0-9_]+?)@[^@]+@\s*\}\}/g,
    (all, p) => (v(p, 0) && v(p, 1) && !v(p, 2) ? v(p, 0) : all));
}

// ── Per champion ─────────────────────────────────────────────────────────────
const KEYS = ["Q", "W", "E", "R"];
const stats = { placeholders: 0, unresolved: 0, reasons: new Map() };

// → { text, fromStrings } or null when the spell has no tooltip at all.
function spellText(strings, ctx, ddTooltip, findSpell, tag) {
  const key = ctx.sp.mClientData?.mTooltipData?.mLocKeys?.keyTooltip;
  let raw = key && strings[key.toLowerCase()];
  let template = "@";
  // Aphelios's Q and E have no string-table key (they change with his
  // weapon); Data Dragon's tooltip for them is the weapon summary.
  if (!raw && ddTooltip) { raw = ddTooltip; template = "{{"; }
  if (!raw) return null;
  if (template === "@") raw = pickVariants(raw, strings);
  // Nested string-table references: {{Spell_AurelionSolQ_Name}}.
  for (let i = 0; i < 3 && template === "@"; i++) raw = raw.replace(/\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g, (all, k) => strings[k.toLowerCase()] ?? all);
  // The "%" Riot writes straight after a number is taken with it (see render).
  const re = template === "@" ? /@([^@]*)@(%?)/g : /\{\{\s*([^}]*?)\s*\}\}(%?)/g;
  const out = raw.replace(re, (all, ph, pctSign) => {
    if (/^spellmodifier/i.test(ph)) return "";
    stats.placeholders++;
    try { return resolvePlaceholder(ctx, ph, findSpell, !!pctSign); }
    catch (e) {
      if (!(e instanceof Unresolved)) throw e;
      stats.unresolved++;
      const why = e.message.replace(/\d+(\.\d+)?/g, "N");
      const r = stats.reasons.get(why) || { n: 0, ex: [] };
      r.n++; if (LIST || r.ex.length < 4) r.ex.push(`${tag}:${ph}`); stats.reasons.set(why, r);
      return UNRESOLVED + pctSign;
    }
  });
  return { text: dropUnresolved(plain(dropReadouts(out))), fromStrings: template === "@" };
}

// Flatten a Data Dragon description (plain summary text, no numbers).
const ddPlain = (s) => plain((s || "").replace(/\{\{[^}]*\}\}/g, UNRESOLVED)).replace(/\0/g, "") || null;

async function fetchChamp(dd, strings) {
  const [ddR, binR] = await Promise.allSettled([fetchJson(DD(dd)), fetchJson(BIN(dd))]);
  if (ddR.status !== "fulfilled") throw new Error(`DD ${dd}: ${ddR.reason?.message}`);
  const c = ddR.value.data[Object.keys(ddR.value.data)[0]];
  const bin = binR.status === "fulfilled" ? binR.value : null;
  const rootRec = bin && bin[Object.keys(bin).find((k) => /\/CharacterRecords\/Root$/i.test(k))];
  // The five slots, in Data Dragon's order, with their rank counts. A tooltip
  // can quote another spell ("@spell.AniviaR:SlowAmount@"); that spell gets
  // its own slot's rank count, or 5 if it is not one of the five.
  const slotPaths = rootRec ? [rootRec.mCharacterPassiveSpell, ...(rootRec.spells || [])] : [];
  const slotRanks = [1, ...c.spells.map((s) => s.maxrank || 5)];
  const ctxFor = (key, mSpell) => {
    const i = slotPaths.findIndex((p) => p && p.split("/").pop().toLowerCase() === key);
    return Object.assign(makeSpell(bin, mSpell, i >= 0 ? slotRanks[i] : 5), { slot: i >= 0 ? "PQWER"[i] : null });
  };
  const byName = new Map();
  if (bin) for (const [k, v] of Object.entries(bin)) if (v?.mSpell) byName.set(k.split("/").pop().toLowerCase(), v.mSpell);
  const findSpell = (name) => { const s = byName.get(name.toLowerCase()); return s && ctxFor(name.toLowerCase(), s); };
  // Riot's tooltip text for slot i, else Data Dragon's; `notRiot` records
  // every slot that did not get the string-table text (see the guard below).
  const notRiot = [];
  const desc = (i, ddTooltip, ddSummary) => {
    const p = slotPaths[i];
    const s = p && (bin[p]?.mSpell || byName.get(p.split("/").pop().toLowerCase()));
    const t = s && spellText(strings, ctxFor(p.split("/").pop().toLowerCase(), s), ddTooltip, findSpell, `${dd}.${"PQWER"[i]}`);
    if (!t?.fromStrings || !t.text) notRiot.push(`${dd}.${"PQWER"[i]}`);
    return t?.text || ddPlain(ddSummary);
  };

  const out = {
    title: c.title,
    passive: {
      name: c.passive.name.trim(),
      desc: desc(0, null, c.passive.description),
      img: c.passive.image.full,
    },
  };
  c.spells.forEach((s, i) => {
    if (i > 3) return;
    out[KEYS[i]] = {
      name: s.name.trim(),
      desc: desc(i + 1, s.tooltip, s.description),
      img: s.image.full,
      cd: s.cooldownBurn, cost: s.costBurn, range: s.rangeBurn,
    };
  });
  return { out, notRiot };
}

// The string table is one ~32 MB file for the whole game.
let strings;
try { strings = (await fetchJson(STRINGS)).entries; }
catch (e) {
  console.error(`gen-abilities: CommunityDragon string table unavailable for ${cdPatch} (${e.message}).`);
  console.error("gen-abilities: src/data/abilities.js left unchanged.");
  process.exit(1);
}

const map = {};
const notRiot = [];
const failed = [];
const batch = 8;
for (let i = 0; i < dds.length; i += batch) {
  const slice = dds.slice(i, i + batch);
  const res = await Promise.allSettled(slice.map((dd) => fetchChamp(dd, strings)));
  slice.forEach((dd, j) => {
    if (res[j].status === "fulfilled") { map[dd] = res[j].value.out; notRiot.push(...res[j].value.notRiot); }
    else { failed.push(dd); console.error("!!", dd, res[j].reason?.message); }
  });
}

const share = stats.placeholders ? stats.unresolved / stats.placeholders : 0;
console.log(`numbers: ${stats.placeholders - stats.unresolved}/${stats.placeholders} resolved (${(100 * (1 - share)).toFixed(1)}%)`);
if (stats.reasons.size) {
  console.log("unresolved (dropped from the text):");
  for (const [why, r] of [...stats.reasons].sort((a, b) => b[1].n - a[1].n)) console.log(`  ${r.n}× ${why}  e.g. ${r.ex.join(", ")}`);
}
if (notRiot.length) {
  const shown = notRiot.slice(0, 20).join(", ") + (notRiot.length > 20 ? `, … ${notRiot.length - 20} more` : "");
  console.log(`Data Dragon text for ${notRiot.length} slot(s) without a string-table tooltip: ${shown}`);
}

// Never write a degraded file; keep the previous one. This runs unattended in
// the patch workflow, where a silent fallback would ship worse text to every
// player until someone noticed:
//  • a Data Dragon failure would drop the champion from the file outright;
//  • a slot without Riot's string-table tooltip falls back to Data Dragon's
//    text, mostly a one-line summary with no numbers. Baseline on 16.21: 4
//    (Aphelios Q and E change with his weapon; Kalista's and Zilean's
//    passives point at game-mode variants whose keys CommunityDragon only has
//    as unnamed hashes). More means a missing game-data file (5 slots each: a
//    path change, or a folder not yet published) or a renamed key;
//  • a jump in unresolved numbers means Riot changed its formula format.
//    Baseline on 16.21: ~1% unresolved, almost all runtime counters such as
//    Aurelion Sol's current Stardust, which have no value outside a game.
const MAX_NOT_RIOT = 15;
const MAX_UNRESOLVED = 0.06;
if (failed.length || notRiot.length > MAX_NOT_RIOT || share > MAX_UNRESOLVED) {
  if (failed.length) console.error(`gen-abilities: Data Dragon failed for ${failed.length} champion(s): ${failed.join(", ")}`);
  if (notRiot.length > MAX_NOT_RIOT) console.error(`gen-abilities: ${notRiot.length} ability slots have no CommunityDragon tooltip (limit ${MAX_NOT_RIOT}).`);
  if (share > MAX_UNRESOLVED) console.error(`gen-abilities: ${(100 * share).toFixed(1)}% of ability numbers unresolved (limit ${100 * MAX_UNRESOLVED}%) — the formula format probably changed.`);
  console.error("gen-abilities: src/data/abilities.js left unchanged.");
  process.exit(1);
}

const body = `// ─────────────────────────────────────────────────────────────────────────────
//  abilities.js — GENERATED by helpers/gen-abilities.mjs. Do not edit by hand.
//  Passive + Q/W/E/R per champion: Riot's ability text for patch ${ver} with
//  its numbers filled in (game data via CommunityDragon), plus icon file,
//  cooldown, cost and range (from Data Dragon), keyed by champ.dd. Icons live
//  in public/ddragon/img/{spell,passive}.
// ─────────────────────────────────────────────────────────────────────────────
export const ABILITIES = ${JSON.stringify(map, null, 0)};

export const abilitiesOf = (dd) => ABILITIES[dd] || null;
`;
if (DRY) {
  console.log(`--dry: would write ${Object.keys(map).length} champions (${(Buffer.byteLength(body) / 1024).toFixed(0)} KB)`);
} else {
  fs.writeFileSync(path.join(root, "src/data/abilities.js"), body);
  console.log(`wrote src/data/abilities.js — ${Object.keys(map).length} champions (${(Buffer.byteLength(body) / 1024).toFixed(0)} KB)`);
}
