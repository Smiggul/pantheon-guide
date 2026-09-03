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
import { CHAMPS } from "./champs/index.js";
import { counterInteractions } from "./abilityInteractions.js";

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
  armorstack:  ["ad", "auto"],                    // a kit that hands out armour blanks physical damage
  mrstack:     ["ap"],                            // ...and magic resist blanks magic damage
  antiauto:    ["auto"],                          // blind / dodge / attack-speed slow / damage reflect
};

export const THREAT_LABEL = {
  dash: "dashes", engage: "hard engage", dive: "backline dives", poke: "long-range poke",
  heal: "heavy healing", dps: "sustained DPS", burst: "burst combos", tank: "a tanky frontline",
  scaling: "hard scaling", pick: "hook / pick threats",
  ad: "physical damage", ap: "magic damage", auto: "auto-attack DPS",
};
export const COUNTER_LABEL = {
  antidash: "shuts down dashes", antidive: "protects the backline", disengage: "disengages their all-in",
  antipoke: "negates their poke", antiheal: "cuts their healing", antitank: "shreds tanks",
  cclock: "locks down mobile threats with CC", spellshield: "blocks their key spell",
  outrange: "out-ranges the poke", block: "blocks their damage with a wall/shield",
};

// A champion's structural WEAKNESSES (what their kit can't answer) and the
// PUNISHES tag for kits that specifically prey on them. Threats/counters model
// ability interactions; this models body type — an unavoidable point-and-click
// lockdown (Sett E/R) is simply free against something with no dash.
export const WEAKNESS_LABEL = {
  immobile: "no escape once you're on them",
  squishy:  "no health to survive your burst",
};
export const PUNISH_LABEL = {
  immobile: "punishes immobile targets",
  squishy:  "punishes squishy targets",
};

