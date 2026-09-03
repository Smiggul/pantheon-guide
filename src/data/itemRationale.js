// ─────────────────────────────────────────────────────────────────────────────
//  itemRationale.js — one concise, VERIFIED "what it does / when to build" line
//  per item, shown as the "When to build" note on item cards and on hover over
//  core + situational items. Every entry is checked against the live Data Dragon
//  item description (stats + passives) — no over-claiming (e.g. Randuin's is
//  anti-crit, NOT anti-lethality). Keep entries tight; re-verify after a patch.
// ─────────────────────────────────────────────────────────────────────────────
export const ITEM_RATIONALE = {
  // ── AD fighters / bruisers ─────────────────────────────────────────────────
  "Black Cleaver":          "AD + HP + haste; stacks up to 30% armor shred and a move-speed burst on damage — vs armor stackers, or when you need to stick to targets.",
  "Trinity Force":          "AD, attack speed, haste, HP and move speed with a Spellblade proc after each ability — the all-rounder spike for ability-weaving fighters.",
  "Sundered Sky":           "AD + HP + haste; your first hit on a target crits and heals you — the sustain-and-burst spike for dive fighters.",
  "Spear of Shojin":        "AD, HP, basic-ability haste; ramps your ability damage — best on champs whose damage lives in their abilities, not autos.",
  "Stridebreaker":          "AD, attack speed, HP; the active is a ranged slow + dash to lock a target down — engage/kite for melee carries.",
  "Death's Dance":          "AD, armor, haste; spreads burst into a bleed you can heal off and a takedown wipes it — a brawl-winner vs burst/AD.",
  "Sterak's Gage":          "HP, tenacity, bonus AD and a big shield below 30% HP — the anti-burst all-in insurance for melee bruisers.",
  "Ravenous Hydra":         "AD, lifesteal and lifesteal-on-cleave — split-push sustain and waveclear for duelists.",
  "Titanic Hydra":          "AD + huge HP; on-hit cleave that scales off your HP — waveclear and teamfight AoE for HP-stackers.",
  "Hullbreaker":            "AD, HP; heavy bonus damage to towers + solo-lane resistances — the split-push item.",
  "Eclipse":                "AD + haste; two hits within 2s grant a %HP shield — the early-spike duelist item vs squishies and bruisers.",
  "Profane Hydra":          "AD, lethality, haste; a recastable cleave nuke + waveclear — burst and AoE for lethality bruisers.",
  "Experimental Hexplate":  "AD, attack speed, HP; big ult-cooldown cut plus AS/MS after you ult — for ult-reliant fighters.",
  "Iceborn Gauntlet":       "Armor, mana, some AP; Spellblade creates a slowing frost field — the kite/peel tank-fighter item.",
  "Endless Hunger":         "AD, omnivamp, tenacity; ability haste that scales with bonus AD + omnivamp on takedowns — near-permanent uptime in long brawls (Briar, Hecarim).",
  "Overlord's Bloodmail":   "AD off your bonus HP, plus more AD while low — turns HP-stacking into damage on HP bruisers.",

  // ── Lethality / assassins ──────────────────────────────────────────────────
  "Serylda's Grudge":       "AD, 35% armor pen, haste; abilities slow low-HP targets — armor pen vs bruiser/tank targets.",
  "Lord Dominik's Regards": "AD, 35% armor pen, crit; bonus damage scaling with the target's bonus HP — the crit-marksman anti-tank item.",
  "Youmuu's Ghostblade":    "AD, lethality, crit; an active MS/AS burst — roam speed and lethality snowball for assassins.",
  "Voltaic Cyclosword":     "AD, lethality, haste; an energized hit deals %HP and slows — burst-and-stick for skirmishers/lethality.",
  "Edge of Night":          "AD, lethality, HP and a spell shield that eats the next enemy ability — vs a key CC or skillshot combo.",
  "The Collector":          "AD, lethality, crit; executes targets below 5% HP + bonus kill gold — the snowball finisher for AD carries.",
  "Umbral Glaive":          "AD, lethality, haste; clears/reveals wards and a true-damage proc from stealth — the roaming vision-denial assassin item.",
  "Serpent's Fang":         "AD, lethality; your damage cuts the shields enemies gain — build it vs shield-heavy comps (Karma, Lulu, Riven, Sterak's).",
  "Hubris":                 "AD, lethality, haste; stacking AD on takedowns — the snowball lethality item when you're getting picks.",
  "Opportunity":            "AD, lethality; bonus lethality/MS out of combat and on takedowns — early-tempo lethality for roaming assassins.",
  "Axiom Arc":              "AD, lethality, haste; takedowns refund your ult cooldown — for assassins whose plan is spamming R (Talon, Briar).",
  "Duskblade of Draktharr": "AD, lethality, haste; bonus %missing-HP ability damage and untargetability on takedowns — snowball assassin item vs squishies.",
  "Hexoptics C44":          "AD, crit; bonus attack damage that scales with distance + AD on takedowns — a ranged tempo/burst marksman item.",

  // ── Defensive (AD side) ────────────────────────────────────────────────────
  "Guardian Angel":         "Armor + MR; revives you once after lethal damage — insurance when you're the snowballing carry.",
  "Maw of Malmortius":      "AD that scales with missing HP, MR, and a magic shield below 30% HP — anti-AP-burst for AD bruisers/assassins.",
  "Banshee's Veil":         "HP, MR and a spell shield that blocks the next ability — vs AP burst or a key CC opener.",
  "Immortal Shieldbow":     "AD, crit and a shield below 30% HP — the anti-burst first item for crit ADCs vs assassins.",
  "Mercurial Scimitar":     "AD, MR; the active cleanses all debuffs (+MS) — QSS vs suppression or heavy CC lockdown on you.",

  // ── Tanks / armor ──────────────────────────────────────────────────────────
  "Sunfire Aegis":          "HP, armor, haste and a burning aura for waveclear/chip — the frontline-tank starter, best vs AD.",
  "Thornmail":              "100 armor; reflects auto damage and applies Grievous Wounds when hit — vs AD auto-attackers, especially healers.",
  "Randuin's Omen":         "Armor + HP; reduces crit damage taken by 30%, slows attackers' attack/move speed and AoE-slows on the active — vs crit ADCs and auto-attackers (NOT lethality).",
  "Frozen Heart":           "Armor, mana, haste; the aura cuts nearby enemies' attack speed by 20% — vs attack-speed DPS comps.",
  "Dead Man's Plate":       "HP, armor, MS; a move-speed nuke on your next attack + slow resist — roam/engage armor for bruiser-tanks.",
  "Warmog's Armor":         "Huge stacking HP with fast out-of-combat regen — the HP-stacking split-push / scaling item.",
  "Heartsteel":             "Huge HP that stacks permanently off attacks on champions — HP-scaling frontline snowball (Sion, Mundo, Cho'Gath).",
  "Unending Despair":       "HP, armor, haste; periodic AoE magic damage + heal in fights — bruiser-tank sustain in extended fights.",
  "Jak'Sho, The Protean":   "HP, armor, MR; ramps +30% bonus resistances over a long fight — the durability item for extended teamfights.",
  "Gargoyle Stoneplate":    "Armor, MR and an active shield that grows in a crowd — anti-teamfight tank survivability.",
  "Protoplasm Harness":     "HP, haste; below 30% HP you gain max HP + size/MS/tenacity while regenerating — a bruiser-tank comeback lifeline.",

  // ── Magic resist ───────────────────────────────────────────────────────────
  "Spirit Visage":          "HP, MR, haste; amplifies all your healing/regen/lifesteal by 20% — MR for sustain-based fighters.",
  "Force of Nature":        "MR, move speed, regen; stacking MR + MS — vs heavy sustained magic damage or to close on mages.",
  "Kaenic Rookern":         "HP, big MR and a magic shield after avoiding magic damage — vs poke/burst mages.",
  "Abyssal Mask":           "HP, MR, haste; nearby enemies take 12% more magic damage — a tank into a magic-damage team to amp your AP.",
  "Hollow Radiance":        "HP, MR, regen and a burning aura + on-kill AoE — MR frontline vs AP with waveclear.",

  // ── On-hit / attack speed ──────────────────────────────────────────────────
  "Nashor's Tooth":         "AP, attack speed, haste — on-hit AP for spell-and-auto casters (Kayle, Teemo, AP on-hitters).",
  "Wit's End":              "Attack speed, MR and on-hit magic that stacks MR — vs AP while you're auto-attacking (bruiser/skirmisher).",
  "Blade of The Ruined King": "AD, attack speed, lifesteal; on-hit %current-HP + an active slow-nuke — the anti-tank DPS/dueling item.",
  "Guinsoo's Rageblade":    "AD, AP and stacking attack speed/AP with on-hit conversion — on-hit scaling for hybrid auto-attackers.",
  "Terminus":               "AD, attack speed; on-hit magic + alternating resistances and armor pen — on-hit plus durability for extended fighters.",
  "Kraken Slayer":          "AD, attack speed, MS; every third hit deals bonus %missing-HP damage — the on-hit/anti-bruiser marksman core.",
  "Runaan's Hurricane":     "70% attack speed; bolts hit two extra targets and apply on-hit — waveclear/AoE for on-hit ADCs vs multi/frontline comps.",

  // ── AP mages (damage) ──────────────────────────────────────────────────────
  "Liandry's Torment":      "AP, HP, magic pen and a %current-HP burn — vs tanks and high-HP teams.",
  "Malignance":             "AP, mana, haste; ult haste and a magic-resist-shredding burn under your ult — for ult-reliant mages.",
  "Shadowflame":            "AP, magic pen; crits low-HP targets for 20% more — burst pen vs squishy targets.",
  "Rabadon's Deathcap":     "120 AP and +30% amplify — the raw AP multiplier once you already have AP items.",
  "Void Staff":             "AP + 35% magic pen — vs enemies stacking magic resist.",
  "Zhonya's Hourglass":     "AP, armor and a 2.5s invulnerable stasis — vs AD burst/assassins, or to bait cooldowns.",
  "Rylai's Crystal Scepter":"AP, HP; your spells slow the target — perma-slow to kite and stick (DoT/battlemages).",
  "Lich Bane":              "AP, mana, MS; a big Spellblade proc on your auto after a spell — for spell-weaving burst (Fizz, Kassadin).",
  "Stormsurge":             "AP, magic pen, MS and a delayed burst nuke that pops on kills — assassin/burst-mage pick pressure.",
  "Hextech Rocketbelt":     "AP, HP, haste; a dash that fires missiles — gap-close and burst for AP that lacks mobility.",
  "Blackfire Torch":        "AP, mana, haste; a DoT that ramps your AP per enemy hit — extended AoE mage damage.",
  "Riftmaker":              "AP, HP, haste; ramping damage + omnivamp in fights and AP from bonus HP — for AP bruisers in sustained fights.",
  "Cosmic Drive":           "AP, HP, haste and move speed on damaging champs — the kite/skirmish haste-mage item.",
  "Bloodletter's Curse":    "AP, HP, haste; your magic damage shreds a target's MR — single-target AP elimination (Rumble, Singed).",
  "Demonic Embrace":        "AP, HP; a %max-HP burn and AP from bonus HP — durable AP vs tanky teams.",
  "Horizon Focus":          "AP, haste; hitting from range reveals and amplifies your damage — artillery/poke mage vs immobile targets.",
  "Luden's Echo":           "AP, mana, haste; burst echoes + waveclear on the first spell of a rotation — the burst-mage first item.",
  "Cryptbloom":             "AP, 30% magic pen, haste and a heal-nova on nearby takedowns — magic pen vs stacked MR.",
  "Hextech Gunblade":       "AD, AP, omnivamp and a slow-nuke active — the hybrid sustain/burst item for AP fighters (Akali).",

  // ── AP scaling / mana ──────────────────────────────────────────────────────
  "Archangel's Staff":      "AP + mana that charges into Seraph's, with AP off your max mana — the scaling mana-mage core.",
  "Rod of Ages":            "HP, mana and AP that all scale over 10 minutes — the greedy scaling item (Kassadin, Ryze).",
  "Seraph's Embrace":       "Huge mana, AP from mana and a mana-shield active — survivability + scaling for mana mages.",
  "Mejai's Soulstealer":    "Cheap AP that stacks big AP + haste while snowballing — only when far ahead and unlikely to die.",
  "Manamune":               "AD + mana charging into Muramana, with AD off max mana — for mana-hungry AD casters/marksmen (Corki, Ezreal).",

  // ── Crit / marksman ────────────────────────────────────────────────────────
  "Infinity Edge":          "AD, crit; crits deal 250% instead of 200% — the crit-damage core once you're around 40%+ crit.",
  "Bloodthirster":          "AD, lifesteal and an overheal shield — sustain and safety for crit ADCs.",
  "Phantom Dancer":         "Attack speed, crit, MS and move-through-units — self-peel/kite crit item vs dive.",
  "Statikk Shiv":           "Attack speed, crit, MS and an energized AoE magic proc — waveclear + teamfight chip for ADCs.",
  "Rapid Firecannon":       "Attack speed, crit, MS and an energized attack with bonus range — poke/first-hit range for ADCs.",
  "Essence Reaver":         "AD, haste, crit; Spellblade + mana on-hit after abilities — for ability-reliant AD (Draven, casters).",
  "Navori Flickerblade":    "Attack speed, crit, MS; attacks refund basic-ability cooldowns — for ability-reliant crit carries (Yasuo, Yone, Xayah).",
  "Stormrazor":             "AD, attack speed, crit and an energized slow-nuke + MS — poke/tempo marksman burst.",
  "Mortal Reminder":        "AD, armor pen, crit and Grievous Wounds — anti-heal for crit ADCs vs lifesteal/healing.",
  "Fiendhunter Bolts":      "Attack speed, crit; ult haste and a crit-burst after ulting — ult-tempo ADC item, strongest vs squishy comps.",

  // ── Anti-heal (Grievous Wounds) ────────────────────────────────────────────
  "Morellonomicon":         "AP + Grievous Wounds on champs below 40% HP — the AP anti-heal vs healing comps.",
  "Chemtech Putrifier":     "AP, haste, heal power; your damage applies Grievous Wounds — the enchanter/AP anti-heal.",
  "Oblivion Orb":           "Cheap AP + a Grievous Wounds component — rush vs a single healer, then build Morellonomicon.",
  "Chempunk Chainsword":    "AD, HP, haste + Grievous Wounds — the cheaper bruiser anti-heal vs drain/lifesteal.",
  "Bramble Vest":           "Cheap armor + Grievous Wounds when hit — rush early vs AD auto-attackers or a healing lane.",

  // ── Enchanter / support ────────────────────────────────────────────────────
  "Redemption":             "AP, haste, mana regen and a global heal + true-damage zone — the teamfight save/execute enchanter item.",
  "Mikael's Blessing":      "HP, mana regen, heal power; the active cleanses CC and heals an ally — vs chain-CC on your carry.",
  "Locket of the Iron Solari": "HP, armor and a team shield active — vs burst/AoE to protect the group.",
  "Knight's Vow":           "HP, armor, haste; take a share of your ally's damage and heal off theirs — bind to a fed carry to keep them alive.",
  "Echoes of Helia":        "AP, HP, haste, mana; soul charges heal on a heal/shield — the poke-and-heal enchanter item.",
  "Moonstone Renewer":      "AP, HP, haste, mana; your heals/shields chain to another ally — the teamfight enchanter multiplier.",
  "Ardent Censer":          "AP, haste; your heals/shields grant allies attack speed — for pairing with auto-attack carries.",
  "Dream Maker":            "HP + regen; heals/shields grant an ally on-hit magic and damage reduction — the enchanter buff item.",
  "Zeke's Convergence":     "HP, armor, MR, haste; your ult summons a slowing damage storm — the engage-tank support item.",
  "Imperial Mandate":       "AP, haste, mana; immobilised enemies are marked for bonus team damage, plus ability haste — for CC-heavy mage/engage supports.",
  "Bloodsong":              "Support finisher; a Spellblade that marks champs for bonus damage — the AD/poke support option.",
  "Shurelya's Battlesong":  "AP, haste, MS, mana and an active team 30% move-speed — the engage/kite enchanter item.",
  "Solstice Sleigh":        "Support finisher; CCing enemies near allies heals and grants move speed — the tank/engage support option.",
  "Staff of Flowing Water": "AP, haste, heal power; healing/shielding an ally grants you both AP + haste — for pairing with a mage/AP carry.",
  "Celestial Opposition":   "Support finisher; damage reduction after being hit and a slow — the defensive/enchanter option vs burst.",
  "Zaz'Zak's Realmspike":   "Support finisher; %max-HP magic explosions on ability damage — the AP/poke support option (Brand, Zyra, Vel'Koz).",
  "Dawncore":               "AP, heal power, mana regen; scales your heals/shields off mana regen — the late-game enchanter scaling item.",
  "Bandlepipes":            "HP, haste, resistances; slowing/immobilising grants you + nearby allies move and attack speed — the engage/poke support buff.",
  "Vigilant Wardstone":     "HP, haste, resistances, extra ward caps and a stat boost from your items — a late-game vision/utility pickup for supports/tanks.",
  "World Atlas":            "The support quest starter — earns gold from assisting, then upgrades into Runic Compass and a finished support item.",
  "Runic Compass":          "The mid-tier support item — completes the quest into your chosen finisher (Bloodsong/Solstice/Celestial/Dream Maker/Zaz'Zak's).",

  // ── Newer / additional build items ─────────────────────────────────────────
  "Dusk and Dawn":          "AP, attack speed, HP, haste; after an ability your next hit deals bonus magic damage and applies on-hit twice — the ability-haste tech item (Azir, Shen, Volibear).",
  "Winter's Approach":      "HP, mana, haste that converts mana into HP and upgrades into Fimbulwinter — a durable mana item for tanky supports/casters (Sona, Nautilus).",
  "Bastionbreaker":         "AD, 22 lethality, haste; your ability damage adds true damage and takedowns snowball you — a burst lethality item for one-shot divers/junglers (Viego, Talon).",
  "Actualizer":             "AP, mana, haste; the active briefly super-charges your spell damage, shields and heals — a burst-window item for mana-scaling mages.",
  "Blade of The Ruined King": "AD, attack speed, lifesteal; on-hit %current-HP + an active slow-nuke — the anti-tank DPS/dueling item.",

  // ── Boots ──────────────────────────────────────────────────────────────────
  "Plated Steelcaps":       "Armor boots that cut auto-attack damage by 10% — vs AD auto-attackers / AD lanes.",
  "Mercury's Treads":       "MR boots + 35% tenacity — vs magic damage or heavy CC.",
  "Sorcerer's Shoes":       "15 magic-pen boots — the default for AP damage.",
  "Berserker's Greaves":    "Attack-speed boots — the default for on-hit/crit ADCs.",
  "Ionian Boots of Lucidity": "Ability- and summoner-haste boots — for combo/roam-reliant casters and assassins.",
  "Boots of Swiftness":     "Move-speed boots that reduce slows — kiting, roaming and slow-heavy matchups.",
  "Gluttonous Greaves":     "Boots with omnivamp — sustain-while-kiting for melee skirmishers.",
  "Swiftmarch":             "Upgraded move-speed boots with slow resist and adaptive force from your move speed — for roaming and kiting fighters (Garen, Nasus).",

  // ── Vision / trinkets ──────────────────────────────────────────────────────
  "Control Ward":           "Denies enemy vision and reveals stealth/traps — buy one most backs to control objectives.",
  "Stealth Ward":           "Free timed wards for lane/objective safety — the default early trinket.",
  "Farsight Alteration":    "A long-range throwaway ward for deep/objective vision — the default late-game trinket.",
  "Oracle Lens":            "Clears enemy wards and reveals traps — take it when you need to deny vision or push in.",
};

export default ITEM_RATIONALE;
