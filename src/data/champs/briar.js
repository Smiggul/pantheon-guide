import { I } from "../runeHelpers.js";

const BRIAR_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Treasure Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack is the current meta keystone for Briar — 3 autos in Blood Frenzy proc it instantly and the 8% amp feeds her passive's crimson-vitality healing race. Sudden Impact procs off the Q dash-strike for bonus true damage. Coup de Grace executes low-HP targets after Frenzy drains them down; Treasure Hunter funds the snowball from constant kill participation.",
};

const BRIAR_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Treasure Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Same page as jungle. Press the Attack is the Briar Top keystone in about two thirds of games, with Conqueror now under 7%. Three Frenzy autos proc it almost instantly, and the damage amp feeds the passive healing race. Sudden Impact procs off the Q and W dashes, Coup de Grace finishes targets Frenzy has drained, and Treasure Hunter funds the snowball. Source: lolalytics, patch 26.20 (Emerald+ and all ranks agree).",
};

// ══════════════════════════════════════════════════════════════════════════
//  BRIAR — Jungle / Top
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"briar", display:"Briar", dd:"Briar",
  color:"#7a1f2b", glow:"#e0566a",
  altBuilds:{
    Top:[{
      label:"Eclipse short trades", tag:"alt",
      corePath:"Eclipse  ›  Plated Steelcaps  ›  Black Cleaver  ›  Death's Dance",
      // Research: Endless Hunger is an occasional third item, not the norm. Eclipse is the first item in about 6-7% of
      //   Briar Top games and wins more often than the BotRK rush (52.7% vs 50.4% over ~1,900 all-rank games,
      //   53.3% vs 50.7% over ~470 Emerald+ games), but Briar Top itself is under 0.5% pick rate. Source:
      //   lolalytics, patch 26.20.
      coreNote:"Swap Blade of The Ruined King for Eclipse and play for repeated short trades: Q into auto lands Eclipse's proc and shield in one window, so you can trade without committing your HP bar to a full Frenzy. After Eclipse the path is the same as the standard build: Black Cleaver, then Death's Dance. It has won slightly more often than the Ruined King rush, but on very few matches, so treat it as a thin-sample option.",
      runes:{ keystone:"Press the Attack", primary:"Precision", primaryRunes:["Triumph","Legend: Haste","Coup de Grace"], secondary:"Resolve", secondaryRunes:["Second Wind","Unflinching"], shards:["Adaptive Force","Adaptive Force","Health (scaling)"], reason:"Press the Attack front-loads Briar's short-trade pattern — the Q→auto lands the third hit fast for the amp, and Eclipse's proc lands in the same window. Legend: Haste keeps her spells and Eclipse's 6s proc up; Coup de Grace executes. Resolve's Second Wind + Unflinching sustain the ranged-matchup laning this build is built to survive." },
      sideItems:["Endless Hunger","Sterak's Gage","Spirit Visage","Guardian Angel","Mercury's Treads"],
    }],
    Jungle:[{
      label:"Hail of Blades burst", tag:"alt",
      corePath:"The Collector  ›  Plated Steelcaps  ›  Profane Hydra  ›  Lord Dominik's Regards",
      // Research: About a quarter of Briar junglers run Hail of Blades instead of Press the Attack (26% of games, both win
      //   53.1-53.2%), so this is a co-equal choice, not an off-meta gimmick. The Collector first in two thirds of
      //   these games. Hubris first is about 13% of Hail of Blades games at a 55% win rate. Source: lolalytics,
      //   patch 26.20, Emerald+, filtered to Hail of Blades (28,760 games).
      coreNote:"The burst page. Hail of Blades makes Briar's opening W-dive autos hit hard, which suits a gank-heavy, pick-off jungle. It wins as often as Press the Attack, so choose it for the playstyle. The items stay close to the standard build: The Collector first, then Profane Hydra or Titanic Hydra (Profane's active adds a dash-in burst), then Lord Dominik's Regards. Hubris first is the main variant.",
      runes:{ keystone:"Hail of Blades", primary:"Domination", primaryRunes:["Sudden Impact","Sixth Sense","Treasure Hunter"], secondary:"Inspiration", secondaryRunes:["Cash Back","Triple Tonic"], shards:["Adaptive Force","Adaptive Force","Health (scaling)"], reason:"The most-picked Hail of Blades page on 26.20. Hail of Blades front-loads attack speed into the first three autos after a W dive, and Sudden Impact adds lethality off every dash. Sixth Sense periodically reveals nearby wards, which keeps gank paths hidden, and Treasure Hunter funds the snowball from kill participation. The Inspiration secondary (Cash Back + Triple Tonic) trades the Precision rows for economy: gold back on each Legendary item, plus stronger potions in the early clear." },
      sideItems:["Hubris","Titanic Hydra","Infinity Edge","Death's Dance","Guardian Angel","Edge of Night","Mercury's Treads"],
    },{
      label:"Titanic Hydra bruiser", tag:"alt",
      corePath:"Titanic Hydra  ›  Plated Steelcaps  ›  Black Cleaver  ›  Death's Dance",
      // Research: The main build before The Collector took over. Still the second most common start (about 18% of games)
      //   and wins slightly more often than the Collector rush (53.3% vs 52.1% as the first item). Very
      //   consistent: Titanic Hydra into Black Cleaver in 84% of these games, then Death's Dance in 70%. Source:
      //   lolalytics, patch 26.20, Emerald+.
      coreNote:"The bruiser path: Titanic Hydra into Black Cleaver, then Death's Dance. Titanic's health-scaling AoE proc fires on every Frenzy auto, Black Cleaver shreds while Frenzy stacks it instantly, and Death's Dance turns burst into a bleed your passive out-heals. Take it into tanky or bruiser-heavy teams, or when you want to frontline rather than one-shot. Endless Hunger is a rarer third item that has won more often.",
      runes:{...BRIAR_JGL_DEFAULT_RUNES},
      sideItems:["Endless Hunger","Spirit Visage","Sterak's Gage","Guardian Angel","Mercury's Treads"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Jax","Amumu","Udyr"], replacements:["Warwick","Nocturne","Rek'Sai"],
      role:"Diver / Skirmisher",
      // Jungle companion (smite pet). Briar is the textbook aggressive early 1v1
      // duelist, so Scorchclaw's bonus damage snowballs her invades/ganks/clear.
      pet:"Scorchclaw Pup",
      corePath:"The Collector  ›  Plated Steelcaps  ›  Titanic Hydra  ›  Lord Dominik's Regards",
      // Research: The Collector is now Briar's standard first item, in about half of all games and nearly three times as
      //   often as Titanic Hydra. The old Titanic Hydra into Black Cleaver bruiser path is kept as an alternative.
      //   Source: lolalytics, patch 26.20, Emerald+: Collector first in 51% of games, then Titanic in 52%, then
      //   Lord Dominik's in 60%.
      coreNote:"The Collector first: its execute closes out targets Frenzy has drained low, and the lethality spikes your early ganks. Plated Steelcaps keep you alive through counter-ganks (Mercury's Treads into AP or heavy CC). Titanic Hydra second adds a health-scaling AoE proc on every Frenzy auto, with Profane Hydra as the burstier swap. Lord Dominik's Regards third shreds whoever stacks armor against you. Death's Dance is the usual fourth item and Guardian Angel the late-game buy.",
      sideItems:["Death's Dance","Guardian Angel","Black Cleaver","Profane Hydra","Infinity Edge","Mercury's Treads","Spirit Visage","Wit's End","Maw of Malmortius","Randuin's Omen","Serylda's Grudge"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Frenzy autos shred their armor in seconds."),I("Titanic Hydra","AoE proc on their stacked health."),I("Spirit Visage","Amps passive + E healing — you out-sustain a Juggernaut.")],behind:[I("Sterak's Gage","Shield when the stat-check goes their way."),I("Spirit Visage","Healing keeps the war of attrition close."),I("Plated Steelcaps","Auto reduction on their walk-down.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Titanic Hydra","AoE proc wins the mirror dive."),I("Black Cleaver","Shred + haste for more E interrupts."),I("Death's Dance","Their burst becomes bleed your passive out-heals.")],behind:[I("Sterak's Gage","Survive their engage before Frenzy ramps."),I("Plated Steelcaps","Irelia/Camille chains."),I("Guardian Angel","Frenzy dives trade 1-for-1 — GA makes it profitable.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Execute threshold closes out a burst trade they can't survive."),I("Death's Dance","Burst-to-bleed conversion beats one-shots."),I("Black Cleaver","Shred through their lethality builds.")],behind:[I("Sterak's Gage","Survive the burst — W self-frenzy can't dodge."),I("Maw of Malmortius","AP assassins — lifeline."),I("Guardian Angel","Deny the shutdown gold.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit race — Frenzy attack speed + passive healing wins."),I("Death's Dance","Out-sustain their duel."),I("Black Cleaver","Shred for the long fight.")],behind:[I("Randuin's Omen","Crit/AS cut on Yi/Trynd/Yone."),I("Sterak's Gage","Their all-in spike."),I("Maw of Malmortius","AP skirmishers.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Lifeline covers the Frenzy window where you can't dodge."),I("Titanic Hydra","AoE proc through their combo gap."),I("Wit's End","MR + on-hit while you stick.")],behind:[I("Maw of Malmortius","Mandatory — R head-first into a burst mage needs the lifeline."),I("Mercury's Treads","Shorter CC during Frenzy."),I("Spirit Visage","Amp healing to recover from each combo.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Spirit Visage","Your healing races their drain."),I("Death's Dance","Bleed conversion + kill heal.")],behind:[I("Maw of Malmortius","Lifeline vs Vlad/Swain drain fights."),I("Wit's End","MR + DPS."),I("Mercury's Treads","Layered CC.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Tanks one poke rotation on the way in."),I("Black Cleaver","Haste + shred once you arrive."),I("Wit's End","MR chip resistance.")],behind:[I("Maw of Malmortius","Survive the poke to reach them."),I("Mercury's Treads","Their slows/roots."),I("Sterak's Gage","Arrival insurance.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Titanic Hydra","AoE proc in their face — Frenzy sticks through kite."),I("Black Cleaver","Shred + move speed on procs."),I("Death's Dance","Survive their DPS while eating them.")],behind:[I("Plated Steelcaps","Auto reduction."),I("Randuin's Omen","Crit cut + active slow to stick."),I("Sterak's Gage","Survive the peel + DPS.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serylda's Grudge","Shred + slow through shields to the carry."),I("Black Cleaver","Chew the shield wall down."),I("Titanic Hydra","AoE hits Enchanter and carry together.")],behind:[I("Death's Dance","Out-sustain their heal economy."),I("Serylda's Grudge","Anti-shield shred."),I("Maw of Malmortius","AP poke.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Plated Steelcaps","Blunts the hook follow-up — Frenzy punishes the miss."),I("Mercury's Treads","Shorter CC when caught mid-Frenzy."),I("Black Cleaver","Kill the catcher first.")],behind:[I("Mercury's Treads","Mandatory — CC during Frenzy is death."),I("Sterak's Gage","Survive the follow-up burst."),I("Guardian Angel","A caught Briar still trades even.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline for your carries."),I("Titanic Hydra","AoE proc on tanks."),I("Spirit Visage","Heal through their AoE engage.")],behind:[I("Mercury's Treads","Tenacity vs CC chains — Frenzy can't path out."),I("Wit's End","Malphite/Gragas AP."),I("Sterak's Gage","Survive the engage.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Shred + slow through the peel wall."),I("Black Cleaver","Break Braum/Shen mitigation."),I("Titanic Hydra","AoE past the body-block.")],behind:[I("Death's Dance","Sustain through the peel war."),I("Sterak's Gage","Survive counter-peel."),I("Mercury's Treads","Poppy/Galio CC.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Wit's End","MR on-hit vs Teemo/Kennen — passive heals through chip."),I("Black Cleaver","Run down Singed with haste + speed."),I("Death's Dance","Sustain through their poke patterns.")],behind:[I("Wit's End","MR + DPS baseline."),I("Mercury's Treads","Teemo blind during Frenzy is lethal — shorten it."),I("Sterak's Gage","Survive burst setups.")],runes:{...BRIAR_JGL_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Jax","Trundle","Warwick"], replacements:["Sett","Renekton","Volibear"],
      role:"Skirmisher / Bruiser",
      corePath:"Blade of The Ruined King  ›  Plated Steelcaps  ›  Black Cleaver  ›  Death's Dance",
      // Research: BotRK is the most common Briar Top rush. Data is thin: Briar Top is under 0.5% pick rate. Source:
      //   lolalytics, patch 26.20: BotRK first in about 30% of games, then Black Cleaver in 55%, then Death's
      //   Dance in 55%. Emerald+ and all-rank data agree, and patch 26.19 shows the same core.
      coreNote:"Blade of The Ruined King first: its current-health damage and lifesteal on every Frenzy auto win the extended trades Briar wants, and the slow helps you stick. Black Cleaver second shreds while Frenzy stacks it instantly, and Death's Dance third turns their burst into a bleed your passive heals through. The Collector or Titanic Hydra first are the other common starts. Same rule as jungle: your HP bar is a resource, so spend it, heal it back, repeat.",
      sideItems:["The Collector","Titanic Hydra","Lord Dominik's Regards","Guardian Angel","Spirit Visage","Sterak's Gage","Mercury's Treads","Wit's End","Maw of Malmortius","Randuin's Omen","Thornmail","Stridebreaker"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Frenzy autos shred their armor stack."),I("Spirit Visage","Out-sustain the sustain class."),I("Stridebreaker","They can never disengage the losing fight.")],behind:[I("Sterak's Gage","Shield their walk-down."),I("Thornmail","GW cuts Darius/Mundo regen."),I("Plated Steelcaps","Auto reduction.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow their dash-out — Frenzy finishes."),I("Black Cleaver","Shred + haste for E interrupts on their engage."),I("Death's Dance","Their burst becomes bleed.")],behind:[I("Sterak's Gage","Survive the engage spike."),I("Plated Steelcaps","Irelia/Camille chains."),I("Guardian Angel","Even trades still snowball your scaling.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Death's Dance","Burst-to-bleed — passive heals it back."),I("Stridebreaker","Slow the escape after their failed combo."),I("Black Cleaver","Shred lethality builds.")],behind:[I("Sterak's Gage","Survive the one-shot window."),I("Maw of Malmortius","AP assassins."),I("Guardian Angel","Deny shutdown gold.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit + MR race — Frenzy wins stat checks."),I("Death's Dance","Out-sustain the duel class."),I("Black Cleaver","Long-fight shred.")],behind:[I("Randuin's Omen","Crit/AS cut on Trynd/Yone/Jax ult windows."),I("Sterak's Gage","Their spike, survived."),I("Thornmail","GW on their lifesteal.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Lifeline covers the Frenzy commit."),I("Wit's End","MR + on-hit while sticking."),I("Stridebreaker","Slow so the combo gap never opens.")],behind:[I("Maw of Malmortius","Mandatory lifeline."),I("Mercury's Treads","Shorter CC mid-Frenzy."),I("Spirit Visage","Recover between combos.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs sustained AP."),I("Spirit Visage","Healing races their drain."),I("Death's Dance","Bleed + kill heal.")],behind:[I("Maw of Malmortius","Vlad/Swain drain fights."),I("Wit's End","MR + DPS."),I("Mercury's Treads","Layered CC.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stridebreaker","Gap-close slow — one connect ends the poke game."),I("Wit's End","MR chip resistance walking in."),I("Black Cleaver","Haste for more E interrupts.")],behind:[I("Maw of Malmortius","Survive the poke rotation."),I("Mercury's Treads","Slows/roots."),I("Spirit Visage","Visage-amplified passive healing out-regens chip.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stridebreaker","Slow beats kite — Frenzy does the rest."),I("Black Cleaver","Move speed on procs to stick."),I("Death's Dance","Eat their DPS while eating them.")],behind:[I("Plated Steelcaps","Auto reduction."),I("Randuin's Omen","Crit cut + active."),I("Sterak's Gage","Survive peel + DPS.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serylda's Grudge","Shred + slow through shields."),I("Black Cleaver","Chew the shield economy."),I("Titanic Hydra","AoE hits both.")],behind:[I("Death's Dance","Out-sustain their heals."),I("Serylda's Grudge","Anti-shield."),I("Maw of Malmortius","AP poke.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — caught Frenzy is dead Frenzy."),I("Stridebreaker","Punish the missed hook instantly."),I("Black Cleaver","Kill the catcher first.")],behind:[I("Mercury's Treads","Mandatory."),I("Sterak's Gage","Survive the follow-up."),I("Guardian Angel","Even when caught, trade.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred the frontline."),I("Wit's End","Malphite/Gragas AP + on-hit."),I("Spirit Visage","Heal through engage AoE.")],behind:[I("Mercury's Treads","Tenacity vs CC chains."),I("Wit's End","MR + DPS."),I("Sterak's Gage","Survive the engage.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Through the peel wall."),I("Black Cleaver","Break their mitigation."),I("Titanic Hydra","AoE past body-block.")],behind:[I("Death's Dance","Sustain the peel war."),I("Sterak's Gage","Counter-peel insurance."),I("Mercury's Treads","Poppy/Galio CC.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Wit's End","Teemo/Kennen MR + passive out-heals chip."),I("Stridebreaker","Run down Singed/kiters."),I("Death's Dance","Sustain their poke pattern.")],behind:[I("Wit's End","MR + DPS baseline."),I("Mercury's Treads","Teemo blind mid-Frenzy — shorten."),I("Sterak's Gage","Burst setups.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
