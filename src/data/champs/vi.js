import { I } from "../runeHelpers.js";

const VI_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cosmic Insight","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror's stacking omnivamp keeps Vi topped up through the invades and skirmishes her all-in kit demands — Vault Breaker and Cease and Desist both chain into extended fights that reward the sustain. Legend: Haste and Cosmic Insight both cut cooldowns further, feeding more Q dashes and W knockups per gank. Magical Footwear gets her boots online for free. (Hail of Blades/Domination is a legitimate alternate keystone for a more assassin-style burst-and-reset playstyle.)",
};

// ══════════════════════════════════════════════════════════════════════════
//  VI — Vanguard / Invade-and-Dive
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"vi", display:"Vi", dd:"Vi",
  color:"#c9407a", glow:"#4a9fd8",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Nidalee","Kayn","Elise"], replacements:["Warwick","Wukong","Sett"],
      role:"Vanguard / Invade-and-Dive",
      corePath:"Sundered Sky  ›  Plated Steelcaps  ›  Black Cleaver  ›  Guardian Angel",
      coreNote:"Vi plays for a relentless invade-and-dive pattern — Vault Breaker charges into a target, Cease and Desist locks them down, Assault and Battery closes from across the map. Sundered Sky's healing rewards the dash-into-combo pattern; Plated Steelcaps blunts early invades; Black Cleaver shreds armor for her punch-heavy kit; Guardian Angel lets her commit fully to a dive without fearing the counter-engage.",
      sideItems:["Death's Dance","Sterak's Gage","Force of Nature","Thornmail","Mercury's Treads","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Healing wins the extended skirmish."),I("Black Cleaver","Shred adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Plated Steelcaps","Reduces auto damage from a counter-gank."),I("Thornmail","GW cuts their sustain."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Healing outlasts the dive — you started it."),I("Black Cleaver","Shred through their engage burst."),I("Guardian Angel","Second life if the counter-dive still connects.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while you lock them down."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Sundered Sky","Healing recovers between combo windows.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Force of Nature","AP assassins — MR stack."),I("Guardian Angel","Deny the kill.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Healing wins the extended duel outright."),I("Black Cleaver","Shred through their auto-heavy dueling."),I("Death's Dance","Sustain through the drawn-out fight.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Force of Nature","MR stack vs sustained casting."),I("Death's Dance","Sustain through the poke.")],behind:[I("Force of Nature","Mandatory MR stack."),I("Sterak's Gage","Secondary shield."),I("Guardian Angel","Insurance if the combo lands.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability."),I("Sundered Sky","Healing keeps you in the fight.")],behind:[I("Force of Nature","Mandatory vs sustained AP drain."),I("Death's Dance","Buy time for your combo to matter."),I("Spirit Visage","Amplify your own sustain.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Sundered Sky","Healing offsets the chip on approach."),I("Mercury's Treads","Reduce CC duration on the gank path.")],behind:[I("Force of Nature","MR + move speed vs sustained poke."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Sundered Sky","Healing wins the burst race on the ADC."),I("Black Cleaver","Shred through their armor stack."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Sundered Sky","Healing outlasts their peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Spirit Visage","Amplify healing to keep pace.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while ganking."),I("Sundered Sky","Healing during extended fights after a catch."),I("Black Cleaver","Kill the Catcher before they reset.")],behind:[I("Mercury's Treads","Mandatory — a caught Vi wastes the gank."),I("Guardian Angel","Deny the pick's value entirely."),I("Sundered Sky","Recover the HP lost to the catch.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Sundered Sky","Healing through their initiation.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation."),I("Force of Nature","MR vs Malphite/Gragas AP.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Sundered Sky","Healing still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Spirit Visage","Amplify healing through the peel.")],runes:{...VI_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Black Cleaver","Shred through their kit's mitigation."),I("Sundered Sky","Healing outlasts their poke/regen kit."),I("Death's Dance","Sustain through their kit.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Force of Nature","Counters AP specialists."),I("Sterak's Gage","Survive burst setups.")],runes:{...VI_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
