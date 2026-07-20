import { I } from "../runeHelpers.js";

const URGOT_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack procs through Urgot's W machine-gun in under a second, amping the target for the full shotgun-knee rotation that follows. Triumph refunds HP through the execute chains his R starts, Legend: Haste feeds the leg cooldowns his passive DPS cycles on, Last Stand backs the low-HP brawls his drain-tank pattern invites, and Bone Plating + Overgrowth stabilise the early trades before Black Cleaver turns him into a walking siege engine.",
};

// ══════════════════════════════════════════════════════════════════════════
//  URGOT — Dreadnought: Shotgun-Knee Juggernaut  (A/B+ Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"urgot", display:"Urgot", dd:"Urgot",
  color:"#3a2a2a", glow:"#c07060",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Fiora","Vayne","Gwen"], replacements:["Darius","Sett","Mordekaiser"],
      role:"Execute Dreadnought Juggernaut",
      corePath:"Black Cleaver  ›  Plated Steelcaps  ›  Sterak's Gage  ›  Jak'Sho, The Protean",
      coreNote:"Urgot is a lane bully in a tank's body: E flips anyone who steps up, W shreds them against the wall, and Fear Beyond Death executes at 25% with a fear that routs whole teams. Black Cleaver stacks shred through the machine-gun, Sterak's Gage covers the all-in windows his flip commits him to, Jak'Sho ramps the resists his extended-brawl pattern lives in, and Overlord's Bloodmail closes the juggernaut package. His R is a teamfight-ender — chunk anyone to half and the chain does the rest.",
      sideItems:["Overlord's Bloodmail","Thornmail","Spirit Visage","Maw of Malmortius","Dead Man's Plate","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred them through the W trade war."),I("Overlord's Bloodmail","Out-juggernaut the juggernaut mirror."),I("Thornmail","Anti-heal their sustain.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Sterak's Gage","Survive the all-in and R the retreat."),I("Spirit Visage","Amplify your shield sustain.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sterak's Gage","Their engage meets the flip — shield the counter-burst."),I("Black Cleaver","Shred through the extended brawl."),I("Jak'Sho, The Protean","Resists ramp as their dive extends.")],behind:[I("Sterak's Gage","Shield their burst opener."),I("Randuin's Omen","Slow the dive mid-animation."),I("Maw of Malmortius","Vs AP divers.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Their burst math never beats your shield floor."),I("Black Cleaver","E-flip into machine-gun deletes them."),I("Thornmail","Return damage on the attempt.")],behind:[I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo."),I("Randuin's Omen","Slow their reset escape — then R.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their bruiser build in the W storm."),I("Jak'Sho, The Protean","Resist ramp wins the extended duel."),I("Thornmail","Anti-heal their sustain loop.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Thornmail","Grievous wounds vs their lifesteal."),I("Sterak's Gage","Survive the duel and execute the end.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Lifeline under their rotation — then flip them."),I("Sterak's Gage","Double shield floor."),I("Black Cleaver","Kill them in two W seconds.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Sterak's Gage","Shield the burst window.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — your shield passive wins it."),I("Maw of Malmortius","Lifeline vs the ramp."),I("Black Cleaver","Shred them inside the W storm.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Spirit Visage","Amplify your sustain."),I("Mercury's Treads","Tenacity vs their locks.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Speed crosses the poke zone — E ends the conversation."),I("Black Cleaver","Chunk them on arrival."),I("Sterak's Gage","Shield the approach chip.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the approach."),I("Dead Man's Plate","Required closing speed.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Speed runs down the ranged top."),I("Black Cleaver","Shred their armor buys."),I("Randuin's Omen","Blunt the crits while you close.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Dead Man's Plate","Speed to finally reach them.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Sterak's Gage","Their poke can't remove your all-in."),I("Thornmail","Anti-heal the sustain package.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Thornmail","Grievous wounds is the win condition.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sterak's Gage","A landed hook onto Urgot is their mistake — flip back."),I("Black Cleaver","Punish the whiff with a full W trade."),I("Thornmail","Return damage on the follow-up.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Randuin's Omen","Slow the follow-up burst.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Jak'Sho, The Protean","Out-resist the tank war."),I("Thornmail","Anti-heal their sustain engage.")],behind:[I("Sterak's Gage","Shield the wombo."),I("Mercury's Treads","Tenacity through the CC chain."),I("Randuin's Omen","Slow their follow-up wave.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Overlord's Bloodmail","Out-scale the HP war."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Spirit Visage","Sustain the stalemate."),I("Sterak's Gage","Shield the counter-engage.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Black Cleaver","The W storm answers most gimmicks."),I("Sterak's Gage","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Sterak's Gage","Shield what you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...URGOT_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
