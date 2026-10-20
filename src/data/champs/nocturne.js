import { I } from "../runeHelpers.js";

const NOCTURNE_JGL_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Alacrity","Triumph"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Hail of Blades is the most common Nocturne keystone on 26.20 (about 44% of games, ahead of Conqueror at about 30% and Lethal Tempo at about 22%), and it is the keystone of the lethality line: most Hail of Blades players open Profane Hydra or Axiom Arc. Paranoia lands him on a target with no time to react, and three fast autos with the Umbra Blades cleave front-load the kill before the fear even resolves. Sudden Impact fires off the Paranoia dash, Grisly Mementos rewards every takedown, and Ultimate Hunter brings Paranoia back sooner — the whole kill pattern runs on how often that ultimate is up. The Precision splash adds attack speed (Legend: Alacrity) and a heal after each pick (Triumph).",
};

// The bruiser page, for the Hexplate/Stridebreaker alternate. Conqueror and
// Lethal Tempo players build that line; this is the previous standard page.
const NOCTURNE_JGL_BRUISER_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Grisly Mementos","Ultimate Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health"],
  reason:         "Conqueror is the bruiser-line keystone (about 30% of Nocturne games on 26.20), stacking through the auto-heavy fear-tether duel the Hexplate and Stridebreaker items want to take. Legend: Alacrity keeps the attack speed ramping, Last Stand pays off the low-health end of the duel, and Grisly Mementos plus Ultimate Hunter keep the R-from-fog pattern on a short cooldown.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NOCTURNE — Jungle
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nocturne", display:"Nocturne", dd:"Nocturne",
  color:"#3b2c50", glow:"#9b59b6",
  altBuilds:{
    Jungle:[{
      label:"Hexplate bruiser", tag:"alt",
      corePath:"Experimental Hexplate  ›  Stridebreaker  ›  Black Cleaver  ›  Death's Dance",
      coreNote:"The bruiser line, played in close to half of Nocturne games on 26.20 and so only just the minority. Experimental Hexplate is actually the single most common first item (about a third of games, with Stridebreaker first adding about an eighth), but the follow-ups scatter, so no single bruiser path is close to as common as Profane Hydra into Axiom Arc into Voltaic Cyclosword. Most Conqueror and Lethal Tempo players build this. Hexplate's ultimate haste, and the attack and move speed it grants after Paranoia, arrive exactly when you land; Stridebreaker's slow keeps the target inside the passive cleave; Black Cleaver shreds while you auto; Death's Dance turns their counter-burst into a bleed. Take it into frontlines, and into teams with the peel to survive a one-rotation burst. Hexplate into Stridebreaker is the usual order; Stridebreaker first is the common variant.",
      runes:{...NOCTURNE_JGL_BRUISER_RUNES},
      sideItems:["Guardian Angel","Sterak's Gage","Maw of Malmortius","Wit's End","Serylda's Grudge","Plated Steelcaps","Mercury's Treads"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Udyr","Viego","Gragas"], replacements:["Briar","Warwick","Rek'Sai"],
      role:"Diver / Assassin",
      corePath:"Profane Hydra  ›  Axiom Arc  ›  Voltaic Cyclosword  ›  Lord Dominik's Regards",
      coreNote:"Lethality Nocturne — Paranoia from fog, three Hail of Blades autos and a Profane Hydra active, and the target is dead before Unspeakable Horror's fear finishes. On 26.20 Nocturne splits almost evenly between this line and the Hexplate bruiser build (kept as the alternate), but this is the most common single path: Profane Hydra into Axiom Arc is the top two-item start (about 27%) and Voltaic Cyclosword third is the most common three-item set (about 20%). Profane Hydra adds a burst cleave to the opener and speeds up the clear; Axiom Arc refunds part of Paranoia's cooldown whenever a champion you damaged dies, so a won fight puts the next R up much sooner; Voltaic Cyclosword turns the first ability hit into an Energized attack that chunks by current health. Lord Dominik's Regards is the usual fourth item, Guardian Angel the safer one. Boots are Plated Steelcaps or Ionian Boots of Lucidity, depending on their damage. The kill pattern is always the same: R from fog, W the obvious answer spell, E fear if they run, walk out with the shutdown.",
      sideItems:["Guardian Angel","The Collector","Death's Dance","Edge of Night","Maw of Malmortius","Plated Steelcaps","Ionian Boots of Lucidity","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Shred their armor stack while Tempo ramps."),I("Stridebreaker","Slow so they can't walk away from the duel."),I("Death's Dance","Their damage becomes bleed you out-sustain.")],behind:[I("Sterak's Gage","Shield when the dive goes wrong."),I("Death's Dance","Survive their counter-pressure."),I("Plated Steelcaps","Auto reduction on their walk-down.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Win the mirror skirmish — slow beats dash."),I("Black Cleaver","Shred + haste for repeat fear tethers."),I("Death's Dance","Out-sustain their burst rotation.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Plated Steelcaps","Irelia/Camille auto chains."),I("Guardian Angel","Trade 1-for-1 and win the reset.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Edge of Night","Spellshield #2 — with W they need three key spells to touch you."),I("Youmuu's Ghostblade","Out-roam and out-pick them."),I("Death's Dance","Convert their burst to bleed and heal on kill.")],behind:[I("Edge of Night","Block the setup spell of their combo."),I("Guardian Angel","Deny the shutdown snowball."),I("Maw of Malmortius","AP assassins — lifeline.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Stridebreaker","Slow denies their kite-back — fear tether completes."),I("Wit's End","On-hit race with Tempo — you fear mid-duel."),I("Death's Dance","Bleed conversion wins extended duels.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Maw of Malmortius","AP skirmishers."),I("Guardian Angel","Their duel win becomes a trade.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Edge of Night","Second spellshield — with W they need two key spells before the combo works."),I("Maw of Malmortius","Lifeline if a combo lands anyway."),I("Youmuu's Ghostblade","R from further out — they never see it.")],behind:[I("Maw of Malmortius","Lifeline is mandatory."),I("Mercury's Treads","Shorter CC after your spellshield pops."),I("Edge of Night","Deny the pick.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit while W eats a key drain spell."),I("Death's Dance","Sustain through their DPS."),I("Black Cleaver","Haste for more fears in the long fight.")],behind:[I("Maw of Malmortius","Lifeline vs sustained AP."),I("Wit's End","MR + DPS."),I("Mercury's Treads","Their layered CC.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Cross-map R picks — their range never matters."),I("Edge of Night","Spellshield walks through their zone poke."),I("Serylda's Grudge","Slow after R so they can't reposition.")],behind:[I("Edge of Night","Block the poke that stops your approach."),I("Maw of Malmortius","Survive one full rotation."),I("Mercury's Treads","Their slows/roots.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Youmuu's Ghostblade","R the ADC every fight — game over."),I("Stridebreaker","Slow their kite after landing."),I("Serylda's Grudge","Shred + slow through their peel items.")],behind:[I("Edge of Night","Block the peel spell protecting them."),I("Guardian Angel","Dive, die, deny — still a trade."),I("Death's Dance","Survive their DPS window.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serylda's Grudge","Cut through shield + slow the save."),I("Youmuu's Ghostblade","R arrives before their peel does."),I("Edge of Night","Spellshield eats the exhaust-equivalent.")],behind:[I("Edge of Night","Block the peel that ruins your dive."),I("Death's Dance","Out-sustain their heal economy."),I("Maw of Malmortius","AP enchanter poke.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Edge of Night","Two spellshields vs a hook champion is unfair."),I("Youmuu's Ghostblade","Pick them before they pick you."),I("Stridebreaker","Slow after R denies the disengage.")],behind:[I("Edge of Night","W + Edge blocks both hook and follow-up."),I("Mercury's Treads","When one lands anyway."),I("Guardian Angel","Deny the pick snowball.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline for your whole team."),I("Stridebreaker","Slow their engage before it starts."),I("Death's Dance","Sustain through their AoE.")],behind:[I("Mercury's Treads","Tenacity vs their CC chains."),I("Sterak's Gage","Survive the engage burst."),I("Maw of Malmortius","Malphite/Gragas AP.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Shred + slow through their shields to the carry."),I("Youmuu's Ghostblade","R past the frontline entirely."),I("Black Cleaver","Break their armor wall.")],behind:[I("Edge of Night","Block Poppy W-equivalent anti-dive."),I("Death's Dance","Survive their counter-peel."),I("Sterak's Gage","Dive insurance.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Wit's End","MR on-hit shreds Teemo/Kennen — W blocks the blind."),I("Stridebreaker","Run down Singed/kiters."),I("Youmuu's Ghostblade","Roam-speed picks on splitters.")],behind:[I("Wit's End","MR + DPS baseline."),I("Mercury's Treads","Teemo blind, Kennen stun — shorten."),I("Sterak's Gage","Survive burst setups.")],runes:{...NOCTURNE_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
