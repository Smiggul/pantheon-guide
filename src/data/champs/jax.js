import { I } from "../runeHelpers.js";

const JAX_TOP_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's uncapped attack speed rewards Jax's auto-reset combo — Empower into a Counter Strike stun window, then repeat. Legend: Alacrity accelerates the ramp further; Last Stand punishes opponents while he's fighting from behind HP thresholds, common in his all-in duels. Bone Plating and Unflinching keep him alive through the CC and poke that would otherwise stop him from ever landing a Counter Strike.",
};

const JAX_JGL_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Lethal Tempo auto-reset core as Top. Magical Footwear and Cosmic Insight replace Resolve's lane sustain with free boots and summoner-spell haste — Jungle Jax leans on clear speed and more frequent Smite-timed ganks rather than surviving one lane opponent's poke.",
};

// ══════════════════════════════════════════════════════════════════════════
//  JAX — Skirmisher / Delayed Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"jax", display:"Jax", dd:"Jax",
  color:"#4a2f6b", glow:"#9b59b6",
  lanes:["Top","Jungle"],
  roles:{
    Top:{
      bans:["Poppy","Renekton","Pantheon"], replacements:["Volibear","Sett","Wukong"],
      role:"Skirmisher / Delayed Duelist",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Sundered Sky  ›  Zhonya's Hourglass",
      coreNote:"Jax plays for the delayed 1v1 spike — bait a stun into Counter Strike, then all-in with Empower autos. Trinity Force's proc damage and Sundered Sky's healing both reward the auto-reset pattern; Plated Steelcaps blunts early lane bullying; Zhonya's Hourglass turns off incoming burst right as his own combo comes online.",
      sideItems:["Death's Dance","Sterak's Gage","Guardian Angel","Force of Nature","Mercury's Treads","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the sustained trade war."),I("Zhonya's Hourglass","Dodge their all-in window with Counter Strike timing."),I("Trinity Force","Proc damage adds up over the fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Zhonya's Hourglass","Stasis right as their combo lands, then punish the reset."),I("Trinity Force","Proc burst punishes the dive."),I("Sundered Sky","Healing outlasts the all-in.")],behind:[I("Zhonya's Hourglass","Negates their all-in timing entirely."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis the burst window, then Counter Strike the follow-up."),I("Sundered Sky","Healing recovers between combo windows."),I("Sterak's Gage","Shield eats the opener.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Trinity Force","Proc damage tips the auto-trade."),I("Zhonya's Hourglass","Dodge their all-in spike, then punish.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Stasis the combo, then all-in on cooldown."),I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke.")],behind:[I("Zhonya's Hourglass","Mandatory vs burst mages."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Sundered Sky","Healing matches their scaling durability."),I("Trinity Force","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for Counter Strike to reset."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Zhonya's Hourglass","Survive the poke on approach."),I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Reach the ADC before they can kite."),I("Sundered Sky","Healing wins the burst race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Guardian Angel","Second life for a risky dive.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Reach the carry despite the peel."),I("Sundered Sky","Healing outlasts their shield economy."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Zhonya's Hourglass","Stasis away from a landed hook's follow-up."),I("Trinity Force","Punish a whiffed hook instantly."),I("Sundered Sky","Healing recovers after a catch.")],behind:[I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Sustain outlasts their engage burst."),I("Zhonya's Hourglass","Stasis the initiation, then punish."),I("Trinity Force","Punish their re-engage window.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sundered Sky","Healing still wins the peel war."),I("Trinity Force","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Sterak's Gage","Survive their counter-peel."),I("Force of Nature","MR vs Galio/K'Sante."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Zhonya's Hourglass","Dodge their key setup, then punish."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...JAX_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Naafiri","Wukong","Vi"], replacements:["Warwick","Sett","Shyvana"],
      role:"Off-Meta Skirmish Jungler",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Sundered Sky  ›  Zhonya's Hourglass",
      coreNote:"Jungle Jax trades gank tempo for a fast auto-reset clear and dominant camp-to-camp 1v2 invades — same delayed-spike identity as Top. Trinity Force and Sundered Sky reward the auto-into-Counter-Strike pattern in every skirmish; Plated Steelcaps blunts early invades; Zhonya's Hourglass turns off burst right as his own combo comes online.",
      sideItems:["Death's Dance","Sterak's Gage","Guardian Angel","Force of Nature","Mercury's Treads","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the sustained skirmish."),I("Zhonya's Hourglass","Dodge their all-in window with Counter Strike timing."),I("Trinity Force","Proc damage adds up over the fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Zhonya's Hourglass","Stasis right as their combo lands, then punish the reset."),I("Trinity Force","Proc burst punishes the dive."),I("Sundered Sky","Healing outlasts the all-in.")],behind:[I("Zhonya's Hourglass","Negates their all-in timing entirely."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis the burst window, then Counter Strike the follow-up."),I("Sundered Sky","Healing recovers between combo windows."),I("Sterak's Gage","Shield eats the opener.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Trinity Force","Proc damage tips the auto-trade."),I("Zhonya's Hourglass","Dodge their all-in spike, then punish.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Stasis the combo, then all-in on cooldown."),I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke.")],behind:[I("Zhonya's Hourglass","Mandatory vs burst mages."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Sundered Sky","Healing matches their scaling durability."),I("Trinity Force","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for Counter Strike to reset."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration on the gank path.")],behind:[I("Zhonya's Hourglass","Survive the poke on approach."),I("Force of Nature","MR + move speed vs sustained poke."),I("Mercury's Treads","Reduce CC duration.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Reach the ADC before they can kite."),I("Sundered Sky","Healing wins the burst race."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Guardian Angel","Second life for a risky dive.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Reach the carry despite the peel."),I("Sundered Sky","Healing outlasts their shield economy."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Zhonya's Hourglass","Stasis away from a landed hook's follow-up."),I("Trinity Force","Punish a whiffed hook instantly."),I("Sundered Sky","Healing recovers after a catch.")],behind:[I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Sustain outlasts their engage burst."),I("Zhonya's Hourglass","Stasis the initiation, then punish."),I("Trinity Force","Punish their re-engage window.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sundered Sky","Healing still wins the peel war."),I("Trinity Force","Stick through their peel."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Sterak's Gage","Survive their counter-peel."),I("Force of Nature","MR vs Galio/K'Sante."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Zhonya's Hourglass","Dodge their key setup, then punish."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...JAX_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
