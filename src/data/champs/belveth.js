import { I } from "../runeHelpers.js";

const BELVETH_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks instantly through Bel'Veth's quad-dash Q weaving and converts into the sustain her extended True Form brawls run on. Triumph refunds HP through the multi-takedown fights her R resets chain into, Legend: Alacrity compounds the attack-speed scaling that literally is her champion identity, Coup de Grace finishes what the dash barrage starts, and the Inspiration economy line accelerates the Kraken Slayer spike while Cosmic Insight brings True Form up for every objective window.",
};

// ══════════════════════════════════════════════════════════════════════════
//  BEL'VETH — Empress of the Void: AS-Scaling Dash Brawler  (S Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"belveth", display:"Bel'Veth", dd:"Belveth",
  color:"#4a2a4a", glow:"#d080d0",
  lanes:["Jungle"],
  altBuilds:{
    Jungle:[{
      label:"OP 26.17 ALT", tag:"alt",
      corePath:"Kraken Slayer  ›  Berserker's Greaves  ›  Guinsoo's Rageblade  ›  Terminus",
      coreNote:"Skill-Capped on-hit Bel'Veth — the core dominating solo queue after her mini-rework: Kraken Slayer → Guinsoo's Rageblade → Terminus with Lethal Tempo, since attack-speed/on-hit scaling is far more efficient on her now. Best into bruiser/tank comps. Alt crit line into squishy comps: Guinsoo's → Infinity Edge → Shieldbow or Lord Dominik's with Press the Attack for more upfront burst.",
      runes:{...BELVETH_JGL_DEFAULT_RUNES},
      sideItems:["Guinsoo's Rageblade","Wit's End","Blade of the Ruined King","Infinity Edge","Mercury's Treads"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Talon","Udyr","Evelynn"], replacements:["Master Yi","Viego","Kayn"],
      role:"True-Form Objective Empress",
      corePath:"Kraken Slayer  ›  Plated Steelcaps  ›  Stridebreaker  ›  Death's Dance",
      coreNote:"Bel'Veth is rank-4 on real data — her quad-dash kit turns every skirmish into a blender, and True Form plus a Void Coral turns every objective take into a minion army siege. Kraken Slayer's true damage rides her endless autos, Stridebreaker's slow-and-dash keeps targets inside the storm, and Death's Dance converts burst into a bleed her lifesteal passive heals through. Wit's End closes against AP comps. Stack Lavender early, hit two items, and every dragon fight becomes a coronation.",
      sideItems:["Wit's End","Blade of The Ruined King","Guardian Angel","Sterak's Gage","Terminus","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Kraken Slayer","True damage shreds their HP stacking."),I("Blade of The Ruined King","Percent-HP stacks the melt."),I("Death's Dance","Out-sustain the brawl they want.")],behind:[I("Death's Dance","Survive their burst and bleed it out."),I("Sterak's Gage","Shield the all-in."),I("Stridebreaker","Dash-slow to disengage the loss.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Win the engage mirror — your dashes never stop."),I("Kraken Slayer","True damage through the extended brawl."),I("Death's Dance","Out-sustain their engage window.")],behind:[I("Sterak's Gage","Shield their engage burst."),I("Death's Dance","Bleed through the counter-dive."),I("Guardian Angel","Insurance when both teams commit.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Death's Dance","Their burst becomes a bleed — your dashes dodge the rest."),I("Kraken Slayer","Out-DPS their reset window."),I("Stridebreaker","Slow their escape after the whiff.")],behind:[I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Kraken Slayer","The extended duel is your game — true damage wins it."),I("Blade of The Ruined King","Percent-HP out-trades their kit."),I("Death's Dance","Sustain conversion seals the 1v1.")],behind:[I("Sterak's Gage","Survive the duel they force at camps."),I("Maw of Malmortius","Lifeline vs AP skirmishers."),I("Guardian Angel","Insurance in the 1v1.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Dash through the rotation and blend them."),I("Maw of Malmortius","Lifeline under the full combo."),I("Death's Dance","Convert their burst to bleed.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Mercury's Treads","Tenacity through their setup CC."),I("Guardian Angel","Survive the caught engage.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","On-hit MR shrugs off the drain."),I("Kraken Slayer","Out-DPS their ramp."),I("Death's Dance","Bleed through the sustained damage.")],behind:[I("Wit's End","MR keeps you in the fight."),I("Maw of Malmortius","Lifeline vs the ramped window."),I("Mercury's Treads","Tenacity vs their locks.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stridebreaker","Quad-dash erases their range advantage."),I("Kraken Slayer","Delete them on arrival."),I("Guardian Angel","Dive with insurance.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Maw of Malmortius","Shield the approach."),I("Guardian Angel","Covers the committed dive.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Dash-slow deletes their kiting."),I("Kraken Slayer","Out-DPS the DPS carry."),I("Death's Dance","Sustain through the focus fire.")],behind:[I("Sterak's Gage","Survive the kite-down."),I("Guardian Angel","Trade kills and revive."),I("Death's Dance","Bleed through their burst.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Kraken Slayer","True damage ignores the shield budget."),I("Blade of The Ruined King","Percent-HP through the sponge."),I("Stridebreaker","Dash past peel to the carry.")],behind:[I("Blade of The Ruined King","Shred through shields from behind."),I("Mercury's Treads","Tenacity vs their CC package."),I("Guardian Angel","Survive the protected carry.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Stridebreaker","Four dashes make their hooks a joke."),I("Kraken Slayer","Blend the catcher on the whiff."),I("Death's Dance","Bleed through the landed follow-up.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Guardian Angel","Survive the caught scenario."),I("Sterak's Gage","Shield the follow-up burst.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Kraken Slayer","True damage melts the engage tank at objectives."),I("Blade of The Ruined King","Percent-HP through their frontline."),I("Death's Dance","Sustain the extended teamfight.")],behind:[I("Sterak's Gage","Shield the counter-engage."),I("Mercury's Treads","Tenacity through the CC chain."),I("Guardian Angel","Insurance at objectives.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Kraken Slayer","True damage is the anti-warden stat."),I("Terminus","Pen stacks past their mitigation."),I("Blade of The Ruined King","Percent-HP cracks the wall.")],behind:[I("Terminus","Required pen vs stacked resists."),I("Guardian Angel","Insurance on the forced dive."),I("Sterak's Gage","Shield the counter-burst.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Kraken Slayer","Generic true-damage DPS answers most kits."),I("Stridebreaker","Dash-slow beats trick mobility."),I("Death's Dance","Sustain through the gimmick.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Guardian Angel","Survive the setup you can't read."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...BELVETH_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
