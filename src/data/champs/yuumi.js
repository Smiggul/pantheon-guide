import { I } from "../runeHelpers.js";

const YUUMI_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Gathering Storm"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Revitalize"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Summon Aery rides both halves of Yuumi's attached loop — poke on Q, shields on passive — for constant value from total safety. Manaflow Band funds the perpetual Q-E cycling, Transcendence feeds the heal cooldowns, Gathering Storm backs the hyperscaling her untouchable late game cashes in, Second Wind covers the unattached lane windows where she's the most killable champion alive, and Revitalize amplifies every E heal and the Final Chapter rampart her R builds under allies.",
};

// ══════════════════════════════════════════════════════════════════════════
//  YUUMI — Magical Cat: Attached Enchanter  (C tier Support 26.14)
//  NOTE: like Cassiopeia, she skips boots entirely — never add boots
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"yuumi", display:"Yuumi", dd:"Yuumi",
  color:"#4a3a5a", glow:"#e0a0f0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Rell","Nautilus","Sona"], replacements:["Lulu","Milio","Soraka"],
      role:"Attached Scaling Enchanter",
      corePath:"Dream Maker  ›  Mikael's Blessing  ›  Moonstone Renewer  ›  Ardent Censer",
      coreNote:"Yuumi is a stat-aura with opinions: attached she cannot be touched, and every item converts directly into her carry's power. Dream Maker feeds the shield-heal cycling, Mikael's Blessing cleanses the one CC that would force a detach, Moonstone Renewer chains her E heals across the team, and Ardent Censer turns her anchor into an attack-speed monster. She skips boots entirely — attached movement is her carry's problem — so her item spikes land earlier than any other support. Pick her with a hypercarry and feed the cat.",
      sideItems:["Redemption","Staff of Flowing Water","Dawncore","Locket of the Iron Solari","Morellonomicon","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Ardent Censer","Buff the carry kiting them — you're untouchable anyway."),I("Moonstone Renewer","Outlast their all-or-nothing engage."),I("Dream Maker","Shield cycle through the chip.")],behind:[I("Redemption","Teamfight heal blunts their dive."),I("Mikael's Blessing","Cleanse the catch that starts it."),I("Locket of the Iron Solari","Shield the walked-down target.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Moonstone Renewer","Sustain through the dive and win the aftermath."),I("Mikael's Blessing","Cleanse the lockdown mid-dive."),I("Ardent Censer","Buff the counter-DPS.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the dive fails."),I("Locket of the Iron Solari","Shield the burst window."),I("Redemption","Heal through the dive damage.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump."),I("Moonstone Renewer","Heal chain undoes the burst attempt."),I("Mikael's Blessing","Cleanse the setup CC.")],behind:[I("Locket of the Iron Solari","The active is your burst answer."),I("Mikael's Blessing","Cleanse the opener."),I("Redemption","Heal after the combo lands.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Ardent Censer","Buff the carry kiting them down."),I("Moonstone Renewer","Extended fights are aura fights — you win those."),I("Staff of Flowing Water","Stack the buff package.")],behind:[I("Redemption","Big heal resets their duel win."),I("Mikael's Blessing","Cleanse the slow that lets them stick."),I("Locket of the Iron Solari","Shield the focused carry.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their one rotation."),I("Moonstone Renewer","Heal chain undoes the burst."),I("Dream Maker","Shield procs blunt the poke.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Mikael's Blessing","Cleanse the combo-opening CC."),I("Redemption","Recover the aftermath.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Moonstone Renewer","Out-sustain their drain in long fights."),I("Staff of Flowing Water","AP + haste buff wins attrition."),I("Ardent Censer","Buff the DPS race.")],behind:[I("Redemption","Team heal against their zone damage."),I("Mikael's Blessing","Cleanse the root that holds allies in it."),I("Locket of the Iron Solari","Shield through the ramp.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Moonstone Renewer","Heal back every poke they land."),I("Dream Maker","Shield cycle out-values the chip."),I("Ardent Censer","Buff the carry's siege answer.")],behind:[I("Redemption","Recover the poke before the fight."),I("Locket of the Iron Solari","Shield the engage moment."),I("Mikael's Blessing","Cleanse the pick that follows.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Ardent Censer","Buff your carry and win the 2v2 DPS race."),I("Moonstone Renewer","Heal-chain out-trades their poke."),I("Staff of Flowing Water","Stack the aura war.")],behind:[I("Locket of the Iron Solari","Shield their focus-fire target."),I("Redemption","Heal through the DPS."),I("Mikael's Blessing","Cleanse the CC that sets their kill.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Win the enchanter mirror — attached uptime is 100%."),I("Staff of Flowing Water","Stack auras they can't match."),I("Dawncore","Scale the value war.")],behind:[I("Moonstone Renewer","Out-heal their value curve."),I("Redemption","Bigger single moment than their sustain."),I("Dawncore","Scale past them.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dream Maker","Attached, their hooks literally cannot touch you."),I("Moonstone Renewer","Heal through the pick attempt on allies."),I("Mikael's Blessing","Cleanse the caught carry.")],behind:[I("Mikael's Blessing","Cleanse the caught ally — deny the pick."),I("Locket of the Iron Solari","Shield the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Team shield blanks the wombo."),I("Moonstone Renewer","Heal chain through the initiation."),I("Mikael's Blessing","Cleanse the primary lockdown.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the fight resets."),I("Locket of the Iron Solari","Shield the follow-up damage."),I("Redemption","Heal the aftermath.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Buff your carry to out-DPS their peel."),I("Staff of Flowing Water","Sustain the siege war."),I("Morellonomicon","Cut their sustain wall.")],behind:[I("Moonstone Renewer","Outlast their defensive value."),I("Redemption","Match their peel with raw healing."),I("Dawncore","Scale past the stalemate.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Moonstone Renewer","Generic sustain answers most gimmicks."),I("Dream Maker","Shield cycle keeps everyone topped."),I("Ardent Censer","Buff the carry against whatever it is.")],behind:[I("Mikael's Blessing","Cleanse their key CC gimmick."),I("Locket of the Iron Solari","Shield the unreadable burst."),I("Redemption","Recover from the surprise.")],runes:{...YUUMI_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
