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

  Velkoz: {
    otp: "Azzapp", role: "Support",
    identity: "Long-range artillery that deletes targets with true damage. Every third hit from a different Vel'Koz ability procs Organic Deconstruction for a burst of true damage, so his whole game is landing his poke combo to research a target, then finishing with a channelled laser that ignores resistances. Azzapp plays him as a pure skill-shot poke machine — chip the lane, then convert.",
    combos: [
      { name: "Poke combo", steps: "E (Tectonic Disruption) to knock up → Q (Plasma Fission — recast to split it around a corner) → W (Void Rift) on the immobilised target. Each different ability adds a passive stack; the 3rd procs true damage." },
      { name: "Execute", steps: "R (Life Form Disintegration Ray) — the channelled laser 'researches' anyone it hits, and researched targets take true damage from it. Open with the combo, then R the low target to finish through their MR." },
    ],
    spikes: [
      "First AP item (Liandry's / Malignance / Luden's): your poke starts chunking half a health bar per combo.",
      "Level 6: R turns your poke lead into kills and zones objectives from a screen away.",
    ],
    watchOut: [
      "Everything is a skill-shot — if you can't land Q/W/E you do nothing. Aim the Q split around walls and lead your E.",
      "You're immobile and squishy — positioning is your only defence; one gap-close onto you and you're dead.",
      "R is a long channel that roots you — only cast it with vision and peel, or you'll get collapsed on mid-laser.",
    ],
    itemNotes: "Liandry's / Malignance for the burn + haste; on the support build, Zaz'Zak's Realmspike scales your poke and the World Atlas quest funds it. Sorcerer's Shoes + a first AP item is the real poke spike.",
    matchups: "Out-ranges and pokes down immobile lanes and objective setups. Struggles into hard engage, assassins and any dive that closes his range before he can combo.",
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

  Graves: {
    otp: "Kirei", role: "Jungle",
    identity: "A short-range auto-attack juggernaut in a marksman's body. Graves reloads two shells and does enormous burst when both land point-blank, gaining armour by dashing and standing near enemies. Kirei's Graves is a fast-clearing, skirmish-first jungler — manage your shells, dash to angle your cone, and win every early 1v1.",
    combos: [
      { name: "Burst", steps: "E (Quickdraw) dash toward the target to close and stack True Grit armour → Q (End of the Line) at point-blank so the ricochet re-hits → both shells auto → R (Collateral Damage) cone to execute." },
      { name: "Reload discipline", steps: "You have only two shells and a reload window — never start a fight mid-reload. E resets partially on hit, so weave it to keep your dashes and armour up." },
    ],
    spikes: [
      "First item (Eclipse / lethality or crit): your two-shell burst starts one-shotting squishies.",
      "Level 6: Collateral Damage adds a huge execute and a second escape.",
    ],
    watchOut: [
      "Getting caught with no shells / mid-reload is death — track your ammo before committing.",
      "You're short-range for a marksman — W (Smoke Screen) is your disengage and blind; use it to break line of sight.",
      "Heavy CC and peel that stops you from auto-attacking shut your damage down.",
    ],
    itemNotes: "Lethality (Eclipse → Youmuu's → Serylda's) is the snowball skirmish build; a crit line scales harder into longer games. Attack speed / reload haste keeps your shells flowing.",
    matchups: "Wins early skirmishes and out-duels most junglers 1v1. Struggles into hard CC, disengage and tanks that outlast his shell windows.",
  },

  Belveth: {
    otp: "Kirei", role: "Jungle",
    identity: "An attack-speed skirmisher who scales infinitely. Bel'Veth stacks attack speed off takedowns, dashes in four directions with Q to weave and reposition, and — after consuming a Void coral from an epic monster — transforms into her true form for a teamfight and objective-control power spike. Kirei plays her as a fast-clearing, coral-hunting duellist.",
    combos: [
      { name: "Duel", steps: "W (Above and Below) knock-up → E (Royal Maelstrom) channel on the target for lifesteal + damage-reduction while it hammers the lowest-HP enemy → Q (Void Surge) dashes to stay on top / dodge." },
      { name: "True form", steps: "R (Endless Banquet) — consume the Void remains a big monster or an epic objective drops to transform: bonus attack speed, out-of-combat move speed, and the ranged form that dominates teamfights and Baron/Dragon." },
    ],
    spikes: [
      "On-hit item (Kraken Slayer / Terminus): your attack-speed identity comes online.",
      "First true-form transformation: a huge, spike in dueling, objective and teamfight power.",
    ],
    watchOut: [
      "Q dashes are per-direction and go on cooldown — don't blow all four and get stranded.",
      "E is a committal channel — start it on a target you can finish, with vision.",
      "Before stacks/items she's weak and easily kited; hard CC locks her out of the fight.",
    ],
    itemNotes: "On-hit (Kraken Slayer / Guinsoo's / Terminus) plus attack speed and a bruiser item for survivability. Her Q dashes and E want raw attack speed to snowball the stacks.",
    matchups: "Shreds tanks and objectives and out-scales the game. Struggles into burst assassins and hard-CC comps that stop her from stacking.",
  },

  MonkeyKing: {
    otp: "Kirei", role: "Jungle",
    identity: "A snowball bruiser-diver built around deception. Wukong dashes in, shreds armour, then drops a clone and stealths to bait skillshots, dodge, or reset the fight before spinning up a game-winning AoE knock-up. Kirei's Wukong is a fast-clearing skirmisher that dives the backline and turns fights with the clone + ult.",
    combos: [
      { name: "Dive", steps: "E (Nimbus Strike) dash to the target for attack speed → Q (Crushing Blow) armour shred + extended range → auto → W (Warrior Trickster) clone to dodge their answer or fake a retreat." },
      { name: "Teamfight", steps: "Flash or E in → R (Cyclone) winds up and knocks up everyone nearby while ramping — combo the clone's damage and Q shred into it for a full team-knockup." },
    ],
    spikes: [
      "First item (Trinity Force / Black Cleaver): your dive burst and Q shred start deleting targets.",
      "Level 6: Cyclone is a fight-winning AoE knock-up on a short-ish cooldown.",
    ],
    watchOut: [
      "The clone (W) is your whole outplay tool — throw it to bait a key skillshot or break line of sight, not on cooldown.",
      "Your dives are committal; go in when you can knock up multiple targets or finish the carry.",
      "Disengage and kite comps that never let you connect blunt his all-in.",
    ],
    itemNotes: "Bruiser (Trinity Force / Black Cleaver → Death's Dance, Steelcaps) so you survive the dive and keep shredding. Kirei leans on the reliable snowball skirmish build over glass-cannon lethality.",
    matchups: "Dives squishies and wins scrappy skirmishes with the clone + ult. Struggles into disengage, kite and heavy peel that deny the all-in.",
  },

  Singed: {
    otp: "6pek", role: "Top",
    identity: "A proxy-and-kite juggernaut who wins by \"mind control\" — making the enemy chase him to their doom. Singed runs a permanent poison trail, flings key targets, and proxies waves behind the enemy tower to starve his laner. 6pek's Singed doesn't fight fair; he loops the map trailing poison, baiting the whole enemy team into chasing him into their own tower and his team.",
    combos: [
      { name: "Fling combo", steps: "E (Fling) an enemy backward — onto W (Mega Adhesive) to ground and root them in your Q (Poison Trail). Fling a diver away from your carry, or an over-eager enemy into your team." },
      { name: "Proxy", steps: "Run past the enemy wave (Noxious Slipstream move speed through units) and clear their incoming wave behind their tower with Q, denying the enemy laner XP and gold while you kite anyone who follows." },
    ],
    spikes: [
      "Rylai's / Liandry's: your poison trail chunks and permaslows anyone chasing you.",
      "Level 6 (Insanity Potion): the stat + tenacity buff makes you nearly impossible to catch or kill in a chase.",
    ],
    watchOut: [
      "Proxying is high-risk — track the enemy jungler; getting collapsed on with no escape feeds.",
      "Fling is your only real cast that matters — a mistimed flip (throwing the wrong target, or the right one the wrong way) loses the fight.",
      "You have no burst — you win by outlasting and repositioning enemies, not by killing them outright. Ranged poke and %HP damage are your bane.",
    ],
    itemNotes: "AP-tank: Rod of Ages / Riftmaker / Rylai's / Liandry's — HP + AP so your poison hurts and you never die in the chase. Boots of Swiftness or Force of Nature keep you slippery.",
    matchups: "Kites melee and immobile laners and turns teamfights into chase-throws. Struggles into ranged pokers and hard CC / %max-HP damage that punish him for running at them.",
  },

  Shen: {
    otp: "xPetu", role: "Top",
    identity: "A global-presence tank who wins the MAP, not the 1v1. Shen pressures a sidelane, then uses Stand United to shield and teleport to a fighting ally anywhere on the Rift — turning every skirmish into a 5v4. xPetu's Shen is pure macro: apply pressure, watch the map, and R to the fight that decides the game while peeling the carry with a taunt.",
    combos: [
      { name: "Fight", steps: "E (Shadow Dash) taunts the enemy into you → Q (Twilight Assault) for empowered, ramping autos → W (Spirit's Refuge) to block all their auto-attack damage while you and your carry keep hitting." },
      { name: "Global", steps: "R (Stand United) shields an ally anywhere and channels a teleport to them — use it to win a 2nd location, save a diving ally, or turn a cross-map fight. Every ability also procs Ki Barrier for a small shield." },
    ],
    spikes: [
      "Level 6: Stand United gives you map-wide impact — a well-timed R wins fights two lanes away.",
      "First tank item: your taunt + shields make you an immovable peel/engage frontline.",
    ],
    watchOut: [
      "R is your whole champion — its value is timing and target, not spamming it. Waste it and you're a weak-damage tank for 3 minutes.",
      "E is your only gap-close and peel — hold it to lock the enemy carry or catch a diver, not to poke.",
      "You do little solo damage; if the game has no fights to swing into, your map pressure is your only win-con — keep a sidelane pushing.",
    ],
    itemNotes: "Tank (Sunfire Aegis / Iceborn Gauntlet / Thornmail) with Grasp — HP and resists so your taunt-and-peel keeps your carry alive. Build the resist your lane/comp demands.",
    matchups: "Pressures the map and peels carries into oblivion with global R + taunt. Struggles into %max-HP and true damage and poke comps that shred through his shields before a fight starts.",
  },

  Kindred: {
    otp: "CastFM & chiv", role: "Jungle",
    identity: "A marksman-jungler that scales with map knowledge. Every Mark of the Kindred you claim off a camp or champion is permanent attack damage and range, so the game is pathing to your marks, kiting skirmishes with Q, and holding R — a no-death zone — for the single most impactful moment of a fight.",
    combos: [
      { name: "Kite fight", steps: "E (Mounting Dread) — after 3 autos it detonates for a slow + execute-scaling burst → Q (Dance of Arrows) to reposition and gain attack speed → W (Wolf's Frenzy) to zone and heal." },
      { name: "R clutch", steps: "R (Lamb's Respite) drops a zone where nothing can die and everyone heals at the end — bait an all-in, deny an execute, or turn a lost fight. Timing R is the whole champion." },
    ],
    spikes: [
      "Mark stacks (4+): each is permanent AD + range — a stacked Kindred out-ranges every ADC.",
      "First item (Kraken Slayer / on-hit): your kite pattern starts shredding.",
    ],
    watchOut: [
      "Contest and path to your marks — a Kindred denied her marks is a weak, short-range jungler.",
      "R is your identity: waste it early or hold it too long and you lose the fight. Learn the exact timing.",
      "You're squishy and get run down if caught out of position — kite, don't brawl.",
    ],
    itemNotes: "Build like a scaling ADC — Kraken Slayer / on-hit into crit, attack speed and lifesteal. Your marks already give the AD lead; items buy the DPS to convert it.",
    matchups: "Out-scales with marks and kites immobile divers. Struggles when invaded early and denied marks, or into all-in junglers who catch her before she stacks.",
  },

  Lucian: {
    otp: "LLTrigger", role: "Bot",
    identity: "An aggressive, mobile lane bully. Lucian pairs every ability with a double-shot from Lightslinger, dashes to reposition mid-fight, and wants to snowball the early game before scaling hypercarries out-range him. LLTrigger's Lucian is all tempo — weave abilities and autos, dash-cancel, and all-in the second the enemy mis-steps.",
    combos: [
      { name: "Lightslinger weave", steps: "Q (Piercing Light) or W (Ardent Blaze) → immediately auto to fire the double-shot passive → E (Relentless Pursuit) to dash + reset spacing → auto again. Never cast without an auto behind it." },
      { name: "All-in", steps: "W to mark → auto (double-shot) → Q → E through them → R (The Culling) barrage to finish. Hitting W's mark refunds E, so you can dash twice in an extended fight." },
    ],
    spikes: [
      "First item (Essence Reaver / Navori): your double-shot combo starts bursting supports and squishies.",
      "Level 6: The Culling adds a huge finishing barrage to your all-in.",
    ],
    watchOut: [
      "E resets on hitting W's mark and passive procs — mismanaging your dash leaves you with no escape.",
      "You out-damage everyone early but fall off — force your lead before enemy ADCs scale past your range.",
      "Disengage and long-range poke keep you from getting your combo off; play around your support's engage.",
    ],
    itemNotes: "Crit + ability-haste (Essence Reaver → Navori Flickerblade / Infinity Edge) so your double-shots and dashes stay online. Berserker's Greaves and the first item are the tempo spike.",
    matchups: "Bullies immobile supports and short-range ADCs in the early game. Struggles into poke, disengage and hypercarries that out-scale and out-range him.",
  },

  Naafiri: {
    otp: "Raveydemon", role: "Mid",
    identity: "A pack-dog assassin who's forgiving to pilot but lethal when she commits. Naafiri fights alongside her packmates — chip with daggers, then dash in with the whole pack to burst a squishy, and use her ultimate to hunt a fleeing target across the map. Raveydemon plays her as a point-and-click-ish diver that snowballs mid and roams.",
    combos: [
      { name: "All-in", steps: "Q (Darkin Daggers) to poke and leave daggers → W (The Call of the Pack) dash in so you and the hounds all bite → auto → E (Eviscerate) lunge for the finish + heal. Recast Q while on top for the pickup damage." },
      { name: "Hunt", steps: "R (Hounds' Pursuit) to gain move speed, vision and extra packmates — run a low target down across the map, then W + E to execute." },
    ],
    spikes: [
      "Level 6 + first lethality item: your pack all-in one-shots a squishy.",
      "Any early kill: the hounds and lethality snowball you into an unkillable diver.",
    ],
    watchOut: [
      "The hounds are a big chunk of your damage — AoE waveclear kills them, so don't all-in right after they've been cleared.",
      "W and E are committal dashes — dive when you can finish, not into a wall of peel.",
      "You want a squishy lane you can all-in; disengage and heavy AoE blunt the pack.",
    ],
    itemNotes: "Lethality (Eclipse / Youmuu's / Profane Hydra / Serylda's) for the burst-and-stick pattern. The dogs scale with your AD, so more lethality = a stronger pack.",
    matchups: "Deletes immobile squishy mids and roams to snowball side lanes. Struggles into AoE waveclear that clears her pack and comps that peel her off the target.",
  },

  Kalista: {
    otp: "Mirrai", role: "Bot",
    identity: "The highest-skill kite ADC in the game. Kalista hops with every attack (Martial Poise), stacking spears into targets that E rips out for an execute, while her R binds her to her support for a game-swinging launch. Mirrai's Kalista is relentless orb-walking — never stop moving, stack spears, and Rend for the kill.",
    combos: [
      { name: "Hop-kite", steps: "Attack → immediately move (Martial Poise hops you) → attack → repeat, stacking Pierce (Q) spears in the target. You can kite through terrain and never stand still." },
      { name: "Rend", steps: "Once spears are stacked, E (Rend) rips them out for heavy damage + a slow — it also executes and refreshes, so a low target dies and you keep pressure." },
      { name: "R play", steps: "R (Fate's Call) — your bound support dashes into you and is launched forward as an engage, or you pull yourself out of a gank. Coordinate it with your duo." },
    ],
    spikes: [
      "On-hit / attack-speed item: your spear stacking and Rend detonations ramp hard.",
      "A fed support with a good R engage turns Fate's Call into a fight-starting nuke.",
    ],
    watchOut: [
      "She is mechanically brutal — orb-walk hops and spear management take real practice.",
      "Rend is mana-hungry and single-use per cast — don't waste the stacks; time the execute.",
      "Squishy with a fixed hop distance; hard engage that ignores the kite ends her, and she falls off late.",
    ],
    itemNotes: "On-hit (Blade of the Ruined King → Runaan's / Guinsoo's) maximises spear stacking, or a crit line for burst Rends. Attack speed is what fuels the whole pattern.",
    matchups: "Kites and executes immobile targets and out-DPSes early. Struggles into hard engage, heavy CC and the late game where crit hypercarries overtake her.",
  },

  Qiyana: {
    otp: "Kaitania", role: "Mid",
    identity: "A terrain-based element assassin with one of the highest one-shot ceilings in the game. Qiyana grabs an element to change her Q and her identity — wall for burst, river for the R stun-combo, brush for camo/speed — then dashes in and deletes a carry. Kaitiana's Qiyana is all about element management and the R-into-wall teamfight.",
    combos: [
      { name: "Assassinate", steps: "W (Terrashape) grab wall element → E (Audacity) dash to the target → Q (Edge of Ixtal) → auto (Royal Privilege empowered hit) to one-shot a squishy." },
      { name: "R combo", steps: "Grab river with W → R (Supreme Display of Talent) into a wall — the shockwave ripples off terrain to root and burst a whole team. This is your teamfight winner." },
    ],
    spikes: [
      "Level 6 + first lethality item: your E-Q-auto combo one-shots squishies.",
      "Any terrain nearby: with a wall or river you have burst or a team-wide root ready.",
    ],
    watchOut: [
      "Element management is everything — grab the wrong element and your combo does nothing. Pre-grab before you engage.",
      "R needs terrain to shine; in open areas it's just a single-target knock-up.",
      "Very squishy — a whiffed engage or getting CC'd first means you die. Buy Zhonya's, respect their pick.",
    ],
    itemNotes: "Lethality (Profane Hydra / Youmuu's / Eclipse → Serylda's) for the one-shot, with Zhonya's as the safety pick. Boots + first item is your kill spike.",
    matchups: "One-shots squishies and roots teams off terrain. Struggles into tanks, point-and-click CC and open-area fights with no walls to combo off.",
  },

  Poppy: {
    otp: "Relise", role: "Top",
    identity: "The anti-mobility bruiser-tank. Poppy hard-counters dashes and engage — W stops enemy dashes dead, E pins a target to a wall for a long stun, and R zones or displaces whole teams. Relise's Poppy is a durable, disruptive front-line that turns the enemy's mobility into their weakness while pressuring the map.",
    combos: [
      { name: "Wall stun", steps: "E (Heroic Charge) carries the target — line it up into a wall for the long stun → Q (Hammer Shock) slam for the delayed burst → auto. Iron Ambassador (passive) shield toss adds poke." },
      { name: "Deny + zone", steps: "W (Steadfast Presence) grounds and blocks all enemy dashes while giving you resists — pop it as they engage. R (Keeper's Verdict): tap for an AoE knock-back, or charge for a long single-target displacement to remove a diver." },
    ],
    spikes: [
      "First item: your E-into-wall combo becomes a reliable pick.",
      "Level 6: R is a fight-defining zone/displacement on demand.",
    ],
    watchOut: [
      "E only stuns if you hit a wall — in open lanes it's just a reposition. Know your angles.",
      "R has two modes — a mistimed full-charge that flings the enemy carry to SAFETY is a throw. Usually tap it.",
      "Low burst — you win by disrupting, not deleting. Ranged pokers and immobile scalers you can't pin are awkward.",
    ],
    itemNotes: "Bruiser/tank (Iceborn Gauntlet / Sunfire → Plated Steelcaps / Jak'Sho) with Grasp — HP and resists so your CC lands and sticks. Build the resist the lane demands.",
    matchups: "Shuts down dash- and engage-heavy comps and peels carries. Struggles into ranged poke and immobile scalers who out-range her disruption.",
  },

  Viego: {
    otp: "Mino", role: "Jungle",
    identity: "A reset skirmisher who chains kills by wearing his enemies' corpses. Kill a target and Sovereign's Domination lets Viego possess it — full heal, their abilities, and a reset on his own kit — so a won fight cascades into a team wipe. Mino's Viego is about winning the first pick, then snowballing the possession chain.",
    combos: [
      { name: "All-in", steps: "W (Spectral Maw) charge a stun → Q (Blade of the Ruined King) for the empowered every-3rd on-hit → auto → E (Harrowed Path) mist for camo/speed → R (Heartbreaker) to dash-execute the low target." },
      { name: "Possess chain", steps: "The instant an enemy dies near you, possess the corpse: you get their abilities, a big heal and a Q reset. Use the possessed ultimate, then burst out and repeat on the next target." },
    ],
    spikes: [
      "First on-hit item (Blade of the Ruined King / Kraken): your Q melts targets and fuels the reset chain.",
      "Any pick in a teamfight: one possession can snowball into three.",
    ],
    watchOut: [
      "Possession is timing — grab the RIGHT corpse (a bruiser to survive, a mage for burst) and use its ult before it expires.",
      "W is a chargeable stun — over-charging telegraphs it; tap for a quick lock.",
      "Between resets he's squishy; single-target peel and denying the first kill shut the whole engine down.",
    ],
    itemNotes: "On-hit (Blade of the Ruined King → Kraken Slayer / Hexdrinker) so your Q shreds and your heals scale. Attack speed keeps the empowered-Q cadence up.",
    matchups: "Snowballs fights with resets and out-duels most junglers. Struggles into single-target peel, disengage, and any comp that denies him the first kill.",
  },

  Tryndamere: {
    otp: "Hurra", role: "Top",
    identity: "An unkillable split-push crit duelist. Tryndamere stacks Fury into guaranteed crits, and his ultimate makes him literally unable to die for a few seconds — so he all-ins, survives the burst, and heals back up. Hurra's Trynd is a macro split-pusher: pressure a sidelane, force the map, and duel anyone who answers.",
    combos: [
      { name: "Duel", steps: "E (Spinning Slash) dash in → auto (Battle Fury crits) → W (Mocking Shout) to slow them and cut their AD → Q (Bloodlust) to heal off your Fury when low." },
      { name: "Guaranteed kill", steps: "When you'd die, R (Undying Rage) — you can't drop below 1 HP for 5 seconds. Pop it, keep attacking, and Q-heal back to full as it ends." },
    ],
    spikes: [
      "First crit item (Immortal Shieldbow / Infinity Edge): your Fury crits start bursting.",
      "Level 6: Undying Rage turns every all-in into a coin flip you win.",
    ],
    watchOut: [
      "R is a timer, not immunity — use it BEFORE you die, then Q-heal; popping it late wastes it.",
      "You have no gap-close beyond E and get kited/CC'd hard — W's slow is your only stick.",
      "Grievous Wounds, heavy CC and %max-HP damage counter your heal-and-crit pattern.",
    ],
    itemNotes: "Crit (Immortal Shieldbow / Infinity Edge → Phantom Dancer) for the Fury payoff and the Shieldbow lifeline. Split-push items and boots to pressure the map.",
    matchups: "Out-duels melee and split-pushes relentlessly. Struggles into ranged kite, hard CC and Grievous Wounds that stop the heal.",
  },

  Ambessa: {
    otp: "Voxtrik", role: "Top",
    identity: "A chain-dash combo skirmisher. Ambessa strings her mobility together — Drakehound's Step, Lacerate and her Q recast let her weave in and out repeatedly — to land a burst combo and reset onto the next target. Voxtrik's Ambessa is a high-tempo bruiser that snowballs skirmishes with relentless dashes.",
    combos: [
      { name: "Combo", steps: "E (Lacerate) dash to engage → Q (Cunning Sweep, then recast Sundering Slam) for the cleave + backstep → weave a Drakehound's Step dash → auto. Chaining the dashes is what lets you commit and still get out." },
      { name: "Pick", steps: "R (Public Execution) locks onto a target and dashes to them for a heavy finisher — open with it on a caught target or use it to close the gap for the full combo." },
    ],
    spikes: [
      "First bruiser item: your combo starts killing squishies while you survive the trade.",
      "Level 6: Public Execution gives you a reliable pick / gap-close.",
    ],
    watchOut: [
      "Her power is chaining dashes — burn them all with no follow-up and you're stranded mid-fight.",
      "W (Repudiation) is a defensive window — use it to eat a key spell, not on cooldown.",
      "Committal by nature; disengage and hard CC that interrupt the chain punish an over-eager engage.",
    ],
    itemNotes: "Bruiser (Eclipse / Black Cleaver → Sterak's / Death's Dance, Steelcaps) so the dive survives and the combo keeps shredding. Build to stick and out-trade.",
    matchups: "Runs down immobile carries and wins scrappy skirmishes with her mobility. Struggles into disengage, kite and CC that break the dash chain.",
  },

  Fizz: {
    otp: "Esruc", role: "Mid",
    identity: "An AP burst assassin with the safest all-in tool in the game — a moment of untargetability. Fizz dashes in, dodges the enemy's answer with Playful/Trickster, and lands a delayed shark for a game-ending pick. Esruc's Fizz is about baiting cooldowns with E, then one-shotting a squishy from stealth-hop range.",
    combos: [
      { name: "Assassinate", steps: "R (Chum the Waters) sticks a fish to the target → Q (Urchin Strike) dash through them for on-hit → W (Seastone Trident) empowered hit → E (Playful/Trickster) to hop untargetable over their CC as the shark lands and knocks up + bursts." },
      { name: "Bait", steps: "E first to dodge their key spell / go untargetable, then all-in once their answer is on cooldown." },
    ],
    spikes: [
      "Level 6 + first AP item (Hextech Rocketbelt / Malignance): your R-combo one-shots squishies.",
      "Lich Bane / Shadowflame online: even a partial combo deletes a carry.",
    ],
    watchOut: [
      "E's untargetable window is your survival — time it to dodge the burst or CC, not just to poke.",
      "R can be side-stepped before the shark surfaces; lead it or use it after a Q gap-close.",
      "Squishy — point-and-click CC that catches you as E ends, and heavy armor stacking, shut you down.",
    ],
    itemNotes: "AP burst (Hextech Rocketbelt / Malignance → Shadowflame / Lich Bane) with Zhonya's as the safety buy. Boots + first item is your one-shot spike.",
    matchups: "Dives squishies and dodges skillshots with E. Struggles into point-and-click CC, tanks and enchanter-heavy peel.",
  },

  Zaahen: {
    otp: "SHIHAN0", role: "Top",
    identity: "A Darkin skirmish-bruiser built to weave abilities and dashes into a sustained, snowballing combo. Zaahen wants to get on top of a target, chain his glaive and rush together, and out-trade through the fight. ozneviik plays him as an aggressive lane skirmisher that compounds an early lead.",
    combos: [
      { name: "Skirmish", steps: "E (Aureate Rush) dash to engage → Q (The Darkin Glaive) for the glaive damage → auto → W (Dreaded Return) to reposition or reset the trade. Weave your dashes so you can commit and still disengage." },
      { name: "Finish", steps: "R (Grim Deliverance) is your commit / finisher — open with it on a target you can lock down, or close the gap for the full combo." },
    ],
    spikes: [
      "First bruiser item: your combo starts winning every extended trade.",
      "Level 6: your ultimate turns a won skirmish into a kill.",
    ],
    watchOut: [
      "You win extended fights, not burst trades — get on top and stay there rather than poking.",
      "Spend your mobility to commit AND escape; burning it all on the engage leaves you exposed.",
      "Kite, disengage and heavy ranged poke keep you off your target and blunt the skirmish.",
    ],
    itemNotes: "Bruiser (Eclipse / Black Cleaver → Sterak's / Death's Dance, Steelcaps) so you survive the dive and out-sustain the trade. Build to stick to targets.",
    matchups: "Out-skirmishes melee bruisers and snowballs an early lead. Struggles into ranged pokers and disengage/kite that never let him connect.",
  },

  Sett: {
    otp: "Vitoo", role: "Top",
    identity: "A front-line juggernaut brawler who turns damage taken into damage dealt. Sett soaks punishment to charge Grit, unloads it as a shielded true-damage Haymaker, stuns with Facebreaker, and suplexes the enemy carry into their own team with The Show Stopper. Vitoo's Sett wins extended fights and swings teamfights with a single R.",
    combos: [
      { name: "Brawl", steps: "E (Facebreaker) pull the enemy in and stun → W (Haymaker) release the Grit you've stored as a shield + true-damage punch → Q (Knuckle Down) empowered autos + move speed to stick. Take a little damage first so W is charged." },
      { name: "Pick", steps: "R (The Show Stopper) grabs an enemy — usually the fed carry — and slams them where you aim, dealing AoE damage and slowing. Suplex them INTO your team, then E-W to lock the fight." },
    ],
    spikes: [
      "First bruiser item: your W punch and sustained autos start winning every extended trade.",
      "Level 6: The Show Stopper is a fight-defining pick / disengage on demand.",
    ],
    watchOut: [
      "W needs Grit — you build it by TAKING damage, so don't W on an empty bar. Trade, then punch.",
      "E is your only engage and CC — hold it to catch or peel, not to poke.",
      "Low mobility — ranged pokers and %max-HP / kite comps chip you down before you connect.",
    ],
    itemNotes: "Bruiser (Stridebreaker / Trinity Force → Sterak's Gage / Death's Dance, Plated Steelcaps). HP and sustain make your Grit shield and true-damage punch enormous.",
    matchups: "Wins extended brawls and picks carries with R. Struggles into ranged poke, kite and %max-HP damage that never let him get his hands on the enemy.",
  },

  Darius: {
    otp: "RaiderGO", role: "Top",
    identity: "The definitive lane bully. Darius stacks Hemorrhage bleed with every hit, and at 5 stacks his passive gives him Noxian Might — a huge AD spike that turns a won trade into a kill. Noxian Guillotine executes and RESETS on a kill, so one pick in a teamfight can cascade into a quadra. Your whole game is dominating the lane, then split-pushing a lead into towers.",
    combos: [
      { name: "Trade", steps: "Q (Decimate) at max range so the OUTER blade hits (inner handle deals less and applies no bleed) and heals you per champion hit → auto to add a bleed stack → walk away. Repeat until 5 stacks pop Noxian Might." },
      { name: "All-in", steps: "E (Apprehend) pulls them in + knocks up → auto (bleed) → Q for the heal + stack → auto → R (Noxian Guillotine) once their bleed stacks make the execute lethal. R resets on takedown — look for the next target." },
    ],
    spikes: [
      "5 bleed stacks (Noxian Might): a massive AD buff — this is when you kill, so bait it out and all-in.",
      "Level 6: Guillotine executes anyone whose bleed you've stacked; the reset makes teamfights snowball.",
    ],
    watchOut: [
      "Hitting only Q's inner handle is the classic beginner mistake — it does far less and no bleed. Space for the blade.",
      "You have one gap-close (E) and no escape — burning it to engage a losing fight is death.",
      "Ranged tops (Quinn, Vayne, Kennen) and kite/disengage counter you hard; so does Grievous Wounds on your Q heal.",
    ],
    itemNotes: "The lethality-tempo (Youmuu's Ghostblade-first) line is the current snowball build; Black Cleaver → Sterak's / Death's Dance is the durable bruiser alternative. Prioritise the first item + boots so your all-in kills before they scale.",
    matchups: "Crushes melee scalers and immobile laners in the early game. Struggles into ranged pokers, kiting bruisers, and anything that survives to out-scale him.",
  },

  Ahri: {
    otp: "Locus", role: "Mid",
    identity: "A mobile burst mage with the safest assassination pattern in the game. Ahri poke-clears with Q, chunks with W, and lands Charm to guarantee her whole combo — then triple-dashes out with Spirit Rush (which recasts on takedown). She's a roaming pick-machine: low risk, high reward, and almost impossible to punish when played patiently.",
    combos: [
      { name: "Poke", steps: "Q (Orb of Deception) — it deals magic damage out and TRUE damage on the way back, so aim so the return line clips them → W (Fox-Fire) to finish the trade." },
      { name: "Kill combo", steps: "E (Charm) is your whole combo starter — land it → Q through them → W → auto → R (Spirit Rush) to dash in and finish. Each takedown refreshes R, so a kill lets you dash again to the next." },
    ],
    spikes: [
      "Level 6 + first AP item (Malignance / Luden's): Charm into full combo one-shots a squishy.",
      "Two items: your roams reliably kill — leave lane and take over the side lanes.",
    ],
    watchOut: [
      "Everything hinges on Charm — miss E and your combo does chip damage. Cast it after they commit a dash, not on cooldown.",
      "Save at least one R dash for the escape; using all three to chase is how Ahri dies.",
      "Weak into hard-CC and long-range control mages who poke her out before she can engage.",
    ],
    itemNotes: "Malignance / Luden's for the burst spike, then Shadowflame / Rabadon's; Zhonya's if they have an assassin. Sorcerer's Shoes + first item is your roam power spike.",
    matchups: "Deletes immobile squishies and out-roams most mids. Struggles into hard CC, spell shields and long-range pokers.",
  },

  Ekko: {
    otp: "V222", role: "Mid",
    identity: "An AP assassin with a built-in undo button. Ekko stacks Z-Drive Resonance for a burst-and-speed proc, stuns with a returning W, and — the trick — Chronobreak rewinds him to where he was 4 seconds ago, healing him. That means he can dive a target, take lethal damage, and simply leave. Fearless diving is the identity.",
    combos: [
      { name: "Assassinate", steps: "W (Parallel Convergence) placed BEHIND the target so it stuns as they retreat → E (Phase Dive) dash in → Q (Timewinder) so the boomerang's return hits them → auto for the third Z-Drive proc." },
      { name: "Rewind escape", steps: "Dive with everything, then R (Chronobreak) — you teleport back along your trail, healing off the damage taken, and the arrival deals AoE damage. Dive first, decide later." },
    ],
    spikes: [
      "Level 6: Chronobreak makes every dive nearly risk-free — this is when you start assassinating.",
      "First AP item (Hextech Rocketbelt / Malignance): your W-E-Q combo one-shots squishies.",
    ],
    watchOut: [
      "R rewinds you to your position ~4s ago — check where that actually is before casting, or you'll teleport into their team.",
      "W's stun is delayed and telegraphed — place it behind or where they're going, never on top of them.",
      "Weak early before 6; play safe, farm, and don't force trades into ranged mids.",
    ],
    itemNotes: "AP burst (Hextech Rocketbelt / Malignance → Shadowflame / Lich Bane) with Zhonya's as a safety pick. In the jungle the same burst line applies with a Dark Harvest page.",
    matchups: "Dives squishy immobile mids and escapes punishment with R. Struggles into ranged poke pre-6 and point-and-click CC that catches him mid-dive.",
  },

  Evelynn: {
    otp: "HOPE", role: "Jungle",
    identity: "The purest pick assassin. From level 6 Evelynn is permanently camouflaged out of combat — she doesn't gank, she stalks. Charm marks a target for bonus damage, and her ultimate executes and repositions her out. The skill is patience: farm to 6, then hunt isolated carries and delete them before their team can react.",
    combos: [
      { name: "Execute", steps: "Charm (E is Whiplash — her charm is W, Allure): W (Allure) on the target and let it fully charge for the MR shred + slow → E (Whiplash) dash in → Q (Hate Spike) spam → R (Last Caress) to execute and blink backward out of danger." },
      { name: "Stalk", steps: "Out of combat after 6 you're camouflaged — sit in the enemy jungle or a flank, wait for a carry to walk alone, then W from stealth for the full charm." },
    ],
    spikes: [
      "Level 6 (camouflage + R): you become a true assassin — start hunting.",
      "First AP item (Lich Bane / Rocketbelt): your charm-combo one-shots a squishy outright.",
    ],
    watchOut: [
      "Pre-6 she is one of the weakest junglers alive — farm, avoid skirmishes, and do NOT force early ganks.",
      "Let W fully charge before engaging; an early-popped charm loses the MR shred and the kill.",
      "Control wards and sweepers beat camouflage — check for pinks before you commit to a flank.",
    ],
    itemNotes: "AP assassin (Lich Bane / Hextech Rocketbelt → Shadowflame / Zhonya's). Everything is about the burst window — build to one-shot, not to fight.",
    matchups: "Deletes squishy, isolated carries and punishes bad warding. Struggles into vision-heavy comps, tanks, and early-aggression junglers who invade her weak start.",
  },

  Nasus: {
    otp: "filip88sesak", role: "Top",
    identity: "The ultimate scaling juggernaut. Every last-hit with Siphoning Strike permanently increases its damage, so a farmed Nasus one-shots minions, towers and eventually champions. He survives a miserable early lane with W's massive slow and R's health/resist swell, then takes over the side lane. Stack Q, don't die, win late.",
    combos: [
      { name: "Stack", steps: "Q (Siphoning Strike) resets your auto — last-hit EVERY minion with it. Q on cooldown into minions is literally your win condition; nothing else matters as much in the first 15 minutes." },
      { name: "Duel", steps: "W (Wither) — a huge slow that cripples any auto-attacker or dasher → E (Spirit Fire) armour shred underneath them → Q for the stacked hit. R (Fury of the Sands) for the HP + resists + AoE burn when you commit." },
    ],
    spikes: [
      "~200+ Q stacks: your Q one-shots waves and hurts champions.",
      "Level 6 + first item: R turns you into an unkillable brick that can duel and dive.",
    ],
    watchOut: [
      "You are extremely weak levels 1–5 — play under tower, take the free Q stacks, and accept the lane loss.",
      "Wither (W) is your only defensive tool; hold it for the enemy's dash or their carry, not to chase.",
      "Ranged pokers, %HP damage and Grievous Wounds slow your scaling — and being perma-camped denies the stacks entirely.",
    ],
    itemNotes: "Bruiser/tank (Trinity Force or Iceborn Gauntlet → Spirit Visage / Sunfire) with Fleet or Grasp. The jungle build differs (Protoplasm Harness / Iceborn line) — HP and resists so you live to reach the stacks.",
    matchups: "Out-scales nearly every top laner and shreds towers. Struggles into ranged bullies and lane-dominant early aggression that denies his Q stacking.",
  },

  Sylas: {
    otp: "Petricite", role: "Mid",
    identity: "A drain-tank skirmisher who steals your win condition. Sylas chains for damage and a shield, whips for a slow + heal, and his ultimate HIJACKS an enemy ultimate — turning their engage or teamfight tool against them. Petricite's Sylas is about laning patiently, then choosing the perfect ult to steal.",
    combos: [
      { name: "All-in", steps: "E (Abscond/Abduct) dash in and recast to chain-pull them → Q (Chain Lash) so the delayed explosion lands on the pulled target → W (Kingmaker) for the damage + big heal → auto." },
      { name: "Ult steal", steps: "R (Hijack) copies an enemy champion's ultimate — pick the one that wins the fight (a Malphite/Amumu engage, a Lux laser, a Yasuo knock-up follow-up). Steal it BEFORE the fight, not mid-panic." },
    ],
    spikes: [
      "Level 6: whichever ult you can steal is your power spike — the enemy team decides how strong you are.",
      "First AP item (Riftmaker / Rocketbelt): your W heal and combo damage make you a real drain-tank.",
    ],
    watchOut: [
      "Choose the RIGHT ult — stealing a low-value ultimate wastes your whole cooldown.",
      "E's dash is your only escape and your engage; committing it wrong strands you in their team.",
      "Poke mages and long-range control who never let you get in range are his worst matchups.",
    ],
    itemNotes: "AP bruiser (Riftmaker / Hextech Rocketbelt → Zhonya's / Cosmic Drive) so his W heal scales and he survives the dive. The jungle page runs Conqueror with the same drain-fight identity.",
    matchups: "Out-sustains melee mids and punishes comps with strong ults to steal. Struggles into long-range poke and comps whose ultimates are useless to him.",
  },

  Warwick: {
    otp: "Krun", role: "Jungle",
    identity: "A lifesteal diver with a built-in tracker. Warwick heals on every attack, senses low-HP enemies through walls (Blood Hunt) and gains huge move speed chasing them, and his ultimate is a point-and-click suppression that guarantees a kill. Krun's tanky build makes him an unkillable gank machine that runs people down all game.",
    combos: [
      { name: "Gank", steps: "Q (Jaws of the Beast) to leap-bite and heal (hold it for the full-damage version) → W's Blood Hunt speed to stick → E (Primal Howl) if you need to tank their burst → R (Infinite Duress) to suppress and finish." },
      { name: "Hunt", steps: "W (Blood Hunt) marks anyone below 50% HP — you see them through fog and get a big speed boost. Path toward a lane that just traded and dive the low target." },
    ],
    spikes: [
      "Level 2–3: any lane whose enemy is below half HP is a free gank — Blood Hunt makes you unavoidable.",
      "Level 6: Infinite Duress is a point-and-click suppression — an almost guaranteed kill on any low target.",
    ],
    watchOut: [
      "R is a channelled suppression that can be interrupted or cleansed (QSS/Mercurial) — ult the target who can't answer it.",
      "You're weak into hard CC before items; E (Primal Howl) is your only mitigation, so save it for their burst.",
      "Grievous Wounds guts your entire sustain identity — expect it and build durability.",
    ],
    itemNotes: "The tanky jungle line (Stridebreaker → Blade of the Ruined King → Thornmail/Spirit Visage, Steelcaps) — HP and resists so your lifesteal keeps you alive through dives, per Krun's build.",
    matchups: "Snowballs any lane that takes early damage and out-sustains skirmishes. Struggles into Grievous Wounds, hard CC and comps that kite his short range.",
  },

  Garen: {
    otp: "JimmyNeutron007", role: "Top",
    identity: "A durable, simple-to-pilot juggernaut with a true-damage execute. Garen silences with Q, spins for AoE damage, gains resists with W, and Demacian Justice executes low targets outright. Perseverance regenerates huge health out of combat, so he wins lanes by trading, backing off to heal, and coming back full.",
    combos: [
      { name: "Trade", steps: "Q (Decisive Strike) — silences and empowers your next auto with a big hit + move speed → auto → E (Judgment) spin → walk away and let Perseverance heal you back." },
      { name: "Execute", steps: "R (Demacian Justice) deals true damage that scales with their MISSING health — E-spin them low, then R to finish. Villain (passive R mark) makes your damage on that target far higher." },
    ],
    spikes: [
      "Level 6: Demacian Justice turns any half-health enemy into a kill.",
      "First item + boots: your Q-E burst and W resists let you win almost every melee trade.",
    ],
    watchOut: [
      "Q's silence is your only lock — use it to cut a channel or stop a caster, not just for the auto.",
      "W (Courage) is a short damage-reduction window; timing it into their burst is the skill.",
      "Ranged pokers and kite comps beat him; he has no gap-close beyond Q's speed.",
    ],
    itemNotes: "Bruiser (Stridebreaker / Trinity Force → Sterak's / Dead Man's Plate; Swiftmarch boots are a valid variant). HP and resists so his spin uptime wins the fight.",
    matchups: "Bullies melee laners and executes squishies. Struggles into ranged tops, kite and %max-HP damage.",
  },

  MissFortune: {
    otp: "RedAstrals", role: "Bot",
    identity: "A lane-bully ADC with the best teamfight ultimate in the class. Miss Fortune's passive gives her huge move speed out of combat for roams and repositioning, Double Up bounces off a minion to chunk the enemy laner, and Bullet Time carpets a chokepoint for enormous AoE damage. Win lane with Q poke, then win fights with R.",
    combos: [
      { name: "Poke", steps: "Q (Double Up) aimed at a MINION so the bounce hits the champion behind it — that's the whole laning pattern; it also refunds/kills for a reset. Add E (Make it Rain) to slow and chunk." },
      { name: "Teamfight", steps: "E (Make it Rain) to slow them in place → R (Bullet Time) channelled from safety, ideally down a choke or over an engaged fight. Land R through your frontline, never in the open." },
    ],
    spikes: [
      "First item (The Collector / Essence Reaver): your Q bounce starts halving squishies.",
      "Level 6: Bullet Time wins any grouped fight — look for choke points and objective fights.",
    ],
    watchOut: [
      "R is a stationary channel — cast it with peel or from behind terrain, or you'll be dove mid-ult.",
      "Aim Q at the minion, not the champion; hitting the champion directly wastes most of your poke damage.",
      "She's immobile — hard engage and dive comps punish her positioning hard.",
    ],
    itemNotes: "Lethality-crit hybrid (The Collector / Youmuu's) or standard crit — she's built around burst poke and the R spike. First-item + boots is the lane-dominance point.",
    matchups: "Bullies immobile lanes with Q poke and dominates grouped fights. Struggles into dive, hard engage and mobile ADCs who dodge her channel.",
  },

  Vayne: {
    otp: "ATUMOWY", role: "Bot",
    identity: "A late-game monster that shreds tanks with true damage. Every third consecutive hit on a target detonates Silver Bolts for %max-HP TRUE damage, Tumble repositions and empowers her next auto, and Final Hour grants stealth on Tumble — so a fed Vayne kites entire teams. Weak early, unstoppable late.",
    combos: [
      { name: "Kite", steps: "Auto → Q (Tumble) to reposition + empower the next auto → auto — repeat. Every third hit on the same target procs Silver Bolts' true damage, so stay on ONE target." },
      { name: "Condemn play", steps: "E (Condemn) knocks the target back — into a WALL it stuns them. Use it to peel a diver or to pin an assassin against terrain, not as poke." },
    ],
    spikes: [
      "Two crit/on-hit items: your Silver Bolts shred any tank and your kite becomes lethal.",
      "Level 6 (Final Hour): the invisibility on Tumble makes you nearly impossible to catch in a fight.",
    ],
    watchOut: [
      "Extremely weak early — farm safely, take the CS, and don't force lane trades before items.",
      "Condemn is your only escape and peel; missing the wall-stun on a diver usually means death.",
      "Short range and squishy — hard CC, poke and dive comps punish every mistake.",
    ],
    itemNotes: "On-hit / crit (Blade of the Ruined King → Guinsoo's or Kraken; Berserker's Greaves) — %HP damage and attack speed. Her top-lane page builds the same core for the 1v1 kite.",
    matchups: "Melts tanks and out-scales nearly every ADC. Struggles into poke, hard engage and anything that ends the game before she scales.",
  },

  Yone: {
    otp: "Saitamaro", role: "Mid",
    identity: "A dual-form skirmisher with two health bars' worth of outplay. Yone alternates crit-scaling autos (his passive doubles crit chance), stacks Q into a knock-up whirlwind, and uses Soul Unbound to dash out, deal damage, then RETURN to his body — letting him commit fully with an escape built in.",
    combos: [
      { name: "Engage", steps: "E (Soul Unbound) — you leave your body and gain speed; everything you damage is partly re-dealt when you snap back → Q3 (Spirit Cleave whirlwind) knock-up → auto → E returns you to safety." },
      { name: "Teamfight", steps: "R (Fate Sealed) hits everyone in a line and pulls them together for a knock-up — use it after your team's CC, then W (Spirit Cleave) shield to survive the counter-hit." },
    ],
    spikes: [
      "Two crit items (Immortal Shieldbow / IE): your combo deletes squishies and E lets you commit safely.",
      "Level 6: Fate Sealed turns any won skirmish into an ace.",
    ],
    watchOut: [
      "E has a return timer — mistime it and you snap back into their team, or lose the escape entirely.",
      "You're squishy and get burst before your W shield matters; respect assassins and hard CC.",
      "Weak levels 1–3 against ranged bullies — farm and scale to your first item.",
    ],
    itemNotes: "Crit (Immortal Shieldbow / Infinity Edge → Blade of the Ruined King into tanks). The Absorb Life / BOTRK-first line is the current core; boots + first item is the spike.",
    matchups: "Out-skirmishes melee mids and dives squishies with E safety. Struggles into hard CC, poke and early lane bullies.",
  },

  Fiora: {
    otp: "beronelol", role: "Top",
    identity: "The duellist who beats anyone — if you hit the Vitals. Fiora's passive spawns rotating weak points; striking one deals %max-HP damage and heals her. Her parry (W) can block ANY ability including ultimates, and her ultimate spawns four Vitals for a huge burst of true damage. Pure mechanics: parry the key spell, hit the Vitals, win the duel.",
    combos: [
      { name: "Duel", steps: "Q (Lunge) toward the Vital (the passive weak point) → auto → Q again on the next Vital — Q refunds most of its cooldown when it procs a Vital, so chained Vitals mean chained dashes." },
      { name: "Parry", steps: "W (Riposte) blocks all damage AND stuns if it catches an incoming immobilising ability. Parrying the enemy's key spell (Malphite R, Renekton W, Darius E) flips the entire matchup." },
    ],
    spikes: [
      "Level 6: Grand Challenge's four Vitals + the healing zone win almost any 1v1.",
      "First item (Blade of the Ruined King / Hullbreaker line): your Vital procs start deleting bruisers and tanks.",
    ],
    watchOut: [
      "Riposte is the whole champion — wasting it means losing the duel. Learn the enemy's key cooldown and hold W for it.",
      "Chase the Vitals, not the target — walking around them for the weak point is how you out-damage bigger champions.",
      "Weak into ranged pokers and teamfight comps; she's a split-pusher, not a front-liner.",
    ],
    itemNotes: "Duelist bruiser (Blade of the Ruined King → Death's Dance / Sterak's; Press the Attack is the current keystone). %HP damage + sustain so the Vital procs win extended fights.",
    matchups: "Beats melee bruisers and tanks 1v1 with parry + Vitals. Struggles into ranged tops, kite and teamfight-heavy comps where a split-pusher can't carry.",
  },

  Gwen: {
    otp: "Blikna", role: "Top",
    identity: "An AP bruiser who shreds tanks with true damage inside her own safe zone. Snip Snip's centre line deals %max-HP true damage, Hallowed Mist (W) makes her untargetable to enemies outside it, and her passive adds magic damage on hit. Gwen wants extended fights inside the mist where she simply cannot be touched.",
    combos: [
      { name: "Shred", steps: "Q (Snip Snip!) — line the CENTRE snip on the target for the %max-HP true damage (the final snip is the big one) → auto with passive → E (Skip 'n Slash) dash for the attack-speed reset and range." },
      { name: "Safe fight", steps: "W (Hallowed Mist) at your feet — enemies outside it cannot target you with autos or single-target spells. Fight inside the mist, and reposition it as it follows you." },
    ],
    spikes: [
      "First AP item (Riftmaker / Nashor's Tooth): your Q true damage and on-hit start melting bruisers and tanks.",
      "Level 6: Needlework's three-throw ultimate adds ranged burst and a slow to chase.",
    ],
    watchOut: [
      "The mist protects from OUTSIDE attackers only — anyone standing inside it can hit you freely.",
      "Q's centre line is where the true damage lives; a lazy Q does a fraction of the damage.",
      "Weak levels 1–3 and vulnerable to hard CC that drags her out of the mist.",
    ],
    itemNotes: "AP bruiser (Riftmaker / Nashor's Tooth → Shadowflame; Sorcerer's Shoes is the current boots pick). True damage + sustain makes her the anti-tank pick.",
    matchups: "Shreds tanks and bruisers in extended fights. Struggles into ranged poke, burst assassins and hard CC that removes her mist safety.",
  },

  Draven: {
    otp: "EOWIDE", role: "Bot",
    identity: "The highest-damage early ADC in the game, gated entirely by axe-catching. Spinning Axes rebound after each auto — catching them keeps your damage enormous, dropping them makes you a normal ADC. Add Adoration stacks (bonus gold per kill) and Draven snowballs a lane lead into an unstoppable item advantage.",
    combos: [
      { name: "Axe juggling", steps: "Q (Spinning Axe) — activate twice to hold two axes, then auto and MOVE to where the axe lands to catch it. Your whole laning pattern is catching axes while walking at the enemy." },
      { name: "All-in", steps: "W (Blood Rush) for the move + attack speed (it refreshes on axe catch) → E (Stand Aside) knock-aside + slow → autos with both axes → R (Whirling Death) to finish or snipe a fleeing target across the map." },
    ],
    spikes: [
      "Level 1–2: with axes up you out-damage every ADC in the game — look for the early all-in.",
      "First item + Adoration gold: the bonus gold from a kill snowballs you a full item ahead.",
    ],
    watchOut: [
      "Chasing axes out of position is the #1 Draven death — sometimes you drop the axe and stay safe.",
      "You lose your identity if you can't catch: heavy poke and zone control ruin the pattern.",
      "You fall off relative to hypercarries — convert the early lead into towers and objectives fast.",
    ],
    itemNotes: "Crit (The Collector / Essence Reaver → Infinity Edge; Berserker's Greaves). Attack speed and crit convert axe uptime into damage; the Adoration gold accelerates every spike.",
    matchups: "Bullies every ADC in the early game with axe damage. Struggles into poke that denies axe-catching, hard engage supports, and late-game hypercarries.",
  },
};

export const otpGuideOf = (dd) => OTP_GUIDES[dd] || null;
