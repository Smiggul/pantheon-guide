import { I } from "../runeHelpers.js";

const LUX_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Arcane Comet is guaranteed damage every time Lux lands Q or E-slow — her entire poke loop makes the comet unmissable. Manaflow Band funds the E-spam laning phase, Transcendence feeds the binding cooldown, and Scorch stacks the early poke war. Cheap Shot adds bonus true damage on every Q-rooted and E-slowed target, and Ultimate Hunter brings Final Spark around fast enough to be a second poke spell.",
};

const LUX_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Support Lux runs the identical page to Mid — this is genuinely what the data shows, because her job doesn't change: land Q, proc Comet + Cheap Shot, chunk the lane. The difference is economic, not runic — Zaz'Zak's Realmspike converts her poke pattern into support-item procs, and Ultimate Hunter matters even more when Final Spark is her only way to match a fed carry's damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LUX — Lady of Luminosity: Poke Mage (Mid) / Artillery Support  26.14
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"lux", display:"Lux", dd:"Lux",
  color:"#7a6a30", glow:"#f0e080",
  lanes:["Mid","Support"],
  roles:{
    Mid:{
      bans:["Zed","Fizz","Katarina"], replacements:["Xerath","Orianna","Ziggs"],
      role:"Burst Poke Mage / Root-Combo Sniper",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Shadowflame",
      coreNote:"Lux mid is a full-damage skillshot sniper: land the Q root and the entire E-auto-R rotation follows for free. Luden's Echo frontloads the poke, Stormsurge's boom rides along with the burst combo, Shadowflame converts chunked targets into executes, and Rabadon's Deathcap turns Final Spark into a cross-screen kill button. She has zero mobility — the build compensates with pure kill-before-killed math.",
      sideItems:["Rabadon's Deathcap","Void Staff","Zhonya's Hourglass","Banshee's Veil","Horizon Focus","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke them off every wave from max range."),I("Shadowflame","Pen punishes their low MR."),I("Rabadon's Deathcap","Chunk half their HP per Q landed.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed gap-close."),I("Void Staff","Keep poke real through MR."),I("Banshee's Veil","Blocks the pull that starts their engage.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Burst them mid-dive before the combo lands."),I("Shadowflame","Execute the diver who commits low."),I("Zhonya's Hourglass","Stasis wastes their engage entirely.")],behind:[I("Zhonya's Hourglass","Mandatory — you cannot outrun a dive."),I("Banshee's Veil","Blocks the engage opener."),I("Ionian Boots of Lucidity","More Q uptime for self-peel.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught rotation is death."),I("Shadowflame","Burst them at range before they close."),I("Rabadon's Deathcap","Q-hit = kill maths.")],behind:[I("Zhonya's Hourglass","Rush — stasis is the only assassin answer for a zero-mobility mage."),I("Banshee's Veil","Blocks the combo opener."),I("Void Staff","Damage stays honest.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Poke them below all-in HP before they engage."),I("Stormsurge","Burst window when they finally close."),I("Rabadon's Deathcap","End the fight at Q range.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Banshee's Veil","Blocks the gap-close."),I("Void Staff","Pen through their MR buys.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your range means you poke first — end it first."),I("Rabadon's Deathcap","Bigger burst wins the mirror."),I("Luden's Echo","Poke wins before combos start.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep your own burst honest.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Luden's Echo","Outrange their sustained-damage zone entirely."),I("Morellonomicon","Cut the heal-back on your poke."),I("Rabadon's Deathcap","Chunk faster than they drain.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Luden's Echo","Win the poke mirror with harder procs."),I("Rabadon's Deathcap","Your R outranges even theirs."),I("Shadowflame","Execute threshold from further away.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Ionian Boots of Lucidity","Haste to win the cast-rate war.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One Q-combo deletes a squishy carry."),I("Rabadon's Deathcap","Guarantee the one-rotation kill."),I("Luden's Echo","Poke them off farm from safety.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burst stays lethal.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Luden's Echo","Poke forces shields before the real combo.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Luden's Echo","Outrange the hook — poke them for trying."),I("Shadowflame","Burst the catcher on the whiff."),I("Rabadon's Deathcap","Punish window damage.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Ionian Boots of Lucidity","Haste for the self-peel Q.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Luden's Echo","Poke from outside their engage radius."),I("Void Staff","Pen keeps damage real through their MR."),I("Rabadon's Deathcap","Burst their backline over their heads.")],behind:[I("Void Staff","Required to matter at all."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Pen through the peel to the carry."),I("Rabadon's Deathcap","R outranges their peel zone entirely."),I("Luden's Echo","Poke around the Warden.")],behind:[I("Void Staff","Mandatory through stacked peel resists."),I("Zhonya's Hourglass","Survive the counter-engage."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...LUX_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Luden's Echo","Max-range poke answers most gimmicks."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale the pick threat.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Covers what you can't scout."),I("Void Staff","Damage stays honest.")],runes:{...LUX_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Leona","Nautilus"], replacements:["Xerath","Karma","Morgana"],
      role:"Artillery Support / Root-Setup Carry",
      corePath:"Zaz'Zak's Realmspike  ›  Sorcerer's Shoes  ›  Luden's Echo  ›  Stormsurge",
      coreNote:"Support Lux is the same sniper on a support budget — Zaz'Zak's Realmspike procs off her constant Q/E poke and funds the build without farm. Luden's Echo and Stormsurge then rebuild the mid-lane burst core a few minutes later than mid would, and Shadowflame closes toward it. She supports by making the enemy backline unplayable: root one carry, delete it, shield the team with W on the counter-engage.",
      sideItems:["Shadowflame","Rabadon's Deathcap","Zhonya's Hourglass","Void Staff","Horizon Focus","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke the frontline off your carry from range."),I("Stormsurge","Chunk their walk-up before it starts."),I("Shadowflame","Pen punishes their low MR.")],behind:[I("Zhonya's Hourglass","Stasis covers the flank onto you."),I("Void Staff","Poke stays real through MR."),I("Vigilant Wardstone","Vision keeps the lane safe on a budget.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Burst the diver mid-engage."),I("Luden's Echo","Chip them below dive-health first."),I("Zhonya's Hourglass","Stasis wastes the dive onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — you're the squishiest dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Vigilant Wardstone","Vision denies the dive setup.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — roaming assassins hunt supports first."),I("Shadowflame","Burst them at range before they close."),I("Luden's Echo","Poke keeps them below all-in HP.")],behind:[I("Zhonya's Hourglass","Rush — stasis is your only assassin answer."),I("Banshee's Veil","Blocks the opener."),I("Vigilant Wardstone","Track the roam before it reaches you.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Poke them below all-in HP before they engage."),I("Stormsurge","Burst window when they close on your carry."),I("Shadowflame","Execute threshold on the peel.")],behind:[I("Zhonya's Hourglass","Deny their dive-the-support plan."),I("Banshee's Veil","Blocks the gap-close."),I("Void Staff","Pen through their MR buys.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Outrange and out-poke their rotation."),I("Luden's Echo","Poke wins before combos start."),I("Stormsurge","Proc rides your Q punish.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the poke honest.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Luden's Echo","Outrange their sustained-damage zone."),I("Morellonomicon","Cut the heal-back on your poke."),I("Shadowflame","Chunk faster than they drain.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Luden's Echo","Win the poke mirror with harder procs."),I("Stormsurge","Your burst combo out-trades their chip."),I("Shadowflame","Execute range from further away.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Ionian Boots of Lucidity","Haste wins the cast-rate war.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One Q-combo deletes their ADC."),I("Luden's Echo","Poke them off farm from safety."),I("Stormsurge","Proc overkills the squishy.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burst stays lethal.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield war."),I("Luden's Echo","Poke forces their shields early."),I("Stormsurge","Burst after the shields are spent.")],behind:[I("Void Staff","Keep poke real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Morellonomicon","Cut their sustain package.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Luden's Echo","Outrange the hook — poke them for trying."),I("Shadowflame","Burst the catcher on the whiff."),I("Stormsurge","Punish window damage.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Vigilant Wardstone","Vision beats the flank hook.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Luden's Echo","Poke from outside their engage radius."),I("Void Staff","Pen keeps poke real through their MR."),I("Stormsurge","Chunk the backline over their heads.")],behind:[I("Void Staff","Required to matter at all."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Pen through the peel to the carry."),I("Luden's Echo","Poke around the Warden's zone."),I("Stormsurge","Proc chunks through the peel.")],behind:[I("Void Staff","Mandatory through stacked peel resists."),I("Zhonya's Hourglass","Survive the counter-engage."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Luden's Echo","Max-range poke answers most gimmicks."),I("Shadowflame","Burst them in one window."),I("Stormsurge","Proc pressure from safety.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Covers what you can't scout."),I("Void Staff","Damage stays honest.")],runes:{...LUX_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
