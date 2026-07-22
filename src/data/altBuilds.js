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
      corePath: "Eclipse  ›  Ionian Boots of Lucidity  ›  Youmuu's Ghostblade  ›  Serylda's Grudge",
      coreNote: "The one-shot roam build, not the Conqueror bruiser: rush lethality, spear-Q from max range, W-stun, and delete the squishy before they react. Eclipse gives the two-hit shield and %max-HP, Youmuu's Ghostblade adds roam speed + lethality, and Serylda's slows and pens for the confirm. Profane Hydra or The Collector close the kill. Far spikier and squishier than the standard page — snowball mid, roam side lanes with Grand Starfall.",
      runes: {
        keystone: "Hail of Blades",
        primary: "Domination",
        primaryRunes: ["Sudden Impact", "Grisly Mementos", "Ultimate Hunter"],
        secondary: "Precision",
        secondaryRunes: ["Presence of Mind", "Coup de Grace"],
        shards: ["Adaptive Force", "Adaptive Force", "Health (scaling)"],
        reason: "Hail of Blades frontloads three fast Q-empowered strikes for the burst window; Sudden Impact procs lethality on every E-stun and leap, Ultimate Hunter brings Grand Starfall up for cross-map roam kills, and Coup de Grace finishes what the combo starts.",
      },
      sideItems: ["Profane Hydra", "The Collector", "Edge of Night", "Opportunity", "Black Cleaver", "Guardian Angel"],
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

  mordekaiser: {
    Top: [{
      label: "AD Bruiser",
      tag: "off-meta",
      corePath: "Trinity Force  ›  Plated Steelcaps  ›  Black Cleaver  ›  Sterak's Gage",
      coreNote: "AD instead of AP: Q (Indestructible) still deals physical damage, so a Trinity Force / Cleaver bruiser build turns Morde into a Spellblade-proccing juggernaut who out-DPSes his AP self in extended brawls. Trinity Force procs off every Q, Black Cleaver shreds the frontline the Death Realm traps, and Sterak's covers the all-in. Death's Dance closes it. Same Realm-of-Death gameplan, just as a sustained-DPS bruiser rather than a burst mage.",
      runes: {
        keystone: "Conqueror",
        primary: "Precision",
        primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
        secondary: "Resolve",
        secondaryRunes: ["Second Wind", "Unflinching"],
        shards: ["Attack Speed", "Adaptive Force", "Health (scaling)"],
        reason: "Conqueror stacks fully inside one Death Realm duel and converts to healing off his passive; Legend: Alacrity feeds the Trinity-proc auto weaving, Last Stand rewards the low-HP realm brawls, and Second Wind + Unflinching survive the trades before the spike.",
      },
      sideItems: ["Death's Dance", "Spear of Shojin", "Sundered Sky", "Guardian Angel", "Maw of Malmortius", "Randuin's Omen"],
    }],
  },
};

export default ALT_BUILDS;
