// ─────────────────────────────────────────────────────────────────────────────
//  itemRationale.js  —  "why this item" stat rationale for build items.
//
//  Keys MUST match the canonical item.json names used in champion data (the
//  `I("Name", ...)` entries), so a lookup by item name resolves. Value is a
//  concise stat-and-reason line shown on item cards and in the build export.
//
//  Format:  "Item Name": "key stats — when/why you pick it"
//
//  WORK IN PROGRESS (stage 1): covers the highest-frequency build items first.
//  Extend by adding rows; unknown items simply fall back to the champ's own
//  per-matchup `why` text, so partial coverage is safe.
// ─────────────────────────────────────────────────────────────────────────────

export const ITEM_RATIONALE = {
  // ── Bruiser / fighter cores ─────────────────────────────────────────────
  "Black Cleaver":          "AD + HP + ability haste; the passive shreds up to 30% armor and its Rage move-speed burst lets you stick to targets — take it when they stack armor or you need to chase.",
  "Trinity Force":          "AD, attack speed, ability haste, HP and move speed all in one — Spellblade adds a big on-hit hit after each ability; the all-rounder spike for ability-weaving fighters.",
  "Sundered Sky":           "AD + HP + haste; first hit on a target crits and heals you — the sustain-and-burst spike for dive fighters who commit to extended trades.",
  "Spear of Shojin":        "AD, HP, haste; amplifies your basic-ability damage and refunds cooldowns — best on champions whose damage lives in their abilities, not autos.",
  "Stridebreaker":          "AD, attack speed, HP; the active is a ranged slow + dash-cancel to lock a target down — engage/kiting tool for melee carries.",
  "Death's Dance":          "AD, armor, haste; converts a chunk of burst into a bleed you can heal off, and a takedown wipes the bleed — turns you into a brawl-winner vs burst.",
  "Sterak's Gage":          "HP + a big shield when you take heavy damage, plus Sterak's tenacity — the anti-burst all-in insurance for melee bruisers.",
  "Ravenous Hydra":         "AD + omnivamp + cleave; sustains you in extended fights and clears waves — the split-push/duelist sustain item.",
  "Titanic Hydra":          "HP + AD scaling off HP + cleave; converts a health-stacking tank into real cleave damage for teamfights.",
  "Hullbreaker":            "AD/HP + huge solo bonus resists and tower damage — the dedicated split-push item when you win the 1v1 sidelane.",
  "Eclipse":                "AD + lethality; two hits give a shield and %max-HP damage — early all-in spike for melee assassins/skirmishers.",
  "Profane Hydra":          "AD + lethality + haste; cleave plus an execute active that fits into a combo — burst-and-waveclear for lethality bruisers/assassins.",
  "Experimental Hexplate":  "AD, attack speed, HP; speeds up and empowers your ultimate — for ult-reliant fighters (built as an on-hit/ability bruiser core).",
  "Iceborn Gauntlet":       "Armor + HP + haste; Spellblade lays down a slowing frost field — the tanky bruiser answer that keeps targets stuck to you.",

  // ── Lethality / armor pen ───────────────────────────────────────────────
  "Serylda's Grudge":       "AD + haste + 30% armor pen and a slow on damaged targets — pick it when they're stacking armor or you need extra stick.",
  "Lord Dominik's Regards":  "Crit + %armor pen that scales with the enemy's HP — the anti-tank / giant-slayer crit item for marksmen.",
  "Youmuu's Ghostblade":    "AD + lethality + out-of-combat move speed and an active burst of speed — roam and pick tempo for assassins.",
  "Voltaic Cyclosword":     "AD + lethality; energized hit slows and adds burst on a target you haven't hit — the auto-reset opener for lethality divers.",
  "Edge of Night":          "AD + lethality + HP and a spell shield that blocks the next enemy ability — buy it to blank a key CC or combo-starter aimed at you.",
  "The Collector":          "Crit + lethality; executes anyone left below 5% — turns your burst into confirmed kills and gold.",
  "Umbral Glaive":          "AD + lethality; sweeps and destroys wards on hit — vision control that sets up unseen picks for assassins.",
  "Serpent's Fang":         "AD + lethality; reduces shields you damage — the dedicated anti-shield item vs heavy enchanter/shield comps.",
  "Hubris":                 "AD + lethality; takedowns stack permanent AD and give a burst of it — the snowball item for fed assassins/carry junglers.",
  "Opportunity":            "AD + lethality + move speed; extra damage and speed when you engage from out of combat — first-strike burst for assassins.",

  // ── Survivability (mixed) ───────────────────────────────────────────────
  "Guardian Angel":         "AD + armor; revives you once after death — insurance when you're the win-condition carry and they focus you.",
  "Maw of Malmortius":      "AD + MR + a magic shield lifeline that pops when low — the pick vs AP burst instead of an armor item; take it when the threat is magic damage.",
  "Banshee's Veil":         "AP + MR + a spell shield that blocks the next ability — blank a key mage/assassin combo-opener aimed at you.",
  "Immortal Shieldbow":     "AD + crit + lifesteal and a lifeline shield when low — the survivability crit item vs assassins/burst for marksmen.",
  "Mercurial Scimitar":     "AD + MR + an active cleanse of all CC — buy it to break a lockdown chain (suppression, stun combos) that would otherwise delete you.",

  // ── Tank cores ──────────────────────────────────────────────────────────
  "Sunfire Aegis":          "HP + armor + an immolate burn that ramps in fights — frontline damage and waveclear for engage tanks.",
  "Thornmail":              "Armor + HP; reflects damage and applies Grievous Wounds on the attacker — the answer to auto-attackers and heavy lifesteal.",
  "Randuin's Omen":         "Armor + HP; its passive reduces crit-strike damage taken by 30% and the active AoE-slows for 2s — the premier item vs crit ADCs, and the armor + slow also peel AD auto-attackers/divers. NOT a lethality counter: assassins don't crit and lethality is built to shred flat armor.",
  "Frozen Heart":           "Armor + haste + mana; auras down nearby attack speed — shuts off auto-attack DPS (ADCs, on-hit bruisers).",
  "Spirit Visage":          "HP + MR + haste; amplifies ALL your healing and shielding — the multiplier on any self-sustain (drain tanks, lifesteal bruisers).",
  "Force of Nature":        "HP + MR + move speed; stacks more MR as you take magic hits and gives chase/escape speed — the anti-heavy-AP wall.",
  "Kaenic Rookern":         "HP + a large magic shield that regenerates out of combat — cheap, dedicated anti-AP-poke/burst shield.",
  "Jak'Sho, The Protean":   "HP + resists that ramp every second in combat, then convert to sustain — the scaling all-around tank spike for long fights.",
  "Unending Despair":       "HP + resists; periodically drains nearby enemies and heals you — sustain-through-teamfights for engage tanks.",
  "Warmog's Armor":         "Huge HP + fast out-of-combat regen — makes you unkillable in a poke/attrition game (best paired with a resist).",
  "Dead Man's Plate":       "HP + armor; builds move speed and a slowing slam hit — roam and engage speed for tanks/bruisers.",
  "Heartsteel":             "HP; combat hits stack permanent HP and a big burst hit — the scaling health-stacking item for frontline brawlers.",
  "Overlord's Bloodmail":   "HP + AD that scales off your HP; heals on takedown — turns a health-stacking juggernaut into a real damage threat.",
  "Gargoyle Stoneplate":    "Armor + MR + HP; the active balloons your HP and tankiness when surrounded — survive being focused in a 1v5.",
  "Winter's Approach":      "HP + mana + haste; transforms into Fimbulwinter for a spammable shield on ability cast — mana-tank sustain for engage supports.",

  // ── On-hit ──────────────────────────────────────────────────────────────
  "Nashor's Tooth":         "AP + attack speed + on-hit magic damage — the AP on-hit core (Kayle, Teemo, AP fighters).",
  "Wit's End":              "Attack speed + MR + on-hit magic damage — the anti-AP on-hit item; take it vs magic threats instead of a pure MR item.",
  "Blade of The Ruined King": "AD + attack speed + lifesteal; on-hit %current-HP and a slow — melts HP-stackers and gives stick, best vs tanks/bruisers.",
  "Guinsoo's Rageblade":    "AD/AP + attack speed; doubles on-hit effects and eventually crits every third hit — the on-hit stacking spike (Kog'Maw, Varus).",
  "Terminus":               "AD + attack speed; on-hit true/mixed damage and stacking pen + resists — the self-tanky on-hit item for auto-attackers.",
  "Kraken Slayer":          "AD + attack speed + crit; every third hit deals bonus true damage — the anti-tank on-hit crit item.",
  "Runaan's Hurricane":     "Attack speed + crit; extra bolts apply on-hit to nearby targets — teamfight/waveclear multiplier for on-hit ADCs.",

  // ── AP cores ────────────────────────────────────────────────────────────
  "Liandry's Torment":      "AP + HP + haste; a burn that scales off enemy max HP — the anti-tank/bruiser burn for battlemages.",
  "Malignance":             "AP + haste + mana; empowers and hastes your ultimate with a burn field — for ult-centric mages (Annie, Malzahar).",
  "Shadowflame":            "AP + magic pen that spikes vs low-HP targets — execute-range burst pen for assassins/burst mages.",
  "Rabadon's Deathcap":     "Massive AP + amplifies all your AP — the raw scaling spike once you have a couple of items down.",
  "Void Staff":             "AP + %magic pen — the mandatory answer when they stack MR; keeps your damage real into resists.",
  "Morellonomicon":         "AP + HP + magic pen and Grievous Wounds on damage — the AP anti-heal vs drain tanks/lifesteal comps.",
  "Zhonya's Hourglass":     "AP + armor + stasis active — dodge a combo/ult or bait a dive; core vs AD assassins and for stationary channels.",
  "Rylai's Crystal Scepter": "AP + HP; your damage applies a slow — perma-kite and peel for DoT/poke mages so nothing reaches you.",
  "Lich Bane":              "AP + haste + move speed; Spellblade adds a big on-hit after an ability — the auto-weaving burst item (Evelynn, Nidalee).",
  "Stormsurge":             "AP + magic pen + move speed; burst on a target procs an AoE bolt — snowball burst for assassins/burst mages.",
  "Hextech Rocketbelt":     "AP + HP + haste; the active dashes and blasts for burst/gap-close — mobility + burst for short-range mages.",
  "Blackfire Torch":        "AP + haste + mana; amplifies your damage-over-time and burn — multiplies DoT kits (Brand, Malzahar, Hwei).",
  "Riftmaker":              "AP + HP + omnivamp; ramps damage in combat and converts some to true damage — the sustain-bruiser AP core (Vladimir, Sylas).",
  "Cosmic Drive":           "AP + HP + haste; damaging a champ gives move speed — chase/kite speed for battlemages.",
  "Archangel's Staff":      "AP + mana + haste; stacks into Seraph's for a shield — mana engine and scaling for mana-hungry mages.",
  "Rod of Ages":            "HP + mana + AP that grows over time and gives an XP/level boost — the scaling durability spike for slow-scaling mages.",

  // ── Crit ADC ────────────────────────────────────────────────────────────
  "Infinity Edge":          "AD + crit + amplifies crit damage — the crit multiplier spike; the DPS ceiling for a crit marksman.",
  "Bloodthirster":          "AD + crit + big lifesteal and an overheal shield — sustain and a survivability buffer in extended fights.",
  "Phantom Dancer":         "Attack speed + crit + move speed and a brief lifeline; ghosting through units — kite-DPS and stick for marksmen.",
  "Statikk Shiv":           "AD + attack speed; energized hit chains and shreds waves — waveclear and objective tempo for on-hit/crit ADCs.",
  "Rapid Firecannon":       "Attack speed + crit; energized first hit gains bonus range — poke and siege range for marksmen.",
  "Essence Reaver":         "AD + crit + haste; refunds mana on ability and empowers the next auto — the spellcaster-ADC core (Corki, GP, Smolder).",

  // ── Enchanter / support ─────────────────────────────────────────────────
  "Redemption":             "Haste + heal/shield power; a call-down that heals allies and hurts enemies — teamfight/objective swing for enchanters.",
  "Mikael's Blessing":      "Heal/shield power + mana; active cleanses a hard CC off an ally — save your carry from a lockdown/suppression.",
  "Locket of the Iron Solari": "Resists + a team shield active — blanket the team through a burst/wombo window (engage supports).",
  "Knight's Vow":           "HP + resists; links to your carry to redirect damage and gain speed toward them — bodyguard peel item.",
  "Echoes of Helia":        "Haste + heal/shield; chord procs heal allies and chip enemies — sustained enchanter value in skirmishes.",
  "Moonstone Renewer":      "Haste + heal/shield; chains your heals/shields across the team in fights — teamfight enchanter core.",
  "Ardent Censer":          "Heal/shield power; your heals/shields grant allies attack speed and on-hit — hyper-buff a fed auto-attacking carry.",
  "Dream Maker":            "Heal/shield power + haste; stores healing bulbs that overheal — the primary Milio/enchanter healing engine.",
  "Zeke's Convergence":     "Resists + haste; links to a carry for a slow + bonus damage on your ult — pair engage CC with your ADC's follow-up.",
  "Imperial Mandate":       "AP + haste; your slows/immobilizes mark targets for bonus team damage — turns CC supports into damage amplifiers.",
  "Bloodsong":              "Support-item upgrade; empowers your poke and gives your lane bonus damage — the aggressive support finisher.",

  // ── Boots ───────────────────────────────────────────────────────────────
  "Plated Steelcaps":       "Armor boots that also reduce auto-attack damage — vs AD-heavy / auto-attacker threats.",
  "Mercury's Treads":       "MR boots + tenacity (shorter CC) — vs magic damage and heavy crowd control.",
  "Sorcerer's Shoes":       "Magic-pen boots — the default for AP damage dealers.",
  "Berserker's Greaves":    "Attack-speed boots — the default for auto-attack ADCs/on-hit.",
  "Ionian Boots of Lucidity": "Ability-haste boots + summoner-spell haste — for combo/roam-reliant casters and assassins.",
  "Boots of Swiftness":     "Move-speed boots that reduce slows — kiting, roaming, and slow-heavy matchups.",
  "Gluttonous Greaves":     "Boots with omnivamp — sustain-while-kiting for melee/skirmish carries.",

  // ── Vision / trinkets (universal — always buy) ──────────────────────────
  "Control Ward":           "Pink ward: denies enemy vision and reveals stealth/traps — buy one nearly every back to control objectives.",
  "Stealth Ward":           "Yellow trinket: free timed wards for lane/objective safety — the default early trinket.",
  "Farsight Alteration":    "Blue trinket: long-range throwaway ward for deep/objective vision — the default late-game trinket.",
  "Oracle Lens":            "Sweeper trinket: clears enemy wards and reveals traps — take it when you need to deny vision or push in.",

  // ── Situational answers — "in what situation do I build this?" ───────────────
  "Abyssal Mask":           "HP + MR + haste with an aura that amplifies all magic damage on nearby enemies by 12% — take it as a tank/AP-bruiser vs a magic-damage team so your AP carries hit harder.",
  "Axiom Arc":              "AD + lethality + haste; every takedown refunds a chunk of your ultimate — build it on assassins whose game plan is landing R over and over (Talon, Briar one-shot).",
  "Bandlepipes":            "Support item that fires a bonus-damage bolt after you cast — take it on aggressive poke/engage supports who want extra harass and a mid-game spike.",
  "Blade of the Ruined King": "AD, attack speed, on-hit % current-HP damage + a slow — the anti-tank/anti-bruiser DPS item when your autos need to chew through high-HP targets.",
  "Bloodletter's Curse":    "AP + haste + magic pen; amplifies your magic damage to a cursed target — take it for single-target AP elimination vs squishies (Rumble, Singed).",
  "Bramble Vest":           "Cheap armor + Grievous Wounds when hit — rush it early into AD auto-attackers or a healing lane to blunt their DPS and cut sustain.",
  "Celestial Opposition":   "Support finisher: the defensive/enchanter option that shields allies and softens incoming damage — take it when you need to survive a burst comp.",
  "Chempunk Chainsword":    "AD + HP + haste with Grievous Wounds on ability hit — the cheaper bruiser anti-heal vs drain/lifesteal enemies when you don't need armor pen.",
  "Chemtech Putrifier":     "AP + haste; your damage applies Grievous Wounds — the AP/enchanter anti-heal pickup vs Soraka/Vladimir/heal-stacking comps.",
  "Cryptbloom":             "AP + haste + heavy magic pen; a champion takedown heals nearby allies — take it to punch through stacked magic resist.",
  "Dawncore":               "AP + heal-and-shield power + mana regen — a scaling enchanter item that turns haste and mana into stronger heals/shields for the late game.",
  "Demonic Embrace":        "AP + HP that burns a % of the target's max HP — a durable AP item vs tanky/high-HP teams (Seraphine bot, AP bruisers).",
  "Dusk and Dawn":          "AD/on-hit item that lets you proc on-hit keystones a hit sooner (Press the Attack in two autos) — take it on attack-weaving casters for a faster trade spike (Azir PTA).",
  "Duskblade of Draktharr": "AD + lethality; a takedown grants burst damage and brief untargetability — the snowball assassin item for diving squishy backlines.",
  "Endless Hunger":         "AD + HP + ability haste that scales with your bonus AD — take it when you want near-permanent ability uptime in extended brawls (Briar, Hecarim).",
  "Fiendhunter Bolts":      "ADC item adding upfront single-target burst to your bolts — best into full-squishy comps where you want to blow one target up fast (Yunara).",
  "Hexoptics C44":          "Marksman item bundling AD/attack speed with a burst effect — a tempo pickup when you want extra all-in damage in the mid game.",
  "Hextech Gunblade":       "AD + AP + omnivamp with a slow-nuke active — the hybrid sustain/burst item for AP fighters who weave autos and spells (Akali).",
  "Hollow Radiance":        "HP + MR + a burning aura that clears waves and pressures magic teams — the tank/support MR option vs AP-heavy enemies.",
  "Horizon Focus":          "AP + haste; hitting an enemy from range reveals and amplifies your damage to them — an artillery/poke mage item vs immobile or long-range targets.",
  "Luden's Echo":           "AP + haste + magic pen; adds burst and waveclear on the first spell of a rotation — the burst-mage first item for poke and pick pressure.",
  "Manamune":               "AD + mana + haste that charges into Muramana for bonus on-ability/on-hit damage — take it on mana-hungry AD casters/marksmen that scale with it (Corki, Ezreal).",
  "Mejai's Soulstealer":    "Cheap AP with a big stacking AP + move-speed bonus while snowballing — a greedy pickup ONLY when you're far ahead and unlikely to die.",
  "Mortal Reminder":        "AD + armor pen + Grievous Wounds — the anti-heal marksman item vs lifesteal/healing carries and sustain tanks.",
  "Navori Flickerblade":    "AD + attack speed + crit; basic attacks lower your ability cooldowns — a crit item for ability-reliant carries (Yasuo, Yone, Xayah) who want spell uptime.",
  "Oblivion Orb":           "Cheap AP + Grievous Wounds component — rush it early into a single healer/sustain lane, then finish Morellonomicon.",
  "Protoplasm Harness":     "HP + resistances + a burst-of-HP/tenacity active — a tank/bruiser durability item when you need to survive burst and stay sticky (tank Nasus).",
  "Seraph's Embrace":       "AP + mana + a shield drawn from your mana pool — the AP survivability/scaling item for mana-stacking mages (Kassadin, Cassiopeia).",
  "Shurelya's Battlesong":  "Support haste + heal/shield power with a team move-speed active — the engage/peel enchanter item for catching or kiting as a group.",
  "Solstice Sleigh":        "Support finisher: the tank/engage option that rewards CCing enemies with bonus damage and gold — take it on hard-engage supports (Leona, Nautilus, Rell).",
  "Staff of Flowing Water": "Support AP + haste; healing or shielding an ally grants them AP and haste — the enchanter item that supercharges a mage or AP carry (Sona, Lulu, Nami).",
  "Stormrazor":             "AD + attack speed + crit; your first attack after a pause is an energized slow-nuke — a poke/tempo marksman item for burst-and-reposition play.",
  "Vigilant Wardstone":     "HP + resistances + haste that also boosts your other items — a late-game control-ward/utility pickup once you're near full build (supports, tanks).",
  "Zaz'Zak's Realmspike":   "Support finisher: the AP option that adds % max-HP magic burst in an area — take it on mage/poke supports (Brand, Zyra, Vel'Koz).",
};

export default ITEM_RATIONALE;
