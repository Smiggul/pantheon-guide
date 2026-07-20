import { I } from "../runeHelpers.js";

const MALZAHAR_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch layers onto Malzahar's E DoT and voidling swarm — his damage is already a slow burn, and the keystone makes it slower and crueler. Manaflow Band funds the perma-shove pattern, Transcendence feeds the cooldown loop his suppress windows cycle on, Scorch adds early trade bite, Magical Footwear pays for the Blackfire rush, and Cosmic Insight shortens Nether Grasp — the most reliable pick button in the game — by whole fights per match.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MALZAHAR — Prophet of the Void: DoT Suppress Mage  (S+/A Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"malzahar", display:"Malzahar", dd:"Malzahar",
  color:"#3a2a5a", glow:"#a070e0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Fizz","Zed","Sylas"], replacements:["Viktor","Lissandra","Vex"],
      role:"Perma-Shove Suppress Mage",
      corePath:"Blackfire Torch  ›  Sorcerer's Shoes  ›  Liandry's Torment  ›  Rylai's Crystal Scepter",
      coreNote:"Malzahar wins by never losing: passive spell-shield blanks the first assassin ability, E plus voidlings shove every wave, and Nether Grasp converts any jungler visit into a guaranteed kill. Blackfire Torch amplifies the E-Liandry's double burn, Rylai's Crystal Scepter makes the DoT spread sticky, and Zhonya's covers the suppress channel. He is the safest scaling mid in the game — shove, roam-proof the map with vision, and press R on whoever matters most every fight.",
      sideItems:["Zhonya's Hourglass","Rabadon's Deathcap","Void Staff","Morellonomicon","Banshee's Veil","Malignance"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","E burn scales off their HP bar."),I("Blackfire Torch","Amplified DoTs melt the walk-down."),I("Rylai's Crystal Scepter","Perma-slow — they never arrive.")],behind:[I("Rylai's Crystal Scepter","Kite their engage with spread slows."),I("Zhonya's Hourglass","Stasis covers the landed pull."),I("Void Staff","Pen keeps the burn real.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive — R suppresses the diver mid-combo."),I("Blackfire Torch","Burn them through the whole attempt."),I("Zhonya's Hourglass","Stasis wastes their engage.")],behind:[I("Zhonya's Hourglass","Mandatory — passive alone won't stop the dive."),I("Banshee's Veil","Double spell-shield vs their opener."),I("Rylai's Crystal Scepter","Peel yourself with slows.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Passive + stasis + suppress — three answers to one combo."),I("Rylai's Crystal Scepter","Slowed assassins die in the swarm."),I("Blackfire Torch","Burn punishes every entry.")],behind:[I("Zhonya's Hourglass","Rush — the classic Malz answer."),I("Banshee's Veil","Second spell-shield layer."),I("Void Staff","Keep the DoTs honest.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel."),I("Liandry's Torment","DoTs stack while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in — R the follow-up."),I("Rylai's Crystal Scepter","Kite the duel."),I("Morellonomicon","Cut their sustain.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Blackfire Torch","Your DoT total out-damages their one rotation."),I("Zhonya's Hourglass","Stasis their combo, suppress the gap."),I("Rabadon's Deathcap","Scale past their burst math.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burn honest.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the DoT mirror."),I("Blackfire Torch","Your burn out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Spread slows break their reposition rhythm."),I("Blackfire Torch","One landed E out-values three pokes."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Passive + veil eats two long-range spells."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Rylai's Crystal Scepter","Slow their siege tempo.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the swarm."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","R + full DoTs deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","DoTs stay lethal.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","DoTs outlast their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your R is the better pick tool — suppress first."),I("Blackfire Torch","Punish every whiff with DoTs."),I("Malignance","Amplify the suppress-kill combo.")],behind:[I("Banshee's Veil","Passive + veil — their hook needs three tries."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","Slow their follow-up.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP burn melts engage tanks."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Malignance","R the carry through the peel — suppression ignores it.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Slow + suppress answers most gimmicks."),I("Liandry's Torment","DoTs beat trick durability."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Passive + veil blanks their setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...MALZAHAR_MID_DEFAULT_RUNES}},
      },
    },
  },
};
