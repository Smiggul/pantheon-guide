import { I } from "../runeHelpers.js";

const GNAR_TOP_DEFAULT_RUNES = {
  keystone:       "Fleet Footwork",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Fleet Footwork fuels Mini Gnar's whole laning identity — boomerang-and-kite trades with heal-on-hit sustain and the move speed to stay out of return range. Triumph refunds HP through the Mega Gnar all-ins, Legend: Alacrity speeds the hyper-stack rate, Last Stand rewards the low-HP Mega fights his rage bar engineers, and Bone Plating + Overgrowth stabilise the bruiser matchups where one mistimed trade in Mini form is lethal.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GNAR — Missing Link: Rage-Form Flex Bruiser  (B tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"gnar", display:"Gnar", dd:"Gnar",
  color:"#7a5a20", glow:"#f0b040",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Darius","Irelia","Warwick"], replacements:["Jax","Camille","Fiora"],
      role:"Rage-Form Kite Bruiser / Teamfight Wombo",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Black Cleaver  ›  Sterak's Gage",
      coreNote:"Gnar is two champions sharing one rage bar: Mini kites with boomerangs, Mega wombos with GNAR! ults. Trinity Force serves both — Spellblade procs off every ability in both forms and Mega's huge base AD makes the proc enormous. Black Cleaver shreds through the frontline his boomerangs bounce across, Sterak's Gage covers the Mega engage he can't back out of, and Randuin's Omen closes against crit carries. Track the rage bar; fights are won by transforming on your timing, not theirs.",
      sideItems:["Randuin's Omen","Dead Man's Plate","Maw of Malmortius","Thornmail","Force of Nature","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Trinity Force","Kite them in Mini — they never touch you."),I("Black Cleaver","Shred armor across the long trade war."),I("Sterak's Gage","Mega all-in insurance when you do commit.")],behind:[I("Plated Steelcaps","Blunt their auto damage cheaply."),I("Sterak's Gage","Survive the all-in you can't kite."),I("Randuin's Omen","Slow their crit follow-up.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Out-trade them before the dive window opens."),I("Sterak's Gage","Shield eats their engage burst."),I("Black Cleaver","Shred them through the extended brawl.")],behind:[I("Sterak's Gage","Rush — the shield answers their all-in."),I("Plated Steelcaps","Blunt the auto-heavy dive."),I("Randuin's Omen","Slow their exit and turn it.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","Kite range denies their engage entirely."),I("Sterak's Gage","Shield blanks the burst combo."),I("Black Cleaver","Chunk them in the failed-engage window.")],behind:[I("Sterak's Gage","Shield floor under their one-shot math."),I("Maw of Malmortius","Vs AP assassins, the lifeline."),I("Guardian Angel","Insurance on the side lane.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Trinity Force","Boomerang kiting denies the extended duel."),I("Black Cleaver","Shred through their bruiser build."),I("Sterak's Gage","Win the all-in they force.")],behind:[I("Plated Steelcaps","Blunt their auto DPS."),I("Sterak's Gage","Survive the duel you can't refuse."),I("Guardian Angel","Fight twice in the side lane.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","Kite range beats their combo range."),I("Maw of Malmortius","Lifeline under their full rotation."),I("Sterak's Gage","Shield stacks with Maw against the burst.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Sterak's Gage","Second shield layer.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Force of Nature","Stack MR and out-trade their drain."),I("Trinity Force","Kite outside their sustained-damage zone."),I("Black Cleaver","Chunk them between their windows.")],behind:[I("Force of Nature","MR + move speed answers the whole kit."),I("Mercury's Treads","Tenacity vs their locks."),I("Sterak's Gage","Survive the ramped window.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","Move speed closes their poke range fast."),I("Sterak's Gage","Shield covers the engage."),I("Black Cleaver","Kill them in one Mega window.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Sterak's Gage","Survive the poke-into-fight transition."),I("Force of Nature","Speed + MR to close the gap.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Run them down with Spellblade procs."),I("Randuin's Omen","Blunt the crits while you close."),I("Sterak's Gage","Shield through the kite DPS.")],behind:[I("Randuin's Omen","Crit reduction is the whole matchup."),I("Plated Steelcaps","Cheap auto mitigation."),I("Sterak's Gage","Survive the focus fire.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Trinity Force","Sustained procs outlast shield cooldowns."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Sterak's Gage","Survive the protected carry's damage.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Trinity Force","Speed makes their hooks whiff."),I("Sterak's Gage","Shield covers the landed catch."),I("Black Cleaver","Punish the whiff with a full trade.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Guardian Angel","Insurance against the pick.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Trinity Force","Sustained DPS melts engage tanks."),I("Sterak's Gage","Survive their wombo with your own pending.")],behind:[I("Thornmail","Anti-heal + armor vs their sustain engage."),I("Mercury's Treads","Tenacity through the CC chain."),I("Sterak's Gage","Shield the follow-up burst.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Trinity Force","Procs out-damage their mitigation."),I("Randuin's Omen","Mirror their durability while chunking.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Thornmail","Punish their sustain peel."),I("Sterak's Gage","Survive the counter-engage.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Kite-and-proc answers most gimmicks."),I("Black Cleaver","Generic shred works on everything."),I("Sterak's Gage","Shield covers the surprise.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Sterak's Gage","Survive the setup you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...GNAR_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
