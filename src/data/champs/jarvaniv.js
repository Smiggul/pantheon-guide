import { I } from "../runeHelpers.js";

const JARVANIV_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Jarvan's E-Q knockup opener starts every fight, and Conqueror stacks through the brawl that follows — he's a diver who stays in the fight, not a one-rotation assassin. Triumph refunds HP through multi-takedown Cataclysm fights, Legend: Alacrity speeds both clear and passive procs, Coup de Grace finishes what the flag-drag starts, and the Inspiration economy line (Magical Footwear, Cosmic Insight) accelerates the first-item spike and shortens the ult cooldown windows his engage tempo lives on.",
};

// ══════════════════════════════════════════════════════════════════════════
//  JARVAN IV — Exemplar of Demacia: Engage Diver  (S tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"jarvaniv", display:"Jarvan IV", dd:"JarvanIV",
  color:"#3a3a5a", glow:"#e0c060",
  lanes:["Jungle"],
  altBuilds:{
    Jungle:[{
      label:"Sundered Sky bruiser", tag:"alt",
      corePath:"Sundered Sky  ›  Plated Steelcaps  ›  Black Cleaver  ›  Guardian Angel",
      // Research: The previous standard line, now the minority: on 26.20 Sundered Sky is the first item in about a fifth
      //   of Jarvan games (Eclipse is a similar share), and Sundered Sky into Black Cleaver is the second most
      //   common two-item start at about 14%, well behind Profane Hydra into Voltaic Cyclosword. Death's Dance is
      //   an equally common third item.
      coreNote:"Sundered Sky first, the bruiser line. It suits long fights more than one-rotation picks, so take it into frontline-heavy teams. Sundered Sky's guaranteed crit-and-heal on the first hit rides the E-Q dive opener, Black Cleaver shreds armor for the team fighting inside Cataclysm, and Guardian Angel insures the always-in-the-middle positioning your ult demands. Death's Dance is an equal third option.",
      runes:{...JARVANIV_JGL_DEFAULT_RUNES},
      sideItems:["Death's Dance","Sterak's Gage","Spirit Visage","Thornmail","Randuin's Omen","Maw of Malmortius"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Briar","Rek'Sai","Master Yi"], replacements:["Vi","Sejuani","Wukong"],
      role:"Flag-Drag Engage Diver",
      corePath:"Profane Hydra  ›  Plated Steelcaps  ›  Voltaic Cyclosword  ›  Bastionbreaker",
      // Research: On 26.20 most Jarvan players build him as a lethality burst jungler rather than a bruiser: Profane Hydra
      //   is the first item in about half of games, Profane Hydra into Voltaic Cyclosword is the most common
      //   two-item start by a wide margin (about 31%), and Bastionbreaker is the usual third. Edge of Night,
      //   Guardian Angel and Death's Dance are the common fourth items. Cut for length: his early ganks are among
      //   the strongest in the game, so play the first ten minutes like every lane is your lane.
      coreNote:"Jarvan ganks from fog with the E-Q knockup and locks the kill inside Cataclysm. Build lethality burst: Profane Hydra's active adds a second hit right after the knockup and speeds the clear, Voltaic Cyclosword turns your opening ability into an Energized attack that chunks by current health, and Bastionbreaker adds true damage to ability hits and to the next dragon or tower after a takedown. Fourth: Edge of Night, Guardian Angel or Death's Dance, by how much survival the dive needs.",
      sideItems:["Edge of Night","Guardian Angel","Death's Dance","Axiom Arc","Black Cleaver","Sundered Sky","Eclipse","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred them for your whole team inside Cataclysm."),I("Sundered Sky","Heal-proc wins the extended brawl."),I("Sterak's Gage","Survive their answer to your engage.")],behind:[I("Plated Steelcaps","Blunt their auto damage cheaply."),I("Sterak's Gage","Shield the all-in you can't avoid."),I("Thornmail","Anti-heal their sustain.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Win the engage mirror — your knockup opens first."),I("Black Cleaver","Shred through the extended brawl."),I("Guardian Angel","Dive deeper than they dare.")],behind:[I("Guardian Angel","Insurance when both teams commit."),I("Sterak's Gage","Shield eats their engage burst."),I("Randuin's Omen","Slow their follow-up.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sundered Sky","E-Q catches them mid-jump — burst the burster."),I("Guardian Angel","Punish their all-in with a revive."),I("Black Cleaver","Chunk them in the failed-engage window.")],behind:[I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under their combo.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their bruiser build in Cataclysm."),I("Sundered Sky","Heal-proc sustains the duel."),I("Sterak's Gage","Win the all-in they extend.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Guardian Angel","Insurance in the duel you can't refuse."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sundered Sky","Knockup opener beats their rotation timing."),I("Maw of Malmortius","Lifeline under their full combo."),I("Guardian Angel","Dive the backline twice.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Guardian Angel","Survive the caught engage.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Sundered Sky","Dive them before the drain ramps."),I("Spirit Visage","Sustain through their zone damage."),I("Black Cleaver","Shred them inside your arena.")],behind:[I("Spirit Visage","MR + healing answers the drain."),I("Maw of Malmortius","Lifeline vs the ramped window."),I("Mercury's Treads","Tenacity vs their locks.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Sundered Sky","E-Q erases their range advantage instantly."),I("Guardian Angel","Dive them under tower and walk out."),I("Black Cleaver","Chunk them inside Cataclysm.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the poke on approach."),I("Guardian Angel","Covers the committed dive.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Sundered Sky","Knockup-into-Cataclysm deletes their carry."),I("Black Cleaver","Shred their armor buys."),I("Guardian Angel","Dive the backline with insurance.")],behind:[I("Randuin's Omen","Blunt the crits while you close."),I("Guardian Angel","Trade kills and revive."),I("Sterak's Gage","Survive the focus fire.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Sundered Sky","Burst through the shield window."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Guardian Angel","Survive the protected carry.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sundered Sky","Your engage outranges their hook — flag first."),I("Sterak's Gage","Shield covers the landed catch."),I("Black Cleaver","Punish the whiff with a full dive.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Guardian Angel","Survive the caught scenario."),I("Randuin's Omen","Slow their follow-up burst.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Sundered Sky","Win the engage race — knockup beats knockup."),I("Guardian Angel","Commit harder than they can.")],behind:[I("Thornmail","Anti-heal + armor vs their frontline."),I("Mercury's Treads","Tenacity through the CC chain."),I("Sterak's Gage","Shield the counter-engage.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Sundered Sky","Cataclysm traps the carry away from the peel."),I("Guardian Angel","Dive through the peel twice.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Thornmail","Punish their sustain peel."),I("Guardian Angel","Insurance on the forced dive.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Sundered Sky","Knockup-into-arena answers most gimmicks."),I("Black Cleaver","Generic shred works on everything."),I("Guardian Angel","Commit without fear.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Guardian Angel","Survive the setup you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...JARVANIV_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
