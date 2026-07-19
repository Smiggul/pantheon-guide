import { I } from "../runeHelpers.js";

const KHAZIX_JGL_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Cash Back","Triple Tonic","Cosmic Insight"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Treasure Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Current Kha'Zix runs the First Strike economy page — he always chooses when the fight starts (isolation picks, jump openers), so First Strike procs on every engage and its gold feeds the lethality curve harder than any damage keystone. Cash Back and Treasure Hunter compound the gold engine, Triple Tonic covers the early clear, Cosmic Insight shortens Flash-jump windows, and Sudden Impact adds lethality on every Leap. The evolved bug is a stock portfolio with wings.",
};

// ══════════════════════════════════════════════════════════════════════════
//  KHA'ZIX — Voidreaver: Isolation Assassin  (A tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"khazix", display:"Kha'Zix", dd:"Khazix",
  color:"#2a4a2a", glow:"#90e050",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Naafiri","Skarner","Amumu"], replacements:["Rengar","Kayn","Talon"],
      role:"Isolation Pick Assassin",
      corePath:"Umbral Glaive  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Edge of Night",
      coreNote:"Kha'Zix hunts isolated targets, and Umbral Glaive manufactures isolation — sweep the wards, and everyone walking alone is legally alone for bonus Q damage. Voltaic Cyclosword's energised proc rides the Leap opener, Edge of Night blanks the peel spell saved for him, and Serylda's Grudge closes against the armor his snowball forces. Evolve R against teams that group, E against teams that spread. The unseen threat wins fights he never takes.",
      sideItems:["Serylda's Grudge","Profane Hydra","Youmuu's Ghostblade","Guardian Angel","Serpent's Fang","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Serylda's Grudge","Pen + slow — poke the isolated juggernaut, never brawl."),I("Profane Hydra","Burst them at isolation bonus damage."),I("Umbral Glaive","Pick them walking to lane alone.")],behind:[I("Edge of Night","Block the pull that starts their all-in."),I("Guardian Angel","Insurance in forced fights."),I("Maw of Malmortius","Vs mixed-damage bruisers.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Voltaic Cyclosword","Burst them mid-engage from the flank."),I("Profane Hydra","Out-burst their engage window."),I("Edge of Night","Block the dive-opener.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life on contested dives."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Voltaic Cyclosword","Your Leap opener wins the burst race."),I("Edge of Night","Block their opener — yours lands instead."),I("Umbral Glaive","Vision control decides assassin mirrors.")],behind:[I("Edge of Night","Rush — blanks their combo starter."),I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Profane Hydra","Isolation Q chunks win the short duel — leave before it extends."),I("Serylda's Grudge","Pen through their bruiser core."),I("Youmuu's Ghostblade","Speed controls who picks the fight.")],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance when they force the 1v1."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Voltaic Cyclosword","Leap opener lands before their rotation."),I("Edge of Night","Block the rotation opener."),I("Profane Hydra","Execute the cooldown gap.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the caught scenario.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Profane Hydra","Kill inside one Leap window before they ramp."),I("Serylda's Grudge","Pen scales into their HP stacking."),I("Umbral Glaive","Flank angles their zone can't watch.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive extended fights.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Umbral Glaive","Erase the wards protecting their poke range."),I("Voltaic Cyclosword","Delete them on Leap arrival."),I("Edge of Night","Block the self-peel spell they hold for you.")],behind:[I("Edge of Night","Spell shield eats one poke spell on approach."),I("Maw of Malmortius","Shield vs AP poke."),I("Guardian Angel","Covers the committed Leap.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Voltaic Cyclosword","Isolated carries die to one Leap combo."),I("Umbral Glaive","Their bot-side wards die before your gank."),I("Serylda's Grudge","Pen through their armor buys.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Maw of Malmortius","Vs mixed-damage carries.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("Profane Hydra","Burst through the shield window."),I("Umbral Glaive","Sweep their defensive vision first.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the peel damage.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Umbral Glaive","Kill their wards — catchers are blind without vision."),I("Voltaic Cyclosword","Burst the catcher on the whiff."),I("Edge of Night","Spell shield eats the hook.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Pen keeps damage real through their frontline."),I("Umbral Glaive","Leap angles their engage can't cover."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain at objectives."),I("Serylda's Grudge","Required pen from behind.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Serylda's Grudge","Pen through the peel-tank to the isolated carry."),I("Profane Hydra","Enough frontload beats reactive peel."),I("Umbral Glaive","Unseen angles beat positioned peel.")],behind:[I("Serylda's Grudge","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Umbral Glaive","Vision control beats gimmick setups."),I("Voltaic Cyclosword","Burst them in one Leap window."),I("Edge of Night","Block their key setup ability.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...KHAZIX_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
