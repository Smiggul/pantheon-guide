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
};

export default ALT_BUILDS;
