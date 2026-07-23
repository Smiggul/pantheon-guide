import { I } from "../runeHelpers.js";

const VARUS_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Overgrowth"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Top Varus is an off-meta ranged bully running Press the Attack — three W-empowered autos amp the target, then the blight detonation chunks whatever melee is trying to walk him down. Triumph and Last Stand back the extended trades top lane forces, Legend: Alacrity feeds the on-hit pattern, and Bone Plating + Overgrowth patch the durability a ranged top needs when the all-in finally connects. A different champion from Bot: bruiser items, lane-bully tempo, no support to hide behind.",
};

const VARUS_BOT_DEFAULT_RUNES = {
  keystone:       "Lethal Tempo",
  primary:        "Precision",
  primaryRunes:   ["Absorb Life","Legend: Alacrity","Cut Down"],
  secondary:      "Inspiration",
  secondaryRunes: ["Biscuit Delivery","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Lethal Tempo's attack speed ramp compounds with Varus's Blighted Quiver on-hit damage — the more autos he lands, the more stacks tick and the faster Hail of Arrows and Chain of Corruption come off cooldown. Absorb Life adds early sustain from farming; Legend: Alacrity accelerates the ramp further. Biscuit Delivery and Cosmic Insight solve the mana curve and speed up his ultimate's cooldown; Cut Down punishes tanks who'd otherwise soak his on-hit DPS.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VARUS — Marksman / Blighted-Quiver On-Hit Carry
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"varus", display:"Varus", dd:"Varus",
  color:"#2a3a2a", glow:"#a0e090",
  lanes:["Bot","Top"],
  // Standard Varus Bot (below) is the on-hit DPS build. This is the lethality
  // poke/siege line — a canonical distinct Varus build.
  altBuilds:{
    Bot: [{
      label: "Lethality Poke",
      tag: "off-meta",
      corePath: "Youmuu's Ghostblade  ›  Berserker's Greaves  ›  The Collector  ›  Serylda's Grudge",
      coreNote: "Lethality poke Varus — max Q and play a long-range siege caster, not an on-hit DPS. Stack Blight from range with W-empowered autos, then a fully-charged Q chunks (and often one-shots a squishy once The Collector's execute is online). Youmuu's gives the roam/siege speed + lethality, The Collector adds the execute threshold, and Serylda's Grudge pens + slows so the poke always lands. Opportunity or Edge of Night continue it. Trades the on-hit build's sustained tank-shred for burst-from-fog and objective-siege pressure.",
      runes: {
        keystone: "Dark Harvest",
        primary: "Domination",
        primaryRunes: ["Cheap Shot", "Grisly Mementos", "Treasure Hunter"],
        secondary: "Precision",
        secondaryRunes: ["Presence of Mind", "Coup de Grace"],
        shards: ["Adaptive Force", "Adaptive Force", "Health (scaling)"],
        reason: "Dark Harvest snowballs the picks this build farms — each charged-Q kill compounds the burst. Cheap Shot punishes your own W-slow/Q for true damage, Treasure Hunter funds the gold-hungry lethality curve, and the Precision splash (Presence of Mind for the mana to spam Q, Coup de Grace to finish) pays for the poke playstyle.",
      },
      sideItems: ["Opportunity", "Edge of Night", "Lord Dominik's Regards", "Profane Hydra", "Guardian Angel", "Umbral Glaive"],
    }],
  },
  roles:{
    Bot:{
      bans:["Draven","Samira","Kalista"], replacements:["Jinx","Caitlyn","Yunara"],
      role:"Marksman / Blighted-Quiver On-Hit Carry",
      corePath:"Statikk Shiv  ›  Guinsoo's Rageblade  ›  Terminus  ›  Jak'Sho, The Protean",
      coreNote:"Varus plays for a stacking on-hit pattern — Blighted Quiver applies a DoT with every auto, Piercing Arrow snipes from range, and Chain of Corruption roots a whole team caught in its line. Statikk Shiv adds wave clear and proc damage; Guinsoo's Rageblade stacks attack speed toward the cap; Terminus alternates pen and on-hit healing; Jak'Sho gives resistances that scale with a long fight.",
      sideItems:["Berserker's Greaves","Guardian Angel","Mercury's Treads","Wit's End","Rapid Firecannon","Bloodthirster"],
      data:{
        JUGGERNAUT:{ahead:[I("Terminus","Pen + on-hit healing wins the sustained trade."),I("Statikk Shiv","Proc damage adds up over the fight."),I("Guinsoo's Rageblade","AS stacking wins the trade outright.")],behind:[I("Guardian Angel","Second life vs their walk-down."),I("Mercury's Treads","Shorter CC before the kill."),I("Wit's End","MR + on-hit if they build offense.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Range + slow kites the dive."),I("Terminus","On-hit healing outlasts the all-in."),I("Guardian Angel","Second life if it still connects.")],behind:[I("Mercury's Treads","Shorter CC on their engage."),I("Wit's End","MR lifeline vs AP divers."),I("Guardian Angel","Insurance.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Wit's End","MR + on-hit vs AP assassins."),I("Statikk Shiv","Proc damage wins the trade first."),I("Jak'Sho, The Protean","Resistances scale the longer the fight runs.")],behind:[I("Guardian Angel","Deny the kill."),I("Wit's End","MR lifeline vs AP assassins."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Guinsoo's Rageblade","AS stacking wins the auto-race."),I("Statikk Shiv","Proc damage adds up over the fight."),I("Terminus","On-hit healing sustains the duel.")],behind:[I("Mercury's Treads","Shorter CC on their gap-close."),I("Guardian Angel","Second life."),I("Wit's End","MR + on-hit to stall.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR + on-hit vs their combo."),I("Mercury's Treads","Reduce CC in their combo."),I("Jak'Sho, The Protean","Resistances survive the rotation.")],behind:[I("Wit's End","MR lifeline vs burst mages."),I("Mercury's Treads","Shorten CC duration."),I("Guardian Angel","Insurance.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + DPS wins the drain war."),I("Terminus","On-hit healing outlasts their drain."),I("Jak'Sho, The Protean","Resistances scale with their sustained damage.")],behind:[I("Wit's End","Mandatory MR + sustain vs drain."),I("Mercury's Treads","Shorter CC to disengage."),I("Guardian Angel","Insurance.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Rapid Firecannon","Extra range wins the poke war."),I("Mercury's Treads","Reduce CC duration from range."),I("Statikk Shiv","Proc damage wins once in range.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Guardian Angel","Second life."),I("Wit's End","MR vs sustained poke.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Statikk Shiv","Proc damage wins the mirror matchup."),I("Guinsoo's Rageblade","AS stacking wins the auto-race."),I("Terminus","On-hit healing tips the sustained trade.")],behind:[I("Guardian Angel","Second life for a risky trade."),I("Mercury's Treads","Reduce CC duration."),I("Wit's End","MR + on-hit if they go hybrid.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Terminus","On-hit healing outlasts their sustain package."),I("Statikk Shiv","Poke pressure negates their sustain package."),I("Wit's End","On-hit ignores shields over time.")],behind:[I("Guardian Angel","Insurance vs the combined burst."),I("Terminus","Outlast their sustain package."),I("Mercury's Treads","Reduce their disengage CC.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge the hook so your own combo lands first."),I("Statikk Shiv","Punish a whiffed hook instantly."),I("Terminus","On-hit healing recovers after a catch.")],behind:[I("Mercury's Treads","Mandatory — a caught Varus loses the whole trade."),I("Guardian Angel","Deny the pick's value."),I("Terminus","Sustain if caught.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Wit's End","MR through their tank stats."),I("Statikk Shiv","Proc damage through their frontline."),I("Guinsoo's Rageblade","AS stacking still relevant past the engage.")],behind:[I("Mercury's Treads","Shorter stuns from their engage."),I("Guardian Angel","Second life."),I("Wit's End","MR vs Malphite/Gragas AP damage.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Wit's End","MR-stacking Wardens still take real damage through on-hit."),I("Terminus","On-hit bypasses their mitigation."),I("Guinsoo's Rageblade","AS stacking past their shields.")],behind:[I("Wit's End","Required vs a stacked-resist Warden."),I("Guardian Angel","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC chains shortened.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rapid Firecannon","Range keeps you ahead of kiting specialists."),I("Statikk Shiv","Proc damage ends the fight."),I("Guinsoo's Rageblade","AS stacking finishes squishy specialists caught close.")],behind:[I("Mercury's Treads","Teemo blind/Kennen stun — shorten both."),I("Guardian Angel","Deny their split-push snowball."),I("Wit's End","MR vs AP specialists.")],runes:{...VARUS_BOT_DEFAULT_RUNES}},
      },
    },
    Top:{
      bans:["Olaf","Aatrox","Jayce"], replacements:["Teemo","Vayne","Gnar"],
      role:"Off-Meta Ranged Bruiser Bully",
      corePath:"Experimental Hexplate  ›  Plated Steelcaps  ›  Dusk and Dawn  ›  Riftmaker",
      coreNote:"Top Varus abandons the crit build entirely: Experimental Hexplate feeds the W on-hit pattern while adding the HP a solo lane demands, Dusk and Dawn brings speed and damage for the ranged-kite game, and Riftmaker's omnivamp turns his blight detonations into sustain. Zhonya's Hourglass closes as the anti-dive insurance no ADC item offers. Play it like Teemo with an execute ult: deny melees CS at range, R the ganker, and out-scale the lane you starved.",
      sideItems:["Zhonya's Hourglass","Wit's End","Guinsoo's Rageblade","Terminus","Sterak's Gage","Maw of Malmortius"],
      data:{
        JUGGERNAUT:{ahead:[I("Experimental Hexplate","On-hit chunks their walk-down forever."),I("Riftmaker","Omnivamp sustains the poke war."),I("Dusk and Dawn","Speed keeps them permanently at range.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Sterak's Gage","Survive the connect."),I("Wit's End","On-hit MR if they build hybrid.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dusk and Dawn","Out-speed their engage — R roots the dive."),I("Experimental Hexplate","Melt them during the failed engage."),I("Zhonya's Hourglass","Stasis wastes the commitment.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the all-in."),I("Sterak's Gage","Shield their engage burst."),I("Maw of Malmortius","Vs AP divers.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Sustain undoes their chip; R roots the jump."),I("Zhonya's Hourglass","Stasis blanks the combo."),I("Experimental Hexplate","Kill them in the failed window.")],behind:[I("Zhonya's Hourglass","Stasis is the matchup."),I("Sterak's Gage","Shield floor under the burst."),I("Maw of Malmortius","Vs AP assassins.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Experimental Hexplate","PTA on-hit wins the trade war at range."),I("Riftmaker","Sustain their extended-duel attempts."),I("Dusk and Dawn","Speed denies the stick.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Sterak's Gage","Survive the duel you can't refuse."),I("Wit's End","On-hit MR vs AP skirmishers.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Wit's End","MR on-hit blunts the rotation."),I("Experimental Hexplate","Kill them in their cooldown gap."),I("Dusk and Dawn","Speed dodges the setup skillshot.")],behind:[I("Wit's End","Rush MR — their combo math must fail."),I("Zhonya's Hourglass","Survive the rotation."),I("Maw of Malmortius","Second magic lifeline.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","On-hit MR shrugs off the drain."),I("Riftmaker","Out-sustain their ramp."),I("Experimental Hexplate","Shred them faster than they drain.")],behind:[I("Wit's End","MR keeps you in lane."),I("Zhonya's Hourglass","Survive the ramped window."),I("Maw of Malmortius","Lifeline vs the burst-drain mix.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dusk and Dawn","Speed closes the poke gap — Q trades back harder."),I("Experimental Hexplate","Melt them once inside."),I("Riftmaker","Sustain the chip war.")],behind:[I("Zhonya's Hourglass","Covers the forced engage."),I("Wit's End","MR chips their poke math."),I("Sterak's Gage","Shield the approach.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Experimental Hexplate","On-hit + HP wins the ranged-top mirror."),I("Riftmaker","Sustain out-trades their poke."),I("Terminus","Pen + resists in the auto war.")],behind:[I("Sterak's Gage","Survive their focus."),I("Zhonya's Hourglass","Stasis the all-in."),I("Wit's End","Vs hybrid marksmen.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Experimental Hexplate","On-hit volume burns through shield cycles."),I("Terminus","Pen through the protected target."),I("Riftmaker","Out-sustain the value war.")],behind:[I("Guinsoo's Rageblade","On-hit volume is the path through."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Wit's End","MR vs their poke.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","Speed makes their hooks whiff — R roots back."),I("Experimental Hexplate","Melt the catcher who missed."),I("Riftmaker","Sustain the poke exchanges.")],behind:[I("Zhonya's Hourglass","Stasis the caught scenario."),I("Sterak's Gage","Shield the follow-up burst."),I("Mercury's Treads","Shorter lockdown on catch.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Experimental Hexplate","On-hit shreds the engage tank from range."),I("Terminus","Pen stacks past their resists."),I("Dusk and Dawn","Speed out of their engage radius.")],behind:[I("Zhonya's Hourglass","Survive the engage chain."),I("Sterak's Gage","Shield the wombo."),I("Terminus","Required pen from behind.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Terminus","Pen through the peel-tank's stack."),I("Experimental Hexplate","On-hit volume cracks the wall."),I("Guinsoo's Rageblade","Double the on-hit payload.")],behind:[I("Terminus","Mandatory pen vs stacked resists."),I("Riftmaker","Sustain the attrition war."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Experimental Hexplate","Generic on-hit DPS answers most kits."),I("Dusk and Dawn","Speed answers trick mobility."),I("Riftmaker","Sustain through the gimmick.")],behind:[I("Zhonya's Hourglass","Covers the unreadable window."),I("Wit's End","MR vs AP tricks."),I("Sterak's Gage","Shield what you can't read.")],runes:{...VARUS_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
