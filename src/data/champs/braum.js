import { I } from "../runeHelpers.js";

const BRAUM_SUP_DEFAULT_RUNES = {
  keystone:       "Guardian",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Attack Speed","Health (scaling)","Health (scaling)"],
  reason:         "Guardian shields Braum and his carry the instant a fight starts, matching his body-blocking peel identity — Unbreakable already blocks one projectile, and Guardian's shield covers the rest. Bone Plating is the pick vs engage-heavy lanes to deny their burst during the dive; against poke, Second Wind is the better swap. Font of Life heals the ADC off his Winter's Bite/Chomp CC chain; Biscuit Delivery and Cosmic Insight solve early sustain and speed up Glacial Fissure's cooldown.",
};

// ══════════════════════════════════════════════════════════════════════════
//  BRAUM — Warden / Body-Block Peel
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"braum", display:"Braum", dd:"Braum",
  color:"#2a4a6a", glow:"#a0d0f0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Morgana","Xerath","Ziggs"], replacements:["Thresh","Leona","Nautilus"],
      role:"Warden / Body-Block Peel",
      corePath:"Solstice Sleigh  ›  Plated Steelcaps  ›  Locket of the Iron Solari  ›  Knight's Vow",
      coreNote:"Braum plays for chain-stun peel — stack Concussive Blows with autos and Winter's Bite, body-block a projectile with Unbreakable, then Glacial Fissure the whole enemy team into a stun. Solstice Sleigh adds team-wide utility and tankiness right out the gate; Plated Steelcaps blunts auto-heavy lane bullies; Locket and Knight's Vow both round out the durability and damage-sharing his all-in peel identity needs.",
      sideItems:["Bandlepipes","Thornmail","Mercury's Treads","Randuin's Omen","Zeke's Convergence","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Thornmail","GW cuts their sustain."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Plated Steelcaps","Reduces auto damage vs their press."),I("Knight's Vow","Share damage taken."),I("Thornmail","GW cuts their sustain.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener — Unbreakable blocks the rest."),I("Zeke's Convergence","Amplify the counter-engage."),I("Randuin's Omen","AS reduction blunts their follow-up.")],behind:[I("Knight's Vow","Share damage so your ADC survives the dive."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Knight's Vow","Share the burst that would otherwise one-shot your ADC.")],behind:[I("Knight's Vow","Share the burst that would otherwise one-shot your ADC."),I("Mercury's Treads","Reduce the CC that opens their combo."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Randuin's Omen","AS/crit reduction shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Knight's Vow","Share damage in the skirmish.")],behind:[I("Knight's Vow","Share damage so your ADC survives the duel."),I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),I("Randuin's Omen","Crit reduction.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own stun chain."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Knight's Vow","Share the burst damage."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW cuts their sustain through the drain."),I("Knight's Vow","Share damage through the drain."),I("Zeke's Convergence","Amplify the punish.")],behind:[I("Knight's Vow","Share the damage in the extended fight."),I("Thornmail","GW cuts their regen even behind."),I("Randuin's Omen","Survivability into their sustained DPS.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal offsets the chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the stun lands — Braum's whole kit enables this."),I("Knight's Vow","Share damage output."),I("Locket of the Iron Solari","Shield in the poke war.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Plated Steelcaps","Flat auto reduction.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Knight's Vow","Share damage in the sustain war."),I("Randuin's Omen","Survivability if they poke hard.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own stun first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Braum loses the whole engage plan."),I("Knight's Vow","Share damage if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Randuin's Omen","Reduce their engage tempo with AS/crit reduction."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Knight's Vow","Share damage during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Thornmail","GW blunts their peel value."),I("Knight's Vow","Share damage in the peel war.")],behind:[I("Knight's Vow","Share damage through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Knight's Vow","Share damage while you figure out the matchup."),I("Thornmail","Counters AP specialists via GW.")],runes:{...BRAUM_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
