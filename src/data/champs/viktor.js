import { I } from "../runeHelpers.js";

const VIKTOR_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Shield Bash","Bone Plating"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch's burn scales far better into teamfights than a single-target keystone, matching Viktor's identity as a control mage who wants to shine in extended 5v5s rather than a single burst window. Manaflow Band and Transcendence solve the mana strain of constant Siphon Power/Gravity Field poke and add haste. Shield Bash and Bone Plating cover the melee-range vulnerability of his early laning phase before Chaos Storm and the Hex Core upgrades come online.",
};

const VIKTOR_BOT_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Gathering Storm"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Bot Viktor trades Mid's Deathfire Touch for Summon Aery because the lane is different, not because the champion is. With a support applying pressure, Aery lands on a target already committed to a trade and returns damage on every Siphon Power, which suits a two-versus-two far better than a burn tuned for five-man fights. Manaflow Band and Transcendence pay for constant Death Ray waveclear, Gathering Storm matches the scaling pattern a bot-lane mage is drafted for, and Triumph plus Coup de Grace convert the duo-lane skirmishes he is actually in. Health-scaling on the third shard rather than a resist: he has no dash, so the thing that kills him is a single landed pick, and raw health buys the window to Gravity Field out of it.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VIKTOR — Battlemage / Scaling Control Mage
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"viktor", display:"Viktor", dd:"Viktor",
  color:"#5a3a1a", glow:"#e8a020",
  lanes:["Mid","Bot"],
  roles:{
    Mid:{
      bans:["Zed","Akali","Qiyana"], replacements:["Katarina","Ahri","Locke"],
      role:"Battlemage / Scaling Control Mage",
      corePath:"Blackfire Torch  ›  Hextech Rocketbelt  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
      coreNote:"Viktor plays a scaling control-mage pattern — his Q evolve unlocks a real side-lane duelist once chosen, kiting most melee champions with Gravity Field zoning and Siphon Power sustained damage. Blackfire Torch's burn and Hextech Rocketbelt's dash both fund the early-to-mid game before evolves come online; Zhonya's Hourglass buys time through all-ins; Rabadon's Deathcap scales the whole kit into a teamfight-ending threat.",
      sideItems:["Sorcerer's Shoes","Void Staff","Banshee's Veil","Morellonomicon","Ionian Boots of Lucidity","Shadowflame"],
      data:{
        JUGGERNAUT:{ahead:[I("Blackfire Torch","Burn adds up over the extended trade."),I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Dash zones the dive attempt."),I("Blackfire Torch","Burn punishes their commitment."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Insurance even with a lead."),I("Blackfire Torch","Burn punishes their commit."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Hextech Rocketbelt","Dash out of kill range.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Hextech Rocketbelt","Dash keeps the duelist at range."),I("Blackfire Torch","Burn whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Void Staff","Keep damage relevant."),I("Hextech Rocketbelt","Dash to disengage.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then punish."),I("Blackfire Torch","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Blackfire Torch","Burn window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Close the gap while poke fires back."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Blackfire Torch","Burn on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Ionian Boots of Lucidity","Haste for more frequent windows."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Blackfire Torch","Burn the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Zhonya's Hourglass","Avoid being burst down in fights.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blackfire Torch","Extra burn through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Blackfire Torch","Extra burn on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Hextech Rocketbelt","Dash escape after a landed hook.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Blackfire Torch","Burn before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Blackfire Torch","Extra burn on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Blackfire Torch","Extra burn vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Ionian Boots of Lucidity","Haste for more windows.")],runes:{...VIKTOR_MID_DEFAULT_RUNES}},
      },
    },
    Bot:{
      bans:["Draven","Blitzcrank","Caitlyn"], replacements:["Seraphine","Cassiopeia","Ziggs"],
      role:"Immobile Scaling Mage-ADC",
      corePath:"Blackfire Torch  ›  Sorcerer's Shoes  ›  Lich Bane  ›  Rabadon's Deathcap",
      coreNote:"Added in the 26.19 sweep — Viktor Bot is not a gimmick: S tier, rank 2 of 54 bottom-laners at 53.4% over ~7.4k Emerald+ games, and roughly a quarter of all Viktor games are played here. It is a genuinely different page from Mid, not the same build in another lane. Mid runs Deathfire Touch into Rocketbelt for teamfight burn and a dash; Bot runs Summon Aery into Lich Bane, because a duo lane gives him a support to poke behind and Aery converts every Siphon Power onto a target his partner has already committed to. Lich Bane is the item that separates the two: Siphon Power's empowered auto becomes a real burst step rather than a top-up. He has no dash and no escape, so the lane is entirely about spacing — Gravity Field is a peel tool here, not a zoning tool, and it is the difference between surviving a hook and dying to one.",
      sideItems:["Shadowflame","Zhonya's Hourglass","Void Staff","Banshee's Veil","Morellonomicon","Stormsurge"],
      data:{
        JUGGERNAUT:{ahead:[I("Blackfire Torch","Burn ticks through the whole walk-down."),I("Lich Bane","Empowered auto punishes each gap-close attempt."),I("Rabadon's Deathcap","Scale past the health they stack.")],behind:[I("Zhonya's Hourglass","Stasis wastes the one commitment they get."),I("Banshee's Veil","Eat the engage tool that starts it."),I("Void Staff","Pen keeps you relevant without a lead.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Zhonya's Hourglass","The dive is their only plan — stall it."),I("Blackfire Torch","Burn punishes the commitment."),I("Lich Bane","Burst the diver before they reset.")],behind:[I("Zhonya's Hourglass","Rush it; you have no dash to answer with."),I("Banshee's Veil","Blocks the opener that starts the dive."),I("Shadowflame","Execute range on whoever survives.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks their single window."),I("Banshee's Veil","Spell shield forces them to open twice."),I("Lich Bane","Punish the failed all-in immediately.")],behind:[I("Zhonya's Hourglass","Non-negotiable on an immobile carry."),I("Banshee's Veil","Blocks the opener."),I("Shadowflame","Trade burst for burst when they commit.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Blackfire Torch","Sustained burn beats their reset windows — Gravity Field is pure peel here."),I("Lich Bane","Each empowered auto is a real chunk."),I("Zhonya's Hourglass","Deny the extended duel entirely.")],behind:[I("Zhonya's Hourglass","Their duel window is finite; yours is not."),I("Morellonomicon","Cut the healing their resets run on."),I("Banshee's Veil","Buy a second to reposition.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Banshee's Veil","Spell shield answers the opener directly."),I("Blackfire Torch","Out-sustain their single rotation."),I("Rabadon's Deathcap","Win the scaling race outright.")],behind:[I("Banshee's Veil","Rush it — their combo needs the opener to land."),I("Zhonya's Hourglass","Stasis covers the follow-up."),I("Void Staff","Their magic resist is the only thing saving them.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Blackfire Torch","Your burn beats their burn."),I("Void Staff","Pen through the resists they stack."),I("Rabadon's Deathcap","Out-scale the ramp.")],behind:[I("Void Staff","The ramp is what kills you — pen it."),I("Banshee's Veil","Blunt the opening zone."),I("Zhonya's Hourglass","Stall until your own scaling lands.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Blackfire Torch","Burn on anything that strays into your range."),I("Sorcerer's Shoes","Movement is the whole answer to poke."),I("Lich Bane","Punish the moment they step up.")],behind:[I("Banshee's Veil","Absorb the opening shot."),I("Sorcerer's Shoes","You cannot trade at their range — you have to close."),I("Zhonya's Hourglass","Survive the follow-up.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Lich Bane","Out-trade them before their items come online."),I("Blackfire Torch","Burn beats their sustained pattern early."),I("Shadowflame","Execute the low-HP retreat.")],behind:[I("Zhonya's Hourglass","Their late game beats yours — survive to teamfights."),I("Banshee's Veil","Blocks the engage that sets up the kill."),I("Void Staff","Pen through Maw or Mercury's.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Anti-heal is the whole matchup."),I("Blackfire Torch","Burn applies the cut continuously."),I("Shadowflame","Burst past the shield they cast.")],behind:[I("Morellonomicon","Cut the healing before anything else."),I("Void Staff","Their resists scale with their protection."),I("Zhonya's Hourglass","Outlast the peel.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Spell shield eats the hook outright."),I("Sorcerer's Shoes","Spacing is the counterplay — buy the speed."),I("Blackfire Torch","Punish the missed pick.")],behind:[I("Banshee's Veil","One hook is a death sentence on an immobile mage."),I("Zhonya's Hourglass","Stasis survives the follow-up."),I("Sorcerer's Shoes","Never stand still in hook range.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Zhonya's Hourglass","Their engage is telegraphed — stall it."),I("Blackfire Torch","Burn the whole frontline as they commit."),I("Void Staff","Pen the resists they stack.")],behind:[I("Zhonya's Hourglass","The engage is the entire threat."),I("Banshee's Veil","Blocks the opening lock-down."),I("Void Staff","Stay relevant into their armour and magic resist.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through the wall they build."),I("Morellonomicon","Cut the sustain propping the carry up."),I("Rabadon's Deathcap","Scale past the peel.")],behind:[I("Void Staff","Their resists are the problem, not their damage."),I("Morellonomicon","Anti-heal the protection."),I("Zhonya's Hourglass","Survive long enough to out-scale.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blackfire Torch","Burn answers most gimmicks by attrition."),I("Zhonya's Hourglass","Stasis covers the trick you have not seen."),I("Rabadon's Deathcap","Scale past the pattern.")],behind:[I("Zhonya's Hourglass","Buy time against an unfamiliar threat."),I("Banshee's Veil","Blocks whatever opens it."),I("Void Staff","Pen stays useful regardless.")],runes:{...VIKTOR_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
