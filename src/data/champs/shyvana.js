import { I } from "../runeHelpers.js";

const SHYVANA_JGL_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Inspiration",
  secondaryRunes: ["Magical Footwear","Cosmic Insight"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Press the Attack procs fast with Q's rapid attacks on ganks. Legend: Haste over Alacrity — Shyvana's play pattern revolves around ability cooldowns more than sustained autos. Magical Footwear's +10 bonus move speed amplifies her dragon form stickiness. Swap to Conqueror vs tank-heavy comps.",
};

const SHYVANA_TOP_DEFAULT_RUNES = {
  keystone:       "Press the Attack",
  primary:        "Precision",
  primaryRunes:   ["Triumph","Legend: Haste","Last Stand"],
  secondary:      "Resolve",
  secondaryRunes: ["Bone Plating","Second Wind"],
  shards:         ["Attack Speed","Adaptive Force","Health (scaling)"],
  reason:         "Same Press the Attack core as Jungle. Bone Plating and Second Wind replace Inspiration's gold-saving runes for a solo lane — Top Shyvana wants lane survivability more than the jungle-clear speed those runes fund, since there's no camp-clearing pattern to accelerate here.",
};

// ══════════════════════════════════════════════════════════════════════════
//  SHYVANA — Skirmisher / Bruiser
// ══════════════════════════════════════════════════════════════════════════

