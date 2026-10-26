// ─────────────────────────────────────────────────────────────────────────────
//  laneOpponent.js — which locked enemy is in your lane.
//
//  In ranked the client gives no enemy positions, so they have to be inferred.
//  The old guess looked at each enemy alone and took the first one whose main
//  lane is your role, so with Jax and Malphite on the enemy team a Top player got
//  whichever was listed first, even when Jax was clearly their only jungler.
//
//  This gives every locked enemy a role at once: the one-enemy-per-role
//  assignment the real role shares make most likely. Shares come from
//  matchupStarts.js (Emerald+, the last 30 days): MATCHUP_STARTS games per
//  champion-role for Top, Mid, Bot and Support, JUNGLE_PETS games for Jungle.
//  A role the data has no games for counts as rare, not impossible (FLOOR). A
//  champion with no data at all falls back to its roster lanes, evenly.
// ─────────────────────────────────────────────────────────────────────────────
import { MATCHUP_STARTS, JUNGLE_PETS } from "./matchupStarts.js";

export const ROLES = ["Top", "Jungle", "Mid", "Bot", "Support"];
const FLOOR = 0.005;

/** { Top: share, Jungle: share, ... } for one champion (Data Dragon key). */
export function roleShares(dd, rosterLanes = []) {
  const games = {};
  for (const role of ROLES) {
    games[role] = role === "Jungle"
      ? (JUNGLE_PETS[dd]?.[2] || 0)
      : (MATCHUP_STARTS[`${dd}|${role}`]?.games || 0);
  }
  const total = ROLES.reduce((sum, role) => sum + games[role], 0);
  const shares = {};
  for (const role of ROLES) {
    const share = total > 0
      ? games[role] / total
      : rosterLanes.includes(role) ? 1 / rosterLanes.length : 0;
    shares[role] = Math.max(FLOOR, share);
  }
  return shares;
}

/**
 * The most likely role for each enemy, one enemy per role: an array of role
 * names in the same order as `dds`. Up to five enemies, so trying every
 * assignment (at most 120) is cheap and exact.
 */
export function assignRoles(dds, lanesOf = () => []) {
  const shares = dds.map((dd) => roleShares(dd, lanesOf(dd)));
  let best = null, bestScore = -Infinity;
  const pick = [], used = new Set();
  const walk = (i, score) => {
    if (i === dds.length) {
      if (score > bestScore) { bestScore = score; best = [...pick]; }
      return;
    }
    for (const role of ROLES) {
      if (used.has(role)) continue;
      used.add(role); pick.push(role);
      walk(i + 1, score + Math.log(shares[i][role]));
      pick.pop(); used.delete(role);
    }
  };
  walk(0, 0);
  return best || [];
}

/** The enemy (Data Dragon key) the assignment puts in `myRole`, or null. */
export function laneOpponent(dds, myRole, lanesOf) {
  if (!myRole || !dds.length || dds.length > ROLES.length) return null;
  const roles = assignRoles(dds, lanesOf);
  const at = roles.indexOf(myRole);
  return at >= 0 ? dds[at] : null;
}
