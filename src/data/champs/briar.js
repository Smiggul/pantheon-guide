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
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Revitalize"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Conqueror core as jungle. Second Wind replaces Bone Plating in lane — Briar top eats constant poke while walking down her lane opponent, and Second Wind + passive healing out-regens it. Revitalize amplifies E channel healing between trades.",
};

// ══════════════════════════════════════════════════════════════════════════
//  BRIAR — Jungle / Top
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"briar", display:"Briar", dd:"Briar",
  color:"#7a1f2b", glow:"#e0566a",
  roles:{
    Jungle:{
      bans:["Jax","Amumu","Udyr"], replacements:["Warwick","Nocturne","Rek'Sai"],
      role:"Diver / Skirmisher",
      corePath:"Titanic Hydra  ›  Plated Steelcaps  ›  Black Cleaver  ›  Death's Dance",
      coreNote:"Current meta drops Eclipse entirely — Titanic Hydra first for the HP-scaling AoE proc that fires on every Frenzy auto. Plated Steelcaps second keeps you alive through counter-ganks before your kit online. Black Cleaver shreds while Frenzy autos stack it instantly; Death's Dance (or Spirit Visage / Guardian Angel situationally) rounds out the HP-as-a-resource game plan. A burst variant swapping in The Collector and Lord Dominik's Regards exists for lopsided burst comps, but the bruiser path is the safer default.",
      sideItems:["Spirit Visage","Wit's End","Maw of Malmortius","Randuin's Omen","Serylda's Grudge","Guardian Angel","The Collector","Lord Dominik's Regards"],
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
      corePath:"Stridebreaker  ›  Black Cleaver  ›  Spirit Visage  ›  Sterak's Gage",
      coreNote:"Top lane trades Eclipse for Stridebreaker — the active slow replaces jungle R engages as your stick mechanic, and the waveclear covers Briar's weak early pushing. Spirit Visage third amplifies the passive + E healing that wins the lane war of attrition. Same rule as jungle: her HP bar is a resource — spend it, heal it back, repeat.",
      sideItems:["Titanic Hydra","Wit's End","Death's Dance","Maw of Malmortius","Randuin's Omen","Thornmail","Guardian Angel","Plated Steelcaps"],
      data:{
        JUGGERNAUT:{ahead:[I("Black Cleaver","Frenzy autos shred their armor stack."),I("Spirit Visage","Out-sustain the sustain class."),I("Stridebreaker","They can never disengage the losing fight.")],behind:[I("Sterak's Gage","Shield their walk-down."),I("Thornmail","GW cuts Darius/Mundo regen."),I("Plated Steelcaps","Auto reduction.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow their dash-out — Frenzy finishes."),I("Black Cleaver","Shred + haste for E interrupts on their engage."),I("Death's Dance","Their burst becomes bleed.")],behind:[I("Sterak's Gage","Survive the engage spike."),I("Plated Steelcaps","Irelia/Camille chains."),I("Guardian Angel","Even trades still snowball your scaling.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Death's Dance","Burst-to-bleed — passive heals it back."),I("Stridebreaker","Slow the escape after their failed combo."),I("Black Cleaver","Shred lethality builds.")],behind:[I("Sterak's Gage","Survive the one-shot window."),I("Maw of Malmortius","AP assassins."),I("Guardian Angel","Deny shutdown gold.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit + MR race — Frenzy wins stat checks."),I("Death's Dance","Out-sustain the duel class."),I("Black Cleaver","Long-fight shred.")],behind:[I("Randuin's Omen","Crit/AS cut on Trynd/Yone/Jax ult windows."),I("Sterak's Gage","Their spike, survived."),I("Thornmail","GW on their lifesteal.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Lifeline covers the Frenzy commit."),I("Wit's End","MR + on-hit while sticking."),I("Stridebreaker","Slow so the combo gap never opens.")],behind:[I("Maw of Malmortius","Mandatory lifeline."),I("Mercury's Treads","Shorter CC mid-Frenzy."),I("Spirit Visage","Recover between combos.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs sustained AP."),I("Spirit Visage","Healing races their drain."),I("Death's Dance","Bleed + kill heal.")],behind:[I("Maw of Malmortius","Vlad/Swain drain fights."),I("Wit's End","MR + DPS."),I("Mercury's Treads","Layered CC.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Stridebreaker","Gap-close slow — one connect ends the poke game."),I("Wit's End","MR chip resistance walking in."),I("Black Cleaver","Haste for more E interrupts.")],behind:[I("Maw of Malmortius","Survive the poke rotation."),I("Mercury's Treads","Slows/roots."),I("Spirit Visage","Second Wind + Visage out-regens chip.")],runes:{...BRIAR_TOP_DEFAULT_RUNES}},
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
