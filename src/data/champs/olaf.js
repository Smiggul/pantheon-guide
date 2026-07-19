import { I } from "../runeHelpers.js";

const OLAF_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror's stacking omnivamp keeps Olaf topped up through his all-in invades and skirmishes — Undertow and Vicious Strikes both land repeated hits that build stacks fast. Legend: Alacrity accelerates the ramp; Last Stand rewards fighting at low HP, exactly where Olaf's Ragnarok immunity and Vicious Strikes lifesteal are strongest. Approach Velocity closes the gap onto immobilised or low-HP targets; Magical Footwear gets him into boots for free so his first back is pure damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  OLAF — Skirmisher / Unstoppable Berserker
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"olaf", display:"Olaf", dd:"Olaf",
  color:"#3d5a80", glow:"#a8c6e0",
  lanes:["Jungle","Top"],
  roles:{
    Jungle:{
      bans:["Kindred","Nidalee","Graves"], replacements:["Warwick","Wukong","Sett"],
      role:"Skirmisher / Unstoppable Berserker",
      corePath:"Stridebreaker  ›  Plated Steelcaps  ›  Experimental Hexplate  ›  Death's Dance",
      coreNote:"Olaf plays for an aggressive early game — invade, all-in, repeat, snowballing off Undertow throws and Ragnarok windows. Stridebreaker's slow locks targets into axe range; Plated Steelcaps blunts the early auto-heavy trades; Experimental Hexplate adds burst and haste for more frequent all-ins; Death's Dance lets him survive the counter-hit while Vicious Strikes heals him back.",
      sideItems:["Sterak's Gage","Black Cleaver","Guardian Angel","Force of Nature","Thornmail","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor while Vicious Strikes outheals the trade."),I("Stridebreaker","Slow wins the stick-fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow denies their dash-out after committing."),I("Experimental Hexplate","Burst punishes the dive on cooldown."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if it still connects.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener — Ragnarok removes the follow-up CC."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Stridebreaker","Slow denies their reset window.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Guardian Angel","Deny the kill.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their auto-heavy dueling."),I("Death's Dance","Vicious Strikes lifesteal wins the extended duel."),I("Stridebreaker","Slow locks them into the trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Close before their combo fires."),I("Sterak's Gage","Absorb the burst."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Guardian Angel","Insurance if the combo lands.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Vicious Strikes wins the drain war."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Stridebreaker","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for Ragnarok to matter."),I("Spirit Visage","Amplify your own sustain.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Stridebreaker","Slow locks them down on arrival."),I("Experimental Hexplate","Haste + burst on arrival.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Reach the ADC before they can kite."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while Vicious Strikes heals.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Stridebreaker","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Spirit Visage","Amplify healing to keep pace.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Stridebreaker","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up after a catch."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Guardian Angel","Deny the pick's value entirely."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Death's Dance","Recover the HP lost to the catch.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Stridebreaker","Punish their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Death's Dance","Vicious Strikes still wins the peel war."),I("Stridebreaker","Stick through their peel.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Spirit Visage","Amplify healing through the peel.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stridebreaker","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Guardian Angel","Deny their split-push snowball."),I("Sterak's Gage","Survive burst setups."),I("Force of Nature","Counters AP specialists.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Quinn","Jayce","Kennen"], replacements:["Darius","Renekton","Volibear"],
      role:"Off-Meta Berserker Duelist",
      corePath:"Stridebreaker  ›  Plated Steelcaps  ›  Experimental Hexplate  ›  Death's Dance",
      coreNote:"Top Olaf plays the same aggressive all-in pattern as Jungle without the gank tempo — bait a trade, throw Undertow, commit with Ragnarok. Same itemization core: Stridebreaker's slow locks targets into axe range, Plated Steelcaps blunts early bullying, Experimental Hexplate adds burst and haste, and Death's Dance keeps Vicious Strikes lifesteal relevant into the late game.",
      sideItems:["Sterak's Gage","Black Cleaver","Guardian Angel","Force of Nature","Thornmail","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor while Vicious Strikes outheals the trade."),I("Stridebreaker","Slow wins the stick-fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow denies their dash-out after committing."),I("Experimental Hexplate","Burst punishes the dive on cooldown."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if it still connects.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener — Ragnarok removes the follow-up CC."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Stridebreaker","Slow denies their reset window.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Guardian Angel","Deny the kill.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Black Cleaver","Shred through their auto-heavy dueling."),I("Death's Dance","Vicious Strikes lifesteal wins the extended duel."),I("Stridebreaker","Slow locks them into the trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Close before their combo fires."),I("Sterak's Gage","Absorb the burst."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Guardian Angel","Insurance if the combo lands.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Vicious Strikes wins the drain war."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Stridebreaker","Stick to them through the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for Ragnarok to matter."),I("Spirit Visage","Amplify your own sustain.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Stridebreaker","Slow locks them down on arrival."),I("Experimental Hexplate","Haste + burst on arrival.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Reach the ADC before they can kite."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while Vicious Strikes heals.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Stridebreaker","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Spirit Visage","Amplify healing to keep pace.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Stridebreaker","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up after a catch."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Guardian Angel","Deny the pick's value entirely."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Death's Dance","Recover the HP lost to the catch.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Stridebreaker","Punish their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Death's Dance","Vicious Strikes still wins the peel war."),I("Stridebreaker","Stick through their peel.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Spirit Visage","Amplify healing through the peel.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stridebreaker","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Guardian Angel","Deny their split-push snowball."),I("Sterak's Gage","Survive burst setups."),I("Force of Nature","Counters AP specialists.")],runes:{...OLAF_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
