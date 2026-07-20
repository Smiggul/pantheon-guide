import { I } from "../runeHelpers.js";

const NILAH_BOT_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Nilah is the only melee ADC, and Conqueror is why it works — her W-E-Q weave stacks it instantly, and the extended brawl her whip range forces is exactly where it pays. Triumph refunds HP through the multi-takedown fights her R pull creates, Legend: Alacrity feeds the passive-shared attack speed, Last Stand backs the low-HP dives her all-in pattern demands, and the Cash Back + Cosmic Insight economy line accelerates the two-item spike where she stops being a lane liability and starts being a teamfight massacre.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NILAH — Joy Unbound: Melee Brawl ADC  (B tier Bot, 53-55% WR 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nilah", display:"Nilah", dd:"Nilah",
  color:"#2a4a5a", glow:"#60c0e0",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Syndra","Xayah","Viktor"], replacements:["Samira","Kai'Sa","Lucian"],
      role:"Whip-Range Brawl Carry",
      corePath:"The Collector  ›  Gluttonous Greaves  ›  Infinity Edge  ›  Lord Dominik's Regards",
      coreNote:"Nilah trades range for the best brawl kit any ADC owns: W dodges autos entirely, E surfs to targets, and Apotheosis pulls whole teams into blender range while healing hers. The Collector converts her dive commitment into executes, Gluttonous Greaves feed omnivamp into the W-brawl pattern, Infinity Edge multiplies the whip crits, and Immortal Shieldbow backs the melee positioning. Her passive shares XP-and-heal joy with her support — enchanters love her, and so does her win rate: one of the highest in the entire bot pool.",
      sideItems:["Immortal Shieldbow","Bloodthirster","Phantom Dancer","Guardian Angel","Mercurial Scimitar","Death's Dance"],
      data:{
        JUGGERNAUT:{ahead:[I("The Collector","Execute beats their HP stacking."),I("Lord Dominik's Regards","Giant slayer through the armor curve."),I("Bloodthirster","Sustain the brawl they force.")],behind:[I("Immortal Shieldbow","Lifeline when they finally connect."),I("Guardian Angel","Insurance in the melee scrum."),I("Phantom Dancer","Speed to pick your fights.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("The Collector","Burst them mid-dive — W blanks their autos."),I("Immortal Shieldbow","Lifeline blunts the engage."),I("Infinity Edge","Kill the diver before the combo lands.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline shield mid-engage."),I("Death's Dance","Bleed their burst out.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Your all-in beats theirs — W dodges half their damage."),I("Guardian Angel","Punish the attempt with a revive."),I("Immortal Shieldbow","Shield floor under their burst.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Lifeline vs the combo."),I("Mercurial Scimitar","Cleanse the lockdown opener.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Infinity Edge","Win the melee mirror — your W blanks their autos."),I("Bloodthirster","Sustain through their damage windows."),I("The Collector","Execute the extended-fight reset.")],behind:[I("Immortal Shieldbow","Lifeline vs their all-in."),I("Guardian Angel","Insurance in the forced duel."),I("Death's Dance","Bleed conversion evens the trade.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("The Collector","E-surf onto them in the cooldown gap."),I("Immortal Shieldbow","Shield eats the rotation."),I("Infinity Edge","End it before the next combo.")],behind:[I("Immortal Shieldbow","Shield eats the burst rotation."),I("Mercurial Scimitar","Cleanse the setup CC."),I("Guardian Angel","Survive the one combo.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Bloodthirster","Sustain through the zone chip — then dive."),I("The Collector","Execute beats drain sustain."),I("Lord Dominik's Regards","Pen their HP items.")],behind:[I("Immortal Shieldbow","Lifeline under the sustained damage."),I("Guardian Angel","Survive the ramped window."),I("Mercurial Scimitar","Cleanse the root that holds you in it.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Phantom Dancer","Speed closes the poke gap — W blanks nothing they have."),I("The Collector","Delete them on arrival."),I("Infinity Edge","End the fight the moment you touch them.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","W blanks their autos — the DPS mirror is rigged for you."),I("The Collector","Execute converts even trades."),I("Lord Dominik's Regards","Shred their armor buys.")],behind:[I("Immortal Shieldbow","Lifeline in the 2v2."),I("Guardian Angel","Survive their focus, brawl the aftermath."),I("Phantom Dancer","Speed to force the melee range.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute under the shield threshold."),I("Infinity Edge","Burst bigger than the shield budget."),I("Bloodthirster","Your passive + BT out-sustains their package.")],behind:[I("Bloodthirster","Enter the sustain war — your passive doubles it."),I("Guardian Angel","Survive the buffed carry."),I("Lord Dominik's Regards","Pen the protected target.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Phantom Dancer","Speed + E-surf makes their hooks whiff."),I("The Collector","Punish every miss with an execute window."),I("Infinity Edge","Kill the catcher who missed.")],behind:[I("Mercurial Scimitar","Cleanse the hook lockdown."),I("Guardian Angel","Survive the caught scenario."),I("Immortal Shieldbow","Shield the follow-up burst.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer melts the engage line."),I("The Collector","Execute the tank at 5%."),I("Bloodthirster","Sustain through the wombo you dive into.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Mercurial Scimitar","Cleanse the chain CC.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Infinity Edge","Crit volume breaks any mitigation."),I("The Collector","Execute through the peel.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("The Collector","Dive-execute answers most gimmicks."),I("Infinity Edge","Scale past the gimmick."),I("Phantom Dancer","Speed beats trick spacing.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Immortal Shieldbow","Lifeline vs surprise burst."),I("Mercurial Scimitar","Cleanse the key CC.")],runes:{...NILAH_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