const CLASS_DEFAULT = {
  JUGGERNAUT: { threats: ["dps", "tank"],    counters: [],                                  weak: ["immobile"] },
  DIVER:      { threats: ["dive", "engage"], counters: [],                                  weak: [] },
  ASSASSIN:   { threats: ["dive", "burst"],  counters: [],                                  weak: ["squishy"] },
  SKIRMISHER: { threats: ["dps", "dash"],    counters: [],                                  weak: [] },
  BURST_MAGE: { threats: ["burst", "poke"],  counters: [],                                  weak: ["squishy", "immobile"] },
  BATTLEMAGE: { threats: ["dps", "poke"],    counters: [],                                  weak: ["immobile"] },
  ARTILLERY:  { threats: ["poke"],           counters: ["outrange"],                        weak: ["squishy", "immobile"], punishes: ["immobile"] },
  MARKSMAN:   { threats: ["dps"],            counters: ["antitank"],                        weak: ["squishy"],             punishes: ["immobile"] },
  ENCHANTER:  { threats: [],                 counters: ["disengage", "antidive"],           weak: ["squishy", "immobile"] },
  CATCHER:    { threats: ["pick", "engage"], counters: ["cclock"],                          weak: ["squishy", "immobile"] },
  VANGUARD:   { threats: ["engage"],         counters: ["cclock", "antidive"],              weak: [] },
  WARDEN:     { threats: [],                 counters: ["antidive", "disengage", "cclock"], weak: [] },
  SPECIALIST: { threats: ["poke"],           counters: [],                                  weak: [],                      punishes: ["immobile"] },
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
  // E (Facebreaker) pulls both sides together and stuns; R (Show Stopper) is a
  // point-and-click grab. Neither can be dodged by something with no dash.
  Sett:       { threats: ["engage", "dps"],    counters: ["cclock", "antidive"], punishes: ["immobile"] },
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

// ── Damage profile, derived from each champion's own build ───────────────────
// A champion's damage type is a matchup fact in its own right: Malphite is a
// free lane into Pantheon not because of any threat/counter pairing but because
// Pantheon is physical damage and Malphite's kit hands him armour. Rather than
// hand-tagging 173 champions, this reads the build data already in the roster —
// AP item markers in any of a champion's core paths mean AP damage, on-hit and
// crit markers mean the damage arrives as auto-attacks.
const AP_MARK = /Rabadon|Luden|Liandry|Shadowflame|Nashor|Riftmaker|Malignance|Rod of Ages|Archangel|Lich Bane|Rylai|Void Staff|Zhonya|Stormsurge|Cosmic Drive|Rocketbelt|Cryptbloom|Morellonomicon|Horizon Focus|Blackfire|Bloodletter|Seraph|Dawncore|Mejai/i;
const AUTO_MARK = /Kraken|Guinsoo|Blade of The Ruined King|Runaan|Wit's End|Nashor|Terminus|Rageknife|Statikk|Infinity Edge|Navori|Hexoptics|Fiendhunter/i;

const buildTextOf = (c) => {
  const parts = [];
  const blocks = c.roles ? Object.values(c.roles) : [c];
  for (const b of blocks) {
    if (b?.corePath) parts.push(b.corePath);
    if (b?.sideItems) parts.push(b.sideItems.join(" "));
  }
  for (const alts of Object.values(c.altBuilds || {})) {
    for (const a of alts) if (a?.corePath) parts.push(a.corePath);
  }
  return parts.join(" ");
};

const DAMAGE = new Map();   // dd -> ["ad"|"ap", ...("auto")]
for (const c of CHAMPS) {
  const t = buildTextOf(c);
  const d = [AP_MARK.test(t) ? "ap" : "ad"];
  if (AUTO_MARK.test(t) || classOf(c.dd) === "MARKSMAN") d.push("auto");
  DAMAGE.set(c.dd, d);
}

// ── Defensive kits ───────────────────────────────────────────────────────────
// Hand-tagged, because these come from ability text rather than items and a
// regex over Riot's prose produced too many false positives to trust (Pantheon
// reads as an armour-stacker off "armor penetration"). Each tag generalises to
// every matchup at once: armorstack on Malphite answers all ~94 AD champions.
const KIT = {
  Malphite:  { counters: ["armorstack", "antiauto"] },  // W bonus armour, E attack-speed slow
  Rammus:    { counters: ["armorstack", "mrstack", "antiauto"] }, // W armour + MR, reflects basic attacks
  Taric:     { counters: ["armorstack", "mrstack"] },   // W Bastion grants resists to himself and an ally
  Leona:     { counters: ["armorstack", "mrstack"] },   // W Eclipse
  Braum:     { counters: ["armorstack", "mrstack", "antiauto"] }, // passive resists, E blocks
  Jax:       { counters: ["armorstack", "mrstack", "antiauto"] }, // R resists, E dodges basic attacks
  Galio:     { counters: ["mrstack"] },                 // passive + W magic damage reduction
  Kassadin:  { counters: ["mrstack"] },                 // passive Void Stone
  Teemo:     { counters: ["antiauto"] },                // Q blind
  Quinn:     { counters: ["antiauto"] },                // Q Blinding Assault
  Shen:      { counters: ["antiauto"] },                // W blocks basic attacks
  Pantheon:  { counters: ["antiauto"] },                // E blocks damage from one direction
  Yasuo:     { counters: ["antiauto"] },                // W Wind Wall eats projectiles
  Nilah:     { counters: ["antiauto"] },                // W dodges
  Fiora:     { counters: ["antiauto"] },                // W parry
  Poppy:     { counters: ["antiauto"] },                // W blocks dashes and grounds
};

// Resolve a champion's traits (override wins, else class default, else empty).
export function traitsOf(dd) {
  const base = CLASS_DEFAULT[classOf(dd)] || { threats: [], counters: [], weak: [] };
  const o = OVERRIDE[dd];
  // An override replaces threats/counters outright, but body type still comes
  // from the class unless the override says otherwise.
  // Damage type is ADDED to whatever the champion already threatens with, and
  // defensive kit traits are ADDED to its counters — neither replaces the
  // hand-authored data, they layer on top of it.
  const dmg = DAMAGE.get(dd) || [];
  const kit = KIT[dd]?.counters || [];
  return {
    threats:  [...new Set([...(o?.threats  ?? base.threats  ?? []), ...dmg])],
    counters: [...new Set([...(o?.counters ?? base.counters ?? []), ...kit])],
    weak:     o?.weak     ?? base.weak     ?? [],
    punishes: o?.punishes ?? base.punishes ?? [],
  };
}

const neutralises = (counters, threat) => counters.some((c) => (NEUTRALISE[c] || []).includes(threat));

// How `me` fares vs enemy laner `foe`: which of foe's threats I handle, which of
// mine they handle, and a net score.
/** Every derived tag a champion carries — used to resolve bTag interactions. */
export function tagsOf(dd) {
  const t = traitsOf(dd);
  return [...new Set([...t.threats, ...t.weak])];
}

export function matchup(meDd, foeDd) {
  const me = traitsOf(meDd), foe = traitsOf(foeDd);
  const youCounter  = [...new Set(foe.threats.filter((t) => neutralises(me.counters, t)))];
  const theyCounter = [...new Set(me.threats.filter((t) => neutralises(foe.counters, t)))];
  // Body-type exploits: my kit preying on what their kit structurally lacks.
  const youExploit  = [...new Set(foe.weak.filter((w) => me.punishes.includes(w)))];
  const theyExploit = [...new Set(me.weak.filter((w) => foe.punishes.includes(w)))];
  // Named ability interactions sit on top of the trait model: they are the
  // cases where one specific spell invalidates a kit, which categories miss.
  const foeTags = [...new Set([...foe.threats, ...foe.weak])];
  const meTags  = [...new Set([...me.threats,  ...me.weak])];
  const youNotes  = counterInteractions(meDd, foeDd, foeTags);
  const theyNotes = counterInteractions(foeDd, meDd, meTags);
  const w = (n) => n.reduce((sum, e) => sum + (e.weight || 1), 0);

  return {
    youCounter, theyCounter, youExploit, theyExploit,
    youNotes, theyNotes,
    score: (youCounter.length + youExploit.length + w(youNotes)) -
           (theyCounter.length + theyExploit.length + w(theyNotes)),
  };
}

// Rank candidate dd ids as counters to the enemy laner. Returns sorted desc.
export function bestCountersVs(foeDd, candidateDds) {
  return candidateDds
    .filter((dd) => dd !== foeDd)
    .map((dd) => ({ dd, ...matchup(dd, foeDd) }))
    .sort((a, b) => b.score - a.score);
}

// Aggregate matchup vs a WHOLE enemy comp: the net score summed over every
// enemy, plus how many enemies each of your counters answers (`handles`) and how
// many punish you (`punished`) — so "handles 3× dashes" falls out naturally.
export function scoreVsComp(meDd, foeDds) {
  let score = 0; const handles = {}, punished = {};
  for (const f of foeDds) {
    const mu = matchup(meDd, f);
    score += mu.score;
    for (const t of mu.youCounter) handles[t] = (handles[t] || 0) + 1;
    for (const t of mu.theyCounter) punished[t] = (punished[t] || 0) + 1;
  }
  return { score, handles, punished };
}

// Rank candidates as the best pick against the whole enemy comp. Sorted desc.
export function bestCountersVsComp(foeDds, candidateDds) {
  const foes = new Set(foeDds);
  return candidateDds
    .filter((dd) => !foes.has(dd))
    .map((dd) => ({ dd, ...scoreVsComp(dd, foeDds) }))
    .sort((a, b) => b.score - a.score);
}

// ── Draft-time comp analysis ────────────────────────────────────────────────
// What an enemy team, as drafted so far, actually threatens you with — the
// question a build page can't answer because it only knows one enemy at a time.
export function compProfile(foeDds) {
  const dmg = { ad: 0, ap: 0 };
  const threats = {};
  let auto = 0;
  for (const dd of foeDds) {
    const t = traitsOf(dd);
    if (t.threats.includes("ap")) dmg.ap++; else dmg.ad++;
    if (t.threats.includes("auto")) auto++;
    for (const th of t.threats) {
      if (th === "ad" || th === "ap" || th === "auto") continue;   // counted separately
      threats[th] = (threats[th] || 0) + 1;
    }
  }
  const n = foeDds.length || 1;
  const lean = dmg.ad === dmg.ap ? "mixed" : dmg.ad > dmg.ap ? "physical" : "magic";
  // The single most useful build instruction that falls out of a damage split.
  const buildAdvice =
    lean === "physical" && dmg.ad >= Math.ceil(n * 0.6) ? "Stack armour — Plated Steelcaps, Frozen Heart, Randuin's Omen. Thornmail if they also heal."
    : lean === "magic" && dmg.ap >= Math.ceil(n * 0.6) ? "Stack magic resist — Mercury's Treads, Spirit Visage, Kaenic Rookern. Force of Nature into sustained magic damage."
    : "Damage is split — take balanced resists (Steelcaps or Mercury's by lane) and prioritise health items that scale against both.";
  const top = Object.entries(threats).sort((a, b) => b[1] - a[1]);
  return { count: foeDds.length, dmg, lean, auto, threats, topThreats: top, buildAdvice };
}

// Which of MY named ability interactions apply against this comp, and which of
// theirs apply to me — the "your kit already answers this" readout.
export function compInteractions(meDd, foeDds) {
  const mine = [], theirs = [];
  for (const f of foeDds) {
    const mu = matchup(meDd, f);
    for (const n of mu.youNotes) mine.push({ vs: f, ...n });
    for (const n of mu.theyNotes) theirs.push({ vs: f, ...n });
  }
  return { mine, theirs };
}
