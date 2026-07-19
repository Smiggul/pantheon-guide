import { I } from "../runeHelpers.js";

const CAMILLE_SUP_DEFAULT_RUNES = {
  keystone:       "Hail of Blades",
  primary:        "Domination",
  primaryRunes:   ["Sudden Impact","Deep Ward","Treasure Hunter"],
  secondary:      "Resolve",
  secondaryRunes: ["Shield Bash","Bone Plating"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Support Camille runs Hail of Blades — hookshot in, three fast autos with Q true-damage weaved, and the trade is over before their support reacts. Sudden Impact procs on every E landing, Deep Ward sturdies her aggressive vision game, Treasure Hunter pays out the pick pattern, and the Resolve splash (Shield Bash off her passive shield, Bone Plating) survives the counter-burst her dive-range engages absorb. Her R ults the enemy carry into a private room — the ADC's nightmare, her carry's playground.",
};

const CAMILLE_TOP_DEFAULT_RUNES = {
  keystone:       "Grasp of the Undying",
  primary:        "Resolve",
  primaryRunes:   ["Shield Bash","Bone Plating","Unflinching"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Magical Footwear"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Grasp of the Undying rewards Camille's auto-into-ability trading pattern with permanent HP and a free proc every few seconds. Shield Bash converts Hookshot's bonus armor/MR into extra on-hit damage; Bone Plating and Unflinching cover the all-in commitment Hextech Ultimatum invites. Biscuit Delivery and Magical Footwear solve the early gold/mana curve so she hits her Trinity Force spike on time.",
};

// ══════════════════════════════════════════════════════════════════════════
//  CAMILLE — Skirmisher / Isolate-and-Duel
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"camille", display:"Camille", dd:"Camille",
  color:"#1a5a5a", glow:"#40c0c0",
  lanes:["Top","Support"],
  roles:{
    Top:{
      bans:["Malphite","Poppy","Renekton"], replacements:["Sett","Volibear","Jax"],
      role:"Skirmisher / Isolate-and-Duel",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Ravenous Hydra  ›  Death's Dance",
      coreNote:"Camille plays for an isolated 1v1 pick — Hookshot grapples onto a wall for a dash, Hextech Ultimatum traps a target in a zone nobody can escape, and Adaptive Defenses shreds whichever damage type she's taking most. Trinity Force's proc damage rewards the auto-into-ability combo; Ravenous Hydra adds sustain and cleave; Death's Dance lets her commit fully to the isolate without fearing the counter-hit.",
      sideItems:["Sterak's Gage","Guardian Angel","Serylda's Grudge","Black Cleaver","Mercury's Treads","Wit's End"],
      data:{
        JUGGERNAUT:{ahead:[I("Ravenous Hydra","Sustain wins the sustained trade war."),I("Trinity Force","Proc damage adds up over the fight."),I("Death's Dance","Outlast their sustain with your own.")],behind:[I("Sterak's Gage","Shield when the walk-down connects."),I("Mercury's Treads","Shorter CC before the kill."),I("Plated Steelcaps","Reduces auto damage from their press.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Proc burst punishes their dive."),I("Ravenous Hydra","Sustain outlasts the all-in."),I("Sterak's Gage","Shield through the engage.")],behind:[I("Sterak's Gage","Shield absorbs the engage burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains."),I("Mercury's Treads","Shorter CC on their engage.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sterak's Gage","Shield eats the opener before the isolate lands."),I("Death's Dance","Convert their burst into sustain you outlast."),I("Trinity Force","Punish their commit with proc damage.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Guardian Angel","Deny the kill."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Ravenous Hydra","Sustain wins the extended duel outright."),I("Black Cleaver","Shred through their auto-heavy dueling."),I("Trinity Force","Proc damage tips the auto-trade.")],behind:[I("Sterak's Gage","Survive their all-in spike."),I("Plated Steelcaps","Auto reduction."),I("Ravenous Hydra","Sustain through the duel.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sterak's Gage","Absorb the burst before it lands."),I("Wit's End","MR + on-hit through their kit."),I("Death's Dance","Sustain through the poke.")],behind:[I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC before the combo lands."),I("Guardian Angel","Insurance.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Death's Dance","Sustain outlasts their drain."),I("Black Cleaver","HP + shred vs their scaling durability.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Guardian Angel","Insurance.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Plated Steelcaps","Sets up the approach through poke."),I("Trinity Force","Gap-close punishes their poke window."),I("Mercury's Treads","Reduce CC duration from range.")],behind:[I("Mercury's Treads","Reduce CC duration."),I("Sterak's Gage","Second shield layer."),I("Guardian Angel","Insurance on approach.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Serylda's Grudge","Slow denies the kite."),I("Trinity Force","Reach the ADC before they can kite."),I("Death's Dance","Survive their DPS while you close.")],behind:[I("Sterak's Gage","Survive the peel + DPS."),I("Guardian Angel","Second life for a risky dive."),I("Mercury's Treads","Reduce CC duration.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred through their shield economy over time."),I("Trinity Force","Reach the carry despite the peel."),I("Death's Dance","Sustain through the combined burst.")],behind:[I("Sterak's Gage","Shield vs the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your isolate lands first."),I("Trinity Force","Punish a whiffed hook instantly."),I("Death's Dance","Sustain through the follow-up.")],behind:[I("Mercury's Treads","Mandatory — a caught Camille loses the whole trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Guardian Angel","Deny the pick's value entirely.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","Shred their frontline stat for your whole team."),I("Death's Dance","Sustain outlasts their engage burst."),I("Trinity Force","Punish their re-engage window.")],behind:[I("Sterak's Gage","Survive the initiation."),I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Insurance vs the follow-up.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Gradual shred still opens Wardens up."),I("Ravenous Hydra","Sustain still wins the peel war."),I("Death's Dance","Sustain through the extended fight.")],behind:[I("Black Cleaver","Only reliable damage vs a stacked-resist Warden."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Black Cleaver","Shred through their kit's mitigation."),I("Death's Dance","Sustain through their poke pattern.")],behind:[I("Mercury's Treads","Teemo blind / Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups."),I("Guardian Angel","Deny their split-push snowball.")],runes:{...CAMILLE_TOP_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Rell","Taric","Rakan"], replacements:["Leona","Pyke","Alistar"],
      role:"Hookshot Dive Support",
      corePath:"Bloodsong  ›  Plated Steelcaps  ›  Sundered Sky  ›  Sterak's Gage",
      coreNote:"Support Camille is a real meta role at high pick rate — a dive support who hookshot-stuns onto the enemy carry and isolates them with R while her ADC cleans up. Bloodsong amps the carry's damage after every E stun, Sundered Sky gives the crit-heal spike her half-income build needs to survive the dive, and Sterak's plus Guardian Angel insure the always-deepest-in positioning. Her ult is peel-proof: whoever she ults fights alone. Engage on cooldown; her lane is won by tempo, not attrition.",
      sideItems:["Guardian Angel","Knight's Vow","Randuin's Omen","Thornmail","Dead Man's Plate","Zeke's Convergence"],
      data:{
        JUGGERNAUT:{ahead:[I("Sundered Sky","Dive past them — your target is the backline."),I("Bloodsong","Amp the carry kiting them down."),I("Sterak's Gage","Survive their peel damage.")],behind:[I("Knight's Vow","Split their damage off your carry."),I("Randuin's Omen","Slow their walk-down."),I("Thornmail","Anti-heal their sustain.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Win the engage mirror — E stun opens first."),I("Sterak's Gage","Shield through their counter-dive."),I("Guardian Angel","Commit deeper than they can.")],behind:[I("Knight's Vow","Split the dive damage onto your armor."),I("Randuin's Omen","Slow the whole dive down."),I("Sterak's Gage","Survive the engage trade.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sundered Sky","R their assassin — trapped in the ring with you."),I("Sterak's Gage","Shield beats their burst math."),I("Bloodsong","Amp the carry's counter-kill.")],behind:[I("Knight's Vow","Eat the assassination attempt for your carry."),I("Guardian Angel","Trade one-shots and revive."),I("Randuin's Omen","Slow their reset escape.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","HoB plus true damage wins the short trade — leave before it extends."),I("Sterak's Gage","Survive their extended-fight ramp."),I("Bloodsong","Amp the carry's follow-up.")],behind:[I("Randuin's Omen","AS slow blunts their kit."),I("Knight's Vow","Share the carry's damage."),I("Thornmail","Anti-heal their sustain loop.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Sundered Sky","E stun interrupts the rotation before it starts."),I("Sterak's Gage","Shield floor under their combo."),I("Guardian Angel","Dive twice per fight.")],behind:[I("Mercury's Treads","Tenacity through the setup CC."),I("Knight's Vow","Split the burst damage."),I("Sterak's Gage","Survive the rotation.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Sundered Sky","Dive them before the drain ramps."),I("Sterak's Gage","Shield through the zone damage."),I("Bloodsong","Amp the carry poking from range.")],behind:[I("Mercury's Treads","Tenacity vs their locks."),I("Knight's Vow","Split the ramp damage."),I("Randuin's Omen","Slow their advance.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Sundered Sky","Hookshot erases their range advantage."),I("Guardian Angel","Dive with insurance."),I("Bloodsong","Amp the follow-up on arrival.")],behind:[I("Mercury's Treads","MR chips their poke math."),I("Knight's Vow","Guard the carry they're sieging."),I("Sterak's Gage","Shield the approach.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Sundered Sky","R their ADC — the fight is 4v4 plus an execution."),I("Bloodsong","Amp your carry in the 2v2 race."),I("Sterak's Gage","Survive their focus.")],behind:[I("Knight's Vow","Split their focus damage."),I("Randuin's Omen","Crit reduction on the dive."),I("Guardian Angel","Trade and revive.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Sundered Sky","R removes their carry from the shield bubble entirely."),I("Bloodsong","Amp damage through the shield war."),I("Sterak's Gage","Their poke can't remove your all-in.")],behind:[I("Thornmail","Anti-heal the sustain package."),I("Knight's Vow","Protect the carry through the value war."),I("Randuin's Omen","Slow their kited retreat.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Sundered Sky","Your E outranges their hook — engage first."),I("Sterak's Gage","Shield covers the landed catch."),I("Bloodsong","Punish the whiff with a full dive.")],behind:[I("Knight's Vow","Save the caught carry with shared damage."),I("Mercury's Treads","Shorter lockdown on catch."),I("Randuin's Omen","Slow the follow-up burst.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Sundered Sky","Out-tempo their engage — E lands before their CC."),I("Sterak's Gage","Shield through the wombo."),I("Guardian Angel","Dive behind their engage line.")],behind:[I("Mercury's Treads","Tenacity through the CC chain."),I("Knight's Vow","Split the engage burst."),I("Randuin's Omen","Slow their follow-up wave.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Sundered Sky","R skips the peel — their carry fights you alone."),I("Bloodsong","Amp the carry through the peel wall."),I("Guardian Angel","Dive the impossible angle twice.")],behind:[I("Thornmail","Anti-heal their protected carry."),I("Knight's Vow","Guard your own carry instead."),I("Zeke's Convergence","Convert R into a damage aura.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Sundered Sky","E-R isolation answers most gimmicks."),I("Sterak's Gage","Shield the surprise burst."),I("Bloodsong","Amp the carry against whatever it is.")],behind:[I("Mercury's Treads","Tenacity vs unfamiliar CC."),I("Knight's Vow","Share the damage you can't predict."),I("Guardian Angel","Survive the unknown.")],runes:{...CAMILLE_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
