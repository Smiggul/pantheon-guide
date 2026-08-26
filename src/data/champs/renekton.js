import { I } from "../runeHelpers.js";

const RENEKTON_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks on every E-W-Q combo and heals massively on empowered Q. Legend: Alacrity vs auto-heavy matchups, swap to Haste vs poke/CC-heavy lanes. Bone Plating makes short trades winnable. Unflinching is crucial — Renekton needs to stick to targets and CC resistance keeps him connected.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RENEKTON — Diver / Bruiser
//  ── HOW TO ADD MORE CHAMPIONS: copy this entire block (from the opening
//     { down to the closing },) and paste it below. Change display, dd,
//     role, color, glow, lanes, corePath, coreNote, sideItems, and data.
// ══════════════════════════════════════════════════════════════════════════

export default {
    id:      "renekton",
    display:  "Renekton",
    dd:       "Renekton",       // champions/Renekton.png
    role:     "Diver / Bruiser",
    color:    "#e67e22",
    glow:     "#f39c12",
    lanes:    ["Top","Jungle"],

    roles:{
          Top:{
          bans:         ["Quinn","Dr. Mundo","Cho'Gath"],
          replacements: ["Sett","Pantheon","Wukong"],
          corePath: "Eclipse  ›  Plated Steelcaps  ›  Black Cleaver  ›  Death's Dance",
          coreNote: "Eclipse first — the two-hit proc plus its shield and move-speed turn an empowered-W stun into a burst-and-stick pattern that snowballs the early skirmish window. Plated Steelcaps second blunts the auto-attack harass his lane bullies rely on. Black Cleaver third stacks armor shred with every E pass, and its haste keeps the empowered-ability cadence flowing. Death's Dance fourth converts their counter-burst into bleed so you survive extended teamfights.",
          sideItems: ["Plated Steelcaps","Mercury's Treads","Sterak's Gage","Serylda's Grudge","Lord Dominik's Regards","Serpent's Fang","Mortal Reminder","Frozen Heart","Maw of Malmortius","Randuin's Omen"],
          data: {
            JUGGERNAUT: {
              ahead:  [ I("Serylda's Grudge","Slow + armor pen keeps Juggernauts from walking you down when ahead."), I("Lord Dominik's Regards","% pen into their HP stacks — their armor investment becomes worthless."), I("Trinity Force","Sheen procs in extended trades outdamage their slow cadence.") ],
              behind: [ I("Death's Dance","Delay Darius/Mundo burst into bleed; W stun window reopens."), I("Sterak's Gage","Shield vs their walk-down damage keeps you alive for one more Q."), I("Plated Steelcaps","Flat auto reduction vs every Juggernaut's auto-weave between abilities.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            DIVER: {
              ahead:  [ I("Sundered Sky","Healing burst wins mirror fights — Q proc keeps you healthy."), I("Trinity Force","Sheen proc on empowered W out-bursts mirror Divers who match your dive."), I("Black Cleaver","Shred their armor before they can defensive item.") ],
              behind: [ I("Sterak's Gage","Shield when Camille/Irelia survives your burst and all-ins back."), I("Death's Dance","Bleed delay gives you time to land another empowered W stun."), I("Plated Steelcaps","Auto reduction on Irelia/Lee Sin chains — every hit matters behind.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            ASSASSIN: {
              ahead:  [ I("Trinity Force","Sheen proc punishes their cooldown windows between dashes."), I("Sterak's Gage","Secondary shield vs one-shots when you're ahead and they're desperate."), I("Black Cleaver","Fast shred before they can reset and re-engage.") ],
              behind: [ I("Sterak's Gage","Shield vs Zed Ult / Akali burst — mandatory when behind."), I("Maw of Malmortius","AP assassins (Akali/Ekko) — magic shield + omnivamp covers their combo."), I("Mercury's Treads","Shorter CC durations so your W stun can still land.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            SKIRMISHER: {
              ahead:  [ I("Sundered Sky","Healing wins extended duels vs Fiora/Jax — Q proc sustains you."), I("Trinity Force","Sheen procs outdamage Skirmisher sustained DPS while ahead."), I("Black Cleaver","Shred before they stack armor — win the stat check early.") ],
              behind: [ I("Frozen Heart","–20% nearby attack speed. Completely dismantles Fiora/Tryndamere."), I("Randuin's Omen","Crit reduction vs Yasuo/Yone crit builds — AoE slow helps peel."), I("Sterak's Gage","Shield when they survive your burst and try to extended-fight back.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            BURST_MAGE: {
              ahead:  [ I("Trinity Force","Dash in, W stun during their cast, Sheen proc = kill before they react."), I("Sterak's Gage","Shield absorbs their burst while you complete the W-Q combo ahead."), I("Black Cleaver","Close fast, shred, kill before their cooldowns reset.") ],
              behind: [ I("Maw of Malmortius","<35% magic shield absorbs Syndra/Orianna full combo when behind."), I("Sterak's Gage","Second shield layer — stacked with Maw you often survive one-shots."), I("Mercury's Treads","Shorter stun duration = your W stun can still land on entry.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            BATTLEMAGE: {
              ahead:  [ I("Mortal Reminder","Vladimir/Swain sustain shut down by GW 40% on every auto."), I("Trinity Force","Sheen proc burst defeats their sustained damage when ahead."), I("Black Cleaver","Armor shred while you have the lead — force the fight.") ],
              behind: [ I("Maw of Malmortius","Magic shield sustains through AP DPS window when behind."), I("Mortal Reminder","GW is your only healing counter even behind — buy it."), I("Death's Dance","Bleed delay vs Cassiopeia/Viktor tick damage when item-deficient.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            ARTILLERY: {
              ahead:  [ I("Trinity Force","Sprint passive closes the poke gap; Sheen proc on arrival = kill."), I("Serylda's Grudge","Slow on E prevents Artillery kiting out after you dash in."), I("Black Cleaver","Once you close, fast shred + empowered Q destroys squishy Artillery.") ],
              behind: [ I("Sterak's Gage","Poke accumulated while walking over — shield keeps you alive on arrival."), I("Mercury's Treads","Shorter Xerath root / Vel'Koz CC so your dash arrives uninterrupted."), I("Plated Steelcaps","Reduces auto-weave poke they add between skillshots during approach.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            MARKSMAN: {
              ahead:  [ I("Plated Steelcaps","ADC auto reduction — critical even ahead. Every trade benefits."), I("Trinity Force","Sprint + Sheen proc = delete the ADC before Enchanter can react."), I("Black Cleaver","6-stack shred on a tanky ADC building Bloodthirster/Shieldbow.") ],
              behind: [ I("Plated Steelcaps","Non-negotiable — sustained ADC physical DPS kills you when behind."), I("Sterak's Gage","Shield vs ADC burst + Enchanter follow-up when behind."), I("Death's Dance","Delay their DPS window; empowered W stun can still turn the fight.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            ENCHANTER: {
              ahead:  [ I("Serpent's Fang","⭐ 50% shield strip on dash-in — Lulu/Janna can't save their carry."), I("Trinity Force","Sprint to Enchanter before they cast their next shield."), I("Black Cleaver","Shred the carry once Enchanter is gone.") ],
              behind: [ I("Serpent's Fang","Still priority even behind — their shields negate all your damage."), I("Mortal Reminder","GW limits Soraka/Nami healing even when you can't engage freely."), I("Sterak's Gage","Survive Lulu polymorph + carry burst while item-deficient.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            CATCHER: {
              ahead:  [ I("Mercury's Treads","Shorter hook/root chains — maintain mobility for dash combos."), I("Trinity Force","Sprint past hooks to reach carry; Sheen proc on arrival."), I("Serpent's Fang","Zac/Morgana shields absorbed on dash-in.") ],
              behind: [ I("Mercury's Treads","Nautilus/Morgana CC completely stops your dashes when behind — mandatory."), I("Sterak's Gage","Survive burst after their hook lands when you couldn't dodge."), I("Maw of Malmortius","Zyra/Morgana AP follow-up after root — magic shield buys the W window.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            VANGUARD: {
              ahead:  [ I("Black Cleaver","6 stacks shred Malphite/Ornn while disrupted — kill the engage tank."), I("Trinity Force","Dive in during their engage cooldown, Sheen proc cleans up."), I("Lord Dominik's Regards","% pen while ahead makes their armor investment worthless.") ],
              behind: [ I("Mercury's Treads","Malphite Ult, Leona chain, Ornn CC — all shorter when behind."), I("Sterak's Gage","Survive burst that follows a Vanguard's initiation."), I("Plated Steelcaps","Jarvan IV/Wukong have AD scaling — reduce auto-weave when behind.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            WARDEN: {
              ahead:  [ I("Serpent's Fang","Braum passive / Shen Ult shields stripped on dash-in while ahead."), I("Lord Dominik's Regards","% pen turns their armor stacking into irrelevant stats."), I("Black Cleaver","Shred Warden armor to expose the carry behind them.") ],
              behind: [ I("Black Cleaver","Chip armor gradually — patience behind with Cleaver still opens them."), I("Mercury's Treads","Poppy E / Galio taunt — shorter duration when behind."), I("Sterak's Gage","Survive carry + Warden combined burst when item-deficient.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            SPECIALIST: {
              ahead:  [ I("Trinity Force","Sprint closes on Singed/Quinn before they disengage; Sheen punishes."), I("Serylda's Grudge","Slow on E means Singed's kite loop finally stops working."), I("Black Cleaver","Close on Gangplank, fast shred, kill before he can orange barrel poke.") ],
              behind: [ I("Plated Steelcaps","Graves/Quinn auto reliance — reduce each hit when behind."), I("Sterak's Gage","Survive Kennen stun + ult or Singed flip when item-deficient."), I("Mortal Reminder","GP Oranges / passive heal — GW 40% on all physical damage.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
          },
        },

        Jungle:{
          bans:         ["Nunu & Willump","Warwick","Rammus"],
          replacements: ["Wukong","Sett","Volibear"],
          role:"Diver / Bruiser (off-meta)",
          corePath: "Eclipse  ›  Black Cleaver  ›  Death's Dance  ›  Spirit Visage",
          coreNote: "Renekton Jungle is a rare, weak pick (D tier, near-zero pick rate) — playable but clearly worse than his top lane identity. Eclipse gives the early gank burst spike; Black Cleaver shreds through skirmishes; Death's Dance and Spirit Visage sustain through the empowered-W all-in pattern that carries over from top lane.",
          sideItems: ["Plated Steelcaps","Mercury's Treads","Sterak's Gage","Randuin's Omen","Maw of Malmortius","Frozen Heart"],
          data: {
            JUGGERNAUT: {
              ahead:  [ I("Black Cleaver","Shred their armor before they can stack HP."), I("Eclipse","Burst wins the skirmish before they close."), I("Death's Dance","Outlast their sustain in the fight.") ],
              behind: [ I("Plated Steelcaps","Reduces auto damage from a counter-gank."), I("Sterak's Gage","Shield when their walk-down connects."), I("Spirit Visage","Amplify your own sustain.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            DIVER: {
              ahead:  [ I("Eclipse","Win the burst race before their combo lands."), I("Black Cleaver","Shred through the mirror dive."), I("Death's Dance","Outlast their engage burst.") ],
              behind: [ I("Sterak's Gage","Survive their engage before yours."), I("Plated Steelcaps","Irelia/Camille auto chains."), I("Mercury's Treads","Shorter CC on their initiation.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            ASSASSIN: {
              ahead:  [ I("Eclipse","Out-burst them on the invade."), I("Sterak's Gage","Shield eats their opener."), I("Death's Dance","Bleed conversion after their combo.") ],
              behind: [ I("Sterak's Gage","Non-negotiable — survive the burst window."), I("Maw of Malmortius","AP assassins — lifeline shield."), I("Mercury's Treads","Shorter CC before the finisher.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            SKIRMISHER: {
              ahead:  [ I("Eclipse","Burst wins the stat check before they close."), I("Black Cleaver","Shred through the extended skirmish."), I("Death's Dance","Out-sustain the duel.") ],
              behind: [ I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Kayn."), I("Sterak's Gage","Survive their all-in spike."), I("Frozen Heart","AS slow shuts down duelists.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            BURST_MAGE: {
              ahead:  [ I("Eclipse","Close the gap before their combo lands."), I("Maw of Malmortius","Shield absorbs the burst."), I("Mercury's Treads","Reduce the CC in their combo.") ],
              behind: [ I("Maw of Malmortius","Mandatory vs burst mages."), I("Mercury's Treads","Shorter CC on invades."), I("Sterak's Gage","Survive the full rotation.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            BATTLEMAGE: {
              ahead:  [ I("Black Cleaver","Shred through their scaling durability."), I("Eclipse","Burst before they can drain back."), I("Death's Dance","Bleed outlasts their sustain.") ],
              behind: [ I("Maw of Malmortius","Vlad/Swain drain fights."), I("Mercury's Treads","Shorter CC to disengage."), I("Spirit Visage","Amp healing to keep pace.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            ARTILLERY: {
              ahead:  [ I("Eclipse","Gap-close instantly with the dash."), I("Mercury's Treads","Reduce CC duration on the approach."), I("Sterak's Gage","Survive the poke while closing.") ],
              behind: [ I("Mercury's Treads","Shorten their key CC from range."), I("Maw of Malmortius","Survive the poke-to-burst combo."), I("Sterak's Gage","Second shield layer.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            MARKSMAN: {
              ahead:  [ I("Eclipse","Burst kills the ADC on arrival."), I("Black Cleaver","Shred through their armor stack."), I("Death's Dance","Survive their DPS while eating them.") ],
              behind: [ I("Plated Steelcaps","Non-negotiable auto reduction."), I("Sterak's Gage","Survive the peel + DPS."), I("Randuin's Omen","Crit reduction vs their build.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            ENCHANTER: {
              ahead:  [ I("Eclipse","Burst through their peel."), I("Black Cleaver","Chew through the shield economy."), I("Death's Dance","Sustain through the combined burst.") ],
              behind: [ I("Sterak's Gage","Survive the combined burst."), I("Spirit Visage","Out-sustain their heal economy."), I("Mercury's Treads","Reduce their disengage CC.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            CATCHER: {
              ahead:  [ I("Mercury's Treads","Dodge hooks while ganking."), I("Eclipse","Punish a whiffed hook instantly."), I("Black Cleaver","Kill the Catcher before they reset.") ],
              behind: [ I("Mercury's Treads","Mandatory — a caught Renekton wastes the gank."), I("Sterak's Gage","Survive the follow-up after a catch."), I("Maw of Malmortius","AP catchers.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            VANGUARD: {
              ahead:  [ I("Black Cleaver","Shred their frontline for your carries."), I("Eclipse","Burst before their CC chain finishes."), I("Death's Dance","Sustain through the engage.") ],
              behind: [ I("Randuin's Omen","Crit/AS reduction if paired with a carry."), I("Mercury's Treads","Shorter stuns from their engage."), I("Sterak's Gage","Survive the initiation.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            WARDEN: {
              ahead:  [ I("Black Cleaver","Gradual shred still opens Wardens up."), I("Eclipse","Burst through their body-block."), I("Death's Dance","Sustain the peel war.") ],
              behind: [ I("Black Cleaver","Only reliable damage vs stacked resists."), I("Sterak's Gage","Survive their counter-peel."), I("Mercury's Treads","Poppy/Galio CC shortened.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
            SPECIALIST: {
              ahead:  [ I("Eclipse","Run down a kiting Specialist."), I("Black Cleaver","Shred through their kit's mitigation."), I("Death's Dance","Sustain through their poke pattern.") ],
              behind: [ I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."), I("Sterak's Gage","Survive burst setups."), I("Maw of Malmortius","AP specialists.") ],
              runes: { ...RENEKTON_TOP_DEFAULT_RUNES },
            },
          },
        },

    },
  };
