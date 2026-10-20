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
      coreNote:"The lethality fork of the standard build: same Berserker's Greaves and Stridebreaker start, but Youmuu's Ghostblade second instead of Phantom Dancer, with Phantom Dancer moving to third. Youmuu's is Garen's second most common follow-up to Stridebreaker (about 19% of games) and wins slightly more often than the Phantom Dancer line (56.5% vs 55.3% as the second item). Its active speed closes the gap for Decisive Strike, and the lethality makes Judgment and Demacian Justice delete squishy carries. Take it into squishy teams; keep the Phantom Dancer line into tanky ones. After Youmuu's, Phantom Dancer, Mortal Reminder and Voltaic Cyclosword are the usual third items. Source: lolalytics, patch 26.20, Emerald+.",
      runes:{...GAREN_TOP_DEFAULT_RUNES},
      sideItems:["Mortal Reminder","Voltaic Cyclosword","Dead Man's Plate","Infinity Edge","Lord Dominik's Regards","Sterak's Gage","Mercury's Treads"],
    }],
  },
  roles:{
    Top:{
      bans:["Vayne","Teemo","Jayce"], replacements:["Darius","Sett","Volibear"],
      role:"Juggernaut / Unstoppable Spin",
      corePath:"Berserker's Greaves  ›  Stridebreaker  ›  Phantom Dancer  ›  Mortal Reminder",
      coreNote:"Garen plays for the unavoidable spin-to-win all-in — Decisive Strike silences the escape, Judgment shreds HP, Demacian Justice executes. Berserker's Greaves come first (about two thirds of Garens buy them, usually before Stridebreaker completes). Stridebreaker's slow keeps targets locked in Judgment range, and Phantom Dancer adds attack speed and crit for more spin ticks. Mortal Reminder is the usual third item, since grievous wounds cuts the healing of most top laners. Dead Man's Plate is the common fourth item for chase speed, or Infinity Edge for more crit. Swiftmarch is a minority boots choice. Source: lolalytics, patch 26.20, Emerald+: Stridebreaker first in 96% of games, then Phantom Dancer in 51%, then Mortal Reminder in 51%.",
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
