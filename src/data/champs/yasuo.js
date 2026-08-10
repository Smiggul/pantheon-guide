import { I } from "../runeHelpers.js";

const YASUO_MID_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Absorb Life","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Overgrowth","Second Wind"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's stacking attack speed compounds with Yasuo's passive double-crit shield uptime; Legend: Alacrity accelerates the ramp and Absorb Life keeps him healthy through the lane's poke war. The Resolve secondary is the current standard — Second Wind regenerates HP after eating harass and Overgrowth stacks permanent HP toward his tanky-crit late game, replacing the old Domination snowball pairing.",
};

const YASUO_TOP_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Second Wind"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Lethal Tempo hybrid-crit core as Mid, but Top Yasuo plays hit-and-run — kiting in and out of the wave to land Q stacks and auto poke rather than committing to all-ins. Bone Plating and Second Wind replace Domination's kill-snowball runes, since a solo lane offers no jungler cover if a trade goes wrong.",
};

const YASUO_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Absorb Life","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Overgrowth","Second Wind"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Bot Yasuo is a pure all-in pick paired with a CC-heavy support — Absorb Life sustains through the all-in itself rather than poke like Presence of Mind would. Overgrowth and Second Wind cover the 2v2 lane phase before his crit items complete and the all-in pattern takes over.",
};

