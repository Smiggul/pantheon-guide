import { I } from "../runeHelpers.js";

const KAYLE_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Absorb Life","Legend: Alacrity","Last Stand"],
  secondary:      "Sorcery",
  secondaryRunes: ["Celerity","Gathering Storm"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack matches Kayle's three-hit trading rhythm and amps the on-hit waves her whole kit fires after level 6. Absorb Life patches the brutal early laning, Legend: Alacrity accelerates every power spike she's waiting on, Last Stand backs the late-game frontline duels her ult enables, Celerity feeds her passive move speed stacking, and Gathering Storm is the thesis statement: every minute that passes, the angel gets closer to level 16 and the game gets closer to over.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KAYLE — Righteous: Hyperscaling On-Hit Angel  (S tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"kayle", display:"Kayle", dd:"Kayle",
  color:"#5a5a2a", glow:"#f0e080",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Darius","Irelia","Riven"], replacements:["Teemo","Gnar","Jax"],
      role:"Hyperscaling On-Hit Carry",
      corePath:"Nashor's Tooth  ›  Boots of Swiftness  ›  Dusk and Dawn  ›  Rabadon's Deathcap",
      coreNote:"Kayle is a contract with the future: survive to 6, stabilize at 11, take over the game at 16. Nashor's Tooth is the core engine — attack speed plus on-hit AP for the ranged waves — Dusk and Dawn adds the mid-game speed and damage that shortens her weakest window, and Rabadon's plus Shadowflame turn the level-16 ascension into a five-second execution of anyone on screen. Her R makes her the best anti-dive insurance in the game: ult the carry, delete the divers. Give up CS, not deaths, before 6.",
      sideItems:["Shadowflame","Zhonya's Hourglass","Riftmaker","Void Staff","Wit's End","Guardian Angel"],
      data:{
        JUGGERNAUT:{ahead:[I("Nashor's Tooth","Kite them forever once ranged — they never touch you."),I("Rabadon's Deathcap","Scale the poke into melt."),I("Void Staff","Pen their late MR buys.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Guardian Angel","Insurance while you scale."),I("Riftmaker","Sustain the recovery farm.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dusk and Dawn","Out-speed their engage and kite it out."),I("Shadowflame","Burst them mid-dive."),I("Zhonya's Hourglass","Stasis wastes the engage entirely.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus R is double insurance."),I("Guardian Angel","Survive the repeat dives."),I("Wit's End","MR vs AP divers.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught window is death pre-16."),I("Shadowflame","Out-burst them at range."),I("Rabadon's Deathcap","End it before their second rotation.")],behind:[I("Zhonya's Hourglass","Stasis is the matchup."),I("Guardian Angel","Trade the one-shot and revive."),I("Wit's End","MR vs AP assassins.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Nashor's Tooth","Ranged on-hit kites their melee duel."),I("Rabadon's Deathcap","Melt them before they close."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Guardian Angel","Survive the forced duel."),I("Riftmaker","Sustain the scaling race.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR on-hit blunts their rotation."),I("Nashor's Tooth","DPS them in the cooldown gap."),I("Shadowflame","Out-burst the burst.")],behind:[I("Wit's End","Rush MR — their combo must fail."),I("Zhonya's Hourglass","Survive the rotation."),I("Guardian Angel","Insurance while scaling.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","On-hit MR shrugs off the drain."),I("Nashor's Tooth","Out-DPS their ramp at range."),I("Void Staff","Pen their MR curve.")],behind:[I("Wit's End","MR keeps you in lane."),I("Zhonya's Hourglass","Survive the ramped window."),I("Riftmaker","Sustain the war.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dusk and Dawn","Speed closes the poke gap fast."),I("Nashor's Tooth","Out-DPS them once in range."),I("Shadowflame","Execute the chunked artillery.")],behind:[I("Zhonya's Hourglass","Covers the forced engage."),I("Guardian Angel","Insurance on the approach."),I("Wit's End","MR chips their poke math.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Nashor's Tooth","Win the ranged DPS mirror with on-hit AP."),I("Rabadon's Deathcap","Your scaling beats theirs."),I("Shadowflame","Execute range on chunked carries.")],behind:[I("Zhonya's Hourglass","Stasis their focus."),I("Guardian Angel","Survive the DPS race."),I("Wit's End","Vs hybrid marksmen.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Nashor's Tooth","On-hit volume burns shield cycles."),I("Void Staff","Pen the shield sponge."),I("Rabadon's Deathcap","Out-scale the shield budget.")],behind:[I("Void Staff","Keep DPS real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Riftmaker","Sustain the value war.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","Speed makes their hooks whiff."),I("Nashor's Tooth","Punish every miss with DPS."),I("Shadowflame","Burst the catcher who missed.")],behind:[I("Zhonya's Hourglass","Stasis the caught scenario."),I("Guardian Angel","Survive the pick."),I("Wit's End","MR vs AP catchers.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Nashor's Tooth","Kite the engage tank forever."),I("Void Staff","Shred their MR stack."),I("Rabadon's Deathcap","Melt the frontline at 16.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Guardian Angel","Insurance at objectives.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen the peel-tank's resists."),I("Nashor's Tooth","On-hit volume cracks the wall."),I("Rabadon's Deathcap","Out-scale the mitigation budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Riftmaker","Sustain the long game."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Nashor's Tooth","Generic ranged DPS answers most gimmicks."),I("Shadowflame","Burst them in one wave window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Zhonya's Hourglass","Covers the unreadable window."),I("Wit's End","MR vs AP tricks."),I("Guardian Angel","Survive to 16 — then nothing matters.")],runes:{...KAYLE_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
