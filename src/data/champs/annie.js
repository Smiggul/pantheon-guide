import { I } from "../runeHelpers.js";

const ANNIE_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Axiom Arcanist"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute completes inside one stun-Tibbers rotation — Annie's whole identity is the guaranteed combo off a stored stun. Cheap Shot fires true damage on every stunned target, Grisly Mementos stacks haste off her pick pattern, Relentless Hunter speeds the Flash-Tibbers roams her mid game revolves around, Absolute Focus rewards the safe passive-stacking positioning, and Axiom Arcanist amplifies Tibbers himself — the ult IS the champion.",
};

const ANNIE_SUP_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Absolute Focus"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Support Annie keeps the same Electrocute stun-combo page as Mid — the data confirms it — with one swap: Manaflow Band replaces Axiom Arcanist, because on a support income the mana sustain for constant W poke matters more than amplifying a less-frequent Tibbers. The stun bar is the lane: hold it at three stacks and the enemy carry plays scared or plays dead.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ANNIE — Dark Child: Stun-Combo Burst Mage  (A- Mid / B Support 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"annie", display:"Annie", dd:"Annie",
  color:"#5a1a1a", glow:"#f06060",
  lanes:["Mid","Support"],
  roles:{
    Mid:{
      bans:["Xerath","Ziggs","Syndra"], replacements:["Lux","Syndra","Vex"],
      role:"Point-Click Stun Burster",
      corePath:"Malignance  ›  Sorcerer's Shoes  ›  Hextech Rocketbelt  ›  Shadowflame",
      coreNote:"Annie is the most reliable burst in the game: no skillshots, one stored stun, one bear. Malignance amplifies and hastes Tibbers — her whole kill pattern — Hextech Rocketbelt closes the gap her short range leaves, and Shadowflame turns stunned targets into executes. Zhonya's covers the point-blank R engages. Walk mid with the stun charged and every enemy squishy is playing chicken with a Flash-Tibbers they cannot react to.",
      sideItems:["Zhonya's Hourglass","Rabadon's Deathcap","Void Staff","Banshee's Veil","Morellonomicon","Mejai's Soulstealer"],
      data:{
        JUGGERNAUT:{ahead:[I("Malignance","Tibbers + burn kites their walk-down."),I("Shadowflame","Pen punishes their low MR."),I("Rabadon's Deathcap","Scale the poke into melt.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Hextech Rocketbelt","Dash keeps the spacing."),I("Void Staff","Pen keeps the combo real.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Counter-burst their engage with stun ready."),I("Shadowflame","Delete them mid-dive."),I("Zhonya's Hourglass","Stasis wastes the engage.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus stored stun answers dives."),I("Banshee's Veil","Blocks the engage opener."),I("Malignance","Tibbers zone peels yourself.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks the combo — stun the exit."),I("Shadowflame","Your point-click burst wins the race."),I("Malignance","Tibbers punishes the failed jump.")],behind:[I("Zhonya's Hourglass","Stasis is the matchup."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own burst honest.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Shadowflame","Stun-burst them before the duel starts."),I("Malignance","Tibbers fights the extended fight for you."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Banshee's Veil","Blocks the gap-close."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your stun is point-click — their setup isn't."),I("Zhonya's Hourglass","Stasis their combo, answer with yours."),I("Rabadon's Deathcap","Bigger burst wins the mirror.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Shadowflame","Burst them before the drain ramps."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash erases their range advantage — stun follows."),I("Shadowflame","Delete them once inside."),I("Rabadon's Deathcap","One combo ends it.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Hextech Rocketbelt","More gap-close for the flank.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Flash-Tibbers deletes their carry every fight."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Hextech Rocketbelt","Dash through their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Malignance","Tibbers burn outlasts shield cycles.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Morellonomicon","Cut their sustain.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Your stun is faster than their hook — pick first."),I("Shadowflame","Burst the catcher who missed."),I("Malignance","Tibbers punishes the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Hextech Rocketbelt","Dash to sidestep.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank — stun stops the wombo cold."),I("Malignance","Tibbers zone splits their engage line."),I("Rabadon's Deathcap","Burst the backline over their heads.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Point-click burst skips the peel minigame."),I("Rabadon's Deathcap","Out-burst their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Morellonomicon","Cut their sustain support.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Shadowflame","Point-click stun answers most gimmicks."),I("Malignance","Tibbers out-zones trick kits."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...ANNIE_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Leona","Pyke"], replacements:["Lux","Zyra","Brand"],
      role:"Stun-Bot Damage Support",
      corePath:"Zaz'Zak's Realmspike  ›  Sorcerer's Shoes  ›  Malignance  ›  Stormsurge",
      coreNote:"Support Annie is the same champion on a budget: hold the stun, W poke procs Zaz'Zak's Realmspike, and every enemy engage answers to a point-click Tibbers counter-engage. Malignance still amplifies the bear, Stormsurge converts the Electrocute combo into extra burst, and Shadowflame arrives a cycle later than Mid's but hits just as hard. Her lane threat is binary and terrifying: three stacks up means the enemy ADC cannot step forward. Zone with the resource they can see.",
      sideItems:["Shadowflame","Zhonya's Hourglass","Void Staff","Banshee's Veil","Morellonomicon","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Zaz'Zak's Realmspike","Poke procs chip them off every wave."),I("Malignance","Tibbers kites the walk-down."),I("Stormsurge","Burst proc when they finally commit.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Malignance","Tibbers peels for your carry."),I("Void Staff","Pen keeps the combo real.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Counter-burst their engage with stun ready."),I("Shadowflame","Delete them mid-dive."),I("Zhonya's Hourglass","Stasis wastes the engage onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — squishy supports are the dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Malignance","Tibbers zone breaks the dive.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Shadowflame","Point-click stun into burst wins the race."),I("Stormsurge","Punish every entry.")],behind:[I("Zhonya's Hourglass","Rush — you cannot outrun the combo."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Shadowflame","Stun-burst them before the duel starts."),I("Zaz'Zak's Realmspike","Chip them below all-in HP."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Banshee's Veil","Blocks the gap-close."),I("Malignance","Tibbers body-blocks the duel.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stormsurge","Your stun setup lands the rotation first."),I("Zhonya's Hourglass","Stasis their combo."),I("Shadowflame","Pen wins the burst mirror.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Stormsurge","Burst them before the drain ramps."),I("Shadowflame","Execute the ramped battlemage early.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stormsurge","Flank with the stun — their range means nothing after."),I("Shadowflame","Delete them once inside."),I("Zaz'Zak's Realmspike","Trade poke for poke with procs.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Flash-Tibbers deletes their carry every fight."),I("Stormsurge","Burst proc on the stunned target."),I("Malignance","The bear finishes what the stun starts.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burst stays lethal.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Stormsurge","Burst bigger than their shield budget."),I("Zaz'Zak's Realmspike","Poke volume outlasts shield cooldowns.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Morellonomicon","Cut their sustain.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Stormsurge","Your point-click stun beats their skillshot hook."),I("Shadowflame","Burst the catcher who missed."),I("Malignance","Tibbers punishes the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Stormsurge","Stun the engage tank mid-wombo — fight over."),I("Void Staff","Pen through their MR stack."),I("Malignance","Tibbers splits their engage line.")],behind:[I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC."),I("Void Staff","Required through the frontline.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Point-click burst skips the peel minigame."),I("Void Staff","Pen the resist stack."),I("Stormsurge","Proc through the shield layer.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stormsurge","Point-click stun answers most gimmicks."),I("Shadowflame","Execute them in one window."),I("Malignance","Tibbers out-zones trick kits.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...ANNIE_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
