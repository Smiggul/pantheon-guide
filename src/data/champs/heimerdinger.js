import { I } from "../runeHelpers.js";

const HEIMERDINGER_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Haste","Cut Down"],
  secondary:      "Sorcery",
  secondaryRunes: ["Absolute Focus","Gathering Storm"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror is the current Heimerdinger tech — turrets stack it for him, keeping the keystone near-permanent in extended lane fights while melees flail at his nest. Presence of Mind funds the endless turret-and-rocket spam, Legend: Haste feeds the cooldown loop, Cut Down shreds the HP-stacking juggernauts top lane feeds him, Absolute Focus rewards the healthy zone-control position, and Gathering Storm backs the scaling his turret siege converts into towers.",
};

// ══════════════════════════════════════════════════════════════════════════
//  HEIMERDINGER — Revered Inventor: Turret-Zone Bully  (B tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"heimerdinger", display:"Heimerdinger", dd:"Heimerdinger",
  color:"#5a4a20", glow:"#f0d060",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Irelia","Warwick","Jax"], replacements:["Teemo","Kennen","Rumble"],
      role:"Turret-Nest Lane Bully",
      corePath:"Blackfire Torch  ›  Sorcerer's Shoes  ›  Liandry's Torment  ›  Zhonya's Hourglass",
      coreNote:"Heimerdinger top turns melee lanes into tower defense: three turrets hold the zone, E stuns anyone who walks in, and empowered rockets delete whoever commits. Blackfire Torch amplifies the turret DoT pressure, Liandry's Torment burns through the bruiser HP top lane sends at him, Zhonya's covers the all-in he eventually eats, and Rylai's makes the nest inescapable. His counter-matchups are draft-level real — into most melees he's a free lane, into rush-down divers he's a snack. Ban accordingly.",
      sideItems:["Rylai's Crystal Scepter","Rabadon's Deathcap","Void Staff","Morellonomicon","Banshee's Veil","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Liandry's Torment","Burn scales off their HP as they wade into the nest."),I("Blackfire Torch","Amplified turret DoTs melt the walk-up."),I("Rylai's Crystal Scepter","Slowed juggernauts never leave the zone.")],behind:[I("Rylai's Crystal Scepter","Kite them through the turret line."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the nest lethal.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive — the nest eats them alive."),I("Blackfire Torch","Burn them through the whole engage."),I("Zhonya's Hourglass","Stasis while turrets finish the job.")],behind:[I("Zhonya's Hourglass","Rush — divers are the counter, stasis is the answer."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel with slows.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis in the nest — turrets kill them during it."),I("Rylai's Crystal Scepter","Slowed assassins die to rockets."),I("Blackfire Torch","Punish every entry.")],behind:[I("Zhonya's Hourglass","Stasis is the matchup."),I("Banshee's Veil","Blocks the opener."),I("Void Staff","Keep the turrets honest.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the duel — nobody duels a nest."),I("Liandry's Torment","Burn stacks while they chase through turrets."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel."),I("Morellonomicon","Cut their sustain.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Blackfire Torch","Turret volume out-totals their one rotation."),I("Zhonya's Hourglass","Stasis their combo, rockets answer."),I("Rabadon's Deathcap","Scale the nest harder.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the volume honest.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Blackfire Torch","Your burn volume out-ramps theirs."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Reposition the nest faster than they can poke it."),I("Blackfire Torch","Turret uptime out-values their volleys."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Speed between nest setups.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite three turrets."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","Empowered rocket volley deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Turrets stay lethal.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Turret volume outlasts any shield budget."),I("Morellonomicon","Cut the heal package."),I("Void Staff","Pen through the sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the volume honest.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your nest zone beats their hook zone."),I("Blackfire Torch","Punish every attempt with turret fire."),I("Rabadon's Deathcap","Kill threshold on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to re-nest elsewhere.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Percent-HP turret burn melts engage tanks."),I("Rylai's Crystal Scepter","Slow the engage before it reaches the nest."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Turret volume burns through the peel-tank."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Blackfire Torch","The nest out-gimmicks most gimmicks."),I("Rylai's Crystal Scepter","Slow beats trick mobility."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...HEIMERDINGER_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
