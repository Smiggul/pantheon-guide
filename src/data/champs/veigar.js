import { I } from "../runeHelpers.js";

const VEIGAR_MID_DEFAULT_RUNES = {
  keystone:       "First Strike",
  primary:        "Inspiration",
  primaryRunes:   ["Magical Footwear","Biscuit Delivery","Cosmic Insight"],
  secondary:      "Sorcery",
  secondaryRunes: ["Manaflow Band","Transcendence"],
  shards:         ["Ability Haste","Adaptive Force","Health (scaling)"],
  reason:         "First Strike is now Veigar's most common keystone on 26.20, on about 43% of Mid games against Arcane Comet's 34%, with Electrocute down to about 7%. It rewards opening a trade from range with Baleful Strike or Dark Matter, adding damage to the combo that follows, and its bonus gold speeds up the Rod of Ages and Archangel's Staff curve. Magical Footwear delivers free boots for him to upgrade into Sorcerer's Shoes, Biscuit Delivery covers his early mana and health while he farms stacks, and Cosmic Insight shortens his summoner spell and item cooldowns. Manaflow Band and Transcendence keep the Q-spam stacking loop paid for and shorten his cooldowns.",
};

const VEIGAR_MID_COMET_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Gathering Storm"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Ultimate Hunter"],
  shards:         ["Adaptive Force","Adaptive Force","Health (scaling)"],
  reason:         "Arcane Comet lands on the poke that Luden's Echo and Stormsurge are built around: a Baleful Strike or Dark Matter from range calls it down, and Event Horizon holds targets in place for it. Manaflow Band and Transcendence cover his mana and cooldowns, and Gathering Storm adds AP that keeps growing through the game. Cheap Shot adds true damage on targets he has stunned, and Ultimate Hunter shortens Primordial Burst. This is the most common Comet page for Mid Veigar on 26.20.",
};

const VEIGAR_SUP_DEFAULT_RUNES = {
  keystone:       "Arcane Comet",
  primary:        "Sorcery",
  primaryRunes:   ["Manaflow Band","Transcendence","Scorch"],
  secondary:      "Domination",
  secondaryRunes: ["Cheap Shot","Grisly Mementos"],
  shards:         ["Ability Haste","Health","Health (scaling)"],
  reason:         "Support Veigar trades the stacking-scaling identity for early poke-and-cage pressure — Comet punishes every Dark Matter landed from safety, and Event Horizon still traps a target for the ADC to burst down even without a jungler's help. Manaflow Band and Transcendence solve the mana strain and add haste; Scorch adds early lane pressure. Cheap Shot and Grisly Mementos keep the true-damage-on-impair and stacking-AP identity relevant from the support position.",
};

