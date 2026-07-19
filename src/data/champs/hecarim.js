import { I } from "../runeHelpers.js";

const HECARIM_JGL_DEFAULT_RUNES = {
  keystone:       "Stormraider's Surge",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Celerity","Waterwalking"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Haste"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Hecarim converts move speed into damage, and this page is a speedometer: Stormraider's Surge procs off his E-Q burst and surges him forward for the next one, Nimbus Cloak turns every summoner cast into an engage window, Celerity feeds the E damage scaling directly, and Waterwalking wins the river skirmishes his tempo game revolves around. Triumph sustains the dive-heavy pattern and Legend: Haste keeps the Q cooldown spinning in extended fights.",
};

// ══════════════════════════════════════════════════════════════════════════
//  HECARIM — Shadow of War: Speed-Dive Bruiser  (A+ tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"hecarim", display:"Hecarim", dd:"Hecarim",
  color:"#2a4a4a", glow:"#60d0c0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Skarner","Udyr","Sylas"], replacements:["Jarvan IV","Volibear","Wukong"],
      role:"Momentum Dive Bruiser",
      corePath:"Spear of Shojin  ›  Ionian Boots of Lucidity  ›  Black Cleaver  ›  Death's Dance",
      coreNote:"Hecarim is momentum incarnate — every gank starts at 600 move speed and ends with an E charge through someone's health bar. Spear of Shojin feeds the Q-spam haste loop that defines his DPS, Black Cleaver shreds while stacking the HP his dives need, Death's Dance converts burst into a bleed he heals through, and Endless Hunger closes the sustain loop. Onslaught of Shadows is a fear no positioning answers — ult the carry lengthwise and the fight starts 4v5.",
      sideItems:["Endless Hunger","Maw of Malmortius","Sterak's Gage","Guardian Angel","Sundered Sky","Dead Man's Plate"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred them while Q-spinning through the brawl."),I("Death's Dance","Bleed conversion outlasts their trade pattern."),I("Spear of Shojin","Haste loop means endless Qs.")],behind:[I("Death's Dance","Survive their burst and heal it back."),I("Sterak's Gage","Shield the all-in you can't kite."),I("Dead Man's Plate","Speed to disengage the loss.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Spear of Shojin","Win the engage mirror — your E hits first and harder."),I("Black Cleaver","Shred through the extended brawl."),I("Death's Dance","Out-sustain their engage window.")],behind:[I("Sterak's Gage","Shield their engage burst."),I("Death's Dance","Bleed through the counter-dive."),I("Guardian Angel","Insurance when both teams commit.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Death's Dance","Their burst becomes a bleed you heal through."),I("Spear of Shojin","E them off their target before the combo lands."),I("Black Cleaver","Chunk them in the failed window.")],behind:[I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their bruiser build."),I("Death's Dance","Sustain conversion wins the extended duel."),I("Spear of Shojin","Q-spam DPS out-cycles their kit.")],behind:[I("Sterak's Gage","Survive the duel they force."),I("Maw of Malmortius","Lifeline vs AP skirmishers."),I("Guardian Angel","Insurance in the 1v1.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Spear of Shojin","Nimbus-speed engage lands before their rotation."),I("Maw of Malmortius","Lifeline under the full combo."),I("Death's Dance","Convert their burst to bleed.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Guardian Angel","Survive the caught engage.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spear of Shojin","Out-speed their zone control entirely."),I("Black Cleaver","Shred them inside your Q radius."),I("Maw of Malmortius","Shield the drain exchange.")],behind:[I("Maw of Malmortius","Magic lifeline against the ramp."),I("Mercury's Treads","Tenacity vs their locks."),I("Death's Dance","Bleed through the sustained damage.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Spear of Shojin","600 move speed erases their range advantage."),I("Black Cleaver","Chunk them on E arrival."),I("Dead Man's Plate","Even more approach speed.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the poke on approach."),I("Guardian Angel","Covers the committed dive.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Spear of Shojin","E charge deletes their carry before they kite once."),I("Black Cleaver","Shred their armor buys."),I("Death's Dance","Sustain through the focus fire.")],behind:[I("Sterak's Gage","Survive the kite-down."),I("Guardian Angel","Trade kills and revive."),I("Dead Man's Plate","Speed through their peel.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Spear of Shojin","Fear breaks their peel positioning."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Guardian Angel","Survive the protected carry.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Spear of Shojin","Too fast to hook — punish every whiff with E."),I("Sterak's Gage","Shield covers the landed catch."),I("Black Cleaver","Full dive on the whiffing catcher.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Guardian Angel","Survive the caught scenario."),I("Death's Dance","Bleed through the follow-up.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Spear of Shojin","Out-tempo their engage with raw speed."),I("Death's Dance","Sustain the extended teamfight.")],behind:[I("Sterak's Gage","Shield the counter-engage."),I("Mercury's Treads","Tenacity through the CC chain."),I("Guardian Angel","Insurance at objectives.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Spear of Shojin","Ult fear moves the carry out of the peel bubble."),I("Death's Dance","Sustain the long crack attempt.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Guardian Angel","Insurance on the forced dive."),I("Sterak's Gage","Shield the counter-burst.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Spear of Shojin","Raw speed answers most gimmicks."),I("Black Cleaver","Generic shred works on everything."),I("Death's Dance","Sustain through the tricks.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Guardian Angel","Survive the setup you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...HECARIM_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
