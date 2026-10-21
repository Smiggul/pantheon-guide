import { I } from "../runeHelpers.js";

const JINX_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Bloodline","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Triple Tonic"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's stacking attack speed synergizes with Jinx's minigun form and the reset Get Excited grants after a takedown or Chompers snare. Presence of Mind solves the early mana problem. Legend: Bloodline's omnivamp keeps her healthy through the ramp-up window; Cut Down punishes the tanks she struggles to burst late-game. Cash Back and Triple Tonic offset her item-dependent power spikes with extra early gold and sustain.",
};

// ══════════════════════════════════════════════════════════════════════════
//  JINX — Marksman / Hyper-carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"jinx", display:"Jinx", dd:"Jinx",
  color:"#e056a0", glow:"#ff69c9",
  lanes:["Bot"],
  altBuilds:{
    Bot:[{
      label:"Phantom Dancer kite", tag:"alt",
      corePath:"Hexoptics C44  ›  Phantom Dancer  ›  Infinity Edge  ›  Lord Dominik's Regards",
      // Research: Her previous main build. The minority line on 26.20: Hexoptics C44 into Phantom Dancer into Infinity
      //   Edge is about 5% of OP.GG Emerald+ Jinx cores (61.1% over ~14k games) against Hurricane's 42%, and its
      //   higher completed-core win rate carries the same survivorship bias as every three-item figure.
      coreNote:"For one situation: a dive-heavy enemy team with no real front line. Phantom Dancer second trades Runaan's Hurricane's cleave for more attack speed, movement speed and Ghosting, so you can kite assassins and divers instead of shredding tanks you are not facing. Its win rate looks higher, but that is not proof it is better: take Hurricane by default, and Phantom Dancer when Hurricane's bolts would have nothing worth hitting.",
      runes:{...JINX_BOT_DEFAULT_RUNES},
      sideItems:["Berserker's Greaves","Runaan's Hurricane","Bloodthirster","Guardian Angel","Mercury's Treads","Mortal Reminder"],
    }],
  },
  roles:{
    Bot:{
      bans:["Seraphine","Zeri","Ziggs"], replacements:["Kai'Sa","Xayah","Miss Fortune"],
      role:"Marksman / Hyper-carry",
      corePath:"Hexoptics C44  ›  Runaan's Hurricane  ›  Infinity Edge  ›  Lord Dominik's Regards",
      // Research: On 26.20 her build has settled on Runaan's Hurricane second. Hexoptics C44 into Hurricane into Infinity
      //   Edge is the most common Emerald+ core by a wide margin (about 42% of OP.GG cores, 58.6% over ~123k
      //   games), and Hurricane is on roughly three quarters of all Jinx games (~299k), so its 26.20 nerf did not
      //   move her off it. Lord Dominik's is the usual fourth item. Phantom Dancer second is the minority option
      //   (the alternate).
      coreNote:"Jinx is a scaling hyper-carry. Hexoptics C44 first rewards attacking from long range, which rocket form does, and its takedown range bonus fires alongside Get Excited. Runaan's Hurricane second: its bolts apply on-hit to two extra targets, for wave clear in lane and front-line shred in teamfights. Infinity Edge third, then Lord Dominik's Regards. Into a dive team with no front line, take Phantom Dancer second instead; Yun Tal Wildarrows is a less common first-item swap.",
      sideItems:["Berserker's Greaves","Gluttonous Greaves","Mercury's Treads","Phantom Dancer","Yun Tal Wildarrows","Bloodthirster","Guardian Angel","Mortal Reminder","Zeke's Convergence","Kraken Slayer","Rapid Firecannon"],
      data:{
        JUGGERNAUT:{ahead:[I("Kraken Slayer","Missing-health bonus damage cuts through their stacked HP."),I("Lord Dominik's Regards","% armor pen keeps damage relevant as they build tank."),I("Rapid Firecannon","Range lets you kite the walk-down indefinitely.")],behind:[I("Guardian Angel","Second life vs their inevitable walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Rapid Firecannon","Range to kite even from a deficit.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range buys a reposition window before the dive lands."),I("Guardian Angel","Insurance if the all-in connects anyway."),I("Runaan's Hurricane","Wave clear keeps minions between you and them.")],behind:[I("Guardian Angel","Critical — survive the dive, win the reset."),I("Mercury's Treads","Shorter CC from the engage."),I("Zeke's Convergence","Amplify damage if your support peels successfully.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Guardian Angel","Second life eats the one-shot combo."),I("Bloodthirster","Shield absorbs the opener."),I("Rapid Firecannon","Range keeps you out of their engage window.")],behind:[I("Guardian Angel","Mandatory — this is your entire answer to a one-shot."),I("Mercury's Treads","Shorter CC before the finisher."),I("Bloodthirster","Shield vs the burst.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Range keeps the duelist from ever reaching you."),I("Bloodthirster","Sustain wins the poke war before they close."),I("Lord Dominik's Regards","Pen keeps damage up as they itemize armor.")],behind:[I("Guardian Angel","Trade even against a stronger duelist."),I("Mercury's Treads","Shorter CC on their gap-close."),I("Bloodthirster","Lifesteal to survive the chase.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Mercury's Treads","Shorter CC before their combo lands."),I("Rapid Firecannon","Range denies their engage angle."),I("Guardian Angel","Insurance even while ahead.")],behind:[I("Mercury's Treads","Mandatory vs a full burst rotation."),I("Guardian Angel","Second life is your only answer."),I("Bloodthirster","Shield absorbs part of the combo.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Mortal Reminder","GW cuts their sustain in the DPS race."),I("Kraken Slayer","The third-hit bonus keeps scaling as they drop — add pen for their resists."),I("Rapid Firecannon","Range keeps the fight on your terms.")],behind:[I("Mortal Reminder","Mandatory vs Vladimir/Swain-style drain."),I("Mercury's Treads","Shorter CC."),I("Guardian Angel","Second life for the extended fight.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Out-ranges some poke, safer repositioning."),I("Lord Dominik's Regards","Pen keeps damage relevant."),I("Runaan's Hurricane","Wave presence lets you soak poke on minions.")],behind:[I("Mercury's Treads","Shorter CC from range."),I("Guardian Angel","Survive the poke-to-burst combo."),I("Zeke's Convergence","Amplify retaliation once you close.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Infinity Edge","Crit damage wins the DPS war outright."),I("Lord Dominik's Regards","Pen through their armor stacking."),I("Rapid Firecannon","Range edge in the poke war.")],behind:[I("Guardian Angel","Second life to close the gold gap."),I("Mercury's Treads","Shorter peel CC."),I("Bloodthirster","Sustain to survive extended fights.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Mortal Reminder","GW cuts their heal/shield value."),I("Lord Dominik's Regards","Pen keeps damage relevant through shields."),I("Kraken Slayer","Steady third-hit damage outlasts their shield stacking.")],behind:[I("Mortal Reminder","Non-negotiable vs a sustain-heavy lane."),I("Mercury's Treads","Shorter CC."),I("Guardian Angel","Second life vs the combined burst.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rapid Firecannon","Range keeps you outside most hook ranges."),I("Guardian Angel","Insurance if a hook connects."),I("Mercury's Treads","Shorter CC on a landed pick.")],behind:[I("Mercury's Treads","Mandatory — caught Jinx is dead Jinx."),I("Guardian Angel","Second life after a catch."),I("Zeke's Convergence","Amplify the punish once you escape.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Lord Dominik's Regards","Pen through their stacked armor."),I("Kraken Slayer","Missing-health bonus damage into their HP pool."),I("Rapid Firecannon","Range to kite their engage.")],behind:[I("Mercury's Treads","Shorter stuns from their initiation."),I("Guardian Angel","Survive the burst that follows their engage."),I("Zeke's Convergence","Amplify damage once your team peels.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Pen through their mitigation stack."),I("Kraken Slayer","Steady third-hit damage outlasts their shields."),I("Mortal Reminder","Cuts Tahm Kench/Shen passive sustain.")],behind:[I("Mortal Reminder","Only reliable answer to their sustain."),I("Mercury's Treads","Shorter CC."),I("Guardian Angel","Survive the peel + engage combo.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Reduces Teemo blind / Kennen stun duration."),I("Rapid Firecannon","Range advantage vs most Specialists."),I("Lord Dominik's Regards","Pen keeps damage consistent.")],behind:[I("Mercury's Treads","Shortens their key disable."),I("Guardian Angel","Second life vs burst setups."),I("Bloodthirster","Sustain through their poke pattern.")],runes:{...JINX_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
