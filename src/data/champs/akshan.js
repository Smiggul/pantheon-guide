import { I } from "../runeHelpers.js";

const AKSHAN_MID_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Cut Down"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack matches Akshan's double-auto passive perfectly — every three-hit window amps the target for the E swing-spray that follows. Presence of Mind funds the swing-and-shoot spam, Legend: Alacrity feeds both the passive proc rate and E's bullets, Cut Down shreds the frontliners his revive plays force him through, Absolute Focus rewards the healthy poke position his range affords mid, and Gathering Storm backs the marksman scaling his lane assignment buys time for.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AKSHAN — Rogue Sentinel: Swing Marksman Mid  (A tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"akshan", display:"Akshan", dd:"Akshan",
  color:"#5a4020", glow:"#f0c060",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Malphite","Riven","Annie"], replacements:["Yasuo","Yone","Zed"],
      role:"Grapple-Swing Revive Marksman",
      corePath:"The Collector  ›  Berserker's Greaves  ›  Infinity Edge  ›  Lord Dominik's Regards",
      // Research: The Collector is now the standard opener, in nearly three games in four; Infinity Edge second in most
      //   games, then Lord Dominik's in about three quarters of those. Berserker's Greaves are his most common
      //   boots, in more than half of games. Kraken Slayer, which this guide used to open with, is now about one
      //   game in nine.
      coreNote:"Akshan is a marksman who plays like an assassin: camouflage flanks, E-swing sprays around terrain, and Comeuppance executes chain his kills. The Collector first: lethality and crit fit his short burst trades, and its execute finishes what Comeuppance leaves. Infinity Edge second, then Lord Dominik's Regards, on Berserker's Greaves. Scoundrel marks are the hidden win condition: killing whoever downed a teammate revives them, which flips lost teamfights.",
      sideItems:["Kraken Slayer","Hexoptics C44","Rapid Firecannon","Gluttonous Greaves","Immortal Shieldbow","Guardian Angel","Bloodthirster","Mercurial Scimitar"],
      data:{
        JUGGERNAUT:{ahead:[I("Kraken Slayer","Missing-health bonus damage finishes HP stackers at range."),I("Lord Dominik's Regards","Giant slayer through the armor curve."),I("Phantom Dancer","Kite speed they never answer.")],behind:[I("Phantom Dancer","Speed to farm outside their reach."),I("Guardian Angel","Insurance when they finally connect."),I("Bloodthirster","Sustain the chip war.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Kraken Slayer","Melt them mid-engage — E swings out of the dive."),I("Immortal Shieldbow","Lifeline blunts the engage."),I("Infinity Edge","Kill the diver before the combo lands.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline shield mid-engage."),I("Phantom Dancer","Swing + speed to escape the collapse.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Kraken Slayer","Out-DPS their burst window — swing dodges half of it."),I("Guardian Angel","Punish the all-in with a revive."),I("Immortal Shieldbow","Shield floor under their burst.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Lifeline vs the combo."),I("Mercurial Scimitar","Cleanse the lockdown opener.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Kraken Slayer","PTA + the third-hit proc wins the extended trade at range."),I("Bloodthirster","Sustain their damage windows."),I("Infinity Edge","Crit spike ends the duel early.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Immortal Shieldbow","Lifeline vs their all-in."),I("Phantom Dancer","Kite harder from behind.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kraken Slayer","Kill them in their cooldown gap — camouflage the approach."),I("Immortal Shieldbow","Shield eats the rotation."),I("Infinity Edge","End it before the next combo.")],behind:[I("Immortal Shieldbow","Shield eats the burst rotation."),I("Mercurial Scimitar","Cleanse the setup CC."),I("Guardian Angel","Survive the one combo.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Kraken Slayer","Out-DPS their ramp from range."),I("Bloodthirster","Sustain through the zone chip."),I("Lord Dominik's Regards","Pen their HP items.")],behind:[I("Immortal Shieldbow","Lifeline under the sustained damage."),I("Guardian Angel","Survive the ramped window."),I("Phantom Dancer","Kite outside the drain zone.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Phantom Dancer","Speed + camouflage closes the poke gap for free."),I("Kraken Slayer","Delete them on arrival."),I("Infinity Edge","End the fight on the swing-in.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Kraken Slayer","Third-hit bonus damage wins the DPS mirror."),I("Lord Dominik's Regards","Shred their armor buys."),I("Infinity Edge","Crit spike out-scales them.")],behind:[I("Guardian Angel","Survive their focus, spray the aftermath."),I("Immortal Shieldbow","Lifeline in the 2v2."),I("Bloodthirster","Sustain evens the trade.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Kraken Slayer","Steady third-hit damage outlasts the shield budget."),I("Infinity Edge","Burst bigger than their shields."),I("Lord Dominik's Regards","Pen through the protected carry.")],behind:[I("Bloodthirster","Enter the sustain war yourself."),I("Guardian Angel","Survive the buffed carry."),I("Phantom Dancer","Swing around the peel.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Phantom Dancer","Speed + swing makes their hooks unlandable."),I("Kraken Slayer","Punish every whiff with third-hit bursts."),I("Infinity Edge","Kill the catcher who missed.")],behind:[I("Mercurial Scimitar","Cleanse the hook lockdown."),I("Guardian Angel","Survive the caught scenario."),I("Immortal Shieldbow","Shield the follow-up burst.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer melts the engage line."),I("Kraken Slayer","Missing-health bonus damage grinds through their HP."),I("Phantom Dancer","Swing out of their engage radius.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Immortal Shieldbow","Lifeline through the chain CC.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Kraken Slayer","Missing-health bonus damage cracks the wall."),I("Infinity Edge","Crit volume breaks any mitigation.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Kraken Slayer","Generic sustained DPS answers most kits."),I("Phantom Dancer","Swing spacing beats trick kits."),I("Infinity Edge","Scale past the gimmick.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Immortal Shieldbow","Lifeline vs surprise burst."),I("Mercurial Scimitar","Cleanse the key CC.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
      },
    },
  },
};
