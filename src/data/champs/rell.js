import { I } from "../runeHelpers.js";

const RELL_SUP_DEFAULT_RUNES = {
  keystone:       "Aftershock",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Hextech Flashtraption","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Aftershock fires on every W crash-landing and E stun — Rell is engage incarnate, so the resist burst covers the exact seconds she spends in the middle of four enemies. Shield Bash adds damage off her mounted shield cycling, Bone Plating and Unflinching survive the counter-burst and chain-CC her dives eat, Hextech Flashtraption enables the over-wall W engages nobody wards against, and Cosmic Insight brings Magnet Storm around faster for the wombo her team drafts around.",
};

// ══════════════════════════════════════════════════════════════════════════
//  RELL — Iron Maiden: Hard-Engage Tank Support  (S tier, rank 4, 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"rell", display:"Rell", dd:"Rell",
  color:"#4a2a1a", glow:"#d07040",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Morgana","Janna","Zyra"], replacements:["Leona","Nautilus","Alistar"],
      role:"Crash-Down Engage Tank",
      corePath:"Celestial Opposition  ›  Plated Steelcaps  ›  Zeke's Convergence  ›  Locket of the Iron Solari",
      coreNote:"Rell is the hardest engage in the game — W dismount flips a whole team into the air, and Magnet Storm drags them back in for seconds. Celestial Opposition blunts the counter-burst her dives absorb, Zeke's Convergence turns every R into a damage aura for her carry, Locket shields the team through the follow-up, and Knight's Vow keeps the ADC alive inside the chaos she creates. Draft note: she's rank-1 in high elo for a reason — ban her mirror or first-pick her.",
      sideItems:["Knight's Vow","Thornmail","Redemption","Kaenic Rookern","Randuin's Omen","Vigilant Wardstone"],
      data:{
        JUGGERNAUT:{ahead:[I("Zeke's Convergence","Engage them first — the aura burns while they flail."),I("Thornmail","Anti-heal their sustain brawls."),I("Locket of the Iron Solari","Team shield through their damage.")],behind:[I("Thornmail","Cut their healing on every dive."),I("Knight's Vow","Split their damage off your carry."),I("Redemption","Heal the extended fight.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Celestial Opposition","Their dive meets your counter-engage stats."),I("Locket of the Iron Solari","Shield the dive target mid-air."),I("Zeke's Convergence","Punish their engage with your own aura.")],behind:[I("Knight's Vow","Split the dive damage onto your armor."),I("Randuin's Omen","Slow the whole dive down."),I("Redemption","Heal through repeated attempts.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump."),I("Celestial Opposition","Your W answers their engage — crash on the assassin."),I("Zeke's Convergence","R traps them next to your carry's damage.")],behind:[I("Knight's Vow","Eat the assassination attempt yourself."),I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow their reset escape.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Zeke's Convergence","Engage on your timing — the aura wins extended fights."),I("Thornmail","Anti-heal their sustain mid-duel."),I("Locket of the Iron Solari","Shield the target they stick to.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Knight's Vow","Share the carry's damage."),I("Redemption","Sustain the long fight.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Celestial Opposition","Crash through the burst window with reduced damage."),I("Locket of the Iron Solari","Team shield blanks their rotation."),I("Kaenic Rookern","Magic shield on the engage path.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Redemption","Recover the aftermath.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Kaenic Rookern","Shield through their zone and crash anyway."),I("Zeke's Convergence","Your engage outpaces their ramp."),I("Thornmail","If they splash AD, punish it.")],behind:[I("Kaenic Rookern","MR shield answers the drain."),I("Redemption","Team heal against their zone damage."),I("Knight's Vow","Split the ramp damage.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Celestial Opposition","Cross the poke zone and make them pay."),I("Zeke's Convergence","Engage from angles they can't poke."),I("Locket of the Iron Solari","Shield the approach.")],behind:[I("Kaenic Rookern","Shield the poke on approach."),I("Redemption","Recover the chip before the fight."),I("Knight's Vow","Guard the carry they're sieging.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Zeke's Convergence","R + aura deletes their carry in the wombo."),I("Randuin's Omen","Crit reduction on the dive."),I("Thornmail","Return damage on their focus.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Knight's Vow","Split their damage on your carry."),I("Locket of the Iron Solari","Shield the focus target.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Zeke's Convergence","Engage through the shields — the aura outlasts them."),I("Thornmail","Anti-heal the whole sustain lane."),I("Locket of the Iron Solari","Out-utility their utility.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Redemption","Match their sustain with raw healing."),I("Knight's Vow","Protect the carry through the poke war.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Celestial Opposition","Your engage beats their hook — crash first."),I("Locket of the Iron Solari","Shield the caught ally instantly."),I("Zeke's Convergence","Punish the whiff with a full dive.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Randuin's Omen","Slow the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Zeke's Convergence","Win the engage mirror — your wombo hits harder."),I("Thornmail","Anti-heal their sustain engage."),I("Locket of the Iron Solari","Shield through their initiation.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Knight's Vow","Split the engage burst."),I("Randuin's Omen","Slow their follow-up wave.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Your engage cracks their peel shell."),I("Thornmail","Anti-heal their protected carry."),I("Vigilant Wardstone","Vision for the flank engage angle.")],behind:[I("Redemption","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Kaenic Rookern","Shield the poke war.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Celestial Opposition","Generic engage stats answer most gimmicks."),I("Locket of the Iron Solari","Shield the surprise burst."),I("Zeke's Convergence","Your wombo out-gimmicks theirs.")],behind:[I("Kaenic Rookern","Shield what you can't predict."),I("Knight's Vow","Share the unreadable damage."),I("Redemption","Recover from the surprise.")],runes:{...RELL_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
