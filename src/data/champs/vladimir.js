import { I } from "../runeHelpers.js";

const VLADIMIR_MID_DEFAULT_RUNES = {
  keystone:       "Stormraider's Surge",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Transcendence","Gathering Storm"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Haste","Last Stand"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Stormraider's Surge is the modern Vladimir page — his E+Q burst reliably triggers the surge, and the move-speed burst is everything for a champion whose whole fight pattern is weaving in and out of pool range. Nimbus Cloak stacks more speed on Ghost/Flash, Transcendence and Legend: Haste feed the Q/E cooldown loop, Gathering Storm scales the late-game ramp, and Last Stand rewards fighting at the low HP his kit naturally sits at.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VLADIMIR — Sustain Battlemage / Hemomancer Scaler  (S tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"vladimir", display:"Vladimir", dd:"Vladimir",
  color:"#5a0d1a", glow:"#d43f4f",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Fizz","Kassadin","Zed"], replacements:["Sylas","Swain","Katarina"],
      role:"Sustain Battlemage / Hemomancer Scaler",
      corePath:"Hextech Rocketbelt  ›  Ionian Boots of Lucidity  ›  Riftmaker  ›  Rabadon's Deathcap",
      coreNote:"Vladimir has no mana and no real cooldown on Transfusion once hasted — his build is pure AP, haste, and gap-close. Hextech Rocketbelt adds the dash his kit lacks, turning the E-charge into an inescapable engage; Riftmaker's omnivamp and true-damage ramp are built for his long drain fights; Rabadon's Deathcap converts every drop into more healing and more burst. Zhonya's Hourglass is the standard closer — pool plus stasis makes him nearly unkillable in extended fights.",
      sideItems:["Zhonya's Hourglass","Void Staff","Morellonomicon","Rylai's Crystal Scepter","Spirit Visage","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Drain fights are your game — omnivamp outlasts them."),I("Hextech Rocketbelt","Dash keeps you out of their reach forever."),I("Rabadon's Deathcap","Scale the sustain into raw kill pressure.")],behind:[I("Zhonya's Hourglass","Pool + stasis escapes the all-in."),I("Rylai's Crystal Scepter","Slow kites their walk-up."),I("Void Staff","Pen keeps drain damage real.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Dash answers their engage with your own spacing."),I("Riftmaker","Out-sustain the dive damage."),I("Zhonya's Hourglass","Stasis flips a tower dive.")],behind:[I("Zhonya's Hourglass","Pool + stasis is a double dive answer."),I("Rylai's Crystal Scepter","Slow the entry so you can pool the follow-up."),I("Ionian Boots of Lucidity","Faster pool resets.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Pool + stasis blanks two full combos."),I("Riftmaker","Sustain undoes whatever chip they land."),I("Rabadon's Deathcap","Out-burst them in your window.")],behind:[I("Zhonya's Hourglass","Rush — with pool you become unkillable to burst."),I("Rylai's Crystal Scepter","Slow their exit and turn the kill."),I("Void Staff","Keep damage relevant.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The long duel is exactly what Riftmaker wins."),I("Rylai's Crystal Scepter","Slow controls their stick-and-move pattern."),I("Rabadon's Deathcap","More AP = more heal per Q.")],behind:[I("Zhonya's Hourglass","Deny their all-in window with pool + stasis."),I("Spirit Visage","Amplifies your entire sustain kit."),I("Void Staff","Damage through their MR items.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Riftmaker","Heal back their poke between rotations."),I("Hextech Rocketbelt","Dash into range the moment their combo is down."),I("Rabadon's Deathcap","Out-burst them in the gap.")],behind:[I("Zhonya's Hourglass","Pool one rotation, stasis the next."),I("Spirit Visage","MR + healing blunts the poke war."),I("Void Staff","Pen keeps you threatening.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustain-vs-sustain war."),I("Riftmaker","Your drain out-ramps theirs."),I("Rylai's Crystal Scepter","Slow controls the spacing.")],behind:[I("Morellonomicon","Cut their healing loop first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Spirit Visage","Double down on your own sustain.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash closes the range their kit depends on."),I("Riftmaker","Heal off the poke you do eat."),I("Rabadon's Deathcap","One rotation deletes them once close.")],behind:[I("Spirit Visage","Sustain through the chip while you close."),I("Zhonya's Hourglass","Stasis mid-approach breaks their spacing."),I("Ionian Boots of Lucidity","More pool/dash uptime.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Hextech Rocketbelt","Dash on top of them — they melt in one rotation."),I("Rabadon's Deathcap","Amplify the burst on the squishy."),I("Riftmaker","Sustain through the kite DPS.")],behind:[I("Zhonya's Hourglass","Pool + stasis blanks their focus fire."),I("Rylai's Crystal Scepter","Slow ends the kiting game."),I("Spirit Visage","Heal through the chip.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Cut the heal stack from their sustain package."),I("Rabadon's Deathcap","Burst through shield HP with raw AP."),I("Hextech Rocketbelt","Dash past the peel to the carry.")],behind:[I("Void Staff","Pen through the shielded frontline."),I("Zhonya's Hourglass","Survive focus during your engage."),I("Riftmaker","Out-sustain their value.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash makes their hooks near-impossible to land."),I("Riftmaker","Heal off any chip they do land."),I("Rabadon's Deathcap","Punish the whiff with a full rotation.")],behind:[I("Zhonya's Hourglass","Pool dodges the hook; stasis covers the catch."),I("Spirit Visage","Survive the follow-up burst."),I("Rylai's Crystal Scepter","Slow their engage follow-up.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank's MR."),I("Riftmaker","True-damage ramp ignores their resists."),I("Hextech Rocketbelt","Dash out of their engage radius.")],behind:[I("Void Staff","Required to hurt them from behind."),I("Zhonya's Hourglass","Pool + stasis survives the full engage chain."),I("Spirit Visage","Blunt their AP threat.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through the peel-tank to the backline."),I("Riftmaker","True damage ramp doesn't care about their resists."),I("Rabadon's Deathcap","Enough AP burns through any peel.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive the counter-engage."),I("Morellonomicon","Cut their sustain support.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Sustain answers most gimmick damage patterns."),I("Hextech Rocketbelt","Dash spacing beats trick kits."),I("Rabadon's Deathcap","Scale past whatever they're doing.")],behind:[I("Zhonya's Hourglass","Pool + stasis covers unreadable setups."),I("Spirit Visage","Sustain through unfamiliar damage."),I("Void Staff","Damage stays honest.")],runes:{...VLADIMIR_MID_DEFAULT_RUNES}},
      },
    },
  },
};
