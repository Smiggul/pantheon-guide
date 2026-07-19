import { I } from "../runeHelpers.js";

const KOGMAW_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Bloodline","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Conditioning","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Kog'Maw's W already breaks the attack-speed cap — Lethal Tempo stacks on top of it for the highest sustained DPS ceiling of any carry in the game. Triumph refunds HP through the teamfights he melts, Legend: Bloodline converts the machine-gun autos into a lifesteal engine, Last Stand rewards the front-loaded focus he inevitably absorbs, and the Resolve splash (Conditioning, Overgrowth) is the current tech: a hypercarry whose entire game is surviving to auto needs durability more than more damage.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KOG'MAW — Mouth of the Abyss: On-Hit Hypercarry  (B tier Bot 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kogmaw", display:"Kog'Maw", dd:"KogMaw",
  color:"#3a4a1a", glow:"#b0e040",
  lanes:["Bot"],
  roles:{
    Bot:{
      bans:["Draven","Lucian","Tristana"], replacements:["Kalista","Twitch","Vayne"],
      role:"Artillery-Range On-Hit Melter",
      corePath:"Blade of The Ruined King  ›  Berserker's Greaves  ›  Guinsoo's Rageblade  ›  Runaan's Hurricane",
      coreNote:"Kog'Maw is a turret your team builds a fortress around: W gives him artillery range on percent-HP on-hit autos, and this build turns every auto into three. Blade of The Ruined King starts the percent-HP melt, Guinsoo's Rageblade doubles the on-hit payload, Runaan's Hurricane sprays it across the whole teamfight, and Terminus adds pen plus resists as the fight extends. He has zero mobility and needs none if the team peels — draft enchanters, ban divers, and melt everything from twelve hundred range.",
      sideItems:["Terminus","Wit's End","Lord Dominik's Regards","Guardian Angel","Immortal Shieldbow","Bloodthirster"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of The Ruined King","Percent-HP autos shred their giant bar."),I("Guinsoo's Rageblade","Double on-hit melts through the HP stack."),I("Terminus","Pen keeps the melt real through resists.")],behind:[I("Guardian Angel","Insurance when they finally reach you."),I("Immortal Shieldbow","Lifeline shield mid-fight."),I("Terminus","Resists to survive the walk-down.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Guinsoo's Rageblade","W-range DPS kills them before they arrive."),I("Terminus","Resist stacks blunt the engage."),I("Wit's End","On-hit MR vs AP divers.")],behind:[I("Guardian Angel","Second life against the inevitable dive."),I("Immortal Shieldbow","Lifeline mid-engage."),I("Terminus","Resists raise their kill bar.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Guinsoo's Rageblade","Kill them during the gap-close animation."),I("Guardian Angel","Punish the all-in with a revive."),I("Terminus","Resist stacks against the burst.")],behind:[I("Guardian Angel","Rush — trade the one-shot and come back."),I("Immortal Shieldbow","Shield floor under their combo."),I("Wit's End","MR vs AP assassins.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Blade of The Ruined King","Percent-HP wins the extended duel."),I("Guinsoo's Rageblade","On-hit volume out-duels their duel."),I("Bloodthirster","Sustain their damage windows.")],behind:[I("Guardian Angel","Insurance in the duel you can't refuse."),I("Immortal Shieldbow","Lifeline vs the all-in."),I("Wit's End","On-hit MR vs AP skirmishers.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR on-hit blunts the rotation."),I("Guinsoo's Rageblade","Kill them in their cooldown gap."),I("Terminus","Resist stacks survive the combo.")],behind:[I("Wit's End","Rush MR — their combo math must fail."),I("Guardian Angel","Survive the one rotation."),I("Immortal Shieldbow","Shield the burst window.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","On-hit MR shrugs off the drain."),I("Blade of The Ruined King","Shred them faster than they drain you."),I("Guinsoo's Rageblade","Stack rate beats their ramp.")],behind:[I("Wit's End","MR keeps you in the fight."),I("Guardian Angel","Survive the ramped window."),I("Bloodthirster","Out-sustain the chip.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Guinsoo's Rageblade","Your W range matches theirs — with triple the DPS."),I("Runaan's Hurricane","Spray through their poke screen."),I("Terminus","Pen once the fight starts.")],behind:[I("Immortal Shieldbow","Shield eats the poke spike."),I("Guardian Angel","Covers the forced engage."),I("Bloodthirster","Sustain the chip war.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Guinsoo's Rageblade","Out-DPS the mirror with on-hit volume."),I("Terminus","Pen + resists win the auto war."),I("Lord Dominik's Regards","Shred their late armor.")],behind:[I("Guardian Angel","Survive their focus and melt the aftermath."),I("Immortal Shieldbow","Lifeline in the 2v2."),I("Bloodthirster","Sustain evens the trade.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blade of The Ruined King","Percent-HP ignores the shield budget."),I("Guinsoo's Rageblade","On-hit volume burns through shield cycles."),I("Terminus","Pen through the protected carry.")],behind:[I("Blade of The Ruined King","Shred through shields from behind."),I("Guardian Angel","Survive the buffed carry."),I("Wit's End","MR vs their poke package.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Runaan's Hurricane","Bolts proc on-hit through their screen — stay at W range."),I("Terminus","Resists cover the landed catch."),I("Guinsoo's Rageblade","Melt the catcher who missed.")],behind:[I("Guardian Angel","Survive the caught scenario."),I("Immortal Shieldbow","Shield the follow-up burst."),I("Wit's End","MR vs AP catchers.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of The Ruined King","Percent-HP melts engage tanks."),I("Lord Dominik's Regards","Giant slayer through their armor."),I("Guinsoo's Rageblade","On-hit volume across the engage line.")],behind:[I("Lord Dominik's Regards","Required pen vs stacked armor."),I("Guardian Angel","Survive the wombo."),I("Immortal Shieldbow","Lifeline through the chain CC.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Shred the peel-tank protecting their carry."),I("Blade of The Ruined King","Percent-HP through the armor wall."),I("Terminus","Pen stacks past their mitigation.")],behind:[I("Lord Dominik's Regards","Mandatory vs their armor stack."),I("Guardian Angel","Insurance into the peel wall."),I("Guinsoo's Rageblade","On-hit volume is the only path through.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Guinsoo's Rageblade","Generic on-hit DPS answers most kits."),I("Terminus","Resists cover unknown damage types."),I("Runaan's Hurricane","Spray answers clone and swarm gimmicks.")],behind:[I("Guardian Angel","Survive the gimmick you can't scout."),I("Wit's End","MR vs AP tricks."),I("Immortal Shieldbow","Lifeline vs surprise burst.")],runes:{...KOGMAW_BOT_DEFAULT_RUNES}},
      },
    },
  },
};
