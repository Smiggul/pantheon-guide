import { I } from "../runeHelpers.js";

const FIORA_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Jack Of All Trades"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Live meta (26.15) runs Press the Attack over Conqueror — Fiora's three-hit Vital-and-auto pattern procs it fast, and the target-wide damage amp makes her Riposte-into-Vital burst spike far harder for the pick. Legend: Alacrity ramps her attack speed toward the next Vital, Last Stand rewards the low-HP duels she forces. Inspiration secondary — Biscuit Delivery solves the early sustain of a melee lane and Jack Of All Trades turns her varied item stats into extra Adaptive Force + haste. (Conqueror remains a strong sustain-duelist alternative.)",
};

// ══════════════════════════════════════════════════════════════════════════
//  FIORA — Skirmisher / Vitals Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"fiora", display:"Fiora", dd:"Fiora",
  color:"#7a1a2a", glow:"#e04060",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Malphite","Poppy","Renekton"], replacements:["Sett","Volibear","Jax"],
      role:"Skirmisher / Vitals Duelist",
      corePath:"Ravenous Hydra  ›  Plated Steelcaps  ›  Trinity Force  ›  Death's Dance",
      coreNote:"Fiora plays for an extended duel that reveals and pops Vitals — Lunge dashes to a marked spot, Riposte parries the one CC that would stop her, and Grand Challenge's true-damage execute finishes whoever she's isolated. Ravenous Hydra adds cleave and sustain for the duel; Trinity Force's proc damage rewards the auto-into-Lunge pattern; Death's Dance lets her commit fully without fearing the counter-hit.",
      sideItems:["Endless Hunger","Sterak's Gage","Guardian Angel","Serylda's Grudge","Mercury's Treads","Black Cleaver"],
      data:{
        JUGGERNAUT:{ahead:[I("Ravenous Hydra","Sustain wins the sustained trade war."),I("Trinity Force","Proc damage adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Sterak's Gage","Shield when the walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Endless Hunger","Omnivamp to survive.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Proc burst punishes their dive."),I("Ravenous Hydra","Sustain outlasts the all-in."),I("Sterak's Gage","Riposte plus this shield covers the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst (Riposte blocks the follow-up CC)."),I("Mercury's Treads","Shorter CC on their engage."),I("Endless Hunger","Omnivamp to recover.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener — Riposte parries the follow-up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Trinity Force","Punish their commit with proc damage.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Ravenous Hydra","Sustain wins the extended duel outright."),I("Trinity Force","Proc damage tips the auto-trade."),I("Serylda's Grudge","Slow keeps them locked into the duel.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Endless Hunger","Omnivamp in the duel."),I("Guardian Angel","Second life.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Riposte parries their key CC, this shield eats the rest."),I("Death's Dance","Sustain through the poke."),I("Trinity Force","Punish their cooldown window.")],behind:[I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Endless Hunger","Omnivamp keeps you in the fight.")],behind:[I("Death's Dance","Buy time for your combo to matter."),I("Sterak's Gage","Shield through the drain war."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Trinity Force","Burst wins once you close."),I("Serylda's Grudge","Slow closes the last of the gap.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Trinity Force","Burst edge wins the race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Trinity Force","Burst through shields to the carry."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sterak's Gage","Riposte parries a landed hook's follow-up CC."),I("Trinity Force","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Fiora loses the whole duel."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Trinity Force","Punish their re-engage window.")],behind:[I("Sterak's Gage","Riposte parries their key engage CC."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Ravenous Hydra","Sustain still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Sterak's Gage","Riposte parries Teemo blind / Kennen stun outright."),I("Mercury's Treads","Reduce blind/stun duration further."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...FIORA_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
