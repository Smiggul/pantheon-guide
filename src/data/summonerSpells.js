// ─────────────────────────────────────────────────────────────────────────────
//  summonerSpells.js  —  recommended summoner spells per champion/role.
//
//  Flash is the near-universal first spell; the SECOND spell follows stable
//  role + class conventions (Jungle → Smite, ADC → Heal, enchanter/warden
//  support → Exhaust, …). Those conventions are encoded in `secondSpell()`,
//  so all 173 champions resolve without a per-champion entry. SPELL_OVERRIDES
//  captures the well-known deviations (snowball tops that take Ignite, scaling
//  mids/tops that take Teleport, Ghost users, etc.).
//
//  Overlay pattern (like champClasses / altBuilds / itemCounters) — no edits to
//  the 173 champ files. Keyed by DDragon id (matches champ.dd / classOf).
//  Spell names must match public/ddragon/data/summonerSpells.json.
// ─────────────────────────────────────────────────────────────────────────────
import { classOf } from "./champClasses.js";

// The conventional second spell for a role + champion class.
function secondSpell(role, klass) {
  switch (role) {
    case "Jungle":  return "Smite";
    case "Bot":     return "Heal";
    case "Support": return (klass === "ENCHANTER" || klass === "WARDEN") ? "Exhaust" : "Ignite";
    case "Mid":     return (klass === "BATTLEMAGE" || klass === "ARTILLERY" || klass === "SPECIALIST")
                      ? "Teleport" : "Ignite";
    case "Top":     return (klass === "JUGGERNAUT" || klass === "SKIRMISHER") ? "Ignite" : "Teleport";
    default:        return "Ignite";
  }
}

// Per champion+role deviations from the archetype default. Key: `${dd}:${role}`.
export const SPELL_OVERRIDES = {
  // ── Scaling / global-ult tops that take Teleport over the juggernaut Ignite ──
  "Nasus:Top":     ["Flash", "Teleport"],
  "DrMundo:Top":   ["Flash", "Teleport"],
  "KSante:Top":    ["Flash", "Teleport"],
  "Sion:Top":      ["Flash", "Teleport"],
  "Yorick:Top":    ["Flash", "Teleport"],
  "Jax:Top":       ["Flash", "Teleport"],
  "Fiora:Top":     ["Flash", "Teleport"],
  "Gwen:Top":      ["Flash", "Teleport"],
  "Kayle:Top":     ["Flash", "Teleport"],
  // ── Ghost bruisers (proxy / perma-chase playstyles) ──
  "Singed:Top":    ["Flash", "Ghost"],
  "Udyr:Top":      ["Flash", "Ghost"],
  // ── Aggressive tops/divers that snowball with Ignite over Teleport ──
  "Renekton:Top":  ["Flash", "Ignite"],
  "Camille:Top":   ["Flash", "Ignite"],
  "Kled:Top":      ["Flash", "Ignite"],
  "Quinn:Top":     ["Flash", "Ignite"],
  "Gangplank:Top": ["Flash", "Teleport"],
  // ── Scaling / control / global mids that take Teleport over Ignite ──
  "Ryze:Mid":      ["Flash", "Teleport"],
  "TwistedFate:Mid":["Flash", "Teleport"],
  "Azir:Mid":      ["Flash", "Teleport"],
  "Viktor:Mid":    ["Flash", "Teleport"],
  "Kassadin:Mid":  ["Flash", "Teleport"],
  // ── Mid champs that keep Ignite despite a Teleport-leaning class ──
  "Cassiopeia:Mid":["Flash", "Ignite"],
  "Vladimir:Mid":  ["Flash", "Ignite"],
  "Swain:Mid":     ["Flash", "Ignite"],
  "Karthus:Mid":   ["Flash", "Teleport"],
  // ── Supports that run Exhaust despite an aggressive class ──
  "Pyke:Support":  ["Flash", "Ignite"],
  "Rakan:Support": ["Flash", "Exhaust"],
  "Nautilus:Support":["Flash", "Ignite"],
};

// Resolve the recommended [first, second] spell pair for a champ/role.
export function spellsFor(champDd, role) {
  const hit = SPELL_OVERRIDES[`${champDd}:${role}`];
  if (hit) return hit;
  return ["Flash", secondSpell(role, classOf(champDd))];
}

export default spellsFor;
