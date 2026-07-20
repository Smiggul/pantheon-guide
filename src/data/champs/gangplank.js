import { I } from "../runeHelpers.js";

const GANGPLANK_TOP_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Haste","Cut Down"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Deathfire Touch burns on every Parrrley and barrel hit — Gangplank's poke pattern keeps the DoT permanently refreshed. Nimbus Cloak turns summoner casts into barrel-chain repositioning, Transcendence and Legend: Haste feed the Q and E cooldowns his whole combo economy runs on, Scorch stacks with the burn in early trades, and Cut Down shreds the HP-stacking frontline his barrels are aimed over. Silver Serpents fund the upgraded ult that ends sieges from across the map.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GANGPLANK — Saltwater Scourge: Barrel Crit Duelist  (S tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"gangplank", display:"Gangplank", dd:"Gangplank",
  color:"#4a2a1a", glow:"#e09040",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Irelia","Renekton","Darius"], replacements:["Jax","Fiora","Jayce"],
      role:"Barrel-Chain Crit Scourge",
      corePath:"Essence Reaver  ›  Plated Steelcaps  ›  The Collector  ›  Infinity Edge",
      coreNote:"Gangplank is rank-6 top on real data: barrels convert his crit items into AoE armor-shredding nukes, and one clean triple-chain deletes an entire teamfight. Essence Reaver refunds mana on every Parrrley, The Collector executes whoever the barrel leaves at 5%, Infinity Edge multiplies the barrel crits into one-shot territory, and Lord Dominik's finishes tanks. His W eats every form of CC — bait the lockdown, oranges it, and barrel the puddle they're standing in. Global ult wins fights he never attends.",
      sideItems:["Lord Dominik's Regards","Bloodthirster","Guardian Angel","Maw of Malmortius","Serylda's Grudge","Sterak's Gage"],
      data:{
        JUGGERNAUT:{ahead:[I("Essence Reaver","Q-poke them off CS forever — never trade in melee."),I("The Collector","Execute beats their HP stacking."),I("Lord Dominik's Regards","Barrel crits through the armor curve.")],behind:[I("Guardian Angel","Insurance when they finally connect."),I("Maw of Malmortius","Vs mixed-damage juggernauts."),I("Sterak's Gage","Survive the all-in and barrel the retreat.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("The Collector","Barrel them mid-engage — W eats their lockdown."),I("Infinity Edge","Kill the diver before the combo lands."),I("Guardian Angel","Punish the failed dive twice.")],behind:[I("Guardian Angel","Second life against the engage."),I("Sterak's Gage","Shield their burst opener."),I("Maw of Malmortius","Vs AP divers.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("The Collector","Your barrel burst beats their combo — W cleanses the setup."),I("Guardian Angel","Trade one-shots and revive."),I("Infinity Edge","End it in one chain.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Maw of Malmortius","Vs AP assassins."),I("Sterak's Gage","Shield floor under the combo.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Essence Reaver","Poke them below all-in HP before they engage."),I("The Collector","Execute the extended-fight reset."),I("Bloodthirster","Sustain their damage windows.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Sterak's Gage","Survive the forced 1v1."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Essence Reaver","Out-range their combo with Q-barrel poke."),I("Maw of Malmortius","Lifeline if the rotation lands."),I("The Collector","Execute the cooldown gap.")],behind:[I("Maw of Malmortius","Rush the magic lifeline."),I("Guardian Angel","Survive the one rotation."),I("Mercury's Treads","W + tenacity double-cleanses their CC.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Essence Reaver","Outrange their zone with barrel poke."),I("Serylda's Grudge","Pen scales into their HP items."),I("Bloodthirster","Sustain the chip war.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Guardian Angel","Survive the ramped window."),I("Sterak's Gage","Shield the extended fight.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Essence Reaver","Win the poke mirror — barrels hit harder than their spells."),I("The Collector","Execute them when they step up."),I("Infinity Edge","One barrel ends the siege.")],behind:[I("Maw of Malmortius","Shield vs their AP poke."),I("Guardian Angel","Covers the committed engage."),I("Bloodthirster","Sustain the chip exchange.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("The Collector","Barrel-execute the ranged top in one chain."),I("Infinity Edge","Crit math guarantees it."),I("Serylda's Grudge","Pen + slow through their kiting.")],behind:[I("Guardian Angel","Trade kills and revive."),I("Sterak's Gage","Survive the kite-down."),I("Bloodthirster","Sustain the poke war.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("The Collector","Execute under the shield threshold."),I("Infinity Edge","Barrel bigger than the shield budget."),I("Lord Dominik's Regards","Pen the protected carry.")],behind:[I("Bloodthirster","Out-sustain the value war."),I("Guardian Angel","Survive the buffed carry."),I("Serylda's Grudge","Pen + slow through the peel.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Essence Reaver","W cleanses the hook — barrel the puddle they hold."),I("The Collector","Execute the catcher who missed."),I("Infinity Edge","Punish every whiff harder.")],behind:[I("Guardian Angel","Survive the caught scenario — W the chain."),I("Sterak's Gage","Shield the follow-up burst."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Giant slayer + barrel shred melts the engage line."),I("The Collector","Execute the tank at 5%."),I("Essence Reaver","Poke the engage off before it starts.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Mercury's Treads","W + tenacity vs the chain CC.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Barrels shred armor — wardens included."),I("Infinity Edge","Crit volume breaks any mitigation."),I("The Collector","Execute through the peel.")],behind:[I("Serylda's Grudge","Pen + slow vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Bloodthirster","Sustain the attrition siege.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Essence Reaver","Barrel poke answers most gimmicks from range."),I("The Collector","Execute them in one chain window."),I("Infinity Edge","Scale past the gimmick.")],behind:[I("Guardian Angel","Survive the setup you can't scout."),I("Maw of Malmortius","Vs AP tricks."),I("Mercury's Treads","W + tenacity cleanses the gimmick.")],runes:{...GANGPLANK_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
