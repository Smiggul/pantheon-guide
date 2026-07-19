import { I } from "../runeHelpers.js";

const VIKTOR_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Shield Bash","Bone Plating"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch's burn scales far better into teamfights than a single-target keystone, matching Viktor's identity as a control mage who wants to shine in extended 5v5s rather than a single burst window. Manaflow Band and Transcendence solve the mana strain of constant Siphon Power/Gravity Field poke and add haste. Shield Bash and Bone Plating cover the melee-range vulnerability of his early laning phase before Chaos Storm and the Hex Core upgrades come online.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VIKTOR — Battlemage / Scaling Control Mage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"viktor", display:"Viktor", dd:"Viktor",
  color:"#5a3a1a", glow:"#e8a020",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Zed","Akali","Qiyana"], replacements:["Katarina","Ahri","Locke"],
      role:"Battlemage / Scaling Control Mage",
      corePath:"Blackfire Torch  ›  Hextech Rocketbelt  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
      coreNote:"Viktor plays a scaling control-mage pattern — his Q evolve unlocks a real side-lane duelist once chosen, kiting most melee champions with Gravity Field zoning and Siphon Power sustained damage. Blackfire Torch's burn and Hextech Rocketbelt's dash both fund the early-to-mid game before evolves come online; Zhonya's Hourglass buys time through all-ins; Rabadon's Deathcap scales the whole kit into a teamfight-ending threat.",
      sideItems:["Sorcerer's Shoes","Void Staff","Banshee's Veil","Morellonomicon","Ionian Boots of Lucidity","Shadowflame"],
      data:{
        JUGGERNAUT:{ahead:[I("Blackfire Torch","Burn adds up over the extended trade."),I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Dash zones the dive attempt."),I("Blackfire Torch","Burn punishes their commitment."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Insurance even with a lead."),I("Blackfire Torch","Burn punishes their commit."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Hextech Rocketbelt","Dash keeps the duelist at range."),I("Blackfire Torch","Burn whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then punish."),I("Blackfire Torch","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Blackfire Torch","Burn window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Close the gap while poke fires back."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Blackfire Torch","Burn on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Ionian Boots of Lucidity","Haste for more frequent windows."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Blackfire Torch","Burn the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Zhonya's Hourglass","Avoid being burst down in fights.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blackfire Torch","Extra burn through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Blackfire Torch","Extra burn on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Hextech Rocketbelt","Dash escape after a landed hook.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Blackfire Torch","Burn before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Blackfire Torch","Extra burn on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Blackfire Torch","Extra burn vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
      },
    },
  },
};
