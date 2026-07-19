import { I } from "../runeHelpers.js";

const NOCTURNE_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Grisly Mementos","Ultimate Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health"],
  reason:         "Conqueror is now the standard Nocturne keystone, stacking through the auto-heavy fear-tether duel his kit forces. Legend: Alacrity keeps the attack speed ramping. Grisly Mementos stacks damage and slow resist off every takedown, and Ultimate Hunter reduces R cooldown — the whole kill pattern (R from fog, fear, walk out with the shutdown) runs on how often that ultimate is up.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NOCTURNE — Jungle
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nocturne", display:"Nocturne", dd:"Nocturne",
  color:"#3b2c50", glow:"#9b59b6",
  roles:{
    Jungle:{
      bans:["Udyr","Viego","Gragas"], replacements:["Briar","Warwick","Rek'Sai"],
      role:"Diver / Assassin",
      corePath:"Stridebreaker  ›  Experimental Hexplate  ›  Black Cleaver  ›  Death's Dance",
      coreNote:"Bruiser Nocturne — Stridebreaker's active slow keeps targets in Q trail + passive cleave range after R lands. Experimental Hexplate's move-speed burst on ability use now edges out a straight Serylda's Grudge rush, closing gaps faster for the R-into-fear kill pattern. Black Cleaver shreds while you auto through Conqueror stacks. Death's Dance converts their counter-burst into bleed. The kill pattern is always the same: R from fog, W the obvious answer spell, E fear if they run, walk out with the shutdown.",
      sideItems:["Youmuu's Ghostblade","Edge of Night","Sterak's Gage","Maw of Malmortius","Guardian Angel","Wit's End","Mercury's Treads","Plated Steelcaps","Serylda's Grudge"],
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
