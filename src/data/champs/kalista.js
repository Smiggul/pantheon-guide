import { I } from "../runeHelpers.js";

const KALISTA_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Treasure Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Kalista's hop-weaving turns attack speed directly into mobility — Lethal Tempo stacks make her literally harder to catch as the fight goes on, and every auto plants another Rend spear. Triumph refunds HP on the fights her all-in E resets, Legend: Alacrity compounds the hop speed, Last Stand suits the aggressive low-HP windows her kit forces, Sudden Impact procs off every hop, and Treasure Hunter accelerates the Guinsoo's spike her build revolves around.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KALISTA — Spear of Vengeance: Hop-Weave Rend ADC  (B tier Bot 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kalista", display:"Kalista", dd:"Kalista",
  color:"#1a4a3a", glow:"#50e0a0",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Caitlyn","Miss Fortune"], replacements:["Vayne","Kai'Sa","Twitch"],
      role:"Hop-Weave Rend Stacker",
      corePath:"Statikk Shiv  ›  Berserker's Greaves  ›  Guinsoo's Rageblade  ›  Terminus",
      coreNote:"Kalista stacks spears, and everything in this build makes each spear worth more: Statikk Shiv gives the waveclear her low-range lane otherwise lacks, Guinsoo's Rageblade doubles the stack rate and adds on-hit damage that Rend detonates, and Terminus layers pen plus resists into the endless-auto pattern. Jak'Sho closes the build into a drain-fight monster. Her Fate's Call ult turns the support into an engage tool — play around it like a second Flash.",
      sideItems:["Jak'Sho, The Protean","Blade of The Ruined King","Wit's End","Runaan's Hurricane","Lord Dominik's Regards","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Guinsoo's Rageblade","Stack spears faster than they can close."),I("Blade of The Ruined King","Percent-HP on-hit shreds their bar."),I("Terminus","Pen keeps Rend real through resists.")],behind:[I("Statikk Shiv","Farm safely from range with waveclear."),I("Guardian Angel","Insurance when they finally catch you."),I("Wit's End","On-hit MR if they build hybrid.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Guinsoo's Rageblade","Hop-weave DPS melts them mid-dive."),I("Terminus","Resists from stacks blunt the engage."),I("Jak'Sho, The Protean","Drain tank through their all-in.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Jak'Sho, The Protean","Resist stacking answers repeat engages."),I("Wit's End","MR on-hit vs AP divers.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Guinsoo's Rageblade","Kill them during their gap-close animation."),I("Guardian Angel","Punish their all-in with a revive."),I("Terminus","Resist stacks raise their kill bar.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Wit's End","MR vs AP assassins."),I("Statikk Shiv","Farm from safety meanwhile.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Guinsoo's Rageblade","Hop-weaving out-duels their duel."),I("Blade of The Ruined King","Percent-HP wins the extended 1v1."),I("Jak'Sho, The Protean","Drain the long fight.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Terminus","Resists + pen close the gap."),I("Wit's End","On-hit MR vs AP skirmishers.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Guinsoo's Rageblade","Kill them in their cooldown gap."),I("Wit's End","MR on-hit blunts the rotation."),I("Terminus","Resist stacks survive the combo.")],behind:[I("Wit's End","Rush MR — their combo math must fail."),I("Guardian Angel","Survive the one rotation."),I("Statikk Shiv","Waveclear from outside their range.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","On-hit MR shrugs off the drain."),I("Blade of The Ruined King","Shred them faster than they drain you."),I("Guinsoo's Rageblade","Stack rate beats their ramp.")],behind:[I("Wit's End","MR keeps you in the fight."),I("Guardian Angel","Survive the ramped window."),I("Statikk Shiv","Farm outside their zone.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Guinsoo's Rageblade","Hop inside their range and end it."),I("Statikk Shiv","Match their waveclear siege."),I("Terminus","Pen once you close.")],behind:[I("Statikk Shiv","Clear waves from the safest angle."),I("Guardian Angel","Covers the forced engage."),I("Wit's End","MR chips their poke math.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Guinsoo's Rageblade","Out-DPS the mirror with stack speed."),I("Terminus","Pen + resists win the auto war."),I("Lord Dominik's Regards","Shred their late armor.")],behind:[I("Guardian Angel","Survive their focus and Rend the aftermath."),I("Statikk Shiv","Farm back into the game."),I("Jak'Sho, The Protean","Durability wins even trades.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Guinsoo's Rageblade","Sustained on-hit burns through shield cycles."),I("Blade of The Ruined King","Percent-HP ignores the shield budget."),I("Terminus","Pen through the protected carry.")],behind:[I("Blade of The Ruined King","Shred through shields from behind."),I("Guardian Angel","Survive the buffed carry."),I("Wit's End","MR vs their poke package.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Guinsoo's Rageblade","Hop-weaving makes hooks near-unlandable."),I("Terminus","Resists cover the landed catch."),I("Lord Dominik's Regards","Punish their tanky engage follow-up.")],behind:[I("Guardian Angel","Survive the caught scenario."),I("Wit's End","MR vs AP catchers."),I("Statikk Shiv","Farm from hook-safe range.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of The Ruined King","Percent-HP melts engage tanks."),I("Lord Dominik's Regards","Giant slayer through their armor."),I("Guinsoo's Rageblade","Stack Rend on the whole engage line.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Jak'Sho, The Protean","Durability through the chain CC.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Blade of The Ruined King","Percent-HP through the armor wall."),I("Terminus","Pen stacks past their mitigation.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Guinsoo's Rageblade","On-hit volume is your only path through.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Guinsoo's Rageblade","Generic on-hit DPS answers most kits."),I("Terminus","Resists cover unknown damage types."),I("Statikk Shiv","Waveclear beats gimmick siege.")],behind:[I("Guardian Angel","Survive the gimmick you can't scout."),I("Wit's End","MR vs AP tricks."),I("Statikk Shiv","Farm safely meanwhile.")],runes:{...KALISTA_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
