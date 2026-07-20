import { I } from "../runeHelpers.js";

const CORKI_MID_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks through Corki's mixed auto-and-rocket trading and pays into the extended mid-game skirmishes his package rotations create. Presence of Mind funds the missile spam, Legend: Alacrity feeds the Trinity-proc auto weaving, Cut Down shreds the frontline his true-damage passive already favors, and the Cash Back + Triple Tonic economy line accelerates the Trinity-Manamune double spike his entire power curve waits on.",
};

// ══════════════════════════════════════════════════════════════════════════
//  CORKI — Daring Bombardier: Mixed-Damage Package Mid  (Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"corki", display:"Corki", dd:"Corki",
  color:"#5a3020", glow:"#f09050",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Irelia","Yasuo","Zed"], replacements:["Orianna","Twisted Fate","Akshan"],
      role:"Package-Delivery Mixed Carry",
      corePath:"Trinity Force  ›  Mercury's Treads  ›  Manamune  ›  The Collector",
      coreNote:"Corki is the mixed-damage answer: his passive converts autos to magic damage, so no single resist stat answers him. Trinity Force procs off the rocket-auto weave, Manamune stacks toward Muramana off his double-resource spam, The Collector executes whoever the barrage chunks, and Infinity Edge closes the crit curve. The Package is the real mid identity — every few minutes he gets a free engage-or-disengage that repositions entire fights. Farm safe, spike at two items, deliver.",
      sideItems:["Infinity Edge","Lord Dominik's Regards","Rapid Firecannon","Guardian Angel","Maw of Malmortius","Bloodthirster"],
      data:{
        JUGGERNAUT:{ahead:[I("Trinity Force","Kite them with proc-poke forever."),I("The Collector","Execute beats their HP stacking."),I("Lord Dominik's Regards","Mixed damage plus pen melts them.")],behind:[I("Guardian Angel","Insurance when they connect."),I("Rapid Firecannon","Range to farm outside their reach."),I("Bloodthirster","Sustain the chip war.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("The Collector","Burst them mid-engage — Package answers the dive."),I("Trinity Force","Proc-kite their commitment."),I("Guardian Angel","Punish the failed dive twice.")],behind:[I("Guardian Angel","Second life against the engage."),I("Maw of Malmortius","Vs AP divers."),I("Rapid Firecannon","Range denies the dive angle.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Valkyrie out of their combo, execute the whiff."),I("Guardian Angel","Trade one-shots and revive."),I("Trinity Force","Proc them down in the reset gap.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Maw of Malmortius","Vs AP assassins."),I("Rapid Firecannon","Poke from outside jump range.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Trinity Force","Proc-poke them below all-in HP first."),I("The Collector","Execute the extended-fight reset."),I("Bloodthirster","Sustain their windows.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Maw of Malmortius","Lifeline vs AP skirmishers."),I("Rapid Firecannon","Kite from further out.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("The Collector","Kill them in their cooldown gap."),I("Maw of Malmortius","Lifeline if the rotation lands."),I("Trinity Force","Sustained mixed DPS out-totals one combo.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Guardian Angel","Survive the one rotation."),I("Mercury's Treads","Tenacity vs the setup CC.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Trinity Force","Outrange their zone with rocket poke."),I("Lord Dominik's Regards","Pen their HP items."),I("Bloodthirster","Sustain the chip war.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Guardian Angel","Survive the ramped window."),I("Rapid Firecannon","Poke outside the zone.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Match their range with mixed-damage poke."),I("The Collector","Execute them when they step up."),I("Trinity Force","Win the proc war on approach.")],behind:[I("Maw of Malmortius","Shield vs AP poke."),I("Guardian Angel","Covers the committed engage."),I("Bloodthirster","Sustain the exchange.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("The Collector","Execute wins the carry mirror."),I("Infinity Edge","Crit spike out-scales them."),I("Lord Dominik's Regards","Shred their armor buys.")],behind:[I("Guardian Angel","Survive their focus, barrage the aftermath."),I("Bloodthirster","Sustain evens the trade."),I("Rapid Firecannon","Range advantage from behind.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute under the shield threshold."),I("Trinity Force","Mixed procs burn through shield cycles."),I("Lord Dominik's Regards","Pen the protected carry.")],behind:[I("Bloodthirster","Enter the sustain war yourself."),I("Guardian Angel","Survive the buffed carry."),I("Rapid Firecannon","Poke over the shield wall.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Poke from outside hook range."),I("The Collector","Execute the catcher who missed."),I("Trinity Force","Valkyrie sidesteps the angle.")],behind:[I("Guardian Angel","Survive the caught scenario."),I("Mercury's Treads","Shorter lockdown on catch."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Mixed damage plus giant slayer melts the line."),I("The Collector","Execute the tank at 5%."),I("Rapid Firecannon","Poke the engage off before it starts.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Mercury's Treads","Tenacity through the chain CC.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Mixed damage is the anti-warden profile."),I("Infinity Edge","Crit volume breaks mitigation."),I("The Collector","Execute through the peel.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the siege.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Mixed proc DPS answers most kits."),I("The Collector","Execute them in one barrage."),I("Rapid Firecannon","Range beats gimmick spacing.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Maw of Malmortius","Vs AP tricks."),I("Mercury's Treads","Tenacity vs the gimmick CC.")],runes:{...CORKI_MID_DEFAULT_RUNES}},
      },
    },
  },
};
