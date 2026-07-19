import { I } from "../runeHelpers.js";

const VELKOZ_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Arcane Comet rides Vel'Koz's Q slow — the split-shot practically guarantees the comet lands — and his whole kit is a poke engine that procs it on cooldown. Manaflow Band funds the endless geometry, Transcendence feeds the cooldown loop, Scorch stacks with his true-damage passive in early trades, Cheap Shot triggers off every Q slow and E knockup for bonus true damage, and Ultimate Hunter brings Life Form Disintegration Ray around for every mid-game fight. Real data runs this same page in both Support and Mid.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VEL'KOZ — Eye of the Void: True-Damage Poke Mage  (A- Sup / C+ Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"velkoz", display:"Vel'Koz", dd:"Velkoz",
  color:"#3a2a5a", glow:"#d070c0",
  lanes:["Support","Mid"],
  roles:{
    Support:{
      bans:["Blitzcrank","Leona","Rakan"], replacements:["Xerath","Lux","Zyra"],
      role:"True-Damage Artillery Support",
      corePath:"Zaz'Zak's Realmspike  ›  Sorcerer's Shoes  ›  Luden's Echo  ›  Shadowflame",
      coreNote:"Vel'Koz support is a second mid-laner with a geometry degree: Q's split angles hit from positions no one respects, and his passive's true damage means even tank supports melt to three full rotations. Zaz'Zak's Realmspike procs off his constant poke, Luden's Echo turns the poke into real burst, and Shadowflame converts chunked targets into R executes. Zhonya's Hourglass covers the stationary ult channel. His damage output embarrasses most carries — the support seat is just where the geometry lives cheapest.",
      sideItems:["Zhonya's Hourglass","Rabadon's Deathcap","Void Staff","Liandry's Torment","Banshee's Veil","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke them off every wave from range."),I("Shadowflame","Passive true damage + pen melts their MR."),I("Void Staff","Shred whatever MR they buy anyway.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Liandry's Torment","Burn scales off their HP even behind."),I("Void Staff","Pen keeps the poke honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage with E knockup setup."),I("Luden's Echo","Full rotation beats their entry damage."),I("Zhonya's Hourglass","Stasis wastes the dive onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — you are the dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Vigilant Wardstone","Vision to see the dive coming.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Shadowflame","E-Q burst wins the race at range."),I("Luden's Echo","Punish every entry with a rotation.")],behind:[I("Zhonya's Hourglass","Rush — you cannot outrun their combo."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Chunk them below all-in HP at range."),I("Shadowflame","Execute range on their engage attempt."),I("Void Staff","True damage + pen ignores their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Banshee's Veil","Blocks the gap-close."),I("Liandry's Torment","Burn them while kiting.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Luden's Echo","Your E setup lands the rotation first."),I("Shadowflame","Pen wins the burst mirror."),I("Zhonya's Hourglass","Stasis their combo, answer with the ray.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen + true damage wins the sustained AP war."),I("Luden's Echo","Out-poke their drain pattern."),I("Liandry's Torment","Burn stacks with your passive.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Luden's Echo","Win the poke mirror — your Q splits around minions."),I("Shadowflame","Execute the chunked artillery first."),I("Void Staff","Chunk harder at equal range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle war.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One E-Q-W rotation deletes their carry."),I("Luden's Echo","Poke them off the wave pre-fight."),I("Rabadon's Deathcap","The ray one-shots at full build.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Poke stays lethal.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Luden's Echo","Poke volume outlasts their shield budget."),I("Shadowflame","True damage ignores the shield math."),I("Void Staff","Pen through the sponge.")],behind:[I("Morellonomicon","Cut the heal package."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the poke honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Luden's Echo","Out-range their hook zone with geometry."),I("Shadowflame","Punish every whiff with a full rotation."),I("Rabadon's Deathcap","Kill threshold on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn + true damage melts engage tanks."),I("Void Staff","Pen through their MR stack."),I("Luden's Echo","Poke the engage off before it starts.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","True damage + pen ignores the peel-tank math."),I("Liandry's Torment","Burn through the HP wall."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Luden's Echo","Range + geometry answers most gimmicks."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Zed","Fizz","Talon"], replacements:["Xerath","Lux","Ziggs"],
      role:"Geometry Poke Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Mid Vel'Koz plays the same geometry as Support but with a real income: Luden's Echo comes online a full cycle earlier, and the extra gold pushes toward Rabadon's Deathcap territory his support economy never reaches. Shadowflame converts the Q-W-E chip pattern into R executes, and Zhonya's Hourglass covers both the assassin matchups and the stationary ult channel. Farm with W through the wave, poke with Q around it, and delete anyone who tries to punish the pattern.",
      sideItems:["Rabadon's Deathcap","Void Staff","Liandry's Torment","Banshee's Veil","Morellonomicon","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke them off every wave from range."),I("Shadowflame","Passive true damage + pen melts their MR."),I("Void Staff","Shred whatever they buy anyway.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Liandry's Torment","Burn scales off their HP even behind."),I("Void Staff","Pen keeps the poke honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage with E knockup setup."),I("Luden's Echo","Full rotation beats their entry damage."),I("Zhonya's Hourglass","Stasis wastes the dive.")],behind:[I("Zhonya's Hourglass","Mandatory — divers hunt immobile mages."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to hold the spacing.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught rotation is death."),I("Shadowflame","E-Q burst wins the race at range."),I("Luden's Echo","Punish every entry attempt.")],behind:[I("Zhonya's Hourglass","Rush — stasis is the matchup."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own damage honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Chunk them below all-in HP at range."),I("Shadowflame","Execute range on their engage attempt."),I("Void Staff","True damage ignores their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Banshee's Veil","Blocks the gap-close."),I("Liandry's Torment","Burn them while kiting.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Luden's Echo","Your E setup lands the rotation first."),I("Shadowflame","Pen wins the burst mirror."),I("Zhonya's Hourglass","Stasis their combo, answer with the ray.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen + true damage wins the sustained war."),I("Luden's Echo","Out-poke their drain pattern."),I("Liandry's Torment","Burn stacks with your passive.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Luden's Echo","Win the poke mirror with split-shot geometry."),I("Shadowflame","Execute the chunked artillery first."),I("Void Staff","Chunk harder at equal range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Speed between volleys.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One E-Q-W rotation deletes their carry."),I("Rabadon's Deathcap","The ray one-shots at full build."),I("Luden's Echo","Poke them off the wave pre-fight.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Poke stays lethal.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Luden's Echo","Poke volume outlasts their shield budget."),I("Shadowflame","True damage ignores the shield math."),I("Void Staff","Pen through the sponge.")],behind:[I("Morellonomicon","Cut the heal package."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the poke honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Luden's Echo","Out-range their hook zone with geometry."),I("Shadowflame","Punish every whiff with a full rotation."),I("Rabadon's Deathcap","Kill threshold on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn + true damage melts engage tanks."),I("Void Staff","Pen through their MR stack."),I("Luden's Echo","Poke the engage off before it starts.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","True damage + pen ignores the peel-tank math."),I("Liandry's Torment","Burn through the HP wall."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...VELKOZ_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Luden's Echo","Range + geometry answers most gimmicks."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...VELKOZ_DEFAULT_RUNES}},
      },
    },
  },
};
