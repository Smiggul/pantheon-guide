import { I } from "../runeHelpers.js";

const VEIGAR_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute delivers the 3-hit burst Veigar needs to convert a landed Dark Matter/Baleful Strike combo into a full kill window — Event Horizon traps the target inside the burst radius. Cheap Shot adds true damage to anyone caged by Event Horizon; Grisly Mementos and Ultimate Hunter fund his stacking passive's item reliance and shorten Primordial Burst's execute cooldown. Manaflow Band and Transcendence solve the mana strain of constant Q spam and add haste.",
};

const VEIGAR_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Grisly Mementos"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Veigar trades the stacking-scaling identity for early poke-and-cage pressure — Comet punishes every Dark Matter landed from safety, and Event Horizon still traps a target for the ADC to burst down even without a jungler's help. Manaflow Band and Transcendence solve the mana strain and add haste; Scorch adds early lane pressure. Cheap Shot and Grisly Mementos keep the true-damage-on-impair and stacking-AP identity relevant from the support position.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VEIGAR — Burst Mage / Stacking Cage-and-Kill
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"veigar", display:"Veigar", dd:"Veigar",
  color:"#4a1a5c", glow:"#c9a0e8",
  lanes:["Mid","Support"],
  roles:{
    Mid:{
      bans:["Zed","Qiyana","Akali"], replacements:["Katarina","Ahri","Xerath"],
      role:"Burst Mage / Stacking Cage-and-Kill",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Veigar plays a scaling stack-and-burst pattern — every unique champion takedown grows Phenomenal Evil Power's AP permanently, and once he's ahead nobody survives an Event Horizon cage into full combo. Luden's Echo's proc rewards constant poke and wave clear; Shadowflame executes low-HP targets his stacking passive has already outscaled; Rabadon's Deathcap amplifies every point of stacked AP into a real one-rotation kill threat.",
      sideItems:["Zhonya's Hourglass","Void Staff","Banshee's Veil","Morellonomicon","Ionian Boots of Lucidity","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Cosmic Drive","Mobility to kite out.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Cosmic Drive","Mobility to disengage.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Mobility kites the duelist."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Cosmic Drive","Mobility to disengage."),I("Banshee's Veil","Blocks their gap-close CC.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then cage the punish."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Void Staff","Keep damage relevant.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots on approach."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Ionian Boots of Lucidity","Haste to close faster."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for faster Event Horizon resets.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Cosmic Drive","Mobility to escape.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Ionian Boots of Lucidity","Haste for more Event Horizon windows.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Lulu","Karma","Zac"],
      role:"Poke-Cage Enchanter-Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Shadowflame",
      coreNote:"Support Veigar plays for the same Event Horizon cage-and-burst pattern as Mid, but built to enable a carry instead of farming a lane — trap the enemy engage, then combo alongside the ADC. Luden's Echo and Stormsurge both proc off the same poke-heavy ability rotation; Shadowflame executes a caged target once the team's damage lands.",
      sideItems:["Rylai's Crystal Scepter","Zhonya's Hourglass","Banshee's Veil","Void Staff","Morellonomicon","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rylai's Crystal Scepter","Slow keeps them caged in Event Horizon.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Mercury's Treads","Reduce their key CC.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Proc damage on divers diving into range."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rylai's Crystal Scepter","Slow denies their reset window.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies their kite/duel pattern."),I("Stormsurge","Proc damage during the extended trade."),I("Shadowflame","Burst whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Banshee's Veil","Blocks their gap-close CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then cage the punish."),I("Banshee's Veil","Blocks the CC that opens their combo."),I("Shadowflame","Out-burst them between cooldown windows.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Shadowflame","Burst window before they can drain back."),I("Rylai's Crystal Scepter","Slow keeps them in the fight.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Stormsurge","Proc damage while closing."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slow amplifies your ADC's kiting."),I("Stormsurge","Proc damage during the trade."),I("Shadowflame","Burst the squishy ADC outright.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on your ADC."),I("Mercury's Treads","Reduce CC duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Morellonomicon","Cuts their sustain package."),I("Rylai's Crystal Scepter","Slow denies their peel.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Spell shield absorbs the hook."),I("Rylai's Crystal Scepter","Slow punishes a whiffed hook."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Reduce CC duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rylai's Crystal Scepter","Slow before they can engage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Shadowflame","Extra burst on a landed combo."),I("Rylai's Crystal Scepter","Slow past their body-block.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Rylai's Crystal Scepter","Slow keeps you ahead of kiting Specialists."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Mercury's Treads","Reduce blind/stun duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
