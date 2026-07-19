import { I } from "../runeHelpers.js";

const EZREAL_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo rewards Ezreal's safe poke-and-kite playstyle with ramping attack speed the longer a trade goes on. Presence of Mind and Legend: Bloodline solve his mana strain from constant Mystic Shot pokes and add sustain. Biscuit Delivery covers the same mana problem early; Magical Footwear gets him into boots for free so his gold goes straight into Manamune stacks. Coup de Grace finishes targets his Mystic Shot poke has already chipped down.",
};

// ══════════════════════════════════════════════════════════════════════════
//  EZREAL — Marksman / Safe Poke-and-Kite
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ezreal", display:"Ezreal", dd:"Ezreal",
  color:"#3a6ea5", glow:"#f4d35e",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Kalista","Samira"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Safe Poke-and-Kite",
      corePath:"Trinity Force  ›  Manamune  ›  Spear of Shojin  ›  Serylda's Grudge",
      coreNote:"Ezreal plays for safe poke from range — Mystic Shot chips HP and resets auto timers, Arcane Shift repositions out of danger. Trinity Force's proc damage and Manamune's mana-to-damage scaling both reward the constant-cast pattern; Spear of Shojin's haste means more Shift/Shot resets; Serylda's Grudge adds a slow to actually land the kill on a kited-down target.",
      sideItems:["Ionian Boots of Lucidity","Endless Hunger","Guardian Angel","Mercury's Treads","Stormrazor","Essence Reaver"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Slow keeps them out of range while they can't catch back up."),I("Trinity Force","Proc damage adds up over the poke war."),I("Spear of Shojin","Haste means more Mystic Shot resets before they close.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Endless Hunger","Omnivamp to survive.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Serylda's Grudge","Slow denies their dash-out after committing."),I("Trinity Force","Proc burst punishes the dive."),I("Endless Hunger","Omnivamp outlasts the all-in.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life if it still connects."),I("Endless Hunger","Sustain through the engage.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Spear of Shojin","Haste keeps Arcane Shift available to dodge the opener."),I("Trinity Force","Punish their commit with proc damage."),I("Endless Hunger","Omnivamp recovers between poke windows.")],behind:[I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher."),I("Endless Hunger","Sustain vs the burst.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Serylda's Grudge","Slow denies their kite/duel pattern."),I("Trinity Force","Proc damage wins the poke exchange."),I("Spear of Shojin","Haste means more Mystic Shot resets in the duel.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Endless Hunger","Sustain through the duel.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Reduce CC in their combo."),I("Endless Hunger","Omnivamp through the poke."),I("Spear of Shojin","Haste for more Arcane Shift dodges.")],behind:[I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance."),I("Endless Hunger","Sustain vs poke.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Trinity Force","Proc damage wins the burst trade."),I("Spear of Shojin","Haste keeps the poke loop faster than their sustain."),I("Serylda's Grudge","Slow denies their kite/disengage.")],behind:[I("Mercury's Treads","Shorter CC to disengage."),I("Endless Hunger","Omnivamp to keep pace."),I("Guardian Angel","Insurance.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Spear of Shojin","Haste closes the poke-war gap faster."),I("Trinity Force","Proc edge wins once you close."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life."),I("Endless Hunger","Sustain the poke on approach.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Proc damage wins the poke-range mirror."),I("Serylda's Grudge","Slow denies the kite."),I("Spear of Shojin","Haste means more resets in the trade.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky trade."),I("Endless Hunger","Sustain vs their peel.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serylda's Grudge","Slow cuts through their peel to finish the kill."),I("Trinity Force","Proc damage burst through the peel."),I("Endless Hunger","Omnivamp outlasts their sustain package.")],behind:[I("Guardian Angel","Insurance vs the combined burst."),I("Endless Hunger","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Spear of Shojin","Haste for more Arcane Shift dodges around hooks."),I("Trinity Force","Punish a whiffed hook instantly."),I("Endless Hunger","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value."),I("Endless Hunger","Sustain if caught.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Slow denies their re-engage window."),I("Trinity Force","Punish their initiation with proc damage."),I("Spear of Shojin","Haste keeps Arcane Shift up to reposition.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Endless Hunger","Sustain through the initiation.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Slow still wins the peel war."),I("Trinity Force","Proc damage past their mitigation."),I("Spear of Shojin","Haste for more resets past the body-block.")],behind:[I("Endless Hunger","Sustain through the extended peel war."),I("Guardian Angel","Insurance."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Spear of Shojin","Haste keeps you ahead of kiting specialists."),I("Trinity Force","Proc edge ends the fight."),I("Serylda's Grudge","Slow catches a fleeing specialist.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Endless Hunger","Sustain vs burst setups.")],runes:{...EZREAL_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
