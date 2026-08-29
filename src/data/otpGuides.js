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
    otp: "Kaitiana", role: "Mid",
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
};

export const otpGuideOf = (dd) => OTP_GUIDES[dd] || null;
