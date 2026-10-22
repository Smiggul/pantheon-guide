import { I } from "../runeHelpers.js";

const SWAIN_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Conditioning","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch's DoT fits Swain's sustained-burn identity better than a single poke hit — every ability applies it, stacking with Liandry's on the same target. Manaflow Band solves early mana strain. Transcendence's haste shortens the cooldown loop for more Q poke windows. Conditioning and Overgrowth let Swain survive lane before Demonic Ascension makes him a real teamfight threat.",
};

const SWAIN_SUP_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Resolve",
  secondaryRunes: ["Conditioning","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute and Conqueror split Support Swain's games almost evenly on 26.20, about 44% each; the Arcane Comet page this used to recommend is almost never taken. Electrocute is the more common by a hair and suits a lane built on short trades, since his E pull into Q lands the three hits it needs in one rotation. Cheap Shot adds true damage to targets his E has rooted or Rylai's has slowed, Grisly Mementos adds permanent Adaptive Force from takedowns, and Ultimate Hunter shortens Demonic Ascension, his main teamfight tool. Conditioning and Overgrowth add the resistances and health he needs to stand in fights. Conqueror is the equally popular choice for longer brawls.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SWAIN — Battlemage / Poke-Scaling
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"swain", display:"Swain", dd:"Swain",
  color:"#4a2c5e", glow:"#8e44ad",
  lanes:["Mid","Support"],
  roles:{
    Mid:{
      bans:["Ekko","Syndra","Viktor"], replacements:["Xerath","Locke","Aurelion Sol"],
      role:"Battlemage / Poke-Scaling",
      corePath:"Blackfire Torch  ›  Rylai's Crystal Scepter  ›  Zhonya's Hourglass  ›  Liandry's Torment",
      // Research: Blackfire is his first item in about four mid games in ten on 26.20, and Rylai's is now the clear
      //   second: Blackfire into Rylai's is the most common two-item start, about a quarter of games, more than
      //   three times as common as Blackfire into Liandry's. Zhonya's is the most common third item and Liandry's
      //   the usual fourth. Mercury's are the most common boots. Rylai's first and Malignance first are about a
      //   quarter and a sixth of games.
      coreNote:"Swain wants long fights. Blackfire Torch first: its burn hits every enemy your abilities touch and grants AP per burning target. Rylai's Crystal Scepter second slows on every damaging ability, keeping enemies inside your Q, E pull and ult drain. Zhonya's Hourglass third lets you survive when they collapse on you mid-ult. Liandry's Torment fourth burns frontliners. Mercury's Treads. Rylai's or Malignance first are the other common openings.",
      sideItems:["Mercury's Treads","Sorcerer's Shoes","Malignance","Spirit Visage","Riftmaker","Void Staff","Banshee's Veil","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP stacking."),I("Rylai's Crystal Scepter","Perma-slow keeps them from ever closing."),I("Riftmaker","Omnivamp outlasts their sustain.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Mercury's Treads","Shorter CC before the kill."),I("Banshee's Veil","Blocks their engage tool.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow shuts down their engage follow-up."),I("Riftmaker","Omnivamp sustains through the dive."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Omnivamp survives their burst window."),I("Rylai's Crystal Scepter","Slow denies their reset after the combo."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Prevents them from ever sticking to you."),I("Liandry's Torment","Burn punishes their mid-fight sustain."),I("Riftmaker","Omnivamp wins the extended trade.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Morellonomicon","Cuts their lifesteal sustain.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Riftmaker","Omnivamp outlasts their burst window."),I("Rylai's Crystal Scepter","Poke pressure denies their setup."),I("Liandry's Torment","Burn punishes when their combo is down.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Riftmaker","Omnivamp wins the sustained drain war."),I("Liandry's Torment","Burn outscales their sustain.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain-mirror healing.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Landing a slow punishes their positioning."),I("Cosmic Drive","Mobility to dodge skillshots on approach."),I("Liandry's Torment","Burn while they try to disengage.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Permanent slow denies their kite entirely."),I("Liandry's Torment","Burn melts their thin HP pool."),I("Riftmaker","Omnivamp during the extended teamfight.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Mercury's Treads","Reduce CC duration.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Cuts their sustain package."),I("Liandry's Torment","Burn negates shields over time."),I("Riftmaker","Omnivamp through the combined poke.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Punish a missed hook with a guaranteed slow."),I("Riftmaker","Omnivamp during the extended fight after a catch."),I("Liandry's Torment","Burn once they whiff.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Riftmaker","Omnivamp through the tank fight."),I("Rylai's Crystal Scepter","Keeps them permanently slowed.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Liandry's Torment","% HP burn stacks enormously against their pool."),I("Riftmaker","Omnivamp through their mitigation.")],behind:[I("Liandry's Torment","Only reliable damage vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Locks down kiting Specialists with perma-slow."),I("Liandry's Torment","Burn synergizes with sustained zone pressure."),I("Riftmaker","Omnivamp through their poke/regen kit.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...SWAIN_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Taric","Zilean","Renata Glasc"], replacements:["Xerath","Karma","Pantheon"],
      role:"Battlemage / Poke-Utility",
      corePath:"Rylai's Crystal Scepter  ›  Zhonya's Hourglass  ›  Liandry's Torment  ›  Spirit Visage",
      // Research: Rylai's is his first legendary in nearly eight games in ten on 26.20, whatever support item he takes,
      //   and Liandry's first, which this page used to recommend, is down to a few percent. Zaz'Zak's is the most
      //   common support item, just under half of games. Zhonya's is the most common second item, just ahead of
      //   Liandry's. Spirit Visage is the most common later item. Plated Steelcaps, Sorcerer's Shoes and Mercury's
      //   Treads are all common boots.
      coreNote:"Support Swain brings global vision pressure and lane damage enchanters cannot match. Zaz'Zak's Realmspike is the support item, triggered by your ability damage; Celestial Opposition or Solstice Sleigh for a tankier lane. Rylai's Crystal Scepter first: its slows keep the enemy ADC inside your E pull and R drain. Zhonya's Hourglass and Liandry's Torment next, Liandry's first against tanks. Spirit Visage later boosts your passive and ult healing.",
      sideItems:["Plated Steelcaps","Sorcerer's Shoes","Mercury's Treads","Malignance","Riftmaker","Morellonomicon","Zeke's Convergence","Redemption"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP stacking as they walk down your ADC."),I("Zeke's Convergence","Amplify your ADC's follow-up damage."),I("Rylai's Crystal Scepter","Perma-slow keeps a Juggernaut off your carry.")],behind:[I("Zhonya's Hourglass","Stall their all-in window."),I("Mercury's Treads","Reduce CC duration."),I("Redemption","Global heal offsets accumulated chip.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slows shut down the dive before it reaches your ADC."),I("Zeke's Convergence","Amplify the counter-engage."),I("Riftmaker","Omnivamp sustains through the skirmish.")],behind:[I("Zhonya's Hourglass","Negates their all-in timing on your backline."),I("Banshee's Veil","Blocks the engage tool that starts the dive."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Rylai's Crystal Scepter","Slow denies their reset window after the burst combo."),I("Riftmaker","Omnivamp sustains through their attempt."),I("Zeke's Convergence","Amplifies the punish.")],behind:[I("Zhonya's Hourglass","Essential vs burst all-in on your carry."),I("Banshee's Veil","Blocks the setup spell of their combo."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Prevents them from ever sticking to your carry."),I("Liandry's Torment","Burn punishes extended 2v2 skirmishes."),I("Riftmaker","Omnivamp wins the exchange.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist targeting your ADC."),I("Morellonomicon","Cuts lifesteal-heavy skirmisher sustain."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Banshee's Veil","Spell shield eats the combo-opener burst mages need on your ADC."),I("Rylai's Crystal Scepter","Slow denies follow-up after their burst window."),I("Riftmaker","Omnivamp sustains through the poke.")],behind:[I("Banshee's Veil","Mandatory — blocks the CC that starts their combo on your carry."),I("Zhonya's Hourglass","Second life after a full rotation lands anyway."),I("Mercury's Treads","Shorten CC duration.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Morellonomicon","Cuts drain healing before it snowballs."),I("Liandry's Torment","Burn outlasts their sustained damage."),I("Riftmaker","Omnivamp wins the mirror-ish drain fight.")],behind:[I("Morellonomicon","Mandatory vs sustain-heavy battlemages."),I("Banshee's Veil","Prevents your carry from getting locked down."),I("Rylai's Crystal Scepter","Control spacing instead of trading.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Landing a slow denies their repositioning after poke."),I("Void Staff","Keep damage relevant through their MR."),I("Zeke's Convergence","Amplifies the counter-poke.")],behind:[I("Banshee's Veil","Blocks the poke/CC ability punishing your lane."),I("Zhonya's Hourglass","Survive burst on a bad engage."),I("Redemption","Offsets accumulated poke damage.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Liandry's Torment","Constant burn poke forces recalls."),I("Rylai's Crystal Scepter","Slow prevents escape after poke."),I("Zeke's Convergence","Amplify your ADC's damage output.")],behind:[I("Zhonya's Hourglass","Survive all-ins."),I("Morellonomicon","Reduce lifesteal sustain."),I("Mercury's Treads","Reduce CC duration.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Mandatory vs healing/shielding."),I("Liandry's Torment","Burn counters sustain."),I("Void Staff","Keep damage relevant vs their kit.")],behind:[I("Morellonomicon","Still required anti-heal."),I("Zhonya's Hourglass","Survive combined burst."),I("Banshee's Veil","Block engage CC.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Punish missed hooks with slows."),I("Liandry's Torment","Burn during extended trades."),I("Riftmaker","Omnivamp sustains the extended fight.")],behind:[I("Banshee's Veil","Block hooks."),I("Zhonya's Hourglass","Survive engages."),I("Mercury's Treads","Reduce CC duration.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Riftmaker","Omnivamp through their engage."),I("Rylai's Crystal Scepter","Kite their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive the initiation.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Liandry's Torment","% HP burn stacks against their pool."),I("Zeke's Convergence","Amplify ADC damage past the body-block.")],behind:[I("Liandry's Torment","Only reliable damage vs stacked resists."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Redemption","Global heal in the extended peel war.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Locks down kiting Specialists."),I("Liandry's Torment","Burn synergizes with sustained pressure."),I("Riftmaker","Omnivamp through their poke pattern.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Redemption","Global heal while you figure out the matchup.")],runes:{...SWAIN_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
