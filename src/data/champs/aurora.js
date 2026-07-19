import { I } from "../runeHelpers.js";

const AURORA_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Taste of Blood","Grisly Mementos","Ultimate Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Aurora's Q-auto-E trade pattern procs Electrocute in one rotation, and her spirit-realm mobility lets her take the trade and vanish before the answer comes. Taste of Blood sustains the skirmish-heavy lanes she plays, Grisly Mementos stacks haste off her constant pick attempts, Ultimate Hunter brings Between Worlds up for more of the realm-warp teamfights she wins, and Manaflow Band + Transcendence keep the spell spam funded. Real data shows the same page in both Mid and Top — her kit plays identically in either lane.",
};

// ══════════════════════════════════════════════════════════════════════════
//  AURORA — Witch Between Worlds: Realm-Hop Skirmish Mage  (B Mid/Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"aurora", display:"Aurora", dd:"Aurora",
  color:"#4a3a6a", glow:"#b090e0",
  lanes:["Mid","Top"],
  roles:{
    Mid:{
      bans:["Katarina","Twisted Fate","Zed"], replacements:["Ahri","Lux","Syndra"],
      role:"Realm-Hop Skirmish Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Aurora is a skirmish mage with an assassin's trade pattern: Q marks, E knocks back, and the hop resets make her maddening to punish. Luden's Echo adds burst to the Electrocute rotation, Shadowflame converts chunked targets into executes, and Rabadon's Deathcap scales her into a one-rotation threat. Zhonya's Hourglass covers the melee-range finish her Q recast demands. Her ult warps whole teamfights into her spirit realm — fight inside it, win inside it.",
      sideItems:["Zhonya's Hourglass","Void Staff","Banshee's Veil","Cosmic Drive","Horizon Focus","Mejai's Soulstealer"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke rotations they can never answer."),I("Shadowflame","Pen punishes their low MR."),I("Cosmic Drive","Speed to kite the walk-down forever.")],behind:[I("Cosmic Drive","Speed keeps their hands off you."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the burst real.")],runes:{...AURORA_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage before the combo lands."),I("Luden's Echo","Full rotation beats their entry damage."),I("Zhonya's Hourglass","Stasis wastes the dive entirely.")],behind:[I("Zhonya's Hourglass","Mandatory — the hop alone won't save you."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage after E.")],runes:{...AURORA_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Your Electrocute rotation wins the burst race."),I("Zhonya's Hourglass","Stasis blanks their combo."),I("Rabadon's Deathcap","End it before their second window.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus hop resets beat their pattern."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own burst honest.")],runes:{...AURORA_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Chunk them at range before the duel starts."),I("Cosmic Drive","Speed keeps the spacing yours."),I("Shadowflame","Execute range on their engage attempt.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Cosmic Drive","Kite the duel you can't win straight."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...AURORA_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Luden's Echo","Your rotation lands first with E setup."),I("Shadowflame","Pen wins the burst mirror."),I("Zhonya's Hourglass","Stasis their combo, answer with yours.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...AURORA_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Luden's Echo","Burst them before the drain ramps."),I("Cosmic Drive","Speed beats their zone control.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...AURORA_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Speed closes their poke range for free."),I("Shadowflame","Delete them once inside."),I("Luden's Echo","Out-burst the poke war.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Dodge speed between volleys.")],runes:{...AURORA_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One rotation deletes their carry."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Cosmic Drive","Run down their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...AURORA_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Luden's Echo","Rotation volume outlasts shield cooldowns.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...AURORA_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Hop + speed makes their picks whiff."),I("Shadowflame","Burst the catcher on the whiff."),I("Luden's Echo","Punish every miss with a rotation.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...AURORA_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank fronting for them."),I("Cosmic Drive","Hop out of their engage radius."),I("Rabadon's Deathcap","Burst the backline over their heads.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...AURORA_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Burst over the peel wall to the carry."),I("Rabadon's Deathcap","Out-burst their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Horizon Focus","Extra damage at the range peel can't reach.")],runes:{...AURORA_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility answers most gimmick kits."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...AURORA_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Irelia","Camille","Jax"], replacements:["Teemo","Vayne","Gnar"],
      role:"Ranged Top Skirmish Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Top Aurora runs the identical page and core to Mid — the data confirms it — because her game plan doesn't change: bully melees with Q-auto Electrocute trades they can't answer, hop away from every engage, and scale into a realm-warp teamfighter. The difference is the fifth slot leaning Void Staff over Zhonya's, since top lane feeds her tanks and juggernauts to shred instead of assassins to survive. Ranged-top discipline applies: freeze, poke, never coinflip.",
      sideItems:["Void Staff","Zhonya's Hourglass","Banshee's Veil","Cosmic Drive","Horizon Focus","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Luden's Echo","Poke rotations they can never answer."),I("Void Staff","Shred the MR they're forced to buy."),I("Cosmic Drive","Speed to kite the walk-down forever.")],behind:[I("Cosmic Drive","Speed keeps their hands off you."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the poke real.")],runes:{...AURORA_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage before the combo lands."),I("Luden's Echo","Full rotation beats their entry damage."),I("Zhonya's Hourglass","Stasis wastes the dive entirely.")],behind:[I("Zhonya's Hourglass","Mandatory — the hop alone won't save you."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage after E.")],runes:{...AURORA_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Your Electrocute rotation wins the burst race."),I("Zhonya's Hourglass","Stasis blanks their combo."),I("Rabadon's Deathcap","End it before their second window.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus hop resets beat their pattern."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep your own burst honest.")],runes:{...AURORA_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Luden's Echo","Chunk them at range before the duel starts."),I("Cosmic Drive","Speed keeps the spacing yours."),I("Shadowflame","Execute range on their engage attempt.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Cosmic Drive","Kite the duel you can't win straight."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...AURORA_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Luden's Echo","Your rotation lands first with E setup."),I("Shadowflame","Pen wins the burst mirror."),I("Zhonya's Hourglass","Stasis their combo, answer with yours.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...AURORA_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Luden's Echo","Burst them before the drain ramps."),I("Cosmic Drive","Speed beats their zone control.")],behind:[I("Morellonomicon","Cut the heal-back loop."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...AURORA_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Speed closes their poke range for free."),I("Shadowflame","Delete them once inside."),I("Luden's Echo","Out-burst the poke war.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Dodge speed between volleys.")],runes:{...AURORA_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One rotation deletes the ranged top."),I("Rabadon's Deathcap","Guarantee the kill window."),I("Cosmic Drive","Run down their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...AURORA_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Luden's Echo","Rotation volume outlasts shield cooldowns.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...AURORA_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Hop + speed makes their picks whiff."),I("Shadowflame","Burst the catcher on the whiff."),I("Luden's Echo","Punish every miss with a rotation.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...AURORA_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank you're laning against."),I("Luden's Echo","Poke them off every wave."),I("Rabadon's Deathcap","Scale faster than their tank curve.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...AURORA_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Shred the armor-stacker's MR side."),I("Luden's Echo","Poke wins the farm-lane stalemate."),I("Rabadon's Deathcap","Out-scale their durability curve.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Horizon Focus","Damage from the range peel can't reach.")],runes:{...AURORA_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility answers most gimmick kits."),I("Shadowflame","Burst them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...AURORA_DEFAULT_RUNES}},
      },
    },
  },
};
