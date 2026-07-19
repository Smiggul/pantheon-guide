import { I } from "../runeHelpers.js";

const RAKAN_SUP_DEFAULT_RUNES = {
  keystone:       "Guardian",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Domination",
  secondaryRunes: ["Sixth Sense","Ultimate Hunter"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Rakan is a hybrid engage-enchanter, so Guardian's shield covers both his dive-in and his peel identity at once. Font of Life heals the ADC off Grand Entrance's knock-up; Bone Plating and Unflinching cover the all-in commitment his own engage invites. Sixth Sense and Ultimate Hunter add vision-stacking and reduce The Quickness's cooldown for more repeatable engage windows — ability haste is extremely important for how often Rakan wants to dive in and dance back out.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RAKAN — Vanguard-Enchanter / Dive-and-Dance Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"rakan", display:"Rakan", dd:"Rakan",
  color:"#8a2a5a", glow:"#f080c0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Morgana","Xerath","Lissandra"], replacements:["Thresh","Leona","Nautilus"],
      role:"Vanguard-Enchanter / Dive-and-Dance Engage",
      corePath:"Ionian Boots of Lucidity  ›  Zeke's Convergence  ›  Locket of the Iron Solari  ›  Shurelya's Battlesong",
      coreNote:"Rakan plays for a dive-in, shield-up, dance-out engage pattern — Grand Entrance knocks up a whole group, Gleaming Quill shields whoever needs it, and The Quickness lets him do it again almost immediately. Ionian Boots feeds the ability-haste-hungry playstyle; Zeke's Convergence and Locket both amplify the payoff the instant his engage lands; Shurelya's Battlesong adds a burst of speed to actually reach the backline.",
      sideItems:["Knight's Vow","Redemption","Mercury's Treads","Mikael's Blessing","Randuin's Omen","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Amplify damage after your knock-up lands."),I("Locket of the Iron Solari","Shield vs their walk-down."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Knight's Vow","Share damage taken."),I("Thornmail","GW cuts their sustain.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Shurelya's Battlesong","Speed enables the peel or the counter-dive.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Mikael's Blessing","Cleanse the CC that starts the dive."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Shurelya's Battlesong","Speed to save your carry.")],behind:[I("Mikael's Blessing","Cleanse the setup CC before the burst lands."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Mikael's Blessing","Cleanse their all-in CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own engage."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mikael's Blessing","Cleanses the setup CC."),I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish."),I("Shurelya's Battlesong","Speed to disengage after the trade.")],behind:[I("Knight's Vow","Share the damage in the extended fight."),I("Redemption","Global heal offsets their sustained damage."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal offsets the chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the knock-up lands — Rakan's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Mikael's Blessing","Cleanse the setup CC on your ADC."),I("Mercury's Treads","Reduce CC duration.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war."),I("Shurelya's Battlesong","Speed wins the peel-and-poke war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Redemption","Global heal offsets theirs.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own engage first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mikael's Blessing","Cleanses a landed hook."),I("Mercury's Treads","Mandatory — a caught Rakan loses the whole engage plan."),I("Knight's Vow","Share damage if caught.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation."),I("Shurelya's Battlesong","Speed enables the counter-engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Knight's Vow","Share damage in the peel war."),I("Shurelya's Battlesong","Speed reaches the backline past the body-block.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Mikael's Blessing","Cleanses burst setups."),I("Knight's Vow","Share damage while you figure out the matchup.")],runes:{...RAKAN_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
