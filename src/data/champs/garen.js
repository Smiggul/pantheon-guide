import { I } from "../runeHelpers.js";

const GAREN_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Sorcery",
  secondaryRunes: ["Axiom Arcanist","Celerity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks almost instantly off Judgment's spin — every tick counts as a hit, so Garen hits max stacks in under two seconds and gets the omnivamp to sustain through extended trades. Legend: Haste speeds up Judgment/Decisive Strike uptime. Axiom Arcanist and Celerity stack pure movement speed and Adaptive Force, letting him stick to targets after silencing their escape with Decisive Strike.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GAREN — Juggernaut / Unstoppable Spin
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"garen", display:"Garen", dd:"Garen",
  color:"#2c3e6b", glow:"#d4af37",
  lanes:["Top"],
  altBuilds:{
    Top:[{
      label:"Youmuu's lethality", tag:"alt",
      corePath:"Berserker's Greaves  ›  Stridebreaker  ›  Youmuu's Ghostblade  ›  Phantom Dancer",
      // Research: Youmuu's is Garen's second most common follow-up to Stridebreaker (about 19% of games) and wins slightly
      //   more often than the Phantom Dancer line (56.5% vs 55.3% as the second item). Source: lolalytics, patch
      //   26.20, Emerald+.
      coreNote:"The lethality fork: the same Berserker's Greaves and Stridebreaker start, but Youmuu's Ghostblade second instead of Phantom Dancer, which moves to third. Youmuu's active speed closes the gap for Decisive Strike, and the lethality makes Judgment and Demacian Justice delete squishy carries. Take it into squishy teams; keep the Phantom Dancer line into tanky ones. After Youmuu's, take Phantom Dancer, Mortal Reminder or Voltaic Cyclosword third.",
      runes:{...GAREN_TOP_DEFAULT_RUNES},
      sideItems:["Mortal Reminder","Voltaic Cyclosword","Dead Man's Plate","Infinity Edge","Lord Dominik's Regards","Sterak's Gage","Mercury's Treads"],
    },{
      // Research (2026-11-25): AddictedToBacon, "The Most Unethical Way to Get LP in League" (24 Nov 2026, two ranked
      //   wins), crediting the Garen player Elolesio. Sourced from the narration (0:00-0:40): Stormraider's Surge, Nimbus
      //   Cloak, Absolute Focus, double Adaptive shards, Doran's Blade or Long Sword start; proxy between their tier 1
      //   and tier 2 turrets, auto the three melees, spin the wave, then invade their jungler if they start topside;
      //   fails if they guard the entrances or two of them push you off. Items from what he says: Boots of Swiftness
      //   ("I need Swifties to reach them"), Youmuu's (game 2), "Edge of Night into Voltaic" (8:45), Black Cleaver when
      //   the team is ahead and he can't kill their tank (22:00). The HUD is too small at 720p to read the order.
      //   Not sourced: the third Sorcery rune and the Precision secondary (Scorch; Triumph and Last Stand from Garen's
      //   main page). Rune text 16.23: Absolute Focus gives AD above 70% health; Nimbus Cloak speeds you after any
      //   summoner spell. The export's "Start, alt" block is already Doran's Blade (30% of Garen Top games).
      label:"Proxy invade", tag:"off-meta",
      corePath:"Boots of Swiftness  ›  Youmuu's Ghostblade  ›  Edge of Night  ›  Voltaic Cyclosword",
      coreNote:"A level 1 cheese for climbing: clear the first wave behind their tower, then invade their jungler. Absolute Focus and two Adaptive shards are what let Judgment clear the wave at level 1. Then build to one-shot: Boots of Swiftness to reach them, Youmuu's, Edge of Night, Voltaic Cyclosword. Black Cleaver instead when your team is ahead and you can't kill their tank.",
      runes:{ keystone:"Stormraider's Surge", primary:"Sorcery", primaryRunes:["Nimbus Cloak","Absolute Focus","Scorch"], secondary:"Precision", secondaryRunes:["Triumph","Last Stand"], shards:["Adaptive Force","Adaptive Force","Health (scaling)"], reason:"Absolute Focus and the Adaptive shards give the level 1 damage to clear the wave with one spin. Nimbus Cloak's speed after Flash gets you off the proxy, and Stormraider's gives the chase once you're in their jungle." },
      sideItems:["Black Cleaver","Death's Dance","Guardian Angel","Phantom Dancer","Sterak's Gage"],
      playTips:{
        source:"AddictedToBacon, \"The Most Unethical Way to Get LP in League\" (24 Nov 2026), the proxy credited to a Garen main.",
        tips:[
          { phase:"Level 1", text:"Start Doran's Blade or Long Sword and take E. Walk past their first tower and wait between their first and second towers before the wave arrives." },
          { phase:"Level 1", text:"Auto the first three melee minions, then spin on the whole wave. One auto each finishes the melees." },
          { phase:"Level 1", text:"If their jungler started on your side of the map, go straight into their camp and take it or fight them, with your jungler if they can come." },
          { phase:"Level 1", text:"It fails if they guard the entrances or two of them come for you. Leave then: Flash, and Nimbus Cloak's speed carries you out." },
          { phase:"Lane", text:"It costs you a few minions of experience. Worth it most in a lane you would lose anyway." },
          { phase:"Mid game", text:"Play to one-shot their carry with Q, E and R. If you can't kill their frontline and your team is ahead, go Black Cleaver and help them win." },
        ],
      },
    }],
  },
  roles:{
    Top:{
      bans:["Vayne","Teemo","Jayce"], replacements:["Darius","Sett","Volibear"],
      role:"Juggernaut / Unstoppable Spin",
      corePath:"Berserker's Greaves  ›  Stridebreaker  ›  Phantom Dancer  ›  Mortal Reminder",
      // Research: About two thirds of Garens buy Berserker's Greaves first. Swiftmarch is a minority boots choice. Source:
      //   lolalytics, patch 26.20, Emerald+: Stridebreaker first in 96% of games, then Phantom Dancer in 51%, then
      //   Mortal Reminder in 51%.
      coreNote:"Garen plays for the spin-to-win all-in: Decisive Strike silences the escape, Judgment shreds health, Demacian Justice executes. Berserker's Greaves first, usually before Stridebreaker completes. Stridebreaker's slow keeps targets in Judgment range, and Phantom Dancer adds attack speed and crit for more spin ticks. Mortal Reminder third, since grievous wounds cuts the healing of most top laners. Dead Man's Plate fourth for chase speed, or Infinity Edge for more crit.",
      sideItems:["Dead Man's Plate","Infinity Edge","Sterak's Gage","Force of Nature","Thornmail","Guardian Angel","Swiftmarch","Plated Steelcaps","Mercury's Treads","Trinity Force"],
      data:{
        JUGGERNAUT:{ahead:[I("Dead Man's Plate","Charge speed sticks to the mirror matchup."),I("Stridebreaker","Slow wins the stick-fight."),I("Phantom Dancer","AS adds up over the spin.")],behind:[I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects."),I("Force of Nature","MR if they go hybrid.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow denies their dash-out after committing."),I("Sterak's Gage","Shield through the engage."),I("Phantom Dancer","AS wins the follow-up trade.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener."),I("Stridebreaker","Slow denies their reset window."),I("Dead Man's Plate","Charge speed catches their dash-out.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Guardian Angel","Deny the kill.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Phantom Dancer","AS wins the extended spin-to-win duel."),I("Dead Man's Plate","Charge speed denies their kite."),I("Stridebreaker","Slow locks them into the trade.")],behind:[I("Thornmail","GW on Fiora/Tryndamere regen."),I("Sterak's Gage","Survive their all-in spike."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Close before their combo fires."),I("Sterak's Gage","Absorb the burst."),I("Force of Nature","MR while closing.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW on Vladimir/Swain drain."),I("Force of Nature","Shrugs off their sustained magic damage."),I("Dead Man's Plate","Stick through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Thornmail","GW cuts their regen even behind."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Charge speed closes the gap before they can kite."),I("Stridebreaker","Slow locks them down on arrival."),I("Mercury's Treads","Reduce CC so you can close.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Shield on arrival.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Reach the ADC before they can kite."),I("Phantom Dancer","AS wins the burst race."),I("Thornmail","GW cuts their lifesteal.")],behind:[I("Thornmail","GW limits their sustain items."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW destroys their heal/shield economy."),I("Dead Man's Plate","Charge speed to press the advantage."),I("Phantom Dancer","AS through the peel.")],behind:[I("Thornmail","Still the equaliser."),I("Sterak's Gage","Survive carry burst."),I("Force of Nature","Anti-AP if they poke hard.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — don't get hooked out of your spin."),I("Stridebreaker","Slow locks them down after the CC window."),I("Dead Man's Plate","Charge speed punishes a whiff.")],behind:[I("Mercury's Treads","Mandatory — a caught Garen loses the whole trade."),I("Sterak's Gage","Survive burst after CC."),I("Guardian Angel","Deny the pick's value.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Dead Man's Plate","Stick through their initiation."),I("Stridebreaker","Slow during their engage."),I("Thornmail","GW cuts their sustain in the tank fight.")],behind:[I("Sterak's Gage","Survive the engage burst."),I("Mercury's Treads","Shorter stuns from their initiation."),I("Force of Nature","MR vs Malphite/Gragas AP.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Phantom Dancer","AS past their body-block."),I("Thornmail","GW on Warden sustain/passive."),I("Dead Man's Plate","Stick through their peel.")],behind:[I("Sterak's Gage","Survive carry burst through body-block."),I("Force of Nature","MR vs Galio/K'Sante."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dead Man's Plate","Charge speed catches kiting specialists."),I("Stridebreaker","Slow locks down on arrival."),I("Phantom Dancer","AS wins once you connect.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Sterak's Gage","Survive burst setups.")],runes:{...GAREN_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
