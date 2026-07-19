import { I } from "../runeHelpers.js";

const SONA_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Gathering Storm"],
  secondary:      "Resolve",
  secondaryRunes: ["Conditioning","Revitalize"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Summon Aery rides every Q poke and every W shield — Sona procs it more often than any champion in the game. Manaflow Band funds the chord spam, Transcendence turns her into a haste battery, and Gathering Storm backs her legendary late-game scaling. Conditioning patches the squishiest early game among enchanters, and Revitalize amplifies both W heals and the Crescendo teamfights she wins.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SONA — Maven of the Strings: Scaling Enchanter  (A tier, 51.8% WR 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"sona", display:"Sona", dd:"Sona",
  color:"#2a5a6a", glow:"#70d0e0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Blitzcrank","Nautilus","Leona"], replacements:["Soraka","Janna","Seraphine"],
      role:"Scaling Enchanter / Aura Battery",
      corePath:"Bloodsong  ›  Boots of Swiftness  ›  Echoes of Helia  ›  Moonstone Renewer",
      coreNote:"Sona is the purest scaling enchanter — weak lane, monster late-game. Bloodsong converts her Q-poke pattern into bonus damage on the carry's follow-up, Echoes of Helia turns every chord into a heal-plus-damage proc, and Moonstone Renewer chains her W into fight-long team sustain. Dawncore closes the build into a full aura orchestra. Survive lane, hit two items, and every teamfight becomes a Crescendo with backup singers.",
      sideItems:["Dawncore","Redemption","Mikael's Blessing","Staff of Flowing Water","Ardent Censer","Locket of the Iron Solari"],
      data:{
        JUGGERNAUT:{ahead:[I("Echoes of Helia","Chord procs chip them while healing your carry."),I("Bloodsong","Amp your ADC's kite-down damage."),I("Moonstone Renewer","Outlast their all-or-nothing engage.")],behind:[I("Redemption","Teamfight heal blunts their dive."),I("Locket of the Iron Solari","Shield the target they walk down."),I("Boots of Swiftness","Speed to stay out of reach.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Moonstone Renewer","Sustain through the dive and win the aftermath."),I("Echoes of Helia","Heal-proc the dive target mid-engage."),I("Mikael's Blessing","Cleanse the lockdown that starts the dive.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the whole dive fails."),I("Locket of the Iron Solari","Team shield vs the burst window."),I("Redemption","Heal through the dive damage.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump."),I("Moonstone Renewer","Chain heals undo their burst attempt."),I("Echoes of Helia","Sustain the target through the combo.")],behind:[I("Locket of the Iron Solari","The active is your only burst answer."),I("Mikael's Blessing","Cleanse the setup CC."),I("Redemption","Heal after the combo lands.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Moonstone Renewer","Extended fights are aura fights — you win those."),I("Ardent Censer","Buff the carry kiting them down."),I("Echoes of Helia","Heal-proc through the long duel.")],behind:[I("Redemption","Big heal resets their duel win."),I("Mikael's Blessing","Cleanse the slow that lets them stick."),I("Locket of the Iron Solari","Shield the focused carry.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their one rotation."),I("Moonstone Renewer","Heal chain undoes the burst."),I("Bloodsong","Punish their cooldown gap with amped damage.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Mikael's Blessing","Cleanse the combo-opening CC."),I("Redemption","Recover the aftermath.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Moonstone Renewer","Out-sustain their drain in long fights."),I("Echoes of Helia","Heal-procs race their damage ramp."),I("Staff of Flowing Water","AP + haste buff wins the attrition war.")],behind:[I("Redemption","Team heal against their zone damage."),I("Mikael's Blessing","Cleanse the root that holds you in it."),I("Locket of the Iron Solari","Shield through the ramp.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Moonstone Renewer","Heal back every poke they land."),I("Echoes of Helia","Out-sustain the chip war."),I("Boots of Swiftness","Speed dodges the next volley.")],behind:[I("Redemption","Recover the poke damage before the fight."),I("Locket of the Iron Solari","Shield the engage moment."),I("Mikael's Blessing","Cleanse the pick that follows the poke.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Bloodsong","Amp your carry and win the 2v2 DPS race."),I("Echoes of Helia","Heal-proc sustain out-trades their poke."),I("Ardent Censer","Buff the carry's attack speed race.")],behind:[I("Locket of the Iron Solari","Shield their focus-fire target."),I("Redemption","Heal through the DPS."),I("Mikael's Blessing","Cleanse the CC that sets their kill.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Ardent Censer","Win the enchanter mirror with better buffs."),I("Staff of Flowing Water","Stack auras they can't match."),I("Echoes of Helia","Your procs out-sustain theirs.")],behind:[I("Moonstone Renewer","Out-heal their value curve."),I("Redemption","Bigger single moment than their sustain."),I("Dawncore","Scale the aura war.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Boots of Swiftness","Speed makes their hooks whiff."),I("Moonstone Renewer","Heal through the pick attempt."),I("Bloodsong","Punish the whiff with amped damage.")],behind:[I("Mikael's Blessing","Cleanse the caught ally — deny the pick."),I("Locket of the Iron Solari","Shield the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Team shield blanks the wombo engage."),I("Moonstone Renewer","Heal chain through the initiation."),I("Mikael's Blessing","Cleanse the primary lockdown.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the fight resets."),I("Locket of the Iron Solari","Shield the follow-up damage."),I("Redemption","Heal the aftermath.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Ardent Censer","Buff your carry to out-DPS their peel."),I("Bloodsong","Amp damage through the peel wall."),I("Staff of Flowing Water","Sustain the siege war.")],behind:[I("Moonstone Renewer","Outlast their defensive value."),I("Redemption","Match their peel with raw healing."),I("Dawncore","Scale past the stalemate.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Moonstone Renewer","Generic sustain answers most gimmicks."),I("Echoes of Helia","Heal-procs keep everyone topped."),I("Bloodsong","Amp the carry against whatever it is.")],behind:[I("Mikael's Blessing","Cleanse their key CC gimmick."),I("Locket of the Iron Solari","Shield the unreadable burst."),I("Redemption","Recover from the surprise.")],runes:{...SONA_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
