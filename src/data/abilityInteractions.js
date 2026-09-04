// ─────────────────────────────────────────────────────────────────────────────
//  abilityInteractions.js — named ability-vs-kit interactions.
//
//  The trait engine in counterPicker.js reasons in categories: this champion
//  deals physical damage, that one stacks armour. That catches broad matchups
//  but misses the ones players actually feel, where ONE ability invalidates a
//  whole kit — Nasus's Wither means Pantheon can never trade and walk away,
//  Morgana's Black Shield turns a Blitzcrank lane off entirely.
//
//  These are hand-written because they are facts about ability text, not about
//  items, and mining Riot's prose with regexes produced too many false positives
//  to trust. Every entry below was checked against src/data/abilities.js — the
//  mechanism described is the mechanism Riot ships, not folklore. Where popular
//  belief is wrong, the note says so (Shen's W does NOT block Yasuo's Q; Q is an
//  ability that applies on-hit effects, not a basic attack).
//
//  `b` targets one champion; `bTag` targets everything carrying a derived trait
//  ("auto", "ad", "ap", "dash", "engage", "poke", "pick", "dive", "heal", "tank")
//  so a single entry can cover a hundred matchups.
//
//  weight is how decisive the interaction is: 1 notable, 2 strong, 3 lane-defining.
//
//  phase ("early" | "late", omitted = the whole game) marks matchups that INVERT
//  rather than settle. Pantheon beats Jax early and loses to him late; encoding
//  both sides nets the score to even, which is honest, while the reasoning still
//  tells the player which half of the game is theirs.
//
//  cue is the part that changes how you actually play: what to watch for, which
//  cooldown to bait, and when the window opens.
// ─────────────────────────────────────────────────────────────────────────────

