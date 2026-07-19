import { I } from "../runeHelpers.js";

const ZYRA_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Taste of Blood","Relentless Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Zyra's E-root and plant slows make Arcane Comet effectively undodgeable, and her constant plant-poke keeps the comet on a near-permanent cooldown refund. Manaflow Band funds the plant spam, Transcendence feeds the E/R cooldowns, Scorch stacks the lane poke war, Taste of Blood sustains through poke trades, and Relentless Hunter speeds her mid-game roam-and-flank pattern — her damage is real enough that she plays like a second mid laner.",
};

const ZYRA_JGL_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Sixth Sense","Treasure Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Haste","Cut Down"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Zyra swaps the Comet poke page for Electrocute — plants plus E plus auto procs it in every gank, turning her root into real kill pressure instead of chip damage. Cheap Shot fires on every E-rooted and plant-slowed target, Sixth Sense's free vision covers the flank angles a squishy jungler fears, Treasure Hunter accelerates the Liandry's spike off gank gold, and Legend: Haste + Cut Down give the sustained-clear haste and tank-shred her camps-and-objectives game needs.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZYRA — Rise of the Thorns: Damage Support / AP Jungle  (26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zyra", display:"Zyra", dd:"Zyra",
  color:"#5a2a1a", glow:"#e07040",
  lanes:["Support","Jungle"],
  roles:{
    Support:{
      bans:["Sona","Rakan","Alistar"], replacements:["Morgana","Karma","Swain"],
      role:"Plant-Zone Damage Support",
      corePath:"Zaz'Zak's Realmspike  ›  Sorcerer's Shoes  ›  Liandry's Torment  ›  Rylai's Crystal Scepter",
      coreNote:"Zyra is the highest-win-rate support in the game this patch because she converts the support slot into a full damage seat. Zaz'Zak's Realmspike procs off her endless plant poke, Liandry's Torment burns through everything her plants touch, and Rylai's Crystal Scepter turns every plant hit into a slow — the combination makes her garden a zone nothing can walk through. Morellonomicon or Zhonya's closes depending on the game.",
      sideItems:["Morellonomicon","Zhonya's Hourglass","Void Staff","Rabadon's Deathcap","Banshee's Veil","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their big HP bar."),I("Rylai's Crystal Scepter","Perma-slow means they never reach anyone."),I("Void Staff","Pen through their late MR buys.")],behind:[I("Rylai's Crystal Scepter","Slow keeps your carry alive even when behind."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Morellonomicon","Cut their sustain cheaply.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive path — plants zone the exit."),I("Liandry's Torment","Burn them through the whole engage."),I("Zhonya's Hourglass","Stasis wastes a dive onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — squishy supports are the dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel your carry with slows.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Rylai's Crystal Scepter","Slowed assassins die in the garden."),I("Liandry's Torment","Burn punishes every entry attempt.")],behind:[I("Zhonya's Hourglass","Rush — you cannot outrun their combo."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the duel pattern entirely."),I("Liandry's Torment","Burn stacks while they chase through plants."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Rylai's Crystal Scepter","Peel beats their stick-to-target game."),I("Morellonomicon","Cut their sustain.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Liandry's Torment","Out-damage their burst with sustained burn."),I("Zhonya's Hourglass","Stasis their rotation, garden the aftermath."),I("Void Staff","Pen keeps the burn honest.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Morellonomicon","Anti-heal on a budget.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Liandry's Torment","Your burn out-ramps their drain."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain tanks."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Liandry's Torment","Plants outrange even artillery once seeded ahead."),I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the garden."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","One E-root deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Rylai's Crystal Scepter","Peel your own carry."),I("Banshee's Veil","Blocks the engage set on you.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is your win condition vs sustain lanes."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your zone beats their hook — they can't enter it."),I("Liandry's Torment","Burn the catcher for every attempt."),I("Rabadon's Deathcap","Punish damage on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn scales off tank HP — they melt in the garden."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Rylai's Crystal Scepter","Peel is your job when behind — slow everything."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Liandry's Torment","The garden answers most gimmick kits."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...ZYRA_SUP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Wukong","Briar","Nocturne"], replacements:["Karthus","Elise","Fiddlesticks"],
      role:"AP Plant-Clear Jungler",
      corePath:"Liandry's Torment  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Jungle Zyra clears camps with plants doing the work from range and converts jungle income into a full mage build no support budget allows. Liandry's Torment burns through camps and tanks alike, Shadowflame turns rooted gank targets into executes, and Zhonya's Hourglass covers the squishiest clear in the game when invades land. Her ganks are lane-quality — E from fog is a Morgana binding with a damage garden attached — and Rabadon's Deathcap closes her into a second mid-laner.",
      sideItems:["Rabadon's Deathcap","Rylai's Crystal Scepter","Void Staff","Morellonomicon","Banshee's Veil","Mejai's Soulstealer"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP in every skirmish."),I("Shadowflame","Pen punishes their low MR."),I("Rylai's Crystal Scepter","Slowed juggernauts never reach the plants.")],behind:[I("Rylai's Crystal Scepter","Kite their invades with plant slows."),I("Zhonya's Hourglass","Stasis escapes the caught clear."),I("Void Staff","Pen keeps the burn real.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage before the combo lands."),I("Liandry's Torment","Burn them through the whole dive."),I("Zhonya's Hourglass","Stasis wastes the engage onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — you're the softest invade target in the game."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Slow their exit and turn it.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Assassin junglers will invade you — stasis answers."),I("Shadowflame","Out-burst them with the E-root opener."),I("Liandry's Torment","Burn punishes every entry.")],behind:[I("Zhonya's Hourglass","Rush — your clear is defenseless without it."),I("Banshee's Veil","Blocks the opener."),I("Rylai's Crystal Scepter","Slow beats their reset mobility.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel entirely."),I("Liandry's Torment","Burn stacks while they chase through plants."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Never take the 1v1 — stasis until help arrives."),I("Rylai's Crystal Scepter","Kite the invade."),I("Morellonomicon","Cut their sustain.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your root lands first — so does your burst."),I("Liandry's Torment","Burn out-damages their one rotation."),I("Zhonya's Hourglass","Stasis their combo, garden the aftermath.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burn honest.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Liandry's Torment","Your burn out-ramps their drain."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain fights."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Liandry's Torment","Seed plants ahead — they outrange artillery."),I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Shadowflame","Execute range on chunked targets.")],behind:[I("Banshee's Veil","Eats one long-range spell on the gank path."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Void Staff","Chunk harder at range.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One E-root gank deletes their carry."),I("Rylai's Crystal Scepter","Slowed ADCs can't kite the garden."),I("Rabadon's Deathcap","Guarantee the one-rotation kill.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire at objectives."),I("Rylai's Crystal Scepter","Peel with plant slows."),I("Banshee's Veil","Blocks the engage set on you.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your zone beats their hook — nothing enters it."),I("Liandry's Torment","Burn the catcher for every attempt."),I("Shadowflame","Punish damage on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook on your clear."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","Slow their follow-up.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn scales off tank HP at every objective."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required to matter against their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Liandry's Torment","The garden answers most gimmick kits."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...ZYRA_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
