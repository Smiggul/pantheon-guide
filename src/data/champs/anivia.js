import { I } from "../runeHelpers.js";

const ANIVIA_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Scorch"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Current Anivia runs Electrocute, not the old scaling pages — Q-E-auto procs it on every landed stun window, converting her pick pattern into real burst. Cheap Shot fires true damage on every Flash Frost stun and R chill, Grisly Mementos stacks haste off the wall-pick tempo, Relentless Hunter speeds her notoriously slow roams, and Manaflow Band + Scorch keep the R-spam mana economy and early trades honest while Rod of Ages ramps.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ANIVIA — Cryophoenix: Wall-Control Burst Mage  (A/B Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"anivia", display:"Anivia", dd:"Anivia",
  color:"#2a4a6a", glow:"#80d0f0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Zed","Fizz","Kassadin"], replacements:["Orianna","Viktor","Syndra"],
      role:"Wall-Pick Control Phoenix",
      corePath:"Rod of Ages  ›  Sorcerer's Shoes  ›  Archangel's Staff  ›  Liandry's Torment",
      coreNote:"Anivia controls space like no other mid: Crystallize cuts teams in half, R zones entire objectives, and her egg makes every dive math problem lethal to attempt. Rod of Ages plus Archangel's gives the HP-mana engine her permanent R demands, Liandry's Torment burns everything standing in the storm, and Zhonya's stacks with the egg for two death-cheats per fight. The Q-E double-damage combo one-shots squishies caught by a wall — every choke on the map is a kill threat with her alive.",
      sideItems:["Zhonya's Hourglass","Seraph's Embrace","Rylai's Crystal Scepter","Rabadon's Deathcap","Void Staff","Banshee's Veil"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Storm burn scales off their HP bar."),I("Rylai's Crystal Scepter","Chill + slow — they never cross the wall."),I("Seraph's Embrace","R forever while they path around Crystallize.")],behind:[I("Rylai's Crystal Scepter","Kite the walk-down with layered slows."),I("Zhonya's Hourglass","Stasis + egg = two lives per gank."),I("Void Staff","Pen keeps the storm real.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive — wall the exit, egg the mistake."),I("Liandry's Torment","Burn them through the whole attempt."),I("Zhonya's Hourglass","Stasis wastes their engage twice over.")],behind:[I("Zhonya's Hourglass","Stasis + egg makes diving you a losing trade."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel yourself with chill.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis + egg — assassins need three kills to get one."),I("Rylai's Crystal Scepter","Slowed assassins die in the storm."),I("Liandry's Torment","Punish every entry.")],behind:[I("Zhonya's Hourglass","Rush — with egg it's the safest lane in the game."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep the burst honest.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Wall + chill denies the duel entirely."),I("Liandry's Torment","Storm stacks while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in — egg the rest."),I("Rylai's Crystal Scepter","Kite the duel."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Seraph's Embrace","Shield eats their combo; your Q-E out-totals it."),I("Zhonya's Hourglass","Stasis their rotation, wall the retreat."),I("Rabadon's Deathcap","Bigger burst wins the mirror.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation — twice."),I("Void Staff","Keep the burst honest.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Liandry's Torment","Your storm out-ramps their drain."),I("Seraph's Embrace","Out-mana the mana war.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Chill their reposition between casts."),I("Seraph's Embrace","Out-sustain the poke war on mana."),I("Void Staff","Chunk harder once they're walled in.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Seraph's Embrace","Shield the approach chip.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Chilled ADCs can't kite the storm."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","Wall-Q-E deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Burst stays lethal.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Storm DoT outlasts their shield budget."),I("Morellonomicon","Cut the heal package."),I("Void Staff","Pen through the sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the storm honest.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your wall is the better catch — cut them off first."),I("Liandry's Torment","Punish every attempt with storm ticks."),I("Rabadon's Deathcap","Kill threshold on the walled.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis + egg if caught."),I("Rylai's Crystal Scepter","Chill their follow-up.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Storm melts engage tanks holding the choke."),I("Rylai's Crystal Scepter","Wall + chill breaks the engage line."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Storm burns through the peel-tank."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Wall + chill answers most gimmicks."),I("Liandry's Torment","Storm beats trick durability."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Egg + stasis covers the unreadable."),I("Void Staff","Damage stays honest.")],runes:{...ANIVIA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
