import { I } from "../runeHelpers.js";

const TARIC_SUP_DEFAULT_RUNES = {
  keystone:       "Glacial Augment",
  primary:        "Inspiration",
  primaryRunes:   ["Magical Footwear","Biscuit Delivery","Cosmic Insight"],
  secondary:      "Resolve",
  secondaryRunes: ["Conditioning","Revitalize"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Glacial Augment rides Taric's E stun — a stunned-then-slowed target stays in your carry's kill window twice as long, and the utility keystone fits a champion whose damage was never the point. Magical Footwear and Biscuit Delivery smooth the early lane his scaling wants to skip, Cosmic Insight shortens Cosmic Radiance — the fight-deciding invulnerability — Conditioning scales him into a real frontliner, and Revitalize amplifies the Q heal-spam his bastion-linked carry bathes in.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TARIC — Shield of Valoran: Invulnerability Support  (A tier Support 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"taric", display:"Taric", dd:"Taric",
  color:"#4a3a4a", glow:"#e0a0e0",
  lanes:["Support"],
  roles:{
    Support:{
      bans:["Zyra","Xerath","Karma"], replacements:["Braum","Alistar","Rell"],
      role:"Bastion Invuln Guardian",
      corePath:"Solstice Sleigh  ›  Plated Steelcaps  ›  Locket of the Iron Solari  ›  Winter's Approach",
      coreNote:"Taric wins fights with one button: Cosmic Radiance makes his whole team invulnerable for the seconds that decide a teamfight. Solstice Sleigh feeds his roam-and-peel pattern, Locket stacks a team shield onto the invuln package, Winter's Approach converts his Q mana-spam into a Fimbulwinter shield engine, and Knight's Vow doubles down on the bodyguard identity. E through your bastion-linked ally for angle-bent stuns nobody expects. Play for R timings — a well-placed Radiance beats any wombo the enemy drafted.",
      sideItems:["Knight's Vow","Frozen Heart","Redemption","Thornmail","Randuin's Omen","Zeke's Convergence"],
      data:{
        JUGGERNAUT:{ahead:[I("Locket of the Iron Solari","Shield the carry they walk toward."),I("Winter's Approach","Q spam sustains the kite-down."),I("Thornmail","Anti-heal their sustain trades.")],behind:[I("Thornmail","Cut their healing on every dive."),I("Knight's Vow","Split their damage off your carry."),I("Redemption","Heal the extended fight.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Locket of the Iron Solari","Shield the dive target — R blanks the follow-up."),I("Knight's Vow","Split the dive damage preemptively."),I("Winter's Approach","Shield engine vs repeated engages.")],behind:[I("Knight's Vow","Split the dive damage onto your armor."),I("Randuin's Omen","Slow the whole dive down."),I("Redemption","Heal through repeated attempts.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Locket of the Iron Solari","Shield the carry the moment they jump — E stuns the lander."),I("Knight's Vow","Their one-shot math includes your armor now."),I("Winter's Approach","Shield engine covers the burst window.")],behind:[I("Knight's Vow","Eat the assassination attempt yourself."),I("Randuin's Omen","Slow their reset escape."),I("Redemption","Recover the aftermath.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Frozen Heart","AS slow blunts their whole extended kit."),I("Thornmail","Anti-heal their sustain mid-duel."),I("Locket of the Iron Solari","Shield the target they stick to.")],behind:[I("Randuin's Omen","Double AS reduction breaks their DPS."),I("Knight's Vow","Share the carry's damage."),I("Redemption","Sustain the long fight.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Locket of the Iron Solari","Team shield blanks their rotation — R blanks the next one."),I("Winter's Approach","Shield engine eats the poke."),I("Knight's Vow","Split the combo damage.")],behind:[I("Locket of the Iron Solari","Shield the rotation or lose a carry."),I("Redemption","Recover the aftermath."),I("Knight's Vow","Split the burst.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Winter's Approach","Out-sustain their drain with Q spam."),I("Redemption","Team heal against their zone."),I("Locket of the Iron Solari","Shield through the ramp.")],behind:[I("Redemption","Team heal against their zone damage."),I("Knight's Vow","Split the ramp damage."),I("Randuin's Omen","Slow their advance.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Winter's Approach","Q heal-spam out-sustains the poke war."),I("Redemption","Recover the chip before the fight."),I("Locket of the Iron Solari","Shield the engage moment.")],behind:[I("Redemption","Recover the poke before fights."),I("Locket of the Iron Solari","Shield the engage window."),I("Knight's Vow","Guard the carry they're sieging.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Frozen Heart","AS slow deletes their DPS math."),I("Randuin's Omen","Crit reduction stacks the denial."),I("Thornmail","Return damage on their focus.")],behind:[I("Randuin's Omen","The active blanks their DPS window."),I("Knight's Vow","Split their damage on your carry."),I("Locket of the Iron Solari","Shield the focus target.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Zeke's Convergence","Your engage beats their disengage — E through the carry."),I("Thornmail","Anti-heal the sustain lane."),I("Locket of the Iron Solari","Out-utility their utility.")],behind:[I("Thornmail","Grievous wounds is the win condition."),I("Redemption","Match their sustain with raw healing."),I("Knight's Vow","Protect the carry through the value war.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Locket of the Iron Solari","Shield the caught ally — R saves the fight after."),I("Winter's Approach","Shield engine vs the pick pattern."),I("Zeke's Convergence","Punish the whiff with an engage aura.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Randuin's Omen","Slow the follow-up burst."),I("Redemption","Recover the failed fight.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Locket of the Iron Solari","Their wombo meets your R — invulnerable teams don't lose wombos."),I("Zeke's Convergence","Counter-engage with the aura."),I("Thornmail","Anti-heal their sustain engage.")],behind:[I("Locket of the Iron Solari","Shield the engage burst."),I("Knight's Vow","Split the initiation damage."),I("Redemption","Heal the aftermath.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Zeke's Convergence","Aura damage cracks the peel stalemate."),I("Frozen Heart","Win the attrition war on your terms."),I("Thornmail","Anti-heal their protected carry.")],behind:[I("Redemption","Sustain the attrition stalemate."),I("Knight's Vow","Guard your carry through the siege."),I("Randuin's Omen","Slow their counter-engage.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Locket of the Iron Solari","Shield the surprise burst — R blanks the gimmick."),I("Winter's Approach","Shield engine covers the unknown."),I("Thornmail","Punish whatever they're doing.")],behind:[I("Knight's Vow","Share the damage you can't predict."),I("Redemption","Recover from the surprise."),I("Randuin's Omen","Slow the gimmick down.")],runes:{...TARIC_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
