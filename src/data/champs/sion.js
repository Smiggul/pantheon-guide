import { I } from "../runeHelpers.js";

const SION_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Conditioning","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Cash Back"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Grasp procs on every auto and permanently stacks HP, compounding with Heartsteel and W's Soul Furnace HP gain. Demolish converts your HP lead into plates for the splitpush game plan Hullbreaker enables. Overgrowth scales HP further; Approach Velocity chases down targets after an E fear, and Cash Back offsets his mana-hungry early game.",
};

const SION_JGL_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Absolute Focus","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Jungle Sion trends toward a mobility-focused build (Youmuu's Ghostblade, Axiom Arc) rather than the straight bruiser pattern Top uses, and Comet fits the Q-poke-into-gank pattern better than Aftershock does when he's not tanking a lane's worth of aggression. Manaflow Band solves the Q-charge mana cost; Bone Plating and Overgrowth keep him alive through counter-jungle skirmishes.",
};

const SION_MID_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Demolish","Conditioning","Overgrowth"],
  secondary:      "Inspiration",
  secondaryRunes: ["Approach Velocity","Cosmic Insight"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Same Grasp core as Top and current meta's Inspiration secondary. Approach Velocity chases down targets after an E fear during side-lane roams; Cosmic Insight reduces R cooldown for more of the roam-and-threaten pattern that's Mid Sion's actual win condition, since you aren't trying to win lane outright.",
};

const SION_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Font of Life","Conditioning","Overgrowth"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Relentless Hunter"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Aftershock triggers off Q stun or E fear the instant you engage, giving immediate burst resistance. Font of Life heals your ADC for a share of the target's max HP once your CC lands — direct lane value a splitpush-oriented Demolish doesn't offer. Sudden Impact rewards the R dash-engage; Relentless Hunter lets you roam to swing other lanes.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SION — Scaling Tank / Splitpush Specialist
// ══════════════════════════════════════════════════════════════════════════

