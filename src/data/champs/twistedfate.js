import { I } from "../runeHelpers.js";

const TWISTEDFATE_MID_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Celerity","Scorch"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Unflinching"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Arcane Comet rides the guaranteed Gold Card stun — a carded target eats the comet every time, turning each pick into real damage. Manaflow Band funds the perpetual card cycling, Celerity feeds both his roam speed and the move-speed his kiting pattern lives on, Scorch stacks with Wild Card poke, and the Resolve splash (Bone Plating, Unflinching) survives the assassin matchups that have hunted TF since 2009. Destiny turns every won lane elsewhere into your win too.",
};

// ══════════════════════════════════════════════════════════════════════════
//  TWISTED FATE — Card Master: Pick & Roam Mage  (A tier Mid 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"twistedfate", display:"Twisted Fate", dd:"TwistedFate",
  color:"#4a2a5a", glow:"#e0b040",
  lanes:["Mid"],
  roles:{
    Mid:{
      bans:["Katarina","Zed","Fizz"], replacements:["Ahri","Ziggs","Orianna"],
      role:"Global Pick & Roam Mage",
      corePath:"Rod of Ages  ›  Boots of Swiftness  ›  Lich Bane  ›  Rapid Firecannon",
      coreNote:"Twisted Fate wins the map, not the lane: Destiny reveals everyone and teleports him into any fight within 5500 units, and this build makes each arrival lethal. Rod of Ages gives the durability his roam-dive pattern needs, Lich Bane converts every card draw into a Spellblade nuke, and Rapid Firecannon extends the Gold Card range so the stun lands before they can react. Zhonya's covers the post-ult focus. Shove the wave, ult a side lane, stun someone, repeat until their jungler uninstalls.",
      sideItems:["Zhonya's Hourglass","Rabadon's Deathcap","Void Staff","Shadowflame","Banshee's Veil","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Rapid Firecannon","Card them from outside their entire kit."),I("Lich Bane","Gold Card + Spellblade chunks on every pick."),I("Rabadon's Deathcap","Scale the card damage past their HP.")],behind:[I("Zhonya's Hourglass","Stasis covers the landed engage."),I("Rapid Firecannon","Range keeps them permanently off you."),I("Void Staff","Pen keeps cards honest.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Rapid Firecannon","Gold Card stuns the dive before it starts."),I("Zhonya's Hourglass","Stasis wastes their engage."),I("Lich Bane","Punish the failed dive with a Spellblade combo.")],behind:[I("Zhonya's Hourglass","Mandatory — TF is the classic dive target."),I("Banshee's Veil","Blocks the engage opener."),I("Rod of Ages","Raw HP to survive the pattern.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Zhonya's Hourglass","Even ahead — one caught rotation is death."),I("Rapid Firecannon","Stun them at ranges they can't answer."),I("Rod of Ages","HP buffer under their burst math.")],behind:[I("Zhonya's Hourglass","Rush — stasis is the whole matchup."),I("Banshee's Veil","Blocks the combo opener."),I("Rod of Ages","Survive first, roam second.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rapid Firecannon","Gold Card at max range denies the duel entirely."),I("Lich Bane","Chunk them in the stun window and leave."),I("Cosmic Drive","Speed to never be caught.")],behind:[I("Zhonya's Hourglass","Deny the all-in window."),I("Rapid Firecannon","Stun range keeps the spacing yours."),I("Banshee's Veil","Blocks their gap-close.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Lich Bane","Your card opener out-tempos their rotation."),I("Zhonya's Hourglass","Stasis their combo, card the gap."),I("Rabadon's Deathcap","Scale the pick damage.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Void Staff","Keep the cards honest.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Rapid Firecannon","Out-range their drain zone with card poke."),I("Void Staff","Pen wins the extended exchange."),I("Cosmic Drive","Speed beats their zone control.")],behind:[I("Banshee's Veil","Blocks the opening CC."),I("Zhonya's Hourglass","Survive their ramped window."),I("Void Staff","Pen through their MR curve.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Boots of Swiftness","Speed dodges the poke while you shove and roam."),I("Rapid Firecannon","Match their range with stun attached."),I("Lich Bane","Delete them when they step up.")],behind:[I("Banshee's Veil","Eats one long-range spell per fight."),I("Zhonya's Hourglass","Covers the caught scenario."),I("Cosmic Drive","Speed between volleys.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rapid Firecannon","Gold Card their carry from siege range."),I("Lich Bane","One card-Spellblade combo deletes them."),I("Rabadon's Deathcap","Guarantee the pick kill.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Void Staff","Cards stay lethal.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Lich Bane","Burst through the shield with Spellblade stacking."),I("Void Staff","Pen through the sponge."),I("Rabadon's Deathcap","Out-scale the shield budget.")],behind:[I("Void Staff","Keep burst real through shields."),I("Zhonya's Hourglass","Cover the counter-focus."),I("Banshee's Veil","Blocks the setup CC.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Boots of Swiftness","Speed makes their hooks whiff."),I("Rapid Firecannon","Your card outranges their catch."),I("Lich Bane","Punish the whiff with a full combo.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Cosmic Drive","Speed to sidestep.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Rapid Firecannon","Card the backline over the tank's head."),I("Void Staff","Shred the engage tank when forced."),I("Rabadon's Deathcap","Scale past their durability.")],behind:[I("Void Staff","Required to matter from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Rapid Firecannon","Pick range beats positioned peel."),I("Lich Bane","Burst bigger than their peel budget."),I("Void Staff","Cut through the resist stack.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being focused."),I("Rabadon's Deathcap","Scale the stalemate out.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Rapid Firecannon","Pick range answers most gimmicks."),I("Lich Bane","Burst them in one card window."),I("Rabadon's Deathcap","Scale past the gimmick.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...TWISTEDFATE_MID_DEFAULT_RUNES}},
      },
    },
  },
};
