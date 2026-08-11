import { I } from "../runeHelpers.js";

const IRELIA_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Jack Of All Trades","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks fast off Irelia's blade-dance auto-and-ability weaving, and the omnivamp keeps her topped up through the extended all-in her passive rewards. Legend: Alacrity and Last Stand round out the DPS/all-in identity. Inspiration secondary (live meta): Jack Of All Trades converts her varied item stats into extra Adaptive Force + haste, and Triple Tonic gives an early stat/potion tempo boost for the Bladesurge-reset trades.",
};

const IRELIA_MID_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Conqueror all-in core as Top. Bone Plating and Unflinching replace Inspiration's early-mana runes — Mid Irelia is more exposed to burst combos from range than Top's auto-trading lane bullies, so the extra damage reduction and tenacity matter more than Biscuit Delivery's mana sustain.",
};

// ══════════════════════════════════════════════════════════════════════════
//  IRELIA — Skirmisher / Extended All-In
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"irelia", display:"Irelia", dd:"Irelia",
  color:"#a83246", glow:"#e8b4c4",
  lanes:["Top","Mid"],
  roles:{
    Top:{
      bans:["Camille","Vayne","Rumble"], replacements:["Sett","Volibear","Renekton"],
      role:"Skirmisher / Extended All-In",
      corePath:"Blade of the Ruined King  ›  Plated Steelcaps  ›  Hullbreaker  ›  Death's Dance",
      coreNote:"Irelia plays for one extended all-in — Bladesurge resets on kill, blade stances stack true damage, and few top laners can match her sustained DPS once she's inside. Blade of the Ruined King's % HP damage and active slow are her defining rush; Plated Steelcaps blunts early auto trades; Hullbreaker rewards split-pushing; Death's Dance keeps her alive through the counter-hit.",
      sideItems:["Sterak's Gage","Guardian Angel","Serylda's Grudge","Black Cleaver","Mercury's Treads","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of the Ruined King","% HP damage beats their HP-stacking model."),I("Death's Dance","Outlast their sustain with your own."),I("Hullbreaker","Split-push shield wins the extended trade.")],behind:[I("Plated Steelcaps","Reduces auto damage from their press."),I("Sterak's Gage","Shield when the walk-down connects."),I("Black Cleaver","Shred cuts their sustain.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Blade of the Ruined King","Slow denies their dash-out after committing."),I("Death's Dance","Outlast their all-in."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Guardian Angel","Second life if it still connects.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while stances stack up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Wit's End","MR + on-hit vs AP assassins.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Wit's End","MR lifeline vs AP assassins."),I("Guardian Angel","Deny the kill.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Blade of the Ruined King","% HP damage wins the extended duel."),I("Death's Dance","Sustain outlasts the drawn-out fight."),I("Black Cleaver","Shred through their auto-heavy dueling.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Death's Dance","Sustain through the duel.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Death's Dance","Buy time for your DPS to matter."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Blade of the Ruined King","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Blade of the Ruined King","% HP damage shreds their HP pool."),I("Death's Dance","Survive their DPS while you close."),I("Serylda's Grudge","Slow denies the kite.")],behind:[I("Plated Steelcaps","Non-negotiable — flat auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of the Ruined King","% HP damage cuts through shields."),I("Black Cleaver","Shred through their shield economy over time."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Blade of the Ruined King","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Irelia loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Blade of the Ruined King","% HP damage through their tank stats.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Black Cleaver","Gradual shred still opens Wardens up.")],behind:[I("Blade of the Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blade of the Ruined King","Run down a kiting Specialist with the slow."),I("Death's Dance","Sustain through their poke pattern."),I("Black Cleaver","Shred through their kit's mitigation.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...IRELIA_TOP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Xerath","Syndra","Viktor"], replacements:["Katarina","Ahri","Locke"],
      role:"Skirmisher / Extended All-In",
      corePath:"Blade of the Ruined King  ›  Kraken Slayer  ›  Death's Dance  ›  Guardian Angel",
      coreNote:"Mid Irelia leans harder into an extended all-in than her Top counterpart — get in range, land Bladesurge resets, and don't leave until the fight is over. Blade of the Ruined King and Kraken Slayer both proc extra true/on-hit damage on her attack-speed-heavy combo; Death's Dance and Guardian Angel let her commit fully to the all-in without fearing the follow-up punish.",
      sideItems:["Gluttonous Greaves","Sterak's Gage","Serylda's Grudge","Black Cleaver","Mercury's Treads","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of the Ruined King","% HP damage beats their HP-stacking model."),I("Death's Dance","Outlast their sustain with your own."),I("Kraken Slayer","True damage proc ignores their armor stacking.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Sterak's Gage","Shield when the walk-down connects.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Blade of the Ruined King","Slow denies their dash-out after committing."),I("Death's Dance","Outlast their all-in."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Mercury's Treads","Shorter CC on their engage."),I("Guardian Angel","Second life if it still connects.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener while stances stack up."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Wit's End","MR + on-hit vs AP assassins.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Wit's End","MR lifeline vs AP assassins."),I("Guardian Angel","Deny the kill.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Blade of the Ruined King","% HP damage wins the extended duel."),I("Kraken Slayer","True damage proc adds up over the fight."),I("Death's Dance","Sustain outlasts the drawn-out fight.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Death's Dance","Sustain through the duel."),I("Mercury's Treads","Shorter CC on their gap-close.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Sterak's Gage","Absorb the burst before it lands."),I("Death's Dance","Sustain through the poke.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Death's Dance","Buy time for your DPS to matter."),I("Mercury's Treads","Shorter CC to disengage.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Gluttonous Greaves","Sustain sets up the approach through poke."),I("Blade of the Ruined King","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Blade of the Ruined King","% HP damage shreds their HP pool."),I("Kraken Slayer","True damage proc adds up."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of the Ruined King","% HP damage cuts through shields."),I("Kraken Slayer","True damage ignores shields."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Blade of the Ruined King","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Irelia loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Blade of the Ruined King","% HP damage through their tank stats.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP damage through their mitigation."),I("Death's Dance","Sustain through the extended peel war."),I("Black Cleaver","Gradual shred still opens Wardens up.")],behind:[I("Blade of the Ruined King","Only reliable damage vs stacked resists."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blade of the Ruined King","Run down a kiting Specialist with the slow."),I("Death's Dance","Sustain through their poke pattern."),I("Kraken Slayer","True damage proc adds up.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...IRELIA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
