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

// Fallback pet when a build doesn't name one, by the champion's class.
const PET_BY_CLASS = {
  ASSASSIN: "Scorchclaw Pup", SKIRMISHER: "Scorchclaw Pup", DIVER: "Scorchclaw Pup",
  JUGGERNAUT: "Mosstomper Seedling", VANGUARD: "Mosstomper Seedling", WARDEN: "Mosstomper Seedling",
  BATTLEMAGE: "Gustwalker Hatchling", BURST_MAGE: "Gustwalker Hatchling", ARTILLERY: "Gustwalker Hatchling",
  MARKSMAN: "Gustwalker Hatchling", ENCHANTER: "Gustwalker Hatchling", CATCHER: "Gustwalker Hatchling",
  SPECIALIST: "Gustwalker Hatchling",
};

// champDd: DDragon id (for the class fallback); roleData: the Jungle role block;
// alt: the selected alt build (its pet overrides the role's).
export const petFor = (champDd, roleData, alt) =>
  (alt && alt.pet) || (roleData && roleData.pet) || PET_BY_CLASS[classOf(champDd)] || "Gustwalker Hatchling";
