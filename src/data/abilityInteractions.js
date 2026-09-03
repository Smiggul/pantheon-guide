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
