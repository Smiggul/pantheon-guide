import { I } from "../runeHelpers.js";

const IVERN_JGL_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Nimbus Cloak","Transcendence","Waterwalking"],
  secondary:      "Inspiration",
  secondaryRunes: ["Cash Back","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Summon Aery rides both halves of Ivern's kit — poke on Q roots, shields on E — because he junglers like an enchanter who happens to own the forest. Nimbus Cloak speeds the smite-and-scurry pathing, Transcendence feeds the shield cooldowns, Waterwalking wins the river scuttle-and-objective game his passive tempo revolves around, Cash Back refunds the enchanter item curve, and Cosmic Insight shortens Daisy — his entire frontline — by whole fights.",
};

// ══════════════════════════════════════════════════════════════════════════
//  IVERN — Green Father: Enchanter Jungler  (B tier, 52.2% WR 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"ivern", display:"Ivern", dd:"Ivern",
  color:"#2a5a3a", glow:"#70e0a0",
  lanes:["Jungle"],
  roles:{
    Jungle:{
      bans:["Udyr","Kha'Zix","Graves"], replacements:["Zac","Sejuani","Maokai"],
      role:"Forest Enchanter / Daisy Handler",
      corePath:"Redemption  ›  Ionian Boots of Lucidity  ›  Moonstone Renewer  ›  Ardent Censer",
      coreNote:"Ivern doesn't fight the jungle — he frees it, farming without combat while lanes get a five-second-cooldown shield-bot ganker. Redemption opens the enchanter curve, Moonstone Renewer chains his E shields into team sustain, Ardent Censer buffs whoever the Brushmaker hides, and Dawncore scales the aura stack. Daisy is the tank he never built: send her in, shield the carry, root the diver, repeat. His ganks look gentle until the triple-brush root chains into a Daisy knockup and someone's carry is just gone.",
      sideItems:["Dawncore","Staff of Flowing Water","Mikael's Blessing","Locket of the Iron Solari","Knight's Vow","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Ardent Censer","Buff the carry kiting them — Daisy holds the door."),I("Moonstone Renewer","Outlast their all-in windows."),I("Redemption","Heal the extended brawl.")],behind:[I("Locket of the Iron Solari","Shield the target they walk down."),I("Knight's Vow","Split their damage off your carry."),I("Redemption","Heal the fights you can't prevent.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Moonstone Renewer","Shield-chain through the dive — Daisy counter-engages."),I("Mikael's Blessing","Cleanse the lockdown mid-dive."),I("Ardent Censer","Buff the counter-DPS.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the dive fails."),I("Locket of the Iron Solari","Shield the burst window."),I("Redemption","Heal through repeated attempts.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump — Q roots the lander."),I("Moonstone Renewer","Heal chain undoes the attempt."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Locket of the Iron Solari","The active is your burst answer."),I("Knight's Vow","Eat the attempt for your carry."),I("Redemption","Recover the aftermath.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Ardent Censer","Buff the carry dueling them — brush vision wins the dance."),I("Moonstone Renewer","Extended fights are aura fights."),I("Staff of Flowing Water","Stack the buff package.")],behind:[I("Redemption","Big heal resets their duel win."),I("Mikael's Blessing","Cleanse the slow that lets them stick."),I("Locket of the Iron Solari","Shield the focused carry.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their rotation."),I("Moonstone Renewer","Heal chain undoes the burst."),I("Mikael's Blessing","Cleanse the combo opener.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Mikael's Blessing","Cleanse the setup CC."),I("Redemption","Recover the aftermath.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Moonstone Renewer","Out-sustain their drain in long fights."),I("Staff of Flowing Water","AP + haste buff wins attrition."),I("Ardent Censer","Buff the DPS race.")],behind:[I("Redemption","Team heal against their zone."),I("Mikael's Blessing","Cleanse the root that holds allies."),I("Locket of the Iron Solari","Shield through the ramp.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Moonstone Renewer","Heal back every poke they land."),I("Vigilant Wardstone","Vision beats their range game."),I("Ardent Censer","Buff the carry's siege answer.")],behind:[I("Redemption","Recover the poke before the fight."),I("Locket of the Iron Solari","Shield the engage moment."),I("Mikael's Blessing","Cleanse the pick that follows.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Ardent Censer","Buff your carry and win the DPS race."),I("Moonstone Renewer","Heal-chain out-trades their poke."),I("Staff of Flowing Water","Stack the aura war.")],behind:[I("Locket of the Iron Solari","Shield their focus-fire target."),I("Redemption","Heal through the DPS."),I("Mikael's Blessing","Cleanse the CC that sets their kill.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Win the enchanter mirror — you have a Daisy."),I("Staff of Flowing Water","Stack auras they can't match."),I("Dawncore","Scale the value war.")],behind:[I("Moonstone Renewer","Out-heal their value curve."),I("Redemption","Bigger single moment than their sustain."),I("Dawncore","Scale past them.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Moonstone Renewer","Brush vision makes their hooks blind guesses."),I("Mikael's Blessing","Cleanse the caught ally."),I("Ardent Censer","Punish the whiff with buffed DPS.")],behind:[I("Mikael's Blessing","Cleanse the caught carry — deny the pick."),I("Locket of the Iron Solari","Shield the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Team shield blanks the wombo — Daisy counter-engages."),I("Moonstone Renewer","Heal chain through the initiation."),I("Mikael's Blessing","Cleanse the primary lockdown.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the fight resets."),I("Locket of the Iron Solari","Shield the follow-up."),I("Redemption","Heal the aftermath.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Buff your carry to out-DPS their peel."),I("Staff of Flowing Water","Sustain the siege war."),I("Dawncore","Scale the aura stack past them.")],behind:[I("Moonstone Renewer","Outlast their defensive value."),I("Redemption","Match their peel with raw healing."),I("Knight's Vow","Guard the carry through the stall.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Moonstone Renewer","Generic sustain answers most gimmicks."),I("Ardent Censer","Buff the carry against whatever it is."),I("Locket of the Iron Solari","Shield the surprise.")],behind:[I("Mikael's Blessing","Cleanse their key CC gimmick."),I("Locket of the Iron Solari","Shield the unreadable burst."),I("Redemption","Recover from the surprise.")],runes:{...IVERN_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
