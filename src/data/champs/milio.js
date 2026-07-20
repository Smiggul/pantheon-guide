import { I } from "../runeHelpers.js";

const MILIO_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Revitalize"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Summon Aery rides both halves of Milio's kit — poke damage on Q and shields on E — for constant value in the enchanter pattern. Manaflow Band funds the fire-juggling spam, Transcendence feeds the cooldown loop his W zone and E shields cycle on, Scorch stacks with Q's knock-up poke in early trades, Bone Plating survives the all-in lanes that target him, and Revitalize amplifies every heal and shield — including the massive R cleanse-heal that defines his teamfights.",
};

// ══════════════════════════════════════════════════════════════════════════
//  MILIO — Gentle Flame: Range-Buff Enchanter  (A tier Support 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"milio", display:"Milio", dd:"Milio",
  color:"#5a3a1a", glow:"#f0b060",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Blitzcrank","Leona","Rell"], replacements:["Lulu","Janna","Soraka"],
      role:"Range-Buff Cleanse Enchanter",
      corePath:"Dream Maker  ›  Ionian Boots of Lucidity  ›  Echoes of Helia  ›  Moonstone Renewer",
      coreNote:"Milio makes his carry unplayable-against: W's range buff turns any ADC into a siege engine, and R is a team-wide cleanse that deletes the enemy's engage plan. Dream Maker feeds the constant shield-heal cycling, Echoes of Helia converts every E into damage-plus-heal procs, Moonstone Renewer chains his sustain across the whole fight, and Ardent Censer stacks the attack-speed buff onto the W package. Sit behind the carry, juggle fire, and answer every 'we engage' with 'no you don't.'",
      sideItems:["Ardent Censer","Redemption","Mikael's Blessing","Staff of Flowing Water","Locket of the Iron Solari","Dawncore"],
      data:{
        JUGGERNAUT:{ahead:[I("Echoes of Helia","Chord procs chip them while healing your carry."),I("Ardent Censer","Buff the carry kiting them down."),I("Moonstone Renewer","Outlast their all-or-nothing engage.")],behind:[I("Redemption","Teamfight heal blunts their dive."),I("Locket of the Iron Solari","Shield the target they walk down."),I("Dream Maker","Keep the shield cycle rolling.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Moonstone Renewer","Sustain through the dive and win the aftermath."),I("Echoes of Helia","Heal-proc the dive target mid-engage."),I("Mikael's Blessing","Cleanse stacks with your R cleanse.")],behind:[I("Mikael's Blessing","Double cleanse — their engage never sticks."),I("Locket of the Iron Solari","Team shield vs the burst window."),I("Redemption","Heal through the dive damage.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump."),I("Moonstone Renewer","Chain heals undo their burst attempt."),I("Echoes of Helia","Sustain the target through the combo.")],behind:[I("Locket of the Iron Solari","The active is your burst answer."),I("Mikael's Blessing","Cleanse the setup CC."),I("Redemption","Heal after the combo lands.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Ardent Censer","Buff the carry kiting them — W range seals it."),I("Moonstone Renewer","Extended fights are your fights."),I("Echoes of Helia","Heal-proc through the long duel.")],behind:[I("Redemption","Big heal resets their duel win."),I("Mikael's Blessing","Cleanse the slow that lets them stick."),I("Locket of the Iron Solari","Shield the focused carry.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their one rotation."),I("Moonstone Renewer","Heal chain undoes the burst."),I("Staff of Flowing Water","Buff the counter-trade.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Mikael's Blessing","Cleanse the combo-opening CC."),I("Redemption","Recover the aftermath.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Moonstone Renewer","Out-sustain their drain in long fights."),I("Echoes of Helia","Heal-procs race their damage ramp."),I("Staff of Flowing Water","AP + haste buff wins the attrition war.")],behind:[I("Redemption","Team heal against their zone damage."),I("Mikael's Blessing","Cleanse the root that holds you in it."),I("Locket of the Iron Solari","Shield through the ramp.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Moonstone Renewer","Heal back every poke they land."),I("Echoes of Helia","Out-sustain the chip war."),I("Ardent Censer","W range lets your carry out-poke the poker.")],behind:[I("Redemption","Recover the poke before the fight."),I("Locket of the Iron Solari","Shield the engage moment."),I("Mikael's Blessing","Cleanse the pick that follows.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Ardent Censer","Buff your carry and win the 2v2 DPS race."),I("Echoes of Helia","Heal-proc sustain out-trades their poke."),I("Staff of Flowing Water","Stack the buff package.")],behind:[I("Locket of the Iron Solari","Shield their focus-fire target."),I("Redemption","Heal through the DPS."),I("Mikael's Blessing","Cleanse the CC that sets their kill.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Win the enchanter mirror — W range is the tiebreaker."),I("Staff of Flowing Water","Stack auras they can't match."),I("Echoes of Helia","Your procs out-sustain theirs.")],behind:[I("Moonstone Renewer","Out-heal their value curve."),I("Redemption","Bigger single moment than their sustain."),I("Dawncore","Scale the aura war.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dream Maker","Shield cycling makes their hooks worthless."),I("Moonstone Renewer","Heal through the pick attempt."),I("Ardent Censer","Punish the whiff with buffed DPS.")],behind:[I("Mikael's Blessing","Cleanse the caught ally — deny the pick."),I("Locket of the Iron Solari","Shield the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Team shield blanks the wombo — R cleanses the rest."),I("Moonstone Renewer","Heal chain through the initiation."),I("Mikael's Blessing","Triple cleanse coverage with R.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the fight resets."),I("Locket of the Iron Solari","Shield the follow-up damage."),I("Redemption","Heal the aftermath.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Buff your carry to out-DPS their peel."),I("Staff of Flowing Water","Sustain the siege war."),I("Echoes of Helia","Chip-heal through the stall.")],behind:[I("Moonstone Renewer","Outlast their defensive value."),I("Redemption","Match their peel with raw healing."),I("Dawncore","Scale past the stalemate.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Moonstone Renewer","Generic sustain answers most gimmicks."),I("Echoes of Helia","Heal-procs keep everyone topped."),I("Ardent Censer","Buff the carry against whatever it is.")],behind:[I("Mikael's Blessing","Cleanse their key CC gimmick."),I("Locket of the Iron Solari","Shield the unreadable burst."),I("Redemption","Recover from the surprise.")],runes:{...MILIO_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
