import { I } from "../runeHelpers.js";

const TALIYAH_MID_DEFAULT_RUNES = {
  keystone:       "Deathfire Touch",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Precision",
  secondaryRunes: ["Presence of Mind","Legend: Haste"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Mid Taliyah plays a control-mage pattern — Worked Ground Q spam over a seismic minefield — and Deathfire Touch adds a burn to every boulder that lands. Manaflow Band and Presence of Mind together erase her mana problems, Transcendence and Legend: Haste feed the Q/W/E cooldown loop her zone control runs on, and Scorch wins the early poke war before Archangel's comes online.",
};

const TALIYAH_JGL_DEFAULT_RUNES = {
  keystone:       "Dark Harvest",
  primary:        "Domination",
  primaryRunes:   ["Cheap Shot","Sixth Sense","Treasure Hunter"],
  secondary:      "Precision",
  secondaryRunes: ["Legend: Haste","Coup de Grace"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Taliyah runs a completely different page from Mid: Dark Harvest stacks off her W-E knockup-into-burst gank pattern, converting early tempo into scaling execute damage. Cheap Shot procs on every knockup and stun, Sixth Sense gives free jungle vision, Treasure Hunter accelerates the Blackfire Torch spike her ganks fund, and Legend: Haste + Coup de Grace close out the burst loop. Her ult is a cross-map gank highway no other jungler has.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TALIYAH — Stoneweaver: Control Mage (Mid) / Burst Ganker (Jungle)  26.14
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"taliyah", display:"Taliyah", dd:"Taliyah",
  color:"#6a4a2a", glow:"#e0a060",
  lanes:["Mid","Jungle"],
  roles:{
    Mid:{
      bans:["Zed","Yasuo","Kassadin"], replacements:["Orianna","Syndra","Ziggs"],
      role:"Seismic Control Mage",
      corePath:"Archangel's Staff  ›  Ionian Boots of Lucidity  ›  Rylai's Crystal Scepter  ›  Liandry's Torment",
      coreNote:"Mid Taliyah is a zone-control mage: seed Worked Ground, spam empowered Q volleys, and wall off every escape route with E and R. Archangel's Staff feeds the mana her machine-gun Q pattern burns, Rylai's Crystal Scepter makes the boulder volleys sticky, and Liandry's Torment burns targets trapped in her minefield. Zhonya's Hourglass covers the mid-range casting her combo demands. Her ult turns any side-lane push into a five-second flank threat.",
      sideItems:["Zhonya's Hourglass","Seraph's Embrace","Void Staff","Rabadon's Deathcap","Banshee's Veil","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Rylai's Crystal Scepter","Slowed juggernauts never cross the minefield."),I("Liandry's Torment","Burn scales off their HP stacking."),I("Archangel's Staff","Out-scale their ramp with your own.")],behind:[I("Rylai's Crystal Scepter","Kite their walk-up forever."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Void Staff","Pen keeps the volleys real.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rylai's Crystal Scepter","Slow the dive; W knockup breaks its timing."),I("Liandry's Torment","Burn them through the whole engage."),I("Zhonya's Hourglass","Stasis wastes their commitment.")],behind:[I("Zhonya's Hourglass","Mandatory — divers hunt immobile mages."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Peel yourself with slows.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught rotation is death."),I("Rylai's Crystal Scepter","Slowed assassins eat the full volley."),I("Seraph's Embrace","Shield floor under their burst.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus W self-peel is your kit."),I("Banshee's Veil","Blocks the combo opener."),I("Void Staff","Damage stays honest.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel entirely."),I("Liandry's Torment","Burn stacks while they chase through Worked Ground."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rylai's Crystal Scepter","Kite the duel you can't win straight."),I("Seraph's Embrace","Shield the gap-close.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Archangel's Staff","Out-sustain their rotation war."),I("Zhonya's Hourglass","Stasis their combo, volley the gap."),I("Rabadon's Deathcap","Bigger sustained damage wins.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the volleys honest.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Liandry's Torment","Your burn out-ramps their drain."),I("Rylai's Crystal Scepter","Slow controls the spacing war.")],behind:[I("Morellonomicon","Cut the heal-back loop first."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Archangel's Staff","Out-last the poke war on mana."),I("Void Staff","Chunk harder at range.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Speed to dodge the next volley.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slowed ADCs can't kite the volley."),I("Liandry's Torment","Burn through their lifesteal."),I("Rabadon's Deathcap","One full combo deletes them.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the engage set on you."),I("Void Staff","Volleys stay lethal.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Liandry's Torment","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the volleys honest.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your minefield beats their hook zone."),I("Liandry's Torment","Burn the catcher for every attempt."),I("Rabadon's Deathcap","Punish damage on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook — your lifeline."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Liandry's Torment","Burn melts engage tanks crossing the field."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required through their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Liandry's Torment","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","The minefield answers most gimmicks."),I("Liandry's Torment","Burn beats trick durability."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...TALIYAH_MID_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Master Yi","Kayn","Briar"], replacements:["Karthus","Ekko","Zyra"],
      role:"Knockup Burst Ganker",
      corePath:"Blackfire Torch  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Zhonya's Hourglass",
      coreNote:"Jungle Taliyah trades Mid's control-mage economy for a Dark Harvest burst pattern: W-E knockup into a full Q volley is a lane-gank kill from level 3 on. Blackfire Torch is the tempo spike her clear feeds, Shadowflame converts knocked-up targets into executes, and Zhonya's Hourglass covers the close-range gank positioning. Rabadon's Deathcap closes her into one-rotation kill threat, and Weaver's Wall opens cross-map ganks no other jungler can threaten.",
      sideItems:["Rabadon's Deathcap","Void Staff","Rylai's Crystal Scepter","Banshee's Veil","Mejai's Soulstealer","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Blackfire Torch","Burn scales off their HP in every skirmish."),I("Shadowflame","Pen punishes their low MR."),I("Rylai's Crystal Scepter","Slowed juggernauts never reach you.")],behind:[I("Rylai's Crystal Scepter","Kite their invades with slows."),I("Zhonya's Hourglass","Stasis escapes the caught clear."),I("Void Staff","Pen keeps the burst real.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Shadowflame","Burst them mid-engage — W breaks the dive timing."),I("Blackfire Torch","Burn them through the whole attempt."),I("Zhonya's Hourglass","Stasis wastes the engage onto you.")],behind:[I("Zhonya's Hourglass","Mandatory — you're a soft invade target."),I("Banshee's Veil","Blocks the engage opener."),I("Rylai's Crystal Scepter","Slow their exit and turn it.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Assassin junglers will invade — stasis answers."),I("Shadowflame","W knockup into burst wins the race."),I("Blackfire Torch","Burn punishes every entry.")],behind:[I("Zhonya's Hourglass","Rush — your clear is soft without it."),I("Banshee's Veil","Blocks the opener."),I("Rylai's Crystal Scepter","Slow beats their reset mobility.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies the extended duel entirely."),I("Blackfire Torch","Burn stacks while they chase."),I("Void Staff","Pen through their MR items.")],behind:[I("Zhonya's Hourglass","Never take the 1v1 — stasis until help."),I("Rylai's Crystal Scepter","Kite the invade."),I("Morellonomicon","Cut their sustain.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Shadowflame","Your knockup lands first — so does your burst."),I("Blackfire Torch","DoT total beats their one rotation."),I("Zhonya's Hourglass","Stasis their combo, volley the gap.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the burst honest.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustained AP war."),I("Blackfire Torch","Your burn out-ramps their drain."),I("Morellonomicon","Cut the heal-back loop.")],behind:[I("Morellonomicon","Anti-heal first against drain fights."),I("Zhonya's Hourglass","Survive their ramped window."),I("Banshee's Veil","Blocks the opening CC.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Shadowflame","Gank them — artillery can't fight the knockup."),I("Rylai's Crystal Scepter","Slow their reposition between casts."),I("Blackfire Torch","One volley out-values three pokes.")],behind:[I("Banshee's Veil","Eats one long-range spell on the gank path."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Void Staff","Chunk harder at range.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","One W-E gank deletes their carry."),I("Rylai's Crystal Scepter","Slowed ADCs can't kite the volley."),I("Rabadon's Deathcap","Guarantee the one-rotation kill.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire at objectives."),I("Rylai's Crystal Scepter","Peel with slows."),I("Banshee's Veil","Blocks the engage set on you.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Blackfire Torch","Burn outlasts their shield budget."),I("Morellonomicon","Cut the heal package directly."),I("Void Staff","Pen through the shield sponge.")],behind:[I("Morellonomicon","Anti-heal is the win condition vs sustain."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Void Staff","Keep the burn honest.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Rylai's Crystal Scepter","Your zone beats their hook — nothing enters."),I("Blackfire Torch","Burn the catcher for every attempt."),I("Shadowflame","Punish damage on the whiff.")],behind:[I("Banshee's Veil","Spell shield eats the hook on your clear."),I("Zhonya's Hourglass","Stasis if caught."),I("Rylai's Crystal Scepter","Slow their follow-up.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blackfire Torch","Burn scales off tank HP at every objective."),I("Rylai's Crystal Scepter","Slow the engage before it starts."),I("Void Staff","Pen through their MR stack.")],behind:[I("Void Staff","Required against their frontline."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation CC.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blackfire Torch","Burn through the peel-tank's HP."),I("Void Staff","Pen through their resist stack."),I("Rabadon's Deathcap","Out-scale the peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Morellonomicon","Cut their sustain support."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rylai's Crystal Scepter","Slow answers most gimmick kits."),I("Shadowflame","Burst them in one knockup window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...TALIYAH_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
