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
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Same Comet-poke core as Mid. Bone Plating replaces Second Wind for a 2v2 lane where trades come in bursts rather than constant chip. Revitalize amplifies the healing Swain's passive and R provide to himself and the lane.",
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
      corePath:"Blackfire Torch  ›  Liandry's Torment  ›  Rylai's Crystal Scepter  ›  Zhonya's Hourglass",
      coreNote:"Swain wants extended fights — Blackfire Torch now leads the build, its burn stacking directly with Liandry's % HP damage on the same DoT-marked target. Rylai's slow keeps enemies inside his Q/E range and the R pull radius. Zhonya's protects the ultimate's channel from being interrupted. Riftmaker remains a fine alternate for the omnivamp when facing sustain-heavy comps.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Void Staff","Banshee's Veil","Morellonomicon","Cosmic Drive","Riftmaker"],
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
      corePath:"Liandry's Torment  ›  Riftmaker  ›  Zhonya's Hourglass  ›  Rylai's Crystal Scepter",
      coreNote:"Support Swain plays for global vision pressure and poke. Vision of Empire threatens the whole map, and the same mage core that works in Mid still gives him damage relevant in a 2v2 lane where enchanters usually deal none.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Zeke's Convergence","Redemption","Banshee's Veil","Void Staff"],
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
