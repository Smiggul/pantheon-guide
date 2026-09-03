import { I } from "../runeHelpers.js";

const SETT_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror now edges out Grasp as the standard Sett Top keystone, stacking on every W auto chain. Legend: Alacrity accelerates his attack-speed-reliant trading pattern. Second Wind sustains through poke pre-6; Unflinching's CC resistance keeps him stuck to targets during the Haymaker window.",
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
  // Off-meta alt: the lethality/tempo Hail of Blades page. Researched 2026-09-03
  // against lolalytics (26.17) + creator VODs — see coreNote for the honest numbers.
  altBuilds:{
    Top: [{
      label: "Hail of Blades (Lethality)",
      tag: "alt",
      corePath: "Stridebreaker  ›  Youmuu's Ghostblade  ›  The Collector  ›  Sterak's Gage",
      coreNote: "A genuine off-meta novelty, not a second meta build — go in with eyes open. Hail of Blades Sett trades the juggernaut identity for an early burst-and-roam tempo: Stridebreaker still opens (the slow is non-negotiable for landing W), then Youmuu's and Collector turn the HoB burst window into assassin-grade damage on squishies. Streamer VODs running it (TheBausffs among them) build exactly this Stride → Youmuu's → Collector line. THE NUMBERS: on patch 26.17 lolalytics puts Hail of Blades Sett Top at roughly 48% over ~800 games at a 0.05% pick rate, versus ~50-52% for the standard Conqueror/Stridebreaker build across ~77k games — so it is about 2-4 points WORSE with a tiny sample behind it. Take it for the playstyle and the surprise factor in a snowball lane, not because it wins more.",
      runes: {
        keystone: "Hail of Blades",
        primary: "Domination",
        primaryRunes: ["Taste of Blood", "Grisly Mementos", "Relentless Hunter"],
        secondary: "Precision",
        secondaryRunes: ["Triumph", "Legend: Alacrity"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Hail of Blades front-loads three rapid autos the instant you commit, which on Sett is unusually strong because his passive (Pit Grit) alternates empowered attacks and his Q resets the auto timer — the burst window lands Q, two empowered hits and the E pull before the enemy can react. Taste of Blood over Sudden Impact deliberately — Nightblue TV tested both Sudden Impact and Cheap Shot across seven games and rated them poor on Sett (his E is a pull, not a true dash, so Sudden Impact procs unreliably), while rating Hail of Blades itself highly. Relentless Hunter turns the roam tempo this build wants into map pressure, which is the one thing that offsets Sett's weak gank pattern. Precision secondary keeps Triumph's kill sustain and the attack speed his chain needs.",
      },
      sideItems: ["Plated Steelcaps", "Ionian Boots of Lucidity", "Serylda's Grudge", "Black Cleaver", "Death's Dance", "Edge of Night", "Overlord's Bloodmail", "Maw of Malmortius"],
    }],
    Jungle: [{
      label: "Hail of Blades (Lethality)",
      tag: "alt",
      corePath: "Hubris  ›  Boots of Swiftness  ›  Voltaic Cyclosword  ›  The Collector",
      coreNote: "The full-lethality assassin build popularised by Nightblue TV — not a bruiser jungle at all. The whole idea rests on one number: The Show Stopper carries a 120% AD ratio, so stacking lethality, AD and crit turns Sett's ultimate into an execute that one-shots a carry outright rather than a teamfight displacement. Hubris opens after blue and snowballs AD off every takedown, Voltaic Cyclosword adds 25 lethality plus the energised slow to stick to targets, and The Collector supplies the crit and its own execute. Boots of Swiftness over Steelcaps, deliberately — reach is Sett's problem, not survivability. BE HONEST ABOUT THIS ONE: Sett Jungle sits near 47% win rate at a 0.05% pick rate, and Nightblue's own verdict after seven games of testing was that Sett has bonus damage to monsters but 'nobody plays him in the jungle because his ganks are dooky' — the build works, the champion's gank pattern is what holds it back. A snowball pocket pick with a genuinely spectacular ceiling, not a ranked default.",
      runes: {
        keystone: "Hail of Blades",
        primary: "Domination",
        primaryRunes: ["Taste of Blood", "Grisly Mementos", "Relentless Hunter"],
        secondary: "Precision",
        secondaryRunes: ["Triumph", "Legend: Alacrity"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Hail of Blades front-loads three rapid autos the instant you commit, which on Sett is unusually strong because his passive (Pit Grit) alternates empowered attacks and his Q resets the auto timer — the burst window lands Q, two empowered hits and the E pull before the enemy can react. Taste of Blood over Sudden Impact deliberately — Nightblue TV tested both Sudden Impact and Cheap Shot across seven games and rated them poor on Sett (his E is a pull, not a true dash, so Sudden Impact procs unreliably), while rating Hail of Blades itself highly. Relentless Hunter turns the roam tempo this build wants into map pressure, which is the one thing that offsets Sett's weak gank pattern. Precision secondary keeps Triumph's kill sustain and the attack speed his chain needs.",
      },
      sideItems: ["Opportunity", "Serylda's Grudge", "Edge of Night", "Axiom Arc", "Youmuu's Ghostblade", "Profane Hydra", "Mercury's Treads", "Sterak's Gage"],
    }],
  },
  roles:{
    Top:{
      bans:["Garen","Gnar","Kled"], replacements:["Renekton","Wukong","Pantheon"],
      role:"Juggernaut / Tank",
      corePath:"Stridebreaker  ›  Black Cleaver  ›  Overlord's Bloodmail  ›  Sterak's Gage",
      coreNote:"Sett's highest-performing Top line on 26.17 (A tier, ~50-52% across ~77k games). Stridebreaker's active slow sticks targets inside Haymaker range; Black Cleaver second is the key addition — Sett's Q and W are both AD-scaling and his auto-Q-auto chain shreds armour fast, so the Cleaver stacks amplify every follow-up hit from you AND your team, while the HP and haste feed his trading pattern directly. Overlord's Bloodmail then converts that HP into damage amp, and Sterak's closes it: Grit (the W mechanic) stores 8% of damage taken as a grey health bar and Haymaker expends it as bonus true damage, so the more he absorbs the harder he punches. Buy boots (Plated Steelcaps vs AD, Mercury's vs CC) after the first item. Heartsteel and Titanic Hydra remain fine alternates if the game goes long.",
      sideItems:["Plated Steelcaps","Warmog's Armor","Gargoyle Stoneplate","Dead Man's Plate","Force of Nature","Mercury's Treads","Thornmail","Heartsteel","Titanic Hydra"],
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
      corePath:"Stridebreaker  ›  Plated Steelcaps  ›  Overlord's Bloodmail  ›  Sterak's Gage",
      coreNote:"Same core as Top. Sett Jungle uses Q suplex to clear camps quickly. Gank with E into W — E pull forces a cluster, W Haymaker expends stored Grit as true damage. The more the enemy jungle trades into you, the more Grit you store.",
      sideItems:["Thornmail","Dead Man's Plate","Force of Nature","Warmog's Armor","Gargoyle Stoneplate","Mercury's Treads","Heartsteel","Titanic Hydra"],
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
