import { I } from "../runeHelpers.js";

const BRAND_SUP_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Cut Down"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch layers a burn on top of Brand's Blaze passive — two stacking DoTs on every spell rotation, which is exactly how his damage wants to work. Manaflow Band funds the endless W poke, Transcendence feeds his cooldowns, Scorch wins early trades, and the Precision splash is current tech: Presence of Mind sustains the mana-hungry poke war, and Cut Down shreds the frontliners his percent-HP passive already punishes.",
};

const BRAND_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Mid Brand keeps the Deathfire Touch double-DoT core but swaps Cut Down for Coup de Grace — in lane he's finishing squishy mids the burn drags low, not shredding tanks. With solo-lane gold he hits Blackfire Torch a full cycle before support Brand ever could, and Presence of Mind keeps the R-Q-W-E rotation castable through the mid-game teamfights his ult bounces decide.",
};

// ══════════════════════════════════════════════════════════════════════════
//  BRAND — Burning Vengeance: DoT Mage  (A tier Support / B tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"brand", display:"Brand", dd:"Brand",
  color:"#5a1a0a", glow:"#f07020",
  lanes:["Support","Mid"],
  roles:{
    Support:{
      bans:["Blitzcrank","Leona","Pyke"], replacements:["Zyra","Xerath","Swain"],
      role:"Double-DoT Damage Support",
      corePath:"Zaz'Zak's Realmspike  ›  Sorcerer's Shoes  ›  Rylai's Crystal Scepter  ›  Liandry's Torment",
      coreNote:"Brand support converts the support seat into a second mid-laner, same as Zyra — Zaz'Zak's Realmspike procs off his constant W/E poke, Rylai's Crystal Scepter turns every Blaze tick into a slow that peels and chases at once, and Liandry's Torment triple-stacks the burn damage his whole kit is built around. Morellonomicon closes against sustain lanes. His R bounces hardest in the 2v2 chaos bot lane serves up all game.",
      sideItems:["Morellonomicon","Zhonya's Hourglass","Void Staff","Rabadon's Deathcap","Banshee's Veil","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Triple burn scales off their big HP bar."),I("Rylai's Crystal Scepter","Perma-slow means they never reach anyone."),I("Void Staff","Pen through their late MR buys.")],behind:[I("Rylai's Crystal Scepter","Slow keeps your carry alive even behind."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Morellonomicon","Cut their sustain cheaply.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive path — Blaze burns them all the way in."),I("Liandry's Torment","Burn them through the whole engage."),I("Zhonya's Hourglass","Stasis wastes a dive onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — squishy supports are the dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel your carry with slows.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Rylai's Crystal Scepter","Slowed assassins die in the burn."),I("Liandry's Torment","Punish every entry with stacked DoTs.")],behind:[I("Zhonya's Hourglass","Rush — you cannot outrun their combo."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the duel pattern entirely."),I("Liandry's Torment","Burn stacks while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Rylai's Crystal Scepter","Peel beats their stick-to-target game."),I("Morellonomicon","Cut their sustain.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Liandry's Torment","Out-damage their burst with sustained burn."),I("Zhonya's Hourglass","Stasis their rotation, burn the aftermath."),I("Void Staff","Pen keeps the DoTs honest.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Morellonomicon","Anti-heal on a budget.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Liandry's Torment","Your burn out-ramps their drain."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain tanks."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Liandry's Torment","Your DoTs out-value their poke."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the burn."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","One E-W-Q combo deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Rylai's Crystal Scepter","Peel your own carry."),I("Banshee's Veil","Blocks the engage set on you.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is your win condition vs sustain lanes."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your zone beats their hook — nothing enters it."),I("Liandry's Torment","Burn the catcher for every attempt."),I("Rabadon's Deathcap","Punish damage on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP burn melts engage tanks."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Rylai's Crystal Scepter","Peel is your job when behind — slow everything."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Liandry's Torment","The burn answers most gimmick kits."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...BRAND_SUP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Zed","Fizz","Katarina"], replacements:["Viktor","Ziggs","Xerath"],
      skillOrder:["W","E","Q"], // Mid Brand maxes W then E (AoE); Support maxes W then Q (global W>Q>E)
      role:"DoT Teamfight Mage",
      corePath:"Blackfire Torch  ›  Sorcerer's Shoes  ›  Rylai's Crystal Scepter  ›  Liandry's Torment",
      coreNote:"Mid Brand gets what support Brand only dreams of: solo-lane gold into Blackfire Torch, whose burn amplification stacks multiplicatively with Blaze and Liandry's for a triple-DoT engine nothing out-sustains. Rylai's Crystal Scepter keeps targets inside the burn radius, and Zhonya's Hourglass covers the mid-range positioning his combo forces. In teamfights his R bounce plus three DoT sources produces the highest sustained AoE damage of any mage in the game.",
      sideItems:["Zhonya's Hourglass","Void Staff","Morellonomicon","Rabadon's Deathcap","Banshee's Veil","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Blackfire Torch","Amplified burn scales off their HP stacking."),I("Liandry's Torment","Second burn source — they melt walking to you."),I("Rylai's Crystal Scepter","Perma-slow keeps them off you forever.")],behind:[I("Rylai's Crystal Scepter","Kite their walk-up while the burn works."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the DoTs real.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive; burn the whole attempt."),I("Blackfire Torch","Amplified DoTs finish them on the way out."),I("Zhonya's Hourglass","Stasis wastes their engage.")],behind:[I("Zhonya's Hourglass","Mandatory — you can't outrun the dive."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel yourself with slows.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — stasis answers the one caught rotation."),I("Rylai's Crystal Scepter","Slowed assassins burn to death mid-combo."),I("Blackfire Torch","Your DoTs finish them after they blow cooldowns.")],behind:[I("Zhonya's Hourglass","Rush — stasis is the only real answer."),I("Banshee's Veil","Blocks the combo opener."),I("Void Staff","Damage stays honest.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel."),I("Blackfire Torch","Burn stacks while they chase you."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel you can't win straight."),I("Morellonomicon","Cut their sustain.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Blackfire Torch","Your DoTs out-total their one rotation."),I("Zhonya's Hourglass","Stasis their combo, burn the cooldown gap."),I("Void Staff","Pen keeps the total damage race won.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Morellonomicon","Anti-heal cheaply.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the DoT-vs-drain war."),I("Blackfire Torch","Your burn out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Blackfire Torch","One landed W out-values three of their pokes."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Speed to dodge the next volley.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the burn."),I("Blackfire Torch","Burn through their lifesteal."),I("Rabadon's Deathcap","One combo deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burn stays lethal.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blackfire Torch","Amplified burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your burn zone beats their hook zone."),I("Blackfire Torch","Punish every attempt with stacked DoTs."),I("Rabadon's Deathcap","Kill threshold on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP burn melts engage tanks."),I("Blackfire Torch","Amplify the melt further."),I("Rylai's Crystal Scepter","Slow the engage before it starts.")],behind:[I("Void Staff","Required through their MR stack."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blackfire Torch","The burn answers most gimmick kits."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...BRAND_MID_DEFAULT_RUNES}},
      },
    },
  },
};
