import { I } from "../runeHelpers.js";

const GWEN_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Alacrity","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks through Gwen's Q-snip weaving and converts into the healing her true-damage duels run on. Presence of Mind funds the Q spam through long trades, Legend: Alacrity feeds both her passive on-hit AP scaling and Q stack rate, Last Stand rewards the low-HP Mist fights her W invites, and Bone Plating + Unflinching stabilise the early game against the bruisers who want to end her before three items.",
};

const GWEN_MID_DEFAULT_RUNES = {
  keystone:       "Glacial Augment",
  primary:        "Inspiration",
  primaryRunes:   ["Magical Footwear","Biscuit Delivery","Cosmic Insight"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Mid Gwen is a burst duelist rather than Top's extended-trade bruiser, and the page follows: Glacial Augment slows whatever she lands her combo on, which is what lets a melee champion with no gap-closer actually finish a mid laner who is allowed to walk away. Magical Footwear and Cosmic Insight fund the roams and keep Hallowed Mist and Skip 'n Slash close to available, Biscuit Delivery covers the mana and health a melee mid bleeds in the first ten minutes, and Manaflow Band with Transcendence pays for the Q spam the Lich Bane pattern needs. Top's Conqueror page is the wrong tool here \u2014 it is built for a duel that mid lane rarely gives you.",
};

// ══════════════════════════════════════════════════════════════════════════
//  GWEN — Hallowed Seamstress: AP True-Damage Duelist  (B tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"gwen", display:"Gwen", dd:"Gwen",
  color:"#2a5a5a", glow:"#70e0d0",
  lanes:["Top","Mid"],
  roles:{
    Top:{
      bans:["Riven","Vladimir","Gragas"], replacements:["Fiora","Camille","Irelia"],
      role:"Mist-Walk True-Damage Duelist",
      corePath:"Dusk and Dawn  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Gwen scales AP into true damage — her Q center snips ignore resists entirely, which is why tanks fear her more than any assassin. Dusk and Dawn is the current first item: speed plus damage feeds her stutter-scissor pattern, Shadowflame turns chunked duel targets into executes, and Rabadon's Deathcap multiplies everything her kit touches. Zhonya's covers the dives her Hallowed Mist can't. W blocks everything from outside the Mist — time it against their engage spell and most matchups become free.",
      sideItems:["Zhonya's Hourglass","Riftmaker","Nashor's Tooth","Void Staff","Banshee's Veil","Spirit Visage"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","True-damage snips plus pen — their HP bar is a suggestion."),I("Rabadon's Deathcap","Scale the melt harder."),I("Riftmaker","Omnivamp sustains the extended shred.")],behind:[I("Plated Steelcaps","Blunt their autos cheaply."),I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Riftmaker","Sustain your way back into the duel.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Dusk and Dawn","Out-speed their engage and snip the retreat."),I("Shadowflame","Burst them mid-dive."),I("Zhonya's Hourglass","Stasis wastes the engage.")],behind:[I("Zhonya's Hourglass","Stasis answers the all-in."),I("Banshee's Veil","Blocks the engage opener — Mist covers the rest."),I("Spirit Visage","Sustain through repeated dives.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Your sustained true damage beats their one window."),I("Zhonya's Hourglass","Stasis blanks the combo."),I("Riftmaker","Heal back whatever lands.")],behind:[I("Zhonya's Hourglass","Rush — stasis plus Mist is a double answer."),I("Banshee's Veil","Blocks the opener."),I("Spirit Visage","Sustain back the chip.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The extended duel is your home — omnivamp seals it."),I("Shadowflame","Execute range on their low-HP resets."),I("Nashor's Tooth","On-hit AP wins the auto war.")],behind:[I("Zhonya's Hourglass","Deny their all-in window."),I("Plated Steelcaps","Blunt their auto DPS."),I("Spirit Visage","Out-sustain the attrition.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Dusk and Dawn","Speed through the poke — Mist blocks the combo."),I("Shadowflame","Burst them in their cooldown gap."),I("Rabadon's Deathcap","Out-scale their rotation math.")],behind:[I("Banshee's Veil","Blocks the opener Mist can't cover."),I("Zhonya's Hourglass","Survive the rotation."),I("Spirit Visage","Sustain the poke war.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Riftmaker","Your sustain beats their drain in the Mist."),I("Void Staff","Pen through their MR items."),I("Shadowflame","Execute the ramped battlemage early.")],behind:[I("Spirit Visage","MR + healing answers the drain."),I("Banshee's Veil","Blocks the opening CC."),I("Zhonya's Hourglass","Survive the ramped window.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Dusk and Dawn","Speed closes their poke range fast."),I("Shadowflame","Delete them on arrival."),I("Rabadon's Deathcap","One snip rotation ends it.")],behind:[I("Banshee's Veil","Eats one long-range spell on approach."),I("Spirit Visage","Sustain the chip while closing."),I("Zhonya's Hourglass","Covers the committed engage.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Dusk and Dawn","Run them down — Mist blocks their autos from outside."),I("Shadowflame","Execute the kited carry."),I("Nashor's Tooth","Win the DPS race outright.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Plated Steelcaps","Blunt the auto damage."),I("Banshee's Veil","Blocks the peel CC.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Pen through the shield sponge."),I("Nashor's Tooth","On-hit volume burns shield cycles."),I("Rabadon's Deathcap","Out-scale the shield budget.")],behind:[I("Void Staff","Keep true-damage math honest through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Spirit Visage","Sustain their poke package.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Dusk and Dawn","Speed makes their hooks whiff — Mist eats the rest."),I("Shadowflame","Burst the catcher on the miss."),I("Rabadon's Deathcap","Punish every whiff harder.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Spirit Visage","Sustain the pick attempts.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Shadowflame","True damage ignores everything they stacked."),I("Rabadon's Deathcap","Melt the frontline faster."),I("Riftmaker","Sustain through the engage chain.")],behind:[I("Void Staff","Pen the half of your damage that isn't true."),I("Zhonya's Hourglass","Survive the wombo."),I("Spirit Visage","Sustain the aftermath.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Shadowflame","True damage is the anti-warden stat — snip through."),I("Nashor's Tooth","On-hit volume cracks the peel wall."),I("Rabadon's Deathcap","Out-scale the mitigation budget.")],behind:[I("Void Staff","Pen the non-true half of your kit."),I("Riftmaker","Sustain the long crack attempt."),I("Zhonya's Hourglass","Survive the counter-engage.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Dusk and Dawn","Speed + Mist answers most gimmicks."),I("Shadowflame","Burst them in one snip window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Spirit Visage","Sustain through the unfamiliar.")],runes:{...GWEN_TOP_DEFAULT_RUNES}},
      },
    },
    Mid:{
      bans:["Ekko","Fizz","Zed"], replacements:["Akali","Katarina","Sylas"],
      role:"Lich Bane Burst Duelist",
      corePath:"Lich Bane  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote:"Added in the 26.19 sweep, and it is a real page rather than the Top build in another lane — Top runs Conqueror into Dusk and Dawn as an extended-trade bruiser, while Mid runs Glacial Augment into Lich Bane and plays for one burst rotation. Lich Bane is the whole identity: Gwen's Q already snips true damage through resists, and a spellblade proc on the auto between snips turns a poke trade into a kill threat most mid laners cannot answer at melee range. Hallowed Mist matters more here than it does Top, because mid-lane ganks come from both sides and the Mist blocks everything originating outside it. Be honest about the sample: this is a 52-55% win rate on roughly 0.5% pick rate, so it is a strong pocket pick rather than a lane you should expect to be familiar to your opponent.",
      sideItems:["Zhonya's Hourglass","Void Staff","Riftmaker","Nashor's Tooth","Banshee's Veil","Horizon Focus"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","True-damage snips plus pen ignores the health they stacked."),I("Lich Bane","Spellblade turns each trade into a real chunk."),I("Rabadon's Deathcap","Scale the melt.")],behind:[I("Zhonya's Hourglass","Stasis answers the one all-in they get."),I("Riftmaker","Sustain back through the extended fight."),I("Void Staff","Pen stays useful without a lead.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Lich Bane","Burst them out of the dive animation."),I("Shadowflame","Execute whoever survives the Mist."),I("Zhonya's Hourglass","Stasis wastes their commitment.")],behind:[I("Zhonya's Hourglass","Stasis plus Mist is a double answer to one engage."),I("Banshee's Veil","Blocks the opener that starts the dive."),I("Riftmaker","Sustain repeated attempts.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Stasis blanks their single window."),I("Lich Bane","Punish the failed combo immediately."),I("Shadowflame","Out-burst the burster.")],behind:[I("Zhonya's Hourglass","Rush it — Mist covers the rest."),I("Banshee's Veil","Blocks the opener."),I("Riftmaker","Heal back whatever lands.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The extended duel is your home — omnivamp seals it."),I("Nashor's Tooth","On-hit AP wins the auto war between snips."),I("Shadowflame","Execute range on their resets.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Riftmaker","Out-sustain the attrition."),I("Nashor's Tooth","Match their DPS rather than trading burst.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Banshee's Veil","Spell shield forces them to open twice."),I("Lich Bane","Your burst arrives at melee range where theirs does not."),I("Shadowflame","Win the trade outright.")],behind:[I("Banshee's Veil","Their combo needs the opener to land."),I("Zhonya's Hourglass","Stasis covers the follow-up."),I("Void Staff","Pen the magic resist they buy against you.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Lich Bane","Close and burst before the ramp starts."),I("Shadowflame","Execute through their sustain."),I("Void Staff","Pen the resists they stack.")],behind:[I("Zhonya's Hourglass","Survive the ramp, then engage."),I("Riftmaker","Sustain the attrition war."),I("Void Staff","The resists are what beat you, not the damage.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Sorcerer's Shoes","Closing speed is the whole answer to range."),I("Lich Bane","One rotation once you arrive."),I("Shadowflame","Execute the retreat.")],behind:[I("Banshee's Veil","Absorb the opening shot on the approach."),I("Zhonya's Hourglass","Survive the follow-up volley."),I("Sorcerer's Shoes","You cannot out-trade at range — you have to close.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Lich Bane","Burst a squishy before they kite."),I("Nashor's Tooth","On-hit closes the DPS gap."),I("Shadowflame","Execute range on the retreat.")],behind:[I("Zhonya's Hourglass","Deny their kiting window."),I("Plated Steelcaps","Blunt the auto damage cheaply."),I("Riftmaker","Sustain back the chip.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Anti-heal is the matchup."),I("Lich Bane","Burst past the shield in one rotation."),I("Shadowflame","Execute through the protection.")],behind:[I("Morellonomicon","Cut the healing before anything else."),I("Void Staff","Their resists scale with their peel."),I("Zhonya's Hourglass","Outlast the protection.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Spell shield eats the pick attempt."),I("Lich Bane","Punish the missed hook instantly."),I("Shadowflame","Burst them before the follow-up arrives.")],behind:[I("Banshee's Veil","One landed pick decides the fight."),I("Zhonya's Hourglass","Stasis survives the follow-up."),I("Riftmaker","Sustain the chip between attempts.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Shadowflame","True damage ignores the resists they built."),I("Void Staff","Pen the rest of it."),I("Rabadon's Deathcap","Scale past the frontline.")],behind:[I("Zhonya's Hourglass","Their engage is the threat, not their damage."),I("Void Staff","Stay relevant into stacked resists."),I("Riftmaker","Sustain through the lock-down.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through the wall."),I("Morellonomicon","Cut the sustain holding the carry up."),I("Shadowflame","True damage is the point — their resists do nothing.")],behind:[I("Void Staff","Their resists are the problem."),I("Morellonomicon","Anti-heal the peel."),I("Riftmaker","Out-sustain a stalling comp.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Lich Bane","Burst answers most gimmicks before they resolve."),I("Shadowflame","Execute past the trick."),I("Zhonya's Hourglass","Cover the pattern you have not seen.")],behind:[I("Zhonya's Hourglass","Buy time against an unfamiliar threat."),I("Banshee's Veil","Blocks whatever opens it."),I("Riftmaker","Sustain through the unfamiliar.")],runes:{...GWEN_MID_DEFAULT_RUNES}},
      },
    },
  },
};