// ══════════════════════════════════════════════════════════════════════════
//  VEIGAR — Burst Mage / Stacking Cage-and-Kill
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"veigar", display:"Veigar", dd:"Veigar",
  color:"#4a1a5c", glow:"#c9a0e8",
  lanes:["Mid","Support"],
  altBuilds:{
    Mid:[{
      label:"Luden's Echo burst", tag:"alt",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Rabadon's Deathcap",
      coreNote:"The burst line, and close to half of Mid Veigar games: Luden's Echo first in about 41% on 26.20, narrowly behind Rod of Ages. Stormsurge is now its most common second item, at about 18% of all opening pairs, and Rabadon's Deathcap follows in about seven games in ten from there. It trades Rod of Ages' health and mana for an earlier damage spike: Luden's adds burst to each combo, and Stormsurge's flat penetration and delayed storm finish targets caught in Event Horizon. It is the minority line by a few points, and he is squishier on it, so play lane more carefully. The page here is Arcane Comet, his second most common keystone. Luden's Echo players split close to evenly between Comet and First Strike, so the main page also works.",
      runes:{...VEIGAR_MID_COMET_RUNES},
      sideItems:["Zhonya's Hourglass","Shadowflame","Void Staff","Banshee's Veil","Rod of Ages","Archangel's Staff","Cosmic Drive"],
    }],
  },
  roles:{
    Mid:{
      bans:["Zed","Qiyana","Akali"], replacements:["Katarina","Ahri","Xerath"],
      role:"Burst Mage / Stacking Cage-and-Kill",
      corePath:"Rod of Ages  ›  Sorcerer's Shoes  ›  Archangel's Staff  ›  Rabadon's Deathcap",
      coreNote:"Veigar plays a scaling stack-and-burst pattern — Baleful Strike last hits and champion takedowns grow his AP permanently, and once he's ahead nobody survives an Event Horizon cage into full combo. Rod of Ages is now his most common first item on 26.20, narrowly ahead of Luden's Echo (about 45% to 41%), and Rod of Ages into Archangel's Staff is the most common opening pair by a wide margin, at almost 30%. The two mana items pay for the Q spam his stacking runs on while he farms. Rod of Ages adds health that keeps him safe in lane and grows for its first ten minutes, and Archangel's turns his growing mana into AP and later becomes Seraph's Embrace. Rabadon's Deathcap then multiplies every stacked point of AP into a one-rotation kill threat, and Zhonya's Hourglass is the most common fourth item. Luden's Echo into Stormsurge is the burst line and nearly as common as a first item; see the alternate.",
      sideItems:["Zhonya's Hourglass","Luden's Echo","Shadowflame","Stormsurge","Void Staff","Banshee's Veil","Ionian Boots of Lucidity","Cosmic Drive"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rabadon's Deathcap","Scaling burst ends the trade outright.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Void Staff","Pen remains effective regardless of gold lead.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Cosmic Drive","Mobility kites the dive attempt."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Cosmic Drive","Mobility to kite out.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rabadon's Deathcap","AP edge wins the trade first.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Cosmic Drive","Mobility to disengage.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rabadon's Deathcap","Burst edge ends the fight before they close."),I("Cosmic Drive","Mobility kites the duelist."),I("Luden's Echo","Poke whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Cosmic Drive","Mobility to disengage."),I("Banshee's Veil","Blocks their gap-close CC.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then cage the punish."),I("Shadowflame","Out-burst them between cooldown windows."),I("Rabadon's Deathcap","AP edge wins the trade.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Void Staff","Keep damage relevant.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Rabadon's Deathcap","Raw AP wins the burst trade."),I("Shadowflame","Burst window before they can drain back.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Cosmic Drive","Mobility to dodge skillshots on approach."),I("Rabadon's Deathcap","Burst edge wins once you close."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Ionian Boots of Lucidity","Haste to close faster."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Shadowflame","Burst the squishy ADC outright."),I("Rabadon's Deathcap","Amplify the killing blow."),I("Luden's Echo","Poke pressure denies their farm.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on you."),I("Ionian Boots of Lucidity","Haste for faster Event Horizon resets.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Rabadon's Deathcap","Burst through shields to the carry."),I("Morellonomicon","Cuts their sustain package.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Cosmic Drive","Mobility dodges hooks entirely."),I("Rabadon's Deathcap","Burst them down once they whiff."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Cosmic Drive","Mobility to escape.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rabadon's Deathcap","Burst edge still matters past their frontline."),I("Luden's Echo","Poke before they can engage.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Rabadon's Deathcap","Amplify AP so shielded Wardens still take damage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Cosmic Drive","Mobility keeps you ahead of kiting Specialists."),I("Rabadon's Deathcap","Burst edge ends the fight."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Ionian Boots of Lucidity","Haste for more Event Horizon windows.")],runes:{...VEIGAR_MID_DEFAULT_RUNES}},
      },
    },
    Support:{
      bans:["Blitzcrank","Pyke","Nautilus"], replacements:["Lulu","Karma","Zac"],
      role:"Poke-Cage Enchanter-Mage",
      corePath:"Luden's Echo  ›  Sorcerer's Shoes  ›  Stormsurge  ›  Shadowflame",
      coreNote:"Support Veigar plays for the same Event Horizon cage-and-burst pattern as Mid, but built to enable a carry instead of farming a lane — trap the enemy engage, then combo alongside the ADC. Luden's Echo and Stormsurge both proc off the same poke-heavy ability rotation; Shadowflame executes a caged target once the team's damage lands.",
      sideItems:["Rylai's Crystal Scepter","Zhonya's Hourglass","Banshee's Veil","Void Staff","Morellonomicon","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Shadowflame","Burst low-MR Juggernauts from range."),I("Luden's Echo","Poke wears them down before the fight starts."),I("Rylai's Crystal Scepter","Slow keeps them caged in Event Horizon.")],behind:[I("Zhonya's Hourglass","Stall their all-in window entirely."),I("Banshee's Veil","Block their engage tool."),I("Mercury's Treads","Reduce their key CC.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Stormsurge","Proc damage on divers diving into range."),I("Shadowflame","Burst them before the combo finishes."),I("Zhonya's Hourglass","Insurance even while ahead.")],behind:[I("Zhonya's Hourglass","Essential — negates their all-in timing."),I("Banshee's Veil","Blocks the engage ability that starts the dive."),I("Mercury's Treads","Shorter CC to kite out.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Shadowflame","Out-burst them before their combo completes."),I("Zhonya's Hourglass","Insurance even with a lead."),I("Rylai's Crystal Scepter","Slow denies their reset window.")],behind:[I("Zhonya's Hourglass","Mandatory — stasis neutralises the full combo."),I("Banshee's Veil","Blocks their engage opener."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Rylai's Crystal Scepter","Slow denies their kite/duel pattern."),I("Stormsurge","Proc damage during the extended trade."),I("Shadowflame","Burst whittles them down first.")],behind:[I("Zhonya's Hourglass","Buy time vs an all-in duelist."),I("Banshee's Veil","Blocks their gap-close CC."),I("Mercury's Treads","Reduce their gap-close CC.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Zhonya's Hourglass","Survive the rotation, then cage the punish."),I("Banshee's Veil","Blocks the CC that opens their combo."),I("Shadowflame","Out-burst them between cooldown windows.")],behind:[I("Banshee's Veil","Blocks the CC that opens their combo."),I("Zhonya's Hourglass","Survive the full rotation."),I("Mercury's Treads","Shorten CC duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Void Staff","Pierce early MR before it stacks."),I("Shadowflame","Burst window before they can drain back."),I("Rylai's Crystal Scepter","Slow keeps them in the fight.")],behind:[I("Banshee's Veil","Blocks the CC that starts their combo."),I("Zhonya's Hourglass","Survive the sustained burst."),I("Morellonomicon","Cuts Vladimir/Swain healing.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Mercury's Treads","Reduce CC duration from range."),I("Stormsurge","Proc damage while closing."),I("Shadowflame","Burst on arrival.")],behind:[I("Banshee's Veil","Blocks one long-range ability."),I("Mercury's Treads","Reduce CC duration."),I("Zhonya's Hourglass","Survive the poke on approach.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Rylai's Crystal Scepter","Slow amplifies your ADC's kiting."),I("Stormsurge","Proc damage during the trade."),I("Shadowflame","Burst the squishy ADC outright.")],behind:[I("Zhonya's Hourglass","Avoid being burst down in fights."),I("Banshee's Veil","Blocks the engage tool set up on your ADC."),I("Mercury's Treads","Reduce CC duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Shadowflame","Extra pen through their shield spam."),I("Morellonomicon","Cuts their sustain package."),I("Rylai's Crystal Scepter","Slow denies their peel.")],behind:[I("Void Staff","Keep damage relevant vs their kit."),I("Banshee's Veil","Blocks the setup CC on their carry combo."),I("Zhonya's Hourglass","Survive the combined burst.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Banshee's Veil","Spell shield absorbs the hook."),I("Rylai's Crystal Scepter","Slow punishes a whiffed hook."),I("Shadowflame","Extra damage on the punish.")],behind:[I("Banshee's Veil","Spell shield absorbs the hook — your lifeline."),I("Zhonya's Hourglass","Buys time if you get caught."),I("Mercury's Treads","Reduce CC duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Void Staff","Penetrates their MR stacking."),I("Rylai's Crystal Scepter","Slow before they can engage."),I("Shadowflame","Extra burst on a landed combo.")],behind:[I("Void Staff","Required to deal damage through their resists."),I("Zhonya's Hourglass","Survive their engage combo."),I("Banshee's Veil","Blocks the CC that starts their initiation.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Void Staff","MR-stacking Wardens still take real damage through pen."),I("Shadowflame","Extra burst on a landed combo."),I("Rylai's Crystal Scepter","Slow past their body-block.")],behind:[I("Void Staff","Required vs a stacked-resist Warden."),I("Zhonya's Hourglass","Survive the engage they set up."),I("Banshee's Veil","Blocks their key CC.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Mercury's Treads","Teemo blind, Kennen stun — reduce both."),I("Rylai's Crystal Scepter","Slow keeps you ahead of kiting Specialists."),I("Shadowflame","Extra burst vs squishy specialists caught close.")],behind:[I("Banshee's Veil","Blocks their key setup ability."),I("Zhonya's Hourglass","Survive burst setups."),I("Mercury's Treads","Reduce blind/stun duration.")],runes:{...VEIGAR_SUP_DEFAULT_RUNES}},
      },
    },
  },
};
