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
// ─────────────────────────────────────────────────────────────────────────────

export const INTERACTIONS = [
  // ── Kits that invalidate a specific champion ───────────────────────────────
  {
    a: "Malphite", b: "Pantheon", kind: "counter", weight: 3,
    abilities: ["Granite Shield (P)", "Thunderclap (W)", "Seismic Shard (Q)", "Unstoppable Force (R)"],
    why: "Granite Shield is a free 10%-max-HP shield that refreshes out of combat, so Pantheon's Q poke is undone between trades. Thunderclap's bonus armour blunts a kit that is entirely physical, Seismic Shard steals movement speed so Pantheon can't close or disengage, and Unstoppable Force is a point-and-click knock-up his E cannot block.",
  },
  {
    a: "Nasus", b: "Pantheon", kind: "counter", weight: 3,
    abilities: ["Wither (W)"],
    why: "Wither is point-and-click, unavoidable, and ramps over five seconds while also crippling attack speed. Pantheon's whole pattern is trade-and-step-away behind Aegis; Withered, he cannot leave the trade he started, and Nasus simply out-sustains him.",
  },
  {
    a: "Shen", b: "Yasuo", kind: "counter", weight: 2,
    abilities: ["Spirit's Refuge (W)"],
    why: "Spirit's Refuge blocks all non-turret BASIC ATTACKS in the zone, and Yasuo's damage is overwhelmingly auto-attacks woven between Q casts — inside the zone his output collapses. Note it does not block Steel Tempest itself: Q is an ability that applies on-hit effects, not a basic attack.",
  },
  {
    a: "Rammus", b: "Warwick", kind: "counter", weight: 3,
    abilities: ["Defensive Ball Curl (W)", "Frenzying Taunt (E)"],
    why: "Warwick is a sustained physical auto-attacker with no way to disengage once committed. Defensive Ball Curl gives Rammus bonus armour AND returns damage to anyone who basic-attacks him, so Warwick's own DPS kills him, and the taunt forces exactly that.",
  },
  {
    a: "Trundle", bTag: "tank", kind: "counter", weight: 2,
    abilities: ["Subjugate (R)"],
    why: "Subjugate drains a percentage of the target's armour and magic resist and gives it to Trundle, so the tankier the enemy the harder it swings. Pillar of Ice on top means the frontline can't reach anyone anyway.",
  },
  {
    a: "Vayne", bTag: "tank", kind: "counter", weight: 2,
    abilities: ["Silver Bolts (W)"],
    why: "Every third hit on the same target deals a percentage of their MAXIMUM health as TRUE damage — armour, magic resist and shields are all irrelevant. The bigger the health bar, the faster it melts.",
  },

  // ── Abilities that answer an entire category ───────────────────────────────
  {
    a: "Morgana", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Black Shield (E)"],
    why: "Black Shield absorbs magic damage and, more importantly, blocks the next crowd control outright. A comp whose engage is one hook or one point-and-click lock-up has its entire win condition cancelled by a 24-second-cooldown button.",
  },
  // ── Malzahar: the counter-pick, and why ───────────────────────────────────
  // Three separate answers stacked in one kit — a recurring CC immunity, a
  // point-and-click suppression, and a silence. Each is tagged separately so the
  // engine credits him against the right comps rather than as one blanket buff.
  {
    a: "Malzahar", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Void Shift (P)"],
    why: "Void Shift periodically grants crowd control IMMUNITY plus 90% damage reduction until it is spent. A comp whose engage is one hook or one point-and-click lock-up just feeds it: the CC is negated, the follow-up lands into 90% reduction, and the passive starts recharging. Unlike Morgana's Black Shield it is free and needs no cast — but it is self-only, so it saves him and nobody else.",
  },
  {
    a: "Malzahar", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Void Shift (P)", "Nether Grasp (R)"],
    why: "An assassin's all-in opens with burst or CC, which Void Shift eats outright, and Nether Grasp answers with a point-and-click knock-down into a 2.5-second suppression that no amount of mobility avoids. Suppression also stops dashes and channels mid-cast, so the dive ends where it started. QSS or Mercurial Scimitar is their only real out — plain Cleanse does not remove suppression.",
  },
  {
    a: "Malzahar", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Nether Grasp (R)"],
    why: "Nether Grasp targets a champion directly rather than a location, so no dash or blink dodges it, and the suppression cancels whatever they were casting. Note the channel continues while the tether holds even if the suppression itself is cleansed.",
  },
  {
    a: "Malzahar", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Call of the Void (Q)", "Void Shift (P)"],
    why: "Call of the Void silences, which cuts a combo champion off mid-sequence, and Void Shift's 90% damage reduction means the burst window they built their whole game around simply does not kill him.",
  },
  {
    a: "Poppy", bTag: "dash", kind: "counter", weight: 3,
    abilities: ["Steadfast Presence (W)"],
    why: "Steadfast Presence stops dashes dead and knocks the dasher down. Champions whose engage IS their dash simply cannot start a fight while it is up, and blowing the dash into it usually means dying for free.",
  },
  {
    a: "Cassiopeia", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Miasma (W)"],
    why: "Miasma grounds everything standing in it — no dashes, no blinks, no flash. Dropped between herself and a diver it removes their only way in, and dropped on top of them it removes their only way out.",
  },
  {
    a: "Yasuo", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Wind Wall (W)"],
    why: "Wind Wall destroys every enemy projectile that touches it. Against a comp built on ranged skillshots, one button deletes a teamfight's worth of damage and the wall is up more often than their cooldowns.",
  },
  {
    a: "Braum", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Unbreakable (E)"],
    why: "Unbreakable intercepts the first projectile entirely and reduces the damage of everything behind it for allies in the cone — it turns a poke lane into a stalemate and blanks a scripted engage.",
  },
  {
    a: "Teemo", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Blinding Dart (Q)"],
    why: "Blinding Dart makes the target's basic attacks miss entirely. Against anything whose damage is auto-attacks, that is a full damage negation on a short cooldown — and it lasts through their steroid window.",
  },
  {
    a: "Quinn", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Blinding Assault (Q)"],
    why: "Blinding Assault nearsights and blinds, so an auto-attack carry loses both its damage and its vision of her while she resets the trade at range.",
  },
  {
    a: "Jax", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Counter Strike (E)"],
    why: "Counter Strike dodges every basic attack for its duration and then stuns everyone nearby. Against an auto-attacker that is both a full damage block and the opening of his own all-in.",
  },
  {
    a: "Fiora", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Riposte (W)"],
    why: "Riposte blocks all damage for its window and stuns if it catches an immobilising ability. Against a comp whose fight starts with one telegraphed engage ultimate, parrying that single spell wins the fight before it starts.",
  },
  {
    a: "Olaf", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Ragnarok (R)"],
    why: "Ragnarok makes Olaf immune to crowd control for its duration. Comps that rely on locking him down to survive his walk-forward have no answer once it is active.",
  },
  {
    a: "Kassadin", bTag: "ap", kind: "counter", weight: 2,
    abilities: ["Void Stone (P)"],
    why: "Void Stone reduces incoming magic damage outright, so an AP-only opponent is fighting him at a permanent deficit before items are even considered.",
  },
  {
    a: "Pantheon", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Aegis Assault (E)"],
    why: "Aegis Assault blocks ALL damage from one direction while he channels. Against single-source ranged poke he simply turns the trade off, then walks forward while it is on cooldown.",
  },
  {
    a: "Garen", bTag: "ap", kind: "counter", weight: 1,
    abilities: ["Courage (W)"],
    why: "Courage's damage-reduction window is strongest against a single large burst, so a mage's combo lands into the one moment he is most durable — and his silence on Q cuts the follow-up.",
  },

  // ── Directional damage negation ───────────────────────────────────────────
  // Pantheon's Aegis Assault is invulnerability to non-turret damage from ONE
  // direction for 1.5s. It is a damage block, NOT a crowd control block — that
  // distinction decides which champions it actually beats.
  {
    a: "Pantheon", b: "Sett", kind: "counter", weight: 3,
    abilities: ["Aegis Assault (E)"],
    why: "Haymaker is Sett's whole payoff — a single huge directional punch whose damage scales with the Grit he has banked. Aegis Assault makes Pantheon invulnerable to damage from the direction he braces, so the punch he spent a whole trade charging simply does not land, and Sett is left with a spent W and no Grit.",
  },
  {
    a: "Pantheon", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Aegis Assault (E)"],
    why: "A burst combo is a committed sequence from one place. Bracing into it eats the whole rotation for 1.5 seconds and leaves them on cooldown at melee range. The catch is that Aegis blocks DAMAGE, not crowd control — anything that stuns or knocks him up still lands and cuts the channel.",
  },
  {
    a: "Samira", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Blade Whirl (W)"],
    why: "Blade Whirl destroys every hostile non-turret projectile in the area for its duration. Against a comp that fights by throwing skillshots, it deletes a full engage's worth of damage and lets her walk into her own range.",
  },

  // ── Spell shields: eat the ONE spell the enemy's game plan needs ──────────
  {
    a: "Sivir", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Spell Shield (E)"],
    why: "Spell Shield blocks the next hostile spell outright and gives her movement speed for doing it. A comp whose engage is one hook or one point-and-click lock-up has a single button to play around, and guessing wrong means their cooldown is gone and she is now faster than them.",
  },
  {
    a: "Nocturne", bTag: "pick", kind: "counter", weight: 3,
    abilities: ["Shroud of Darkness (W)"],
    why: "Shroud of Darkness eats the next hostile spell and doubles his attack speed for succeeding, so a missed hook does not just fail — it arms him. Note a spell shield blocks SPELLS, not basic attacks.",
  },
  {
    a: "Sivir", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Spell Shield (E)"],
    why: "Most burst rotations open with one mandatory spell — the gap-closer or the root that makes the rest land. Blocking that first cast breaks the chain and the follow-up hits nothing.",
  },
  {
    a: "Nocturne", bTag: "burst", kind: "counter", weight: 2,
    abilities: ["Shroud of Darkness (W)"],
    why: "The shield blanks the opening spell of a burst combo, and the attack-speed refund means he wins the fight that was supposed to kill him.",
  },

  // ── Cleanses and crowd control immunity ──────────────────────────────────
  {
    a: "Gangplank", bTag: "pick", kind: "counter", weight: 2,
    abilities: ["Remove Scurvy (W)"],
    why: "Remove Scurvy cleanses ALL crowd control and heals. Being hooked or rooted is normally the whole of a pick comp's kill — he removes it mid-combo and walks out at health.",
  },
  {
    a: "Alistar", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Unbreakable Will (R)"],
    why: "Unbreakable Will cleanses all crowd control and then reduces incoming damage for seven seconds. A team that needs to burst him down to stop the engage cannot, and he is free to keep displacing their carry the entire time.",
  },

  // ── Untargetability and invulnerability windows ──────────────────────────
  {
    a: "Fizz", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Playful / Trickster (E)"],
    why: "Playful makes him untargetable for the pole hop, which dodges targeted spells outright AND lets skillshots already in flight pass through him. An assassin who commits a full combo into it has nothing left and is standing next to a Fizz who has not used his ultimate.",
  },
  {
    a: "Vladimir", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Sanguine Pool (W)"],
    why: "Sanguine Pool makes him untargetable and ghosted for two seconds. Burst arrives as one committed window; pooling through it means the window closes with him alive and their cooldowns spent.",
  },
  {
    a: "Kayle", bTag: "dive", kind: "counter", weight: 3,
    abilities: ["Divine Judgment (R)"],
    why: "Divine Judgment grants full invulnerability for 2.5 seconds and can be cast on an ALLY. A dive comp's plan is to focus one target down quickly — she makes that target unkillable for exactly the window they committed to, then the swords punish everyone standing on top.",
  },
  {
    a: "Tryndamere", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Undying Rage (R)"],
    why: "Undying Rage sets a minimum health threshold for five seconds and can be cast even while affected by cast-inhibiting crowd control. Anything built to kill him in one window fails, and he is still swinging afterwards. Grievous Wounds and hard displacement are the real answers, not more damage.",
  },
  {
    a: "Kindred", bTag: "burst", kind: "counter", weight: 3,
    abilities: ["Lamb's Respite (R)"],
    why: "Lamb's Respite stops all units in the zone from dying for its duration — a full negation of an execute or a burst rotation. It applies to BOTH teams, so it saves her carry and denies the kill, but it also protects whoever she was about to finish.",
  },
  {
    a: "Master Yi", bTag: "poke", kind: "counter", weight: 2,
    abilities: ["Alpha Strike (Q)"],
    why: "Alpha Strike makes him untargetable while it resolves, so it is not just a gap-closer — it is a dodge for a telegraphed skillshot or a channelled ultimate aimed at him.",
  },

  // ── Terrain: the map itself as an answer to mobility ─────────────────────
  {
    a: "Trundle", bTag: "engage", kind: "counter", weight: 2,
    abilities: ["Pillar of Ice (E)"],
    why: "Pillar of Ice is real terrain that knocks units away from where it lands and slows around it. Dropped on top of an engage it separates the frontline from the fight, and dropped behind a fleeing enemy it takes their escape route away entirely.",
  },
  {
    a: "Anivia", bTag: "engage", kind: "counter", weight: 3,
    abilities: ["Crystallize (W)"],
    why: "Crystallize is a five-second impassable wall that knocks units away as it forms. It cuts a committed engage in half — the ones who got through are now fighting alone, and the rest have to walk around.",
  },
  {
    a: "Anivia", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Crystallize (W)"],
    why: "A dash covers a fixed distance; a wall that appears mid-dash means arriving somewhere useless. Against a champion whose only engage is one dash, the wall is a hard no.",
  },

  // ── Point-and-click lockdown that mobility cannot answer ─────────────────
  {
    a: "Warwick", bTag: "dash", kind: "counter", weight: 2,
    abilities: ["Infinite Duress (R)"],
    why: "He leaps with crowd control immunity and, on connecting, knocks the target down and suppresses them. Suppression cancels channels and dashes mid-cast, and immunity on the way in means their peel does not stop him arriving.",
  },
  {
    a: "Mordekaiser", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Realm of Death (R)"],
    why: "Realm of Death banishes one champion into a seven-second 1v1 and steals a share of their stats for the duration. An auto-attack carry's entire value is dealing damage from behind a team — removed from that team, it is exactly the fight it is worst at.",
  },
  {
    a: "Urgot", bTag: "dive", kind: "counter", weight: 2,
    abilities: ["Fear Beyond Death (R)"],
    why: "Fear Beyond Death impales and leashes the first champion hit, dragging them back to him. A diver who commits and drops low does not get to leave — the ultimate executes them and fears everyone nearby.",
  },

  // ── Sustained cripples ───────────────────────────────────────────────────
  {
    a: "Nasus", bTag: "auto", kind: "counter", weight: 3,
    abilities: ["Wither (W)"],
    why: "Wither is point-and-click and ramps over five seconds, slowing movement AND crippling attack speed. Against a champion whose damage is basic attacks, that is most of their output removed for the length of a fight, with nothing to dodge.",
  },
  {
    a: "Malphite", bTag: "auto", kind: "counter", weight: 2,
    abilities: ["Thunderclap (W)", "Ground Slam (E)"],
    why: "Ground Slam reduces the attack speed of everyone around him while Thunderclap's bonus armour blunts what still lands — a compounding answer to anything that fights by attacking repeatedly.",
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
