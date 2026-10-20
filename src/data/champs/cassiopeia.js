import { I } from "../runeHelpers.js";

const CASSIOPEIA_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Coup de Grace"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch layers onto Cassiopeia's poison DoTs — Q, W and Twin Fang's machine-gun cycle keep the burn refreshed permanently. Manaflow Band and Presence of Mind together feed the hungriest E-spam mana economy in the game, Transcendence accelerates the Q/E loop, Scorch wins early poke, and Coup de Grace amplifies the execute phase where E's bonus damage on poisoned low-HP targets takes over. The same page carries Mid and Bot — the serpent doesn't care which lane the prey walks.",
};

// ══════════════════════════════════════════════════════════════════════════
//  CASSIOPEIA — Serpent's Embrace: DPS Battlemage  (Mid A / Bot C 26.14)
//  NOTE: since her Serpentine Grace rework she CAN buy boots, and her passive
//  makes every move-speed bonus stronger on her. About half her games buy
//  Boots of Swiftness. (Older notes in this repo say she cannot; that was true
//  of the previous passive.)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"cassiopeia", display:"Cassiopeia", dd:"Cassiopeia",
  color:"#2a5a2a", glow:"#70e070",
  lanes:["Mid","Bot"],
  altBuilds:{
    Bot:[{
      label:"Rod of Ages scaling", tag:"alt",
      corePath:"Rod of Ages  ›  Boots of Swiftness  ›  Archangel's Staff  ›  Rylai's Crystal Scepter",
      coreNote:"The minority line on Bot, and the same build as Mid: Rod of Ages first in about a quarter of games, against about half for Blackfire Torch. Rod of Ages adds health, mana and ability power that grow for its first ten minutes, and Archangel's Staff, which follows it in about four games in five, turns into Seraph's Embrace for a mana pool and low-health shield that pay for E spam all game. It is a slower, tankier curve than the double-burn opener and wins slightly less often as a first item (about 49% against 50%), on a small sample.",
      runes:{...CASSIOPEIA_DEFAULT_RUNES},
      sideItems:["Zhonya's Hourglass","Blackfire Torch","Liandry's Torment","Rabadon's Deathcap","Void Staff","Banshee's Veil"],
    }],
  },
  roles:{
    Mid:{
      bans:["Fizz","Zed","Irelia"], replacements:["Vladimir","Ryze","Kassadin"],
      role:"Machine-Gun Poison Battlemage",
      corePath:"Rod of Ages  ›  Boots of Swiftness  ›  Archangel's Staff  ›  Rylai's Crystal Scepter",
      coreNote:"Cassiopeia is a DPS mage wearing a control mage's clothes: land Q or W poison, then E every half-second until something dies. Rod of Ages gives the HP-mana-AP curve her sustained-fight identity needs, Archangel's into Seraph's solves the E mana bill forever, and Rylai's Crystal Scepter makes every poison tick a slow nothing melee escapes. Boots of Swiftness are her most common boots, about half her games: her passive makes every move-speed bonus stronger on her, so they buy more kiting than they would on anyone else. Zhonya's Hourglass is the usual next item, for the point-blank Petrifying Gaze plays.",
      sideItems:["Zhonya's Hourglass","Seraph's Embrace","Liandry's Torment","Rabadon's Deathcap","Void Staff","Banshee's Veil","Morellonomicon","Sorcerer's Shoes"],
      data:{
        JUGGERNAUT:{ahead:[I("Rylai's Crystal Scepter","Perma-slow poison — they never reach you."),I("Liandry's Torment","Triple DoT scales off their HP bar."),I("Seraph's Embrace","E forever while they walk in place.")],behind:[I("Rylai's Crystal Scepter","Kite the walk-down even from behind."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the fangs honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive — ult face-check ends it."),I("Zhonya's Hourglass","Stasis wastes their engage."),I("Liandry's Torment","Burn them through the whole attempt.")],behind:[I("Zhonya's Hourglass","Mandatory — divers hunt the stationary serpent."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel yourself with poison slows.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — stasis answers the one caught rotation."),I("Rylai's Crystal Scepter","Slowed assassins face-tank the full DPS."),I("Seraph's Embrace","Shield floor under their burst.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus petrify is your defense."),I("Banshee's Veil","Blocks the combo opener."),I("Void Staff","Keep your own damage honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel entirely."),I("Liandry's Torment","DoTs stack while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel you can't refuse."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Seraph's Embrace","Shield eats their combo; your DPS out-totals it."),I("Zhonya's Hourglass","Stasis their rotation, fang the gap."),I("Rabadon's Deathcap","Sustained damage beats one rotation.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the fangs honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the DPS-vs-drain mirror."),I("Liandry's Torment","Your DoT stack out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","One landed Q and they never poke from range again."),I("Seraph's Embrace","Out-sustain the poke war on mana."),I("Void Staff","Chunk harder once inside.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Seraph's Embrace","Shield the approach chip.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the fang DPS."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","Out-DPS the DPS carry.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Fangs stay lethal.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","DoTs outlast their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the DPS honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your poison zone beats their hook zone."),I("Liandry's Torment","Punish every attempt with stacked DoTs."),I("Seraph's Embrace","Shield eats the landed hook's follow-up.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","Slow their follow-up.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP DoTs melt engage tanks."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Sustained DoTs crack the peel wall."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Poison slows answer most gimmicks."),I("Liandry's Torment","DoTs beat trick durability."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
      },
    },
    Bot:{
      bans:["Draven","Lucian","Caitlyn"], replacements:["Ziggs","Seraphine","Smolder"],
      role:"Lane-Mage Carry (Bot flex)",
      corePath:"Blackfire Torch  ›  Boots of Swiftness  ›  Liandry's Torment  ›  Rylai's Crystal Scepter",
      coreNote:"Bot Cassiopeia is the mage-ADC flex: same rune page as Mid, but duo-lane support changes the pattern — her W zone plus a catcher or engage support turns bot into a kill lane most ADCs can't answer. Bot now builds differently from Mid. Blackfire Torch is the most common opener, in about half of games, and Liandry's Torment follows it about two thirds of the time: two burn items that tick on every poisoned target, with Blackfire's mana and ability haste covering the E spam. Rylai's Crystal Scepter makes every poison tick a slow, and Zhonya's Hourglass is the usual fourth for point-blank Petrifying Gaze plays. Boots of Swiftness lead her boots here too (about 41%, Sorcerer's Shoes about 31%); her passive makes their move speed stronger on her. The sample is small (about 7,400 games on 26.20), so treat the order as a lean rather than settled. Rod of Ages into Archangel's Staff, the Mid build this guide used to show here, is still about a quarter of games; see the alternate build. The lane risk is real (short range, skillshot-reliant) but the mid-game reward is a carry that melts tanks and towers alike.",
      sideItems:["Zhonya's Hourglass","Sorcerer's Shoes","Rod of Ages","Archangel's Staff","Rabadon's Deathcap","Void Staff","Banshee's Veil","Bloodletter's Curse"],
      data:{
        JUGGERNAUT:{ahead:[I("Rylai's Crystal Scepter","Perma-slow poison — they never reach you."),I("Liandry's Torment","Triple DoT scales off their HP bar."),I("Seraph's Embrace","E forever while they walk in place.")],behind:[I("Rylai's Crystal Scepter","Kite the walk-down even from behind."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the fangs honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive — ult face-check ends it."),I("Zhonya's Hourglass","Stasis wastes their engage."),I("Liandry's Torment","Burn them through the whole attempt.")],behind:[I("Zhonya's Hourglass","Mandatory — divers hunt the stationary serpent."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel yourself with poison slows.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — stasis answers the one caught rotation."),I("Rylai's Crystal Scepter","Slowed assassins face-tank the full DPS."),I("Seraph's Embrace","Shield floor under their burst.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus petrify is your defense."),I("Banshee's Veil","Blocks the combo opener."),I("Void Staff","Keep your own damage honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel entirely."),I("Liandry's Torment","DoTs stack while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel you can't refuse."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Seraph's Embrace","Shield eats their combo; your DPS out-totals it."),I("Zhonya's Hourglass","Stasis their rotation, fang the gap."),I("Rabadon's Deathcap","Sustained damage beats one rotation.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the fangs honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the DPS-vs-drain mirror."),I("Liandry's Torment","Your DoT stack out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain mages."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","One landed Q and they never poke from range again."),I("Seraph's Embrace","Out-sustain the poke war on mana."),I("Void Staff","Chunk harder once inside.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Seraph's Embrace","Shield the approach chip.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the fang DPS."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","Out-DPS the DPS carry.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Fangs stay lethal.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","DoTs outlast their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the DPS honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your poison zone beats their hook zone."),I("Liandry's Torment","Punish every attempt with stacked DoTs."),I("Seraph's Embrace","Shield eats the landed hook's follow-up.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","Slow their follow-up.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP DoTs melt engage tanks."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Sustained DoTs crack the peel wall."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Poison slows answer most gimmicks."),I("Liandry's Torment","DoTs beat trick durability."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...CASSIOPEIA_DEFAULT_RUNES}},
      },
    },
  },
};
