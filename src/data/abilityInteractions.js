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
//  `b` targets one champion (or a list of them); `bTag` targets everything
//  carrying a derived trait
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

  // ── Dr. Mundo: a recurring crowd-control immunity with real counterplay ───
  // This one exposed a generator bug: abilities.js used to carry only the
  // health-regen half of the passive, because gen-abilities.mjs stopped at the
  // first Meraki effect that overflowed its budget and dropped the rest — and
  // the crowd-control immunity lives in the SECOND effect. Fixed at source, so
  // the description now includes it.
  {
    a: "Dr. Mundo", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Goes Where He Pleases (P)"],
    why: "Mundo is immune to the next hostile immobilising effect outright, and the immunity covers every immobilise from that same cast. A comp whose engage is one hook or one point-and-click root does not get to start the fight — the CC is resisted, he pays a little current health, and he walks at them anyway.",
    cue: "When it triggers he drops a canister toward whoever CC'd him. WALK OVER IT to destroy it — letting him collect it heals him and cuts 15 seconds off the passive. Denying the canister is what keeps him vulnerable to the next hook.",
  },
  {
    a: "Dr. Mundo", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Goes Where He Pleases (P)"],
    why: "An engage ultimate that lands on Mundo is simply resisted if the passive is up, so the fight starts with their longest cooldown spent and Mundo still walking forward.",
    cue: "Check whether the passive is up before committing your engage — bait it with a cheap slow or root first, then engage properly. And deny the canister so it stays down.",
  },

  // ── Reflects, stasis and resurrection ────────────────────────────────────
  {
    a: "Mel", bTag: "poke", kind: "counter", weight: 3,
    abilities: ["Rebuttal (W)"],
    why: "Rebuttal is not just a block — for its window she is invulnerable to non-turret damage AND every hostile projectile that hits the barrier is sent back at whoever fired it. Against a comp that fights by throwing skillshots, a well-timed W does not merely deny their damage, it hands it to them.",
    cue: "It is a very short window, so she has to read you — vary your cast timing rather than throwing on cooldown. If she catches your ultimate with it, that ultimate is now aimed at you.",
  },
  {
    a: "Mel", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Rebuttal (W)"],
    why: "A burst rotation is a committed sequence of projectiles thrown at one moment, which is exactly what Rebuttal punishes. Reading the combo means taking none of it and returning the biggest part.",
    cue: "Bait the barrier with one throwaway projectile before committing your combo — it is a 0.75-second window and she cannot hold it.",
  },
  {
    a: "Bard", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Tempered Fate (R)"],
    why: "Tempered Fate puts every unit in the area into stasis for 2.5 seconds. A committed engage is frozen mid-commit, the follow-up never arrives, and the fight restarts on Bard's terms.",
    cue: "It hits ALLIES too, so watch what he is actually aiming at — and note stasis makes targets untargetable, so it can also deny your execute. Fight outside the arc, or wait the 2.5 seconds out rather than walking in.",
  },
  {
    a: "Zilean", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Chronoshift (R)"],
    why: "Chronoshift resurrects the target where they died, invulnerable and untargetable while it resolves. A burst comp that spends its whole rotation killing one carry simply has to do it twice, with every cooldown already gone.",
    cue: "The golden clock over the target is the tell — do not commit your combo while it is visible. Force it out or kill someone else, and remember it lasts 5 seconds whether or not they die.",
  },
  {
    a: "Akshan", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Going Rogue (W)"],
    why: "Champions who kill his allies are marked Scoundrels, and a takedown on a Scoundrel resurrects everyone they killed. A dive comp that trades its cooldowns to kill a carry can have that kill undone by one pick.",
    cue: "After you kill someone, you are marked — do not linger near Akshan at low health. Killing HIM removes the mark threat entirely, so prioritise him over finishing the carry.",
  },

  // ── Death is not the end ─────────────────────────────────────────────────
  {
    a: "Karthus", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Death Defied (P)"],
    why: "Killing Karthus buys seven seconds of him casting everything for free, with Defile still ticking and Requiem still available. Bursting him down does not remove his damage from the fight — it removes his mana cost.",
    cue: "Do not focus him first in a teamfight; kill him LAST or the zombie window lands on top of your team while your cooldowns are spent. If you must kill him, walk away from the corpse.",
  },
  {
    a: "Kog'Maw", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Icathian Surprise (P)"],
    why: "Killing him starts a four-second zombie state that accelerates toward whoever is nearest and then detonates. The diver who committed to killing him is exactly the champion standing in the blast.",
    cue: "Walk AWAY the instant he dies — the explosion is on a timer and he speeds up over the duration. Do not stand and finish an objective next to his corpse.",
  },
  {
    a: "Kled", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Skaarl, the Cowardly Lizard (P)"],
    why: "All damage goes to Skaarl first, and losing the mount dismounts Kled rather than killing him — then he can remount by dealing damage. A burst combo that would kill any other champion leaves him alive and able to come back.",
    cue: "Dismounting him is not a kill — he is at his weakest on foot, so commit to finishing him there rather than backing off. Letting him fight minions to remount undoes all of it.",
  },

  // ── Isolation and unavoidable lockdown ───────────────────────────────────
  {
    a: "Xin Zhao", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Crescent Guard (R)"],
    why: "Crescent Guard knocks back every nearby enemy EXCEPT the one he has Challenged, so a grouped engage is split apart and the one target he wants is left alone with him. It answers exactly the comps that need to arrive together.",
    cue: "If you are the Challenged target you cannot be knocked away — disengage before he lands the mark. If you are not, expect to be thrown out of the fight, so do not rely on standing on top of your carry.",
  },
  {
    a: "Sett", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["The Show Stopper (R)"],
    why: "The Show Stopper suppresses the target and travels with displacement immunity, so neither their mobility nor their team's peel stops it. Suppression cancels a channel or a dash mid-cast, and they land wherever Sett chooses.",
    cue: "You cannot dash out once it lands — hold QSS or Mercurial for it, and watch his Grit bar, because he wants to ult INTO a full Haymaker.",
  },
  {
    a: "Taliyah", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Weaver's Wall (R)"],
    why: "Weaver's Wall raises a long strip of real terrain that knocks champions aside as it forms. Dropped across a committing team it cuts the engage in half and leaves whoever got through fighting alone.",
    cue: "It takes time to travel and is visible the whole way — move perpendicular to it rather than trying to outrun it. Once it is up, going around costs more time than waiting the 4 seconds.",
  },
  {
    a: "Zed", bTag: "poke", kind: "counter", weight: 1,
    abilities: ["Death Mark (R)"],
    why: "He is untargetable for the whole approach on Death Mark, so a poke champion's answer to being dived — landing a skillshot on the way in — does not exist for that window.",
    cue: "The untargetable window is short and fixed. Do not spend your escape when he presses R, spend it when he reappears behind you, and hold any point-and-click for the moment he becomes targetable again.",
  },

  // ── Denying the escape, and denying the kill ─────────────────────────────
  {
    a: "Camille", bTag: "dash", kind: "counter", weight: 3,
    abilities: ["The Hextech Ultimatum (R)"],
    why: "The Hextech Ultimatum leaps in untargetable, disrupts whatever the target is channelling, and then walls them into an arena they cannot leave. A champion whose safety IS their mobility loses it entirely — the dash is still there, it just has nowhere to go.",
    cue: "Mobility does not save you once the arena is up, so spend your escape BEFORE she lands rather than after. Her allies cannot enter either, so if you can win the 1v1 the ultimate is a mistake.",
  },
  {
    a: "Taric", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Cosmic Radiance (R)"],
    why: "Cosmic Radiance makes Taric and every nearby ally invulnerable for 2.5 seconds. A burst comp's entire plan is one committed window, and this deletes that window for the whole team rather than one target.",
    cue: "The star takes 2.5 seconds to descend and is clearly telegraphed — that delay is your window to kill someone, or to disengage entirely. Committing after it lands wastes every cooldown you have.",
  },
  {
    a: "Taric", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Cosmic Radiance (R)", "Bastion (W)"],
    why: "A dive is a commitment to killing one target quickly. Bastion's resists make that slower and Cosmic Radiance makes it briefly impossible, so the divers are left standing in the enemy team with nothing left.",
    cue: "Kill Taric or force the ultimate before diving his carry — diving into an untouched Taric is diving into a team that cannot die for 2.5 seconds.",
  },
  {
    a: "Galio", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Hero's Entrance (R)"],
    why: "Hero's Entrance lands Galio on an ALLY from anywhere on the map, arriving with a knock-up and a damage-reduction shield. A dive onto an isolated carry is answered by a second champion appearing on top of it mid-commit.",
    cue: "The channel is long and visible, and you can see the landing marker — kill the target before it resolves or leave. Diving a lone carry while Galio has his ultimate up is how a 2v1 becomes a 2v2.",
  },
  {
    a: "Kalista", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Fate's Call (R)"],
    why: "Fate's Call cleanses her Oathsworn of all crowd control and makes them invulnerable and untargetable while it pulls them in. The support the enemy just committed everything to killing is removed from the fight and then fired back at them.",
    cue: "It only works on her bound Oathsworn, so focusing anyone else denies it entirely. If she uses it defensively, the follow-up knock-up is still coming — do not stand in the landing line.",
  },
  {
    a: "Thresh", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Dark Passage (W)"],
    why: "The lantern shields an ally and lets them dash to Thresh from wherever the dive caught them. A dive that succeeds in isolating a carry is undone by one cast, and the divers are left deep with cooldowns spent.",
    cue: "Kill the lantern's target before they click it — the window is short but real. Diving past Thresh rather than through him means the lantern always reaches.",
  },
  {
    a: "Wukong", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Warrior Trickster (W)"],
    why: "Warrior Trickster leaves a clone and turns him invisible as he dashes away. A burst rotation aimed at where he was hits a decoy, and by the time the mistake is obvious his damage is landing from a different angle.",
    cue: "The clone does not move like he does — watch which one dashed. Holding your combo for half a second is better than spending it on a decoy.",
  },

  // ── Silences: cutting a combo mid-sequence ───────────────────────────────
  {
    a: "Soraka", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Equinox (E)"],
    why: "Equinox silences everything standing in it. A burst champion's damage is a sequence, and a silence dropped between the opener and the follow-up means the sequence never finishes.",
    cue: "The zone is placed, not instant — do not fight standing inside it. If you are silenced mid-combo, walk out rather than trying to finish, because the second half is what kills.",
  },
  {
    a: "Cho'Gath", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Feral Scream (W)"],
    why: "Feral Scream silences a wide cone, so an assassin who has committed to the gap-close arrives unable to cast the rest of the combo, standing next to a champion with an enormous health bar.",
    cue: "The cone is directional — approach from behind or off-angle. If you get silenced on the way in, disengage rather than auto-attacking through it.",
  },
  {
    a: "Blitzcrank", bTag: "burst", kind: "counter", weight: 1,
    abilities: ["Static Field (R)"],
    why: "Static Field silences everyone around him on cast, so a burst champion diving the backline is cut off mid-rotation the moment they arrive within his range.",
    cue: "It is instant and has no travel time, so the only counterplay is range — do not commit your combo standing next to him.",
  },

  // ── Anti-heal built into the kit ─────────────────────────────────────────
  {
    a: "Varus", bTag: "heal", kind: "counter", weight: 2,
    abilities: ["Hail of Arrows (E)"],
    why: "Hail of Arrows desecrates the ground for four seconds, cutting the healing of everyone standing in it. Against a sustain champion that is a Grievous Wounds effect he has from level one, before anyone can itemise for it.",
    cue: "The zone is what matters, not the initial hit — step out of it before you try to heal or drain. Fighting him on top of the desecrated ground is fighting without your sustain.",
  },
  {
    a: "Katarina", bTag: "heal", kind: "counter", weight: 2,
    abilities: ["Death Lotus (R)"],
    why: "Death Lotus applies healing reduction to every champion it hits while it channels, so a drain-tank fighting inside it cannot out-sustain the damage the way their kit assumes.",
    cue: "The channel is interruptible — any hard crowd control ends it immediately. If you cannot interrupt it, walk out of range rather than trading through the healing cut.",
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

  // ── Every reliable knock-up in the game enables Last Breath / Fate Sealed ──
  // Yasuo and Yone can only ultimate an AIRBORNE target, so a knock-up is not a
  // vague "works well together" — it is the cast condition. Listed by how
  // reliably the knock-up actually arrives, which is what separates a real
  // enabler from one that needs the enemy to cooperate.
  { a: "Alistar", b: ["Yone"], kind: "synergy", weight: 2, abilities: ["Pulverize (Q)"],
    why: "Pulverize knocks up everyone around him, which is Fate Sealed's cast condition as much as it is Yasuo's." },
  { a: "Poppy", b: ["Yasuo", "Yone"], kind: "synergy", weight: 3, abilities: ["Keeper's Verdict (R)"],
    why: "Keeper's Verdict knocks up on the tap-cast, and the charged version hurls a whole team. The tap is the one to use as an enabler — the charged cast sends them too far away to follow up on." },
  { a: "Vi", b: ["Yasuo", "Yone"], kind: "synergy", weight: 3, abilities: ["Cease and Desist (R)"],
    why: "Cease and Desist is an unstoppable point-and-click that knocks the target up on arrival, so the airborne window is guaranteed rather than a skillshot they can dodge." },
  { a: "Jarvan IV", b: ["Yasuo", "Yone"], kind: "synergy", weight: 3, abilities: ["Dragon Strike (Q)", "Cataclysm (R)"],
    why: "The flag-drag knocks up along its whole line, and Cataclysm walls the target in place afterwards — an airborne window followed by terrain that stops them leaving." },
  { a: "Ornn", b: ["Yasuo", "Yone"], kind: "synergy", weight: 3, abilities: ["Searing Charge (E)", "Call of the Forge God (R)"],
    why: "Searing Charge knocks up anything thrown into terrain, and Call of the Forge God knocks up the entire enemy team twice over when the ram passes through his Brittle targets." },
  { a: "Sejuani", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Arctic Assault (Q)"],
    why: "Arctic Assault knocks up everyone in its path on the charge, and Glacial Prison stuns afterwards to hold whatever survives." },
  { a: "Zac", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Elastic Slingshot (E)"],
    why: "Elastic Slingshot knocks up everything at the landing point, and Let's Bounce keeps re-applying displacement through the fight." },
  { a: "Rell", b: ["Yasuo", "Yone"], kind: "synergy", weight: 3, abilities: ["Ferromancy: Crash Down (W)"],
    why: "Crash Down knocks up on landing and is on a short cooldown compared with most engage ultimates — a repeatable airborne window rather than a once-a-fight one." },
  { a: "Galio", b: ["Yasuo", "Yone"], kind: "synergy", weight: 3, abilities: ["Justice Punch (E)", "Hero's Entrance (R)"],
    why: "Justice Punch knocks up everything it passes through, and Hero's Entrance knocks up the whole area on arrival — and it lands on an ALLY, so it can deliver Galio directly on top of a committed Yasuo." },
  { a: "Nami", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Aqua Prison (Q)", "Tidal Wave (R)"],
    why: "Tidal Wave knocks up everyone it rolls through across the whole enemy team, and Aqua Prison offers a smaller single-target version on a much shorter cooldown." },
  { a: "Zyra", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Stranglethorns (R)"],
    why: "Stranglethorns knocks up everyone standing in it after its wind-up, so a fight held in the zone hands over a full-team airborne window." },
  { a: "Neeko", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Pop Blossom (R)"],
    why: "Pop Blossom knocks up every enemy caught in the blast, and her disguise means she can walk into the middle of them to land it." },
  { a: "Vel'Koz", b: ["Yasuo", "Yone"], kind: "synergy", weight: 1, abilities: ["Tectonic Disruption (E)"],
    why: "Tectonic Disruption knocks up in a small area after a short delay — a real enabler, but a single-target-sized one rather than a teamfight window." },
  { a: "Cho'Gath", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Rupture (Q)"],
    why: "Rupture knocks up everything in the circle after its telegraph, and Feral Scream silences anyone who survives it." },
  { a: "Nunu & Willump", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Biggest Snowball Ever! (W)"],
    why: "The snowball knocks up everything it hits, and the longer it rolls the harder it lands — a wide, telegraphed but very large airborne window." },
  { a: "Sion", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Decimating Smash (Q)", "Unstoppable Onslaught (R)"],
    why: "A fully charged Decimating Smash knocks up in a wide arc, and Unstoppable Onslaught knocks up whoever the charge collides with from across the map." },
  { a: "Blitzcrank", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Rocket Grab (Q)", "Power Fist (E)"],
    why: "Power Fist knocks up the target on his next attack, and because Rocket Grab drags them into range first, the pairing is a guaranteed pick into a guaranteed airborne window." },
  { a: "Xin Zhao", b: ["Yasuo", "Yone"], kind: "synergy", weight: 2, abilities: ["Three Talon Strike (Q)"],
    why: "The third strike of Three Talon Strike knocks up, which arrives on a basic-attack cadence rather than a long cooldown — frequent, if small." },
  { a: "Bel'Veth", b: ["Yasuo", "Yone"], kind: "synergy", weight: 1, abilities: ["Above and Below (W)"],
    why: "Above and Below knocks up in a line and slows afterwards — reliable, though she usually wants to be using it to start her own fight." },
  { a: "Kayn", b: ["Yasuo", "Yone"], kind: "synergy", weight: 1, abilities: ["Blade's Reach (W)"],
    why: "Blade's Reach knocks up in a long line, giving a jungler an airborne setup on a gank without needing his ultimate." },
  { a: "Samira", b: ["Yasuo", "Yone"], kind: "synergy", weight: 1, abilities: ["Daredevil Impulse (P)"],
    why: "Samira's own combo needs a knock-up to reach S rank, so a Yasuo or Yone duo feeds both directions — but her passive knock-up is a small, situational window rather than a setup tool." },

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
  // ── Kits built specifically to punish mobility ───────────────────────────
  {
    a: "Vex", bTag: "dash", kind: "counter", weight: 3,
    abilities: ["Doom 'n Gloom (P)"],
    why: "Gloom is not a general anti-mobility tool — it marks any nearby champion that DASHES OR BLINKS, for six seconds. Detonating the mark deals bonus damage and refunds a quarter of Doom's cooldown, so every time a mobile champion uses the thing their kit is built around, they hand Vex damage and a faster fear. Doom itself knocks down and fears on top.",
    cue: "Do not dash near her to farm or reposition — save it for the escape, because the mark lasts 6 seconds and she detonates it with a single attack. If you are marked, expect the fear next.",
  },
  {
    a: "Veigar", bTag: "dash", kind: "counter", weight: 3,
    abilities: ["Event Horizon (E)"],
    why: "Event Horizon stuns anything that touches the EDGE of the cage, so a dash aimed through it is a stun rather than an escape. Against a champion who commits with one gap-closer, the cage is both the wall and the punish.",
    cue: "The cage takes half a second to erect and the centre is safe — dash INTO the middle, not across the perimeter, or wait the 3 seconds out. Never flash through the wall.",
  },
  {
    a: "Azir", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Emperor's Divide (R)"],
    why: "Emperor's Divide sends a wall of soldiers forward that shoves everyone it touches backwards and then stands as a barrier. A committed engage is physically pushed back out of the fight, and the team behind cannot follow through the wall.",
    cue: "It shoves from where AZIR is standing, so flanking rather than walking at him straight on beats it. If you get shoved, do not walk back through — go around, or the fight restarts without you.",
  },
  {
    a: "Jayce", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Thundering Blow (E)"],
    why: "Thundering Blow is a point-and-click knock-back with percentage-health damage, so a champion who spends a dash to close the gap is simply put back where they started, with the cooldown gone and Jayce still at range.",
    cue: "Do not gap-close while his hammer form E is up — bait it, then commit. It cannot be dodged once you are in range, only avoided by not being there.",
  },
  {
    a: "Syndra", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Scatter the Weak (E)"],
    why: "Scatter the Weak knocks back and stuns everything in a cone, so an assassin arriving on top of her is sent away stunned before the combo finishes.",
    cue: "It is a cone in front of her — approach from an angle she is not facing, and note it stuns only if it hits the target directly rather than a pushed sphere.",
  },

  // ── Vision denial and untargetability ────────────────────────────────────
  {
    a: "Graves", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Smoke Screen (W)"],
    why: "Smoke Screen nearsights everyone inside it, collapsing their sight radius. A champion who fights by landing skillshots from range cannot aim at what they cannot see, and has to either walk into Graves or give up the zone.",
    cue: "Walk OUT of the cloud rather than fighting in it — nearsight is per-tick, so leaving restores your vision immediately. Do not try to trade blind.",
  },
  {
    a: "Akali", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Twilight Shroud (W)"],
    why: "Entering the shroud makes Akali invisible, so poke aimed at her stops having a target and the lane resets on her terms. Note it is INVISIBILITY, not untargetability — and attacking or casting breaks it, so she cannot fight out of it for free.",
    cue: "She has to break invisibility to do anything, so hold your ability for the moment she commits rather than throwing into the smoke. A control ward or sweeper inside the shroud removes the safety entirely.",
  },
  {
    a: "Yuumi", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["You and Me! (W)"],
    why: "While attached, Yuumi is untargetable by everything except turrets and projectiles already in flight. A pick comp built to catch one champion out simply cannot catch her at all, and has to kill her anchor first.",
    cue: "There is no point aiming anything at her — kill or threaten her anchor, which forces her to detach or die with them. She is only vulnerable in the moment she is unattached.",
  },

  // ── Undoing the kill ─────────────────────────────────────────────────────
  {
    a: "Milio", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Breath of Life (R)"],
    why: "Breath of Life heals nearby allies and CLEANSES their crowd control, then leaves 65% tenacity behind. A comp whose engage is one hook or one lock-up has that engage removed after it lands, which is worse for them than it being dodged.",
    cue: "It cannot cleanse airborne effects — knock-ups still land. Chain your crowd control so the cleanse is spent on the first one, and open with a displacement rather than a stun where you have the choice.",
  },
  {
    a: "Renata Glasc", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Bailout (W)"],
    why: "If the Bailout target takes fatal damage they are restored to full health instead of dying, burning down only if they fail to get a takedown. A burst rotation that correctly kills its target does not get the kill, and often gets punished by the target that just came back at full health.",
    cue: "The burn kills them anyway if you disengage — do not panic and keep committing. Deny the takedown that cancels it, and kill Renata first if the fight is going long.",
  },
  // ── Punishing what a champion's own kit forces them to do ────────────────
  {
    a: "Kha'Zix", bTag: "squishy", kind: "counter", weight: 3,
    abilities: ["Taste Their Fear (Q)"],
    why: "Kha'Zix treats any enemy not standing near an ally as ISOLATED, and Taste Their Fear does 110% increased damage to them. A squishy champion who steps to a side lane, walks a ward, or gets peeled off their team is not just vulnerable — they are taking roughly double damage from an ability on a low cooldown.",
    cue: "Never be the one standing apart. Isolation is a radius check, so keeping ANY ally near you removes the bonus entirely — the answer is positioning, not defensive items.",
  },
  {
    a: "Nilah", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Jubilant Veil (W)"],
    why: "Jubilant Veil dodges ALL non-turret basic attacks for its duration and cuts magic damage by a quarter on top. Against a champion whose damage arrives as auto-attacks, that is a full negation window she can hold through their steroid.",
    cue: "Stop attacking and reposition for the 2.25 seconds rather than feeding the dodge — abilities still land through it, so use those instead and save your attack-speed window for after.",
  },
  {
    a: "Ashe", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Volley (W)", "Frost Shot (P)"],
    why: "Every one of Ashe's attacks slows, and Volley slows a whole cone. A champion who has spent their dash to close the gap then has to walk the rest, permanently slowed, while she simply backs away.",
    cue: "Do not dash in from max range — she will kite the remaining distance. Close from a flank or after her Volley is on cooldown, because there is no window where she is not slowing you.",
  },

  // ── Point-and-click lockdown that mobility cannot dodge ──────────────────
  {
    a: "Lissandra", bTag: "dash", kind: "counter", weight: 3,
    abilities: ["Frozen Tomb (R)"],
    why: "Frozen Tomb is cast directly on a champion — no skillshot to sidestep and no dash that outruns it. A diver who commits is knocked down and stunned on arrival, and her self-cast version means bursting her instead just puts her in stasis.",
    cue: "You cannot dodge it, so play around the cooldown: bait it on a teammate or fight after she has spent it. If she self-casts, walk away rather than waiting the stasis out next to her.",
  },
  {
    a: "Twisted Fate", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Pick a Card (W)"],
    why: "The gold card is a guaranteed stun attached to a basic attack, so it lands regardless of how mobile the target is. A champion who dashes in is stunned the moment they arrive, and his ultimate means his jungler is arriving too.",
    cue: "Watch the card colour before you commit — gold means do not walk at him. He has to lock the card in advance, so engaging on blue or red is close to free.",
  },
  {
    a: "Annie", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Pyromania (P)"],
    why: "At four stacks Annie's next spell stuns guaranteed, with no skillshot to dodge, and Tibbers arrives with it. A diver landing on her eats an unavoidable stun and a full combo at point-blank range.",
    cue: "Count her stacks — the white swirl around her means the next ability stuns. Do not dive into a charged passive; make her spend it on a minion wave first.",
  },
  {
    a: "Skarner", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Impale (R)"],
    why: "Impale suppresses up to three champions at once and drags them with him. A team that commits together is exactly the shape he wants — the more of them arrive at the same time, the more of them get carried out of the fight.",
    cue: "Do not group tightly when his ultimate is up, and QSS or Mercurial is the only escape once it lands. Spreading the engage costs you tempo but denies him the multi-target grab.",
  },

  // ── Scattering or sleeping a committed team ──────────────────────────────
  {
    a: "Hecarim", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Onslaught of Shadows (R)"],
    why: "Onslaught of Shadows fears everyone it passes through and sends them running away from the fight. A comp that wins by arriving together is scattered in every direction at exactly the moment it committed.",
    cue: "The charge is telegraphed and travels in a line — spread out and let it pass through a smaller part of your team. Tenacity and cleanses shorten the fear, which is usually enough to hold the fight.",
  },
  {
    a: "Zoe", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Sleepy Trouble Bubble (E)"],
    why: "Sleepy Trouble Bubble is one of the longest single crowd controls in the game, and it lingers as a trap if it misses. An engage has to cross the ground in front of her, which is precisely where the bubble sits.",
    cue: "Check the ground before you walk — a missed bubble becomes a trap for five seconds. Minions and allies can body-block it, so engage behind something rather than at the front.",
  },
  {
    a: "Lillia", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Lilting Lullaby (R)"],
    why: "Lilting Lullaby drowsies every champion she has damaged and then sleeps them, wherever they are on the map. A team preparing to engage can simply be put to sleep before it starts, and the first hit on a sleeping target is amplified.",
    cue: "Drowsy is a visible debuff with a delay before sleep — break it by taking damage from anything, including a minion, or use the window to move out of the fight.",
  },
  {
    a: "Fiddlesticks", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Terrify (Q)", "Crowstorm (R)"],
    why: "Crowstorm lands Fiddlesticks in the middle of a grouped team, and Terrify fears whoever it touches on the way in. A comp that stacks up to engage hands him the exact target cluster his ultimate is designed for.",
    cue: "Ward the brush he needs to channel from — the channel is audible and visible, and killing or displacing him during it wastes the whole ultimate. Do not group tightly near unwarded terrain.",
  },
  {
    a: "Amumu", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Curse of the Sad Mummy (R)"],
    why: "Curse of the Sad Mummy entangles everyone around him at once. The tighter the enemy engage, the more of it is stunned simultaneously — it punishes grouping rather than any individual champion.",
    cue: "Spread before you commit. He has to be inside your team for it to be worth casting, so killing or peeling him on approach denies the whole thing.",
  },
  {
    a: "Kennen", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Slicing Maelstrom (R)"],
    why: "Slicing Maelstrom stuns everyone who accumulates his mark while standing near him, so a team that engages onto Kennen stuns itself by staying in the fight.",
    cue: "Leave the storm rather than fighting through it — the stun comes from repeated ticks, so time inside the radius is what kills you. Do not chase him during his ultimate.",
  },

  // ── Undoing the burst ────────────────────────────────────────────────────
  {
    a: "Ekko", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Chronobreak (R)"],
    why: "Chronobreak rewinds Ekko to where he was four seconds ago and heals him for a share of the damage he took in between. A burst rotation that lands perfectly is undone — the damage is refunded and he leaves.",
    cue: "He has to survive the burst to press it, so the answer is either killing him inside the window or saving your damage until it is spent. Grievous Wounds cuts the heal significantly.",
  },
  {
    a: "Xayah", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Featherstorm (R)"],
    why: "Featherstorm makes her untargetable for its duration while still throwing feathers, so a committed burst combo has nothing to land on and she roots the attacker on the recall.",
    cue: "It is a short window and she cannot move far — wait it out rather than spending your combo. And do not stand in the feather line afterwards, because that is the root.",
  },
  {
    a: "LeBlanc", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Distortion (W)"],
    why: "Distortion leaves a marker she can return to, so committing a burst rotation onto her often lands on a champion who simply leaves the moment it starts.",
    cue: "The return has a time limit and a visible marker — fight her away from it, or force the W out with poke before you all-in.",
  },
  {
    a: "Senna", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Dawning Shadow (R)"],
    why: "Dawning Shadow shields every allied champion in an enormous line across the map. Against a comp that wins by chipping a team down before a fight, one cast returns most of that poke damage as shielding.",
    cue: "Force the fight before she has it up, or engage from an angle her line cannot cover. Poking into an available Dawning Shadow is spending your cooldowns for nothing.",
  },

  // ── Peel that answers a dive outright ────────────────────────────────────
  {
    a: "Tristana", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Buster Shot (R)"],
    why: "Buster Shot knocks the target back and stuns, so an assassin who lands on her is simply removed from the fight mid-combo. It is also point-and-click, so their mobility does not help them stay.",
    cue: "Expect to be launched — do not dive her unless you can kill through it or she has already used it. Diving with a follow-up teammate is the way through, since she only has one.",
  },
  {
    a: "Heimerdinger", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["H-28G Evolution Turret (Q)"],
    why: "His turrets are a permanent damage source that does not care about cooldowns, so a dive onto Heimerdinger is a dive into sustained fire from three separate sources plus his own stun.",
    cue: "Kill the turrets before committing, or dive from an angle where only one covers him. Diving into a full turret nest at low health is how most Heimerdinger kills happen.",
  },
  {
    a: "Maokai", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Twisted Advance (W)", "Nature's Grasp (R)"],
    why: "Twisted Advance is an untargetable dash that roots on arrival, and Nature's Grasp sends a wall of brambles that roots everything in its path. Against a champion whose plan is a single gap-close, both answers arrive without needing to predict it.",
    cue: "His W cannot miss once cast, so hold your dash for after it lands rather than before. His ultimate is a long telegraphed line — move perpendicular to it, not backwards.",
  },
  {
    a: "Lee Sin", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Dragon's Rage (R)"],
    why: "Dragon's Rage kicks a champion out of the fight and knocks back everything they collide with. A committed engage is answered by its own frontliner being punted back through it.",
    cue: "Spread out on approach so the kicked target does not collide with your team. If you are the engage, expect to be the one kicked — respect his range before you commit.",
  },

  // ── Zone denial and structural pressure ─────────────────────────────────
  {
    a: "Jinx", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Flame Chompers! (E)"],
    why: "Flame Chompers root whatever walks over them, so the ground an assassin has to cross to reach her is the ground that stops them. They also body-block a dash.",
    cue: "They are visible and take a moment to arm — go around, or force them out before engaging. Never dash directly onto the line she just laid.",
  },
  {
    a: "Viktor", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Gravity Field (W)"],
    why: "Gravity Field slows anything standing in it and stuns once they have accumulated enough time inside. A champion who dashes in and stays to trade is stunned for doing exactly what their kit wants.",
    cue: "Do not fight standing in the field — dash in, trade, and leave, or step out and back in. The stun comes from time spent inside, not from the initial hit.",
  },
  {
    a: "Qiyana", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Supreme Display of Talent (R)"],
    why: "Her ultimate travels along terrain and stuns everything near a wall, so a team that engages through a chokepoint or fights in the jungle is stunned as a group.",
    cue: "Fight in open ground where her ultimate has no wall to propagate along. In a corridor, spread out — the shockwave follows the terrain, not the champions.",
  },
  {
    a: "Volibear", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Stormbringer (R)"],
    why: "Stormbringer leaps him in with displacement immunity and DISABLES enemy turrets in the area. A comp that wants to sit back, poke and defend under tower loses the tower as an argument for the duration.",
    cue: "The leap cannot be interrupted by displacement — peel with slows and roots instead, or step out of the landing circle. Do not rely on the turret to save you while it is up.",
  },
  {
    a: "Darius", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Crippling Strike (W)"],
    why: "Crippling Strike slows movement and cripples attack speed, so an auto-attack champion trading with him loses most of its damage output for the length of the trade while he keeps his.",
    cue: "Do not stand and trade autos through the cripple — disengage and come back when it is down. His Q heals off champions hit, so backing off also denies the sustain.",
  },
  {
    a: "Ahri", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Charm (E)"],
    why: "Charm interrupts whatever the target is doing and walks them toward her, so a dash spent engaging becomes a slow walk in the wrong direction with her full combo landing.",
    cue: "It is a slow, thin skillshot — do not dash in a straight line at her. Bait the charm first, then commit, because it is her only reliable lock-up.",
  },
  {
    a: "Sona", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Crescendo (R)"],
    why: "Crescendo stuns everyone in a long line and forces them to dance. A team that engages in formation is stunned in formation, and her team fights a stationary target.",
    cue: "Do not walk at her as a group along one axis. The cast is quick but the line is narrow — approaching from two angles means only half your team is caught.",
  },
];





