import { I } from "../runeHelpers.js";

const WUKONG_TOP_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks on Q resets and R spin. Magical Footwear saves 300g for Trinity Force rush. Cosmic Insight reduces E and R cooldowns. Legend: Alacrity accelerates Q reset proc rate.",
};

const WUKONG_JGL_DEFAULT_RUNES = {
  keystone:       "Conqueror",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Alacrity","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Conqueror stacks from Sheen procs and R spin. Magical Footwear + Cosmic Insight saves 300g to rush Trinity Force faster. Last Stand — fight at low HP after diving into a teamfight.",
};

// ══════════════════════════════════════════════════════════════════════════
//  WUKONG — Diver / Bruiser
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"wukong", display:"Wukong", dd:"MonkeyKing",
  color:"#b8860b", glow:"#ffd700",
  altBuilds:{
    Top: [{
      label: "Lethality Burst",
      tag: "off-meta",
      corePath: "Youmuu's Ghostblade  ›  Plated Steelcaps  ›  Profane Hydra  ›  Serylda's Grudge",
      coreNote: "Play Wukong as a burst assassin instead of the Trinity bruiser: clone-fake, Q-armor-shred, then W-stealth into a lethality combo that deletes a squishy. Youmuu's Ghostblade gives roam speed + lethality, Profane Hydra adds the execute active and waveclear, and Serylda's pens + slows for the follow-up. Squishier and all-in — pick your moment, one-shot, and vanish with the clone.",
      runes: {
        keystone: "Conqueror",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
        secondary: "Domination",
        secondaryRunes: ["Sudden Impact", "Treasure Hunter"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Conqueror still stacks fast off the Q-auto-clone flurry but the lethality items convert it to burst; Sudden Impact fires off every W-stealth exit and R knockup, and Treasure Hunter funds the lethality curve for the snowball.",
      },
      sideItems: ["The Collector", "Edge of Night", "Black Cleaver", "Death's Dance", "Guardian Angel", "Opportunity"],
    }],
  },
  roles:{
    Top:{
      bans:["Swain","Cho'Gath","Trundle"], replacements:["Renekton","Sett","Pantheon"],
      role:"Diver / Bruiser",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Sundered Sky  ›  Black Cleaver",
      coreNote:"Trinity Force for Sheen proc on Q reset. Sundered Sky second for healing burst on Q empowered hit. Black Cleaver third stacks on R spin and Q autos. Build into Death's Dance or Sterak's based on burst threat.",
      sideItems:["Death's Dance","Sterak's Gage","Guardian Angel","Serylda's Grudge","Maw of Malmortius","Mercury's Treads"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","% pen while ahead into their HP stacking."),I("Black Cleaver","R spin stacks Cleaver instantly — 6 hits in one rotation."),I("Serylda's Grudge","Slow on Q/R stops Juggernauts walking you down.")],behind:[I("Death's Dance","Delay Darius/Mundo burst into bleed while W clone baits their combo."),I("Sterak's Gage","Shield when they walk you down at low HP."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Healing burst wins mirror dives."),I("Trinity Force","Sheen proc outdamages their burst window."),I("Black Cleaver","Shred before they defensive item.")],behind:[I("Sterak's Gage","Shield when their dive survives your clone bait."),I("Death's Dance","Delay burst while W clone absorbs their attention."),I("Plated Steelcaps","Auto reduction on Irelia/Renekton chains.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Sundered Sky","Burst them during W stealth approach."),I("Sterak's Gage","Absorb their one-shot while you reposition."),I("Trinity Force","Sheen proc on Q finishes them.")],behind:[I("Sterak's Gage","Shield vs one-shots — mandatory."),I("Maw of Malmortius","AP assassins — magic shield absorbs burst."),I("Death's Dance","Delay their combo while W clone distracts.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Out-sustain extended duels with Q proc healing."),I("Trinity Force","Sheen DPS beats sustained Skirmisher output."),I("Black Cleaver","Shred Fiora/Jax armor before they build defensive items.")],behind:[I("Sterak's Gage","Shield vs crit burst — Yasuo/Yone."),I("Guardian Angel","Fiora ult timing — passive revive mid-fight."),I("Plated Steelcaps","Crit damage reduction.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","W stealth approach + Sheen proc = burst before they cast."),I("Sterak's Gage","Shield their counter-burst."),I("Maw of Malmortius","Magic shield on W stealth approach.")],behind:[I("Maw of Malmortius","Non-negotiable — magic shield absorbs their combo."),I("Sterak's Gage","Secondary shield layer."),I("Mercury's Treads","Shorter stun so you land Q before they recover.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Black Cleaver","Shred Vladimir/Swain HP stacks during R spin."),I("Sundered Sky","Your sustain vs their sustain."),I("Death's Dance","Convert AP DPS to bleed — your W clone draws their attention.")],behind:[I("Death's Dance","Delay sustained AP DPS."),I("Maw of Malmortius","MR shield vs prolonged AP damage."),I("Sterak's Gage","Shield at low HP.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","W stealth approach + sprint passive closes gap."),I("Serylda's Grudge","Slow stops them repositioning after you arrive."),I("Sundered Sky","Q proc on arrival = instant healing burst.")],behind:[I("Sterak's Gage","Absorb poke burst on arrival."),I("Maw of Malmortius","MR vs AP poke."),I("Mercury's Treads","Shorter CC so W approach completes.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction — critical even ahead."),I("Trinity Force","Sprint + Sheen = delete ADC before they kite."),I("Black Cleaver","Shred tanky ADCs building Bloodthirster/Shieldbow.")],behind:[I("Plated Steelcaps","Non-negotiable vs sustained ADC DPS."),I("Sterak's Gage","Shield vs carry + Enchanter burst."),I("Death's Dance","Delay DPS window.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Sundered Sky","Stay healthy through Enchanter poke."),I("Black Cleaver","Shred the carry once you reach them via W stealth."),I("Trinity Force","Sprint closes before Enchanter repositions to peel.")],behind:[I("Sterak's Gage","Survive carry burst + Enchanter follow-up."),I("Maw of Malmortius","AP Enchanters Karma/Nami."),I("Death's Dance","Delay combined burst.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC chains — W stealth is cancelled by CC."),I("Trinity Force","Close and burst before they hook again."),I("Sundered Sky","Q proc healing after surviving CC.")],behind:[I("Mercury's Treads","Mandatory — CC stops W stealth entirely."),I("Sterak's Gage","Survive burst after CC lands."),I("Maw of Malmortius","AP Catchers Morgana/Zyra.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","R spin stacks Cleaver instantly vs Malphite/Ornn."),I("Trinity Force","Dive in during their engage cooldown."),I("Lord Dominik's Regards","% pen while ahead.")],behind:[I("Mercury's Treads","Malphite Ult/Leona chain — shorter CC."),I("Sterak's Gage","Survive burst following engage."),I("Death's Dance","Delay engage burst.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","Shred Warden armor — R spin fills it instantly."),I("Lord Dominik's Regards","% pen into their stacking."),I("Trinity Force","Dive through peel with sprint passive.")],behind:[I("Sterak's Gage","Survive carry burst through body-block."),I("Black Cleaver","Still your armor shred path."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","W stealth + sprint closes on kiting Specialists."),I("Serylda's Grudge","Slow stops Singed kite loop."),I("Sundered Sky","Q proc healing sustains through poke.")],behind:[I("Sterak's Gage","Survive Kennen stun + ult."),I("Maw of Malmortius","Teemo/Kennen AP — magic shield."),I("Mercury's Treads","Teemo blind stops Q reset — Tenacity shortens.")],runes:{...WUKONG_TOP_DEFAULT_RUNES}},
      },
    },
    Jungle:{
      bans:["Rammus","Lillia","Diana"], replacements:["Rek'Sai","Sett","Xin Zhao"],
      role:"Diver / Bruiser",
      corePath:"Trinity Force  ›  Plated Steelcaps  ›  Sundered Sky  ›  Black Cleaver",
      coreNote:"Same core as Top. Jungle Wukong uses W clone to bait enemy spells during ganks — drop it and circle behind while they attack it. R spin for engagement and AoE after W repositioning.",
      sideItems:["Death's Dance","Sterak's Gage","Guardian Angel","Serylda's Grudge","Maw of Malmortius","Lord Dominik's Regards"],
      data:{
        JUGGERNAUT:{ahead:[I("Lord Dominik's Regards","% pen into their HP stacking."),I("Black Cleaver","R spin stacks Cleaver in one rotation on ganks."),I("Serylda's Grudge","Slow stops their walk-down after gank landing.")],behind:[I("Death's Dance","Delay Darius burst while W clone distracts them."),I("Sterak's Gage","Shield on failed ganks."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Sundered Sky","Healing burst wins counter-jungling fights."),I("Trinity Force","Sheen proc burst ahead of their dive."),I("Black Cleaver","Fast shred — R spin fills it in one cast.")],behind:[I("Sterak's Gage","Shield when they counter-invade."),I("Death's Dance","Delay their burst."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","W stealth approach into Sheen proc burst on gank."),I("Sundered Sky","Q proc healing keeps you healthy post-gank."),I("Sterak's Gage","Absorb their counter-burst.")],behind:[I("Sterak's Gage","Shield vs one-shots in counter-gank situations."),I("Death's Dance","Delay burst while W clone absorbs their combo."),I("Maw of Malmortius","AP assassins in counter-ganks.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Sundered Sky","Out-sustain jungle skirmishes."),I("Trinity Force","Sheen DPS beats their sustained output."),I("Black Cleaver","Shred before they build defensive items.")],behind:[I("Death's Dance","Delay their extended trade."),I("Sterak's Gage","Shield at low HP."),I("Plated Steelcaps","Crit auto reduction.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","W gank approach + Sheen burst before they combo."),I("Sterak's Gage","Shield their retaliatory burst."),I("Maw of Malmortius","Magic shield on approach.")],behind:[I("Maw of Malmortius","Non-negotiable."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter CC so your gank connects.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Black Cleaver","R spin shreds their HP fast."),I("Sundered Sky","Your sustain vs their sustain."),I("Death's Dance","Convert AP DPS to bleed while W clone distracts.")],behind:[I("Death's Dance","Delay sustained AP DPS."),I("Maw of Malmortius","MR shield."),I("Sterak's Gage","Shield at low HP.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","W stealth gank approach closes gap safely."),I("Serylda's Grudge","Slow stops them repositioning."),I("Sundered Sky","Q proc healing after arriving.")],behind:[I("Sterak's Gage","Absorb poke burst."),I("Maw of Malmortius","AP poke."),I("Mercury's Treads","Shorter CC so W approach completes.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Trinity Force","Sprint + Sheen = instant ADC kill on gank."),I("Black Cleaver","Shred tanky ADCs.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Sterak's Gage","Survive carry burst."),I("Death's Dance","Delay DPS window.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Black Cleaver","Shred the carry — R spin fills it."),I("Trinity Force","Sprint closes before Enchanter peels."),I("Sundered Sky","Stay healthy through poke.")],behind:[I("Sterak's Gage","Survive carry burst."),I("Death's Dance","Delay combined burst."),I("Maw of Malmortius","AP Enchanters.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","CC cancels W stealth — shorter duration."),I("Trinity Force","Close and burst after dodging hook."),I("Sundered Sky","Q proc healing post-gank.")],behind:[I("Mercury's Treads","Mandatory."),I("Sterak's Gage","Survive burst after CC lands."),I("Maw of Malmortius","AP Catchers.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Black Cleaver","R spin stacks Cleaver vs engage tanks."),I("Trinity Force","Dive in during their cooldown window."),I("Lord Dominik's Regards","% pen while ahead.")],behind:[I("Mercury's Treads","Their CC chains — shorter."),I("Sterak's Gage","Survive burst."),I("Death's Dance","Delay engage burst.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Black Cleaver","R spin shreds their armor."),I("Lord Dominik's Regards","% pen."),I("Trinity Force","Sprint through peel.")],behind:[I("Sterak's Gage","Survive carry burst through body-block."),I("Black Cleaver","Still your shred path."),I("Mercury's Treads","Poppy E/Galio taunt.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","W stealth + sprint closes on Specialists."),I("Serylda's Grudge","Slow stops kiting."),I("Sundered Sky","Q proc sustain.")],behind:[I("Sterak's Gage","Survive burst setups."),I("Maw of Malmortius","AP Specialists."),I("Mercury's Treads","Teemo blind — Tenacity shortens.")],runes:{...WUKONG_JGL_DEFAULT_RUNES}},
      },
    },
  },
};
