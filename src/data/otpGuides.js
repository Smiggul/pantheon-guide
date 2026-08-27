// ─────────────────────────────────────────────────────────────────────────────
//  otpGuides.js — curated "How to Play" deep-dives, seeded from champion OTP /
//  one-trick creators (credited per entry). Keyed by champ.dd. When an entry
//  exists the How-to-Play tab surfaces it; otherwise the tab derives its guide
//  from the champion's abilities, build, runes, counters and synergies.
//
//  Fields:
//   otp        — the creator the tips are sourced from (credit shown in-app)
//   role       — the role the guide is written for
//   identity   — one-paragraph "who this champion is / win condition"
//   combos     — [{ name, steps }] the bread-and-butter sequences
//   spikes     — power-spike bullets (when you're strongest)
//   watchOut   — mistakes / danger bullets for a first-timer
//   itemNotes  — champion-specific itemization wisdom beyond the core path
//   matchups   — free-text on who you beat / who beats you and why
// ─────────────────────────────────────────────────────────────────────────────
export const OTP_GUIDES = {
  Pantheon: {
    otp: "Spear Shot", role: "Top",
    identity: "An early-game lane bully and roaming assassin. Pantheon wins levels 1–6 with his point-and-click stun and passive crits, then uses Grand Starfall to decide side lanes before 20 minutes. He falls off late, so every early lead has to be converted into roams, plates and objectives.",
    combos: [
      { name: "Poke / stack", steps: "Tap Q (Comet Spear) on cooldown to chip the enemy and build Mortal Will — the 5th stack empowers your next ability." },
      { name: "All-in (lvl 3+)", steps: "W (Shield Vault) point-and-click stun → empowered Q → E (Aegis Assault) to block their counter-damage → weave autos. Save W's stun to lock a dash or a channel." },
      { name: "Roam kill", steps: "Once W→E is online, R (Grand Starfall) into a side lane for a global gank — land on top of the target, W-stun, empowered Q, E." },
    ],
    spikes: [
      "Levels 1–3: the W-stun + passive-crit combo makes you a hard lane bully — look for a first-blood all-in at 3.",
      "Level 6: Grand Starfall turns map pressure into kills — roam to a winning side lane.",
      "Two lethality items (Voltaic Cyclosword → Cyclone/Cleaver): your burst one-shots squishies.",
    ],
    watchOut: [
      "You fall off hard past 20 minutes — force the game while you're ahead; don't sit and farm.",
      "Aegis Assault (E) only blocks damage from the direction you face — turn it toward the biggest threat.",
      "Against tanks and scalers (Malphite, Cho'Gath, Dr. Mundo) you can't kill them 1v1 — trade short and roam instead.",
    ],
    itemNotes: "Lethality-tempo (Voltaic Cyclosword) is the identity build for snowballing; the Eclipse bruiser line is the safer, higher-winrate pick into heavy AD. Grab an early Serrated Dirk and boots to power-spike your roams.",
    matchups: "Strong into immobile mages and melee scalers early — Anivia, Karthus, Ryze, Sion, Lux. Struggles into Malphite, Kassadin, Cho'Gath, Dr. Mundo and Morgana (spell shield eats your stun).",
  },

  Briar: {
    otp: "LoganJg", role: "Jungle",
    identity: "A blood-frenzy diver with one of the fastest clears in the game. Briar invades freely, rushes her first damage item, and plays extremely aggressively on that spike — her W sends her into an uncontrollable frenzy, so the skill is choosing WHEN to commit and chaining it into a target you can finish.",
    combos: [
      { name: "Standard dive", steps: "W1 (enter frenzy) → Q gap-close → auto → recast W2 early, then cancel your own frenzy with E when the target is low." },
      { name: "Stun buffer", steps: "W1 → Q → recast W2 early → buffer E right as the stun ends for the knockback + heal." },
    ],
    spikes: [
      "First damage item — this is your big spike; play very aggressively and look to invade or dive the moment it's done.",
      "During W (frenzy) auto-attack as much as possible: it ramps and feeds the W2 execute damage.",
    ],
    watchOut: [
      "W removes your control — you charge the nearest enemy. Only pop it when you can commit to a target you can kill.",
      "E (Chilling Scream) is your only self-peel and frenzy-cancel — hold it to reposition or to finish, not on cooldown.",
      "You're low-range and squishy before items; a failed dive with no E leaves you dead. Respect hard CC.",
    ],
    itemNotes: "Rush your first damage/lifesteal item for the spike, then build toward sustained-damage bruiser items. Attack speed and lifesteal make her W execute and self-healing snowball.",
    matchups: "Wins scrappy early skirmishes and punishes greedy pathing with free invades. Struggles into ranged pokes and hard peel comps that can kite her frenzy.",
  },
};

export const otpGuideOf = (dd) => OTP_GUIDES[dd] || null;
