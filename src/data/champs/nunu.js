import { I } from "../runeHelpers.js";

const NUNU_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Grisly Mementos","Relentless Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Celerity","Waterwalking"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Current Nunu is an AP snowball bomber, not a tank — Dark Harvest stacks off every landed snowball-into-Consume gank and scales the burst curve his one-shot combo depends on. Cheap Shot fires true damage on every W knockup and E root, Grisly Mementos stacks haste off the gank tempo, Relentless Hunter plus Celerity plus Waterwalking make the snowball roll from further than anyone wards, and the whole page turns 'here comes Willump' into a scream with a body count.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NUNU & WILLUMP — Snowball AP Bomber  (B tier Jungle 26.14 — AP is meta)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nunu", display:"Nunu & Willump", dd:"Nunu",
  color:"#2a3a5a", glow:"#70b0e0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Aatrox","Talon","Udyr"], replacements:["Zac","Amumu","Karthus"],
      role:"Snowball AP Burst Ganker",
      corePath:"Hextech Rocketbelt  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Shadowflame",
      coreNote:"Meta Nunu builds full AP burst: the biggest snowball in the game arrives with a Rocketbelt dash, a Stormsurge proc, and a Consume that chunks half a squishy's HP bar. Shadowflame converts the chunked into the deleted, and Zhonya's Hourglass covers the point-blank Absolute Zero channels. His objective control is still the best in the game — Consume secures every dragon smite-fight — but the win condition is snowball-gank mid until their carry rage-quits. Roll from fog, never from lane sight.",
      sideItems:["Zhonya's Hourglass","Rabadon's Deathcap","Void Staff","Rylai's Crystal Scepter","Banshee's Veil","Mejai's Soulstealer"],
      data:{
        JUGGERNAUT:{ahead:[I("Stormsurge","Burst them before the brawl starts."),I("Shadowflame","Pen punishes their low MR."),I("Rylai's Crystal Scepter","Slow their walk-down forever.")],behind:[I("Rylai's Crystal Scepter","Kite their invades with slows."),I("Zhonya's Hourglass","Stasis escapes the caught clear."),I("Void Staff","Pen keeps the burst real.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage — W knocks the dive off course."),I("Stormsurge","Proc off the counter-gank burst."),I("Zhonya's Hourglass","Stasis wastes the engage onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — AP Nunu is soft once the snowball lands."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Slow their exit and turn it.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Assassin junglers will invade — stasis answers."),I("Stormsurge","Snowball opener wins the burst race."),I("Shadowflame","Execute through their combo start.")],behind:[I("Zhonya's Hourglass","Rush — your clear is soft without it."),I("Banshee's Veil","Blocks the opener."),I("Rylai's Crystal Scepter","Slow beats their resets.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel — Consume out-sustains."),I("Stormsurge","Burst them at the fight's start."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Never take the 1v1 — stasis until help."),I("Rylai's Crystal Scepter","Kite the invade."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Stormsurge","Your snowball lands first — so does your burst."),I("Shadowflame","Pen wins the burst mirror."),I("Zhonya's Hourglass","Stasis their combo, Consume the gap.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the AP war."),I("Stormsurge","Burst them before the drain ramps."),I("Rylai's Crystal Scepter","Slow controls the spacing.")],behind:[I("Void Staff","Pen through their MR curve."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Shadowflame","Snowball erases their range advantage — delete on arrival."),I("Stormsurge","Proc the landing burst."),I("Rabadon's Deathcap","One combo ends it.")],behind:[I("Banshee's Veil","Eats one long-range spell on the roll-in."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Rylai's Crystal Scepter","Slow their reposition.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Stormsurge","One snowball gank deletes their carry."),I("Shadowflame","Execute range on the chunked."),I("Rabadon's Deathcap","Guarantee the one-shot.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire at objectives."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Burst bigger than their shield budget."),I("Stormsurge","Proc through the shield window.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Stormsurge","Your snowball outranges their hook — pick first."),I("Shadowflame","Burst the catcher on the whiff."),I("Rylai's Crystal Scepter","Slow their follow-up.")],behind:[I("Banshee's Veil","Spell shield eats the hook on your clear."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","Slow to disengage.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank contesting your objectives."),I("Stormsurge","Burst the backline over their heads."),I("Rabadon's Deathcap","Absolute Zero melts the whole engage line.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Burst over the peel wall to the carry."),I("Rabadon's Deathcap","Out-burst their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Stormsurge","Snowball burst answers most gimmicks."),I("Shadowflame","Execute them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...NUNU_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
