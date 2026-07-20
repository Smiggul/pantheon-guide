import { I } from "../runeHelpers.js";

const QIYANA_MID_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Grisly Mementos","Treasure Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Last Stand"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute completes inside one E-Q-auto element rotation — Qiyana's whole kit is a three-hit combo with terrain attached. Sudden Impact procs lethality on every E dash and grass-stealth exit, Grisly Mementos stacks haste off her roam-pick pattern, Treasure Hunter funds the lethality curve, Presence of Mind keeps the element-juggling mana bill paid, and Last Stand backs the low-HP outplays her R wall-slam turns into pentakills.",
};

// ══════════════════════════════════════════════════════════════════════════
//  QIYANA — Empress of the Elements: Terrain Assassin  (A/B Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"qiyana", display:"Qiyana", dd:"Qiyana",
  color:"#3a4a2a", glow:"#e0c050",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Galio","Vex","Lissandra"], replacements:["Talon","Zed","Akali"],
      role:"Element-Combo Terrain Assassin",
      corePath:"Voltaic Cyclosword  ›  Ionian Boots of Lucidity  ›  Profane Hydra  ›  Serylda's Grudge",
      coreNote:"Qiyana turns the map itself into her kit: river roots, grass stealths, wall-element bursts, and Supreme Display of Talent stuns everything along any terrain edge. Voltaic Cyclosword's energised proc rides the ice-element slow opener, Profane Hydra slots its execute active into her full combo, Serylda's Grudge keeps the burst real through armor, and Edge of Night blanks the peel spell saved for her. Fight near walls, always — her R is a five-man stun that only asks for geometry.",
      sideItems:["Edge of Night","Youmuu's Ghostblade","Guardian Angel","Serpent's Fang","Maw of Malmortius","Umbral Glaive"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Pen + slow — poke the juggernaut, never brawl."),I("Profane Hydra","Execute range beats their HP stacking."),I("Youmuu's Ghostblade","Speed to never be catchable.")],behind:[I("Edge of Night","Block the pull that starts their all-in."),I("Guardian Angel","Insurance in forced fights."),I("Maw of Malmortius","Vs mixed-damage bruisers.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Voltaic Cyclosword","Burst them mid-engage — R the wall behind them."),I("Profane Hydra","Out-burst their engage window."),I("Edge of Night","Block the dive-opener.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life on contested dives."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Voltaic Cyclosword","Your ice-slow opener wins the burst race."),I("Edge of Night","Block their opener — yours lands instead."),I("Profane Hydra","Execute through their reset math.")],behind:[I("Edge of Night","Rush — blanks their combo starter."),I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Profane Hydra","Burst them in one rotation — leave before the duel extends."),I("Serylda's Grudge","Pen through their bruiser core."),I("Youmuu's Ghostblade","Speed controls who picks the fight.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance when they force the 1v1."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Voltaic Cyclosword","Grass-stealth opener lands before their rotation."),I("Edge of Night","Block the rotation opener."),I("Profane Hydra","Execute the cooldown gap.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the caught scenario.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Profane Hydra","Kill inside one combo before they ramp."),I("Serylda's Grudge","Pen scales into their HP stacking."),I("Umbral Glaive","Flank angles their zone can't watch.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive extended fights.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Youmuu's Ghostblade","Speed + grass stealth erases their range."),I("Voltaic Cyclosword","Delete them on arrival."),I("Edge of Night","Block the self-peel spell they hold for you.")],behind:[I("Edge of Night","Spell shield eats one poke spell on approach."),I("Maw of Malmortius","Shield vs AP poke."),I("Guardian Angel","Covers the committed engage.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Voltaic Cyclosword","Squishy carries die to one element combo."),I("Profane Hydra","Execute confirms the kill."),I("Serylda's Grudge","Pen through their armor buys.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Maw of Malmortius","Vs mixed-damage carries.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("Profane Hydra","Burst through the shield window."),I("Umbral Glaive","Sweep their defensive vision first.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the peel damage.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Umbral Glaive","Kill their wards — grass stealth does the rest."),I("Voltaic Cyclosword","Burst the catcher on the whiff."),I("Edge of Night","Spell shield eats the hook.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Pen keeps damage real through their frontline."),I("Umbral Glaive","Flank angles their engage can't cover."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain at objectives."),I("Serylda's Grudge","Required pen from behind.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Pen through the peel-tank to the carry."),I("Profane Hydra","R wall-stun skips the peel entirely."),I("Umbral Glaive","Unseen angles beat positioned peel.")],behind:[I("Serylda's Grudge","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Umbral Glaive","Vision control beats gimmick setups."),I("Voltaic Cyclosword","Burst them in one element window."),I("Edge of Night","Block their key setup ability.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...QIYANA_MID_DEFAULT_RUNES}},
      },
    },
  },
};
