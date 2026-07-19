import { I } from "../runeHelpers.js";

const SYLAS_MID_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Presence of Mind","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Second Wind","Unflinching"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Sylas fights long, chain-swinging brawls where every ability and empowered auto stacks Conqueror — he's one of the fastest stackers in the game and converts the adaptive force straight into W healing. Presence of Mind and Legend: Haste keep the E-W-Q loop running, Last Stand rewards the low-HP fights his sustain drags everyone into, and Second Wind + Unflinching stabilise the poke-heavy lanes he starts slow against.",
};

const SYLAS_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "Jungle Sylas keeps the Conqueror brawling core but swaps Mid's lane-survival Resolve runes for the Inspiration economy package — his W-healing already covers jungle sustain, so free boots and Cosmic Insight accelerate the Rocketbelt spike instead. Triumph replaces Presence of Mind because jungle Sylas fights through multi-takedown skirmishes where the HP refund chains, and Legend: Haste + Last Stand keep the E-W-Q loop running deep into low-HP brawls.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SYLAS — Kingslayer Brawler-Mage / Ult Thief  (S+ Mid + S+ Jungle 26.14)
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"sylas", display:"Sylas", dd:"Sylas",
  color:"#2a3a4a", glow:"#60a0c0",
  lanes:["Mid","Jungle"],
  roles:{
    Mid:{
      bans:["Anivia","Malzahar","Lissandra"], replacements:["Vladimir","Akali","Katarina"],
      role:"Kingslayer Brawler-Mage / Ult Thief",
      corePath:"Hextech Rocketbelt  ›  Ionian Boots of Lucidity  ›  Riftmaker  ›  Zhonya's Hourglass",
      coreNote:"Sylas is an AP brawler who wins by staying in the fight longer than the enemy expects — Hextech Rocketbelt adds the engage dash that guarantees his E2 chain lands, Riftmaker's omnivamp and ramping true damage are made for his extended W-healing brawls, and Zhonya's Hourglass covers the mid-fight cooldown gap. His real scaling item is Hijack: draft-aware players judge his power by which enemy ultimates he gets to steal.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Cosmic Drive","Spirit Visage","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Out-sustain them in the long brawl they want."),I("Hextech Rocketbelt","Dash spacing controls the trade tempo."),I("Rabadon's Deathcap","More AP = more W healing and burst.")],behind:[I("Zhonya's Hourglass","Stasis breaks their all-in rhythm."),I("Spirit Visage","Amplify your healing against their damage."),I("Void Staff","Pen keeps the chain damage real.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Answer their engage with your own dash tempo."),I("Riftmaker","Sustain through the dive and out-brawl them."),I("Zhonya's Hourglass","Stasis flips a committed dive.")],behind:[I("Zhonya's Hourglass","Mandatory dive insurance."),I("Banshee's Veil","Blocks the engage opener."),I("Spirit Visage","Heal through the aftermath.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Your sustain undoes their chip; their burst can't finish you."),I("Zhonya's Hourglass","Stasis blanks the combo."),I("Rabadon's Deathcap","Out-burst them with stolen ult windows.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the all-in."),I("Banshee's Veil","Blocks their opener."),I("Spirit Visage","Healing covers the poke war.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The extended duel is your home turf too — win it with omnivamp."),I("Hextech Rocketbelt","Dash keeps you on them through resets."),I("Rabadon's Deathcap","Burst edge inside the brawl.")],behind:[I("Zhonya's Hourglass","Deny their all-in window."),I("Spirit Visage","Sustain war insurance."),I("Void Staff","Damage through their MR items.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Hextech Rocketbelt","Dash onto them the moment their combo whiffs."),I("Riftmaker","Heal back their poke between windows."),I("Rabadon's Deathcap","Steal their ult and out-burst them with it.")],behind:[I("Banshee's Veil","Blocks the combo opener."),I("Zhonya's Hourglass","Survive the rotation."),I("Spirit Visage","Blunt the magic chip.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustain-vs-sustain brawl."),I("Riftmaker","Your omnivamp out-ramps their drain."),I("Hextech Rocketbelt","Dash controls the spacing war.")],behind:[I("Morellonomicon","Cut their healing before comparing sustain."),I("Zhonya's Hourglass","Survive their ramped window."),I("Spirit Visage","Double down on your own healing.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Dash gap-closes the range their whole kit needs."),I("Riftmaker","Heal off the poke you eat on approach."),I("Rabadon's Deathcap","One chain rotation deletes them.")],behind:[I("Spirit Visage","Sustain through the chip while closing."),I("Banshee's Veil","Eats one long-range spell."),I("Ionian Boots of Lucidity","More dash/E uptime.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Hextech Rocketbelt","Dash on top — they melt in one empowered combo."),I("Rabadon's Deathcap","Amplify the kill window."),I("Riftmaker","Sustain through their kiting DPS.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Spirit Visage","Heal through the chip.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Cut the sustain package fueling their carry."),I("Rabadon's Deathcap","Burst through the shield budget."),I("Hextech Rocketbelt","Dash past peel — steal the enchanter's ult for chaos.")],behind:[I("Void Staff","Pen through shields."),I("Zhonya's Hourglass","Survive counter-focus."),I("Riftmaker","Out-sustain their value.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash makes their hooks whiff."),I("Riftmaker","Heal off chip; punish every miss."),I("Rabadon's Deathcap","Full combo on the whiffing catcher.")],behind:[I("Banshee's Veil","Spell shield eats the hook."),I("Zhonya's Hourglass","Stasis if caught."),I("Spirit Visage","Survive the follow-up.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank — and steal their teamfight ult."),I("Riftmaker","True-damage ramp ignores their resists."),I("Hextech Rocketbelt","Dash out of their engage radius.")],behind:[I("Void Staff","Required to hurt them from behind."),I("Zhonya's Hourglass","Survive the engage chain."),I("Banshee's Veil","Blocks the initiation.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through peel resists to the carry."),I("Riftmaker","Ramp true damage through their peel."),I("Rabadon's Deathcap","Burst bigger than their peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being the focus."),I("Morellonomicon","Cut their sustain support.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Sustain brawling answers most gimmick kits."),I("Hextech Rocketbelt","Dash spacing beats tricks."),I("Rabadon's Deathcap","Scale past the gimmick — or steal it.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...SYLAS_MID_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Lillia","Briar","Kha'Zix"], replacements:["Ekko","Diana","Zac"],
      role:"Ult-Thief Skirmish Jungler",
      corePath:"Hextech Rocketbelt  ›  Sorcerer's Shoes  ›  Riftmaker  ›  Zhonya's Hourglass",
      coreNote:"Jungle Sylas is the #1 jungler on current data — his W heals through camps, his E clears from range, and every gank arrives with a stolen ultimate in the back pocket. Hextech Rocketbelt guarantees the chain-stun engage on ganks, Riftmaker fuels the extended counter-jungle brawls he wins by default, and Zhonya's Hourglass covers the deep dives his tempo demands. Draft note: his jungle power scales with how good the enemy team's ultimates are — check what Hijack buys before locking.",
      sideItems:["Rabadon's Deathcap","Void Staff","Banshee's Veil","Cosmic Drive","Spirit Visage","Morellonomicon"],
      data:{
        JUGGERNAUT:{ahead:[I("Riftmaker","Out-sustain them in every jungle brawl."),I("Hextech Rocketbelt","Dash spacing controls the skirmish tempo."),I("Rabadon's Deathcap","More AP = more W healing and burst.")],behind:[I("Zhonya's Hourglass","Stasis breaks their invade all-in."),I("Spirit Visage","Amplify your healing against their damage."),I("Void Staff","Pen keeps chain damage real.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Hextech Rocketbelt","Answer their engage with your own dash tempo."),I("Riftmaker","Sustain through the dive and out-brawl them."),I("Zhonya's Hourglass","Stasis flips a contested dive.")],behind:[I("Zhonya's Hourglass","Mandatory dive insurance."),I("Banshee's Veil","Blocks the engage opener."),I("Spirit Visage","Heal through the skirmish aftermath.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Riftmaker","Your sustain undoes their chip; their burst can't finish you."),I("Zhonya's Hourglass","Stasis blanks the combo in river fights."),I("Rabadon's Deathcap","Out-burst them with stolen ult windows.")],behind:[I("Zhonya's Hourglass","Rush — stasis answers the invade one-shot."),I("Banshee's Veil","Blocks their opener."),I("Spirit Visage","Healing covers the chip war.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Riftmaker","The extended jungle duel is your home turf — omnivamp wins it."),I("Hextech Rocketbelt","Dash keeps you on them through resets."),I("Rabadon's Deathcap","Burst edge inside the brawl.")],behind:[I("Zhonya's Hourglass","Deny the 1v1 they invade for."),I("Spirit Visage","Sustain war insurance."),I("Void Staff","Damage through their MR items.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Hextech Rocketbelt","Dash onto them the moment their combo whiffs."),I("Riftmaker","Heal back their poke between windows."),I("Rabadon's Deathcap","Steal their ult and out-burst them with it.")],behind:[I("Banshee's Veil","Blocks the combo opener on ganks."),I("Zhonya's Hourglass","Survive the rotation."),I("Spirit Visage","Blunt the magic chip.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pen wins the sustain-vs-sustain brawl."),I("Riftmaker","Your omnivamp out-ramps their drain."),I("Hextech Rocketbelt","Dash controls the spacing war.")],behind:[I("Morellonomicon","Cut their healing before comparing sustain."),I("Zhonya's Hourglass","Survive their ramped window."),I("Spirit Visage","Double down on your own healing.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Hextech Rocketbelt","Flank dash closes the range their kit needs."),I("Riftmaker","Heal off the poke eaten on approach."),I("Rabadon's Deathcap","One chain rotation deletes them.")],behind:[I("Spirit Visage","Sustain through the chip while closing."),I("Banshee's Veil","Eats one long-range spell on the flank."),I("Cosmic Drive","More speed on the approach.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Hextech Rocketbelt","Dash on top — they melt in one empowered combo."),I("Rabadon's Deathcap","Amplify the gank kill window."),I("Riftmaker","Sustain through their kiting DPS.")],behind:[I("Zhonya's Hourglass","Stasis their focus fire."),I("Banshee's Veil","Blocks the peel CC."),I("Spirit Visage","Heal through the chip.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Morellonomicon","Cut the sustain package fueling their carry."),I("Rabadon's Deathcap","Burst through the shield budget."),I("Hextech Rocketbelt","Dash past peel — steal the enchanter's ult for chaos.")],behind:[I("Void Staff","Pen through shields."),I("Zhonya's Hourglass","Survive counter-focus."),I("Riftmaker","Out-sustain their value.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Hextech Rocketbelt","Dash makes their hooks whiff."),I("Riftmaker","Heal off chip; punish every miss."),I("Rabadon's Deathcap","Full combo on the whiffing catcher.")],behind:[I("Banshee's Veil","Spell shield eats the hook in river."),I("Zhonya's Hourglass","Stasis if caught."),I("Spirit Visage","Survive the follow-up.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Shred the engage tank — and steal their teamfight ult."),I("Riftmaker","True-damage ramp ignores their resists."),I("Hextech Rocketbelt","Dash out of their engage radius.")],behind:[I("Void Staff","Required to hurt them from behind."),I("Zhonya's Hourglass","Survive the engage chain at objectives."),I("Banshee's Veil","Blocks the initiation.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","Pen through peel resists to the carry."),I("Riftmaker","Ramp true damage through their peel."),I("Rabadon's Deathcap","Burst bigger than their peel budget.")],behind:[I("Void Staff","Mandatory vs stacked resists."),I("Zhonya's Hourglass","Survive being the focus."),I("Morellonomicon","Cut their sustain support.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Riftmaker","Sustain brawling answers most gimmick kits."),I("Hextech Rocketbelt","Dash spacing beats tricks."),I("Rabadon's Deathcap","Scale past the gimmick — or steal it.")],behind:[I("Banshee's Veil","Blocks their key setup."),I("Zhonya's Hourglass","Covers the unreadable window."),I("Void Staff","Damage stays honest.")],runes:{...SYLAS_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
