import { I } from "../runeHelpers.js";

const RENGAR_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Coup de Grace"],
  secondary:      "Domination",
  secondaryRunes: ["Sudden Impact","Ultimate Hunter"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Current Rengar plays bruiser-assassin, not one-shot-only — empowered Q brawls stack Conqueror fast, and the extended skirmish is where he wins now. Triumph refunds HP on every takedown mid-fight, Legend: Alacrity speeds both clear and Q resets, Coup de Grace finishes what the leap starts, Sudden Impact procs on every bush leap and R jump, and Ultimate Hunter brings Thrill of the Hunt around for more pick windows.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RENGAR — Pridestalker: Leap Skirmish Assassin  (A tier Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"rengar", display:"Rengar", dd:"Rengar",
  color:"#5a4a3a", glow:"#e0c8a0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Rammus","Poppy","Jax"], replacements:["Kayn","Shaco","Nocturne"],
      role:"Bush-Leap Skirmish Assassin",
      corePath:"Umbral Glaive  ›  Ionian Boots of Lucidity  ›  Profane Hydra  ›  Edge of Night",
      coreNote:"Rengar's kill pattern starts before the fight: Umbral Glaive sweeps the wards along his path so the bush leap comes from darkness. Profane Hydra is the ideal ferocity-spender — the active slots into his leap combo and the cleave speeds his clear. Edge of Night blanks the one peel spell saved for him, and Lord Dominik's Regards closes against the armor his snowball forces. Four ferocity, leap, headbutt someone off the map.",
      sideItems:["Lord Dominik's Regards","Serylda's Grudge","Voltaic Cyclosword","Guardian Angel","Serpent's Fang","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Profane Hydra","Empowered-Q brawls beat them with Conqueror stacked."),I("Serylda's Grudge","Pen keeps leap damage real through armor."),I("Umbral Glaive","Pick them walking to lane — never fight fair.")],behind:[I("Edge of Night","Block the pull that starts their all-in."),I("Guardian Angel","Insurance in forced river fights."),I("Maw of Malmortius","Vs mixed-damage bruisers.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Profane Hydra","Out-brawl their engage with ferocity resets."),I("Umbral Glaive","Dark vision = your counter-gank is invisible."),I("Edge of Night","Block the dive-opener.")],behind:[I("Edge of Night","Spell shield answers their engage ability."),I("Guardian Angel","Second life on contested dives."),I("Maw of Malmortius","Shield vs AP divers.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Profane Hydra","Win the burst race — your leap opens first."),I("Umbral Glaive","Vision control decides assassin mirrors."),I("Edge of Night","Block their combo opener.")],behind:[I("Edge of Night","Rush — blanks their opener in every skirmish."),I("Guardian Angel","Trade one-shots and come back up."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Profane Hydra","Conqueror + ferocity resets win the extended duel."),I("Serylda's Grudge","Pen through their bruiser core."),I("Guardian Angel","Fight twice — they can't."),],behind:[I("Edge of Night","Block the gap-close that starts their duel."),I("Guardian Angel","Insurance in the 1v1 you can't refuse."),I("Maw of Malmortius","Lifeline vs AP skirmishers.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Profane Hydra","Leap-combo lands before their rotation."),I("Umbral Glaive","Kill wards, leap the unseen angle."),I("Edge of Night","Block the rotation opener.")],behind:[I("Edge of Night","Spell shield eats the combo starter."),I("Maw of Malmortius","Magic shield floors their burst."),I("Guardian Angel","Survive the caught scenario.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Profane Hydra","Kill inside one leap window before they ramp."),I("Serylda's Grudge","Pen scales into their HP stacking."),I("Umbral Glaive","Flank angles their zone control can't watch.")],behind:[I("Maw of Malmortius","Magic lifeline against the drain."),I("Edge of Night","Blocks their opening CC."),I("Guardian Angel","Survive extended fights.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Umbral Glaive","Erase the wards protecting their poke range."),I("Profane Hydra","Delete them on leap arrival."),I("Edge of Night","Block the self-peel spell they hold for you.")],behind:[I("Edge of Night","Spell shield eats one poke spell on approach."),I("Maw of Malmortius","Shield vs AP poke."),I("Guardian Angel","Covers the committed leap.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Profane Hydra","Squishy carries die to one leap combo."),I("Umbral Glaive","Their bot-side wards die before your gank."),I("Lord Dominik's Regards","Pen through their armor buys.")],behind:[I("Edge of Night","Block the peel CC on the way in."),I("Guardian Angel","Trade kills and revive."),I("Maw of Malmortius","Vs mixed-damage carries.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Serpent's Fang","The anti-shield item — built for this matchup."),I("Profane Hydra","Burst through the shield window."),I("Umbral Glaive","Sweep their defensive vision first.")],behind:[I("Serpent's Fang","Still correct — shields are the problem."),I("Edge of Night","Block the setup CC."),I("Guardian Angel","Survive the peel damage.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Umbral Glaive","Kill their wards — catchers are blind without vision."),I("Profane Hydra","Burst the catcher on the whiff."),I("Edge of Night","Spell shield eats the hook.")],behind:[I("Edge of Night","Rush — the hook is their whole gameplan."),I("Guardian Angel","Survive the caught scenario."),I("Maw of Malmortius","Vs AP catchers.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Serylda's Grudge","Pen keeps damage real through their frontline."),I("Umbral Glaive","Leap angles their engage can't cover."),I("Edge of Night","Block the engage CC.")],behind:[I("Edge of Night","Spell shield beats the initiation."),I("Guardian Angel","Survive the engage chain at objectives."),I("Serylda's Grudge","Required pen from behind.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Lord Dominik's Regards","Giant slayer through the peel-tank to the carry."),I("Profane Hydra","Enough frontload beats reactive peel."),I("Umbral Glaive","Unseen angles beat positioned peel.")],behind:[I("Serylda's Grudge","Mandatory vs stacked armor."),I("Edge of Night","Block their lockdown."),I("Guardian Angel","Insurance on the dive.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Umbral Glaive","Vision control beats gimmick setups."),I("Profane Hydra","Burst them in one leap window."),I("Edge of Night","Block their key setup ability.")],behind:[I("Edge of Night","Spell shield covers the unreadable opener."),I("Guardian Angel","Survive what you can't scout."),I("Maw of Malmortius","Vs AP specialists.")],runes:{...RENGAR_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
