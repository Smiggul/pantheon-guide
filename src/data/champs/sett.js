import { I } from "../runeHelpers.js";

const SETT_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Conditioning","Overgrowth"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Grasp procs on every W auto and stacks HP permanently. Demolish converts your HP lead into tower plates. Conditioning + Overgrowth makes you progressively harder to kill as the game goes on. Heartsteel first amplifies all HP stacking.",
};

const SETT_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks on W auto chains during jungle clear and skirmishes. Bone Plating for counter-jungling skirmishes. Overgrowth scales HP into mid game.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SETT — Juggernaut / Tank
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"sett", display:"Sett", dd:"Sett",
  color:"#7b241c", glow:"#e74c3c",
  roles:{
    Top:{
      bans:["Garen","Gnar","Kled"], replacements:["Renekton","Wukong","Pantheon"],
      role:"Juggernaut / Tank",
      corePath:"Heartsteel  ›  Plated Steelcaps  ›  Sterak's Gage  ›  Titanic Hydra",
      coreNote:"Heartsteel first for the HP stacking that amplifies every subsequent item. Sterak's third — Grit (W mechanic) stores 8% of damage taken as a grey health bar, and the Haymaker expends it as true damage bonus. The more HP you have, the more Grit stores. Titanic Hydra procs on Q and W autos for massive AoE damage.",
      sideItems:["Warmog's Armor","Gargoyle Stoneplate","Dead Man's Plate","Force of Nature","Mercury's Treads","Thornmail"],
      data:{
        JUGGERNAUT:{ahead:[I("Titanic Hydra","Grit W damage scales with HP — more HP = bigger Haymaker."),I("Dead Man's Plate","Charge speed into their walk-down with bonus damage."),I("Warmog's Armor","Regen between trades — Grit restores passive HP.")],behind:[I("Sterak's Gage","Grit + Sterak shield = two separate damage-absorbing mechanics."),I("Gargoyle Stoneplate","Activates during their walk-down for massive resistances."),I("Thornmail","GW 40% on Darius/Mundo regen.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Titanic Hydra","W Haymaker AoE punishes their dive cluster."),I("Dead Man's Plate","Charge speed into their dive approach."),I("Sterak's Gage","Grit stored from their dive = bigger Haymaker.")],behind:[I("Sterak's Gage","Grit + shield — their dive damage becomes your damage."),I("Plated Steelcaps","Auto reduction on Irelia/Renekton chains."),I("Dead Man's Plate","Move speed to stay in Haymaker range.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Absorb one-shot — Grit stored = massive Haymaker retaliation."),I("Dead Man's Plate","Chase after their escape."),I("Titanic Hydra","Haymaker AoE punishes their melee range requirement.")],behind:[I("Sterak's Gage","Grit + shield is your only survival vs one-shots."),I("Gargoyle Stoneplate","Activates during their burst combo."),I("Force of Nature","AP assassins — MR stack.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Titanic Hydra","Grit W damage stored from their auto-heavy dueling."),I("Thornmail","GW + reflect on Fiora/Tryndamere chains."),I("Dead Man's Plate","Charge speed into their kite.")],behind:[I("Sterak's Gage","Grit from their DPS = bigger counter Haymaker."),I("Thornmail","GW + reflect even behind."),I("Plated Steelcaps","Crit auto reduction.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Grit stored from burst = instant Haymaker retaliation."),I("Force of Nature","MR stack while ahead."),I("Dead Man's Plate","Engage before their combo fires.")],behind:[I("Force of Nature","Non-negotiable MR vs AP burst."),I("Sterak's Gage","Grit + shield absorbs their combo."),I("Mercury's Treads","Shorter stun so you can Haymaker.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW on Vladimir/Swain drain."),I("Force of Nature","MR + move speed vs sustained AP."),I("Sterak's Gage","Grit stored from AP DPS = big Haymaker.")],behind:[I("Force of Nature","Non-negotiable."),I("Thornmail","GW cuts their regen."),I("Sterak's Gage","Grit + shield absorbs sustained damage.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Charge speed + bonus damage closes poke gap."),I("Sterak's Gage","Grit stored from poke = Haymaker on arrival."),I("Force of Nature","MR vs AP poke.")],behind:[I("Sterak's Gage","Grit from poke = retaliation damage."),I("Force of Nature","MR vs AP poke."),I("Gargoyle Stoneplate","Activates on arrival for bonus survivability.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Titanic Hydra","Haymaker AoE in their face."),I("Dead Man's Plate","Charge speed to reach ADC.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Sterak's Gage","Grit from their DPS = Haymaker retaliation."),I("Gargoyle Stoneplate","Activates during their sustained DPS.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW destroys Enchanter healing amplification."),I("Dead Man's Plate","Charge into backline."),I("Titanic Hydra","Haymaker AoE hits both Enchanter and carry.")],behind:[I("Thornmail","GW equaliser."),I("Sterak's Gage","Grit + shield vs combined burst."),I("Plated Steelcaps","Carry auto reduction.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — Haymaker requires melee range."),I("Dead Man's Plate","Charge past hooks."),I("Sterak's Gage","Grit from any poke = Haymaker on landing.")],behind:[I("Mercury's Treads","Mandatory — CC prevents Haymaker."),I("Sterak's Gage","Grit + shield after surviving CC."),I("Gargoyle Stoneplate","Activates during their burst after CC.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Dead Man's Plate","Counter-charge into their engage."),I("Titanic Hydra","Haymaker AoE punishes their clustered engage."),I("Sterak's Gage","Grit from their engage = massive counter Haymaker.")],behind:[I("Mercury's Treads","Their CC prevents Haymaker — shorter duration."),I("Sterak's Gage","Grit stored during their engage = retaliation."),I("Gargoyle Stoneplate","Activates mid-engage for massive resistances.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Dead Man's Plate","Charge through their peel."),I("Titanic Hydra","Haymaker AoE past their body-block."),I("Thornmail","GW on any Warden sustain.")],behind:[I("Sterak's Gage","Grit + shield through their peel pressure."),I("Gargoyle Stoneplate","Activates during their sustained peel."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dead Man's Plate","Charge Singed down — Sett wins the run."),I("Titanic Hydra","Haymaker AoE punishes Singed fling clusters."),I("Thornmail","GW on Gangplank regen / Udyr passive.")],behind:[I("Sterak's Gage","Grit from their poke/kit = retaliation Haymaker."),I("Force of Nature","Kennen/Teemo AP."),I("Mercury's Treads","Teemo blind stops autos — Tenacity shortens.")],runes:{...SETT_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Nocturne","Gragas","Rengar"], replacements:["Warwick","Udyr","Vi"],
      role:"Juggernaut / Bruiser",
      corePath:"Heartsteel  ›  Plated Steelcaps  ›  Sterak's Gage  ›  Titanic Hydra",
      coreNote:"Same core as Top. Sett Jungle uses Q suplex to clear camps quickly. Gank with E into W — E pull forces a cluster, W Haymaker expends stored Grit as true damage. The more the enemy jungle trades into you, the more Grit you store.",
      sideItems:["Thornmail","Dead Man's Plate","Force of Nature","Warmog's Armor","Gargoyle Stoneplate","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Titanic Hydra","Grit W damage + Titanic AoE destroys Juggernaut HP."),I("Thornmail","GW on regen-heavy Juggernauts."),I("Dead Man's Plate","Charge speed on ganks.")],behind:[I("Sterak's Gage","Grit + shield absorbs their walk-down."),I("Thornmail","GW even behind."),I("Plated Steelcaps","Auto reduction.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Titanic Hydra","W Haymaker AoE on dive cluster."),I("Dead Man's Plate","Counter-charge into their dive approach."),I("Sterak's Gage","Grit from their dive = counter Haymaker.")],behind:[I("Sterak's Gage","Grit + shield."),I("Plated Steelcaps","Auto reduction."),I("Dead Man's Plate","Stay mobile for counter-ganks.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Grit + shield absorbs their burst — then Haymaker retaliation."),I("Dead Man's Plate","Chase after their escape."),I("Titanic Hydra","AoE punishes their melee burst window.")],behind:[I("Sterak's Gage","Grit + shield is survival."),I("Gargoyle Stoneplate","Activates during burst combo."),I("Force of Nature","AP assassins.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Titanic Hydra","Grit from their autos = big Haymaker."),I("Thornmail","GW + reflect on their extended trade."),I("Dead Man's Plate","Charge into their duel.")],behind:[I("Sterak's Gage","Grit absorbs their DPS."),I("Thornmail","GW + reflect."),I("Plated Steelcaps","Crit auto reduction.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Grit + shield absorbs burst — Haymaker retaliation."),I("Force of Nature","MR stack on mid lane ganks."),I("Dead Man's Plate","Charge before their combo fires.")],behind:[I("Force of Nature","Non-negotiable MR."),I("Sterak's Gage","Grit + shield."),I("Mercury's Treads","Shorter CC so Haymaker lands.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Thornmail","GW on Vladimir/Swain drain."),I("Force of Nature","MR vs sustained AP."),I("Sterak's Gage","Grit from AP DPS = Haymaker.")],behind:[I("Force of Nature","Non-negotiable."),I("Thornmail","GW."),I("Sterak's Gage","Grit + shield.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Gank speed + bonus damage on arrival."),I("Sterak's Gage","Grit from poke = Haymaker."),I("Force of Nature","MR vs AP poke.")],behind:[I("Sterak's Gage","Grit from poke = retaliation."),I("Force of Nature","MR."),I("Mercury's Treads","Shorter CC.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Dead Man's Plate","Gank approach speed."),I("Titanic Hydra","Haymaker AoE + Titanic proc.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Sterak's Gage","Grit + shield."),I("Gargoyle Stoneplate","Activates during their DPS.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Thornmail","GW on Enchanter heals."),I("Dead Man's Plate","Gank approach speed."),I("Titanic Hydra","AoE hits both Enchanter and carry.")],behind:[I("Thornmail","GW equaliser."),I("Sterak's Gage","Grit + shield."),I("Plated Steelcaps","Carry auto reduction.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC — E + Haymaker requires melee range."),I("Dead Man's Plate","Charge past hooks on gank."),I("Sterak's Gage","Grit from any CC poke = Haymaker.")],behind:[I("Mercury's Treads","Mandatory."),I("Sterak's Gage","Grit + shield."),I("Gargoyle Stoneplate","Activates after CC lands.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Dead Man's Plate","Counter-charge into engage."),I("Titanic Hydra","W AoE during their clustered engage."),I("Sterak's Gage","Grit from engage = counter Haymaker.")],behind:[I("Mercury's Treads","Their CC prevents Haymaker."),I("Sterak's Gage","Grit + shield."),I("Gargoyle Stoneplate","Activates mid-engage.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Dead Man's Plate","Charge through their peel on gank."),I("Titanic Hydra","Haymaker past their body-block."),I("Thornmail","GW on Warden passive sustain.")],behind:[I("Sterak's Gage","Grit + shield."),I("Gargoyle Stoneplate","Activates during peel pressure."),I("Mercury's Treads","Poppy E/Galio taunt.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dead Man's Plate","Charge Singed — E pull into Haymaker cluster."),I("Titanic Hydra","W AoE punishes Singed flings."),I("Thornmail","GW on GP/Udyr regen.")],behind:[I("Sterak's Gage","Grit from their kit = Haymaker."),I("Force of Nature","Kennen/Teemo AP."),I("Mercury's Treads","Teemo blind — Tenacity.")],runes:{...SETT_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
