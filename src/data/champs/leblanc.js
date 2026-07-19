import { I } from "../runeHelpers.js";

const LEBLANC_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Transcendence","Gathering Storm"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute completes LeBlanc's core identity: W in, Q, chain, and the keystone fires before they can react. Sudden Impact procs on every Distortion dash, Grisly Mementos stacks haste off her roam-kill pattern, and Relentless Hunter converts those kills into faster cross-map picks. Transcendence and Gathering Storm cover the mid-game haste and late scaling a burst-combo mage otherwise lacks.",
};

// ══════════════════════════════════════════════════════════════════════════
//  LEBLANC — Deceiver Burst Assassin-Mage  (A tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"leblanc", display:"LeBlanc", dd:"Leblanc",
  color:"#4a2a50", glow:"#c080d0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Kassadin","Galio","Malzahar"], replacements:["Ahri","Zed","Katarina"],
      role:"Deceiver Burst Assassin-Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"LeBlanc's game is short trades that end before retaliation starts — W in, full combo, W back out. Luden's Echo frontloads the poke burst, Shadowflame executes anyone her chain has already chunked, and Rabadon's Deathcap turns the mid-game pick pattern into true one-shots. Zhonya's Hourglass closes the build for the games where they finally learn to jump the real one.",
      sideItems:["Zhonya's Hourglass","Void Staff","Banshee's Veil","Stormsurge","Mejai's Soulstealer","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke them out from a range they can't answer."),I("Shadowflame","Flat pen hurts their low-MR frame."),I("Rabadon's Deathcap","Chunk half their HP per rotation.")],behind:[I("Zhonya's Hourglass","Stasis covers the one gap-close they have."),I("Void Staff","Keep burst real once they buy MR."),I("Banshee's Veil","Blocks the pull/engage tool.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-dive before the combo finishes."),I("Luden's Echo","Chip them below dive-health before they commit."),I("Zhonya's Hourglass","Stasis wastes their entire engage.")],behind:[I("Zhonya's Hourglass","Mandatory — W escape plus stasis is two answers."),I("Banshee's Veil","Blocks the engage opener."),I("Sorcerer's Shoes","Keep the damage threat alive cheaply.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Win the burst race outright."),I("Rabadon's Deathcap","Your combo kills first if it's bigger."),I("Zhonya's Hourglass","Insurance for the return combo.")],behind:[I("Zhonya's Hourglass","Rush — stasis beats their combo, W beats their gap-close."),I("Banshee's Veil","Blocks their opener."),I("Void Staff","Damage stays real from behind.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Poke them down before the duel can start."),I("Shadowflame","Burst them in one window — never fight extended."),I("Rabadon's Deathcap","One-shot math beats duel math.")],behind:[I("Zhonya's Hourglass","Deny the extended fight they want."),I("Banshee's Veil","Blocks the gap-close."),I("Void Staff","Pen through their MR buys.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your combo is faster — end it first."),I("Rabadon's Deathcap","Bigger burst wins the mirror."),I("Zhonya's Hourglass","Stasis their rotation, then punish.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep your own burst honest.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Luden's Echo","Poke from outside their sustained-damage range."),I("Shadowflame","Burst beats drain in a short window."),I("Morellonomicon","Cut the heal-back after your combo.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Luden's Echo","W range closes faster than they can reposition."),I("Shadowflame","One rotation deletes them on arrival."),I("Rabadon's Deathcap","Kill threshold from full HP.")],behind:[I("Banshee's Veil","Eats one poke spell on the way in."),I("Zhonya's Hourglass","Covers the all-in commitment."),I("Sorcerer's Shoes","Cheap damage to stay relevant.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Squishy ADCs die to one chain combo."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Luden's Echo","Poke them off farm first.")],behind:[I("Zhonya's Hourglass","Stasis their focus in fights."),I("Banshee's Veil","Blocks the peel CC on the way in."),I("Void Staff","Burst stays lethal.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen cuts through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Luden's Echo","Poke forces shield cooldowns before the real combo.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Luden's Echo","Poke them down — chain beats hook at range."),I("Shadowflame","Burst the catcher when they whiff."),I("Rabadon's Deathcap","Punish window damage.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Sorcerer's Shoes","Cheap threat while recovering.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Luden's Echo","Poke from outside their engage radius."),I("Void Staff","Pen through their MR to keep threatening."),I("Rabadon's Deathcap","Burst their backline instead — ignore the tank.")],behind:[I("Void Staff","Required to matter at all."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Pen through the peel to the carry."),I("Rabadon's Deathcap","Burst bigger than their peel budget."),I("Luden's Echo","Poke around the Warden's zone.")],behind:[I("Void Staff","Mandatory through stacked peel resists."),I("Zhonya's Hourglass","Survive the counter-engage."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Luden's Echo","Poke-and-fade beats most gimmick kits."),I("Shadowflame","Burst them in one unreadable window."),I("Rabadon's Deathcap","Scale the pick threat.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Covers what you can't scout."),I("Void Staff","Damage stays honest.")],runes:{...LEBLANC_MID_DEFAULT_RUNES}},
      },
    },
  },
};