export const INTERACTIONS = [
  // ── Kits that invalidate a specific champion ───────────────────────────────
  {
    a: "Malphite", b: "Pantheon", kind: "counter", weight: 3,
    abilities: ["Granite Shield (P)", "Thunderclap (W)", "Seismic Shard (Q)", "Unstoppable Force (R)"],
    why: "Granite Shield is a free 10%-max-HP shield that refreshes out of combat, so Pantheon's Q poke is undone between trades. Thunderclap's bonus armour blunts a kit that is entirely physical, Seismic Shard steals movement speed so Pantheon can't close or disengage, and Unstoppable Force is a point-and-click knock-up his E cannot block.",
    cue: "His shield regenerates a few seconds after he last took damage — if it is up, chip it with a single Q before committing, or your whole combo goes into it. Never trade while it is visible.",
  },
  {
    a: "Nasus", b: "Pantheon", kind: "counter", weight: 3,
    abilities: ["Wither (W)"],
    why: "Wither is point-and-click, unavoidable, and ramps over five seconds while also crippling attack speed. Pantheon's whole pattern is trade-and-step-away behind Aegis; Withered, he cannot leave the trade he started, and Nasus simply out-sustains him.",
    cue: "Wither has no travel time and cannot be dodged, so the only counterplay is range and cooldown timing. Force him to use it on a minion-wave trade, then all-in during the ~15 seconds it is down.",
  },
  {
    a: "Shen", b: "Yasuo", kind: "counter", weight: 2,
    abilities: ["Spirit's Refuge (W)"],
    why: "Spirit's Refuge blocks all non-turret BASIC ATTACKS in the zone, and Yasuo's damage is overwhelmingly auto-attacks woven between Q casts — inside the zone his output collapses. Note it does not block Steel Tempest itself: Q is an ability that applies on-hit effects, not a basic attack.",
    cue: "The zone is centred on his Spirit Blade, not on Shen — reposition so you are attacking from outside it rather than standing still. It only lasts a moment; step out, wait, step back in.",
  },
  {
    a: "Rammus", b: "Warwick", kind: "counter", weight: 3,
    abilities: ["Defensive Ball Curl (W)", "Frenzying Taunt (E)"],
    why: "Warwick is a sustained physical auto-attacker with no way to disengage once committed. Defensive Ball Curl gives Rammus bonus armour AND returns damage to anyone who basic-attacks him, so Warwick's own DPS kills him, and the taunt forces exactly that.",
    cue: "His Defensive Ball Curl is a visible ball-up with a fixed duration. Stop auto-attacking entirely while it is active — every hit you land is damage back to you — and resume when it drops.",
  },
  {
    a: "Trundle", bTag: "tank", kind: "counter", weight: 2,
    abilities: ["Subjugate (R)"],
    why: "Subjugate drains a percentage of the target's armour and magic resist and gives it to Trundle, so the tankier the enemy the harder it swings. Pillar of Ice on top means the frontline can't reach anyone anyway.",
    cue: "He wants to ult the biggest frontliner — if that is you, itemise health over resists so there is less for him to steal, and fight before his ultimate is up.",
  },
  {
    a: "Vayne", bTag: "tank", kind: "counter", weight: 2,
    abilities: ["Silver Bolts (W)"],
    why: "Every third hit on the same target deals a percentage of their MAXIMUM health as TRUE damage — armour, magic resist and shields are all irrelevant. The bigger the health bar, the faster it melts.",
    cue: "Count her hits: the third on the SAME target is the one that hurts. Breaking her attack chain by stepping out of range resets it, so do not stand and trade three autos.",
  },

  // ── Abilities that answer an entire category ───────────────────────────────
  {
    a: "Morgana", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Black Shield (E)"],
    why: "Black Shield absorbs magic damage and, more importantly, blocks the next crowd control outright. A comp whose engage is one hook or one point-and-click lock-up has its entire win condition cancelled by a 24-second-cooldown button.",
    cue: "Black Shield is a visible purple bubble on the target with a long cooldown. Force it out with a low-value spell or hook a different target, then engage in the ~20 seconds it is down.",
  },
  // ── Malzahar: the counter-pick, and why ───────────────────────────────────
  // Three separate answers stacked in one kit — a recurring CC immunity, a
  // point-and-click suppression, and a silence. Each is tagged separately so the
  // engine credits him against the right comps rather than as one blanket buff.
  {
    a: "Malzahar", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Void Shift (P)"],
    why: "Void Shift periodically grants crowd control IMMUNITY plus 90% damage reduction until it is spent. A comp whose engage is one hook or one point-and-click lock-up just feeds it: the CC is negated, the follow-up lands into 90% reduction, and the passive starts recharging. Unlike Morgana's Black Shield it is free and needs no cast — but it is self-only, so it saves him and nobody else.",
    cue: "Void Shift shows as a shimmer on him and only recharges while he takes no damage. Pop it with any throwaway ability or a single auto BEFORE you engage, then commit into the window while it recharges.",
  },
  {
    a: "Malzahar", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Void Shift (P)", "Nether Grasp (R)"],
    why: "An assassin's all-in opens with burst or CC, which Void Shift eats outright, and Nether Grasp answers with a point-and-click knock-down into a 2.5-second suppression that no amount of mobility avoids. Suppression also stops dashes and channels mid-cast, so the dive ends where it started. QSS or Mercurial Scimitar is their only real out — plain Cleanse does not remove suppression.",
    cue: "Do not open on him while Void Shift is up. Bait it, then all-in — and hold your mobility to break the Nether Grasp tether rather than spending it on the approach.",
  },
  {
    a: "Malzahar", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Nether Grasp (R)"],
    why: "Nether Grasp targets a champion directly rather than a location, so no dash or blink dodges it, and the suppression cancels whatever they were casting. Note the channel continues while the tether holds even if the suppression itself is cleansed.",
    cue: "You cannot dodge the cast, only break it: move out of tether range or use QSS/Mercurial. Save that item active for his ultimate specifically, not for the poke.",
  },
  {
    a: "Malzahar", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Call of the Void (Q)", "Void Shift (P)"],
    why: "Call of the Void silences, which cuts a combo champion off mid-sequence, and Void Shift's 90% damage reduction means the burst window they built their whole game around simply does not kill him.",
    cue: "The silence lands after a short delay between two portals — sidestep the middle. If you are silenced mid-combo, walk out rather than trying to finish it.",
  },
  {
    a: "Poppy", bTag: "dash", kind: "counter", weight: 3,
    abilities: ["Steadfast Presence (W)"],
    why: "Steadfast Presence stops dashes dead and knocks the dasher down. Champions whose engage IS their dash simply cannot start a fight while it is up, and blowing the dash into it usually means dying for free.",
    cue: "It is a short, active window, not a permanent aura. Feint your dash, let her press W, then engage — walking at her without dashing removes the ability entirely.",
  },
  {
    a: "Cassiopeia", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Miasma (W)"],
    why: "Miasma grounds everything standing in it — no dashes, no blinks, no flash. Dropped between herself and a diver it removes their only way in, and dropped on top of them it removes their only way out.",
    cue: "Grounded means no dashes, blinks, OR flash — check the ground before you commit. Wait for the pool to expire rather than dashing through it, and never fight standing inside it.",
  },
  {
    a: "Yasuo", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Wind Wall (W)"],
    why: "Wind Wall destroys every enemy projectile that touches it. Against a comp built on ranged skillshots, one button deletes a teamfight's worth of damage and the wall is up more often than their cooldowns.",
    cue: "Wind Wall is a fixed wall, not a bubble — walk around the side and your skillshot lands. If you cannot flank, hold your key ability for the few seconds until it drops.",
  },
  {
    a: "Braum", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Unbreakable (E)"],
    why: "Unbreakable intercepts the first projectile entirely and reduces the damage of everything behind it for allies in the cone — it turns a poke lane into a stalemate and blanks a scripted engage.",
    cue: "It only covers the direction he faces. Attack from an angle or wait it out — and note the FIRST instance through it is fully blocked, so a low-value poke spends it.",
  },
  {
    a: "Teemo", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Blinding Dart (Q)"],
    why: "Blinding Dart makes the target's basic attacks miss entirely. Against anything whose damage is auto-attacks, that is a full damage negation on a short cooldown — and it lasts through their steroid window.",
    cue: "Blind stops basic attacks, not abilities — keep using your spells through it. Bait the dart with a step forward before committing your attack-speed steroid.",
  },
  {
    a: "Quinn", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Blinding Assault (Q)"],
    why: "Blinding Assault nearsights and blinds, so an auto-attack carry loses both its damage and its vision of her while she resets the trade at range.",
    cue: "Blind only stops basic attacks — keep casting. Her Q is a slow projectile with a long cooldown, so trading right after she misses it is your window.",
  },
  {
    a: "Jax", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Counter Strike (E)"],
    why: "Counter Strike dodges every basic attack for its duration and then stuns everyone nearby. Against an auto-attacker that is both a full damage block and the opening of his own all-in.",
    cue: "Stop attacking and walk away for the duration, then re-engage — attacking into it feeds the stun. It is his longest early cooldown, so the window right after is yours.",
  },
  {
    a: "Fiora", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Riposte (W)"],
    why: "Riposte blocks all damage for its window and stuns if it catches an immobilising ability. Against a comp whose fight starts with one telegraphed engage ultimate, parrying that single spell wins the fight before it starts.",
    cue: "She has to predict it — bait with an auto or a minor spell before your engage ultimate. If she parries, disengage entirely rather than fighting through the stun.",
  },
  {
    a: "Olaf", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Ragnarok (R)"],
    why: "Ragnarok makes Olaf immune to crowd control for its duration. Comps that rely on locking him down to survive his walk-forward have no answer once it is active.",
    cue: "Crowd control does nothing for the duration, so do not waste your ultimate into it. Kite the window out, then lock him down after — it is a fixed duration, not a toggle.",
  },
  {
    a: "Kassadin", bTag: "ap", kind: "counter", weight: 2,
    abilities: ["Void Stone (P)"],
    why: "Void Stone reduces incoming magic damage outright, so an AP-only opponent is fighting him at a permanent deficit before items are even considered.",
    cue: "Flat magic damage is a losing plan into him — build magic penetration or bring physical damage. Punish his weak early levels before he scales.",
  },
  {
    a: "Pantheon", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Aegis Assault (E)"],
    why: "Aegis Assault blocks ALL damage from one direction while he channels. Against single-source ranged poke he simply turns the trade off, then walks forward while it is on cooldown.",
    cue: "Attack from behind or from the side — the block is directional. Or simply wait: it is a 1.5-second channel, and he is committed to a facing while it runs.",
  },
  {
    a: "Garen", bTag: "ap", kind: "counter", weight: 1,
    abilities: ["Courage (W)"],
    why: "Courage's damage-reduction window is strongest against a single large burst, so a mage's combo lands into the one moment he is most durable — and his silence on Q cuts the follow-up.",
    cue: "Do not dump your combo into the active W. Poke it out or wait the window, and respect that his Q silence cuts your follow-up.",
  },

  // ── Directional damage negation ───────────────────────────────────────────
  // Pantheon's Aegis Assault is invulnerability to non-turret damage from ONE
  // direction for 1.5s. It is a damage block, NOT a crowd control block — that
  // distinction decides which champions it actually beats.
  {
    a: "Pantheon", b: "Sett", kind: "counter", weight: 3,
    abilities: ["Aegis Assault (E)"],
    why: "Haymaker is Sett's whole payoff — a single huge directional punch whose damage scales with the Grit he has banked. Aegis Assault makes Pantheon invulnerable to damage from the direction he braces, so the punch he spent a whole trade charging simply does not land, and Sett is left with a spent W and no Grit.",
    cue: "It blocks damage but NOT crowd control — stun or knock him up to cut the channel. Otherwise walk around behind him: the protection is directional, so damage from the back lands in full.",
  },
  {
    a: "Pantheon", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Aegis Assault (E)"],
    why: "A burst combo is a committed sequence from one place. Bracing into it eats the whole rotation for 1.5 seconds and leaves them on cooldown at melee range. The catch is that Aegis blocks DAMAGE, not crowd control — anything that stuns or knocks him up still lands and cuts the channel.",
    cue: "Anything that stuns or knocks him up cancels the channel outright — lead with crowd control rather than damage. Damage alone is simply refunded.",
  },
  {
    a: "Samira", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Blade Whirl (W)"],
    why: "Blade Whirl destroys every hostile non-turret projectile in the area for its duration. Against a comp that fights by throwing skillshots, it deletes a full engage's worth of damage and lets her walk into her own range.",
    cue: "It is a short spin with a fixed duration — hold your skillshot for a beat rather than throwing it into the whirl. Melee damage passes through it fine.",
  },

  // ── Spell shields: eat the ONE spell the enemy's game plan needs ──────────
  {
    a: "Sivir", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Spell Shield (E)"],
    why: "Spell Shield blocks the next hostile spell outright and gives her movement speed for doing it. A comp whose engage is one hook or one point-and-click lock-up has a single button to play around, and guessing wrong means their cooldown is gone and she is now faster than them.",
    cue: "Spend a cheap spell to pop the shield before your hook or engage. It has a long cooldown early; that gap is when a pick comp actually gets to play.",
  },
  {
    a: "Nocturne", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Shroud of Darkness (W)"],
    why: "Shroud of Darkness eats the next hostile spell and doubles his attack speed for succeeding, so a missed hook does not just fail — it arms him. Note a spell shield blocks SPELLS, not basic attacks.",
    cue: "Same rule as any spell shield — bait it with something you do not mind losing. Landing your key CC into it also doubles his attack speed, so the cost of guessing wrong is high.",
  },
  {
    a: "Sivir", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Spell Shield (E)"],
    why: "Most burst rotations open with one mandatory spell — the gap-closer or the root that makes the rest land. Blocking that first cast breaks the chain and the follow-up hits nothing.",
    cue: "Open with your cheapest ability to strip the shield, then commit. Leading with your engage tool means losing it for nothing.",
  },
  {
    a: "Nocturne", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Shroud of Darkness (W)"],
    why: "The shield blanks the opening spell of a burst combo, and the attack-speed refund means he wins the fight that was supposed to kill him.",
    cue: "Pop it with a throwaway spell first. Guessing wrong costs you the fight twice, because the block also doubles his attack speed.",
  },

  // ── Cleanses and crowd control immunity ──────────────────────────────────
  {
    a: "Gangplank", bTag: "pick", kind: "counter", weight: 2,
    abilities: ["Remove Scurvy (W)"],
    why: "Remove Scurvy cleanses ALL crowd control and heals. Being hooked or rooted is normally the whole of a pick comp's kill — he removes it mid-combo and walks out at health.",
    cue: "Chain your CC rather than spending it all at once: force the cleanse with the first one, then land the real lockdown while it is on its long cooldown.",
  },
  {
    a: "Alistar", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Unbreakable Will (R)"],
    why: "Unbreakable Will cleanses all crowd control and then reduces incoming damage for seven seconds. A team that needs to burst him down to stop the engage cannot, and he is free to keep displacing their carry the entire time.",
    cue: "Do not burn your combo into the active window. Disengage for the seven seconds, then fight — and note it cleanses, so CC applied before he presses it is wasted too.",
  },

  // ── Untargetability and invulnerability windows ──────────────────────────
  {
    a: "Fizz", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Playful / Trickster (E)"],
    why: "Playful makes him untargetable for the pole hop, which dodges targeted spells outright AND lets skillshots already in flight pass through him. An assassin who commits a full combo into it has nothing left and is standing next to a Fizz who has not used his ultimate.",
    cue: "Hold your combo until the pole hop resolves — spells cast into it are simply lost. It is his main escape, so once it is down he has to fight you honestly.",
  },
  {
    a: "Vladimir", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Sanguine Pool (W)"],
    why: "Sanguine Pool makes him untargetable and ghosted for two seconds. Burst arrives as one committed window; pooling through it means the window closes with him alive and their cooldowns spent.",
    cue: "Wait out the two seconds rather than committing; damage during the pool does nothing. He pays health to cast it, so forcing repeated pools wins the lane by attrition.",
  },
  {
    a: "Kayle", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Divine Judgment (R)"],
    why: "Divine Judgment grants full invulnerability for 2.5 seconds and can be cast on an ALLY. A dive comp's plan is to focus one target down quickly — she makes that target unkillable for exactly the window they committed to, then the swords punish everyone standing on top.",
    cue: "Do not spend your burst into the golden window — it is 2.5 seconds and then it is gone. Force it out on a low-value dive, then kill the target properly.",
  },
  {
    a: "Tryndamere", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Undying Rage (R)"],
    why: "Undying Rage sets a minimum health threshold for five seconds and can be cast even while affected by cast-inhibiting crowd control. Anything built to kill him in one window fails, and he is still swinging afterwards. Grievous Wounds and hard displacement are the real answers, not more damage.",
    cue: "More damage will not kill him during it. Disengage or displace him out of the fight, and buy Grievous Wounds so the healing afterwards does not undo your work.",
  },
  {
    a: "Kindred", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Lamb's Respite (R)"],
    why: "Lamb's Respite stops all units in the zone from dying for its duration — a full negation of an execute or a burst rotation. It applies to BOTH teams, so it saves her carry and denies the kill, but it also protects whoever she was about to finish.",
    cue: "Nothing dies inside the circle, including her targets — walk OUT of it rather than continuing to attack. It cuts both ways, so it can also deny her own kill on you.",
  },
  {
    a: "Master Yi", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Alpha Strike (Q)"],
    why: "Alpha Strike makes him untargetable while it resolves, so it is not just a gap-closer — it is a dodge for a telegraphed skillshot or a channelled ultimate aimed at him.",
    cue: "Do not aim a slow skillshot or a channelled ultimate at him while he can Q — bait it, then land your ability in the gap afterwards.",
  },

  // ── Terrain: the map itself as an answer to mobility ─────────────────────
  {
    a: "Trundle", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Pillar of Ice (E)"],
    why: "Pillar of Ice is real terrain that knocks units away from where it lands and slows around it. Dropped on top of an engage it separates the frontline from the fight, and dropped behind a fleeing enemy it takes their escape route away entirely.",
    cue: "Check where the pillar will land before you commit your dash — it appears fast and knocks you away from its centre. Fight in open ground, not chokepoints.",
  },
  {
    a: "Anivia", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Crystallize (W)"],
    why: "Crystallize is a five-second impassable wall that knocks units away as it forms. It cuts a committed engage in half — the ones who got through are now fighting alone, and the rest have to walk around.",
    cue: "Never engage into a narrow corridor against her. If the wall lands behind you, walk around immediately rather than fighting split from your team.",
  },
  {
    a: "Anivia", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Crystallize (W)"],
    why: "A dash covers a fixed distance; a wall that appears mid-dash means arriving somewhere useless. Against a champion whose only engage is one dash, the wall is a hard no.",
    cue: "Hold your dash until after she uses the wall — it is a long cooldown and the five seconds pass quickly.",
  },

  // ── Point-and-click lockdown that mobility cannot answer ─────────────────
  {
    a: "Warwick", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Infinite Duress (R)"],
    why: "He leaps with crowd control immunity and, on connecting, knocks the target down and suppresses them. Suppression cancels channels and dashes mid-cast, and immunity on the way in means their peel does not stop him arriving.",
    cue: "Crowd control does not stop the leap, only distance does — break line of sight or stay outside his range. QSS/Mercurial removes the suppression once it lands.",
  },
  {
    a: "Mordekaiser", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Realm of Death (R)"],
    why: "Realm of Death banishes one champion into a seven-second 1v1 and steals a share of their stats for the duration. An auto-attack carry's entire value is dealing damage from behind a team — removed from that team, it is exactly the fight it is worst at.",
    cue: "You are alone with him for seven seconds and cannot be helped. Track his ultimate cooldown before over-extending, and buy defensive stats for that specific duel rather than more damage.",
  },
  {
    a: "Urgot", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Fear Beyond Death (R)"],
    why: "Fear Beyond Death impales and leashes the first champion hit, dragging them back to him. A diver who commits and drops low does not get to leave — the ultimate executes them and fears everyone nearby.",
    cue: "Do not dive him at low health — that is exactly the execute threshold. Disengage before you drop into range of it, and check his ultimate cooldown first.",
  },

  // ── Sustained cripples ───────────────────────────────────────────────────
  {
    a: "Nasus", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Wither (W)"],
    why: "Wither is point-and-click and ramps over five seconds, slowing movement AND crippling attack speed. Against a champion whose damage is basic attacks, that is most of their output removed for the length of a fight, with nothing to dodge.",
    cue: "There is nothing to dodge, so play around its cooldown instead. Trade only after he has spent it, and buy tenacity or a cleanse if the lane depends on it.",
  },
  {
    a: "Malphite", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Thunderclap (W)", "Ground Slam (E)"],
    why: "Ground Slam reduces the attack speed of everyone around him while Thunderclap's bonus armour blunts what still lands — a compounding answer to anything that fights by attacking repeatedly.",
    cue: "Attack-speed slows stack with his armour, so more auto-attacks is the wrong answer — bring percentage-penetration or magic damage instead.",
  },

  // ── Matchups that FLIP with the game clock ────────────────────────────────
  // Some lanes are not "X counters Y" at all — they invert. Encoding both sides
  // with a phase nets the score to even, which is honest, while the reasoning
  // still tells the player which half of the game is theirs.
  {
    a: "Pantheon", b: "Jax", kind: "counter", weight: 2, phase: "early",
    abilities: ["Spear Shot (Q)", "Aegis Assault (E)", "Mortal Will (P)"],
    why: "Early this is Pantheon's lane outright. Spear Shot pokes from outside Jax's range for free, Mortal Will turns every fifth input into an empowered hit, and Aegis Assault blocks the damage of the Q-leap-into-autos that is Jax's only way to trade back. Denying him farm and levels is the entire game plan, because it does not last.",
    cue: "Trade while his Counter Strike (E) is down — it has a long cooldown pre-6 and is his only answer to your all-in. Once he lands Q on a minion to leap, he is committed: brace Aegis toward him and he gets nothing.",
  },
  {
    a: "Jax", b: "Pantheon", kind: "counter", weight: 2, phase: "late",
    abilities: ["Counter Strike (E)", "Grandmaster's Might (R)"],
    why: "The lane inverts once Jax has levels and items. Pantheon is a short burst-combo champion with no sustained output, and Grandmaster's Might gives Jax resists exactly as extended fights start mattering. Past the early game Jax out-duels him and out-split-pushes him, so Pantheon has to have converted the lead already.",
    cue: "If Pantheon has not killed you or taken plates by roughly level 6-9, the lane is won. Hold Counter Strike for his Aegis channel — he cannot cancel it, and stunning him out of it wastes his longest cooldown.",
  },

  // ── Top lane: kits that decide the matchup ───────────────────────────────
  {
    a: "Yorick", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Dark Procession (W)"],
    why: "Dark Procession is a ring of spirit walls that arises around the target location and acts as terrain. Against a champion whose escape is a single dash, the cage removes the exit and the duel happens on Yorick's terms with his Maiden and ghouls already on top.",
    cue: "He usually casts it AFTER you commit, not before — bait the cage by stepping in and retreating once, then fight when it is down. Its cooldown is far longer than your dash.",
  },
  {
    a: "Illaoi", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Test of Spirit (E)", "Leap of Faith (R)"],
    why: "Test of Spirit rips out a champion's Spirit and tethers them to it; every tentacle slam that hits the Spirit hits them too. Committing an engage into her tentacle field means taking the entire field's damage at once, and Leap of Faith spawns more the moment a team groups on her.",
    cue: "Never fight her inside a cluster of tentacles — walk out of the field first, even if it means giving up the trade. If she lands E on you, break the tether by running out of range rather than trying to out-damage it.",
  },
  {
    a: "Sion", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Glory in Death (P)"],
    why: "Killing Sion does not remove him — Glory in Death reanimates him at full health for a frenzied window. A burst comp that spends its whole rotation executing him has to do it a second time while he is still swinging and their cooldowns are gone.",
    cue: "Do not blow your ultimate on the kill: let the passive expire before committing, or you fight the real Sion afterwards with nothing left. Grievous Wounds does not stop the revive.",
  },
  {
    a: "Garen", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Decisive Strike (Q)"],
    why: "Decisive Strike cleanses all slows and grants bonus movement speed, which is the specific answer to being kited. A champion whose plan is to attack while walking backwards loses that plan the moment he presses Q, and the empowered lunge silences on arrival.",
    cue: "Watch for his Q buff — the moment it lights up, your slow is gone and he is faster than you. Kite before he presses it, not after, and save your dash for the silence rather than the approach.",
  },
  {
    a: "Singed", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Fling (E)"],
    why: "Fling throws the target 550 units over him, so a diver's committed approach ends with them behind Singed, deeper into his poison and further from their team. The champion that chased him is now the one that has to escape.",
    cue: "Never chase him through his own poison trail in a straight line — that is the setup for the Fling. Fight him where his trail is not, and check whether Fling is up before committing.",
  },
  {
    a: "Gwen", bTag: "poke", kind: "counter", weight: 3,
    abilities: ["Hallowed Mist (W)"],
    why: "Inside Hallowed Mist, enemies standing OUTSIDE it cannot target her with basic attacks or single-target spells at all. Against a comp that fights by poking from range, that is a full negation on a short cooldown — she simply stands in the mist and farms.",
    cue: "The mist only stops attackers from outside — step INTO it and she loses the protection entirely. If you cannot enter safely, wait it out: it lasts 4 seconds and she has to recast to move it with her.",
  },
  {
    a: "K'Sante", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["All Out (R)"],
    why: "All Out roots the target and hurls them out of the fight before he transforms. A comp built around one engaging frontliner has that frontliner removed from the fight at the exact moment they commit, and the rest arrive without them.",
    cue: "His R needs you close — if you are the engage, respect his range before you press yours, and bait the ultimate with a frontline teammate first. Once he is transformed he is far squishier: that is the window to kill him.",
  },

  // ── Synergies: knock-ups enabling Last Breath ──────────────────────────────
  // Yasuo and Yone can only cast their ultimate on an AIRBORNE enemy, so any
  // reliable knock-up is a direct enabler rather than a vague "good together".
  {
    a: "Malphite", b: "Yasuo", kind: "synergy", weight: 3,
    abilities: ["Unstoppable Force (R)"],
    why: "Unstoppable Force is an unavoidable AoE knock-up on the whole enemy team, which is exactly Last Breath's cast condition. It is the single most reliable Yasuo ultimate setup in the game.",
  },
  { a: "Malphite", b: "Yone", kind: "synergy", weight: 3, abilities: ["Unstoppable Force (R)"],
    why: "Same interaction as with Yasuo — Yone's Fate Sealed also needs airborne targets, and Malphite delivers the entire team at once." },
  {
    a: "Nautilus", b: "Yasuo", kind: "synergy", weight: 3,
    abilities: ["Depth Charge (R)"],
    why: "Depth Charge knocks its target up at the end of its chase, giving Yasuo a guaranteed Last Breath on the exact enemy Nautilus picked. Note the hook (Q) only stuns — the ultimate is the enabler.",
  },
  {
    a: "Rakan", b: "Yasuo", kind: "synergy", weight: 3,
    abilities: ["Grand Entrance (W)"],
    why: "Grand Entrance dashes in and knocks up everyone nearby after a short delay — a repeatable, low-cooldown airborne window for Last Breath, which is why the pairing works far better than a stun support.",
  },
  {
    a: "Alistar", b: "Yasuo", kind: "synergy", weight: 2,
    abilities: ["Pulverize (Q)"],
    why: "Pulverize knocks up everyone around him, and the Q-into-W combo repositions the whole fight into Yasuo's ultimate.",
  },
  {
    a: "Gragas", b: "Yasuo", kind: "synergy", weight: 2,
    abilities: ["Body Slam (E)", "Explosive Cask (R)"],
    why: "Body Slam and Explosive Cask both displace, giving Yasuo airborne targets while also shoving the enemy team into the wall he wants them against.",
  },
  {
    a: "Wukong", b: "Yasuo", kind: "synergy", weight: 2,
    abilities: ["Cyclone (R)"],
    why: "Cyclone knocks up everyone it touches for the duration of the spin, which is a long, guaranteed Last Breath window on multiple targets.",
  },

  // ── Other genuine pairings ────────────────────────────────────────────────
  {
    a: "Thresh", b: "Kalista", kind: "synergy", weight: 3,
    abilities: ["Death Sentence (Q)", "Fate's Call (R)"],
    why: "Fate's Call launches whichever ally Kalista has bound with her own R, so Kalista can throw Thresh into the enemy team and he immediately hooks and lanterns the follow-up. The two ultimates are designed around each other.",
  },
  {
    a: "Orianna", bTag: "engage", kind: "synergy", weight: 2,
    abilities: ["Command: Attack (Q)", "Command: Shockwave (R)"],
    why: "Orianna's ball can ride an engaging ally, so Shockwave lands the instant they arrive. The harder the engage, the more reliably her ultimate connects on the whole team.",
  },
  {
    a: "Lulu", bTag: "auto", kind: "synergy", weight: 2,
    abilities: ["Whimsy (W)", "Wild Growth (R)"],
    why: "Whimsy's attack speed and Wild Growth's knock-up plus health are both tuned for a carry that wants to stand still and keep attacking — she converts an auto-attacker's biggest weakness, being dived, into a won fight.",
  },
  {
    a: "Janna", bTag: "auto", kind: "synergy", weight: 2,
    abilities: ["Monsoon (R)", "Howling Gale (Q)"],
    why: "Monsoon pushes divers off a stationary carry and heals through the follow-up, which is exactly the protection an auto-attack carry needs to finish a fight.",
  },
];

