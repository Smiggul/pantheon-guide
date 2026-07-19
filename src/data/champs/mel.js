import { I } from "../runeHelpers.js";

const MEL_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Coup de Grace","Presence of Mind"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Comet punishes every landed Radiant Volley or Solar Snare from safe range, matching Mel's artillery-poke identity. Manaflow Band and Presence of Mind solve the mana problem from constant casting; Transcendence adds haste for more frequent Rebuttal windows. Coup de Grace finishes targets already whittled down by Overwhelm stacks and poke damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MEL — Artillery Mage / Overwhelm Execute
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"mel", display:"Mel", dd:"Mel",
  color:"#d4af37", glow:"#fff2b8",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Zed","Akali","Fizz"], replacements:["Katarina","Ahri","Xerath"],
      role:"Artillery Mage / Overwhelm Execute",
      corePath:"Luden's Echo  ›  Hextech Rocketbelt  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Mel plays for extended poke combos that build Overwhelm stacks toward the Golden Eclipse execute, punctuated by Rebuttal's projectile reflect to punish overextension. Luden's Echo procs off her passive bonus projectiles for wave clear and poke damage; Hextech Rocketbelt adds mobility and burst to close out a fight; Shadowflame and Rabadon's scale the execute into a real teamfight threat.",
      sideItems:["Ionian Boots of Lucidity","Sorcerer's Shoes","Zhonya's Hourglass","Void Staff","Morellonomicon","Banshee's Veil"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Ionian Boots of Lucidity","Haste keeps Rebuttal on a shorter loop.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Dash away from the dive after bursting."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Hextech Rocketbelt","Dash keeps the duelist at range."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation while Rebuttal reflects their key ability."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo, backing up Rebuttal."),I("Zhonya's Hourglass","Survive the full rotation."),I("Ionian Boots of Lucidity","Haste for more Rebuttal windows.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Close the gap while Rebuttal reflects their long-range shots."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Ionian Boots of Lucidity","Haste for more frequent Rebuttal windows."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more Rebuttal windows.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Hextech Rocketbelt","Dash escape after a landed hook.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...MEL_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Ionian Boots of Lucidity","Haste for more Rebuttal windows.")],runes:{...MEL_MID_DEFAULT_RUNES}},
      },
    },
  },
};
