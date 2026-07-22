// ─────────────────────────────────────────────────────────────────────────────
//  altBuilds.js  —  Alternate / off-meta build overlay, keyed by champ id → role.
//
//  Each entry is an ALTERNATIVE to a role's primary (meta) build. The champ's
//  existing corePath / coreNote / per-class runes remain the default build; the
//  UI shows a build-toggle only when an entry exists here, so the other champions
//  are completely unaffected. Extend this file champ-by-champ across the roster.
//
//  Shape:  <champId>: { <Role>: [ { label, tag, corePath, coreNote, runes, sideItems } ] }
//    tag:  "off-meta" | "alt"   (drives the pill colour/label in the UI)
//    runes: full rune page {keystone, primary, primaryRunes[3], secondary, secondaryRunes[2], shards[3], reason}
//    Item & rune names must match item.json / runesReforged.json (same rule as champ data).
// ─────────────────────────────────────────────────────────────────────────────

export const ALT_BUILDS = {
  pantheon: {
    Top: [{
      label: "Resolve Bruiser",
      tag: "alt",
      corePath: "Eclipse  ›  Black Cleaver  ›  Sundered Sky  ›  Death's Dance",
      coreNote: "The survivability line — trade the standard Sorcery secondary (Transcendence/Scorch) for a Resolve secondary so you live through the extended brawls instead of relying on winning the burst race. Eclipse over Voltaic first here: its passive shield and %-max-HP proc reward the drawn-out trades this page is built for, Black Cleaver adds the HP + shred, Sundered Sky heals off the guaranteed crit-Q, and Death's Dance turns lethal burst into a bleed you outlast. Sterak's Gage and Spirit Visage are the natural continuations. Tankier and more forgiving than the lethality/snowball lines — you brawl, sustain, and out-stat the lane rather than one-combo it.",
      runes: {
        keystone: "Conqueror",
        primary: "Precision",
        primaryRunes: ["Presence of Mind", "Legend: Haste", "Last Stand"],
        secondary: "Resolve",
        secondaryRunes: ["Bone Plating", "Second Wind"],
        shards: ["Ability Haste", "Adaptive Force", "Health (scaling)"],
        reason: "Conqueror + Presence of Mind is the same durable-DPS core, but the Resolve secondary is the survivability trade: Bone Plating blunts the burst opener of the divers/assassins you brawl, and Second Wind sustains you back through poke and after trades. Last Stand still rewards the low-HP Conqueror fights this page wants to be in, and the Health-scaling shard adds to the durability.",
      },
      sideItems: ["Sterak's Gage", "Spirit Visage", "Plated Steelcaps", "Mercury's Treads", "Maw of Malmortius", "Randuin's Omen", "Thornmail", "Kaenic Rookern"],
    }],
    Mid: [{
      label: "Lethality Assassin",
      tag: "off-meta",
      corePath: "Youmuu's Ghostblade  ›  Ionian Boots of Lucidity  ›  Voltaic Cyclosword  ›  Edge of Night",
      coreNote: "The one-shot roam build (Mobalytics 26.14, ~11k games), not the Conqueror bruiser: rush lethality, spear-Q from max range, W-stun, and delete the squishy before they react. Youmuu's Ghostblade is the first-item spike — roam speed + lethality — Voltaic Cyclosword adds the energized auto-reset burst, and Edge of Night blanks the peel spell saved for you. Black Cleaver or Serylda's close it. Far spikier and squishier than the standard page — snowball mid, roam side lanes with Grand Starfall.",
      runes: {
        keystone: "Electrocute",
        primary: "Domination",
        primaryRunes: ["Sudden Impact", "Sixth Sense", "Treasure Hunter"],
        secondary: "Inspiration",
        secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"],
        shards: ["Adaptive Force", "Adaptive Force", "Health (scaling)"],
        reason: "Electrocute completes in one spear-W-auto combo for the burst window; Sudden Impact procs lethality on every E-stun and leap, Treasure Hunter funds the lethality curve off picks, and the Inspiration splash (Biscuit Delivery, Cosmic Insight) sustains the roam and shortens Grand Starfall's cooldown.",
      },
      sideItems: ["Black Cleaver", "Serylda's Grudge", "Opportunity", "Profane Hydra", "The Collector", "Guardian Angel"],
    }],
  },

  wukong: {
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

  shyvana: {
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

  // NOTE: AD/bruiser Morde is NOT viable in 26.14 (AP-only). This alt is the
  // high-WR aggressive-AP line, distinct from the standard Rylai's/Liandry's path.
  mordekaiser: {
    Top: [{
      label: "Dusk & Dawn AP",
      tag: "alt",
      corePath: "Dusk and Dawn  ›  Plated Steelcaps  ›  Riftmaker  ›  Experimental Hexplate",
      coreNote: "The highest-win-rate Morde line on Mobalytics 26.14 (60.1% over ~1.5k games), more aggressive than the standard Rylai's/Liandry's tank-mage. Dusk and Dawn's alternating on-hit + move speed lets you chase inside the Death Realm, Riftmaker converts the extended duel into omnivamp true damage, and Experimental Hexplate speeds up and empowers Realm of Death itself — so you ult more often and hit harder inside it. Spirit Visage amplifies the whole sustain package. Same Conqueror gameplan, tuned for tempo and ult uptime rather than raw kiting.",
      runes: {
        keystone: "Conqueror",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Haste", "Last Stand"],
        secondary: "Resolve",
        secondaryRunes: ["Bone Plating", "Revitalize"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Conqueror stacks fully inside one Death Realm duel and converts to healing off his passive; Legend: Haste feeds the ability spam Experimental Hexplate accelerates, Last Stand rewards the low-HP realm brawls, and Bone Plating + Revitalize survive the trades and amplify the Riftmaker/Spirit Visage sustain.",
      },
      sideItems: ["Spirit Visage", "Zhonya's Hourglass", "Rylai's Crystal Scepter", "Liandry's Torment", "Kaenic Rookern", "Thornmail"],
    }],
  },

  // Standard Kai'Sa (roster) is the AD/on-hit hybrid (Kraken/Guinsoo's/Nashor's).
  // This is the pure-AP line — a real, distinct archetype (~47% WR / 3.4k games,
  // Mobalytics 26.14). Squishier and more burst-oriented.
  kaisa: {
    Bot: [{
      label: "AP (Nashor's)",
      tag: "off-meta",
      corePath: "Nashor's Tooth  ›  Sorcerer's Shoes  ›  Shadowflame  ›  Rabadon's Deathcap",
      coreNote: "Full-AP Kai'Sa, not the AD/on-hit hybrid. Her W (Void Seeker) and the plasma detonation from her passive both scale hard with AP, so you play like a caster-marksman: poke and burst with W, then dash in to finish. Nashor's Tooth is the mandatory first item — its 60 AP + attack speed alone evolves W (the range + double-shot upgrade), which is the whole build's spike. Shadowflame and Rabadon's stack the burst; Sorcerer's Shoes for the magic pen. Riftmaker or Zhonya's for a bruiser/safe lean, Cryptbloom/Void Staff vs MR. Far spikier and squishier than on-hit — you assassinate from range instead of DPS-ing tanks.",
      runes: {
        keystone: "Hail of Blades",
        primary: "Domination",
        primaryRunes: ["Taste of Blood", "Grisly Mementos", "Treasure Hunter"],
        secondary: "Sorcery",
        secondaryRunes: ["Manaflow Band", "Transcendence"],
        shards: ["Adaptive Force", "Adaptive Force", "Health (scaling)"],
        reason: "Hail of Blades fires the burst of autos that stack your passive plasma to the AP-scaling detonation almost instantly — the safest way to proc it on a low target. Taste of Blood sustains the poke, Treasure Hunter funds the gold-hungry AP curve, and the Sorcery splash (Manaflow Band, Transcendence) covers Kai'Sa's mana problems and adds the haste to spam W.",
      },
      sideItems: ["Riftmaker", "Zhonya's Hourglass", "Cryptbloom", "Void Staff", "Lich Bane", "Banshee's Veil"],
    }],
  },

  // Standard Master Yi (roster) is on-hit (Kraken/Guinsoo's). This is the crit
  // line — actually the higher-WR build on Mobalytics 26.14 (52.8% / 1.5k games),
  // more burst/one-shot, less sustained tank-shred.
  masteryi: {
    Jungle: [{
      label: "Crit (Collector/IE)",
      tag: "alt",
      corePath: "The Collector  ›  Berserker's Greaves  ›  Infinity Edge  ›  Bloodthirster",
      coreNote: "The crit one-shot line rather than the on-hit DPS build. The Collector opens with lethality + an execute that turns Q-reset chains into instant resets on low targets; Infinity Edge makes every Alpha Strike + auto crit for enormous burst, and Bloodthirster's shield + lifesteal keeps you topped between camps and fights. This build deletes squishies faster than on-hit but shreds tanks slower — pick it into squishy/burstable enemy comps. Lord Dominik's or Death's Dance close it out.",
      runes: {
        keystone: "Lethal Tempo",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
        secondary: "Domination",
        secondaryRunes: ["Sudden Impact", "Treasure Hunter"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Lethal Tempo still gives the attack-speed ramp to weave crit autos between Q resets. Coup de Grace stacks with The Collector to execute low targets, Legend: Alacrity feeds the crit-auto cadence, and the Domination splash (Sudden Impact on every Q/Alpha Strike, Treasure Hunter) funds the gold-hungry crit curve.",
      },
      sideItems: ["Lord Dominik's Regards", "Death's Dance", "Guardian Angel", "Blade of The Ruined King", "Mortal Reminder", "Wit's End"],
    }],
  },
};

export default ALT_BUILDS;
