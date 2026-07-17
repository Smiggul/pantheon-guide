import { I } from "../runeHelpers.js";
import { RENEKTON_TOP_DEFAULT_RUNES } from "./renekton.js";

// ══════════════════════════════════════════════════════════════════════════
//  SION — Scaling Tank / Splitpush Specialist
// ══════════════════════════════════════════════════════════════════════════

export default {
    id:      "sion",
    display: "Sion",
    dd:      "Sion",
    role:    "Scaling Tank / Splitpush Specialist",
    color:   "#7f8c8d",
    glow:    "#95a5a6",
    lanes:   ["Top","Mid","Support","Jungle"],

    roles:{
      Top:{
        bans:["Riven","Fiora","Kayle"], replacements:["Ornn","Malphite","Sett"],
        corePath: "Heartsteel  ›  Sunfire Aegis  ›  Titanic Hydra  ›  Thornmail",
        coreNote: "Sion top is a scaling HP stacker and wave controller. Heartsteel stacking defines your mid-game; Sunfire + Titanic converts HP into damage while maintaining frontline presence.",

        sideItems: [
          "Plated Steelcaps","Mercury's Treads",
          "Frozen Heart","Randuin's Omen","Force of Nature",
          "Jak'Sho, The Protean","Hullbreaker","Sterak's Gage"
        ],

        data: {

          JUGGERNAUT: {
            ahead: [
              I("Heartsteel","Outscale through infinite HP stacking — they cannot match late."),
              I("Titanic Hydra","HP → AD conversion lets you win extended trades."),
              I("Hullbreaker","Side lane pressure — force them into losing map states.")
            ],
            behind: [
              I("Bramble Vest","Cuts their sustain early (Darius, Aatrox)."),
              I("Sunfire Aegis","Waveclear safely under tower."),
              I("Frozen Heart","Reduces their DPS in extended fights.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Constant burn during their engage window."),
              I("Heartsteel","Stack HP while they commit into you."),
              I("Titanic Hydra","Punish failed dives with sustained damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces burst from AD divers."),
              I("Frozen Heart","Attack speed slow cripples dive follow-up."),
              I("Thornmail","Punish healing during engages.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Titanic Hydra","Win extended trades via HP scaling damage."),
              I("Heartsteel","They cannot burst through stacked HP."),
              I("Randuin's Omen","Critical vs Yasuo/Yone — deny crit scaling.")
            ],
            behind: [
              I("Frozen Heart","–20% attack speed shuts down duelists."),
              I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),
              I("Sunfire Aegis","Waveclear without contesting fights.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tank vs tank."),
              I("Titanic Hydra","You deal more damage in extended fights."),
              I("Hullbreaker","Force side lane where they cannot match push.")
            ],
            behind: [
              I("Sunfire Aegis","Match waveclear safely."),
              I("Force of Nature","Reduce magic-heavy tank damage."),
              I("Jak'Sho, The Protean","Scale into teamfight durability.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Heartsteel","Stack HP safely — they cannot punish early."),
              I("Randuin's Omen","Cripples crit-based ADCs."),
              I("Hullbreaker","Splitpush — avoid teamfight kiting.")
            ],
            behind: [
              I("Randuin's Omen","Essential vs crit DPS."),
              I("Frozen Heart","Attack speed slow reduces DPS massively."),
              I("Thornmail","Punish lifesteal builds.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Hullbreaker","Abuse side lane vs unconventional champs."),
              I("Heartsteel","Scale freely when they can't contest."),
              I("Titanic Hydra","Waveclear + tower pressure.")
            ],
            behind: [
              I("Sunfire Aegis","Maintain wave control."),
              I("Force of Nature","Counter AP specialists."),
              I("Thornmail","Reduce sustain patterns.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },

      Mid:{
        bans:["Akali","Fizz","Yasuo"], replacements:["Galio","Malphite","Aurelion Sol"],
        corePath: "Heartsteel  ›  Sunfire Aegis  ›  Titanic Hydra  ›  Force of Nature",
        coreNote: "Mid Sion is a wave-control disruptor. You don't win lane — you neutralize it, then impact side lanes with R and shove priority.",

        sideItems: [
          "Mercury's Treads","Plated Steelcaps",
          "Frozen Heart","Randuin's Omen",
          "Abyssal Mask","Jak'Sho, The Protean"
        ],

        data: {

          BURST_MAGE: {
            ahead: [
              I("Mercury's Treads","Reduce CC chains — enables aggression."),
              I("Heartsteel","Stack HP while they lack kill pressure."),
              I("Force of Nature","Completely nullifies their damage over time.")
            ],
            behind: [
              I("Force of Nature","Primary anti-AP spike."),
              I("Mercury's Treads","Shorter CC duration."),
              I("Sunfire Aegis","Waveclear safely under pressure.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Plated Steelcaps","Negates AD burst patterns."),
              I("Heartsteel","They cannot one-shot through stacked HP."),
              I("Titanic Hydra","Punish after failed burst.")
            ],
            behind: [
              I("Frozen Heart","Reduces follow-up DPS."),
              I("Plated Steelcaps","Survive lane phase."),
              I("Sunfire Aegis","Waveclear safely.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Force of Nature","Shrug off poke."),
              I("Heartsteel","Scale freely under pressure."),
              I("Hullbreaker","Force side lane away from poke.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs poke."),
              I("Mercury's Treads","Reduce CC from long range."),
              I("Sunfire Aegis","Waveclear without interaction.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },

      Jungle:{
        bans:["Udyr","Kindred","Lillia"], replacements:["Amumu","Zac","Warwick"],
        corePath: "Sunfire Aegis  ›  Heartsteel  ›  Titanic Hydra  ›  Thornmail",
        coreNote: "Sion jungle plays for scaling and objective control. Clear speed is stable, but your value comes from mid-game frontline and engage.",

        sideItems: [
          "Plated Steelcaps","Mercury's Treads",
          "Frozen Heart","Randuin's Omen",
          "Force of Nature","Jak'Sho, The Protean"
        ],

        data: {

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Win skirmishes through burn damage."),
              I("Heartsteel","Stack HP during fights."),
              I("Titanic Hydra","Convert HP into damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduce incoming burst."),
              I("Frozen Heart","Cripples dive follow-up."),
              I("Thornmail","Punish healing.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Heartsteel","Outscale burst champs."),
              I("Sunfire Aegis","Punish close fights."),
              I("Titanic Hydra","Win extended skirmishes.")
            ],
            behind: [
              I("Plated Steelcaps","Reduce burst."),
              I("Frozen Heart","Lower DPS window."),
              I("Randuin's Omen","Extra survivability.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tanks."),
              I("Titanic Hydra","Better damage output."),
              I("Sunfire Aegis","Objective control.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling durability."),
              I("Force of Nature","Anti-AP tank option."),
              I("Thornmail","Reduce healing.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Randuin's Omen","Cripple ADC damage."),
              I("Heartsteel","Stack freely."),
              I("Titanic Hydra","Punish positioning.")
            ],
            behind: [
              I("Randuin's Omen","Mandatory vs crit."),
              I("Frozen Heart","Reduce DPS."),
              I("Plated Steelcaps","Survive fights.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },

      Support:{
        bans:["Zyra","Vel'Koz","Blitzcrank"], replacements:["Alistar","Braum","Pantheon"],
        corePath: "Locket of the Iron Solari  ›  Thornmail  ›  Frozen Heart  ›  Force of Nature",
        coreNote: "Support Sion is engage + disruption. You trade lane dominance for teamfight initiation and soak.",

        sideItems: [
          "Mercury's Treads","Plated Steelcaps",
          "Knight's Vow","Zeke's Convergence",
          "Abyssal Mask","Randuin's Omen"
        ],

        data: {

          MARKSMAN: {
            ahead: [
              I("Locket of the Iron Solari","Protect your ADC in trades."),
              I("Thornmail","Punish sustain."),
              I("Frozen Heart","Reduce their DPS.")
            ],
            behind: [
              I("Locket of the Iron Solari","Teamfight shielding."),
              I("Knight's Vow","Protect carry."),
              I("Frozen Heart","Reduce damage output.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Thornmail","Reduce healing/shield comps."),
              I("Locket of the Iron Solari","Mitigate poke."),
              I("Force of Nature","Reduce AP poke.")
            ],
            behind: [
              I("Locket of the Iron Solari","Core defensive value."),
              I("Knight's Vow","Play peel."),
              I("Force of Nature","Anti-AP sustain.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Locket of the Iron Solari","Negate pick attempts."),
              I("Frozen Heart","Reduce follow-up damage."),
              I("Thornmail","Punish engage.")
            ],
            behind: [
              I("Locket of the Iron Solari","Survive picks."),
              I("Mercury's Treads","Reduce CC."),
              I("Knight's Vow","Peel instead of engage.")
            ],
            runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
          },
        },
      },

    },
  };