export default {
    id:      "sion",
    display: "Sion",
    dd:      "Sion",
    role:    "Scaling Tank / Splitpush Specialist",
    color:   "#7f8c8d",
    glow:    "#95a5a6",
    lanes:   ["Top","Mid","Support","Jungle"],

    roles:{
      Top:{
        bans:["Riven","Fiora","Kayle"], replacements:["Ornn","Malphite","Sett"],
        corePath: "Heartsteel  ›  Hollow Radiance  ›  Titanic Hydra  ›  Unending Despair",
        coreNote: "Sion top is a scaling HP stacker and wave controller. Heartsteel stacking defines your mid-game; Hollow Radiance and Unending Despair are the current meta's AoE burn + anti-heal tank pairing, replacing the older Sunfire Aegis/Thornmail combo; Titanic Hydra converts HP into damage while maintaining frontline presence.",

        sideItems: [
          "Plated Steelcaps","Mercury's Treads","Sunfire Aegis","Thornmail",
          "Frozen Heart","Randuin's Omen","Force of Nature",
          "Jak'Sho, The Protean","Hullbreaker","Sterak's Gage"
        ],

        data: {

          JUGGERNAUT: {
            ahead: [
              I("Heartsteel","Outscale through infinite HP stacking — they cannot match late."),
              I("Titanic Hydra","HP → AD conversion lets you win extended trades."),
              I("Hullbreaker","Side lane pressure — force them into losing map states.")
            ],
            behind: [
              I("Bramble Vest","Cuts their sustain early (Darius, Aatrox)."),
              I("Sunfire Aegis","Waveclear safely under tower."),
              I("Frozen Heart","Reduces their DPS in extended fights.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Constant burn during their engage window."),
              I("Heartsteel","Stack HP while they commit into you."),
              I("Titanic Hydra","Punish failed dives with sustained damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces burst from AD divers."),
              I("Frozen Heart","Attack speed slow cripples dive follow-up."),
              I("Thornmail","Punish healing during engages.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Titanic Hydra","Win extended trades via HP scaling damage."),
              I("Heartsteel","They cannot burst through stacked HP."),
              I("Randuin's Omen","Critical vs Yasuo/Yone — deny crit scaling.")
            ],
            behind: [
              I("Frozen Heart","–20% attack speed shuts down duelists."),
              I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),
              I("Sunfire Aegis","Waveclear without contesting fights.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tank vs tank."),
              I("Titanic Hydra","You deal more damage in extended fights."),
              I("Hullbreaker","Force side lane where they cannot match push.")
            ],
            behind: [
              I("Sunfire Aegis","Match waveclear safely."),
              I("Force of Nature","Reduce magic-heavy tank damage."),
              I("Jak'Sho, The Protean","Scale into teamfight durability.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Heartsteel","Stack HP safely — they cannot punish early."),
              I("Randuin's Omen","Cripples crit-based ADCs."),
              I("Hullbreaker","Splitpush — avoid teamfight kiting.")
            ],
            behind: [
              I("Randuin's Omen","Essential vs crit DPS."),
              I("Frozen Heart","Attack speed slow reduces DPS massively."),
              I("Thornmail","Punish lifesteal builds.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Hullbreaker","Abuse side lane vs unconventional champs."),
              I("Heartsteel","Scale freely when they can't contest."),
              I("Titanic Hydra","Waveclear + tower pressure.")
            ],
            behind: [
              I("Sunfire Aegis","Maintain wave control."),
              I("Force of Nature","Counter AP specialists."),
              I("Thornmail","Reduce sustain patterns.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Plated Steelcaps","Negates AD burst patterns before they land."),
              I("Heartsteel","Stacked HP means their combo can't one-shot you."),
              I("Sterak's Gage","Shield absorbs the follow-up after their opener.")
            ],
            behind: [
              I("Sterak's Gage","Non-negotiable — survive the burst window."),
              I("Plated Steelcaps","Reduces the auto damage in their combo."),
              I("Mercury's Treads","Shorter CC before their finisher lands.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Mercury's Treads","Reduce CC chains — lets you press the trade."),
              I("Heartsteel","Stack HP through their poke — they lack kill pressure."),
              I("Force of Nature","Nullify their sustained magic damage over time.")
            ],
            behind: [
              I("Force of Nature","Primary anti-AP spike, mandatory vs burst mages."),
              I("Mercury's Treads","Shorter CC duration to survive the combo."),
              I("Sunfire Aegis","Waveclear safely while behind.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Force of Nature","Shrugs off sustained AP DPS while you press."),
              I("Heartsteel","Stack HP faster than they can drain it."),
              I("Sunfire Aegis","Burn adds up over their long trades.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs Vladimir/Swain drain fights."),
              I("Mercury's Treads","Shorter CC lets you disengage the trade."),
              I("Sterak's Gage","Shield buys time to reach your items.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Force of Nature","Move speed + MR walks through poke to engage."),
              I("Heartsteel","Stack HP freely under their poke pressure."),
              I("Hullbreaker","Side-lane away from their siege entirely.")
            ],
            behind: [
              I("Force of Nature","Non-negotiable — the only answer to sustained poke."),
              I("Mercury's Treads","Reduce CC duration from long range."),
              I("Sunfire Aegis","Waveclear without ever contesting the poke.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Thornmail","GW cuts their heal/shield value in the trade."),
              I("Heartsteel","Stack HP freely — they lack kill pressure alone."),
              I("Hullbreaker","Side-lane pressure they can't match without their carry.")
            ],
            behind: [
              I("Thornmail","GW equaliser vs a sustain-heavy lane."),
              I("Force of Nature","MR vs their poke component."),
              I("Sterak's Gage","Shield survives the combined burst.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Mercury's Treads","Shorter hooks — harder to catch out."),
              I("Heartsteel","Stack HP safely from max wave-clear range."),
              I("Sunfire Aegis","Waveclear while avoiding their pick attempts.")
            ],
            behind: [
              I("Mercury's Treads","Mandatory — caught Sion is dead Sion."),
              I("Sterak's Gage","Survive the follow-up after a catch."),
              I("Plated Steelcaps","Reduce damage if they connect the hook.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Heartsteel","Outscale their HP/resist stacking over time."),
              I("Titanic Hydra","HP → AD keeps damage relevant vs their mitigation."),
              I("Thornmail","GW cuts Tahm Kench/Shen passive sustain.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling resistances match their stat check."),
              I("Force of Nature","MR vs Galio/K'Sante AP damage."),
              I("Sterak's Gage","Survive their peel long enough to scale.")
            ],
            runes: { ...SION_TOP_DEFAULT_RUNES },
          },
        },
      },

      Mid:{
        bans:["Akali","Fizz","Yasuo"], replacements:["Galio","Malphite","Aurelion Sol"],
        skillOrder:["W","Q","E"], // AP Mid Sion maxes the shield (W) first, unlike tank Top/Jungle Q>W>E
        corePath: "Heartsteel  ›  Hollow Radiance  ›  Titanic Hydra  ›  Unending Despair",
        coreNote: "Mid Sion is a wave-control disruptor. You don't win lane — you neutralize it, then impact side lanes with R and shove priority. Hollow Radiance and Unending Despair are the current AoE burn + anti-heal core, ahead of the older Sunfire Aegis/Force of Nature pattern.",

        sideItems: [
          "Mercury's Treads","Plated Steelcaps","Sunfire Aegis","Force of Nature",
          "Frozen Heart","Randuin's Omen",
          "Abyssal Mask","Jak'Sho, The Protean"
        ],

        data: {

          BURST_MAGE: {
            ahead: [
              I("Mercury's Treads","Reduce CC chains — enables aggression."),
              I("Heartsteel","Stack HP while they lack kill pressure."),
              I("Force of Nature","Completely nullifies their damage over time.")
            ],
            behind: [
              I("Force of Nature","Primary anti-AP spike."),
              I("Mercury's Treads","Shorter CC duration."),
              I("Sunfire Aegis","Waveclear safely under pressure.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Plated Steelcaps","Negates AD burst patterns."),
              I("Heartsteel","They cannot one-shot through stacked HP."),
              I("Titanic Hydra","Punish after failed burst.")
            ],
            behind: [
              I("Frozen Heart","Reduces follow-up DPS."),
              I("Plated Steelcaps","Survive lane phase."),
              I("Sunfire Aegis","Waveclear safely.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Force of Nature","Shrug off poke."),
              I("Heartsteel","Scale freely under pressure."),
              I("Hullbreaker","Force side lane away from poke.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs poke."),
              I("Mercury's Treads","Reduce CC from long range."),
              I("Sunfire Aegis","Waveclear without interaction.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Force of Nature","Shrugs off their sustained magic damage."),
              I("Heartsteel","Stack HP faster than they can drain it."),
              I("Sunfire Aegis","Burn adds up over their long trades.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs Vladimir/Swain drain fights."),
              I("Mercury's Treads","Shorter CC lets you disengage the trade."),
              I("Abyssal Mask","MR + damage amp vs their kit.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Heartsteel","Outscale their HP stacking with your own."),
              I("Titanic Hydra","HP → AD wins the wave-clear war."),
              I("Sunfire Aegis","Burn adds up while you soak their push.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces auto damage from their all-in."),
              I("Frozen Heart","Attack speed slow blunts their DPS."),
              I("Abyssal Mask","MR + damage amp if they build hybrid.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Burn during their engage window."),
              I("Heartsteel","Stack HP while they commit into you."),
              I("Titanic Hydra","Punish a failed dive with sustained damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces burst from AD divers."),
              I("Frozen Heart","Attack speed slow cripples the follow-up."),
              I("Abyssal Mask","Extra MR + damage amp on their engage.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Titanic Hydra","Win extended trades via HP-scaling damage."),
              I("Heartsteel","They cannot burst through stacked HP."),
              I("Randuin's Omen","Crit reduction denies Yasuo/Yone scaling.")
            ],
            behind: [
              I("Frozen Heart","Attack speed slow shuts down duelists."),
              I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),
              I("Sunfire Aegis","Waveclear without contesting the duel.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Randuin's Omen","Cripples crit-based ADC damage."),
              I("Heartsteel","Stack HP safely from lane priority."),
              I("Titanic Hydra","Punish their positioning in skirmishes.")
            ],
            behind: [
              I("Randuin's Omen","Essential vs crit DPS."),
              I("Frozen Heart","Attack speed slow reduces DPS massively."),
              I("Plated Steelcaps","Survive extended fights.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Abyssal Mask","MR + damage amp punishes their shield spam."),
              I("Heartsteel","Stack HP freely — no kill pressure alone."),
              I("Sunfire Aegis","Burn pressures both members of the lane.")
            ],
            behind: [
              I("Abyssal Mask","Core defensive value vs poke + shields."),
              I("Force of Nature","Anti-AP sustain if they poke hard."),
              I("Jak'Sho, The Protean","Scale into teamfight durability.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Mercury's Treads","Shorter hooks — harder to catch out."),
              I("Heartsteel","Stack HP safely from max wave-clear range."),
              I("Sunfire Aegis","Waveclear while avoiding pick attempts.")
            ],
            behind: [
              I("Mercury's Treads","Mandatory — caught Sion loses tempo hard."),
              I("Plated Steelcaps","Reduce damage if the hook connects."),
              I("Jak'Sho, The Protean","Scaling durability for the rest of the game.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tank vs tank."),
              I("Titanic Hydra","More damage output in extended fights."),
              I("Sunfire Aegis","Burn while they can't punish your wave control.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling durability matches their stat check."),
              I("Force of Nature","Reduce magic-heavy tank damage."),
              I("Mercury's Treads","Shorter stuns from their engage.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Heartsteel","Outscale their HP/resist stacking over time."),
              I("Titanic Hydra","HP → AD keeps damage relevant vs mitigation."),
              I("Abyssal Mask","MR + damage amp if they build hybrid resists.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling resistances match their stat check."),
              I("Force of Nature","MR vs Galio/K'Sante AP damage."),
              I("Randuin's Omen","Crit reduction if paired with a marksman.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Heartsteel","Scale freely when they can't punish farming."),
              I("Sunfire Aegis","Waveclear + tower pressure."),
              I("Titanic Hydra","HP → AD punishes their kit's low burst.")
            ],
            behind: [
              I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),
              I("Mercury's Treads","Reduce blind/stun duration."),
              I("Plated Steelcaps","Reduce sustain-pattern auto damage.")
            ],
            runes: { ...SION_MID_DEFAULT_RUNES },
          },
        },
      },

      Jungle:{
        bans:["Udyr","Kindred","Lillia"], replacements:["Amumu","Zac","Warwick"],
        corePath: "Sunfire Aegis  ›  Heartsteel  ›  Titanic Hydra  ›  Thornmail",
        coreNote: "Sion jungle plays for scaling and objective control. Clear speed is stable, but your value comes from mid-game frontline and engage.",

        sideItems: [
          "Plated Steelcaps","Mercury's Treads",
          "Frozen Heart","Randuin's Omen",
          "Force of Nature","Jak'Sho, The Protean"
        ],

        data: {

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Win skirmishes through burn damage."),
              I("Heartsteel","Stack HP during fights."),
              I("Titanic Hydra","Convert HP into damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduce incoming burst."),
              I("Frozen Heart","Cripples dive follow-up."),
              I("Thornmail","Punish healing.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Heartsteel","Outscale burst champs."),
              I("Sunfire Aegis","Punish close fights."),
              I("Titanic Hydra","Win extended skirmishes.")
            ],
            behind: [
              I("Plated Steelcaps","Reduce burst."),
              I("Frozen Heart","Lower DPS window."),
              I("Randuin's Omen","Extra survivability.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tanks."),
              I("Titanic Hydra","Better damage output."),
              I("Sunfire Aegis","Objective control.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling durability."),
              I("Force of Nature","Anti-AP tank option."),
              I("Thornmail","Reduce healing.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          MARKSMAN: {
            ahead: [
              I("Randuin's Omen","Cripple ADC damage."),
              I("Heartsteel","Stack freely."),
              I("Titanic Hydra","Punish positioning.")
            ],
            behind: [
              I("Randuin's Omen","Mandatory vs crit."),
              I("Frozen Heart","Reduce DPS."),
              I("Plated Steelcaps","Survive fights.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Heartsteel","Outscale their HP stacking on ganks."),
              I("Titanic Hydra","HP → AD wins the skirmish after your gank lands."),
              I("Thornmail","GW cuts their sustain if the fight drags.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces auto damage from a counter-gank."),
              I("Frozen Heart","Attack speed slow blunts their DPS."),
              I("Sunfire Aegis","Waveclear/objective damage safely.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Titanic Hydra","Win extended skirmishes via HP-scaling damage."),
              I("Heartsteel","They cannot burst through stacked HP."),
              I("Randuin's Omen","Crit reduction denies Yasuo/Yone/Kayn.")
            ],
            behind: [
              I("Frozen Heart","Attack speed slow shuts down duelists."),
              I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),
              I("Sunfire Aegis","Clear camps without contesting them directly.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Mercury's Treads","Reduce CC chains on an invade or gank."),
              I("Heartsteel","Stack HP through their poke."),
              I("Force of Nature","Nullifies sustained magic damage over time.")
            ],
            behind: [
              I("Force of Nature","Mandatory anti-AP spike."),
              I("Mercury's Treads","Shorter CC to survive an invade."),
              I("Sunfire Aegis","Clear safely while behind.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Force of Nature","Shrugs off sustained AP DPS on invades."),
              I("Heartsteel","Stack HP faster than they can drain it."),
              I("Sunfire Aegis","Burn adds up over their long fights.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs Vladimir/Swain drain fights."),
              I("Mercury's Treads","Shorter CC lets you disengage."),
              I("Jak'Sho, The Protean","Scaling durability for the rest of the game.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Force of Nature","Move speed + MR walks through poke on the gank path."),
              I("Heartsteel","Stack HP freely under their poke pressure."),
              I("Mercury's Treads","Shorter CC lets you close the distance.")
            ],
            behind: [
              I("Force of Nature","Non-negotiable — the answer to sustained poke."),
              I("Mercury's Treads","Reduce CC duration from long range."),
              I("Sunfire Aegis","Clear camps without contesting the poke.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Thornmail","GW cuts their heal/shield value in a skirmish."),
              I("Heartsteel","Stack HP freely — no kill pressure alone."),
              I("Sunfire Aegis","Burn pressures both members of the lane you gank.")
            ],
            behind: [
              I("Thornmail","GW equaliser vs a sustain-heavy bot lane."),
              I("Force of Nature","MR vs their poke component."),
              I("Jak'Sho, The Protean","Scaling durability into the late game.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Mercury's Treads","Shorter hooks — harder to counter-catch on invades."),
              I("Heartsteel","Stack HP safely while farming camps."),
              I("Sunfire Aegis","Clear speed while avoiding their vision/pick setups.")
            ],
            behind: [
              I("Mercury's Treads","Mandatory — caught Sion loses the whole gank window."),
              I("Plated Steelcaps","Reduce damage if the hook connects."),
              I("Jak'Sho, The Protean","Scaling durability for the rest of the game.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Heartsteel","Outscale their HP/resist stacking over time."),
              I("Titanic Hydra","HP → AD keeps damage relevant vs mitigation."),
              I("Thornmail","GW cuts Tahm Kench/Shen passive sustain.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling resistances match their stat check."),
              I("Force of Nature","MR vs Galio/K'Sante AP damage."),
              I("Randuin's Omen","Crit reduction if they pair with a marksman.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Heartsteel","Scale freely when they can't punish your clear."),
              I("Sunfire Aegis","Clear speed + objective pressure."),
              I("Titanic Hydra","HP → AD punishes their kit's low burst.")
            ],
            behind: [
              I("Force of Nature","Counters AP specialists (Teemo, Shyvana AP builds)."),
              I("Mercury's Treads","Reduce blind/stun duration."),
              I("Plated Steelcaps","Reduce sustain-pattern auto damage.")
            ],
            runes: { ...SION_JGL_DEFAULT_RUNES },
          },
        },
      },

      Support:{
        bans:["Zyra","Vel'Koz","Blitzcrank"], replacements:["Alistar","Braum","Pantheon"],
        corePath: "Locket of the Iron Solari  ›  Thornmail  ›  Frozen Heart  ›  Force of Nature",
        coreNote: "Support Sion is engage + disruption. You trade lane dominance for teamfight initiation and soak.",

        sideItems: [
          "Mercury's Treads","Plated Steelcaps",
          "Knight's Vow","Zeke's Convergence",
          "Abyssal Mask","Randuin's Omen"
        ],

        data: {

          MARKSMAN: {
            ahead: [
              I("Locket of the Iron Solari","Protect your ADC in trades."),
              I("Thornmail","Punish sustain."),
              I("Frozen Heart","Reduce their DPS.")
            ],
            behind: [
              I("Locket of the Iron Solari","Teamfight shielding."),
              I("Knight's Vow","Protect carry."),
              I("Frozen Heart","Reduce damage output.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          ENCHANTER: {
            ahead: [
              I("Thornmail","Reduce healing/shield comps."),
              I("Locket of the Iron Solari","Mitigate poke."),
              I("Force of Nature","Reduce AP poke.")
            ],
            behind: [
              I("Locket of the Iron Solari","Core defensive value."),
              I("Knight's Vow","Play peel."),
              I("Force of Nature","Anti-AP sustain.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          CATCHER: {
            ahead: [
              I("Locket of the Iron Solari","Negate pick attempts."),
              I("Frozen Heart","Reduce follow-up damage."),
              I("Thornmail","Punish engage.")
            ],
            behind: [
              I("Locket of the Iron Solari","Survive picks."),
              I("Mercury's Treads","Reduce CC."),
              I("Knight's Vow","Peel instead of engage.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          JUGGERNAUT: {
            ahead: [
              I("Locket of the Iron Solari","Shields your ADC through their walk-down."),
              I("Thornmail","GW cuts their sustain in the 2v2."),
              I("Zeke's Convergence","Amplifies your ADC's follow-up damage.")
            ],
            behind: [
              I("Knight's Vow","Share damage taken so your ADC survives."),
              I("Plated Steelcaps","Reduces auto damage vs their press."),
              I("Frozen Heart","Attack speed slow blunts their DPS.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          DIVER: {
            ahead: [
              I("Locket of the Iron Solari","Shields your ADC before the dive lands."),
              I("Zeke's Convergence","Amplify damage during the skirmish."),
              I("Thornmail","Punish their healing during engages.")
            ],
            behind: [
              I("Knight's Vow","Share the burst so your ADC survives the dive."),
              I("Plated Steelcaps","Reduces burst from AD divers."),
              I("Mercury's Treads","Shorter CC on the engage.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          ASSASSIN: {
            ahead: [
              I("Locket of the Iron Solari","Shields the ADC before the burst lands."),
              I("Zeke's Convergence","Amplifies retaliation damage."),
              I("Mercury's Treads","Shorter CC before their finisher.")
            ],
            behind: [
              I("Knight's Vow","Share the damage that would otherwise one-shot your ADC."),
              I("Mercury's Treads","Reduce the CC that opens their combo."),
              I("Abyssal Mask","MR + damage amp if focused yourself.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          SKIRMISHER: {
            ahead: [
              I("Locket of the Iron Solari","Shields your ADC in the 2v2 skirmish."),
              I("Thornmail","GW punishes their sustain in the duel."),
              I("Zeke's Convergence","Amplify ADC damage in extended fights.")
            ],
            behind: [
              I("Knight's Vow","Share damage so your ADC survives the duel."),
              I("Frozen Heart","Attack speed slow shuts down the duelist."),
              I("Plated Steelcaps","Flat reduction vs auto-heavy champs.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          BURST_MAGE: {
            ahead: [
              I("Mercury's Treads","Reduce CC chains — enables your engage."),
              I("Locket of the Iron Solari","Shields your ADC through their combo."),
              I("Zeke's Convergence","Amplify punish damage after they burst.")
            ],
            behind: [
              I("Mercury's Treads","Shorter CC before their combo lands on your ADC."),
              I("Knight's Vow","Share the burst damage."),
              I("Abyssal Mask","MR + damage amp if focused.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          BATTLEMAGE: {
            ahead: [
              I("Force of Nature","Shrugs off their sustained magic damage."),
              I("Locket of the Iron Solari","Shields your ADC through the drain."),
              I("Thornmail","GW cuts Vladimir/Swain healing.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs sustained AP drain."),
              I("Knight's Vow","Share the damage in the extended fight."),
              I("Abyssal Mask","MR + damage amp vs their kit.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          ARTILLERY: {
            ahead: [
              I("Mercury's Treads","Reduce CC duration from long range."),
              I("Locket of the Iron Solari","Shields your ADC from poke chip."),
              I("Zeke's Convergence","Amplify damage once you close the gap.")
            ],
            behind: [
              I("Force of Nature","MR + move speed vs sustained poke."),
              I("Mercury's Treads","Reduce CC duration."),
              I("Knight's Vow","Share the poke damage with your ADC.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          VANGUARD: {
            ahead: [
              I("Locket of the Iron Solari","Shields your team through their engage."),
              I("Thornmail","GW cuts their sustain in the fight."),
              I("Zeke's Convergence","Amplify your ADC's counter-engage damage.")
            ],
            behind: [
              I("Knight's Vow","Share damage taken during their initiation."),
              I("Force of Nature","MR vs Malphite/Gragas AP damage."),
              I("Mercury's Treads","Shorter stuns from their engage chain.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          WARDEN: {
            ahead: [
              I("Zeke's Convergence","Amplify ADC damage past their body-block."),
              I("Thornmail","GW cuts Tahm Kench/Shen passive sustain."),
              I("Locket of the Iron Solari","Shields your team through the peel war.")
            ],
            behind: [
              I("Knight's Vow","Share damage through the extended peel war."),
              I("Force of Nature","MR vs Galio/K'Sante AP damage."),
              I("Randuin's Omen","Crit reduction if paired with a marksman.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },

          SPECIALIST: {
            ahead: [
              I("Locket of the Iron Solari","Shields your lane through their poke/kit."),
              I("Zeke's Convergence","Amplify damage in skirmishes."),
              I("Thornmail","GW cuts their sustain patterns.")
            ],
            behind: [
              I("Force of Nature","Counters AP specialists (Teemo, Kennen)."),
              I("Mercury's Treads","Reduce blind/stun duration."),
              I("Knight's Vow","Share damage while you figure out the matchup.")
            ],
            runes: { ...SION_SUP_DEFAULT_RUNES },
          },
        },
      },

    },
  };