// ── Lookups ──────────────────────────────────────────────────────────────────
// tagsOf is injected by the caller (counterPicker) so this module stays free of
// circular imports — it needs to know a champion's derived traits to resolve
// bTag entries, and counterPicker is where those are computed.

const matchesTarget = (entry, foeDd, foeTags) => {
  // `b` is one champion or a list of them (several champions can share the same
  // interaction — every knock-up enables BOTH Yasuo and Yone).
  if (entry.b) return Array.isArray(entry.b) ? entry.b.includes(foeDd) : entry.b === foeDd;
  return entry.bTag ? foeTags.includes(entry.bTag) : false;
};

// A champion can carry several tags at once (Blitzcrank is both "pick" and
// "engage"), so two entries describing the SAME ability would both fire and
// count its weight twice. Keep only the strongest entry per unique ability set.
// Matching on the exact ability list is not enough: Taric's "Cosmic Radiance"
// and "Cosmic Radiance + Bastion" are different lists naming the SAME ultimate,
// so both fired and its weight counted twice. Entries are compared by ability
// OVERLAP instead — if two share any ability, only the stronger is kept.
const dedupeByAbility = (entries) => {
  const kept = [];
  for (const e of [...entries].sort((a, b) => (b.weight || 1) - (a.weight || 1))) {
    const abilities = e.abilities || [];
    const clash = kept.some((k) => (k.abilities || []).some((x) => abilities.includes(x)));
    if (!clash) kept.push(e);
  }
  return kept;
};

/** Interactions where `meDd` counters `foeDd`. */
export function counterInteractions(meDd, foeDd, foeTags = []) {
  return dedupeByAbility(
    INTERACTIONS.filter((e) => e.kind === "counter" && e.a === meDd && matchesTarget(e, foeDd, foeTags)));
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
