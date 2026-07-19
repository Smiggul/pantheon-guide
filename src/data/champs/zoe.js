import { I } from "../runeHelpers.js";

const ZOE_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Nimbus Cloak","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute rewards Zoe's poke-into-burst pattern — Spell Thief's stolen summoner spell plus a Paddle Star sleep into a full combo delivers all three hits in one window. Sudden Impact procs off the Sprite jump dash; Grisly Mementos funds her item spike; Relentless Hunter adds roam speed to punish overextensions across the map, which is her real win condition. Nimbus Cloak and Transcendence add more movement speed and haste for the aggressive playstyle her kit demands.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZOE — Burst Mage / Poke-and-Sleep
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zoe", display:"Zoe", dd:"Zoe",
  color:"#d4af7a", glow:"#a8d8e0",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Malzahar","Yone","Kassadin"], replacements:["Katarina","Ahri","Locke"],
      role:"Burst Mage / Poke-and-Sleep",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Lich Bane  ›  Shadowflame",
      coreNote:"Zoe plays for constant lane aggression — poke with Paddle Star, catch a sleeping target with a bubble bounce, and burst before they wake up. Luden's Echo's proc rewards the poke-heavy playstyle; Sorcerer's Shoes gets pen online fast; Lich Bane amplifies the auto she weaves in after a landed sleep; Shadowflame finishes low-HP targets her poke has already whittled down.",
      sideItems:["Rabadon's Deathcap","Zhonya's Hourglass","Void Staff","Banshee's Veil","Morellonomicon","Ionian Boots of Lucidity"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Lich Bane","Sheen proc punishes their dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Ionian Boots of Lucidity","Haste to kite out.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Ionian Boots of Lucidity","Haste to disengage.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Lich Bane","Sheen proc wins the auto-trade."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Ionian Boots of Lucidity","Haste to disengage."),I("Banshee's Veil","Blocks their gap-close CC.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then sleep the punish."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Void Staff","Keep damage relevant.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Ionian Boots of Lucidity","Haste closes the poke-war gap faster."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Zhonya's Hourglass","Survive the poke on approach."),I("Void Staff","Keep damage relevant.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more sleep windows.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Lich Bane","Sheen proc dodges hooks with the sleep bubble bounce."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Ionian Boots of Lucidity","Haste to escape.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Ionian Boots of Lucidity","Haste keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Void Staff","MR pen through their kit.")],runes:{...ZOE_MID_DEFAULT_RUNES}},
      },
    },
  },
};
