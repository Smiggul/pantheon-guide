import { I } from "../runeHelpers.js";

const ASOL_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Absolute Focus","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch's DoT fits Aurelion Sol's sustained burn identity better than a single poke-burst hit — every ability applies it, and Liandry's stacks the same target. Manaflow Band solves the mana problem across Q/W/E. Absolute Focus rewards staying above 70% HP while poking from range. Bone Plating and Overgrowth keep him alive before Rod of Ages comes online.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AURELION SOL — Battlemage / Scaling
// ══════════════════════════════════════════════════════════════════════════

export default {
    id: "aurelionsol",
    bans:         ["Kassadin","Sylas","Katarina"],
    replacements: ["Xerath","Viktor","Cassiopeia"],
    display: "Aurelion Sol",
    dd: "AurelionSol",
    color: "#5dade2",
    glow: "#85c1e9",
    lanes: ["Mid"],

    roles: {
      Mid: {
        corePath: "Rod of Ages  ›  Rylai's Crystal Scepter  ›  Liandry's Torment  ›  Rabadon's Deathcap",
        coreNote: "Stack scaling safely. Rod gives survivability + mana; Rylai's enables perma-slow on Q/E; Liandry's amplifies burn in extended fights.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Void Staff","Zhonya's Hourglass","Banshee's Veil","Shadowflame","Cosmic Drive"],

        data: {
          ASSASSIN: {
            ahead: [
              I("Rylai's Crystal Scepter","Perma-slow denies re-engage from Zed/Katarina."),
              I("Liandry's Torment","Burn punishes their short trades."),
              I("Rabadon's Deathcap","Scaling spike closes game faster.")
            ],
            behind: [
              I("Zhonya's Hourglass","Hard counter to burst windows."),
              I("Rod of Ages","HP + sustain to survive lane phase."),
              I("Banshee's Veil","Blocks key engage abilities.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Rylai's Crystal Scepter","Keeps them inside your damage zones."),
              I("Liandry's Torment","Out-DPS them in extended fights."),
              I("Void Staff","Penetrate early MR stacking.")
            ],
            behind: [
              I("Banshee's Veil","Prevents getting one-shot by opener."),
              I("Mercury's Treads","Shorter CC = more reposition time."),
              I("Zhonya's Hourglass","Second life in teamfights.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Rylai's Crystal Scepter","Catch them once → they die."),
              I("Cosmic Drive","Mobility to dodge skillshots."),
              I("Liandry's Torment","Burn while they try to disengage.")
            ],
            behind: [
              I("Banshee's Veil","Blocks key poke ability."),
              I("Mercury's Treads","Reduce CC duration."),
              I("Rod of Ages","Sustain through poke.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Liandry's Torment","Burn scales off their HP stacking."),
              I("Rylai's Crystal Scepter","Perma-slow keeps them from ever closing."),
              I("Rabadon's Deathcap","Scaling burst ends the fight before they arrive.")
            ],
            behind: [
              I("Rod of Ages","HP + mana sustain survives their walk-down."),
              I("Zhonya's Hourglass","Stall their all-in window entirely."),
              I("Rylai's Crystal Scepter","Slow keeps distance even from a deficit.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Rylai's Crystal Scepter","Slow shuts down their engage follow-up."),
              I("Liandry's Torment","Burn continues ticking after they disengage."),
              I("Void Staff","Penetrate early MR they build to survive your combo.")
            ],
            behind: [
              I("Zhonya's Hourglass","Negates their all-in combo timing entirely."),
              I("Banshee's Veil","Blocks the engage ability that starts the dive."),
              I("Mercury's Treads","Shorter CC lets you kite out.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Rylai's Crystal Scepter","Prevents them from ever sticking to you."),
              I("Liandry's Torment","Burn punishes their mid-fight sustain."),
              I("Rabadon's Deathcap","Scaling burst wins the trade outright.")
            ],
            behind: [
              I("Zhonya's Hourglass","Buy time vs an all-in duelist."),
              I("Mercury's Treads","Shorter CC to disengage the trade."),
              I("Rod of Ages","Sustain through the lane.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Liandry's Torment","Burn outscales their sustained damage."),
              I("Void Staff","Pierce early MR before it stacks."),
              I("Rabadon's Deathcap","Raw AP wins the burst trade.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that starts their combo."),
              I("Zhonya's Hourglass","Survive the full rotation."),
              I("Rod of Ages","HP + mana sustain for the drain war.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Rylai's Crystal Scepter","Permanent slow denies their kite entirely."),
              I("Liandry's Torment","Burn melts their thin HP pool."),
              I("Rabadon's Deathcap","Scaling burst executes low-HP targets.")
            ],
            behind: [
              I("Zhonya's Hourglass","Avoid getting burst down in fights."),
              I("Mercury's Treads","Reduce CC duration on their peel."),
              I("Banshee's Veil","Blocks the engage tool set up on you.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Shadowflame","Extra pen through their shield spam."),
              I("Rabadon's Deathcap","Burst through shields to the carry."),
              I("Liandry's Torment","Burn negates their sustain package.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that sets up their carry's combo."),
              I("Zhonya's Hourglass","Survive the combined burst."),
              I("Rod of Ages","Sustain through the poke.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Rylai's Crystal Scepter","Punish a missed hook with a guaranteed slow."),
              I("Rabadon's Deathcap","Burst them down once they whiff."),
              I("Liandry's Torment","Burn during the extended fight after a catch.")
            ],
            behind: [
              I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),
              I("Zhonya's Hourglass","Buys time if you do get caught."),
              I("Mercury's Treads","Shorter root/bind duration.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Liandry's Torment","Melts their stacked HP over time."),
              I("Void Staff","Penetrates their MR stacking."),
              I("Rylai's Crystal Scepter","Keeps them permanently slowed.")
            ],
            behind: [
              I("Void Staff","Required to deal damage through their resists."),
              I("Zhonya's Hourglass","Survive their engage combo."),
              I("Rod of Ages","HP + mana sustain vs their poke/engage.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Void Staff","MR-stacking Wardens still take real damage through pen."),
              I("Liandry's Torment","% HP burn stacks enormously against their pool."),
              I("Rabadon's Deathcap","Amplify AP so even shielded Wardens take real damage.")
            ],
            behind: [
              I("Liandry's Torment","Only reliable damage vs a stacked-resist Warden."),
              I("Rod of Ages","Sustain through the peel war."),
              I("Zhonya's Hourglass","Survive the engage they set up.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Rylai's Crystal Scepter","Locks down kiting Specialists with perma-slow."),
              I("Liandry's Torment","Burn synergizes with sustained zone pressure."),
              I("Shadowflame","Extra burst vs squishy specialists.")
            ],
            behind: [
              I("Mercury's Treads","Reduce blind/stun duration."),
              I("Banshee's Veil","Blocks their key setup ability."),
              I("Rod of Ages","Sustain through their poke/regen kit.")
            ],
            runes: { ...ASOL_MID_DEFAULT_RUNES },
          },
        },
      },
    },
  };
