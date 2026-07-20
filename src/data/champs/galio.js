import { I } from "../runeHelpers.js";

const GALIO_MID_DEFAULT_RUNES = {
  keystone:       "Stormraider's Surge",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Unflinching"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Stormraider's Surge procs off Galio's Q-E-auto trade chunks and surges him into or out of the fight — mobility his kit otherwise rents from Flash. Manaflow Band funds the Q poke war, Transcendence feeds the taunt cooldown his whole playmaking runs on, Scorch wins early trades, and Second Wind + Unflinching stabilise the AD-assassin matchups he's drafted to answer. He's the anti-magic anti-dive mid: taunt their engage, ult your side lanes, repeat.",
};

const GALIO_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Bone Plating","Unflinching"],
  secondary:      "Sorcery",
  secondaryRunes: ["Nimbus Cloak","Transcendence"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Support Galio runs a completely different page: Aftershock fires on every E knockup and W taunt, covering the seconds he spends as the engage button. Shield Bash adds damage off his passive magic shield cycling, Bone Plating survives the counter-burst, Unflinching keeps the taunt chain unstoppable, Nimbus Cloak turns Flash-taunt into a speed play, and Transcendence keeps Hero's Entrance available for every side-lane fight his roaming pattern hunts.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GALIO — Colossus: Anti-Magic Playmaker  (A/S Mid / B Support 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"galio", display:"Galio", dd:"Galio",
  color:"#3a4a5a", glow:"#90b0d0",
  lanes:["Mid","Support"],
  roles:{
    Mid:{
      bans:["Zed","Talon","Yasuo"], replacements:["Lissandra","Vex","Annie"],
      role:"Anti-Magic Roam Colossus",
      corePath:"Hextech Rocketbelt  ›  Mercury's Treads  ›  Imperial Mandate  ›  Zhonya's Hourglass",
      coreNote:"Galio is the teamfight-first mid: taunt is the best engage-and-peel spell in the lane, and Hero's Entrance turns every side-lane skirmish into a 5v4. Hextech Rocketbelt guarantees the Flash-less taunt engage, Imperial Mandate converts his constant CC into team damage, and Zhonya's covers the always-in-the-middle positioning. Riftmaker closes the drain-fight scaling. Shove mid, watch the map, and arrive from the sky whenever anyone anywhere starts a fight.",
      sideItems:["Riftmaker","Spirit Visage","Thornmail","Force of Nature","Rabadon's Deathcap","Kaenic Rookern"],
      data:{
        JUGGERNAUT:{ahead:[I("Imperial Mandate","Taunt-proc them for your whole team."),I("Riftmaker","Out-sustain the brawl they want."),I("Hextech Rocketbelt","Dash spacing controls the trade tempo.")],behind:[I("Thornmail","Anti-heal their sustain trades."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Spirit Visage","Amplify your shield-heal loop.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Counter-taunt their engage — the dive dies mid-air."),I("Imperial Mandate","Proc the whole failed dive."),I("Zhonya's Hourglass","Stasis wastes their commitment.")],behind:[I("Zhonya's Hourglass","Stasis answers the all-in."),I("Kaenic Rookern","Shield vs AP divers."),I("Spirit Visage","Sustain repeated attempts.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Taunt + stasis — two answers to one combo."),I("Imperial Mandate","Proc them every time they try."),I("Riftmaker","Drain back their chip.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus taunt is the matchup."),I("Kaenic Rookern","Magic shield vs AP assassins."),I("Thornmail","Vs AD assassins with Steelcaps logic.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The extended duel favors the colossus with drain."),I("Imperial Mandate","Taunt-proc their duel attempts."),I("Hextech Rocketbelt","Dash denies their spacing.")],behind:[I("Thornmail","Anti-heal their sustain loop."),I("Zhonya's Hourglass","Deny the all-in window."),I("Spirit Visage","Out-sustain the attrition.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Passive + shield — their magic burst hits a wall."),I("Imperial Mandate","Taunt-proc their whiffed rotation."),I("Riftmaker","Drain the cooldown gap.")],behind:[I("Kaenic Rookern","Rush the magic shield — it's your matchup."),I("Zhonya's Hourglass","Survive the rotation."),I("Spirit Visage","MR + healing through the poke.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Kaenic Rookern","Your passive eats their whole damage profile."),I("Riftmaker","Out-drain the drain mage."),I("Imperial Mandate","Proc their zone-stand pattern.")],behind:[I("Kaenic Rookern","MR shield answers the ramp."),I("Spirit Visage","Amplify your sustain."),I("Force of Nature","Stack MR + speed.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash + taunt erases their range advantage."),I("Kaenic Rookern","Their poke feeds your shield."),I("Imperial Mandate","Proc them at every taunt window.")],behind:[I("Kaenic Rookern","Shield the poke war."),I("Force of Nature","MR + speed crosses the zone."),I("Zhonya's Hourglass","Covers the caught approach.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Hextech Rocketbelt","Dash-taunt deletes the ranged top's kiting."),I("Imperial Mandate","Proc them for your jungler."),I("Riftmaker","Sustain through the chip.")],behind:[I("Thornmail","Return damage on every auto."),I("Zhonya's Hourglass","Stasis their focus fire."),I("Force of Nature","Speed to finally reach them.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Imperial Mandate","Your CC procs beat their shield value."),I("Riftmaker","Out-sustain the value war."),I("Rabadon's Deathcap","Burst through the budget.")],behind:[I("Thornmail","Anti-heal the sustain package."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Spirit Visage","Your sustain beats their poke.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Taunt outranges the hook when you dash first."),I("Imperial Mandate","Proc the whiffing catcher."),I("Kaenic Rookern","Shield eats the poke setup.")],behind:[I("Zhonya's Hourglass","Stasis the caught scenario."),I("Kaenic Rookern","Shield vs AP catchers."),I("Spirit Visage","Sustain the pick attempts.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Imperial Mandate","Your taunt procs their whole engage line for the team."),I("Riftmaker","True damage cracks the tank mirror."),I("Hextech Rocketbelt","Counter-engage on your timing.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Thornmail","Anti-heal their sustain engage."),I("Force of Nature","Speed + MR to counter-engage.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Riftmaker","True damage cracks the peel-tank stall."),I("Imperial Mandate","Taunt-proc through the peel."),I("Rabadon's Deathcap","Out-scale the mitigation budget.")],behind:[I("Riftmaker","Required true damage vs stacked resists."),I("Spirit Visage","Sustain the stalemate."),I("Thornmail","Anti-heal their protected carry.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Hextech Rocketbelt","Dash-taunt answers most gimmicks."),I("Imperial Mandate","Proc whatever they're doing."),I("Riftmaker","Sustain through the tricks.")],behind:[I("Kaenic Rookern","Shield the surprise burst."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Spirit Visage","Sustain through the unfamiliar.")],runes:{...GALIO_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Zyra","Lux","Xerath"], replacements:["Alistar","Rell","Nautilus"],
      role:"Taunt Engage Support",
      corePath:"Celestial Opposition  ›  Plated Steelcaps  ›  Locket of the Iron Solari  ›  Imperial Mandate",
      coreNote:"Support Galio is the engage-tank version of the colossus: E knockup into W taunt is a two-man wombo, and Hero's Entrance means his bot lane never fights alone. Celestial Opposition blunts the counter-burst his dives absorb, Locket shields the team through the follow-up, Imperial Mandate converts every taunt into team damage, and Thornmail closes against lifesteal carries. His passive shield plus Aftershock makes him absurdly durable for a support — engage like it's free, because for him it nearly is.",
      sideItems:["Thornmail","Knight's Vow","Redemption","Kaenic Rookern","Randuin's Omen","Zeke's Convergence"],
      data:{
        JUGGERNAUT:{ahead:[I("Imperial Mandate","Taunt-proc them for your carry."),I("Locket of the Iron Solari","Shield the target they walk down."),I("Thornmail","Anti-heal their sustain.")],behind:[I("Thornmail","Cut their healing on every dive."),I("Knight's Vow","Split their damage off your carry."),I("Redemption","Heal the extended fight.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Celestial Opposition","Their dive meets your counter-taunt."),I("Locket of the Iron Solari","Shield the dive target mid-air."),I("Imperial Mandate","Proc the whole failed dive.")],behind:[I("Knight's Vow","Split the dive damage onto your shield."),I("Randuin's Omen","Slow the whole dive down."),I("Redemption","Heal through repeated attempts.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump — taunt the lander."),I("Celestial Opposition","Counter-stats for the counter-engage."),I("Imperial Mandate","Proc them every attempt.")],behind:[I("Knight's Vow","Eat the assassination attempt yourself."),I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow their reset escape.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Imperial Mandate","Taunt-proc their duel attempts."),I("Thornmail","Anti-heal their sustain mid-fight."),I("Locket of the Iron Solari","Shield the target they stick to.")],behind:[I("Randuin's Omen","AS slow blunts their kit."),I("Knight's Vow","Share the carry's damage."),I("Redemption","Sustain the long fight.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Passive + shield walls their rotation."),I("Locket of the Iron Solari","Team shield blanks the combo."),I("Imperial Mandate","Taunt-proc the whiff.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Redemption","Recover the aftermath.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Kaenic Rookern","Your passive eats their damage profile."),I("Imperial Mandate","Proc their zone-stand pattern."),I("Thornmail","If they splash AD, punish it.")],behind:[I("Kaenic Rookern","MR shield answers the drain."),I("Redemption","Team heal against their zone."),I("Knight's Vow","Split the ramp damage.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Celestial Opposition","Cross the poke zone and taunt — they built no answer."),I("Kaenic Rookern","Their poke feeds your shield."),I("Imperial Mandate","Proc them at every window.")],behind:[I("Kaenic Rookern","Shield the poke on approach."),I("Redemption","Recover the chip before the fight."),I("Knight's Vow","Guard the carry they're sieging.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Imperial Mandate","Taunt their carry — proc them for yours."),I("Randuin's Omen","Crit reduction on the dive."),I("Thornmail","Return damage on their focus.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Knight's Vow","Split their damage on your carry."),I("Locket of the Iron Solari","Shield the focus target.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Imperial Mandate","Your CC procs out-value their shields."),I("Thornmail","Anti-heal the sustain lane."),I("Zeke's Convergence","Convert Hero's Entrance into a damage aura.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Redemption","Match their sustain."),I("Knight's Vow","Protect the carry through the poke war.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Celestial Opposition","Your taunt beats their hook — engage first."),I("Locket of the Iron Solari","Shield the caught ally instantly."),I("Imperial Mandate","Proc the whiffing catcher.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Randuin's Omen","Slow the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Imperial Mandate","Win the engage mirror — taunt procs their whole line."),I("Thornmail","Anti-heal their sustain engage."),I("Locket of the Iron Solari","Shield through their initiation.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Knight's Vow","Split the engage burst."),I("Randuin's Omen","Slow their follow-up wave.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Imperial Mandate","Taunt-proc cracks their peel shell."),I("Thornmail","Anti-heal their protected carry."),I("Zeke's Convergence","Aura damage through the stall.")],behind:[I("Redemption","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Kaenic Rookern","Shield the poke war.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Celestial Opposition","Generic engage stats answer most gimmicks."),I("Locket of the Iron Solari","Shield the surprise burst."),I("Imperial Mandate","Proc whatever they're doing.")],behind:[I("Kaenic Rookern","Shield what you can't predict."),I("Knight's Vow","Share the unreadable damage."),I("Redemption","Recover from the surprise.")],runes:{...GALIO_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
