import { I } from "../runeHelpers.js";

const ZILEAN_SUP_DEFAULT_RUNES = {
  keystone:       "Summon Aery",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Waterwalking"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Relentless Hunter"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Summon Aery rides every Q bomb and E haste — Zilean procs it in both directions all game. Manaflow Band funds the double-bomb spam, Transcendence feeds the cooldown loop his rewind multiplies, Waterwalking plus Relentless Hunter make him one of the fastest roaming supports alive, and Cheap Shot fires true damage on every double-bomb stun. Chronoshift is the win condition: a free revive on the carry turns every enemy kill calculation into a lie.",
};

// ══════════════════════════════════════════════════════════════════════════
//  ZILEAN — Chronokeeper: Time-Bomb Revive Support  (A- 53.0% WR 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"zilean", display:"Zilean", dd:"Zilean",
  color:"#5a5a30", glow:"#f0e070",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Blitzcrank","Nautilus","Leona"], replacements:["Janna","Milio","Lulu"],
      role:"Time-Bomb Revive Enabler",
      corePath:"Solstice Sleigh  ›  Ionian Boots of Lucidity  ›  Shurelya's Battlesong  ›  Imperial Mandate",
      coreNote:"Zilean bends every fight's math: double-bomb stuns win lane trades, E is simultaneously the best peel and best chase spell in the support pool, and Chronoshift deletes the enemy team's best play once per fight. Solstice Sleigh feeds the roam tempo, Shurelya's Battlesong turns his speed identity into a team engage tool, Imperial Mandate converts the bomb-stun pattern into team damage, and Bandlepipes closes the utility curve. Hold R like a threat — its existence changes how they fight even uncast.",
      sideItems:["Bandlepipes","Redemption","Mikael's Blessing","Locket of the Iron Solari","Dawncore","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Imperial Mandate","Bomb-proc them for your carry while E-kiting."),I("Shurelya's Battlesong","Team speed makes their engage pointless."),I("Solstice Sleigh","Roam tempo they can't follow.")],behind:[I("Redemption","Heal the fights they force."),I("Locket of the Iron Solari","Shield the target they walk down."),I("Mikael's Blessing","Cleanse the catch that starts it.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shurelya's Battlesong","E + active speed makes the dive whiff."),I("Imperial Mandate","Proc the diver mid-commit."),I("Mikael's Blessing","Cleanse the lockdown — R the rest.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the dive fails."),I("Locket of the Iron Solari","Shield the burst window."),I("Redemption","Heal through repeated attempts.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry when they jump — R laughs at the rest."),I("Imperial Mandate","Double-bomb stun the lander."),I("Shurelya's Battlesong","Speed the carry out of the window.")],behind:[I("Locket of the Iron Solari","The active plus R double-answers their burst."),I("Mikael's Blessing","Cleanse the setup CC."),I("Redemption","Recover the aftermath.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Imperial Mandate","Bomb-proc their duel attempts — E denies the stick."),I("Shurelya's Battlesong","Team speed wins the extended dance."),I("Redemption","Sustain the long fight.")],behind:[I("Redemption","Big heal resets their duel win."),I("Mikael's Blessing","Cleanse the slow that lets them stick."),I("Locket of the Iron Solari","Shield the focused carry.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their rotation — R blanks the kill."),I("Imperial Mandate","Your stun setup lands first."),I("Mikael's Blessing","Cleanse the combo opener.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Mikael's Blessing","Cleanse the setup CC."),I("Redemption","Recover the aftermath.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Shurelya's Battlesong","Speed beats their zone control entirely."),I("Imperial Mandate","Proc their zone-stand pattern."),I("Redemption","Out-sustain the drain war.")],behind:[I("Redemption","Team heal against their zone."),I("Mikael's Blessing","Cleanse the root that holds allies."),I("Locket of the Iron Solari","Shield through the ramp.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Shurelya's Battlesong","Speed dodges the poke — bombs answer back."),I("Imperial Mandate","Proc them at every stun window."),I("Vigilant Wardstone","Vision beats the range game.")],behind:[I("Redemption","Recover the poke before the fight."),I("Locket of the Iron Solari","Shield the engage moment."),I("Mikael's Blessing","Cleanse the pick that follows.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Imperial Mandate","Bomb their carry — proc them for yours."),I("Shurelya's Battlesong","Speed wins the kite war."),I("Locket of the Iron Solari","Shield the focus target.")],behind:[I("Locket of the Iron Solari","Shield their focus-fire target."),I("Redemption","Heal through the DPS."),I("Mikael's Blessing","Cleanse the CC that sets their kill.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Imperial Mandate","Your stun procs out-value their shields."),I("Shurelya's Battlesong","Speed is the utility they can't match."),I("Dawncore","Scale the value war — R out-values everything.")],behind:[I("Redemption","Match their sustain with raw healing."),I("Locket of the Iron Solari","Shield through the poke war."),I("Dawncore","Scale past them.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Shurelya's Battlesong","E + speed makes their hooks unlandable."),I("Imperial Mandate","Double-bomb the catcher who missed."),I("Mikael's Blessing","Cleanse the caught ally.")],behind:[I("Mikael's Blessing","Cleanse the caught carry — R denies the kill."),I("Locket of the Iron Solari","Shield the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Team shield blanks the wombo — R blanks the kill."),I("Shurelya's Battlesong","Speed the team out of the engage radius."),I("Mikael's Blessing","Cleanse the primary lockdown.")],behind:[I("Mikael's Blessing","Cleanse their engage CC — the fight resets."),I("Locket of the Iron Solari","Shield the follow-up."),I("Redemption","Heal the aftermath.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Imperial Mandate","Bomb-proc cracks the peel shell."),I("Shurelya's Battlesong","Speed flanks around the wall."),I("Dawncore","Out-scale the stall — time is on your side, literally.")],behind:[I("Redemption","Sustain the attrition stalemate."),I("Locket of the Iron Solari","Shield through the siege."),I("Vigilant Wardstone","Out-vision the standoff.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Shurelya's Battlesong","Speed answers most gimmicks."),I("Imperial Mandate","Proc whatever they're doing."),I("Locket of the Iron Solari","Shield the surprise.")],behind:[I("Mikael's Blessing","Cleanse their key CC gimmick."),I("Locket of the Iron Solari","Shield the unreadable burst."),I("Redemption","R exists — nothing they do is final.")],runes:{...ZILEAN_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
