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
      { name: "Poke / stack", steps: "You gain a Mortal Will stack on every spell cast and basic attack (Q gives 2 when it hits a champion); at 5 stacks your NEXT basic ability is empowered — empowered Q hits far harder and refunds, empowered W is a longer point-and-click stun, empowered E is a full-duration invulnerable block. Tap Q on cooldown to stay topped up and poke for free." },
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
    otp: "Adrian Riven & AloisNL", role: "Top",
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

  Sion: {
    otp: "TheBausffs", role: "Top",
    identity: "The proxy split-pusher. Baus's Sion doesn't lane — he walks PAST the enemy wave to farm it from behind (proxy), denying the enemy top laner XP and gold while pressuring their tower. Built AD/lethality rather than tank, his charged Q one-shots waves and squishies, and his passive zombie form means a well-timed death is free damage or a free objective — the famous \"good death\".",
    combos: [
      { name: "Proxy loop", steps: "Walk past the wave into the enemy jungle/behind their tower, clear the incoming wave with Q, deny their laner, then shove and repeat. Ward your escape routes." },
      { name: "Full Q", steps: "Hold Q (Decimating Smash) to full charge for the long knock-up — flash or E-slow to land it, then auto + passive damage." },
      { name: "Good death", steps: "When you die, Glory in Death revives you as a zombie — use it to Q the whole team, take an objective, or trade your death for a teamfight win. Never die with the zombie unused." },
    ],
    spikes: [
      "Proxy tempo from level 1: you're generating a gold/XP lead just by denying the enemy laner.",
      "First lethality item (Youmuu's / Eclipse): your Q starts deleting waves and squishies instantly.",
    ],
    watchOut: [
      "Proxy is high-risk — dying with your passive already on cooldown (a \"bad death\") just feeds. Track the enemy jungler.",
      "You have almost no early combat presence pre-6 outside the zombie — it's a macro playstyle, not a lane-kill one.",
      "Hard waveclear and ranged pokers who can catch you proxying (or a camping jungler) shut the strategy down.",
    ],
    itemNotes: "Baus builds AD/lethality-crit (Youmuu's, Eclipse, Black Cleaver, crit) — NOT tank — so his one-shot Q and zombie do real damage. The point of the build is that even your death threatens the enemy.",
    matchups: "Proxy sidesteps lane bullies entirely and starves immobile laners. Struggles into champions with the waveclear + mobility to punish the proxy and end you before the zombie pays off.",
  },

  RekSai: {
    otp: "Azzapp", role: "Jungle",
    identity: "A tremor-sense early-game ganker with the fastest, healthiest clear in the game. Rek'Sai burrows to see enemies through walls and heal, tunnels around the map for absurd mobility, and ganks with a point-and-click knock-up into a true-damage execute. Her whole game is snowballing an early lead before she tapers off.",
    combos: [
      { name: "Gank", steps: "Burrowed Q (Prey Seeker) or a tunnel to arrive → W (Unburrow) knock-up → auto → E (Furious Bite, true-damage execute when Fury is full)." },
      { name: "Tunnel play", steps: "Burrowed E lays a tunnel — use two tunnels for map mobility, escapes, or to reposition a gank. Burrow to heal off Fury between camps." },
      { name: "Global pick", steps: "R (Void Rush) marks a target with your autos, then dashes to them anywhere on the map — pick a low target across the fight or secure a kill." },
    ],
    spikes: [
      "Levels 2–3: your knock-up gank into a no-dash lane is a near-guaranteed kill.",
      "First bruiser item: your E execute + clear speed let you snowball tempo across the map.",
    ],
    watchOut: [
      "You fall off mid-game — press your early lead hard; a slow game is a lost game.",
      "Manage Fury: the burrowed heal and the empowered E execute both depend on it. Don't waste it clearing.",
      "Tunnels have cooldowns — getting caught with them down and no escape is how Rek'Sai dies.",
    ],
    itemNotes: "Bruiser lethality (Eclipse → Black Cleaver / Sundered Sky) keeps her ganks lethal while surviving skirmishes. Prioritise the early spike and boots so your level-3 ganks convert.",
    matchups: "Dominates the early game against farming junglers and any lane she can knock-up gank. Struggles into scaling junglers and disengage-heavy comps once she's past her prime.",
  },

  Hecarim: {
    otp: "Dantes", role: "Jungle",
    identity: "A movement-speed snowball ganker. Hecarim converts move speed into attack damage (Warpath), so the whole build and playstyle is about being faster than everyone — E-charging out of fog to knock a lane into a wall, ramping around the map, and using R to fear-engage a grouped team. Stack speed, gank relentlessly, snowball.",
    combos: [
      { name: "Charge gank", steps: "E (Devastating Charge) ramps move speed the longer you run — approach from fog, then knock the target into a wall/your team for a stun-length, and Q (Rampage) on repeat." },
      { name: "R engage", steps: "R (Onslaught of Shadows) sends spectral riders that fear, then ghost-charges you in — flash-R or fog-R onto a grouped enemy team, W (Spirit of Dread) for the fight heal." },
    ],
    spikes: [
      "Move-speed item spike (Dead Man's Plate / boots): your E ganks become unavoidable and your Warpath AD ramps.",
      "Level 6: R turns a gank into a teamfight-winning fear engage.",
    ],
    watchOut: [
      "Your damage comes FROM your speed — anything that slows or roots you (Frozen Heart auras, cripples) neuters you. Itemise around it.",
      "Once you E-commit you can't turn around — pick fights you can finish, not coin-flips.",
      "A telegraphed charge is a dodged charge; approach from unwarded fog and vary your angles.",
    ],
    itemNotes: "Stack movement speed — Dead Man's Plate is core to the speed-stacking build. Stormsurge / Trinity Force provide the burst on top of the Warpath AD.",
    matchups: "Runs down immobile carries and punishes grouped, slow comps. Struggles into heavy slows/roots and disengage that kills his momentum before he connects.",
  },

  Chogath: {
    otp: "Tenshi", role: "Top",
    identity: "A scaling monster who becomes literally un-killable. Every champion Feast (R) is a true-damage execute AND a permanent stack of health — so Tenshi's Cho'Gath is about surviving the early lane, farming R stacks off big minions and champions, and snowballing into a giant that Q-W-locks a target and eats them whole.",
    combos: [
      { name: "Lockdown", steps: "Q (Rupture) knock-up → W (Feral Scream) silence → E (Vorpal Spikes) AoE autos → R (Feast) to true-damage execute for a permanent HP stack." },
      { name: "Stack up", steps: "Use R on the biggest minions / cannon waves and any low champion — every kill Feast is +permanent HP. A fully stacked Cho'Gath is a raid boss." },
    ],
    spikes: [
      "R stacks: each Feast is permanent size and health — the more you land, the harder you are to kill.",
      "First item (Rocketbelt / Riftmaker for AP, or an HP-tank item): your Q-W combo starts bursting or your body becomes a wall.",
    ],
    watchOut: [
      "You're weak and slow early — play safe, farm, and survive to your scaling. Dying early denies your stacks.",
      "R is a true-damage execute — greeding for a champion Feast and missing it wastes your whole tempo. Take guaranteed stacks off minions.",
      "%max-HP damage and true damage counter your HP stacking — a giant health bar isn't invincible into those.",
    ],
    itemNotes: "AP Hail-of-Blades (Rocketbelt → Riftmaker) turns the Q-W combo into burst; the full-tank Grasp / Heartsteel line turns your R stacks into an immovable frontline. Pick the build to the game.",
    matchups: "Out-scales almost every lane into an unkillable giant and locks down immobile targets. Struggles into early aggression and %HP / true-damage champions who ignore his health.",
  },

  TahmKench: {
    otp: "NoArmWhatley", role: "Top",
    identity: "An unkillable grey-health bruiser. Whatley's Tahm Kench top out-sustains every trade with Thick Skin, stacks his tongue passive for a stun, and carries the single highest-value save/pick button in the game (R Devour). He wins by refusing to die — soaking damage into grey health, then converting it into a shield and walking the enemy down.",
    combos: [
      { name: "Trade", steps: "Q (Tongue Lash) to poke and apply a stack → auto to keep stacking → at 3 stacks Q stuns; E (Thick Skin) turns the grey health you took into a shield mid-fight." },
      { name: "Engage / save", steps: "W (Abyssal Dive) to dive + knock up, or R (Devour) to eat an enemy (remove them from the fight / isolate) — or eat an ALLY to pull them out of danger and spit them to safety." },
    ],
    spikes: [
      "Grasp + first HP item: your grey-health sustain makes short trades free.",
      "Level 6: Devour is a game-warping save or pick on a long cooldown — every cast should matter.",
    ],
    watchOut: [
      "E (Thick Skin) is your sustain — spending grey health as a shield at the wrong time wastes the whole trade. Bank it, then convert.",
      "R is a huge cooldown; a wasted Devour leaves you without your best tool for 2+ minutes.",
      "Low mobility — %max-HP damage, true damage and ranged pokers who never let you stack chip you down.",
    ],
    itemNotes: "HP-stacking bruiser (Heartsteel / Riftmaker) makes his grey health and shields enormous; a warden line (Sunfire/Jak'Sho) is the tankier alternative. Grasp + HP shards fuel the sustain identity.",
    matchups: "Out-sustains melee bruisers and eats squishy divers with R. Struggles into %HP / true-damage tops and ranged lanes that deny his stacking.",
  },

  MasterYi: {
    otp: "Cowsep", role: "Jungle",
    identity: "The definitive hyper-carry. Master Yi does nothing until he has items — then Alpha Strike resets on kills, Highlander refreshes his cooldowns and immunises him to slows, and he single-handedly runs a fed enemy team down. The whole game is farming safely to your spike and then picking the fight where you get resets.",
    combos: [
      { name: "Duel", steps: "E (Wuju Style, true damage) on → Q (Alpha Strike) INTO the target to dodge an incoming ability (you're untargetable mid-Q) → auto → Q resets on any kill." },
      { name: "Reset run", steps: "R (Highlander) for move speed + slow immunity → auto a low target → its death refreshes Q and R → dash to the next. In a won fight you chain kills across the whole team." },
      { name: "Meditate dodge", steps: "W (Meditate) channels damage reduction + heal — use it to survive a burst combo or Ignite, then continue." },
    ],
    spikes: [
      "First attack-speed / on-hit item (Kraken / BORK): your Q-resets start snowballing kills.",
      "Level 6 + 2 items: Highlander turns any pick into a team wipe.",
    ],
    watchOut: [
      "Hard CC and exhaust are death — you can't Q out of a stun and a single exhaust deletes your damage. Fight where the enemy CC is already used.",
      "You are useless early — DON'T force fights before items. Farm, take objectives with your team, and scale.",
      "You need a frontline and resets — dive the squishy that gives you a Q reset, not the tank.",
    ],
    itemNotes: "On-hit (Blade of the Ruined King / Kraken Slayer / Guinsoo's) or crit — both convert your uptime into DPS. Attack speed and lifesteal are what make the reset pattern unstoppable; prioritise the first-item spike above all.",
    matchups: "Farms squishy, low-CC comps into oblivion. Hard-countered by chain CC, exhaust and heavy peel that never let him reset.",
  },

  Yasuo: {
    otp: "Yassuo", role: "Mid",
    identity: "A mobile crit skirmisher with the highest outplay ceiling in the game. Yasuo stacks Q into a tornado, dashes through units with E to kite and reposition, blocks key projectiles with Wind Wall, and turns any knock-up — his own tornado or an ally's CC — into a full-screen R. Double crit chance means he spikes hard on two items.",
    combos: [
      { name: "Weave", steps: "E (Sweeping Blade) through a minion to dash + deal damage → Q during the dash to keep stacking → repeat to kite. Q on cooldown builds toward the tornado." },
      { name: "Knock-up → R", steps: "Land Q3 (Steel Tempest tornado) to knock up → R (Last Breath) to teleport above them for the airborne burst + armor shred. Or R off any ally knock-up." },
      { name: "Wind Wall", steps: "W blocks the enemy's key projectile — a hook, an ult, an ADC's autos in a fight. Blocking the RIGHT ability is the whole skill." },
    ],
    spikes: [
      "Two crit items (Immortal Shieldbow / IE + crit): your passive double-crit makes your combo delete squishies.",
      "Level 6 with a knock-up source: R becomes a reliable pick + teamfight tool.",
    ],
    watchOut: [
      "Wind Wall has a long cooldown — panic-walling the wrong spell loses the fight. Hold it for the ability that matters.",
      "E shares a cooldown per target — you can't dash through the same unit twice, so plan your escape path.",
      "Squishy and weak early into all-in tops/mids (Malphite, Renekton, Pantheon) and point-and-click CC — respect levels 1–3 and scale.",
    ],
    itemNotes: "Immortal Shieldbow or Infinity Edge into crit is the core, with Blade of the Ruined King for the %HP + steroid into tanks. Berserker's Greaves and the first crit item are the real power spike.",
    matchups: "Beats immobile pokers whose projectiles he can wall and dodge. Struggles into hard engage, point-and-click CC and early lane bullies.",
  },

  Renekton: {
    otp: "SoloRenektonOnly", role: "Top",
    identity: "The archetypal early lane bully. Renekton builds Fury to empower his abilities, and his whole game is dominating the level 1–6 window with a point-and-click stun all-in, snowballing a lead, and closing the game before he falls off. A behind Renekton is a liability; an ahead one ends games by 15 minutes.",
    combos: [
      { name: "All-in (lvl 3+)", steps: "E (Slice) through a minion to gap-close → W (Ruthless Predator) — empowered with 50+ Fury for the longer stun → auto → Q (Cull the Meek) for the AoE heal → E (Dice) out." },
      { name: "Fury management", steps: "Poke with a low-Fury Q/W to build to 50, then unload the empowered combo. An empowered W is a much longer stun — save it for the all-in, not a poke." },
    ],
    spikes: [
      "Level 3: your E-W-E all-in wins almost every melee lane — look for first blood.",
      "First item (Eclipse) + level 6: your burst and R's tankiness let you dive and snowball.",
    ],
    watchOut: [
      "You fall off hard — every game is a race to convert your early lead into towers, roams and objectives before you're outscaled.",
      "Don't waste an empowered (50-Fury) ability on a bad trade — the empowered W stun is your kill button.",
      "Ranged tops (Vayne, Quinn, Kennen) and scaling tanks (Malphite, Cho'Gath) beat you after the early game — force it while you're strong.",
    ],
    itemNotes: "Eclipse-first is the current identity (two-hit proc + shield fuels the all-in); Black Cleaver → Death's Dance is the durable follow-up into heavy AD. Boots + the first item are what make your combo start killing.",
    matchups: "Bullies melee scalers and immobile laners in the early game. Struggles into ranged tops, parry/peel (Fiora, Poppy) and anything that survives to out-scale him.",
  },

  Shaco: {
    otp: "Pink Ward", role: "Jungle",
    identity: "A deception-based early ganker and invader. Shaco cheeses lanes with boxes and a stealth-crit opener, splits attention with his clone, and — on the AD-crit build — simply one-shots a squishy from stealth. His power is entirely front-loaded: snowball the early map or become a nuisance that never quite closes.",
    combos: [
      { name: "Burst", steps: "Q (Deceive) to stealth and appear BEHIND the target for the backstab crit → auto → E (Two-Shiv Poison) → a second Q if it resets. R (Hallucinate) clone to bait, split damage, or apply a second explosion." },
      { name: "Box cheese", steps: "Pre-place W (Jack in the Box) in a bush or over a wall → engage → the boxes fear and burst the target. Classic level-2/3 box gank." },
    ],
    spikes: [
      "Level 2–3: a box + Q gank one-shots an over-extended laner.",
      "First lethality/crit item: your stealth opener deletes squishies outright.",
    ],
    watchOut: [
      "You fall off if you don't snowball — convert your early cheese into a real lead fast.",
      "Boxes need setup time and telegraph the play; pink wards and sweepers hard-counter your whole kit.",
      "Squishy and useless in a straight fight — you're a picker and a splitter, not a front-to-back teamfighter.",
    ],
    itemNotes: "AD crit (Youmuu's / Collector / Infinity Edge) for the one-shot backstab identity; the AP box build is the alternative for zone control. Lethality first makes your Q opener lethal.",
    matchups: "Cheeses greedy junglers and squishy, wardless lanes. Struggles into vision-heavy, tanky comps that shrug off the burst and clear his boxes.",
  },

  Udyr: {
    otp: "Trick2g & Federals1", role: "Jungle",
    identity: "A stance-dancing bruiser with a lightning-fast clear. Udyr has no auto-attack downtime — he weaves his four stances (Bear speed/stun, Tiger burst, Turtle sustain, Phoenix AoE), and awakening a stance a second time empowers it. The game is clearing fast, running lanes down with Bear, and snowballing on-hit/bruiser stats.",
    combos: [
      { name: "Gank", steps: "E (Bear Stance) for ramping move speed to close, then the second Bear cast stuns → Q (Tiger) for the on-hit burst → W (Turtle) shields you through the counter." },
      { name: "Stance weave", steps: "Awaken the stance you need twice for the empowered effect — Phoenix (R) for AoE clear/teamfights, Tiger for single-target, Turtle to survive. Keep an ability on cooldown at all times." },
    ],
    spikes: [
      "First item: your fast clear and Bear ganks start snowballing tempo.",
      "Level 6 / empowered stances online: your dueling and teamfight presence spike.",
    ],
    watchOut: [
      "Your only hard CC is the second Bear cast — if you get kited off it you do nothing. Itemise and path to stick to targets.",
      "Manage stance cooldowns — being caught mid-swap with everything down is when Udyr dies.",
      "Disengage and kite comps (blinks, long slows, ranged pokers) beat him; he wants to get on top and stay there.",
    ],
    itemNotes: "Bruiser on-hit (per the meta jungle build) keeps his clear fast and his duels winning; move speed helps Bear stick. Trick2g's classic identity is the run-you-down bruiser — build to reach targets and out-sustain the trade.",
    matchups: "Runs down immobile carries and out-clears most junglers. Struggles into heavy kite/disengage and long-range CC that never lets him connect.",
  },
};

export const otpGuideOf = (dd) => OTP_GUIDES[dd] || null;
