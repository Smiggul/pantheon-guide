import { I } from "../runeHelpers.js";

const AMBESSA_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Revitalize"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Biscuit Delivery"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Grasp of the Undying rewards Ambessa's constant auto-into-ability trading pattern with permanent HP and a free proc every few seconds. Shield Bash converts her W's shield into bonus on-hit damage — a near-perfect thematic match for a shield-based bruiser. Second Wind and Revitalize round out sustain, with Revitalize additionally amplifying the shield from W and the omnivamp from her ultimate. Magical Footwear and Biscuit Delivery solve the early gold/mana curve so she hits her first item on time.",
};

const AMBESSA_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Ambessa leans on Conqueror's omnivamp instead of Grasp's single proc — her clear is entirely Q-cooldown-dependent, and she wants to fight constantly rather than survive one lane opponent's poke. Legend: Haste and Cosmic Insight both cut cooldowns further, feeding more Q/E resets per clear and gank. Magical Footwear gets her boots online for free.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AMBESSA — Bruiser / 1v1 Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ambessa", display:"Ambessa", dd:"Ambessa",
  color:"#6b1120", glow:"#c0392b",
  lanes:["Top","Jungle"],
  roles:{
    Top:{
      bans:["Jayce","Quinn","Gnar"], replacements:["Renekton","Darius","Sett"],
      role:"Bruiser / 1v1 Duelist",
      corePath:"Eclipse  ›  Plated Steelcaps  ›  Spear of Shojin  ›  Death's Dance",
      coreNote:"Ambessa is built as a pure 1v1 duelist — dash in with Drakehound's Step, chain Q into E, shield with W, and end the fight before the enemy team can help. Eclipse's shield rewards back-to-back ability hits and adds a burst proc; Plated Steelcaps blunts early auto trades; Spear of Shojin's haste speeds up her whole combo loop; Death's Dance keeps her alive through the counter-hit.",
      sideItems:["Sterak's Gage","Serylda's Grudge","Black Cleaver","Guardian Angel","Mercury's Treads","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Eclipse","Shield absorbs their walk-down while you chain abilities."),I("Spear of Shojin","Haste speeds up the whole combo loop."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Eclipse","Shield absorbs the opening burst while you counter-engage."),I("Serylda's Grudge","Slow denies their dash-out."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if it still connects.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Eclipse","Shield eats their burst opener."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Spear of Shojin","Haste keeps your combo faster than their cooldowns.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Black Cleaver","Shred through their follow-up."),I("Guardian Angel","Deny the kill.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Eclipse","Shield wins the extended duel outright."),I("Serylda's Grudge","Slow denies their kite pattern."),I("Death's Dance","Sustain through the drawn-out fight.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Eclipse","Shield absorbs the combo's opener."),I("Sterak's Gage","Second shield layer."),I("Death's Dance","Sustain through the poke.")],behind:[I("Sterak's Gage","Secondary shield vs the combo."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance if it connects.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Spear of Shojin","Haste keeps the combo loop faster than their sustain.")],behind:[I("Death's Dance","Buy time for your kit to matter."),I("Sterak's Gage","Shield through the drain war."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Eclipse","Shield survives the poke on approach."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Eclipse","Shield eats the peel damage on approach."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Eclipse","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Eclipse","Shield eats a landed hook's follow-up."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Ambessa loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Eclipse","Shield absorbs their initiation.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Eclipse","Shield still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Serylda's Grudge","Slow runs down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...AMBESSA_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Kayn","Warwick","Nocturne"], replacements:["Wukong","Sett","Shyvana"],
      role:"Off-Meta Skirmish Jungler",
      corePath:"Profane Hydra  ›  Plated Steelcaps  ›  Axiom Arc  ›  Death's Dance",
      coreNote:"Jungle Ambessa fights constantly — her clear speed is gated by Q cooldown, so haste and sustained-combat items matter more than a single burst spike. Profane Hydra's active extends her combo range for a clean gank finisher; Plated Steelcaps blunts invades; Axiom Arc adds burst and ultimate damage; Death's Dance keeps her topped up through skirmishes.",
      sideItems:["Endless Hunger","Sterak's Gage","Serylda's Grudge","Black Cleaver","Guardian Angel","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Death's Dance","Sustain wins the extended skirmish."),I("Profane Hydra","Active extends your combo range in the trade."),I("Axiom Arc","Extra burst adds up over the fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Sterak's Gage","Shield when the walk-down connects."),I("Death's Dance","Sustain even when behind.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Profane Hydra","Extends the combo to punish the dive."),I("Serylda's Grudge","Slow denies their dash-out."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if it still connects.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Axiom Arc","Extra burst wins the trade back.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Black Cleaver","Shred through their follow-up."),I("Guardian Angel","Deny the kill.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Profane Hydra","Extended combo wins the extended duel outright."),I("Serylda's Grudge","Slow denies their kite pattern."),I("Death's Dance","Sustain through the drawn-out fight.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the combo's opener."),I("Death's Dance","Sustain through the poke."),I("Axiom Arc","Extra burst punishes their cooldown window.")],behind:[I("Sterak's Gage","Secondary shield vs the combo."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance if it connects.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Profane Hydra","Extended combo keeps you in the fight longer.")],behind:[I("Death's Dance","Buy time for your kit to matter."),I("Sterak's Gage","Shield through the drain war."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Profane Hydra","Extended combo closes the last of the gap."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Profane Hydra","Extended combo range punishes their peel."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Profane Hydra","Extended combo reaches the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Death's Dance","Sustain through the follow-up after a catch."),I("Profane Hydra","Extended range punishes a whiffed hook.")],behind:[I("Mercury's Treads","Mandatory — a caught Ambessa wastes the gank."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Profane Hydra","Extended combo punishes their initiation.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Profane Hydra","Extended range still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Serylda's Grudge","Slow runs down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...AMBESSA_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
