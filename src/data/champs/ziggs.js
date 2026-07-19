import { I } from "../runeHelpers.js";

const ZIGGS_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Comet punishes every landed Bouncing Bomb from max range — Ziggs's range advantage makes it land far more reliably than most mages. Manaflow Band and Presence of Mind solve the mana problem from constant poke. Coup de Grace finishes targets whittled down by chip damage.",
};

const ZIGGS_BOT_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Overgrowth"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Same Comet-poke core as Mid. Second Wind replaces Presence of Mind in the 2v2 lane — Bot Ziggs eats constant poke without a jungler's peel, and Second Wind out-regens it. Overgrowth stacks HP for the mage-carry build's late-game teamfight presence.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZIGGS — Artillery / Siege Specialist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ziggs", display:"Ziggs", dd:"Ziggs",
  color:"#f39c12", glow:"#ffb84d",
  lanes:["Mid","Bot"],
  roles:{
    Mid:{
      bans:["Yasuo","Hwei","Varus"], replacements:["Xerath","Ahri","Locke"],
      role:"Artillery / Siege Specialist",
      corePath:"Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Void Staff",
      coreNote:"Ziggs plays for max-range poke and objective sieging — his passive bonus tower damage plus Mega Inferno Bomb's huge AoE make him a premier siege specialist. Luden's Echo and Shadowflame convert poke into kill pressure; Rabadon's and Void Staff scale the burst.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Cosmic Drive","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Rabadon's Deathcap","Scaling burst ends the trade outright."),I("Luden's Echo","Poke wears them down before the fight starts.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Mercury's Treads","Shorter CC before the kill."),I("Banshee's Veil","Block their engage tool.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Rabadon's Deathcap","AP edge wins the trade first."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Kite the duelist with mobility."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Cosmic Drive","Mobility to disengage.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade."),I("Luden's Echo","Poke pressure denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots in the poke war."),I("Rabadon's Deathcap","Burst edge wins the exchange."),I("Void Staff","Pen keeps damage up through their MR.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke war.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Mercury's Treads","Reduce CC duration.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...ZIGGS_MID_DEFAULT_RUNES}},
      },
    },
    Bot:{
      bans:["Vayne","Aphelios","Senna"], replacements:["Jinx","Seraphine","Miss Fortune"],
      role:"Off-Meta AP Siege",
      corePath:"Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Void Staff",
      coreNote:"Bot lane Ziggs is an off-meta siege pick when the enemy comp lacks dive potential — same poke-mage build as Mid, but paired with a full-utility support instead of solo laning. Punishes stationary poke duels; weak if the enemy can force all-ins onto him.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Void Staff","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade.")],behind:[I("Zhonya's Hourglass","Stall their all-in window."),I("Mercury's Treads","Shorter CC before the kill."),I("Banshee's Veil","Block their engage tool.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Kite the duelist with mobility."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Cosmic Drive","Mobility to disengage.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade."),I("Luden's Echo","Poke pressure denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Void Staff","Keep damage relevant.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots in the poke war."),I("Rabadon's Deathcap","Burst edge wins the exchange."),I("Void Staff","Pen keeps damage up through their MR.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke war.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Luden's Echo","Out-poke the mirror ADC matchup."),I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Mercury's Treads","Reduce CC duration.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Luden's Echo","Poke pressure negates their sustain.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...ZIGGS_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
