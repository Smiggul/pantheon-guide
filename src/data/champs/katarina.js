import { I } from "../runeHelpers.js";

const KATARINA_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Relentless Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "A single Q-W-E combo lands all 3 hits needed for Electrocute — instant burst on every reset. Sudden Impact procs off the E dash for bonus true damage. Grisly Mementos stacks AP and slow resist on every takedown, and Katarina resets onto takedowns constantly. Triumph heals off every takedown; Coup de Grace finishes what the burst combo starts.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KATARINA — Assassin / Reset
// ══════════════════════════════════════════════════════════════════════════

export default {
    id: "katarina",
    bans:         ["Galio","Naafiri","Kassadin"],
    replacements: ["Locke","Akali","Fizz"],
    display: "Katarina",
    dd: "Katarina",
    color: "#c0392b",
    glow: "#ff6b6b",
    lanes: ["Mid"],

    roles: {
      Mid: {
        corePath: "Lich Bane  ›  Shadowflame  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
        coreNote: "Katarina is a pure AP burst assassin — Lich Bane's Spellblade proc massively amplifies the auto that follows any of her abilities, Shadowflame finishes low-HP targets, and Zhonya's protects the reset-chasing all-in. Void Staff rounds out the build vs stacked MR. The old on-hit hybrid (Nashor's Tooth + Riftmaker) is a fine alternate build vs extended-fight comps, but pure burst is the current standard.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Void Staff","Banshee's Veil","Nashor's Tooth","Riftmaker","Hextech Rocketbelt"],

        data: {
          BURST_MAGE: {
            ahead: [
              I("Hextech Rocketbelt","Gap-close to force fights."),
              I("Shadowflame","Amplify burst vs low MR targets."),
              I("Rabadon's Deathcap","End fights instantly.")
            ],
            behind: [
              I("Zhonya's Hourglass","Reset cooldowns safely."),
              I("Mercury's Treads","Reduce CC lock."),
              I("Banshee's Veil","Block key CC ability.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Nashor's Tooth","Win extended duels."),
              I("Riftmaker","Out-sustain other assassins."),
              I("Shadowflame","Push burst advantage.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive first burst."),
              I("Plated Steelcaps","Reduce AD assassin damage."),
              I("Riftmaker","Stay relevant in longer fights.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Hextech Rocketbelt","Reach backline instantly."),
              I("Shadowflame","Delete squishies instantly."),
              I("Rabadon's Deathcap","Guarantee resets.")
            ],
            behind: [
              I("Zhonya's Hourglass","Buy time in teamfights."),
              I("Riftmaker","Sustain through fights."),
              I("Banshee's Veil","Avoid being locked down.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Hextech Rocketbelt","Gap-close and reset before they can close the distance."),
              I("Shadowflame","Burst before they stack armor to shrug it off."),
              I("Rabadon's Deathcap","Scaling burst ends the trade outright.")
            ],
            behind: [
              I("Zhonya's Hourglass","Reset cooldowns safely out of their walk-down."),
              I("Riftmaker","Omnivamp sustains you through their sustained DPS."),
              I("Mercury's Treads","Shorter CC to disengage.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Nashor's Tooth","On-hit resets punish a failed dive attempt."),
              I("Riftmaker","Out-sustain their engage combo."),
              I("Shadowflame","Burst them before their follow-up lands.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive their all-in combo timing entirely."),
              I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),
              I("Banshee's Veil","Blocks the engage tool that starts the dive.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Nashor's Tooth","Win extended duels via on-hit DPS."),
              I("Riftmaker","Sustain outlasts their dueling pattern."),
              I("Rabadon's Deathcap","Burst edge ends the fight early.")
            ],
            behind: [
              I("Zhonya's Hourglass","Reset out of a losing duel."),
              I("Plated Steelcaps","Reduces auto-heavy duelist damage."),
              I("Riftmaker","Omnivamp keeps you alive longer.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Void Staff","Pierce early MR before it stacks."),
              I("Riftmaker","Out-sustain their drain with omnivamp."),
              I("Shadowflame","Burst window before they can respond.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that opens their combo."),
              I("Zhonya's Hourglass","Survive the sustained burst."),
              I("Riftmaker","Sustain through the drain war.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Hextech Rocketbelt","Close the poke gap instantly."),
              I("Shadowflame","Burst on arrival before they reposition."),
              I("Rabadon's Deathcap","Burst edge finishes the trade.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the poke ability punishing your approach."),
              I("Mercury's Treads","Reduce CC duration from range."),
              I("Zhonya's Hourglass","Survive the gap-close attempt.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Shadowflame","Extra pen through their shield spam."),
              I("Rabadon's Deathcap","Burst through shields to the carry."),
              I("Hextech Rocketbelt","Close the gap before their peel lands.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive the combined burst."),
              I("Banshee's Veil","Blocks the setup CC on their carry combo."),
              I("Riftmaker","Sustain through prolonged trades.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Hextech Rocketbelt","Dodge or punish a whiffed hook instantly."),
              I("Nashor's Tooth","Reset off a kill after they overextend."),
              I("Shadowflame","Burst them down once they miss.")
            ],
            behind: [
              I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),
              I("Zhonya's Hourglass","Buys time if you get caught."),
              I("Mercury's Treads","Shorter root/bind duration.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Void Staff","Penetrates their MR stacking."),
              I("Riftmaker","Sustain through the tank fight."),
              I("Rabadon's Deathcap","Burst edge still matters vs squishier backline.")
            ],
            behind: [
              I("Void Staff","Required to deal damage through their resists."),
              I("Zhonya's Hourglass","Survive their engage combo."),
              I("Riftmaker","Omnivamp sustain vs their poke/engage.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Void Staff","MR-stacking Wardens still take real damage through pen."),
              I("Riftmaker","Sustain through their peel attempts."),
              I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage.")
            ],
            behind: [
              I("Void Staff","Required vs a stacked-resist Warden."),
              I("Zhonya's Hourglass","Survive the engage they set up."),
              I("Riftmaker","Sustain through the extended peel war.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Shadowflame","Burst window before their kit reacts."),
              I("Rabadon's Deathcap","Scaling burst ends the fight."),
              I("Hextech Rocketbelt","Close the gap on a kiting Specialist.")
            ],
            behind: [
              I("Zhonya's Hourglass","Reset safely out of their poke/regen pattern."),
              I("Banshee's Veil","Blocks their key setup ability."),
              I("Mercury's Treads","Reduce blind/stun duration.")
            ],
            runes: { ...KATARINA_MID_DEFAULT_RUNES },
          },
        },
      },
    },
  };