// ══════════════════════════════════════════════════════════════════════════
//  YASUO — Skirmisher / Mobile Duelist
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"yasuo", display:"Yasuo", dd:"Yasuo",
  color:"#4a6572", glow:"#7fa8b8",
  lanes:["Mid","Top","Bot"],
  roles:{
    Mid:{
      bans:["Vladimir","Annie","Renekton"], replacements:["Yone","Riven","Katarina"],
      role:"Skirmisher / Mobile Duelist",
      corePath:"Immortal Shieldbow  ›  Infinity Edge  ›  Death's Dance  ›  Guardian Angel",
      coreNote:"Yasuo scales off crit chance — Immortal Shieldbow's shield covers his early all-in weakness while feeding lifesteal; Infinity Edge doubles his passive crit chance toward the cap; Death's Dance and Guardian Angel let him dive repeatedly without dying to the follow-up.",
      sideItems:["Berserker's Greaves","Mercury's Treads","Maw of Malmortius","Wit's End","Sterak's Gage","Blade of the Ruined King"],
      data:{
        JUGGERNAUT:{ahead:[I("Death's Dance","Bleed conversion outlasts their sustain."),I("Infinity Edge","Crit damage wins the trade outright."),I("Maw of Malmortius","Shield vs their all-in.")],behind:[I("Sterak's Gage","Shield when their walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Death's Dance","Survive long enough to bleed them out.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Maw of Malmortius","AP divers — lifeline shield."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","AP/AD lead wins the trade first."),I("Maw of Malmortius","Second shield layer.")],behind:[I("Maw of Malmortius","Critical lifeline vs AP assassins."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR + attack speed race."),I("Infinity Edge","Crit damage wins the duel outright."),I("Blade of the Ruined King","% HP damage in extended trades.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain for the extended duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Shield absorbs their opener."),I("Mercury's Treads","Reduce CC in their combo."),I("Immortal Shieldbow","Extra shield layer while pressing.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Sterak's Gage","Survive the full rotation.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Death's Dance","Bleed outlasts their drain."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Maw of Malmortius","Vladimir/Swain drain fights."),I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on approach — Wind Wall blocks the rest."),I("Maw of Malmortius","Survive the poke while closing."),I("Infinity Edge","Crit edge wins once you arrive.")],behind:[I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Mercury's Treads","Shorten their key CC from range."),I("Sterak's Gage","Second shield layer.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins outright."),I("Blade of the Ruined King","% HP damage shreds their HP pool."),I("Immortal Shieldbow","Shield vs their peel.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky dive.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of the Ruined King","% HP damage cuts through shields."),I("Infinity Edge","Crit edge burst through the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Bleed outlasts their engage burst."),I("Blade of the Ruined King","% HP damage through their tank stats."),I("Infinity Edge","Crit edge still matters past the frontline.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Death's Dance","Outlast the extended fight.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Blade of the Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Death's Dance","Sustain through poke/regen kits."),I("Immortal Shieldbow","Shield vs burst setups.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Maw of Malmortius","AP specialists.")],runes:{...YASUO_MID_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Jax","Riven","Fiora"], replacements:["Renekton","Sett","Darius"],
      role:"Skirmisher / Mobile Duelist",
      corePath:"Immortal Shieldbow  ›  Infinity Edge  ›  Death's Dance  ›  Guardian Angel",
      coreNote:"Same crit-scaling core as Mid — Top Yasuo plays a hit-and-run poke-and-kite game instead of an all-in lane, weaving Q stacks and autos between waves rather than committing early.",
      sideItems:["Berserker's Greaves","Mercury's Treads","Maw of Malmortius","Wit's End","Sterak's Gage","Blade of the Ruined King"],
      data:{
        JUGGERNAUT:{ahead:[I("Death's Dance","Bleed conversion outlasts their sustain."),I("Infinity Edge","Crit damage wins the trade outright."),I("Maw of Malmortius","Shield vs their all-in.")],behind:[I("Sterak's Gage","Shield when their walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Death's Dance","Survive long enough to bleed them out.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Infinity Edge","Crit damage punishes the failed dive."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Maw of Malmortius","AP divers — lifeline shield."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","AP/AD lead wins the trade first."),I("Maw of Malmortius","Second shield layer.")],behind:[I("Maw of Malmortius","Critical lifeline vs AP assassins."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR + attack speed race."),I("Infinity Edge","Crit damage wins the duel outright."),I("Blade of the Ruined King","% HP damage in extended trades.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain for the extended duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Shield absorbs their opener."),I("Mercury's Treads","Reduce CC in their combo."),I("Immortal Shieldbow","Extra shield layer while pressing.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Sterak's Gage","Survive the full rotation.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Death's Dance","Bleed outlasts their drain."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Maw of Malmortius","Vladimir/Swain drain fights."),I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on approach — Wind Wall blocks the rest."),I("Maw of Malmortius","Survive the poke while closing."),I("Infinity Edge","Crit edge wins once you arrive.")],behind:[I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Mercury's Treads","Shorten their key CC from range."),I("Sterak's Gage","Second shield layer.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins outright."),I("Blade of the Ruined King","% HP damage shreds their HP pool."),I("Immortal Shieldbow","Shield vs their peel.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky dive.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of the Ruined King","% HP damage cuts through shields."),I("Infinity Edge","Crit edge burst through the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Bleed outlasts their engage burst."),I("Blade of the Ruined King","% HP damage through their tank stats."),I("Infinity Edge","Crit edge still matters past the frontline.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Death's Dance","Outlast the extended fight.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Blade of the Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Death's Dance","Sustain through poke/regen kits."),I("Immortal Shieldbow","Shield vs burst setups.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Maw of Malmortius","AP specialists.")],runes:{...YASUO_TOP_DEFAULT_RUNES}},
      },
    },
    Bot:{
      bans:["Xayah","Kalista","Draven"], replacements:["Jinx","Ziggs","Seraphine"],
      role:"All-In Hyper-Carry",
      corePath:"Blade of the Ruined King  ›  Berserker's Greaves  ›  Immortal Shieldbow  ›  Infinity Edge",
      coreNote:"Bot Yasuo is a pure all-in champion — with a CC-heavy support opening the fight, he looks to go 100-0 rather than trade evenly across the whole laning phase. Blade of the Ruined King moves earlier than in other lanes since its %-HP damage and slow both matter immediately for an all-in playstyle; the rest of the build is identical to Mid/Top.",
      sideItems:["Mercury's Treads","Death's Dance","Maw of Malmortius","Wit's End","Sterak's Gage","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of the Ruined King","% HP damage + slow wins the all-in outright."),I("Death's Dance","Bleed conversion outlasts their sustain."),I("Infinity Edge","Crit damage wins the trade.")],behind:[I("Sterak's Gage","Shield when their walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Death's Dance","Survive long enough to bleed them out.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Immortal Shieldbow","Shield absorbs their engage burst."),I("Blade of the Ruined King","% HP + slow punishes the failed dive."),I("Death's Dance","Outlast their all-in.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Maw of Malmortius","AP divers — lifeline shield."),I("Mercury's Treads","Shorter CC on the engage.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Immortal Shieldbow","Shield eats their burst opener."),I("Infinity Edge","AP/AD lead wins the trade first."),I("Maw of Malmortius","Second shield layer.")],behind:[I("Maw of Malmortius","Critical lifeline vs AP assassins."),I("Sterak's Gage","Survive the burst window."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Wit's End","On-hit MR + attack speed race."),I("Blade of the Ruined King","% HP damage in extended trades."),I("Infinity Edge","Crit damage wins the duel outright.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain for the extended duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Maw of Malmortius","Shield absorbs their opener."),I("Mercury's Treads","Reduce CC in their combo."),I("Immortal Shieldbow","Extra shield layer while pressing.")],behind:[I("Maw of Malmortius","Mandatory lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Sterak's Gage","Survive the full rotation.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Death's Dance","Bleed outlasts their drain."),I("Infinity Edge","Crit edge wins the burst trade.")],behind:[I("Maw of Malmortius","Vladimir/Swain drain fights."),I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration on approach — Wind Wall blocks the rest."),I("Maw of Malmortius","Survive the poke while closing."),I("Infinity Edge","Crit edge wins once you arrive.")],behind:[I("Maw of Malmortius","Survive the poke-to-burst combo."),I("Mercury's Treads","Shorten their key CC from range."),I("Sterak's Gage","Second shield layer.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit war wins the mirror ADC matchup outright."),I("Blade of the Ruined King","% HP damage shreds their HP pool."),I("Immortal Shieldbow","Shield vs their peel.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Mercury's Treads","Reduce CC duration."),I("Guardian Angel","Second life for a risky all-in.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of the Ruined King","% HP damage cuts through shields."),I("Infinity Edge","Crit edge burst through the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Immortal Shieldbow","Shield eats a hook's follow-up."),I("Infinity Edge","Crit edge punishes a whiffed hook."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Mercury's Treads","Shorter root/bind duration."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Death's Dance","Bleed outlasts their engage burst."),I("Blade of the Ruined King","% HP damage through their tank stats."),I("Infinity Edge","Crit edge still matters past the frontline.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Death's Dance","Outlast the extended fight.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Infinity Edge","Crit edge past their shields.")],behind:[I("Blade of the Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Infinity Edge","Crit edge ends the fight before their kit matters."),I("Death's Dance","Sustain through poke/regen kits."),I("Immortal Shieldbow","Shield vs burst setups.")],behind:[I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Maw of Malmortius","AP specialists.")],runes:{...YASUO_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
