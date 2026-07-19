import { I } from "../runeHelpers.js";

const XERATH_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Comet punishes every landed Q/E from max range — Xerath's range advantage makes it land far more reliably than most mages. Manaflow Band solves the mana problem from constant poke. Presence of Mind sustains mana further off poke damage. Coup de Grace finishes targets whittled down by chip damage.",
};

const XERATH_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Same Comet-poke core as Mid. Second Wind replaces Presence of Mind in the 2v2 lane — Support Xerath eats constant poke without a jungler's peel, and Second Wind out-regens it. Overgrowth stacks HP for the mage-carry build's late-game teamfight presence.",
};

// ══════════════════════════════════════════════════════════════════════════
//  XERATH — Artillery / Poke
// ══════════════════════════════════════════════════════════════════════════

export default {
    id: "xerath",
    display: "Xerath",
    dd: "Xerath",
    color: "#3498db",
    glow: "#5dade2",
    lanes: ["Mid", "Support", "Top"],

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
            runes: { ...XERATH_MID_DEFAULT_RUNES },
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
            runes: { ...XERATH_MID_DEFAULT_RUNES },
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
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Horizon Focus","Amplify poke while you kite their walk-down."),
              I("Shadowflame","Burst low-MR Juggernauts from range."),
              I("Rabadon's Deathcap","Scaling burst finishes the trade.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the gap-close tool they need to reach you."),
              I("Mercury's Treads","Reduce CC duration on their engage."),
              I("Zhonya's Hourglass","Survive if they do close the distance.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Horizon Focus","Poke them down before they can commit to a dive."),
              I("Cosmic Drive","Mobility to reposition out of their engage line."),
              I("Shadowflame","Burst on arrival if the dive lands anyway.")
            ],
            behind: [
              I("Zhonya's Hourglass","Essential — stasis negates the all-in timing."),
              I("Banshee's Veil","Blocks the engage ability that starts the dive."),
              I("Mercury's Treads","Shorter CC to kite out.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Horizon Focus","Poke from a range they can never close."),
              I("Rabadon's Deathcap","Burst edge ends the trade before they arrive."),
              I("Void Staff","Penetrate their resist stacking.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive an all-in duelist."),
              I("Cosmic Drive","Mobility to kite the gap-closer."),
              I("Banshee's Veil","Blocks their engage tool.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Shadowflame","Out-burst low-MR mages before their combo lands."),
              I("Rabadon's Deathcap","Burst edge wins the poke war outright."),
              I("Horizon Focus","Amplify poke landed pre-fight.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that opens their combo."),
              I("Zhonya's Hourglass","Survive the full rotation."),
              I("Mercury's Treads","Shorten CC duration.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Void Staff","Pierce early MR before it stacks."),
              I("Rabadon's Deathcap","Out-scale their sustained damage."),
              I("Shadowflame","Burst window before they can drain back.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that starts their combo."),
              I("Zhonya's Hourglass","Survive the sustained burst."),
              I("Mercury's Treads","Shorten CC duration.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Shadowflame","Extra pen through their shield spam."),
              I("Horizon Focus","Amplify poke that lands through the shield window."),
              I("Rabadon's Deathcap","Burst through shields to the carry.")
            ],
            behind: [
              I("Void Staff","Keep damage relevant vs their sustain."),
              I("Banshee's Veil","Blocks the CC setting up their carry's combo."),
              I("Zhonya's Hourglass","Survive the combined burst.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Horizon Focus","Poke from outside their hook range entirely."),
              I("Rabadon's Deathcap","Burst them down if they whiff."),
              I("Shadowflame","Extra damage once the hook misses.")
            ],
            behind: [
              I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),
              I("Zhonya's Hourglass","Buys time if you get caught."),
              I("Mercury's Treads","Shorter root/bind duration.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Void Staff","Penetrates their MR stacking."),
              I("Rabadon's Deathcap","Burst edge still matters past their frontline."),
              I("Horizon Focus","Poke them down before they can engage.")
            ],
            behind: [
              I("Void Staff","Required to deal damage through their resists."),
              I("Zhonya's Hourglass","Survive their engage combo."),
              I("Banshee's Veil","Blocks the CC that starts their initiation.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Void Staff","MR-stacking Wardens still take real damage through pen."),
              I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),
              I("Horizon Focus","Poke past their body-block from max range.")
            ],
            behind: [
              I("Void Staff","Required vs a stacked-resist Warden."),
              I("Zhonya's Hourglass","Survive the engage they set up."),
              I("Banshee's Veil","Blocks their key CC.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Horizon Focus","Poke from a range most Specialists can't punish."),
              I("Rabadon's Deathcap","Burst edge ends the fight."),
              I("Shadowflame","Extra burst vs squishy specialists caught close.")
            ],
            behind: [
              I("Void Staff","Keep damage relevant vs their kit."),
              I("Banshee's Veil","Blocks their key setup ability."),
              I("Zhonya's Hourglass","Survive burst setups.")
            ],
            runes: { ...XERATH_MID_DEFAULT_RUNES },
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
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
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
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Horizon Focus","Poke from safety while your ADC farms behind it."),
              I("Shadowflame","Burst low-MR Juggernauts from range."),
              I("Rabadon's Deathcap","Scaling burst punishes their approach.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the gap-close tool they need to reach your ADC."),
              I("Zhonya's Hourglass","Survive their walk-down."),
              I("Void Staff","Keep damage relevant vs their HP stacking.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Horizon Focus","Poke down the Diver before they can commit."),
              I("Shadowflame","Burst on arrival if the dive lands anyway."),
              I("Rabadon's Deathcap","Scaling burst punishes the engage.")
            ],
            behind: [
              I("Zhonya's Hourglass","Essential — negates the all-in timing on your ADC."),
              I("Banshee's Veil","Blocks the engage ability that starts the dive."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Horizon Focus","Poke denies their approach angle on your ADC."),
              I("Shadowflame","Burst low-MR assassins before they commit."),
              I("Rabadon's Deathcap","Scaling burst threatens their engage window.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the setup spell of their combo on your carry."),
              I("Zhonya's Hourglass","Survive the burst if it lands."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Horizon Focus","Poke from a range they can't close in the 2v2."),
              I("Rabadon's Deathcap","Burst edge wins the exchange outright."),
              I("Shadowflame","Extra damage once they commit.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive an all-in duelist targeting your ADC."),
              I("Banshee's Veil","Blocks their engage tool."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Shadowflame","Out-burst low-MR mages before their combo lands on your ADC."),
              I("Horizon Focus","Amplify poke landed pre-fight."),
              I("Rabadon's Deathcap","Burst edge wins the poke war.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that opens their combo on your carry."),
              I("Zhonya's Hourglass","Survive the full rotation."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Void Staff","Pierce early MR before it stacks."),
              I("Rabadon's Deathcap","Out-scale their sustained damage."),
              I("Horizon Focus","Poke from range they can't punish.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the CC that starts their combo."),
              I("Zhonya's Hourglass","Survive the sustained burst."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Horizon Focus","Out-range their poke entirely."),
              I("Rabadon's Deathcap","Burst edge wins the poke war."),
              I("Void Staff","Penetrate their resist stacking.")
            ],
            behind: [
              I("Banshee's Veil","Blocks the poke ability punishing your lane."),
              I("Zhonya's Hourglass","Survive burst on a bad engage."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Horizon Focus","Poke from outside their hook range entirely."),
              I("Rabadon's Deathcap","Burst them down if they whiff."),
              I("Shadowflame","Extra damage once the hook misses.")
            ],
            behind: [
              I("Banshee's Veil","Spell shield absorbs the hook aimed at your ADC."),
              I("Zhonya's Hourglass","Buys time if you get caught."),
              I("Void Staff","Keep damage relevant.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Void Staff","Penetrates their MR stacking."),
              I("Rabadon's Deathcap","Burst edge still matters past their frontline."),
              I("Horizon Focus","Poke them down before they can engage.")
            ],
            behind: [
              I("Void Staff","Required to deal damage through their resists."),
              I("Zhonya's Hourglass","Survive their engage combo."),
              I("Banshee's Veil","Blocks the CC that starts their initiation.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Void Staff","MR-stacking Wardens still take real damage through pen."),
              I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),
              I("Horizon Focus","Poke past their body-block protecting the carry.")
            ],
            behind: [
              I("Void Staff","Required vs a stacked-resist Warden."),
              I("Zhonya's Hourglass","Survive the engage they set up."),
              I("Banshee's Veil","Blocks their key CC.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Horizon Focus","Poke from a range most Specialists can't punish."),
              I("Rabadon's Deathcap","Burst edge ends the fight."),
              I("Shadowflame","Extra burst vs squishy specialists caught close.")
            ],
            behind: [
              I("Void Staff","Keep damage relevant vs their kit."),
              I("Banshee's Veil","Blocks their key setup ability."),
              I("Zhonya's Hourglass","Survive burst setups.")
            ],
            runes: { ...XERATH_SUP_DEFAULT_RUNES },
          },
        },
      },

      Top: {
        bans:["Fiora","Camille","Renekton"], replacements:["Aurelion Sol","Ziggs","Locke"],
        role:"Artillery / Off-Meta Siege",
        corePath: "Luden's Echo  ›  Shadowflame  ›  Horizon Focus  ›  Rabadon's Deathcap",
        coreNote: "Top Xerath is an off-meta siege pick — below-average win rate but genuinely playable, especially into low-mobility matchups (Ryze, Heimerdinger, Yone) where he can poke uncontested. Lacks the defensive stats a normal top laner has, so positioning and Wind Wall-style spacing matter far more than usual; a jungler covering his weak early is close to mandatory.",
        sideItems:["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Void Staff","Cosmic Drive"],
        data: {
          JUGGERNAUT:{ahead:[I("Horizon Focus","Amplify poke while you kite their walk-down."),I("Shadowflame","Burst low-MR Juggernauts from range."),I("Rabadon's Deathcap","Scaling burst finishes the trade.")],behind:[I("Banshee's Veil","Blocks their gap-close CC."),I("Mercury's Treads","Reduce CC duration on their engage."),I("Zhonya's Hourglass","Survive if they do close the distance.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          DIVER:{ahead:[I("Horizon Focus","Poke them down before they can commit to a dive."),I("Cosmic Drive","Mobility to reposition out of their engage line."),I("Shadowflame","Burst on arrival if the dive lands anyway.")],behind:[I("Zhonya's Hourglass","Essential — stasis negates the all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          ASSASSIN:{ahead:[I("Horizon Focus","Poke denies their approach angle."),I("Shadowflame","Burst low-MR assassins before they commit."),I("Rabadon's Deathcap","Scaling burst threatens their engage window.")],behind:[I("Banshee's Veil","Blocks the setup spell of their combo."),I("Zhonya's Hourglass","Survive the burst if it lands."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          SKIRMISHER:{ahead:[I("Horizon Focus","Poke from a range they can never close."),I("Rabadon's Deathcap","Burst edge ends the trade before they arrive."),I("Void Staff","Penetrate their resist stacking.")],behind:[I("Zhonya's Hourglass","Survive an all-in duelist."),I("Cosmic Drive","Mobility to kite the gap-closer."),I("Banshee's Veil","Blocks their engage tool.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          BURST_MAGE:{ahead:[I("Shadowflame","Out-burst low-MR mages before their combo lands."),I("Rabadon's Deathcap","Burst edge wins the poke war outright."),I("Horizon Focus","Amplify poke landed pre-fight.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Out-scale their sustained damage."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Mercury's Treads","Shorten CC duration.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          ARTILLERY:{ahead:[I("Horizon Focus","Poke from a range they can't reach."),I("Rabadon's Deathcap","Burst edge wins the poke war."),I("Void Staff","Penetrate their resist stacking.")],behind:[I("Banshee's Veil","Blocks the poke ability punishing your lane."),I("Zhonya's Hourglass","Survive burst on a bad engage."),I("Mercury's Treads","Reduce CC duration from range.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          MARKSMAN:{ahead:[I("Shadowflame","Burst ADCs easily from range."),I("Rabadon's Deathcap","Delete them before they close."),I("Horizon Focus","Amplify poke damage.")],behind:[I("Zhonya's Hourglass","Survive dives."),I("Banshee's Veil","Prevent their engage."),I("Void Staff","Keep damage relevant.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Horizon Focus","Amplify poke through the shield window."),I("Rabadon's Deathcap","Burst through shields to the carry.")],behind:[I("Void Staff","Keep damage relevant vs their sustain."),I("Banshee's Veil","Blocks the CC setting up their carry's combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          CATCHER:{ahead:[I("Horizon Focus","Poke from outside their hook range entirely."),I("Rabadon's Deathcap","Burst them down if they whiff."),I("Shadowflame","Extra damage once the hook misses.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Horizon Focus","Poke them down before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Horizon Focus","Poke past their body-block.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
          SPECIALIST:{ahead:[I("Horizon Focus","Poke from a range most Specialists can't punish."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...XERATH_MID_DEFAULT_RUNES}},
        },
      },
    },
  };
