import { I } from "../runeHelpers.js";

const YONE_MID_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Absorb Life","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's stacking attack speed compounds with Yone's passive double-crit uptime. Legend: Alacrity accelerates the ramp further. Second Wind regenerates HP back after eating poke; Overgrowth stacks permanent HP toward his tankier hybrid identity. Current builds run this Precision/Resolve pairing regardless of lane.",
};

const YONE_TOP_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Absorb Life","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Lethal Tempo hybrid-crit core as Mid. Second Wind regenerates HP lost to poke without a jungler's early cover; Overgrowth stacks permanent HP for the extended top-lane duel identity.",
};

// ══════════════════════════════════════════════════════════════════════════
//  YONE — Skirmisher / Hybrid Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"yone", display:"Yone", dd:"Yone",
  color:"#5a4a6e", glow:"#9b8ac4",
  lanes:["Mid","Top"],
  roles:{
    Mid:{
      bans:["Malzahar","Riven","Ekko"], replacements:["Yasuo","Ahri","Katarina"],
      role:"Skirmisher / Hybrid Duelist",
      corePath:"Blade of The Ruined King  ›  Immortal Shieldbow  ›  Infinity Edge  ›  Death's Dance",
      coreNote:"Yone deals hybrid physical and magic damage through Soul Unbound. Immortal Shieldbow's shield covers his early all-in weakness; Infinity Edge doubles his passive crit chance toward the cap; Blade of The Ruined King now leads over Wit's End for the current build, adding %-HP damage and a slow to shore up his lack of a hard engage tool.",
      sideItems:["Berserker's Greaves","Mercury's Treads","Maw of Malmortius","Sterak's Gage","Wit's End","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Death's Dance","Bleed conversion outlasts their sustain."),I("Infinity Edge","Crit damage wins the trade outright."),I("Maw of Malmortius","Shield vs their all-in.")],behind:[I("Sterak's Gage","Shield when their walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Death's Dance","Survive long enough to bleed them out.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Maw of Malmortius","AP divers — lifeline shield."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","AP/AD lead wins the trade first."),I("Maw of Malmortius","Second shield layer.")],behind:[I("Maw of Malmortius","Critical lifeline vs AP assassins."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR + attack speed race."),I("Infinity Edge","Crit damage wins the duel outright."),I("Blade of The Ruined King","% HP damage in extended trades.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain for the extended duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Shield absorbs their opener."),I("Mercury's Treads","Reduce CC in their combo."),I("Immortal Shieldbow","Extra shield layer while pressing.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Sterak's Gage","Survive the full rotation.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Death's Dance","Bleed outlasts their drain."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Maw of Malmortius","Vladimir/Swain drain fights."),I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on approach."),I("Maw of Malmortius","Survive the poke while closing."),I("Infinity Edge","Crit edge wins once you arrive.")],behind:[I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Mercury's Treads","Shorten their key CC from range."),I("Sterak's Gage","Second shield layer.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins outright."),I("Blade of The Ruined King","% HP damage shreds their HP pool."),I("Immortal Shieldbow","Shield vs their peel.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky dive.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of The Ruined King","% HP damage cuts through shields."),I("Infinity Edge","Crit edge burst through the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Bleed outlasts their engage burst."),I("Blade of The Ruined King","% HP damage through their tank stats."),I("Infinity Edge","Crit edge still matters past the frontline.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Death's Dance","Outlast the extended fight.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Blade of The Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YONE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Death's Dance","Sustain through poke/regen kits."),I("Immortal Shieldbow","Shield vs burst setups.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Maw of Malmortius","AP specialists.")],runes:{...YONE_MID_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Jax","Vex","Ekko"], replacements:["Renekton","Sett","Darius"],
      role:"Skirmisher / Hybrid Duelist",
      corePath:"Blade of The Ruined King  ›  Immortal Shieldbow  ›  Infinity Edge  ›  Death's Dance",
      coreNote:"Top Yone plays as a mobile bruiser duelist rather than the Mid poke-into-all-in pattern — same hybrid crit core led by Blade of The Ruined King's %-HP damage, but prioritize Sterak's Gage or Death's Dance earlier for lane sustain against top-lane bullies.",
      sideItems:["Berserker's Greaves","Mercury's Treads","Maw of Malmortius","Sterak's Gage","Wit's End","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Death's Dance","Bleed conversion outlasts their sustain."),I("Infinity Edge","Crit damage wins the trade outright."),I("Maw of Malmortius","Shield vs their all-in.")],behind:[I("Sterak's Gage","Shield when their walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Death's Dance","Survive long enough to bleed them out.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Maw of Malmortius","AP divers — lifeline shield."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","AP/AD lead wins the trade first."),I("Maw of Malmortius","Second shield layer.")],behind:[I("Maw of Malmortius","Critical lifeline vs AP assassins."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR + attack speed race."),I("Infinity Edge","Crit damage wins the duel outright."),I("Blade of The Ruined King","% HP damage in extended trades.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain for the extended duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Shield absorbs their opener."),I("Mercury's Treads","Reduce CC in their combo."),I("Immortal Shieldbow","Extra shield layer while pressing.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Sterak's Gage","Survive the full rotation.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Death's Dance","Bleed outlasts their drain."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Maw of Malmortius","Vladimir/Swain drain fights."),I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on approach."),I("Maw of Malmortius","Survive the poke while closing."),I("Infinity Edge","Crit edge wins once you arrive.")],behind:[I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Mercury's Treads","Shorten their key CC from range."),I("Sterak's Gage","Second shield layer.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins outright."),I("Blade of The Ruined King","% HP damage shreds their HP pool."),I("Immortal Shieldbow","Shield vs their peel.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky dive.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of The Ruined King","% HP damage cuts through shields."),I("Infinity Edge","Crit edge burst through the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Bleed outlasts their engage burst."),I("Blade of The Ruined King","% HP damage through their tank stats."),I("Infinity Edge","Crit edge still matters past the frontline.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Death's Dance","Outlast the extended fight.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of The Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Blade of The Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Death's Dance","Sustain through poke/regen kits."),I("Immortal Shieldbow","Shield vs burst setups.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Maw of Malmortius","AP specialists.")],runes:{...YONE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
