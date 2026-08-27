// ─────────────────────────────────────────────────────────────────────────────
//  otpGuides.js — curated "How to Play" deep-dives, seeded from champion OTP /
//  one-trick creators (credited per entry). Keyed by champ.dd. When an entry
//  exists the How-to-Play tab surfaces it; otherwise the tab derives its guide
//  from the champion's abilities, build, runes, counters and synergies.
//
//  Fields:
//   otp        — the creator the tips are sourced from (credit shown in-app)
//   role       — the role the guide is written for
//   identity   — one-paragraph "who this champion is / win condition"
//   combos     — [{ name, steps }] the bread-and-butter sequences
//   spikes     — power-spike bullets (when you're strongest)
//   watchOut   — mistakes / danger bullets for a first-timer
//   itemNotes  — champion-specific itemization wisdom beyond the core path
//   matchups   — free-text on who you beat / who beats you and why
// ─────────────────────────────────────────────────────────────────────────────
export const OTP_GUIDES = {
  Pantheon: {
    otp: "Spear Shot", role: "Top",
    identity: "An early-game lane bully and roaming assassin. Pantheon wins levels 1–6 with his point-and-click stun and passive crits, then uses Grand Starfall to decide side lanes before 20 minutes. He falls off late, so every early lead has to be converted into roams, plates and objectives.",
    combos: [
      { name: "Poke / stack", steps: "Tap Q (Comet Spear) on cooldown to chip the enemy and build Mortal Will — the 5th stack empowers your next ability." },
      { name: "All-in (lvl 3+)", steps: "W (Shield Vault) point-and-click stun → empowered Q → E (Aegis Assault) to block their counter-damage → weave autos. Save W's stun to lock a dash or a channel." },
      { name: "Roam kill", steps: "Once W→E is online, R (Grand Starfall) into a side lane for a global gank — land on top of the target, W-stun, empowered Q, E." },
    ],
    spikes: [
      "Levels 1–3: the W-stun + passive-crit combo makes you a hard lane bully — look for a first-blood all-in at 3.",
      "Level 6: Grand Starfall turns map pressure into kills — roam to a winning side lane.",
      "Two lethality items (Voltaic Cyclosword → Cyclone/Cleaver): your burst one-shots squishies.",
    ],
    watchOut: [
      "You fall off hard past 20 minutes — force the game while you're ahead; don't sit and farm.",
      "Aegis Assault (E) only blocks damage from the direction you face — turn it toward the biggest threat.",
      "Against tanks and scalers (Malphite, Cho'Gath, Dr. Mundo) you can't kill them 1v1 — trade short and roam instead.",
    ],
    itemNotes: "Lethality-tempo (Voltaic Cyclosword) is the identity build for snowballing; the Eclipse bruiser line is the safer, higher-winrate pick into heavy AD. Grab an early Serrated Dirk and boots to power-spike your roams.",
    matchups: "Strong into immobile mages and melee scalers early — Anivia, Karthus, Ryze, Sion, Lux. Struggles into Malphite, Kassadin, Cho'Gath, Dr. Mundo and Morgana (spell shield eats your stun).",
  },

  Briar: {
    otp: "LoganJg", role: "Jungle",
    identity: "A blood-frenzy diver with one of the fastest clears in the game. Briar invades freely, rushes her first damage item, and plays extremely aggressively on that spike — her W sends her into an uncontrollable frenzy, so the skill is choosing WHEN to commit and chaining it into a target you can finish.",
    combos: [
      { name: "Standard dive", steps: "W1 (enter frenzy) → Q gap-close → auto → recast W2 early, then cancel your own frenzy with E when the target is low." },
      { name: "Stun buffer", steps: "W1 → Q → recast W2 early → buffer E right as the stun ends for the knockback + heal." },
    ],
    spikes: [
      "First damage item — this is your big spike; play very aggressively and look to invade or dive the moment it's done.",
      "During W (frenzy) auto-attack as much as possible: it ramps and feeds the W2 execute damage.",
    ],
    watchOut: [
      "W removes your control — you charge the nearest enemy. Only pop it when you can commit to a target you can kill.",
      "E (Chilling Scream) is your only self-peel and frenzy-cancel — hold it to reposition or to finish, not on cooldown.",
      "You're low-range and squishy before items; a failed dive with no E leaves you dead. Respect hard CC.",
    ],
    itemNotes: "Rush your first damage/lifesteal item for the spike, then build toward sustained-damage bruiser items. Attack speed and lifesteal make her W execute and self-healing snowball.",
    matchups: "Wins scrappy early skirmishes and punishes greedy pathing with free invades. Struggles into ranged pokes and hard peel comps that can kite her frenzy.",
  },

  Riven: {
    otp: "Adrian Riven", role: "Top",
    identity: "A mechanical snowball skirmisher who lives and dies by animation-cancelling. Riven wants short, repeatable trades that stack Runic Blade, a level-2/3 lead, and then a mid-game where her all-in one-shots squishies. She is entirely tempo — a lead is a snowball, a deficit is a corpse.",
    combos: [
      { name: "Weave (BnB)", steps: "Q → auto (cancel the Q wind-down) → Q → auto → Q → auto — every ability empowers the next auto via passive. This is the trade you repeat all game." },
      { name: "All-in", steps: "W (Ki Burst stun) → empowered auto → Q gap-close → E (Valor shield) to survive the counter → R (Wind Slash) to execute. Flash mid-Q to close the gap without spending E." },
      { name: "Q3-cancel", steps: "Cancel the 3rd Q's knockback animation with R or Flash to instantly fire it — the core mechanic that separates good Rivens from great ones." },
    ],
    spikes: [
      "Level 2–3: W-stun + Q trades win almost every melee matchup — look for the all-in.",
      "First item (Eclipse / lethality): your combo starts one-shotting squishies.",
      "Mid-game: with R up you have a repeatable execute — force skirmishes around objectives.",
    ],
    watchOut: [
      "You have no range and no sustained damage — if the trade goes long you lose. Hit-and-run, don't brawl.",
      "E (Valor) is your only defensive tool; spending it to engage leaves you exposed to the counter-all-in.",
      "Ranged tops (Vayne, Quinn, Teemo) and early bullies (Renekton, Pantheon) beat your level 1–2 — respect it and scale.",
    ],
    itemNotes: "Eclipse-first lethality is the snowball identity; Black Cleaver → Death's Dance is the safer bruiser line into heavy AD or when you need to survive extended fights. Boots + a first-item spike are what let your combo start killing.",
    matchups: "Beats short-range melee bruisers and immobile targets she can stick to. Struggles into ranged pokers and grasp tanks who out-sustain her short trades.",
  },

  Zed: {
    otp: "TTobias", role: "Mid",
    identity: "A lethality assassin whose whole game is shadow management and roaming to delete a carry. Zed farms the lane safely with WEQ poke, then uses level 6 + a two-item spike to jump the backline, mark a target, and reposition out with his shadow before the enemy can answer.",
    combos: [
      { name: "Poke", steps: "W (Living Shadow) out → E (Shadow Slash, slow + energy refund) → Q (Razor Shuriken) through yourself and the shadow for double damage → recall W to reposition." },
      { name: "All-in burst", steps: "R (Death Mark) onto the target → E → Q → auto, drop W behind them, then swap to the shadow (W recast) to dodge CC and finish as the mark pops." },
    ],
    spikes: [
      "Level 6: Death Mark turns a poke lead into a kill — look to all-in or roam.",
      "Eclipse → Youmuu's (2 items): your combo one-shots most squishies and your roams are lethal.",
    ],
    watchOut: [
      "Shadow (W) is your only escape AND your damage — never waste it. Hold the swap for after the burst.",
      "Zhonya's, Guardian Angel, exhaust and heavy armor hard-counter your all-in — bait the Zhonya's before committing R.",
      "You're weak into spell-shield and point-and-click CC mages (Malzahar, Lissandra, Kassadin) — farm, roam, don't force lane.",
    ],
    itemNotes: "Eclipse-first for the early spike, then Youmuu's for roam speed, then Collector/Serylda's to finish. Serylda's is your answer to the first bit of armor squishies buy.",
    matchups: "Deletes immobile mages and greedy carries. Struggles into spell-shield / hard-CC mids and comps that itemise armor + Zhonya's early.",
  },

  Katarina: {
    otp: "Ronges", role: "Mid",
    identity: "A reset-snowball assassin built entirely around dagger management. Katarina is average until she gets a pick; then Voracity resets her cooldowns on every takedown and she chains kills across a fight. The skill is placing and pathing to daggers to weave Shunpo blinks into free damage.",
    combos: [
      { name: "Full combo", steps: "Q (Bouncing Blade) to place a dagger → E (Shunpo) to a target for reposition → W (Preparation) drops a dagger → E through the dagger to pick it up (empowered) → R (Death Lotus) on top of them." },
      { name: "Reset chain", steps: "Land a takedown → passive resets E and R → Shunpo to the next target and repeat. In teamfights, only ult once daggers are down and the enemy is low." },
    ],
    spikes: [
      "Level 6: Death Lotus turns a pick into a multi-kill.",
      "First AP item (Malignance / Hextech): your Q → E → R starts one-shotting squishies.",
    ],
    watchOut: [
      "Any point-and-click CC cancels Death Lotus — buy Zhonya's and ult AFTER the key CC is used.",
      "You need a reset to snowball a fight — dive the low target, not the tank.",
      "Weak into roaming pressure and spell-shields (Malzahar, Galio) — she wants a lane she can freely poke and all-in.",
    ],
    itemNotes: "Malignance / Hextech Rocketbelt for the burst spike, Zhonya's as a core defensive pick against any burst or CC, then Rabadon's to close. Don't skip Zhonya's — it's what lets you ult safely.",
    matchups: "Snowballs immobile squishy mids into oblivion. Struggles into spell-shields, hard CC, and roam-heavy laners who deny her a free lane.",
  },

  LeeSin: {
    otp: "Siegmeyer", role: "Jungle",
    identity: "The definitive early-game playmaker. Lee Sin has one of the highest skill ceilings in the game — ward-hops, insecs and animation cancels — and his whole plan is to snowball a lead through level 2–3 ganks and repeated skirmishes before he falls off. Every mechanic exists to make plays happen faster.",
    combos: [
      { name: "Gank", steps: "Q (Sonic Wave) to tag → recast Q (Resonating Strike) to dash in → E (Cripple) slow → auto → second Q if the mark holds." },
      { name: "Ward-hop", steps: "Place a ward over a wall → W (Safeguard) to the ward to reposition, then E-auto to chase or escape." },
      { name: "Insec kick", steps: "Flash or ward behind the enemy → R (Dragon's Rage) to kick them back into your team — the game-winning pick tool." },
    ],
    spikes: [
      "Levels 2–3: your Q-Q gank into a no-dash lane is a near-guaranteed kill — path to the most gankable lane.",
      "Early item lead: press your advantage with repeated skirmishes before your mid-game fall-off.",
    ],
    watchOut: [
      "You fall off hard — if you're not ahead by 15 minutes you're a worse version of every other jungler. Force plays early.",
      "Missing Q loses the fight; buffer your ward-jumps and insecs so a dodge doesn't leave you stranded.",
      "Don't over-invade even/losing — your value is ganks and objective setups, not farming.",
    ],
    itemNotes: "Eclipse-first is the standard — the two-hit proc plus shield powers your dive. Prioritise the early spike and boots so your ganks convert.",
    matchups: "Wins the early game against farm-first junglers and any lane he can gank at 3. Struggles into scaling junglers and comps that punish a whiffed engage.",
  },

  Irelia: {
    otp: "Jet1k1", role: "Top",
    identity: "A snowball skirmisher who compounds with every Q reset. Irelia is weak at levels 1–2 and mana-starved, but once she lands E and starts resetting Bladesurge off minions and kills, she becomes an unkillable blender that ramps attack speed and disarms the enemy in fights.",
    combos: [
      { name: "All-in", steps: "E (Flawless Duet — place both blades to stun) → Q (Bladesurge) onto the stunned target → auto → W (Defiant Dance) to block their biggest counter-hit → keep resetting Q on adds." },
      { name: "Wave-dash", steps: "Q resets on any target it kills — dash through a low minion to close gaps or escape, then re-engage with E." },
    ],
    spikes: [
      "Level 6: Vanguard's Edge (R) wall + disarm turns a skirmish into a kill and zones the backline.",
      "Two items (BOTRK / Trinity): your reset chain becomes lethal and your fights become unloseable duels.",
    ],
    watchOut: [
      "You are weak and mana-hungry at levels 1–2 — don't force trades before you have E and a mana item.",
      "W (Defiant Dance) is channelled and slows you — time it to block a big spell, not on cooldown.",
      "Ranged tops (Vayne, Quinn), Fiora and early bullies (Pantheon, Renekton) beat your early game — farm and scale.",
    ],
    itemNotes: "Blade of the Ruined King is the identity first item for the %HP shred and steroid; Trinity Force is the flexible alternative. Mana sustain early is what fixes her weak laning.",
    matchups: "Beats melee bruisers she can stick to and reset on. Struggles into ranged pokers, Fiora's parry, and grasp tanks who out-trade her early.",
  },

  Kayn: {
    otp: "Karasmai", role: "Jungle",
    identity: "A form-choice diver: Kayn farms and skirmishes to unlock either Rhaast (a lifesteal bruiser who wins extended fights) or Shadow Assassin (a burst diver who one-shots squishies). The whole early game is orb progress and picking the right form for the enemy comp.",
    combos: [
      { name: "Gank", steps: "E (Shadow Step) through a wall to appear behind the lane → W (Blade's Reach) knock-up → Q (Reaping Slash) dash-through → auto." },
      { name: "Assassinate", steps: "As Shadow Assassin: E in → R (Umbral Trespass) into the target for the timer → Q → W → burst them out of the ult." },
    ],
    spikes: [
      "Form transformation (~level 6–9): your identity comes online — snowball immediately after transforming.",
      "First item after form: Rhaast's drain fights or SA's one-shot both spike hard here.",
    ],
    watchOut: [
      "You're weak and squishy PRE-form — path safely, farm orbs, and avoid coin-flip fights until you transform.",
      "Pick your orb form by the enemy: Rhaast into AD / bruiser comps, Shadow Assassin into squishy / AP comps. The wrong form loses games.",
      "E (wall-walk) telegraphs your gank — vary your approach so lanes don't see you coming.",
    ],
    itemNotes: "Rhaast builds bruiser (Cleaver / Sundered Sky / drain); Shadow Assassin builds lethality (Eclipse / Youmuu's / Collector). Commit your item path to the form you're getting.",
    matchups: "Shadow Assassin farms squishy back-line comps; Rhaast out-sustains AD-heavy teams. Struggles when forced to fight before transforming.",
  },

  Kassadin: {
    otp: "Quantum", role: "Mid",
    identity: "The scaling anti-mage. Kassadin is one of the weakest laners in the game before level 6 and one of the strongest champions after level 16 — his entire game is surviving the early lane, hitting his Riftwalk spike, and then blinking onto and deleting the enemy carries with an unkillable, mobile snowball.",
    combos: [
      { name: "Assassinate", steps: "R (Riftwalk) in → E (Force Pulse) slow → Q (Null Sphere) → auto → R out. Each Riftwalk stacks bonus damage, so chaining blinks ramps your burst." },
      { name: "Anti-mage", steps: "Hold Q (Null Sphere) to spell-shield their key ability, then all-in — Q blocking a combo flips most mage matchups." },
    ],
    spikes: [
      "Level 6: Riftwalk gives you mobility and a kill threat for the first time.",
      "Level 16 + Rod of Ages / Archangel's: you're a mobile, unkillable one-shot machine — this is the game you're playing for.",
    ],
    watchOut: [
      "You are extremely weak before 6 — play safe, farm under tower, and survive. Dying early ruins your scaling.",
      "Q only shields ONE spell — save it for their combo starter, not to poke.",
      "Aggressive early roamers (Talon, Zed, LeBlanc) want to end you before you scale — ward and respect their level 3–6.",
    ],
    itemNotes: "Rod of Ages first for the HP/mana/scaling, then Zhonya's or Archangel's. Everything is about reaching the late game intact — sacrifice lane pressure for safety.",
    matchups: "Destroys immobile mages and any comp once he scales. Struggles brutally into early-game assassins and roamers who deny his level 1–6.",
  },
};

export const otpGuideOf = (dd) => OTP_GUIDES[dd] || null;
