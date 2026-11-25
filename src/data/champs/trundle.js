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

// Research (2026-11-25, lolalytics 16.23 Emerald+ Top, 23,982 games, 50.7% WR, B-): Lethal Tempo 85.1% of keystones;
// the Most Common page is Triumph / Legend: Alacrity / Last Stand with Resolve Demolish + Bone Plating, shards
// Attack Speed / Adaptive / Health (scaling). Flash + Ignite.
const TRUNDLE_TOP_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Demolish","Bone Plating"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo stacks fast off Frozen Domain's attack speed, so every extended trade swings your way. Triumph and Last Stand keep you in the fight while Chomp drains their AD, Demolish turns a won lane into turret plates, and Bone Plating blunts their first all-in.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TRUNDLE — Troll King: Stat-Theft Duel Jungler  (B tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"trundle", display:"Trundle", dd:"Trundle",
  color:"#3a4a5a", glow:"#80c0e0",
  lanes:["Jungle","Top"],
  roles:{
    Jungle:{
      bans:["Lillia","Nidalee","Kindred"], replacements:["Xin Zhao","Jarvan IV","Vi"],
      role:"Subjugate Stat-Theft Duelist",
      corePath:"Trinity Force  ›  Mercury's Treads  ›  Dead Man's Plate  ›  Spirit Visage",
      coreNote:"Trundle wins by theft: Q steals AD, Subjugate steals a tank's health and resists, and suddenly the raid boss they built is yours. Trinity Force procs off the Q-weave flurry, Dead Man's Plate feeds the roam-slam ganks, Spirit Visage amplifies the Subjugate drain, and Thornmail closes against lifesteal comps. Pillar of Ice blocks Baron pit entrances, cuts escape routes, and ruins every dash the enemy paid gold for. Duel anyone; you're playing with their stats.",
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
    Top:{
      // Research (2026-11-25, lolalytics 16.23 Emerald+ Top, build-itemset): Ravenous Hydra opens 51.7% (Ruined King 22.9%,
      // Trinity Force 20.9%); Ravenous Hydra > Trinity Force 31.4% of first-two pairs; > Hullbreaker 18.5% of first three;
      // > Death's Dance 7.6% of first four (the most common). Boots: Plated Steelcaps 48%, Mercury's 24%, Berserker's 17%.
      // Bans from poolMatchups.js, Iron+Bronze: Teemo 43.5% (915 games), Kayle 43.7% (311), Jax 44.2% (997).
      bans:["Teemo","Kayle","Jax"], replacements:["Volibear","Mordekaiser","Dr. Mundo"],
      role:"Split-Push Duelist",
      corePath:"Ravenous Hydra  ›  Plated Steelcaps  ›  Trinity Force  ›  Hullbreaker",
      coreNote:"Trundle Top wins long trades: Chomp takes their AD and gives it to you, Frozen Domain speeds you up and boosts your healing, and Ravenous Hydra keeps you topped up while you shove. Trinity Force is the dueling spike, Hullbreaker makes you the side lane they must answer, and Subjugate turns their tankiest player into your best stat stick. Death's Dance or Spirit Visage comes fourth.",
      sideItems:["Death's Dance","Spirit Visage","Sterak's Gage","Blade of The Ruined King","Thornmail","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Trinity Force","Chomp their AD and out-trade them."),I("Spirit Visage","Wins the long sustain fight."),I("Thornmail","Cuts their healing.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Death's Dance","Spreads their burst out."),I("Thornmail","Cuts their healing.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Win the extended trade."),I("Sterak's Gage","Shield their all-in."),I("Death's Dance","Outlast their dive.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Sterak's Gage","Shield their all-in."),I("Randuin's Omen","Slows their attack chain.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","Punish them when they jump in."),I("Sterak's Gage","Survive the burst."),I("Death's Dance","Spreads the burst out.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Sterak's Gage","Survive the burst."),I("Death's Dance","Spreads the burst out.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Trinity Force","Chomp wins the duel."),I("Blade of The Ruined King","Shreds their health in long fights."),I("Death's Dance","Outlast their combo.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Death's Dance","Spreads their damage out."),I("Randuin's Omen","Slows their attack chain.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","Close the gap with Frozen Domain."),I("Maw of Malmortius","Shield their burst."),I("Spirit Visage","Magic resist and more healing.")],behind:[I("Mercury's Treads","Magic resist and shorter stuns."),I("Maw of Malmortius","Shield their burst."),I("Kaenic Rookern","Absorbs their combo.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Out-heal their drain."),I("Kaenic Rookern","Absorbs their sustained damage."),I("Trinity Force","Win the extended trade.")],behind:[I("Mercury's Treads","Magic resist and shorter stuns."),I("Spirit Visage","Out-heal their drain."),I("Force of Nature","Stacks magic resist in long fights.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","Hit hard once you reach them."),I("Maw of Malmortius","Shield the poke."),I("Spirit Visage","Heal back the poke.")],behind:[I("Mercury's Treads","Magic resist on the way in."),I("Kaenic Rookern","Shield regenerates between pokes."),I("Spirit Visage","Heal back the poke.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Run them down."),I("Hullbreaker","Take turrets while they kite."),I("Randuin's Omen","Cuts their crit damage.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Randuin's Omen","Cuts their crit damage."),I("Death's Dance","Spreads their damage out.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Trinity Force","Burst through their shields."),I("Thornmail","Cuts their healing."),I("Hullbreaker","Split push while they peel.")],behind:[I("Mercury's Treads","Shorter crowd control."),I("Spirit Visage","Out-sustain the poke."),I("Thornmail","Cuts their healing.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Trinity Force","Punish the catch."),I("Sterak's Gage","Shield the follow-up."),I("Death's Dance","Survive the pick.")],behind:[I("Mercury's Treads","Shorter crowd control."),I("Sterak's Gage","Shield the follow-up."),I("Randuin's Omen","Slows the follow-up.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Trinity Force","Subjugate steals their resists."),I("Blade of The Ruined King","Shreds their health."),I("Hullbreaker","Push while they group.")],behind:[I("Mercury's Treads","Shorter crowd control."),I("Spirit Visage","Heal through their engage."),I("Blade of The Ruined King","Shreds their health.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Trinity Force","Subjugate steals their resists."),I("Blade of The Ruined King","Shreds their health."),I("Hullbreaker","Push while they peel.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Blade of The Ruined King","Shreds their health."),I("Spirit Visage","Out-sustain them.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Win the extended trade."),I("Sterak's Gage","Shield their burst."),I("Death's Dance","Spreads their damage out.")],behind:[I("Plated Steelcaps","Less damage from their autos."),I("Sterak's Gage","Shield their burst."),I("Spirit Visage","Out-sustain them.")],runes:{...TRUNDLE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
