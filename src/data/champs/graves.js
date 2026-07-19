import { I } from "../runeHelpers.js";

const GRAVES_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Dark Harvest stacks off Graves' skirmish-heavy pattern — every counter-jungle fight and gank feeds the execute that makes his late-game buckshot lethal. Sudden Impact procs on every E dash, Grisly Mementos stacks haste off his pick tempo, Treasure Hunter accelerates the Hubris spike his carry curve depends on, and Triumph + Legend: Alacrity keep the shotgun cycling through extended river brawls.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GRAVES — Outlaw: Shotgun Carry Jungler  (S tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"graves", display:"Graves", dd:"Graves",
  color:"#4a3a30", glow:"#d08050",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Zyra","Evelynn","Naafiri"], replacements:["Kayn","Kha'Zix","Nocturne"],
      role:"Shotgun Duelist Carry",
      corePath:"Hubris  ›  Plated Steelcaps  ›  The Collector  ›  Lord Dominik's Regards",
      coreNote:"Graves is the premier carry jungler — his Q waveclear-grade AoE makes his clear one of the fastest in the game, and True Grit armor lets him bully most junglers out of their own camps. Hubris snowballs the takedowns his tempo generates, The Collector converts chunked targets into executes, and Lord Dominik's Regards plus Infinity Edge turn the buckshot into a tank-shredding crit cannon. Play him like a fifth carry who happens to smite: farm fast, invade often, take every 2v2.",
      sideItems:["Infinity Edge","Bloodthirster","Guardian Angel","Maw of Malmortius","Serylda's Grudge","Edge of Night"],
      data:{
        JUGGERNAUT:{ahead:[I("The Collector","Execute beats their HP stacking."),I("Lord Dominik's Regards","Pen keeps buckshot real through armor."),I("Hubris","Snowball the kills their immobility gifts you.")],behind:[I("Guardian Angel","Insurance when they corner you."),I("Maw of Malmortius","Vs mixed-damage juggernauts."),I("Serylda's Grudge","Pen + slow to kite the walk-down.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("The Collector","Burst them mid-engage before the combo lands."),I("Hubris","Punish every failed dive with stacks."),I("Edge of Night","Block the dive-opener.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life on contested dives."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Your E-Q burst wins the race — execute confirms."),I("Edge of Night","Block their combo opener."),I("Hubris","Stack off the assassin mirror kills.")],behind:[I("Edge of Night","Rush — blanks their opener."),I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Infinity Edge","Crit buckshot ends duels in two casts."),I("Lord Dominik's Regards","Pen through their bruiser core."),I("Bloodthirster","Sustain the extended 1v1.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Maw of Malmortius","Lifeline vs AP skirmishers."),I("Edge of Night","Block the gap-close.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("The Collector","E in, point-blank Q, execute — before their rotation."),I("Edge of Night","Block the rotation opener."),I("Hubris","Snowball their squishy mistake.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the caught scenario.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("The Collector","Kill inside one dash window before they ramp."),I("Lord Dominik's Regards","Pen scales into their HP stacking."),I("Bloodthirster","Sustain through the chip.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive extended fights.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("The Collector","Delete them on arrival — E closes fast."),I("Edge of Night","Block the self-peel spell they hold."),I("Hubris","Stack off the squishy kills.")],behind:[I("Edge of Night","Spell shield eats one poke spell on approach."),I("Maw of Malmortius","Shield vs AP poke."),I("Guardian Angel","Covers the committed engage.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("The Collector","Squishy carries die to one buckshot window."),I("Infinity Edge","Crit math guarantees it."),I("Lord Dominik's Regards","Pen through their armor buys.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Bloodthirster","Sustain the DPS race.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("The Collector","Execute under the shield threshold."),I("Hubris","Snowball through their protected carry.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the peel damage.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Spell shield eats the hook."),I("The Collector","Burst the catcher on the whiff."),I("Hubris","Stack off every pick they miss.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen keeps buckshot real through their frontline."),I("The Collector","Execute the engage tank at 5%."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain at objectives."),I("Serylda's Grudge","Required pen from behind.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Giant slayer through the peel-tank."),I("Infinity Edge","Crit volume breaks any mitigation."),I("The Collector","Execute the carry through the peel.")],behind:[I("Serylda's Grudge","Mandatory pen vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("The Collector","Execute them in one dash window."),I("Hubris","Snowball whatever they're doing."),I("Edge of Night","Block their key setup ability.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...GRAVES_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
