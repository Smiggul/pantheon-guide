import { I } from "../runeHelpers.js";

const MAOKAI_JGL_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Magical Footwear","Triple Tonic","Cosmic Insight"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "First Strike rewards Maokai's poke-first jungle clear and gank pattern — Sapling Toss and Twisted Advance both threaten from range before he ever commits. Magical Footwear and Triple Tonic solve the early gold/sustain curve; Cosmic Insight speeds up Sapling Toss and Twisted Advance cooldowns for more ganks. Cheap Shot adds true damage to anything Sapling Toss has slowed; Ultimate Hunter reduces Vengeful Maelstrom's cooldown for more teamfight-turning ultimates.",
};

const MAOKAI_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Aftershock triggers instantly off a landed Twisted Advance pull, giving Maokai bonus resistances right as he becomes the fight's focus after dragging a target into his team. Font of Life heals the ADC off that pull's impair; Bone Plating and Unflinching round out survivability into hard-engage lanes. Biscuit Delivery and Cosmic Insight solve early sustain and speed up his whole ability rotation.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MAOKAI — Vanguard / Pull-and-Peel Engage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"maokai", display:"Maokai", dd:"Maokai",
  color:"#3a4a2a", glow:"#8ac060",
  lanes:["Jungle","Support"],
  roles:{
    Jungle:{
      bans:["Nocturne","Warwick","Kayn"], replacements:["Wukong","Sett","Shyvana"],
      role:"Vanguard / Poke-and-Pull Jungler",
      corePath:"Liandry's Torment  ›  Ionian Boots of Lucidity  ›  Bloodletter's Curse  ›  Imperial Mandate",
      coreNote:"Maokai plays for a poke-and-zone jungle pattern — Sapling Toss chips from range, Twisted Advance pulls him to a target, and Vengeful Maelstrom pulls the whole enemy team's damage back at them. Liandry's Torment's burn compounds with the passive sap-life healing; Bloodletter's Curse and Imperial Mandate both add poke and team-wide damage amplification; Ionian Boots gets haste online fast for more Sapling Toss and Twisted Advance windows.",
      sideItems:["Protoplasm Harness","Morellonomicon","Zhonya's Hourglass","Banshee's Veil","Spirit Visage","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn compounds with the passive sap-life healing."),I("Imperial Mandate","Amplify damage after your pull lands."),I("Thornmail","GW cuts their sustain.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Protoplasm Harness","Extra durability vs their press.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Bloodletter's Curse","Poke punishes their commit."),I("Liandry's Torment","Burn punishes the dive attempt."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Spirit Visage","Amplify the passive self-heal.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Insurance even with a lead."),I("Liandry's Torment","Burn punishes their commit."),I("Imperial Mandate","Punish their commit with amplified damage.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Spirit Visage","Amplify self-heal to recover.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Liandry's Torment","Burn wins the extended fight."),I("Bloodletter's Curse","Poke whittles them down first."),I("Spirit Visage","Amplify self-heal in the duel.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Protoplasm Harness","Durability to survive the duel."),I("Spirit Visage","Amp self-heal to keep pace.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then punish."),I("Banshee's Veil","Blocks the CC that opens their combo."),I("Liandry's Torment","Burn punishes their cooldown window.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Amplify self-heal wins the drain war."),I("Liandry's Torment","Burn wins the drain war."),I("Protoplasm Harness","Durability sustains the fight.")],behind:[I("Spirit Visage","Mandatory sustain vs drain."),I("Morellonomicon","Cuts Vladimir/Swain healing."),I("Zhonya's Hourglass","Survive the sustained burst.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Ionian Boots of Lucidity","Haste closes the poke-war gap faster."),I("Bloodletter's Curse","Poke wins once you close."),I("Liandry's Torment","Burn on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Zhonya's Hourglass","Survive the poke on approach."),I("Protoplasm Harness","Durability on approach.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Liandry's Torment","Burn the squishy ADC outright."),I("Imperial Mandate","Amplify the killing blow."),I("Bloodletter's Curse","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Extra burn through their shield spam."),I("Morellonomicon","Cuts their sustain package."),I("Imperial Mandate","Burst through shields to the carry.")],behind:[I("Morellonomicon","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Spell shield absorbs the hook."),I("Liandry's Torment","Burst them down once they whiff."),I("Bloodletter's Curse","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Spirit Visage","Amplify healing to recover.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","GW cuts their sustain in the tank fight."),I("Liandry's Torment","Burn during objective fights."),I("Imperial Mandate","Amplify your team's counter-engage.")],behind:[I("Protoplasm Harness","Durability vs their initiation."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Thornmail","GW cuts Warden sustain/passive."),I("Liandry's Torment","Burn through shields over time."),I("Spirit Visage","Amplify self-heal through their mitigation.")],behind:[I("Spirit Visage","Sustain through the peel war."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Liandry's Torment","Burn denies their clear paths."),I("Bloodletter's Curse","Poke pressure adds up."),I("Thornmail","GW cuts sustain patterns.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Spirit Visage","Amp your own sustain.")],runes:{...MAOKAI_JGL_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Morgana","Xerath","Ziggs"], replacements:["Thresh","Leona","Nautilus"],
      skillOrder:["Q","W","E"], // Support maxes W (Twisted Advance) second for engage; Jungle maxes E (global Q>E>W)
      role:"Pull-and-Peel Engage",
      corePath:"Solstice Sleigh  ›  Boots of Swiftness  ›  Locket of the Iron Solari  ›  Bandlepipes",
      coreNote:"Support Maokai plays for a pull-and-peel pattern — Twisted Advance drags a priority target in, Sapling Toss zones the lane, and Vengeful Maelstrom shields the whole team while reflecting damage back. Solstice Sleigh adds team-wide utility and tankiness right out the gate; Locket adds burst mitigation right as the pull lands; Bandlepipes rounds out team-wide utility for a peel-heavy support.",
      sideItems:["Thornmail","Spirit Visage","Mercury's Treads","Randuin's Omen","Zeke's Convergence","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield covers the walk-down window."),I("Zeke's Convergence","Amplify damage after your pull lands."),I("Knight's Vow","Protect your carry while you soak.")],behind:[I("Thornmail","GW cuts their sustain."),I("Spirit Visage","Amplify your own sustain."),I("Mercury's Treads","Reduce their key CC.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield absorbs their dive opener."),I("Zeke's Convergence","Amplify the counter-engage."),I("Spirit Visage","Amplify self-heal through the all-in.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Spirit Visage","Amplify self-heal to recover."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield eats the opener before it lands on your ADC."),I("Zeke's Convergence","Punish their commit with amplified damage."),I("Spirit Visage","Amplify self-heal to recover.")],behind:[I("Mercury's Treads","Reduce the CC that opens their combo."),I("Spirit Visage","Amplify self-heal to recover."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW shuts down the duelist."),I("Zeke's Convergence","Amplify ADC damage in the 2v2."),I("Spirit Visage","Amplify self-heal in the skirmish.")],behind:[I("Randuin's Omen","Crit reduction."),I("Spirit Visage","Amplify self-heal to survive."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC chains — enables your own pull."),I("Locket of the Iron Solari","Shield through their combo."),I("Zeke's Convergence","Punish damage after they burst.")],behind:[I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),I("Spirit Visage","Amplify self-heal after the burst."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Amplify self-heal through the drain."),I("Zeke's Convergence","Amplify the punish."),I("Thornmail","GW cuts their sustain.")],behind:[I("Spirit Visage","Mandatory sustain vs drain."),I("Randuin's Omen","Survivability into their sustained DPS."),I("Thornmail","GW cuts their regen even behind.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Locket of the Iron Solari","Shields your ADC from poke chip."),I("Redemption","Offsets accumulated poke damage.")],behind:[I("Redemption","Global heal offsets the chip."),I("Mercury's Treads","Reduce CC duration."),I("Locket of the Iron Solari","Shield layer.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","Amplify your ADC's damage after the pull lands — Maokai's whole kit enables this."),I("Locket of the Iron Solari","Shield in the poke war."),I("Knight's Vow","Share damage output.")],behind:[I("Knight's Vow","Non-negotiable — protect your carry."),I("Randuin's Omen","Crit reduction vs their DPS."),I("Mercury's Treads","Reduce CC duration.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW reduces their poke/heal uptime."),I("Zeke's Convergence","Amplify damage past their sustain."),I("Locket of the Iron Solari","Shield war.")],behind:[I("Locket of the Iron Solari","Core defensive value."),I("Spirit Visage","Amp self-heal in the sustain war."),I("Randuin's Omen","Survivability if they poke hard.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge their hook so you land your own pull first."),I("Zeke's Convergence","Amplify the punish after you land your CC."),I("Locket of the Iron Solari","Shield vs pick attempts.")],behind:[I("Mercury's Treads","Mandatory — a caught Maokai loses the whole engage plan."),I("Spirit Visage","Amp self-heal to recover if caught."),I("Locket of the Iron Solari","Extra shield layer.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Thornmail","Reduce their engage tempo with GW."),I("Zeke's Convergence","Amplify your team's counter-engage."),I("Knight's Vow","Share damage during their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage chain."),I("Spirit Visage","Sustain during the engage."),I("Randuin's Omen","Survivability vs their damage.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Amplify ADC damage past their body-block."),I("Thornmail","GW blunts their peel value."),I("Spirit Visage","Amp self-heal in the peel war.")],behind:[I("Spirit Visage","Sustain through the extended peel war."),I("Randuin's Omen","Crit reduction if paired with a marksman."),I("Thornmail","GW cuts their sustain.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — land your own CC first."),I("Locket of the Iron Solari","Shield through their poke/kit."),I("Zeke's Convergence","Amplify damage in skirmishes.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Spirit Visage","Amp your own sustain."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...MAOKAI_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
