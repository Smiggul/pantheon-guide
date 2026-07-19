import { I } from "../runeHelpers.js";

const RIVEN_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Jack Of All Trades"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks fast off Riven's animation-cancelled auto-into-ability combo, and the omnivamp keeps her topped up through the extended all-in her broken-wings passive rewards. Legend: Haste speeds up her whole combo loop; Last Stand rewards the low-HP all-ins she's forced into by her own aggression. Cash Back accelerates her snowball-dependent item spike; Jack Of All Trades converts her varied item stats into more Adaptive Force and bonus haste.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RIVEN — Skirmisher / Animation-Cancel All-In
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"riven", display:"Riven", dd:"Riven",
  color:"#5a6b6b", glow:"#7ecbc4",
  lanes:["Top","Mid"],
  roles:{
    Top:{
      bans:["Garen","Renekton","Malphite"], replacements:["Sett","Volibear","Jax"],
      role:"Skirmisher / Animation-Cancel All-In",
      corePath:"Axiom Arc  ›  Gluttonous Greaves  ›  Endless Hunger  ›  Death's Dance",
      coreNote:"Riven plays for a relentless animation-cancelled all-in — stack Runic Blade charges, combo Q3 into a knock-up, and finish with Blade of the Exile's true damage execute. Axiom Arc adds burst and ultimate damage; Gluttonous Greaves' lifesteal and Endless Hunger's omnivamp both fund sustain through the combo; Death's Dance lets her commit fully without fearing the counter-hit.",
      sideItems:["Serylda's Grudge","Sterak's Gage","Guardian Angel","Black Cleaver","Mercury's Treads","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Endless Hunger","Omnivamp wins the sustained trade war."),I("Axiom Arc","Burst adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Sterak's Gage","Shield when the walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Gluttonous Greaves","Lifesteal to survive.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Axiom Arc","Burst punishes their dive commitment."),I("Endless Hunger","Omnivamp outlasts the dive."),I("Sterak's Gage","Shield through the all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life if it still connects.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while stances stack up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Axiom Arc","Punish their commit with burst back.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Endless Hunger","Omnivamp wins the extended duel outright."),I("Black Cleaver","Shred through their auto-heavy dueling."),I("Axiom Arc","Burst edge tips the auto-trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Gluttonous Greaves","Lifesteal in the duel."),I("Guardian Angel","Second life.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke."),I("Axiom Arc","Punish their cooldown window.")],behind:[I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Endless Hunger","Omnivamp keeps you in the fight.")],behind:[I("Death's Dance","Buy time for your combo to matter."),I("Sterak's Gage","Shield through the drain war."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Axiom Arc","Burst wins once you close."),I("Endless Hunger","Sustain the approach.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Axiom Arc","Burst edge wins the race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Axiom Arc","Burst through shields to the carry."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your combo lands first."),I("Axiom Arc","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Riven loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Axiom Arc","Punish their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Endless Hunger","Omnivamp still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Axiom Arc","Run down a kiting Specialist with burst."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Malzahar","Diana","Lissandra"], replacements:["Katarina","Ahri","Locke"],
      role:"Skirmisher / Roam-and-All-In",
      corePath:"Axiom Arc  ›  Endless Hunger  ›  Death's Dance  ›  Serylda's Grudge",
      coreNote:"Mid Riven trades the top-lane 1v1 duel for roam pressure and pick potential — same animation-cancelled combo, but the shorter lane and extra mobility let her group for skirmishes earlier. Axiom Arc adds burst and ultimate damage; Endless Hunger and Death's Dance fund the sustain to survive the combo's counter-hit; Serylda's Grudge adds the slow to actually catch a target after the knock-up.",
      sideItems:["Gluttonous Greaves","Sterak's Gage","Guardian Angel","Black Cleaver","Mercury's Treads","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Endless Hunger","Omnivamp wins the sustained trade war."),I("Axiom Arc","Burst adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Sterak's Gage","Shield when the walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Gluttonous Greaves","Lifesteal to survive.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Axiom Arc","Burst punishes their dive commitment."),I("Endless Hunger","Omnivamp outlasts the dive."),I("Sterak's Gage","Shield through the all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life if it still connects.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while stances stack up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Axiom Arc","Punish their commit with burst back.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Endless Hunger","Omnivamp wins the extended duel outright."),I("Black Cleaver","Shred through their auto-heavy dueling."),I("Serylda's Grudge","Slow keeps them locked into the trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Gluttonous Greaves","Lifesteal in the duel."),I("Guardian Angel","Second life.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke."),I("Axiom Arc","Punish their cooldown window.")],behind:[I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Endless Hunger","Omnivamp keeps you in the fight.")],behind:[I("Death's Dance","Buy time for your combo to matter."),I("Sterak's Gage","Shield through the drain war."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Axiom Arc","Burst wins once you close."),I("Serylda's Grudge","Slow closes the last of the gap.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Axiom Arc","Burst edge wins the race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Axiom Arc","Burst through shields to the carry."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your combo lands first."),I("Axiom Arc","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Riven loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Axiom Arc","Punish their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Endless Hunger","Omnivamp still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Axiom Arc","Run down a kiting Specialist with burst."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...RIVEN_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
