// ─────────────────────────────────────────────────────────────────────────────
//  synergies.js  —  "who plays well WITH this champion". Mirrors the draft ban /
//  replacement tiles: given a champ + the role you're in, suggest 3 roster
//  teammates whose kit complements yours (the classic bot-lane duo, a jungler's
//  gank buddies, a laner's dive jungler…).
//
//  Heuristic, not hand-authored per champ — it keys off role + class so every
//  champion has sensible synergies immediately. A champ file can still override
//  by setting its own `synergies:[...]` (read first in App.jsx), exactly like
//  `bans` / `replacements`. Names are DDragon display names (resolve via toDD).
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";

// Roster teammates grouped by the archetype that makes them a good duo/partner.
const HYPERCARRY_ADC = ["Jinx", "Kog'Maw", "Zeri", "Aphelios", "Twitch", "Vayne", "Jhin"];
const AGGRO_ADC      = ["Draven", "Kalista", "Miss Fortune", "Lucian", "Samira", "Caitlyn"];
const ENCHANTER_SUP  = ["Lulu", "Janna", "Nami", "Milio", "Soraka", "Karma"];
const ENGAGE_SUP     = ["Leona", "Nautilus", "Rell", "Thresh", "Alistar", "Rakan"];
const ENGAGE_JUNGLE  = ["Jarvan IV", "Vi", "Sejuani", "Amumu", "Zac", "Maokai"];
const CC_LANERS      = ["Leona", "Malphite", "Lissandra", "Orianna", "Nautilus", "Sett"]; // gank buddies

// Immobile, scaling marksmen — the carries an enchanter wants to pocket-peel.
// Everyone else in Bot reads as a lane-bully / mobile ADC that likes an engage
// support making picks.
const HYPERCARRY = new Set(["Jinx", "KogMaw", "Zeri", "Aphelios", "Twitch", "Vayne",
  "Jhin", "Sivir", "Varus", "Ashe", "Caitlyn"]);

// champDd: DDragon id, champDisplay: display name (to drop self), role: lane.
export function synergiesFor(champDd, champDisplay, role) {
  const cls = classOf(champDd);
  let pool;
  switch (role) {
    case "Support": pool = cls === "ENCHANTER" ? HYPERCARRY_ADC : AGGRO_ADC; break;
    case "Bot":     pool = HYPERCARRY.has(champDd) ? ENCHANTER_SUP : ENGAGE_SUP; break;
    case "Jungle":  pool = CC_LANERS; break;    // laners with follow-up CC for ganks
    case "Mid":     pool = ENGAGE_JUNGLE; break; // a jungler to combo dives with
    case "Top":     pool = ENGAGE_JUNGLE; break; // a jungler who dives your lane
    default:        pool = ENGAGE_JUNGLE;
  }
  return pool.filter((n) => n !== champDisplay).slice(0, 3);
}

export default synergiesFor;
