import { I } from "../runeHelpers.js";

const LEESIN_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Ultimate Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks fast through Lee Sin's constant Q dash-strike and auto combo, and its Omnivamp keeps him healthy through skirmishes. Legend: Alacrity speeds up his energy-efficient trading pattern. Sudden Impact procs bonus true damage off the Q Resonating Strike dash. Ultimate Hunter reduces Dragon's Rage cooldown for more game-changing kick engages.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LEE SIN — Diver / Skirmisher
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"leesin", display:"Lee Sin", dd:"LeeSin",
  color:"#c9a24b", glow:"#f1c40f",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Nocturne","Warwick","Diana"], replacements:["Rek'Sai","Wukong","Vi"],
      role:"Diver / Skirmisher",
      corePath:"Eclipse  ›  Sundered Sky  ›  Death's Dance  ›  Guardian Angel",
      coreNote:"Lee Sin plays for early skirmishes and invades. Eclipse's proc and shield both fire inside a Q-dash all-in, punishing squishies before their combo lands; Sundered Sky's crit-heal wins the follow-up trade. Death's Dance and Guardian Angel keep him alive through the insec-kick all-in pattern.",
      sideItems:["Plated Steelcaps","Mercury's Treads","Randuin's Omen","Frozen Heart","Maw of Malmortius","Wit's End","Black Cleaver","Sterak's Gage"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor before they can stack HP."),I("Eclipse","Burst wins the skirmish before they close."),I("Death's Dance","Outlast their sustain in the fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Randuin's Omen","Crit/AS reduction if they build offense."),I("Sterak's Gage","Shield when their walk-down connects.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Eclipse","Win the burst race before their combo lands."),I("Sundered Sky","Crit-heal wins the mirror dive follow-up."),I("Death's Dance","Outlast their engage burst.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Plated Steelcaps","Irelia/Camille auto chains."),I("Mercury's Treads","Shorter CC on their initiation.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Eclipse","Out-burst them on the invade."),I("Sterak's Gage","Shield eats their opener."),I("Death's Dance","Bleed conversion after their combo.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Maw of Malmortius","AP assassins — lifeline shield."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR race with Conqueror stacking."),I("Sundered Sky","Crit-heal wins the mirror duel."),I("Black Cleaver","Shred through the extended skirmish.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."),I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain in the duel.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Eclipse","Close the gap before their combo lands."),I("Maw of Malmortius","Shield absorbs the burst."),I("Mercury's Treads","Reduce the CC in their combo.")],behind:[I("Maw of Malmortius","Mandatory vs burst mages."),I("Mercury's Treads","Shorter CC on invades."),I("Sterak's Gage","Survive the full rotation.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Black Cleaver","Shred through their scaling durability."),I("Eclipse","Burst before they can drain back.")],behind:[I("Maw of Malmortius","Vlad/Swain drain fights."),I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Eclipse","Gap-close instantly with the Q dash."),I("Mercury's Treads","Reduce CC duration on the approach."),I("Sterak's Gage","Survive the poke while closing.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Sterak's Gage","Second shield layer.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Eclipse","Burst kills the ADC on arrival."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while eating them.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Randuin's Omen","Crit reduction vs their build.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Wit's End","MR + on-hit resists shield spam."),I("Eclipse","Burst through their peel."),I("Black Cleaver","Chew through the shield economy.")],behind:[I("Sterak's Gage","Survive the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Eclipse","Punish a whiffed hook instantly."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Mercury's Treads","Mandatory — a caught Lee Sin wastes the gank."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Maw of Malmortius","AP catchers.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline for your carries."),I("Eclipse","Burst before their CC chain finishes."),I("Death's Dance","Sustain through the engage.")],behind:[I("Randuin's Omen","Crit/AS reduction if paired with a carry."),I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Wit's End","MR + on-hit through their mitigation."),I("Eclipse","Burst through their body-block.")],behind:[I("Black Cleaver","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC shortened.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Eclipse","Run down a kiting Specialist."),I("Wit's End","MR + on-hit shreds Teemo/Kennen."),I("Black Cleaver","Shred through their kit's mitigation.")],behind:[I("Wit's End","MR + DPS baseline."),I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups.")],runes:{...LEESIN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
