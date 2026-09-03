import { I } from "../runeHelpers.js";

const WARWICK_JGL_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Sorcery",
  secondaryRunes: ["Celerity","Waterwalking"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo amplifies Warwick's sustained auto pattern — stacks instantly on Q. Celerity + Waterwalking gives permanent river movement speed to appear faster for Ult ganks. Last Stand synergises with Primal Howl at low HP where W healing is strongest.",
};

const WARWICK_TOP_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Revitalize"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Lethal Tempo auto-stacking core as Jungle. Presence of Mind replaces Triumph — Top Warwick doesn't get the same steady kill participation, and needs the mana back for a longer laning phase of Q/W trades. Second Wind and Revitalize amplify the W lifesteal/heal that wins extended top-lane duels instead of Sorcery's gank-speed utility.",
};

// ══════════════════════════════════════════════════════════════════════════
//  WARWICK — Diver / Tank
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"warwick", display:"Warwick", dd:"Warwick",
  color:"#4a235a", glow:"#8e44ad",
  lanes:["Jungle","Top"],
  roles:{
    Jungle:{
      bans:["Kindred","Amumu","Lillia"], replacements:["Udyr","Rek'Sai","Shyvana"],
      role:"Diver / Tank",
      corePath:"Stridebreaker  ›  Plated Steelcaps  ›  Blade of The Ruined King  ›  Thornmail",
      coreNote:"Stridebreaker first for the AoE slow on Infinite Duress — they cannot escape your ult suppression. Plated Steelcaps second blunts the auto-attack damage you dive into. Blade of The Ruined King third for the % HP drain that synergises with Blood Hunt passive. Thornmail fourth for GW against healing targets — swap to Spirit Visage when you'd rather amplify your own W passive healing.",
      sideItems:["Spirit Visage","Sterak's Gage","Dead Man's Plate","Force of Nature","Mercury's Treads","Warmog's Armor"],
      data:{
        JUGGERNAUT:{ahead:[I("Thornmail","GW 40% on Warwick vs Darius/Mundo regen — mirror sustain fight, yours wins."),I("Blade of The Ruined King","% current HP drain beats their HP stacking model."),I("Spirit Visage","W passive healing amplified — sustains through their walk-down.")],behind:[I("Spirit Visage","W healing amp is your lifeline when behind."),I("Thornmail","GW cuts their regen even when behind."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","AoE slow on ult landing — they can't counter-dive out."),I("Blade of The Ruined King","% HP drain wins gank skirmishes."),I("Spirit Visage","W healing keeps you healthy post-dive.")],behind:[I("Spirit Visage","W healing is your advantage behind — never skip it."),I("Sterak's Gage","Shield on failed ganks."),I("Plated Steelcaps","Auto reduction on Irelia/Renekton chains.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Stridebreaker","Ult suppression + AoE slow = no escape."),I("Blade of The Ruined King","Drain their burst window."),I("Sterak's Gage","Shield their counter-burst.")],behind:[I("Sterak's Gage","Shield vs one-shots — ult makes you visible."),I("Spirit Visage","W heal keeps you alive after ult."),I("Force of Nature","AP assassins — MR stack.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW + reflect on Fiora/Tryndamere auto chains."),I("Blade of The Ruined King","% HP drain wins extended duels."),I("Spirit Visage","W healing amp tips the sustain war.")],behind:[I("Spirit Visage","W sustain tips extended fights."),I("Thornmail","GW on Fiora/Tryndamere regen."),I("Plated Steelcaps","Crit auto reduction.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Close before their combo fires."),I("Spirit Visage","MR + W healing amp."),I("Sterak's Gage","Absorb burst.")],behind:[I("Spirit Visage","Non-negotiable MR + healing amp."),I("Force of Nature","Stack MR fast."),I("Sterak's Gage","Secondary shield.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW on Vladimir/Swain drain — 40% per tick."),I("Spirit Visage","Your W sustain vs their sustain — yours wins with Visage."),I("Blade of The Ruined King","% HP drain through their HP stacking.")],behind:[I("Spirit Visage","Non-negotiable."),I("Thornmail","GW cuts their regen even behind."),I("Force of Nature","Sustained AP DPS MR.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Charge speed + W scent triggers for fast approach."),I("Stridebreaker","AoE slow on ult arrival."),I("Spirit Visage","W sustains through poke during approach.")],behind:[I("Spirit Visage","W sustain on approach."),I("Sterak's Gage","Shield on arrival."),I("Mercury's Treads","Shorter CC so ult can land.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Blade of The Ruined King","% HP drain + active reposition on ADC."),I("Thornmail","GW on ADC lifesteal.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Spirit Visage","W healing sustains through their DPS."),I("Thornmail","GW limits lifesteal.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW 40% — destroys all Enchanter heals and shields."),I("Dead Man's Plate","Charge speed into Bot lane."),I("Spirit Visage","W sustains through Enchanter poke.")],behind:[I("Thornmail","GW still the equaliser."),I("Spirit Visage","W healing sustains."),I("Sterak's Gage","Survive carry burst.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — Blood Hunt passive triggers but hooks cancel ult."),I("Stridebreaker","AoE slow after CC window."),I("Spirit Visage","W healing sustains through gank.")],behind:[I("Mercury's Treads","Mandatory — CC cancels ult suppression."),I("Spirit Visage","W healing keeps you healthy."),I("Sterak's Gage","Survive burst after CC.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of The Ruined King","% HP drain on engage tanks."),I("Stridebreaker","AoE slow during their initiation."),I("Spirit Visage","W healing through their tank pressure.")],behind:[I("Spirit Visage","W healing keeps you relevant."),I("Sterak's Gage","Survive engage burst."),I("Mercury's Treads","Their CC chains — shorter.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP drain past their body-block."),I("Thornmail","GW on Warden sustain/passive."),I("Spirit Visage","W healing through their peel.")],behind:[I("Spirit Visage","W healing sustains."),I("Sterak's Gage","Survive carry burst through body-block."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dead Man's Plate","Blood Hunt triggers on low-HP Specialists — charge speed."),I("Blade of The Ruined King","% HP drain on sustain Specialists."),I("Spirit Visage","W healing through their kit.")],behind:[I("Spirit Visage","W healing sustains."),I("Force of Nature","Kennen/Teemo AP."),I("Mercury's Treads","Teemo blind stops Lethal Tempo stacks.")],runes:{...WARWICK_JGL_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Quinn","Jayce","Kennen"], replacements:["Volibear","Sett","Wukong"],
      role:"Diver / Sustain Duelist",
      corePath:"Stridebreaker  ›  Plated Steelcaps  ›  Blade of The Ruined King  ›  Thornmail",
      coreNote:"Top Warwick plays for extended 1v1 sustain trades instead of jungle gank tempo — same itemization core. Stridebreaker's slow locks a duelist in range; Blade of The Ruined King's % HP drain wins the sustain war; Plated Steelcaps and Thornmail round out durability and GW against lifesteal/regen bruisers.",
      sideItems:["Spirit Visage","Sterak's Gage","Dead Man's Plate","Force of Nature","Mercury's Treads","Warmog's Armor"],
      data:{
        JUGGERNAUT:{ahead:[I("Thornmail","GW on Darius/Mundo regen — the mirror sustain fight is yours to win."),I("Blade of The Ruined King","% current HP drain beats their HP-stacking model."),I("Spirit Visage","W healing amplified sustains through their walk-down.")],behind:[I("Spirit Visage","W healing amp is your lifeline when behind."),I("Thornmail","GW cuts their regen even when behind."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stridebreaker","Slow locks the diver into your sustain trade."),I("Blade of The Ruined King","% HP drain wins the all-in."),I("Spirit Visage","W healing keeps you healthy through the exchange.")],behind:[I("Spirit Visage","W healing is your advantage behind — never skip it."),I("Sterak's Gage","Shield on a failed trade."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Stridebreaker","Slow denies their dash-out after the combo."),I("Blade of The Ruined King","Drain through their burst window."),I("Sterak's Gage","Shield their counter-burst.")],behind:[I("Sterak's Gage","Shield vs one-shots."),I("Spirit Visage","W heal keeps you alive after their combo."),I("Force of Nature","AP assassins — MR stack.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Thornmail","GW + reflect on Fiora/Tryndamere auto chains."),I("Blade of The Ruined King","% HP drain wins extended duels."),I("Spirit Visage","W healing amp tips the sustain war.")],behind:[I("Spirit Visage","W sustain tips extended fights."),I("Thornmail","GW on Fiora/Tryndamere regen."),I("Plated Steelcaps","Crit auto reduction.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stridebreaker","Close and slow before their combo fires."),I("Spirit Visage","MR + W healing amp."),I("Sterak's Gage","Absorb burst.")],behind:[I("Spirit Visage","Non-negotiable MR + healing amp."),I("Force of Nature","Stack MR fast."),I("Sterak's Gage","Secondary shield.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW on Vladimir/Swain drain — 40% per tick."),I("Spirit Visage","Your W sustain vs their sustain — yours wins with Visage."),I("Blade of The Ruined King","% HP drain through their HP stacking.")],behind:[I("Spirit Visage","Non-negotiable."),I("Thornmail","GW cuts their regen even behind."),I("Force of Nature","Sustained AP DPS MR.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Charge speed closes the gap before they can kite."),I("Stridebreaker","Slow locks them down on arrival."),I("Spirit Visage","W sustains through poke during approach.")],behind:[I("Spirit Visage","W sustain on approach."),I("Sterak's Gage","Shield on arrival."),I("Mercury's Treads","Shorter CC so you can close.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","Auto reduction vs a lane-swapped marksman."),I("Blade of The Ruined King","% HP drain + active reposition."),I("Thornmail","GW on their lifesteal.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Spirit Visage","W healing sustains through their DPS."),I("Thornmail","GW limits lifesteal.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW 40% — destroys all Enchanter heals and shields."),I("Dead Man's Plate","Charge speed to press the advantage."),I("Spirit Visage","W sustains through their poke.")],behind:[I("Thornmail","GW still the equaliser."),I("Spirit Visage","W healing sustains."),I("Sterak's Gage","Survive carry burst.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — don't get hooked out of your trade."),I("Stridebreaker","Slow locks them down after the CC window."),I("Spirit Visage","W healing sustains through the exchange.")],behind:[I("Mercury's Treads","Mandatory — a caught Warwick loses the whole trade."),I("Spirit Visage","W healing keeps you healthy."),I("Sterak's Gage","Survive burst after CC.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of The Ruined King","% HP drain on engage tanks."),I("Stridebreaker","Slow during their initiation."),I("Spirit Visage","W healing through their tank pressure.")],behind:[I("Spirit Visage","W healing keeps you relevant."),I("Sterak's Gage","Survive their engage burst."),I("Mercury's Treads","Their CC chains — shorter.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP drain past their body-block."),I("Thornmail","GW on Warden sustain/passive."),I("Spirit Visage","W healing through their peel.")],behind:[I("Spirit Visage","W healing sustains."),I("Sterak's Gage","Survive carry burst through body-block."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dead Man's Plate","Charge speed catches kiting Specialists."),I("Blade of The Ruined King","% HP drain on sustain Specialists."),I("Spirit Visage","W healing through their kit.")],behind:[I("Spirit Visage","W healing sustains."),I("Force of Nature","Kennen/Teemo AP."),I("Mercury's Treads","Teemo blind stops Lethal Tempo stacks.")],runes:{...WARWICK_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