export default {
  id:"shyvana", display:"Shyvana", dd:"Shyvana",
  color:"#c0392b", glow:"#e67e22",
  lanes:["Jungle","Top"],
  altBuilds:{
    Jungle: [{
      label: "AP Dragon",
      tag: "off-meta",
      corePath: "Liandry's Torment  ›  Sorcerer's Shoes  ›  Blackfire Torch  ›  Rabadon's Deathcap",
      coreNote: "The burn-dragon build: max E (Flame Breath) and let AP scaling melt the enemy team in dragon form. Liandry's Torment burns through HP-stackers, Blackfire Torch amplifies every burn tick, and Rabadon's turns the E-detonation into a chunk of anyone's health bar. Void Staff closes vs MR. Weaker duelling than AD Shyvana but a monster AoE teamfight ult and objective burn — dive the fight in dragon form and cook everyone.",
      runes: {
        keystone: "Conqueror",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
        secondary: "Sorcery",
        secondaryRunes: ["Transcendence", "Gathering Storm"],
        shards: ["Ability Haste", "Adaptive Force", "Health (scaling)"],
        reason: "Conqueror stacks off Flame Breath + dragon-form autos and converts to healing for the dive; Transcendence feeds the E cooldown the whole build revolves around, and Gathering Storm backs the AP scaling her burn cashes in late.",
      },
      sideItems: ["Nashor's Tooth", "Shadowflame", "Void Staff", "Zhonya's Hourglass", "Riftmaker", "Rylai's Crystal Scepter"],
    }],
  },
  roles:{
    Jungle:{
      bans:["Trundle","Rek'Sai","Lillia"], replacements:["Udyr","Bel'Veth","Karthus"],
      role:"Skirmisher / Bruiser",
      corePath:"Trinity Force  ›  Spear of Shojin  ›  Death's Dance  ›  Jak'Sho, The Protean",
      coreNote:"Trinity Force first for Sheen proc on Q double-strike. Current meta favors Spear of Shojin's ability haste over Guinsoo's on-hit — more Q resets and dragon form uptime. Death's Dance and Jak'Sho round out survivability for extended skirmishes and objective fights. Guinsoo's Rageblade and Titanic Hydra remain fine alternates if the game goes long enough for on-hit scaling to matter more than haste.",
      sideItems:["Blade of the Ruined King","Nashor's Tooth","Wit's End","Sterak's Gage","Guinsoo's Rageblade","Titanic Hydra","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Blade of the Ruined King","% current HP on Q double-strike destroys their HP stacking."),I("Guinsoo's Rageblade","On-hit Q magic damage — ignores their armor stacking."),I("Titanic Hydra","AoE on Q resets shreds their camp while poking them.")],behind:[I("Sterak's Gage","Shield when they walk you down."),I("Death's Dance","Delay Darius/Mundo burst — E to disengage."),I("Plated Steelcaps","Auto reduction on every Juggernaut auto-weave.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Sheen proc wins mirror dives."),I("Guinsoo's Rageblade","On-hit damage procs faster than their dive burst."),I("Blade of the Ruined King","% HP drain — sustains through dive skirmishes.")],behind:[I("Sterak's Gage","Shield when their dive beats your burst."),I("Death's Dance","Delay burst while you R form to escape."),I("Plated Steelcaps","Auto reduction on Irelia/Camille chains.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","Close and burst before they reset."),I("Sterak's Gage","Absorb their burst attempt."),I("Guinsoo's Rageblade","On-hit DPS in dragon form executes them post-combo.")],behind:[I("Sterak's Gage","Shield vs one-shots — they burst faster than you."),I("Death's Dance","Delay burst while dragon form procs drain."),I("Wit's End","MR + on-hit for AP assassins Akali/Ekko.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Guinsoo's Rageblade","On-hit DPS wins extended duels vs Fiora/Jax."),I("Blade of the Ruined King","% HP drain — you sustain through their dueling damage."),I("Titanic Hydra","AoE on Q resets maintains DPS while they trade.")],behind:[I("Randuin's Omen","Crit reduction vs Yasuo/Yone — dragon form has no armour."),I("Sterak's Gage","Shield when their crit burst peaks."),I("Plated Steelcaps","Critical auto mitigation.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","Close before their combo fires."),I("Sterak's Gage","Shield their burst while you reach dragon form."),I("Wit's End","MR + on-hit while ahead vs AP mid laners.")],behind:[I("Wit's End","MR stack + drain — non-negotiable vs AP burst."),I("Sterak's Gage","Secondary shield."),I("Mercury's Treads","Shorter stun so dragon form can land.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Blade of the Ruined King","% HP drain on sustained AP targets."),I("Wit's End","MR + drain — your sustain vs their sustain."),I("Guinsoo's Rageblade","On-hit magic damage in dragon form beats their AP DPS.")],behind:[I("Wit's End","Non-negotiable — MR drain vs sustained AP."),I("Sterak's Gage","Shield when their DPS window opens."),I("Mercury's Treads","Shorter CC.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","Sprint passive closes poke gap."),I("Guinsoo's Rageblade","On-hit procs in dragon form melts them on arrival."),I("Sterak's Gage","Absorb poke burst accumulated on approach.")],behind:[I("Sterak's Gage","Shield vs burst on arrival."),I("Wit's End","MR vs AP poke."),I("Mercury's Treads","Shorter CC so your gank connects.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Plated Steelcaps","ADC auto reduction."),I("Guinsoo's Rageblade","On-hit DPS races their sustained damage."),I("Blade of the Ruined King","% HP drain on high-HP ADCs.")],behind:[I("Plated Steelcaps","Non-negotiable."),I("Sterak's Gage","Survive carry burst."),I("Death's Dance","Delay their DPS window.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Guinsoo's Rageblade","Dragon form on-hit DPS reaches carry through peel."),I("Titanic Hydra","AoE hits both Enchanter and carry."),I("Blade of the Ruined King","% HP drain sustains through Enchanter poke.")],behind:[I("Sterak's Gage","Survive carry + Enchanter burst."),I("Death's Dance","Delay combined burst."),I("Plated Steelcaps","Carry auto reduction.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Shorter CC chains — dragon form is cancelled by hooks."),I("Trinity Force","Close and burst before they reset CC."),I("Guinsoo's Rageblade","On-hit DPS on arrival.")],behind:[I("Mercury's Treads","Mandatory — CC kills dragon form entirely."),I("Sterak's Gage","Survive burst after CC lands."),I("Wit's End","AP Catchers drain.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Blade of the Ruined King","% HP drain on high-HP Vanguards."),I("Guinsoo's Rageblade","On-hit magic damage bypasses armor stacking."),I("Titanic Hydra","AoE on Q resets — hits engage tank and backline.")],behind:[I("Sterak's Gage","Survive engage burst."),I("Death's Dance","Delay burst."),I("Mercury's Treads","Their CC chains kill dragon form.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Blade of the Ruined King","% HP drain shreds Warden HP stacking."),I("Guinsoo's Rageblade","Magic on-hit bypasses their armor."),I("Titanic Hydra","AoE past their body-block.")],behind:[I("Sterak's Gage","Survive carry burst through body-block."),I("Death's Dance","Delay burst."),I("Mercury's Treads","Poppy E/Galio taunt — reduce.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Sprint closes on kiting Specialists."),I("Guinsoo's Rageblade","Dragon form DPS melts Singed/Kennen."),I("Blade of the Ruined King","% HP drain on sustain Specialists.")],behind:[I("Wit's End","Kennen/Teemo AP — MR drain."),I("Sterak's Gage","Survive burst setups."),I("Mercury's Treads","Teemo blind stops Q double-strike — Tenacity shortens.")],runes:{...SHYVANA_JGL_DEFAULT_RUNES}},
      },
    },

    Top:{
      bans:["Malphite","Jax","Fiora"], replacements:["Renekton","Wukong","Sett"],
      role:"Skirmisher / Bruiser (off-meta counter-pick)",
      corePath:"Trinity Force  ›  Spear of Shojin  ›  Death's Dance  ›  Sundered Sky",
      coreNote:"Top Shyvana is a genuine off-meta counter-pick into melee matchups, not a troll build — this alt itemization (Trinity Force into a haste/sustain core rather than Jungle's on-hit path) has posted very strong win rates when the matchup calls for it. Jungle remains her stronger seat overall, but this isn't a weak novelty like some off-meta roles.",
      sideItems:["Plated Steelcaps","Mercury's Treads","Jak'Sho, The Protean","Wit's End","Sterak's Gage","Randuin's Omen"],
      data:{
        JUGGERNAUT:{ahead:[I("Death's Dance","Bleed conversion outlasts their sustain."),I("Trinity Force","Sheen proc wins the trade outright."),I("Spear of Shojin","Haste for more Q double-strikes in the fight.")],behind:[I("Plated Steelcaps","Reduces auto damage from their all-in."),I("Sterak's Gage","Shield when the walk-down connects."),I("Death's Dance","Survive long enough to bleed them out.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        DIVER:{ahead:[I("Trinity Force","Win the burst race before their combo lands."),I("Sundered Sky","Crit-heal wins the mirror dive follow-up."),I("Death's Dance","Outlast their engage burst.")],behind:[I("Sterak's Gage","Survive their engage before yours."),I("Plated Steelcaps","Irelia/Camille auto chains."),I("Mercury's Treads","Shorter CC on their initiation.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        ASSASSIN:{ahead:[I("Trinity Force","Out-burst them on the engage."),I("Sterak's Gage","Shield eats their opener."),I("Death's Dance","Bleed conversion after their combo.")],behind:[I("Sterak's Gage","Non-negotiable — survive the burst window."),I("Wit's End","AP assassins — MR + on-hit."),I("Mercury's Treads","Shorter CC before the finisher.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        SKIRMISHER:{ahead:[I("Spear of Shojin","Haste wins the extended duel via more Q resets."),I("Sundered Sky","Crit-heal wins the mirror duel."),I("Trinity Force","Sheen burst edge.")],behind:[I("Randuin's Omen","Crit/AS reduction on Yi/Trynd/Yone."),I("Sterak's Gage","Survive their all-in spike."),I("Wit's End","MR + sustain in the duel.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        BURST_MAGE:{ahead:[I("Trinity Force","Close the gap before their combo lands."),I("Wit's End","MR + on-hit while pressing."),I("Mercury's Treads","Reduce the CC in their combo.")],behind:[I("Wit's End","MR baseline vs burst mages."),I("Mercury's Treads","Shorter CC on their combo."),I("Sterak's Gage","Survive the full rotation.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        BATTLEMAGE:{ahead:[I("Wit's End","MR + on-hit vs their sustained DPS."),I("Spear of Shojin","Haste for more Q resets in the drain fight."),I("Trinity Force","Burst before they can drain back.")],behind:[I("Wit's End","MR + DPS to stay relevant."),I("Mercury's Treads","Shorter CC to disengage."),I("Death's Dance","Bleed outlasts their drain.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        ARTILLERY:{ahead:[I("Trinity Force","Gap-close instantly."),I("Mercury's Treads","Reduce CC duration on the approach."),I("Sterak's Gage","Survive the poke while closing.")],behind:[I("Mercury's Treads","Shorten their key CC from range."),I("Wit's End","MR chip resistance."),I("Sterak's Gage","Second shield layer.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        MARKSMAN:{ahead:[I("Trinity Force","Burst kills the ADC on arrival."),I("Spear of Shojin","Haste for repeat Q engages."),I("Death's Dance","Survive their DPS while eating them.")],behind:[I("Plated Steelcaps","Non-negotiable auto reduction."),I("Sterak's Gage","Survive the peel + DPS."),I("Randuin's Omen","Crit reduction vs their build.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        ENCHANTER:{ahead:[I("Wit's End","MR + on-hit resists shield spam."),I("Trinity Force","Burst through their peel."),I("Spear of Shojin","Haste chews through the shield economy faster.")],behind:[I("Sterak's Gage","Survive the combined burst."),I("Death's Dance","Outlast their sustain package."),I("Wit's End","MR vs their poke component.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        CATCHER:{ahead:[I("Mercury's Treads","Dodge hooks while engaging."),I("Trinity Force","Punish a whiffed hook instantly."),I("Spear of Shojin","Haste to kill the Catcher before they reset.")],behind:[I("Mercury's Treads","Mandatory — a caught Shyvana loses the trade."),I("Sterak's Gage","Survive the follow-up after a catch."),I("Wit's End","AP catchers.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        VANGUARD:{ahead:[I("Spear of Shojin","Haste for more Q resets vs their frontline."),I("Trinity Force","Burst before their CC chain finishes."),I("Death's Dance","Sustain through the engage.")],behind:[I("Randuin's Omen","Crit/AS reduction if paired with a carry."),I("Mercury's Treads","Shorter stuns from their engage."),I("Sterak's Gage","Survive the initiation.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        WARDEN:{ahead:[I("Jak'Sho, The Protean","Scaling resistances match their stat check."),I("Spear of Shojin","Haste for repeat Q double-strikes through mitigation."),I("Death's Dance","Sustain the peel war.")],behind:[I("Jak'Sho, The Protean","Scaling durability for the extended peel war."),I("Sterak's Gage","Survive their counter-peel."),I("Mercury's Treads","Poppy/Galio CC shortened.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
        SPECIALIST:{ahead:[I("Trinity Force","Run down a kiting Specialist."),I("Wit's End","MR + on-hit shreds Teemo/Kennen."),I("Spear of Shojin","Haste keeps the pressure on their kit.")],behind:[I("Wit's End","MR + DPS baseline."),I("Mercury's Treads","Teemo blind, Kennen stun — shorten both."),I("Sterak's Gage","Survive burst setups.")],runes:{...SHYVANA_TOP_DEFAULT_RUNES}},
      },
    },
  },
};
