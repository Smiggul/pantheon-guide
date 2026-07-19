import { I } from "../runeHelpers.js";

const AHRI_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute detonates off Charm into Orb of Deception into an auto for guaranteed burst on any all-in. Cheap Shot adds true damage to a charmed (impaired) target. Grisly Mementos stacks AP and slow resist on every takedown. Ultimate Hunter reduces Spirit Rush cooldown for more reset windows. Manaflow Band solves the early mana strain from constant Q poke.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AHRI — Burst Mage / Mobile Assassin
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ahri", display:"Ahri", dd:"Ahri",
  color:"#e8a4c9", glow:"#f7c6de",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Hwei","Qiyana","Annie"], replacements:["Katarina","Locke","Xerath"],
      role:"Burst Mage / Mobile Assassin",
      corePath:"Malignance  ›  Shadowflame  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
      coreNote:"Ahri plays for poke-into-burst combos. Malignance now edges out Luden's Echo as the rush item — the ability haste means more Charm/Orb casts per fight. Shadowflame amplifies the killing blow on low-HP targets; Zhonya's protects the all-in dive, and Rabadon's caps off a pure burst mage spike.",
      sideItems:["Sorcerer's Shoes","Mercury's Treads","Banshee's Veil","Cosmic Drive","Morellonomicon","Void Staff","Luden's Echo"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts before they close."),I("Rabadon's Deathcap","Scaling burst ends the trade outright."),I("Luden's Echo","Poke wears them down before the fight starts.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Mercury's Treads","Shorter CC before the kill."),I("Banshee's Veil","Block their engage tool.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Rabadon's Deathcap","AP lead wins the trade first."),I("Zhonya's Hourglass","Insurance even with a lead.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Kite the duelist with mobility."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Cosmic Drive","Mobility to disengage.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade."),I("Luden's Echo","Poke pressure denies their setup.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots on approach."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration from range."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Mercury's Treads","Reduce CC duration.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Shorter root/bind duration.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Mercury's Treads","Reduce blind/stun duration."),I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups.")],runes:{...AHRI_MID_DEFAULT_RUNES}},
      },
    },
  },
};
