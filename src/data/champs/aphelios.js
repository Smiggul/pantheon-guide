import { I } from "../runeHelpers.js";

const APHELIOS_BOT_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Bloodline","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack procs in three autos regardless of which gun is in hand — the one constant in Aphelios' rotating arsenal — and amps the burst windows Calibrum poke and Infernum sprays cash in. Triumph refunds HP through the moonlight teamfights his ult chains, Legend: Bloodline stacks lifesteal that Severum doubles down on, Cut Down shreds the frontline his weapon wheel struggles to skip, and the Cash Back + Triple Tonic economy line accelerates the notoriously item-dependent 200-years curve.",
};

// ══════════════════════════════════════════════════════════════════════════
//  APHELIOS — Weapon of the Faithful: Arsenal Hypercarry  (A/B- Bot 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"aphelios", display:"Aphelios", dd:"Aphelios",
  color:"#3a3a4a", glow:"#c0b0e0",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Lucian","Caitlyn"], replacements:["Jinx","Kai'Sa","Xayah"],
      role:"Five-Gun Arsenal Carry",
      corePath:"The Collector  ›  Berserker's Greaves  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Aphelios is five ADCs in a trench coat, and this crit core feeds all of them: The Collector's execute turns Calibrum marks and Infernum AoE into kill conversions, Infinity Edge multiplies every gun's spike, and Lord Dominik's Regards keeps the arsenal lethal into frontline. Immortal Shieldbow and Bloodthirster close with the survivability a zero-mobility carry needs. Track your gun order — fights are won by planning which two weapons you'll hold when the dragon spawns, not by reacting.",
      sideItems:["Immortal Shieldbow","Bloodthirster","Runaan's Hurricane","Guardian Angel","Mercurial Scimitar","Phantom Dancer"],
      data:{
        JUGGERNAUT:{ahead:[I("The Collector","Execute beats their HP stacking."),I("Lord Dominik's Regards","Giant slayer through the armor curve."),I("Infinity Edge","Crit math melts the walk-down.")],behind:[I("Phantom Dancer","Speed + AS to kite from further behind."),I("Guardian Angel","Insurance when they finally connect."),I("Bloodthirster","Sustain the chip war.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("The Collector","Burst them mid-dive with Infernum + execute."),I("Immortal Shieldbow","Lifeline blunts the engage."),I("Infinity Edge","Kill the diver before the combo lands.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline shield mid-engage."),I("Phantom Dancer","Kite speed to escape the collapse.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Burst them during the gap-close."),I("Guardian Angel","Punish the all-in with a revive."),I("Immortal Shieldbow","Shield floor under their burst.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Lifeline vs the combo."),I("Mercurial Scimitar","Cleanse the lockdown they open with.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Infinity Edge","Crit spike wins the duel they can't end."),I("Bloodthirster","Sustain through their damage windows."),I("The Collector","Execute the extended-fight reset.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Immortal Shieldbow","Lifeline vs their all-in."),I("Phantom Dancer","Kite harder from behind.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("The Collector","Kill them in their cooldown gap."),I("Immortal Shieldbow","Shield eats the rotation."),I("Infinity Edge","End it before the next combo.")],behind:[I("Immortal Shieldbow","Shield eats the burst rotation."),I("Guardian Angel","Survive the one combo."),I("Mercurial Scimitar","Cleanse the setup CC.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Bloodthirster","Sustain through the zone chip."),I("Lord Dominik's Regards","Pen through their HP items."),I("The Collector","Execute beats drain sustain.")],behind:[I("Immortal Shieldbow","Lifeline under the sustained damage."),I("Guardian Angel","Survive the ramped window."),I("Phantom Dancer","Kite outside the drain zone.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("The Collector","Calibrum wins the poke war — execute closes it."),I("Infinity Edge","Punish their squishiness at range."),I("Phantom Dancer","Speed dodges the volleys.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit spike wins the DPS mirror."),I("Lord Dominik's Regards","Shred their armor buys."),I("The Collector","Execute converts even trades into wins.")],behind:[I("Guardian Angel","Survive their focus, DPS the aftermath."),I("Immortal Shieldbow","Lifeline in the 2v2."),I("Bloodthirster","Sustain evens the trade.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute under the shield threshold."),I("Infinity Edge","Burst bigger than the shield budget."),I("Lord Dominik's Regards","Pen through the protected carry.")],behind:[I("Bloodthirster","Enter the sustain war yourself."),I("Guardian Angel","Survive the buffed carry."),I("Runaan's Hurricane","Spray pressure through the peel.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("The Collector","Punish every whiff with an execute window."),I("Phantom Dancer","Speed makes their hooks unlandable."),I("Infinity Edge","Kill the catcher who missed.")],behind:[I("Guardian Angel","Survive the caught scenario."),I("Mercurial Scimitar","Cleanse the hook lockdown."),I("Immortal Shieldbow","Shield the follow-up burst.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer melts the engage line."),I("The Collector","Execute the tank at 5%."),I("Runaan's Hurricane","Infernum + Hurricane clears the whole wave of them.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Immortal Shieldbow","Lifeline through the chain CC.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Infinity Edge","Crit volume breaks any mitigation."),I("The Collector","Execute through the peel.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("The Collector","Five guns answer most gimmicks — execute answers the rest."),I("Infinity Edge","Scale past the gimmick."),I("Runaan's Hurricane","Spray answers clone tricks.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Immortal Shieldbow","Lifeline vs surprise burst."),I("Mercurial Scimitar","Cleanse the key CC.")],runes:{...APHELIOS_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
