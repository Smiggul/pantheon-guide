import { I } from "../runeHelpers.js";

const BARD_SUP_DEFAULT_RUNES = {
  keystone:       "Electrocute",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Deep Ward","Treasure Hunter"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Jack Of All Trades"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Electrocute Bard is the current meta page — Q stun, meep auto, second auto procs it in every trade, turning his roam-and-pick pattern into real kill pressure. Cheap Shot fires true damage on every Q stun and Tempered Fate freeze, Deep Ward makes his chime-wandering double as vision control, Treasure Hunter pays him for the picks he was making anyway, and the Inspiration line (Magical Footwear, Jack Of All Trades) fits a champion whose item build is half utility half chaos.",
};

// ══════════════════════════════════════════════════════════════════════════
//  BARD — Wandering Caretaker: Roam Pick Support  (A tier Support 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"bard", display:"Bard", dd:"Bard",
  color:"#4a4a2a", glow:"#e0d060",
  lanes:["Support"],
  altBuilds:{
    Support:[{
      label:"Rocketbelt playmaker", tag:"alt",
      corePath:"Bloodsong  ›  Boots of Swiftness  ›  Hextech Rocketbelt  ›  Zeke's Convergence",
      // Research: "A pure solo-carry Bard setup from a high-elo Bard specialist."
      coreNote:"A solo-carry Bard setup. Rocketbelt amplifies your catches and roams and gives you real skirmish damage, and at 2,650 gold it arrives early for a support. Zeke's Convergence follows: although ranged, you want to get close and auto when you fight, and its slow keeps you on the target. Do not drop Dead Man's Plate entirely; into a full AD team its value is too high. Use this line into mixed or AP-heavy teams.",
      runes:{...BARD_SUP_DEFAULT_RUNES},
      sideItems:["Dead Man's Plate","Locket of the Iron Solari","Knight's Vow","Redemption","Mercury's Treads"],
    }],
  },
  roles:{
    Support:{
      bans:["Maokai","Taric","Senna"], replacements:["Thresh","Rakan","Pyke"],
      role:"Chime-Roam Pick Support",
      corePath:"Bloodsong  ›  Boots of Swiftness  ›  Dead Man's Plate  ›  Locket of the Iron Solari",
      // Research: Bandlepipes was described as the new-season Bard item.
      coreNote:"Bard plays the whole map: chimes fund permanent roaming, Q stuns through walls, and Magical Journey turns dead-end jungle into a highway. Bloodsong amps your carry's damage after every Q pick, Dead Man's Plate adds the speed and slam your roams want, Locket shields the teamfights Tempered Fate starts, and Bandlepipes closes the build. Tempered Fate can freeze the diving tower, the enemy team, or your own mistake.",
      sideItems:["Bandlepipes","Knight's Vow","Redemption","Zeke's Convergence","Randuin's Omen","Mikael's Blessing"],
      data:{
        JUGGERNAUT:{ahead:[I("Bloodsong","Q pick, amp the carry, kite the juggernaut forever."),I("Dead Man's Plate","Speed to stay untouchable while roaming."),I("Locket of the Iron Solari","Shield the carry they walk toward.")],behind:[I("Locket of the Iron Solari","Shield the target of their press."),I("Redemption","Heal the extended fight."),I("Knight's Vow","Split their damage off your carry.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dead Man's Plate","Speed to body-block the dive path."),I("Locket of the Iron Solari","Shield the dive target mid-air."),I("Bloodsong","Punish the failed dive with amped damage.")],behind:[I("Knight's Vow","Split the dive damage onto yourself."),I("Randuin's Omen","Slow the whole dive down."),I("Redemption","Heal through repeated attempts.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump."),I("Bloodsong","Q stun the assassin — the pick game reverses."),I("Knight's Vow","Pledge the carry — you take 14% of the damage the assassin deals them.")],behind:[I("Knight's Vow","Eat the assassination attempt yourself."),I("Randuin's Omen","Slow their reset escape."),I("Redemption","Recover the aftermath.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Bloodsong","Amp your carry through the extended duel."),I("Dead Man's Plate","Kite speed they can't match."),I("Locket of the Iron Solari","Shield the target they stick to.")],behind:[I("Randuin's Omen","AS slow blunts their kit."),I("Knight's Vow","Share the carry's damage."),I("Redemption","Sustain the long fight.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their rotation."),I("Bloodsong","Your pick lands before their combo does."),I("Dead Man's Plate","Speed dodges the setup skillshot.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Redemption","Recover the aftermath."),I("Knight's Vow","Split the burst.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Bloodsong","Pick them at range before the drain ramps."),I("Redemption","Out-sustain their zone in teamfights."),I("Locket of the Iron Solari","Shield through the ramp.")],behind:[I("Redemption","Team heal against their zone damage."),I("Knight's Vow","Split the ramp damage."),I("Randuin's Omen","Slow their advance.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dead Man's Plate","Speed + journeys flank around the poke zone."),I("Bloodsong","One Q pick ends the siege."),I("Shurelya's Battlesong","30% team Move Speed for 4 seconds runs everyone through the poke zone.")],behind:[I("Redemption","Recover the chip before the fight."),I("Locket of the Iron Solari","Shield the engage moment."),I("Knight's Vow","Guard the carry they're sieging.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Bloodsong","Amp your carry and win the 2v2 race."),I("Dead Man's Plate","Slam-slow their kiting."),I("Locket of the Iron Solari","Shield their focus target.")],behind:[I("Locket of the Iron Solari","Shield the focus-fire target."),I("Knight's Vow","Split their damage."),I("Redemption","Heal through the DPS.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Bloodsong","Amp damage beats their shield value."),I("Dead Man's Plate","Roam harder — win the map they're not on."),I("Zeke's Convergence","Convert Tempered Fate into a damage aura.")],behind:[I("Redemption","Match their sustain with raw healing."),I("Knight's Vow","Protect the carry through the value war."),I("Mikael's Blessing","Heal and Shield Power for the value war, plus a cleanse for their root or stun.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dead Man's Plate","Speed makes their hooks whiff — your Q doesn't."),I("Bloodsong","Win the pick-mirror with amped follow-up."),I("Mikael's Blessing","Cleanse the caught ally before the follow-up — knock-ups and suppression excepted.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Randuin's Omen","Slow the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Team shield blanks the wombo — or Tempered Fate does."),I("Bloodsong","Pick them before the engage forms."),I("Randuin's Omen","Slow the follow-up wave.")],behind:[I("Locket of the Iron Solari","Shield the engage burst."),I("Knight's Vow","Split the initiation damage."),I("Redemption","Heal the aftermath.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Bloodsong","Amp the carry to out-DPS their peel."),I("Zeke's Convergence","Aura damage cracks the peel shell."),I("Bandlepipes","Q stuns and slows grant Fanfare — Attack Speed for nearby allies to out-DPS the peel.")],behind:[I("Redemption","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Randuin's Omen","Slow their counter-engage.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Bloodsong","Generic pick pressure answers most gimmicks."),I("Locket of the Iron Solari","Shield the surprise burst."),I("Dead Man's Plate","Speed to out-rotate the trick.")],behind:[I("Knight's Vow","Share the damage you can't predict."),I("Redemption","Recover from the surprise."),I("Randuin's Omen","Slow the gimmick down.")],runes:{...BARD_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
