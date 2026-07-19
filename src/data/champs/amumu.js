import { I } from "../runeHelpers.js";

const AMUMU_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror's stacking omnivamp fuels Amumu's auto-and-Bandage Toss engage pattern, keeping him topped up through invades and skirmishes. Legend: Haste speeds up Bandage Toss and Despair's cooldowns; Last Stand rewards the low-HP all-ins Curse of the Sad Mummy invites. Cheap Shot adds true damage to anything Bandage Toss has stunned; Ultimate Hunter reduces the game-changing AoE stun's cooldown for more teamfight-turning engages.",
};

const AMUMU_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Overgrowth"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Ultimate Hunter"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Amumu plays the same guaranteed-stun pattern as Jungle, but positioned to enable a carry instead of farming camps — Aftershock triggers the instant Bandage Toss lands, giving him bonus resistances right as the whole enemy team gets caught in his ultimate's stun radius. Font of Life heals the ADC off the impair; Bone Plating and Overgrowth round out survivability. Sudden Impact procs off the Bandage Toss dash; Ultimate Hunter reduces the AoE stun's cooldown for more repeatable engages.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AMUMU — Vanguard / AoE-Stun Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"amumu", display:"Amumu", dd:"Amumu",
  color:"#2a3a4a", glow:"#7ab0d0",
  lanes:["Jungle","Support"],
  roles:{
    Jungle:{
      bans:["Nocturne","Warwick","Kayn"], replacements:["Wukong","Sett","Shyvana"],
      role:"Vanguard / AoE-Stun Engage",
      corePath:"Liandry's Torment  ›  Plated Steelcaps  ›  Sunfire Aegis  ›  Abyssal Mask",
      coreNote:"Amumu plays for a single guaranteed AoE stun — Bandage Toss hooks a target from range, Despair burns everyone nearby, and Curse of the Sad Mummy stuns the whole enemy team caught in its radius. Liandry's Torment's burn compounds with Despair's drain; Plated Steelcaps and Sunfire Aegis both add durability and clear speed; Abyssal Mask amplifies the AoE magic damage his whole kit deals.",
      sideItems:["Thornmail","Jak'Sho, The Protean","Spirit Visage","Force of Nature","Mercury's Treads","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn compounds with Despair's drain."),I("Abyssal Mask","MR + amp on the AoE magic damage."),I("Thornmail","GW cuts their sustain.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Spirit Visage","Amplify your own sustain."),I("Randuin's Omen","Crit/AS reduction if they build offense.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sunfire Aegis","Burn during their engage window."),I("Liandry's Torment","Burn punishes the dive attempt."),I("Abyssal Mask","MR + amp vs their follow-up.")],behind:[I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage."),I("Spirit Visage","Amp self-heal to recover.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Abyssal Mask","MR + amp vs AP assassins."),I("Liandry's Torment","Burn punishes their commit."),I("Sunfire Aegis","Punish close fights.")],behind:[I("Spirit Visage","Amp healing to recover between skirmishes."),I("Mercury's Treads","Shorter CC before the finisher."),I("Abyssal Mask","MR + amp vs AP assassins.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW cuts their lifesteal."),I("Liandry's Torment","Burn wins the extended fight."),I("Sunfire Aegis","Burn adds up over long fights.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Spirit Visage","Amp self-heal in the duel."),I("Plated Steelcaps","Auto reduction.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Abyssal Mask","MR + amp if focused."),I("Force of Nature","MR stack vs sustained casting."),I("Sunfire Aegis","Burn while closing.")],behind:[I("Force of Nature","MR stack vs their combo."),I("Mercury's Treads","Shorter CC on invades."),I("Spirit Visage","Amp healing to recover.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Liandry's Torment","Burn wins the drain war."),I("Sunfire Aegis","Burn adds up over their long fights.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Spirit Visage","Amp healing to keep pace."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on the gank path."),I("Force of Nature","MR + move speed to close."),I("Liandry's Torment","Burn sustains the approach.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Spirit Visage","Amp healing on arrival.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Liandry's Torment","Burn wins the burst race on the ADC."),I("Thornmail","GW cuts their sustain items."),I("Sunfire Aegis","Burn adds up during ganks.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Randuin's Omen","Crit reduction vs their build."),I("Spirit Visage","Amp self-heal.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW cuts their heal/shield economy."),I("Abyssal Mask","Amplify through their peel."),I("Sunfire Aegis","Burn pressures both members of the lane.")],behind:[I("Spirit Visage","Sustain vs their heal economy."),I("Force of Nature","MR vs their poke component."),I("Abyssal Mask","MR + amp vs the combined burst.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Liandry's Torment","Burn during extended fights after a catch."),I("Sunfire Aegis","Burn once you close.")],behind:[I("Mercury's Treads","Mandatory — a caught Amumu wastes the gank."),I("Spirit Visage","Amp healing to recover."),I("Randuin's Omen","Survivability if it goes long.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Abyssal Mask","Amplify through the extended engage."),I("Sunfire Aegis","Burn during objective fights.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),I("Liandry's Torment","Burn through shields over time."),I("Abyssal Mask","MR + amp vs their kit.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Force of Nature","MR vs Galio/K'Sante."),I("Randuin's Omen","Crit reduction if paired with a marksman.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Liandry's Torment","Burn outlasts their poke/regen kit."),I("Sunfire Aegis","Burn denies their clear paths."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Spirit Visage","Amp your own sustain.")],runes:{...AMUMU_JGL_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Thresh","Leona","Xerath"], replacements:["Nautilus","Zac","Blitzcrank"],
      role:"AoE-Stun Engage Support",
      corePath:"Plated Steelcaps  ›  Zeke's Convergence  ›  Locket of the Iron Solari  ›  Thornmail",
      coreNote:"Support Amumu plays for a lane-to-teamfight AoE stun pattern — Bandage Toss hooks from range, and Curse of the Sad Mummy can lock down the whole enemy team for the ADC to clean up. Plated Steelcaps blunts early auto trades; Zeke's Convergence amplifies the follow-up damage the instant the stun lands; Locket and Thornmail both round out burst mitigation and GW for the peel-and-engage identity.",
      sideItems:["Bandlepipes","Randuin's Omen","Mercury's Treads","Knight's Vow","Force of Nature","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your stun lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Thornmail","GW cuts their sustain.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Thornmail","GW blunts their follow-up.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Knight's Vow","Share the burst that would otherwise one-shot your ADC.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own stun."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Shrugs off their sustained magic damage."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Knight's Vow","Share the damage in the extended fight."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal offsets the chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the stun lands — Amumu's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own stun first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Amumu loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","Reduce their engage tempo with GW."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Thornmail","GW blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...AMUMU_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
