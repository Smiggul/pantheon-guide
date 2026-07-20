import { I } from "../runeHelpers.js";

const TRUNDLE_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Approach Velocity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack procs through Trundle's Frozen Domain auto flurry and amps the target his Q has already bitten a chunk of AD out of. Triumph refunds HP through the stat-theft brawls, Legend: Alacrity feeds the on-hit pattern, Coup de Grace finishes what Subjugate's percent-HP drain starts, Magical Footwear funds the Trinity rush, and Approach Velocity is permanent value — every Pillar-slowed target speeds the troll toward dinner.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TRUNDLE — Troll King: Stat-Theft Duel Jungler  (B tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"trundle", display:"Trundle", dd:"Trundle",
  color:"#3a4a5a", glow:"#80c0e0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Lillia","Nidalee","Kindred"], replacements:["Xin Zhao","Jarvan IV","Vi"],
      role:"Subjugate Stat-Theft Duelist",
      corePath:"Trinity Force  ›  Mercury's Treads  ›  Dead Man's Plate  ›  Spirit Visage",
      coreNote:"Trundle wins by theft: Q steals AD, Subjugate steals a tank's HP and resists, and suddenly the raid boss they built is his. Trinity Force procs off the Q-weave flurry, Dead Man's Plate feeds the roam-slam ganks, Spirit Visage amplifies the Subjugate drain, and Thornmail closes against lifesteal comps. Pillar of Ice is secretly one of the best spells in the game — it blocks Baron pit entrances, cuts escape routes, and ruins every dash the enemy paid gold for. Duel anyone; you're playing with their stats.",
      sideItems:["Thornmail","Sterak's Gage","Randuin's Omen","Kaenic Rookern","Force of Nature","Blade of The Ruined King"],
      data:{
        JUGGERNAUT:{ahead:[I("Trinity Force","Q-steal their AD and out-brawl them with it."),I("Spirit Visage","Subjugate drain wins the sustain war."),I("Thornmail","Anti-heal their half of the trade.")],behind:[I("Thornmail","Cut their healing before comparing bars."),I("Sterak's Gage","Survive the all-in — R steals it back."),I("Randuin's Omen","Slow their walk-down.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Counter-gank — Pillar breaks their dive path."),I("Dead Man's Plate","Arrive faster than their engage."),I("Spirit Visage","Sustain the counter-brawl.")],behind:[I("Randuin's Omen","Slow the dive mid-animation."),I("Sterak's Gage","Shield their burst opener."),I("Kaenic Rookern","Vs AP divers.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","Their burst can't beat stolen stats — Pillar blocks the exit."),I("Spirit Visage","Drain back their chip."),I("Sterak's Gage","Shield floor under the combo.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow the reset escape."),I("Sterak's Gage","Survive the window and bite back.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Trinity Force","The duel is rigged — Q steals their AD mid-fight."),I("Blade of The Ruined King","Percent-HP stacks the theft."),I("Spirit Visage","Out-sustain their windows.")],behind:[I("Randuin's Omen","AS slow blunts their DPS."),I("Thornmail","Anti-heal their lifesteal."),I("Sterak's Gage","Survive the duel they force.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","Frozen Domain closes the gap before their rotation."),I("Kaenic Rookern","Shield the combo."),I("Spirit Visage","Drain back what lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Mercury's Treads","Tenacity through the setup CC."),I("Sterak's Gage","Shield the burst window.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Subjugate drain beats their drain."),I("Kaenic Rookern","Shield resets every skirmish."),I("Force of Nature","Stack MR against the ramp.")],behind:[I("Force of Nature","MR + speed answers the kit."),I("Kaenic Rookern","Shield the ramp window."),I("Spirit Visage","Amplify your drain.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Speed + Frozen Domain crosses the poke zone."),I("Trinity Force","Chunk them on arrival."),I("Force of Nature","Their poke feeds your MR.")],behind:[I("Force of Nature","Required mobility through the poke."),I("Kaenic Rookern","Shield the volleys."),I("Spirit Visage","Sustain back the chip.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dead Man's Plate","Run them down — Pillar cuts the kite path."),I("Trinity Force","Proc-flurry through their peel."),I("Randuin's Omen","Blunt the crits while you close.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed to finally reach them.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Proc DPS burns through shield cycles."),I("Thornmail","Anti-heal the sustain package."),I("Blade of The Ruined King","Percent-HP through the sponge.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Mercury's Treads","Tenacity vs their CC."),I("Spirit Visage","Out-sustain their value.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Trinity Force","A hook onto Trundle feeds Subjugate — punish it."),I("Sterak's Gage","Shield the follow-up."),I("Dead Man's Plate","Speed makes their picks whiff.")],behind:[I("Mercury's Treads","Shorter lockdown on catch."),I("Sterak's Gage","Survive the caught scenario."),I("Randuin's Omen","Slow the follow-up burst.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Spirit Visage","Subjugate their engage tank — wear their stats to the fight."),I("Trinity Force","Proc through the weakened frontline."),I("Thornmail","Anti-heal their sustain engage.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Randuin's Omen","Slow their wombo follow-up."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Spirit Visage","Subjugate the warden — their resists become yours."),I("Blade of The Ruined King","Percent-HP cracks the wall."),I("Trinity Force","Proc volume through the peel.")],behind:[I("Blade of The Ruined King","Required percent-HP vs stacked resists."),I("Thornmail","Anti-heal their protected carry."),I("Sterak's Gage","Shield the counter-engage.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Stat theft answers most gimmicks."),I("Sterak's Gage","Shield the surprise burst."),I("Spirit Visage","Drain through the tricks.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Kaenic Rookern","Shield what you can't read."),I("Force of Nature","Speed to just leave.")],runes:{...TRUNDLE_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
