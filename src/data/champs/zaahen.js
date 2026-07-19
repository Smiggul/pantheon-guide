import { I } from "../runeHelpers.js";

const ZAAHEN_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Coup de Grace"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror's stacking omnivamp compounds with Zaahen's own Determination passive — both reward landing repeated autos and abilities on champions, and the healing keeps him alive long enough to reach max stacks for his resurrection window. Legend: Haste speeds up his ability rotation; Coup de Grace finishes targets his stacked bonus AD has already chunked. Bone Plating and Revitalize round out lane survivability so he lives to stack Determination in the first place.",
};

const ZAAHEN_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Conqueror stacking-omnivamp core as Top — Zaahen's Determination passive and Conqueror both reward sustained combat, letting him clear and skirmish without falling behind on HP. Magical Footwear and Cosmic Insight replace Resolve's lane sustain with free boots and haste, since jungle Zaahen leans on clear speed and gank frequency rather than surviving a single lane opponent.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZAAHEN — Bruiser / Stacking Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zaahen", display:"Zaahen", dd:"Zaahen",
  color:"#8a8378", glow:"#c9a876",
  lanes:["Top","Jungle"],
  roles:{
    Top:{
      bans:["Quinn","Gnar","Kennen"], replacements:["Darius","Renekton","Sett"],
      role:"Bruiser / Stacking Duelist",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Sundered Sky  ›  Death's Dance",
      coreNote:"Zaahen plays for a long lane before his Determination stacks and revive threat take over. Trinity Force's proc damage and Sundered Sky's healing both reward his auto-into-ability trade pattern; Plated Steelcaps blunts the early auto-heavy matchups he's weakest in; Death's Dance lets him survive to the point where his stacks and self-revive make him nearly unkillable.",
      sideItems:["Endless Hunger","Guardian Angel","Sterak's Gage","Force of Nature","Thornmail","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the sustained trade war."),I("Trinity Force","Proc damage adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from their all-in."),I("Thornmail","GW cuts their regen."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Proc burst punishes their dive."),I("Sundered Sky","Healing outlasts the all-in."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if the dive still connects.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while you stack up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Sundered Sky","Healing recovers between combo windows.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Guardian Angel","Deny the kill and revive into the next trade.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Trinity Force","Proc damage tips the auto-trade."),I("Death's Dance","Sustain through the drawn-out fight.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Force of Nature","MR stack vs sustained casting."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Guardian Angel","Insurance if the combo lands.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Sundered Sky","Healing matches their scaling durability."),I("Trinity Force","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for your stacks to matter."),I("Spirit Visage","Amplify your own sustain.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Sundered Sky","Healing offsets the chip on approach.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Reach the ADC before they can kite."),I("Sundered Sky","Healing wins the burst race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Reach the carry despite the peel."),I("Sundered Sky","Healing outlasts their shield economy."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Spirit Visage","Amplify healing to keep pace.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Guardian Angel","A landed hook doesn't end the trade if you can revive into it."),I("Trinity Force","Punish a whiffed hook instantly."),I("Sundered Sky","Healing recovers after a catch.")],behind:[I("Guardian Angel","Deny the pick's value entirely."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Sundered Sky","Recover the HP lost to the catch.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Sustain outlasts their engage burst."),I("Trinity Force","Punish their re-engage window."),I("Sundered Sky","Healing through their tank pressure.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sundered Sky","Healing still wins the peel war."),I("Trinity Force","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Sterak's Gage","Survive their counter-peel."),I("Spirit Visage","Amplify healing through the peel."),I("Guardian Angel","Insurance if it goes long.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Sundered Sky","Healing outlasts their poke/regen kit."),I("Death's Dance","Sustain through their kit.")],behind:[I("Guardian Angel","Deny their split-push snowball."),I("Sterak's Gage","Survive burst setups."),I("Force of Nature","Counters AP specialists.")],runes:{...ZAAHEN_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Kayn","Nocturne","Warwick"], replacements:["Wukong","Sett","Shyvana"],
      role:"Off-Meta Skirmish Jungler",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Sundered Sky  ›  Death's Dance",
      coreNote:"Jungle Zaahen leans on his Determination stacking and self-revive to win extended skirmishes rather than clean gank tempo — same itemization core as Top. Trinity Force and Sundered Sky reward his auto-into-ability trade pattern in every camp clear and 1v1; Plated Steelcaps and Death's Dance let him survive invades long enough for stacks and the resurrection window to take over.",
      sideItems:["Endless Hunger","Guardian Angel","Sterak's Gage","Force of Nature","Thornmail","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the extended skirmish."),I("Trinity Force","Proc damage adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Thornmail","GW cuts their regen."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Proc burst punishes their dive."),I("Sundered Sky","Healing outlasts the all-in."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if the dive still connects.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while you stack up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Sundered Sky","Healing recovers between combo windows.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Guardian Angel","Deny the kill and revive into the next trade.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Trinity Force","Proc damage tips the auto-trade."),I("Death's Dance","Sustain through the drawn-out fight.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Force of Nature","MR stack vs sustained casting."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Guardian Angel","Insurance if the combo lands.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Sundered Sky","Healing matches their scaling durability."),I("Trinity Force","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for your stacks to matter."),I("Spirit Visage","Amplify your own sustain.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Sundered Sky","Healing offsets the chip on approach.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Reach the ADC before they can kite."),I("Sundered Sky","Healing wins the burst race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Reach the carry despite the peel."),I("Sundered Sky","Healing outlasts their shield economy."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Spirit Visage","Amplify healing to keep pace.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Guardian Angel","A landed hook doesn't end the gank if you can revive into it."),I("Trinity Force","Punish a whiffed hook instantly."),I("Sundered Sky","Healing recovers after a catch.")],behind:[I("Guardian Angel","Deny the pick's value entirely."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Sundered Sky","Recover the HP lost to the catch.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Sustain outlasts their engage burst."),I("Trinity Force","Punish their re-engage window."),I("Sundered Sky","Healing through their tank pressure.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sundered Sky","Healing still wins the peel war."),I("Trinity Force","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Sterak's Gage","Survive their counter-peel."),I("Spirit Visage","Amplify healing through the peel."),I("Guardian Angel","Insurance if it goes long.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Sundered Sky","Healing outlasts their poke/regen kit."),I("Death's Dance","Sustain through their kit.")],behind:[I("Guardian Angel","Deny their split-push snowball."),I("Sterak's Gage","Survive burst setups."),I("Force of Nature","Counters AP specialists.")],runes:{...ZAAHEN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
