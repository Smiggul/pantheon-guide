import { I } from "../runeHelpers.js";

const KENNEN_TOP_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Taste of Blood","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Scorch"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute procs off Kennen's Q-W-auto stun rotations, converting his ranged bully pattern into real kill pressure. Taste of Blood sustains the melee-matchup poke war he dictates, Grisly Mementos stacks haste off his constant trading, Ultimate Hunter is the headline — Slicing Maelstrom wins teamfights and every reduction means one more — while Absolute Focus rewards the healthy poke position and Scorch stacks with his mark passive in early trades.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KENNEN — Heart of the Tempest: Ranged Top Wombo Mage  (B tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kennen", display:"Kennen", dd:"Kennen",
  color:"#5a4a10", glow:"#f0d040",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Irelia","Warwick","Sylas"], replacements:["Teemo","Gnar","Vayne"],
      role:"Ranged Bully / Maelstrom Wombo",
      corePath:"Hextech Rocketbelt  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Kennen bullies melees at range all lane, then flips into the best teamfight ult in the top pool: Rocketbelt-into-Maelstrom stuns their whole team twice. Shadowflame turns the stun-locked targets into executes, Zhonya's Hourglass lets him channel the full ult inside five enemies and walk out, and Rabadon's Deathcap scales the wombo into a pentakill button. Lane on his terms — Q poke, W-stun trades, E out — and save Flash for the fight-winning R angle, not for escaping.",
      sideItems:["Rabadon's Deathcap","Void Staff","Liandry's Torment","Banshee's Veil","Morellonomicon","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Poke rotations they can never answer."),I("Liandry's Torment","Burn scales off their HP stacking."),I("Rabadon's Deathcap","Scale the poke into melt.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Cosmic Drive","Speed keeps their hands off you."),I("Void Staff","Pen keeps poke real.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Counter-engage the diver with your own stun."),I("Shadowflame","Burst them mid-engage."),I("Zhonya's Hourglass","Stasis wastes their dive.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus stun answers the all-in."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks the combo — stun the exit."),I("Shadowflame","Out-burst them with W-stun setup."),I("Rabadon's Deathcap","End it in one rotation.")],behind:[I("Zhonya's Hourglass","Stasis is the matchup."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own burst honest.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Shadowflame","Poke them below all-in HP at range."),I("Cosmic Drive","Speed keeps the spacing yours."),I("Rabadon's Deathcap","Melt them before they close.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Banshee's Veil","Blocks the gap-close."),I("Cosmic Drive","Kite the duel.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your stun setup lands the rotation first."),I("Zhonya's Hourglass","Stasis their combo, stun the aftermath."),I("Rabadon's Deathcap","Bigger burst wins.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Shadowflame","Burst them before the drain ramps."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash closes their poke range — stun follows."),I("Shadowflame","Delete them once inside."),I("Cosmic Drive","Speed between volleys.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Dodge speed.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One stun rotation deletes the ranged top."),I("Rabadon's Deathcap","Guarantee the kill window."),I("Hextech Rocketbelt","Dash through their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Maelstrom out-bursts the shield budget."),I("Void Staff","Pen the protected target.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Morellonomicon","Cut their sustain.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Speed plus E makes their picks whiff."),I("Shadowflame","Burst the catcher on the miss."),I("Hextech Rocketbelt","Punish with a stun rotation.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Hextech Rocketbelt","Your wombo beats their wombo — dash-R first."),I("Void Staff","Shred their MR stack."),I("Rabadon's Deathcap","Scale the teamfight ult harder.")],behind:[I("Void Staff","Required through the frontline."),I("Zhonya's Hourglass","Channel R through their engage."),I("Banshee's Veil","Blocks the initiation.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Rabadon's Deathcap","Maelstrom hits everyone — peel can't cover five."),I("Void Staff","Pen the resist stack."),I("Shadowflame","Execute through the shield layer.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Morellonomicon","Cut their sustain support.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Shadowflame","Stun rotations answer most gimmicks."),I("Hextech Rocketbelt","Dash-stun the setup champion early."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...KENNEN_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
