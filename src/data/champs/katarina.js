import { I } from "../runeHelpers.js";
import { RENEKTON_TOP_DEFAULT_RUNES } from "./renekton.js";

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
        corePath: "Nashor's Tooth  ›  Riftmaker  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
        coreNote: "Hybrid sustained burst. Nashor enables on-hit resets; Riftmaker gives extended fight power; Zhonya's enables aggressive dives.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Shadowflame","Void Staff","Banshee's Veil","Hextech Rocketbelt"],

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
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
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
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
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
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },
    },
  };
