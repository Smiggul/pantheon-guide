import { I } from "../runeHelpers.js";

const LISSANDRA_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute converts a landed Ring of Frost slow into a full 3-hit burst window — Glacial Path repositions for the opener, Ice Shard slows, and the passive-empowered auto finishes it. Cheap Shot adds true damage to anything slowed by her kit's constant CC; Grisly Mementos and Ultimate Hunter fund the item spike and reduce Frozen Tomb's cooldown for more game-changing teamfight stuns. Manaflow Band and Transcendence solve mana strain and add haste.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LISSANDRA — Burst Mage / Pick-and-Lockdown
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"lissandra", display:"Lissandra", dd:"Lissandra",
  color:"#2e6b8a", glow:"#a0e0f0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Malzahar","Diana","Yone"], replacements:["Katarina","Ahri","Xerath"],
      role:"Burst Mage / Pick-and-Lockdown",
      corePath:"Malignance  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Lissandra plays for a repeatable pick-and-burst pattern — Glacial Path in, Ring of Frost zones, Frozen Tomb locks down a priority target for the kill. Malignance's haste means more frequent Glacial Path resets and CC uptime; Shadowflame executes targets already whittled down by the slow-heavy kit; Zhonya's Hourglass covers the melee-range commitment her combo requires.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Liandry's Torment","Ionian Boots of Lucidity","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Malignance","Haste means more Glacial Path resets."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Malignance","Haste punishes their dive with more CC uptime."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Ionian Boots of Lucidity","Haste to kite out.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Liandry's Torment","Burn wins the extended trade."),I("Malignance","Haste for more slow uptime.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then lock down the punish."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Void Staff","Keep damage relevant.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Liandry's Torment","Burn wins the drain war.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Ionian Boots of Lucidity","Haste closes the poke-war gap faster."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Zhonya's Hourglass","Survive the poke on approach."),I("Void Staff","Keep damage relevant.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Malignance","Haste means more lockdown windows on the ADC.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Malignance","Haste means Glacial Path dodges hooks more reliably."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Ionian Boots of Lucidity","Haste to escape.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Malignance","Haste locks down their engage before it starts.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Malignance","Haste keeps you ahead of kiting Specialists with more slows."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Void Staff","MR pen through their kit.")],runes:{...LISSANDRA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
