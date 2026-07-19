import { I } from "../runeHelpers.js";

const HWEI_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Legend: Haste"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Hwei paints damage in layers, and Deathfire Touch adds a burn to every brushstroke — with ten spells cycling, the DoT uptime is near-permanent. Manaflow Band and Presence of Mind together feed the heaviest mana appetite in the game, Transcendence and Legend: Haste accelerate the subject-swapping cooldown loop his kit revolves around, and Scorch wins the early poke exchanges before Blackfire Torch takes over the job.",
};

const HWEI_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Legend: Haste"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Support Hwei swaps Deathfire Touch for Arcane Comet — his QE and EE setups practically guarantee the comet lands, and without solo-lane gold the reliable poke proc out-values the DoT scaling. The rest of the page stays: Manaflow Band + Presence of Mind fund the double-spell rotations, and Transcendence + Legend: Haste keep the paint flowing through the support item economy.",
};

// ══════════════════════════════════════════════════════════════════════════
//  HWEI — Visionary: Ten-Spell Artist Mage  (A+ Mid / C Support 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"hwei", display:"Hwei", dd:"Hwei",
  color:"#2a3a5a", glow:"#8090e0",
  lanes:["Mid","Support"],
  roles:{
    Mid:{
      bans:["Zed","Fizz","Katarina"], replacements:["Viktor","Orianna","Syndra"],
      role:"Ten-Spell Artillery Artist",
      corePath:"Blackfire Torch  ›  Sorcerer's Shoes  ›  Liandry's Torment  ›  Shadowflame",
      coreNote:"Hwei has an answer painted for every question — poke, waveclear, CC, disengage — and this build maximizes the burn canvas. Blackfire Torch amplifies every DoT across his ten-spell rotation, Liandry's Torment stacks a second burn on the QQ lava trails, and Shadowflame converts chunked targets into QE snipe executes. Rabadon's Deathcap scales the whole gallery. His weakness is hands — every answer requires choosing it under pressure, so ban the assassins who ask the hardest questions.",
      sideItems:["Rabadon's Deathcap","Zhonya's Hourglass","Void Staff","Rylai's Crystal Scepter","Banshee's Veil","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP as they walk the lava."),I("Blackfire Torch","Amplified DoTs melt the walk-down."),I("Rylai's Crystal Scepter","EE root plus slow — they never arrive.")],behind:[I("Rylai's Crystal Scepter","Kite their engage forever."),I("Zhonya's Hourglass","Stasis covers the landed pull."),I("Void Staff","Pen keeps the burn real.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-dive with QE."),I("Blackfire Torch","Burn them through the whole engage."),I("Zhonya's Hourglass","Stasis wastes the dive entirely.")],behind:[I("Zhonya's Hourglass","Mandatory — divers hunt the artist."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","EE peel becomes unmissable.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught rotation is death."),I("Shadowflame","QE snipe wins the range game."),I("Blackfire Torch","Burn punishes every entry.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus EE is your whole defense."),I("Banshee's Veil","Blocks the combo opener."),I("Void Staff","Damage stays honest.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow layers deny the extended duel."),I("Liandry's Torment","Burn stacks while they chase the canvas."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel with QC slows."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Blackfire Torch","Your sustained rotation out-totals their combo."),I("Zhonya's Hourglass","Stasis their rotation, paint the aftermath."),I("Shadowflame","Pen wins the burst exchange.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the layers honest.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the DoT-vs-drain war."),I("Blackfire Torch","Your burn out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Blackfire Torch","Win the poke war — your QQ outranges most."),I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Shadowflame","QE executes the chunked artillery.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Void Staff","Chunk harder at range.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","QE snipe deletes their carry from off-screen."),I("Rylai's Crystal Scepter","Slowed ADCs can't kite the lava."),I("Rabadon's Deathcap","One full canvas ends them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Layers stay lethal.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blackfire Torch","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your zone layers beat their hook zone."),I("Blackfire Torch","Punish every attempt with stacked DoTs."),I("Shadowflame","Execute on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","EE peel after the grab.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn melts engage tanks crossing the canvas."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blackfire Torch","Ten spells answer most gimmicks."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...HWEI_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Leona","Pyke"], replacements:["Vel'Koz","Xerath","Lux"],
      role:"Utility Artist Support",
      corePath:"Zaz'Zak's Realmspike  ›  Sorcerer's Shoes  ›  Blackfire Torch  ›  Liandry's Torment",
      coreNote:"Support Hwei trades the Mid burn economy for Comet poke and utility paint: EE roots set up his carry, QC slows peel divers, and the double-DoT core still arrives — just a cycle later. Zaz'Zak's Realmspike procs off his constant QQ chip, Blackfire Torch and Liandry's Torment layer the burns, and Zhonya's Hourglass covers the squishiest support positioning in the game. He's a mid-laner renting the support seat: same gallery, cheaper tickets.",
      sideItems:["Zhonya's Hourglass","Rylai's Crystal Scepter","Void Staff","Morellonomicon","Banshee's Veil","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP stacking."),I("Blackfire Torch","Amplified DoTs melt the walk-down."),I("Rylai's Crystal Scepter","EE plus slow — they never reach the carry.")],behind:[I("Rylai's Crystal Scepter","Peel with layered slows."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the burn real.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Blackfire Torch","Burn them through the whole dive."),I("Rylai's Crystal Scepter","QC slow breaks the dive timing."),I("Zhonya's Hourglass","Stasis wastes the engage onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — squishy supports are the target."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel your carry with slows.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Blackfire Torch","Burn punishes every entry."),I("Rylai's Crystal Scepter","Slowed assassins die in the paint.")],behind:[I("Zhonya's Hourglass","Rush — you cannot outrun the combo."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow layers deny the duel pattern."),I("Liandry's Torment","Burn stacks while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Rylai's Crystal Scepter","Peel beats their stick-to-target game."),I("Morellonomicon","Cut their sustain.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Blackfire Torch","Sustained layers out-total their combo."),I("Zhonya's Hourglass","Stasis their rotation."),I("Void Staff","Pen keeps the total race won.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Morellonomicon","Anti-heal on a budget.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Blackfire Torch","Your burn out-ramps their drain."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Blackfire Torch","Win the poke war with burn layers."),I("Rylai's Crystal Scepter","Slow their reposition."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the paint."),I("Liandry's Torment","Burn through their lifesteal."),I("Blackfire Torch","One rotation chunks the carry.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Rylai's Crystal Scepter","Peel your own carry."),I("Banshee's Veil","Blocks the engage set on you.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blackfire Torch","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your paint zone beats their hook zone."),I("Blackfire Torch","Punish every attempt with DoTs."),I("Zhonya's Hourglass","Stasis the landed hook.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP burn melts engage tanks."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Rylai's Crystal Scepter","Peel is the job when behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Blackfire Torch","Layered burns out-value peel.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blackfire Torch","Ten spells answer most gimmicks."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Void Staff","Damage stays honest.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Vigilant Wardstone","Vision answers what you can't read.")],runes:{...HWEI_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
