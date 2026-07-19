import { I } from "../runeHelpers.js";

const ZERI_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Bloodline","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Zeri's Q fires on her auto timer, so Lethal Tempo's stacking attack speed is direct Q-spam damage — and her passive converts overflow attack speed usefully. Triumph refunds HP through her chain-takedown teamfights, Legend: Bloodline adds the lifesteal her kite-DPS pattern converts into real durability, Cut Down shreds the frontline she inevitably has to burst through, and the Cash Back + Triple Tonic economy package accelerates her notoriously item-dependent power curve.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZERI — Spark of Zaun: Kite-DPS Hypercarry  (B tier Bot 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zeri", display:"Zeri", dd:"Zeri",
  color:"#3a5a1a", glow:"#a0e040",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Lucian","Caitlyn"], replacements:["Sivir","Tristana","Jinx"],
      role:"Kite-DPS Hypercarry / Wall-Surf Skirmisher",
      corePath:"Stormrazor  ›  Berserker's Greaves  ›  Fiendhunter Bolts  ›  Infinity Edge",
      coreNote:"Zeri turns move speed into damage and damage into move speed — every item here feeds that loop. Stormrazor's energised proc slots into her Q pattern and adds the burst her early game lacks, Fiendhunter Bolts is her premier mid-build spike this patch, and Infinity Edge multiplies the endless Q crits into hypercarry territory. Lord Dominik's Regards closes against frontline stacking. Ult in a teamfight, chain lightning through five people, and surf walls out the other side.",
      sideItems:["Lord Dominik's Regards","Runaan's Hurricane","Phantom Dancer","Bloodthirster","Guardian Angel","Immortal Shieldbow"],
      data:{
        JUGGERNAUT:{ahead:[I("Fiendhunter Bolts","Sustained Q-DPS shreds their HP stacking."),I("Infinity Edge","Crit spike ends the kite-down faster."),I("Lord Dominik's Regards","Pen through their armor curve.")],behind:[I("Phantom Dancer","Speed + AS to kite from further behind."),I("Guardian Angel","Insurance when they finally connect."),I("Bloodthirster","Sustain the chip war.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormrazor","Burst them mid-dive with energised procs."),I("Infinity Edge","Kill the diver before the combo lands."),I("Phantom Dancer","Speed makes the dive whiff entirely.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline shield mid-engage."),I("Phantom Dancer","Kite speed to escape the collapse.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Stormrazor","Burst them during the gap-close."),I("Guardian Angel","Punish the all-in with a revive."),I("Phantom Dancer","Speed denies the jump angle.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Shield floor under their burst."),I("Phantom Dancer","Out-run the reset chase.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Fiendhunter Bolts","Kite-DPS wins the duel they can't end."),I("Phantom Dancer","Speed keeps you permanently out of reach."),I("Bloodthirster","Sustain through their damage windows.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Immortal Shieldbow","Lifeline vs their all-in."),I("Phantom Dancer","Kite harder from behind.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stormrazor","Kill them in their cooldown gap."),I("Phantom Dancer","Speed dodges the setup skillshot."),I("Infinity Edge","End it before the next rotation.")],behind:[I("Immortal Shieldbow","Shield eats the burst rotation."),I("Guardian Angel","Survive the one combo."),I("Phantom Dancer","Speed beats their skillshot aim.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Fiendhunter Bolts","Out-DPS their drain from range."),I("Bloodthirster","Sustain through the zone chip."),I("Lord Dominik's Regards","Pen through their HP items.")],behind:[I("Immortal Shieldbow","Lifeline under the sustained damage."),I("Guardian Angel","Survive the ramped window."),I("Phantom Dancer","Kite outside the drain zone.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Phantom Dancer","Speed closes their poke range for free."),I("Stormrazor","Burst them once inside."),I("Infinity Edge","End the fight on arrival.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit spike wins the DPS mirror."),I("Lord Dominik's Regards","Shred their armor buys."),I("Fiendhunter Bolts","Sustained Q-DPS out-trades.")],behind:[I("Guardian Angel","Survive their focus, DPS the aftermath."),I("Immortal Shieldbow","Lifeline in the 2v2."),I("Phantom Dancer","Kite speed evens the trade.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Fiendhunter Bolts","Sustained DPS burns through shield cycles."),I("Infinity Edge","Burst bigger than the shield budget."),I("Lord Dominik's Regards","Pen through the protected carry.")],behind:[I("Bloodthirster","Your own sustain war entry."),I("Guardian Angel","Survive the buffed carry."),I("Phantom Dancer","Kite around the peel.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Phantom Dancer","Speed makes their hooks unlandable."),I("Stormrazor","Punish every whiff with proc burst."),I("Infinity Edge","Kill the catcher who missed.")],behind:[I("Guardian Angel","Survive the caught scenario."),I("Immortal Shieldbow","Shield the follow-up burst."),I("Phantom Dancer","Out-speed the next attempt.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer melts the engage line."),I("Fiendhunter Bolts","Sustained DPS through their HP."),I("Phantom Dancer","Speed out of their engage radius.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Immortal Shieldbow","Lifeline through the chain CC.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Fiendhunter Bolts","DPS volume through the peel wall."),I("Infinity Edge","Crits eventually break any mitigation.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Phantom Dancer","Speed answers most gimmick kits."),I("Stormrazor","Burst them in one energised window."),I("Infinity Edge","Scale past the gimmick.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Immortal Shieldbow","Lifeline vs surprise burst."),I("Phantom Dancer","Kite what you don't understand.")],runes:{...ZERI_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
