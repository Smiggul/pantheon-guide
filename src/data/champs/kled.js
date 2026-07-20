import { I } from "../runeHelpers.js";

const KLED_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Demolish","Bone Plating"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks through Kled's Q-drag brawls and pays double across his two health bars — dismounted Kled keeps the stacks for the remount all-in. Triumph refunds HP on takedowns mid-Chaaaaaaaarge, Legend: Alacrity feeds the bear-trap auto weaving, Last Stand is practically designed for a champion who fights half his fights dismounted at low HP, Demolish converts won lanes into plates, and Bone Plating survives the trades that decide Skaarl's mood.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KLED — Cantankerous Cavalier: Two-Health-Bar Diver  (B+ Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kled", display:"Kled", dd:"Kled",
  color:"#5a2a20", glow:"#e07050",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Quinn","Vayne","Teemo"], replacements:["Darius","Sett","Urgot"],
      role:"Remount All-In Cavalier",
      corePath:"Titanic Hydra  ›  Plated Steelcaps  ›  Black Cleaver  ›  Overlord's Bloodmail",
      coreNote:"Kled fights with two health bars and zero fear: dismount is a free second life, and remounting mid-fight flips lost trades into kills. Titanic Hydra converts his HP stacking into cleave, Black Cleaver shreds through the Q-drag brawls, Overlord's Bloodmail doubles down on the HP-to-damage identity, and Sterak's covers the all-in windows. His ult is the best engage in top lane — a cross-map charge that shields him and drags the whole team into the fight he already started. Yell first, count numbers later.",
      sideItems:["Sterak's Gage","Death's Dance","Spirit Visage","Maw of Malmortius","Randuin's Omen","Dead Man's Plate"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred them through the Q-drag brawl."),I("Titanic Hydra","Cleave wins the extended slugfest."),I("Death's Dance","Bleed conversion outlasts their trades.")],behind:[I("Death's Dance","Survive their burst and heal it back."),I("Sterak's Gage","Shield the all-in."),I("Spirit Visage","Amplify the remount sustain.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sterak's Gage","Their engage meets a man with two health bars."),I("Black Cleaver","Shred through the counter-brawl."),I("Titanic Hydra","Cleave the extended fight.")],behind:[I("Sterak's Gage","Shield their burst opener."),I("Death's Dance","Bleed through the counter-dive."),I("Randuin's Omen","Slow their follow-up.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Titanic Hydra","Their burst just dismounts you — then you kill them."),I("Death's Dance","Convert the combo to bleed."),I("Black Cleaver","Chunk them in the failed window.")],behind:[I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo."),I("Death's Dance","Bleed out their one-shot math.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred their bruiser build across both health bars."),I("Titanic Hydra","Cleave wins the extended duel."),I("Death's Dance","Sustain conversion seals it.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Sterak's Gage","Survive the duel and remount."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Lifeline under the rotation — dismount eats the rest."),I("Sterak's Gage","Triple health-bar math."),I("Black Cleaver","Kill them in the cooldown gap.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through the setup CC."),I("Sterak's Gage","Shield the burst window.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — remount healing wins it."),I("Maw of Malmortius","Lifeline vs the ramp."),I("Black Cleaver","Shred them inside the Q drag.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Spirit Visage","Amplify your sustain."),I("Mercury's Treads","Tenacity vs their locks.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Speed crosses the poke — R crosses the map."),I("Black Cleaver","Chunk them on arrival."),I("Sterak's Gage","Shield the approach chip.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the approach."),I("Dead Man's Plate","Required closing speed.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Run down the ranged top — dismount tanks their kite."),I("Black Cleaver","Shred their armor buys."),I("Randuin's Omen","Blunt the crits while you close.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Sterak's Gage","Survive the kite-down."),I("Dead Man's Plate","Speed to finally reach them.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through the shield sponge."),I("Titanic Hydra","Cleave out-damages their shield budget."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Black Cleaver","Keep damage real through shields."),I("Mercury's Treads","Tenacity vs their CC package."),I("Spirit Visage","Sustain the value war.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sterak's Gage","A hook onto Kled catches two health bars."),I("Black Cleaver","Punish the whiff with a full drag."),I("Titanic Hydra","Cleave the follow-up.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Randuin's Omen","Slow the follow-up burst.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their armor for your whole team."),I("Titanic Hydra","Cleave the engage line."),I("Death's Dance","Sustain the extended teamfight.")],behind:[I("Sterak's Gage","Shield the wombo."),I("Mercury's Treads","Tenacity through the CC chain."),I("Randuin's Omen","Slow their follow-up wave.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred the peel-tank's armor stack."),I("Overlord's Bloodmail","Out-scale the HP war."),I("Titanic Hydra","Cleave cracks the stall.")],behind:[I("Black Cleaver","Required shred vs stacked armor."),I("Spirit Visage","Sustain the stalemate."),I("Sterak's Gage","Shield the counter-engage.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Titanic Hydra","Two health bars answer most gimmicks."),I("Black Cleaver","Generic shred works on everything."),I("Sterak's Gage","Shield the surprise burst.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Sterak's Gage","Shield what you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...KLED_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
