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
      corePath:"Kraken Slayer  ›  Gluttonous Greaves  ›  Hexoptics C44  ›  Lord Dominik's Regards",
      coreNote:"Akshan is a marksman playing assassin hours: camouflage flanks, E-swing sprays around terrain, and Comeuppance executes reset his kills into chain-kills. Kraken Slayer's true damage rides the double-auto passive, Hexoptics C44 is the current mid-build spike, and Lord Dominik's plus Infinity Edge finish the crit curve. The hidden win condition is Scoundrel marks: killing whoever downed a teammate revives them — a mechanic that flips lost teamfights. Swing in, spray, revive your team, swing out.",
      sideItems:["Infinity Edge","Bloodthirster","Immortal Shieldbow","Guardian Angel","Mercurial Scimitar","Phantom Dancer"],
      data:{
        JUGGERNAUT:{ahead:[I("Kraken Slayer","True damage shreds their HP stacking at range."),I("Lord Dominik's Regards","Giant slayer through the armor curve."),I("Phantom Dancer","Kite speed they never answer.")],behind:[I("Phantom Dancer","Speed to farm outside their reach."),I("Guardian Angel","Insurance when they finally connect."),I("Bloodthirster","Sustain the chip war.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Kraken Slayer","Melt them mid-engage — E swings out of the dive."),I("Immortal Shieldbow","Lifeline blunts the engage."),I("Infinity Edge","Kill the diver before the combo lands.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline shield mid-engage."),I("Phantom Dancer","Swing + speed to escape the collapse.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Kraken Slayer","Out-DPS their burst window — swing dodges half of it."),I("Guardian Angel","Punish the all-in with a revive."),I("Immortal Shieldbow","Shield floor under their burst.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Lifeline vs the combo."),I("Mercurial Scimitar","Cleanse the lockdown opener.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Kraken Slayer","PTA + true damage wins the extended trade at range."),I("Bloodthirster","Sustain their damage windows."),I("Infinity Edge","Crit spike ends the duel early.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Immortal Shieldbow","Lifeline vs their all-in."),I("Phantom Dancer","Kite harder from behind.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kraken Slayer","Kill them in their cooldown gap — camouflage the approach."),I("Immortal Shieldbow","Shield eats the rotation."),I("Infinity Edge","End it before the next combo.")],behind:[I("Immortal Shieldbow","Shield eats the burst rotation."),I("Mercurial Scimitar","Cleanse the setup CC."),I("Guardian Angel","Survive the one combo.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Kraken Slayer","Out-DPS their ramp from range."),I("Bloodthirster","Sustain through the zone chip."),I("Lord Dominik's Regards","Pen their HP items.")],behind:[I("Immortal Shieldbow","Lifeline under the sustained damage."),I("Guardian Angel","Survive the ramped window."),I("Phantom Dancer","Kite outside the drain zone.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Phantom Dancer","Speed + camouflage closes the poke gap for free."),I("Kraken Slayer","Delete them on arrival."),I("Infinity Edge","End the fight on the swing-in.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Kraken Slayer","True damage wins the DPS mirror."),I("Lord Dominik's Regards","Shred their armor buys."),I("Infinity Edge","Crit spike out-scales them.")],behind:[I("Guardian Angel","Survive their focus, spray the aftermath."),I("Immortal Shieldbow","Lifeline in the 2v2."),I("Bloodthirster","Sustain evens the trade.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Kraken Slayer","True damage ignores the shield budget."),I("Infinity Edge","Burst bigger than their shields."),I("Lord Dominik's Regards","Pen through the protected carry.")],behind:[I("Bloodthirster","Enter the sustain war yourself."),I("Guardian Angel","Survive the buffed carry."),I("Phantom Dancer","Swing around the peel.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Phantom Dancer","Speed + swing makes their hooks unlandable."),I("Kraken Slayer","Punish every whiff with true-damage sprays."),I("Infinity Edge","Kill the catcher who missed.")],behind:[I("Mercurial Scimitar","Cleanse the hook lockdown."),I("Guardian Angel","Survive the caught scenario."),I("Immortal Shieldbow","Shield the follow-up burst.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer melts the engage line."),I("Kraken Slayer","True damage through their HP."),I("Phantom Dancer","Swing out of their engage radius.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Immortal Shieldbow","Lifeline through the chain CC.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Kraken Slayer","True damage cracks the wall."),I("Infinity Edge","Crit volume breaks any mitigation.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Kraken Slayer","Generic true-damage DPS answers most kits."),I("Phantom Dancer","Swing spacing beats trick kits."),I("Infinity Edge","Scale past the gimmick.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Immortal Shieldbow","Lifeline vs surprise burst."),I("Mercurial Scimitar","Cleanse the key CC.")],runes:{...AKSHAN_MID_DEFAULT_RUNES}},
      },
    },
  },
};
