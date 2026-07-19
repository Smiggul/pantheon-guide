import { I } from "../runeHelpers.js";

const TAHMKENCH_SUP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Unflinching"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Grasp procs constantly off Tahm's Q-poke-plus-auto lane pattern and stacks the HP his entire kit converts into damage and shielding. Shield Bash adds damage every time his E grey-health shield triggers, Second Wind + Unflinching stabilise the poke lanes that try to bully him off his carry, and the Precision splash (Triumph, Legend: Alacrity) feeds the tongue-lash trading rhythm and skirmish sustain.",
};

const TAHMKENCH_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Second Wind","Unflinching"],
  secondary:      "Precision",
  secondaryRunes: ["Triumph","Legend: Alacrity"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Top Tahm runs the same Grasp page as Support — the data confirms it — because the lane pattern is identical, just selfish: stack Grasp procs and An Acquired Taste, then one-shot combo with devoured-target damage. The difference is itemization, not runes: solo gold funds Heartsteel into Riftmaker offense where support Tahm builds pure utility tank.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TAHM KENCH — River King: Devour Tank  (A Support / B Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"tahmkench", display:"Tahm Kench", dd:"TahmKench",
  color:"#3a4a3a", glow:"#90c090",
  lanes:["Support","Top"],
  roles:{
    Support:{
      bans:["Zyra","Karma","Lux"], replacements:["Braum","Alistar","Nautilus"],
      role:"Devour Bodyguard Tank",
      corePath:"Solstice Sleigh  ›  Plated Steelcaps  ›  Heartsteel  ›  Thornmail",
      coreNote:"Tahm Kench is the ultimate bodyguard — Devour literally removes your carry from a losing fight, and everything here makes him harder to chew through while he does it. Solstice Sleigh's HP-and-speed proc fits his roaming shot-caller pattern, Heartsteel stacks the HP his W and E both scale from, and Thornmail plus Spirit Visage tune his durability to the enemy's damage mix. The thicker he gets, the more damage his tongue does — HP is his only offense stat and he needs no other.",
      sideItems:["Spirit Visage","Kaenic Rookern","Unending Despair","Randuin's Omen","Force of Nature","Knight's Vow"],
      data:{
        JUGGERNAUT:{ahead:[I("Heartsteel","Stack HP faster than they stack damage."),I("Thornmail","Punish their sustain-heavy trades."),I("Solstice Sleigh","Speed to keep your carry out of their reach.")],behind:[I("Thornmail","Anti-heal + armor blunts the walk-down."),I("Spirit Visage","Amplify grey health against their damage."),I("Knight's Vow","Redirect the damage they land on your carry.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Heartsteel","HP wall between the diver and your carry."),I("Randuin's Omen","Slow the dive mid-animation."),I("Thornmail","They pay for every second on your carry.")],behind:[I("Knight's Vow","Split the dive damage onto your HP bar."),I("Randuin's Omen","Active slows the whole dive."),I("Spirit Visage","Sustain through the repeated attempts.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Heartsteel","Devour + HP wall makes their target unkillable."),I("Thornmail","Return damage on their burst window."),I("Solstice Sleigh","Speed to body-block the jump.")],behind:[I("Knight's Vow","Eat the assassination attempt yourself."),I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow their reset escape.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Heartsteel","Out-HP their extended duel damage."),I("Thornmail","Anti-heal cuts their sustain mid-fight."),I("Randuin's Omen","Slow their stick-to-carry pattern.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Knight's Vow","Share the carry's damage."),I("Spirit Visage","Sustain the long fight.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks their opening rotation."),I("Heartsteel","HP floor under the burst math."),I("Solstice Sleigh","Speed to Devour the target first.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Knight's Vow","Split the burst they land.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Sustain war — your grey health wins it."),I("Kaenic Rookern","Magic shield resets every fight entry."),I("Heartsteel","Stack HP off their poke pattern.")],behind:[I("Force of Nature","Stacking MR + speed answers the drain."),I("Spirit Visage","Amplify all your healing."),I("Kaenic Rookern","Shield the ramp-up window.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Heartsteel","Free HP stacks off their poke chip."),I("Solstice Sleigh","Speed closes the gap they need open."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","MR + speed to cross the poke zone."),I("Spirit Visage","Sustain back the chip."),I("Knight's Vow","Guard the carry they're really aiming at.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their DPS math."),I("Thornmail","Return damage on every auto."),I("Heartsteel","Out-HP their shred curve.")],behind:[I("Randuin's Omen","The active blanks their focus window."),I("Knight's Vow","Split their damage on your carry."),I("Thornmail","Anti-heal their lifesteal.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Heartsteel","Their poke can't out-pace your HP stacking."),I("Thornmail","Anti-heal the whole sustain lane."),I("Solstice Sleigh","Speed forces the engages they can't peel.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Knight's Vow","Protect the carry through the poke war.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Solstice Sleigh","Speed makes their hooks whiff."),I("Heartsteel","A landed hook onto you costs them the fight."),I("Thornmail","Punish the engage that follows.")],behind:[I("Knight's Vow","Devour + Vow double-saves the caught carry."),I("Randuin's Omen","Slow the follow-up burst."),I("Spirit Visage","Sustain the repeated attempts.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Heartsteel","Out-tank the tank war."),I("Thornmail","Anti-heal their sustain engage."),I("Randuin's Omen","Slow their wombo follow-up.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Knight's Vow","Split the engage burst."),I("Force of Nature","Speed + MR to disengage.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Heartsteel","Out-scale the peel war with raw HP."),I("Solstice Sleigh","Speed angles around their peel."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Force of Nature","MR + speed for the flank.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Heartsteel","Generic HP answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Knight's Vow","Share the damage you can't predict."),I("Randuin's Omen","Slow the gimmick down.")],runes:{...TAHMKENCH_SUP_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Fiora","Vayne","Camille"], replacements:["Shen","Malphite","Sion"],
      role:"Heartsteel Devour Bruiser",
      corePath:"Heartsteel  ›  Plated Steelcaps  ›  Dusk and Dawn  ›  Riftmaker",
      coreNote:"Top Tahm is the selfish version of the frog: same Grasp page, but solo gold goes into offense-flavored tanking. Heartsteel stacks are his win condition — every proc is permanent HP that An Acquired Taste converts into damage — and Dusk and Dawn plus Riftmaker turn the mid-game stack pile into real kill threat with omnivamp attached. Spirit Visage closes the loop on his massive grey-health sustain. Few top laners can actually kill him after two items; his job is to make them prove it.",
      sideItems:["Spirit Visage","Thornmail","Kaenic Rookern","Unending Despair","Randuin's Omen","Force of Nature"],
      data:{
        JUGGERNAUT:{ahead:[I("Heartsteel","Win the HP-stacking race outright."),I("Riftmaker","Omnivamp + true damage wins the long brawl."),I("Thornmail","Anti-heal their sustain trades.")],behind:[I("Thornmail","Cut their healing before comparing HP bars."),I("Spirit Visage","Amplify grey health against their damage."),I("Plated Steelcaps","Cheap mitigation vs their autos.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Heartsteel","HP wall makes their engage math fail."),I("Dusk and Dawn","Speed + damage punishes the failed dive."),I("Riftmaker","Out-sustain the skirmish they start.")],behind:[I("Randuin's Omen","Slow the dive mid-animation."),I("Spirit Visage","Sustain through repeated attempts."),I("Kaenic Rookern","Shield vs AP divers.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Heartsteel","Their burst math never beats your HP curve."),I("Thornmail","Return damage on the attempt."),I("Riftmaker","Drain them in the failed-burst window.")],behind:[I("Kaenic Rookern","Magic shield vs AP assassins."),I("Randuin's Omen","Slow the reset escape."),I("Spirit Visage","Sustain back the chip.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","Omnivamp out-lasts their duel windows."),I("Heartsteel","HP stacks while they whittle."),I("Thornmail","Anti-heal cuts their sustain mid-fight.")],behind:[I("Randuin's Omen","AS slow blunts their whole kit."),I("Thornmail","Grievous wounds vs their lifesteal."),I("Spirit Visage","Sustain the war of attrition.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Kaenic Rookern","Magic shield blanks the rotation."),I("Heartsteel","HP floor under their burst math."),I("Riftmaker","Drain back whatever lands.")],behind:[I("Kaenic Rookern","Rush the magic shield."),I("Spirit Visage","MR + healing through the poke."),I("Force of Nature","Stack MR + speed to close.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Spirit Visage","Grey health wins the sustain war."),I("Kaenic Rookern","Shield resets every trade."),I("Heartsteel","Stack HP off their poke pattern.")],behind:[I("Force of Nature","MR stacking answers the drain."),I("Spirit Visage","Amplify all your healing."),I("Thornmail","Anti-heal their sustain.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Heartsteel","Free HP off their poke chip."),I("Dusk and Dawn","Speed to close and one-shot combo."),I("Kaenic Rookern","Shield resets between volleys.")],behind:[I("Force of Nature","MR + speed crosses the poke zone."),I("Spirit Visage","Sustain back the chip."),I("Kaenic Rookern","Shield the approach.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Randuin's Omen","Crit reduction breaks their kite math."),I("Dusk and Dawn","Speed runs them down."),I("Thornmail","Return damage on every auto.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Thornmail","Anti-heal their lifesteal."),I("Force of Nature","Speed to finally reach them.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Heartsteel","Their poke can't outpace your stacking."),I("Thornmail","Anti-heal the sustain package."),I("Dusk and Dawn","Speed forces fights they can't peel.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Spirit Visage","Out-sustain their value."),I("Kaenic Rookern","Shield their poke rotation.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Heartsteel","A landed hook onto you costs them the fight."),I("Dusk and Dawn","Speed punishes the whiff."),I("Thornmail","Return damage on the follow-up.")],behind:[I("Randuin's Omen","Slow the follow-up burst."),I("Spirit Visage","Sustain the repeated attempts."),I("Kaenic Rookern","Shield vs AP catchers.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Heartsteel","Out-tank the tank war."),I("Riftmaker","True damage wins tank-vs-tank."),I("Thornmail","Anti-heal their sustain engage.")],behind:[I("Kaenic Rookern","Shield the AP half of their engage."),I("Force of Nature","Speed + MR to disengage."),I("Unending Despair","Sustain through the chain CC.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Riftmaker","True damage cracks the peel-tank stalemate."),I("Heartsteel","Out-scale the HP war."),I("Dusk and Dawn","Speed angles around their peel.")],behind:[I("Spirit Visage","Sustain the attrition stalemate."),I("Thornmail","Anti-heal their protected carry."),I("Force of Nature","MR + speed for the flank.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Heartsteel","Generic HP answers most gimmicks."),I("Kaenic Rookern","Shield the surprise burst."),I("Riftmaker","Drain through whatever they're doing.")],behind:[I("Spirit Visage","Sustain through the unfamiliar."),I("Randuin's Omen","Slow the gimmick down."),I("Force of Nature","Speed to just leave.")],runes:{...TAHMKENCH_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
