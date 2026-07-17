import { I } from "../runeHelpers.js";
import { RENEKTON_TOP_DEFAULT_RUNES } from "./renekton.js";

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
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
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
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
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
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },
    },
  };
