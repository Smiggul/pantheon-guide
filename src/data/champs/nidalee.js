import { I } from "../runeHelpers.js";

const NIDALEE_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Sorcery",
  secondaryRunes: ["Transcendence","Waterwalking"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Dark Harvest stacks off Nidalee's spear-then-pounce execute pattern — every skirmish kill feeds the next one-spear kill threshold. Sudden Impact procs on every cougar W pounce, Grisly Mementos stacks haste off her pick tempo, Treasure Hunter accelerates the two-item spike her early-game pressure is built to fund, Transcendence feeds the spear/pounce cooldown loop, and Waterwalking wins the river skirmishes and scuttle fights she forces from minute two.",
};

// ══════════════════════════════════════════════════════════════════════════
//  NIDALEE — Bestial Huntress: Spear-Pounce Carry Jungler  (S tier 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"nidalee", display:"Nidalee", dd:"Nidalee",
  color:"#4a3a1a", glow:"#c0a050",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Warwick","Udyr","Zac"], replacements:["Karthus","Elise","Ekko"],
      role:"Spear-Pounce Carry Jungler",
      corePath:"Hextech Rocketbelt  ›  Sorcerer's Shoes  ›  Lich Bane  ›  Rabadon's Deathcap",
      coreNote:"Nidalee is an early-tempo carry jungler — invade, spear, pounce, repeat until the map is hers. Hextech Rocketbelt adds a fourth gap-closer to a kit that already teleports across walls, Lich Bane converts every form-swap into a Q-empowered auto (her cougar combo weaves it constantly), and Rabadon's Deathcap scales the one-spear chunk into a one-spear kill. Zhonya's Hourglass covers the dive-heavy pattern her tempo demands.",
      sideItems:["Zhonya's Hourglass","Void Staff","Shadowflame","Banshee's Veil","Mejai's Soulstealer","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Hextech Rocketbelt","Kite them forever — spear, dash, repeat."),I("Rabadon's Deathcap","Spears chunk half their HP bar."),I("Void Staff","Pen through their late MR buys.")],behind:[I("Zhonya's Hourglass","Stasis escapes the caught clear."),I("Void Staff","Spear damage stays real."),I("Banshee's Veil","Blocks the pull that catches you.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Out-tempo their engage with more dashes."),I("Shadowflame","Burst them mid-dive before the combo lands."),I("Zhonya's Hourglass","Stasis wastes their engage.")],behind:[I("Zhonya's Hourglass","Mandatory — you're the squishiest jungle target."),I("Banshee's Veil","Blocks the engage opener."),I("Cosmic Drive","Speed to disengage.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Spear + pounce burst wins the race at range."),I("Zhonya's Hourglass","Stasis blanks their combo."),I("Rabadon's Deathcap","One spear ends it before they close.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the invade one-shot."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep the spear honest.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Hextech Rocketbelt","Never duel — poke, pounce, leave before they ramp."),I("Rabadon's Deathcap","Spear chunks deny the fight entirely."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the 1v1 they invade for."),I("Banshee's Veil","Blocks their gap-close."),I("Cosmic Drive","Speed to kite the duel.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your spear outranges their rotation."),I("Rabadon's Deathcap","Bigger burst wins the race."),I("Hextech Rocketbelt","Dash dodges their setup skillshot.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep your burst honest.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Hextech Rocketbelt","Speed beats their zone-control spacing."),I("Shadowflame","Spear-burst before their drain ramps."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Banshee's Veil","Blocks their opening CC."),I("Zhonya's Hourglass","Survive the drain window."),I("Void Staff","Pen through their MR curve.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Pounce erases their range advantage."),I("Shadowflame","Delete them on arrival."),I("Rabadon's Deathcap","Out-poke the poke war with spears.")],behind:[I("Banshee's Veil","Eats one long-range spell on the flank."),I("Zhonya's Hourglass","Covers the committed dive."),I("Cosmic Drive","More approach speed.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One spear-pounce window deletes their carry."),I("Rabadon's Deathcap","Guarantee the one-shot."),I("Hextech Rocketbelt","Dash through their kiting.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Burst stays lethal.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Rabadon's Deathcap","Spear bigger than their shield budget."),I("Hextech Rocketbelt","Dash past peel to the carry.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash makes their picks whiff."),I("Shadowflame","Burst the catcher on the whiff."),I("Rabadon's Deathcap","Punish damage on every miss.")],behind:[I("Banshee's Veil","Spell shield eats the hook on your clear."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank contesting objectives."),I("Hextech Rocketbelt","Dash out of their engage radius."),I("Rabadon's Deathcap","Spear the backline over their heads.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","Spears over the peel wall to the carry."),I("Rabadon's Deathcap","Burst bigger than their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Banshee's Veil","Blocks their lockdown.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Mobility answers most gimmick kits."),I("Shadowflame","Spear them in one window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...NIDALEE_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
