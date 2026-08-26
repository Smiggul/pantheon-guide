// ─────────────────────────────────────────────────────────────────────────────
//  counterPicker.js — the counter-recommendation engine (keyed by DDragon id).
//
//  Model: every champion has THREATS it pressures you with, and COUNTERS it
//  provides. A COUNTER neutralises specific THREATS (see NEUTRALISE). To rate a
//  candidate vs the enemy laner:
//     score = (their threats you neutralise) − (your threats they neutralise)
//  Traits come from a class default, hand-refined per champ in OVERRIDE — the
//  overrides are where the real interactions live (Poppy W stops dashes, Yasuo
//  windwall eats poke, Pantheon E blocks a Sett W, Morgana black-shields CC…).
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";

// Which THREATS each COUNTER shuts down.
const NEUTRALISE = {
  antidash:    ["dash"],
  antidive:    ["dive"],
  disengage:   ["engage", "dive", "pick"],
  antipoke:    ["poke"],
  antiheal:    ["heal"],
  antitank:    ["tank"],
  cclock:      ["dash", "dive", "engage"],       // hard CC catches mobile threats
  spellshield: ["burst", "pick", "engage"],       // eats the key ability
  outrange:    ["poke"],
  block:       ["poke", "burst", "dps"],          // directional damage block (Pantheon E, windwall, Braum E)
};

export const THREAT_LABEL = {
  dash: "dashes", engage: "hard engage", dive: "backline dives", poke: "long-range poke",
  heal: "heavy healing", dps: "sustained DPS", burst: "burst combos", tank: "a tanky frontline",
  scaling: "hard scaling", pick: "hook / pick threats",
};
export const COUNTER_LABEL = {
  antidash: "shuts down dashes", antidive: "protects the backline", disengage: "disengages their all-in",
  antipoke: "negates their poke", antiheal: "cuts their healing", antitank: "shreds tanks",
  cclock: "locks down mobile threats with CC", spellshield: "blocks their key spell",
  outrange: "out-ranges the poke", block: "blocks their damage with a wall/shield",
};

const CLASS_DEFAULT = {
  JUGGERNAUT: { threats: ["dps", "tank"],    counters: [] },
  DIVER:      { threats: ["dive", "engage"], counters: [] },
  ASSASSIN:   { threats: ["dive", "burst"],  counters: [] },
  SKIRMISHER: { threats: ["dps", "dash"],    counters: [] },
  BURST_MAGE: { threats: ["burst", "poke"],  counters: [] },
  BATTLEMAGE: { threats: ["dps", "poke"],    counters: [] },
  ARTILLERY:  { threats: ["poke"],           counters: ["outrange"] },
  MARKSMAN:   { threats: ["dps"],            counters: ["antitank"] },
  ENCHANTER:  { threats: [],                 counters: ["disengage", "antidive"] },
  CATCHER:    { threats: ["pick", "engage"], counters: ["cclock"] },
  VANGUARD:   { threats: ["engage"],         counters: ["cclock", "antidive"] },
  WARDEN:     { threats: [],                 counters: ["antidive", "disengage", "cclock"] },
  SPECIALIST: { threats: ["poke"],           counters: [] },
};

