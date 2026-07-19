import { I } from "../runeHelpers.js";

const SYNDRA_MID_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Magical Footwear","Biscuit Delivery","Cosmic Insight"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "First Strike rewards Syndra's long-range poke-first playstyle with bonus gold and damage on the opening trade, matching how she wants to whittle a lane down with Dark Sphere before ever committing to an all-in. Magical Footwear and Biscuit Delivery solve the early gold/mana curve; Cosmic Insight speeds up Unleashed Power's cooldown. Manaflow Band and Transcendence add more mana and haste for a long scaling game.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SYNDRA — Burst Mage / Orb-Stack Execute
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"syndra", display:"Syndra", dd:"Syndra",
  color:"#3a1a5a", glow:"#a040e0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Zed","Katarina","Yone"], replacements:["Ahri","Xerath","Locke"],
      role:"Burst Mage / Orb-Stack Execute",
      corePath:"Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Zhonya's Hourglass",
      coreNote:"Syndra plays for a long poke phase into a stacked-orb execute — Dark Sphere creates orbs, Scatter the Weak stuns and repositions them, and Unleashed Power fires every orb at once for a game-ending burst. Luden's Echo's proc rewards the constant orb-poke pattern; Shadowflame executes low-HP targets she's already whittled down; Rabadon's Deathcap and Zhonya's Hourglass both scale the ultimate into a real kill threat while covering the commitment.",
      sideItems:["Sorcerer's Shoes","Void Staff","Banshee's Veil","Morellonomicon","Ionian Boots of Lucidity","Rylai's Crystal Scepter"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow zones the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Ionian Boots of Lucidity","Haste to kite out.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Rylai's Crystal Scepter","Slow denies their kite/duel pattern."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then Unleashed Power the punish."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Void Staff","Keep damage relevant.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Ionian Boots of Lucidity","Haste closes the poke-war gap faster."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Zhonya's Hourglass","Survive the poke on approach."),I("Void Staff","Keep damage relevant.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more orb stacks.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Slow punishes a whiffed hook."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Ionian Boots of Lucidity","Haste to escape.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Ionian Boots of Lucidity","Haste keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Void Staff","MR pen through their kit.")],runes:{...SYNDRA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
