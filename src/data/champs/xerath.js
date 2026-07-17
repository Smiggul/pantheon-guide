import { I } from "../runeHelpers.js";
import { RENEKTON_TOP_DEFAULT_RUNES } from "./renekton.js";

// ══════════════════════════════════════════════════════════════════════════
//  XERATH — Artillery / Poke
// ══════════════════════════════════════════════════════════════════════════

export default {
    id: "xerath",
    display: "Xerath",
    dd: "Xerath",
    color: "#3498db",
    glow: "#5dade2",
    lanes: ["Mid", "Support"],

    roles: {
      Mid: {
        bans:["Fizz","Yasuo","Katarina"], replacements:["Aurelion Sol","Ziggs","Lux"],
        corePath: "Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Void Staff",
        coreNote: "Maximize long-range burst. Luden's + Shadowflame spike lets you chunk before fights even start.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Horizon Focus","Cosmic Drive"],

        data: {
          ASSASSIN: {
            ahead: [
              I("Shadowflame","Punish low MR targets."),
              I("Rabadon's Deathcap","End fights before they reach you."),
              I("Horizon Focus","Amplify long-range poke.")
            ],
            behind: [
              I("Zhonya's Hourglass","Essential vs dive."),
              I("Banshee's Veil","Block engage."),
              I("Mercury's Treads","Reduce CC chain.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Horizon Focus","Max poke amplification."),
              I("Shadowflame","Out-damage opposing poke."),
              I("Rabadon's Deathcap","Hard scaling spike.")
            ],
            behind: [
              I("Banshee's Veil","Block key poke."),
              I("Cosmic Drive","Mobility to dodge skillshots."),
              I("Void Staff","Deal damage through MR.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Shadowflame","Burst ADCs easily."),
              I("Rabadon's Deathcap","Delete them from range."),
              I("Horizon Focus","Amplify ult damage.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive dives."),
              I("Banshee's Veil","Prevent engage."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },

      Support: {
        bans:["Zyra","Leona","Pyke"], replacements:["Vel'Koz","Lux","Brand"],
        corePath: "Zaz'Zak's Realmspike  ›  Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap",
        coreNote: "Support Xerath plays for lane dominance and poke. Realmspike + Q spam creates constant pressure.",

        sideItems: ["Sorcerer's Shoes","Horizon Focus","Zhonya's Hourglass","Banshee's Veil","Void Staff"],

        data: {
          MARKSMAN: {
            ahead: [
              I("Luden's Echo","Burst lane constantly."),
              I("Shadowflame","Punish low MR ADC."),
              I("Horizon Focus","Amplify poke.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive engages."),
              I("Banshee's Veil","Block engage support."),
              I("Void Staff","Stay relevant.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Shadowflame","Punish shielded targets."),
              I("Luden's Echo","Burst through heals."),
              I("Horizon Focus","Long-range pressure.")
            ],
            behind: [
              I("Oblivion Orb","Apply GW vs healing."),
              I("Banshee's Veil","Block CC."),
              I("Zhonya's Hourglass","Survive collapse.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },
    },
  };
