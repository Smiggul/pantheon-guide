import { I } from "../runeHelpers.js";

const EVELYNN_JGL_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute completes in one charm-Q-E rotation, and Evelynn's Demon Shade stealth guarantees she opens on her own terms every time. Sudden Impact procs off every stealth exit, Grisly Mementos stacks haste off her pick tempo, Relentless Hunter speeds the invisible cross-map paths that make her ganks unwardable, Absolute Focus stays maxed because Demon Shade heals her between fights, and Gathering Storm backs the level-11 spike where empowered charm turns her into the best assassin in the game.",
};

// ══════════════════════════════════════════════════════════════════════════
//  EVELYNN — Agony's Embrace: Stealth Charm Assassin  (A/B Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"evelynn", display:"Evelynn", dd:"Evelynn",
  color:"#4a1a3a", glow:"#e050a0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Ivern","Nocturne","Rek'Sai"], replacements:["Shaco","Kha'Zix","Kayn"],
      role:"Permastealth Charm Assassin",
      corePath:"Lich Bane  ›  Sorcerer's Shoes  ›  Rabadon's Deathcap  ›  Void Staff",
      coreNote:"Evelynn farms quietly to six, then the map belongs to her — Demon Shade makes every gank a jump-scare no ward stops. Lich Bane converts each stealth opener into a Spellblade nuke, Rabadon's Deathcap pushes the charm-Q-R combo into one-shot territory, and Void Staff keeps it lethal once supports start stacking MR out of fear. Banshee's Veil covers her one weakness: getting CC'd before R's untargetable exit. Empowered charm the fed carry; everyone else is a snack for later.",
      sideItems:["Banshee's Veil","Shadowflame","Zhonya's Hourglass","Mejai's Soulstealer","Morellonomicon","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Void Staff","Pen keeps the burst real through their MR buys."),I("Rabadon's Deathcap","Big enough numbers melt even juggernauts."),I("Lich Bane","Poke-and-fade with Spellblade procs.")],behind:[I("Zhonya's Hourglass","Stasis escapes the caught scenario."),I("Void Staff","Damage stays honest from behind."),I("Banshee's Veil","Blocks the pull that catches you.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Lich Bane","Burst them from stealth before the dive forms."),I("Shadowflame","Execute the mid-dive diver."),I("Banshee's Veil","Blocks the engage they aim at you.")],behind:[I("Banshee's Veil","Blocks the opener — stealth does the rest."),I("Zhonya's Hourglass","Stasis if they land it anyway."),I("Cosmic Drive","Speed to disengage.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Lich Bane","Your stealth opener wins the assassin mirror."),I("Rabadon's Deathcap","One-shot them before their combo starts."),I("Banshee's Veil","Blocks their opener outright.")],behind:[I("Banshee's Veil","Rush — blocks the combo starter."),I("Zhonya's Hourglass","Stasis the exchange."),I("Void Staff","Keep your own burst honest.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Never duel — one-shot from stealth instead."),I("Lich Bane","Burst-and-fade before the fight extends."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the 1v1 they invade for."),I("Banshee's Veil","Blocks their gap-close."),I("Cosmic Drive","Speed to never be caught.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Lich Bane","Your stealth opener beats their rotation timing."),I("Rabadon's Deathcap","Bigger burst wins the race."),I("Shadowflame","Execute through their Zhonya's timing.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Rabadon's Deathcap","One-shot them before the drain ramps."),I("Void Staff","Pen through their MR curve."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the ramped window."),I("Void Staff","Pen keeps you relevant.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Lich Bane","Stealth erases their range advantage entirely."),I("Rabadon's Deathcap","Delete them on arrival."),I("Shadowflame","Execute the chunked artillery.")],behind:[I("Banshee's Veil","Eats one long-range spell on approach."),I("Zhonya's Hourglass","Covers the committed dive."),I("Cosmic Drive","More approach speed.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rabadon's Deathcap","Charm-Q-R one-shots their carry from fog."),I("Lich Bane","Spellblade seals the math."),I("Void Staff","Pen through their MR shard.")],behind:[I("Banshee's Veil","Blocks the peel CC on entry."),I("Zhonya's Hourglass","Stasis their focus fire."),I("Void Staff","Burst stays lethal.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Void Staff","Pen the protected carry.")],behind:[I("Void Staff","Keep burst real through shields."),I("Banshee's Veil","Blocks the setup CC."),I("Zhonya's Hourglass","Cover the counter-focus.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Lich Bane","Stealth makes their hooks pointless — you're never seen."),I("Rabadon's Deathcap","Burst the catcher on the whiff."),I("Banshee's Veil","Spell shield eats the hook.")],behind:[I("Banshee's Veil","Rush — the hook is their only answer to stealth."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to reposition.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank — or just walk past them invisibly."),I("Rabadon's Deathcap","One-shot the backline behind them."),I("Lich Bane","Spellblade the objective fights.")],behind:[I("Void Staff","Required to matter from behind."),I("Banshee's Veil","Blocks the initiation CC."),I("Zhonya's Hourglass","Survive the engage chain.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Rabadon's Deathcap","Stealth skips the peel — burst the carry directly."),I("Shadowflame","Execute through the shield layer."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Banshee's Veil","Blocks their lockdown."),I("Zhonya's Hourglass","Survive being focused.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Lich Bane","Stealth out-gimmicks most gimmicks."),I("Rabadon's Deathcap","One-shot them before the trick matters."),I("Shadowflame","Execute the setup champion early.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...EVELYNN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
