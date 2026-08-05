// ─────────────────────────────────────────────────────────────────────────────
//  junglePets.js  —  the three jungle companions (smite pets) and which one a
//  given jungle build wants. A jungle role/alt-build can name its own `pet`;
//  otherwise we infer a sensible default from the champion's class.
//
//  Shared by App.jsx (the on-screen badge) and lcuExport.js (the item set), so
//  the recommendation and the import always agree.
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";

export const PET_INFO = {
  "Scorchclaw Pup": {
    tag: "Damage",
    why: "Bonus on-hit damage on your combo — the aggressive pick for early 1v1 duels, invades and faster clears.",
  },
  "Gustwalker Hatchling": {
    tag: "Mobility",
    why: "Move speed out of brush and after camps — the tempo pick to reach more ganks and kite skirmishes.",
  },
  "Mosstomper Seedling": {
    tag: "Durability",
    why: "A scaling shield after camps / out of combat — the durable pick for diving and surviving extended fights.",
  },
};

const SCORCH = "Scorchclaw Pup";     // aggressive early — duelists, gankers, assassins
const MOSS   = "Mosstomper Seedling"; // durability — tanks, juggernauts, weak-early scalers
const GUST   = "Gustwalker Hatchling"; // mobility — kite/roam AP, tempo gankers

// Curated pet per jungle champion (DDragon id). Pet choice is playstyle-driven —
// stats sites don't publish granular pet pick rates, so this is grounded in the
// meta framework (patch 26.14–26.15): Scorchclaw for aggressive early 1v1s,
// Mosstomper for durability/scaling frontline, Gustwalker for mobility/kite/roam.
// A champ file's own `pet` still overrides this (e.g. Briar). Keep the DD keys
// exact — Wukong is "MonkeyKing", Kha'Zix "Khazix", Bel'Veth "Belveth", etc.
const PET_BY_CHAMP = {
  // ── Scorchclaw — aggressive early damage / duel / assassinate ──
  Pantheon: SCORCH, Renekton: SCORCH, MonkeyKing: SCORCH, RekSai: SCORCH, Warwick: SCORCH,
  Udyr: SCORCH, Sett: SCORCH, Nocturne: SCORCH, Briar: SCORCH, LeeSin: SCORCH, Zaahen: SCORCH,
  Ambessa: SCORCH, Olaf: SCORCH, Jax: SCORCH, Kindred: SCORCH, Vi: SCORCH, Naafiri: SCORCH,
  Fizz: SCORCH, Kayn: SCORCH, Elise: SCORCH, Viego: SCORCH, Aatrox: SCORCH, Sylas: SCORCH,
  Ekko: SCORCH, Talon: SCORCH, Diana: SCORCH, Rengar: SCORCH, Shaco: SCORCH, Nidalee: SCORCH,
  Graves: SCORCH, Khazix: SCORCH, JarvanIV: SCORCH, XinZhao: SCORCH, Belveth: SCORCH, Trundle: SCORCH,
  // ── Mosstomper — tank / juggernaut / weak-early scaler ──
  Sion: MOSS, Volibear: MOSS, Zac: MOSS, Yorick: MOSS, Fiddlesticks: MOSS, MasterYi: MOSS,
  Karthus: MOSS, Maokai: MOSS, Malphite: MOSS, Amumu: MOSS, Sejuani: MOSS, Mordekaiser: MOSS,
  Nasus: MOSS, Evelynn: MOSS, Skarner: MOSS, DrMundo: MOSS, Rammus: MOSS,
  // ── Gustwalker — mobility / kite / roam / clear tempo ──
  Teemo: GUST, Shyvana: GUST, Gragas: GUST, Zyra: GUST, Taliyah: GUST, Hecarim: GUST,
  Lillia: GUST, Nunu: GUST, Ivern: GUST,
};

// Class fallback for any jungler not in the curated map (new champs, off-meta jg).
const PET_BY_CLASS = {
  ASSASSIN: SCORCH, SKIRMISHER: SCORCH, DIVER: SCORCH,
  JUGGERNAUT: MOSS, VANGUARD: MOSS, WARDEN: MOSS,
  BATTLEMAGE: GUST, BURST_MAGE: GUST, ARTILLERY: GUST,
  MARKSMAN: GUST, ENCHANTER: GUST, CATCHER: GUST, SPECIALIST: GUST,
};

// champDd: DDragon id; roleData: the Jungle role block; alt: the selected alt
// build. Precedence: alt build's pet › role's own pet › curated per-champ pick ›
// class fallback › Gustwalker.
export const petFor = (champDd, roleData, alt) =>
  (alt && alt.pet) || (roleData && roleData.pet) ||
  PET_BY_CHAMP[champDd] || PET_BY_CLASS[classOf(champDd)] || GUST;