// Per-champ hand tags (dd keys). When present, fully replace the class default.
const OVERRIDE = {
  // ── Wardens / anti-dash / peel ─────────────────────────────────────────────
  Poppy:      { threats: ["engage"],           counters: ["antidash", "antidive", "disengage", "cclock"] }, // W stops dashes
  Braum:      { threats: [],                   counters: ["antidive", "block", "disengage", "cclock"] },     // E blocks, R engage
  Shen:       { threats: ["engage"],           counters: ["antidive", "block", "cclock"] },                  // W blocks autos, R save, E taunt
  TahmKench:  { threats: ["pick"],             counters: ["antidive", "disengage"] },                        // W devour saves ally
  Tryndamere: { threats: ["dps", "dash"],      counters: [] },
  // ── Anti-dash / anti-mobility ──────────────────────────────────────────────
  Cassiopeia: { threats: ["dps", "poke", "heal"], counters: ["antidash"] },   // W grounds, R can't-dash
  Trundle:    { threats: ["dps"],              counters: ["antidash", "antitank"] },                          // pillar + R steal resists
  Anivia:     { threats: ["burst", "poke"],    counters: ["antidash", "disengage"] },                         // wall
  JarvanIV:   { threats: ["engage", "dive"],   counters: ["cclock"] },
  Azir:       { threats: ["poke", "dps"],      counters: ["disengage", "outrange"] },                         // R wall shove
  Gragas:     { threats: ["engage"],           counters: ["disengage", "cclock"] },                           // E/R body + knockback
  // ── Windwall / projectile & damage block ───────────────────────────────────
  Yasuo:      { threats: ["dash", "dps"],      counters: ["antipoke"] },      // windwall eats poke/projectiles
  Yone:       { threats: ["dash", "dps"],      counters: [] },
  Pantheon:   { threats: ["engage", "dive"],   counters: ["block", "cclock"] }, // E blocks (vs Sett W), W stun
  Samira:     { threats: ["dps", "dive"],      counters: ["antipoke"] },      // W blocks projectiles
  Nilah:      { threats: ["dps"],              counters: ["antipoke", "antitank"] },
  // ── Spellshields / CC immunity ─────────────────────────────────────────────
  Sivir:      { threats: ["dps"],              counters: ["spellshield", "antitank"] },  // E
  Morgana:    { threats: ["pick"],             counters: ["spellshield", "cclock"] },    // black shield, bind
  Malzahar:   { threats: ["dps", "pick"],      counters: ["spellshield"] },              // E passive shield, R suppress
  Sett:       { threats: ["engage", "dps"],    counters: [] },
  // ── Anti-tank (%HP / true damage) ──────────────────────────────────────────
  Vayne:      { threats: ["dps"],              counters: ["antitank", "antidive"] },     // % true, condemn
  Fiora:      { threats: ["dps", "dash"],      counters: ["antitank"] },                 // % true
  Gwen:       { threats: ["dps", "dash"],      counters: ["antitank"] },
  KogMaw:     { threats: ["dps"],              counters: ["antitank"] },
  Kaisa:      { threats: ["dps", "dive"],      counters: ["antitank"] },
  Belveth:    { threats: ["dps", "dive"],      counters: ["antitank"] },
  // ── Anti-heal identity ─────────────────────────────────────────────────────
  Katarina:   { threats: ["dive", "burst"],    counters: [] },
  // ── Poke / artillery / outrange ────────────────────────────────────────────
  Xerath:     { threats: ["poke", "burst"],    counters: ["outrange"] },
  Ziggs:      { threats: ["poke"],             counters: ["outrange", "antidive"] },     // satchel knock
  Velkoz:     { threats: ["poke", "burst"],    counters: ["outrange"] },
  Jayce:      { threats: ["poke", "dps"],      counters: ["outrange"] },
  Corki:      { threats: ["poke", "dps"],      counters: ["outrange"] },
  Caitlyn:    { threats: ["poke", "dps"],      counters: ["outrange"] },
  // ── Heavy healing threats ──────────────────────────────────────────────────
  Aatrox:     { threats: ["dive", "engage", "heal"], counters: [] },
  Vladimir:   { threats: ["dps", "heal", "poke"],    counters: [] },
  Swain:      { threats: ["dps", "heal", "engage"],  counters: [] },
  Soraka:     { threats: ["heal"],             counters: ["disengage", "antipoke"] },
  Warwick:    { threats: ["dive", "engage", "heal"], counters: [] },
  Fiddlesticks:{ threats: ["engage", "burst"], counters: [] },                            // R flank / silence — but engage-y
  // ── Pick / hook engage ─────────────────────────────────────────────────────
  Blitzcrank: { threats: ["pick", "engage"],   counters: ["cclock"] },
  Thresh:     { threats: ["pick", "engage"],   counters: ["cclock", "disengage"] },
  Nautilus:   { threats: ["pick", "engage"],   counters: ["cclock"] },
  Leona:      { threats: ["engage"],           counters: ["cclock"] },
  // ── Global / scaling flags ─────────────────────────────────────────────────
  Nasus:      { threats: ["dps", "scaling", "tank"], counters: [] },
  Kayle:      { threats: ["dps", "scaling"],   counters: [] },
  Kassadin:   { threats: ["dive", "burst", "scaling"], counters: [] },
  Veigar:     { threats: ["burst", "scaling"], counters: ["cclock"] },                    // cage
  Vex:        { threats: ["burst"],            counters: ["antidash", "cclock"] },         // R + fear punish dashes
  // ── Mid assassins / burst ──────────────────────────────────────────────────
  Zed:        { threats: ["dive", "burst"],    counters: [] },
  Talon:      { threats: ["dive", "burst"],    counters: [] },
  Leblanc:    { threats: ["dive", "burst"],    counters: [] },
  Qiyana:     { threats: ["dive", "burst", "dash"], counters: [] },
  Fizz:       { threats: ["dive", "burst"],    counters: ["antipoke"] },                  // E untargetable dodges
  Akali:      { threats: ["dive", "burst"],    counters: ["antipoke"] },                  // shroud
};

// Resolve a champion's traits (override wins, else class default, else empty).
export function traitsOf(dd) {
  if (OVERRIDE[dd]) return OVERRIDE[dd];
  const c = classOf(dd);
  return CLASS_DEFAULT[c] || { threats: [], counters: [] };
}

const neutralises = (counters, threat) => counters.some((c) => (NEUTRALISE[c] || []).includes(threat));

// How `me` fares vs enemy laner `foe`: which of foe's threats I handle, which of
// mine they handle, and a net score.
export function matchup(meDd, foeDd) {
  const me = traitsOf(meDd), foe = traitsOf(foeDd);
  const youCounter = [...new Set(foe.threats.filter((t) => neutralises(me.counters, t)))];
  const theyCounter = [...new Set(me.threats.filter((t) => neutralises(foe.counters, t)))];
  return { youCounter, theyCounter, score: youCounter.length - theyCounter.length };
}

// Rank candidate dd ids as counters to the enemy laner. Returns sorted desc.
export function bestCountersVs(foeDd, candidateDds) {
  return candidateDds
    .filter((dd) => dd !== foeDd)
    .map((dd) => ({ dd, ...matchup(dd, foeDd) }))
    .sort((a, b) => b.score - a.score);
}