// ── Lookups ──────────────────────────────────────────────────────────────────
// tagsOf is injected by the caller (counterPicker) so this module stays free of
// circular imports — it needs to know a champion's derived traits to resolve
// bTag entries, and counterPicker is where those are computed.

const matchesTarget = (entry, foeDd, foeTags) =>
  entry.b ? entry.b === foeDd : (entry.bTag ? foeTags.includes(entry.bTag) : false);

/** Interactions where `meDd` counters `foeDd`. */
export function counterInteractions(meDd, foeDd, foeTags = []) {
  return INTERACTIONS.filter((e) => e.kind === "counter" && e.a === meDd && matchesTarget(e, foeDd, foeTags));
}

/** Interactions where `meDd` synergises with ally `allyDd` (checked both ways). */
export function synergyInteractions(meDd, allyDd, allyTags = [], meTags = []) {
  return INTERACTIONS.filter((e) => e.kind === "synergy" &&
    ((e.a === meDd && matchesTarget(e, allyDd, allyTags)) ||
     (e.a === allyDd && matchesTarget(e, meDd, meTags))));
}

/** Every interaction naming this champion, for a champion-page summary. */
export function interactionsNaming(dd) {
  return {
    asSource: INTERACTIONS.filter((e) => e.a === dd),
    asTarget: INTERACTIONS.filter((e) => e.b === dd),
  };
}
