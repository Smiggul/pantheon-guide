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

// ══════════════════════════════════════════════════════════════════════════
//  GWEN — Hallowed Seamstress: AP True-Damage Duelist  (B tier Top 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"gwen", display:"Gwen", dd:"Gwen",
  color:"#2a5a5a", glow:"#70e0d0",
  lanes:["Top"],
  roles:{
    Top:{
      bans:["Riven","Vladimir","Gragas"], replacements:["Fiora","Camille","Irelia"],
      role:"Mist-Walk True-Damage Duelist",
      corePath:"Dusk and Dawn  ›  Plated Steelcaps  ›  Shadowflame  ›  Rabadon's Deathcap",
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
  },
};
