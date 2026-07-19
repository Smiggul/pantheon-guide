import { I } from "../runeHelpers.js";

const NEEKO_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Arcane Comet rides Neeko's E root — a snared target eats the comet guaranteed — and her Q-E poke pattern procs it all lane. Manaflow Band funds the spam, Transcendence feeds the cooldown loop, Scorch stacks early trade damage, Cheap Shot fires true damage on every root and Pop Blossom knockup, and Ultimate Hunter brings the disguise-flower wombo around for every objective fight. The clone is free information warfare from the support seat.",
};

const NEEKO_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Mid Neeko keeps the Comet poke core but swaps Domination for the Inspiration sustain line — Biscuit Delivery survives the harder solo-lane matchups her short range invites, and Cosmic Insight accelerates the Pop Blossom teamfight cooldown her mid identity revolves around. With real farm she converts the poke chip into Rocketbelt flank ults instead of just lane harass.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NEEKO — Curious Chameleon: Clone Trickster Mage  (B Sup / C Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"neeko", display:"Neeko", dd:"Neeko",
  color:"#3a5a3a", glow:"#f080c0",
  lanes:["Support","Mid"],
  roles:{
    Support:{
      bans:["Blitzcrank","Leona","Pyke"], replacements:["Lux","Morgana","Zyra"],
      role:"Clone Trickster Damage Support",
      corePath:"Zaz'Zak's Realmspike  ›  Ionian Boots of Lucidity  ›  Hextech Rocketbelt  ›  Zhonya's Hourglass",
      coreNote:"Neeko support is a damage-and-deception seat: Q-E poke procs Zaz'Zak's Realmspike all lane, and the passive clone turns every bush into a mind game. Hextech Rocketbelt enables the signature play — disguise as a minion or flower, walk into their team, Rocketbelt-R knockup on three people. Zhonya's covers the landing, Shadowflame closes the kill math. Her E root is among the longest CC in the game when it passes through a minion — thread it and the pick game plays itself.",
      sideItems:["Shadowflame","Stormsurge","Rabadon's Deathcap","Void Staff","Banshee's Veil","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Zaz'Zak's Realmspike","Poke procs chip them off every wave."),I("Shadowflame","Pen punishes their low MR."),I("Hextech Rocketbelt","Spacing tool against the walk-down.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Hextech Rocketbelt","Dash to keep the spacing."),I("Void Staff","Pen keeps the poke real.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Answer their engage with a counter-knockup."),I("Shadowflame","Burst them mid-dive."),I("Zhonya's Hourglass","Stasis wastes the engage onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — squishy supports are the target."),I("Banshee's Veil","Blocks the engage opener."),I("Stormsurge","Punish damage when they do commit.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Roaming assassins hunt supports — stasis answers."),I("Shadowflame","E root into burst wins the race."),I("Hextech Rocketbelt","Dash spacing beats their jump range.")],behind:[I("Zhonya's Hourglass","Rush — you cannot outrun the combo."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it lands.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Shadowflame","Root them at range — they never get to duel."),I("Zaz'Zak's Realmspike","Chip them below all-in HP."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Banshee's Veil","Blocks the gap-close."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your E setup lands the rotation first."),I("Zhonya's Hourglass","Stasis their combo."),I("Stormsurge","Punish their squishy midline.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Zaz'Zak's Realmspike","Poke out-values their short-range drain."),I("Shadowflame","Execute the chunked battlemage.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash closes their poke range — clone hides the approach."),I("Shadowflame","Delete them once inside."),I("Zaz'Zak's Realmspike","Trade poke for poke with procs.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Vigilant Wardstone","Vision beats the poke angle.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","E root deletes their carry every fight."),I("Stormsurge","Burst proc on the rooted target."),I("Rabadon's Deathcap","One R flank ends the fight.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burst stays lethal.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Zaz'Zak's Realmspike","Poke volume outlasts shield cooldowns."),I("Void Staff","Pen through the budget.")],behind:[I("Morellonomicon","Cut the heal package."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the poke honest.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Shadowflame","Your E outranges their hook — root first."),I("Zaz'Zak's Realmspike","Punish every whiff."),I("Stormsurge","Burst the catcher who missed.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Shadowflame","Root the engage before it starts."),I("Void Staff","Pen through their MR stack."),I("Hextech Rocketbelt","Counter-flank while they engage.")],behind:[I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC."),I("Void Staff","Required through the frontline.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through the peel-tank's resists."),I("Shadowflame","Burst over the peel wall."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","The clone out-gimmicks most gimmicks."),I("Shadowflame","Burst them in one root window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...NEEKO_SUP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Zed","Fizz","Katarina"], replacements:["Lux","Ahri","Lissandra"],
      role:"Flank-Ult Poke Mage",
      corePath:"Hextech Rocketbelt  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Zhonya's Hourglass",
      coreNote:"Mid Neeko converts solo-lane income into the full flank-assassin package the support build only sketches: Hextech Rocketbelt plus disguise walks her into their backline unseen, Stormsurge detonates off the Pop Blossom burst, and Rabadon's Deathcap turns the R knockup into a teamfight-ending nuke. Zhonya's covers the landing every time. Lane with Q poke and E picks, then spend the mid game being a minion with murderous intent.",
      sideItems:["Rabadon's Deathcap","Shadowflame","Void Staff","Banshee's Veil","Morellonomicon","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Stormsurge","Burst proc off the poke pattern they can't answer."),I("Shadowflame","Pen punishes their low MR."),I("Hextech Rocketbelt","Spacing dash against the walk-down.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Hextech Rocketbelt","Dash keeps the spacing."),I("Void Staff","Pen keeps the poke real.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Counter-knockup answers their engage."),I("Stormsurge","Burst them mid-dive."),I("Zhonya's Hourglass","Stasis wastes the engage.")],behind:[I("Zhonya's Hourglass","Mandatory — divers hunt short-range mages."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to hold the spacing.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught rotation is death."),I("Stormsurge","E root into burst wins the race."),I("Shadowflame","Execute the failed assassin.")],behind:[I("Zhonya's Hourglass","Rush — stasis is the matchup."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own burst honest.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Shadowflame","Root at range — they never get to duel."),I("Stormsurge","Chip them below all-in HP."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Banshee's Veil","Blocks the gap-close."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stormsurge","Your E setup lands the rotation first."),I("Zhonya's Hourglass","Stasis their combo, answer with R."),I("Rabadon's Deathcap","Bigger burst wins the mirror.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Stormsurge","Burst them before the drain ramps."),I("Hextech Rocketbelt","Dash beats their zone control.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash + clone erases their range advantage."),I("Stormsurge","Delete them once inside."),I("Shadowflame","Execute the chunked artillery.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Speed between volleys.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stormsurge","One rooted carry is one dead carry."),I("Rabadon's Deathcap","R flank one-shots the backline."),I("Shadowflame","Execute range on chunked targets.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Stormsurge","Proc through the shield window.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Shadowflame","Your E outranges their hook — root first."),I("Stormsurge","Burst the catcher who missed."),I("Hextech Rocketbelt","Clone-dash makes their picks whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank fronting for them."),I("Hextech Rocketbelt","Flank behind their engage line."),I("Rabadon's Deathcap","R the backline over their heads.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Rabadon's Deathcap","Flank R skips the peel wall entirely."),I("Shadowflame","Burst over the peel to the carry."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Morellonomicon","Cut their sustain support.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","The clone out-gimmicks most gimmicks."),I("Stormsurge","Burst them in one root window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...NEEKO_MID_DEFAULT_RUNES}},
      },
    },
  },
};
