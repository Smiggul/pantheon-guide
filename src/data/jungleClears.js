// ─────────────────────────────────────────────────────────────────────────────
//  jungleClears.js — data behind the slide-out Jungle panel.
//   • JUNGLE_FUNDAMENTALS — evergreen macro coaching (when to skip camps, tempo,
//     base timers, objectives-vs-kills). Sourced from a jungle-coaching video.
//   • JUNGLE_CLEARS — a seeded "most optimal" first-clear + gank plan per champ.
//     Routes are a sensible default per clear-style; refine per champ over time.
// ─────────────────────────────────────────────────────────────────────────────

export const JUNGLE_FUNDAMENTALS = [
  { title: "Read the draft first",
    body: "Before you path, count YOUR crowd control vs the ENEMY's dashes. If they lack dashes and you have CC, one CC is one kill — so prioritise ganks over farming. Also watch who wards: a lane that doesn't ward is a free gank." },
  { title: "When to skip a camp",
    body: "Skip a camp (especially scuttle) whenever a play is worth more than the ~80–300g camp. 5–10 seconds of tempo can be a 600g swing — you get a kill AND save your laner instead of losing them. But if your regular camps are up, take them over scuttle: they give you tempo to punish overextensions." },
  { title: "The quadrant rule",
    body: "Always clear at least 2 camps of a quadrant (ideally 3) before you look for a play — never gromp → skip → gank. Finishing raptors/wolves first means you arrive at the gank a level and a camp stronger, so you actually win the fight." },
  { title: "Base timers > walking",
    body: "When you have the gold (~1.5k+) and you're low, base NOW — spend it, get HP and item power, and you gain ~30 seconds of tempo. Don't walk 7s to a dragon when basing first lets you make a play AND take the dragon after." },
  { title: "Objectives vs kills",
    body: "When you're ahead, a kill (then the objective) beats just the objective — a dead enemy loses gold/XP AND you still get the drake after. Objectives are for when you can't get anything better; don't tunnel a dragon while kills are on the map." },
  { title: "Count numbers before you fight",
    body: "Check where your laners and the next cannon wave are before committing. Play slow until your numbers arrive, then go in — a 2v4 is a throw, but the same fight is free once your cannon and laner show. Track the minimap constantly." },
  { title: "Ahead = take less risk",
    body: "The bigger your lead, the safer you should play — you don't need the flashy 2v3. Convert tempo into free picks and objectives, ping enemies in their face to pressure, and let your lead compound instead of gambling it." },
];

// Per-champ first-clear + gank plan. `start` = buff to start; `route` = camp order;
// `gank` = when to look for the first play; `note` = the champ-specific wrinkle.
const FARM_RED  = "Red → Krugs → Raptors → Wolves → Blue → Gromp";
const FARM_BLUE = "Blue → Gromp → Wolves → Raptors → Red → Krugs";

export const JUNGLE_CLEARS = {
  // ── Farm-to-spike / scaling clears (full 6 camps → scuttle → gank on spike) ──
  Karthus:    { start:"Blue", route:FARM_BLUE, gank:"Rarely — farm to R", note:"Pure farmer: hit your item spikes fast and use R for map-wide pressure; only leave camps for a guaranteed R sniper pick." },
  Shyvana:    { start:"Red",  route:FARM_RED,  gank:"Level 6 (R dive)",   note:"Hard-farm to 6 as fast as possible — her power is R uptime, so play around its cooldown and dive when it's up." },
  Graves:     { start:"Red",  route:FARM_RED,  gank:"After scuttle / lvl 6", note:"Fastest clear in the game — full clear both scuttles, then convert the tempo into ganks and objective control." },
  Kayn:       { start:"Red",  route:FARM_RED,  gank:"After form (~lvl 6-9)", note:"Full clear to rush your form — orbs come from clearing and skirmishing, so prioritise farm + short fights early, then snowball post-transform." },
  Nunu: { start:"Blue", route:FARM_BLUE, gank:"Lvl 3 (Snowball)", note:"Consume + Snowball let you gank early AND farm fast — path toward a lane with CC follow-up and roll a level-3 Snowball in." },
  Fiddlesticks:{ start:"Blue", route:FARM_BLUE, gank:"Lvl 6 (R flank)",    note:"Farm to 6, ward-abuse your passive for fake-flanks, then use R to teamfight around objectives; Q drain lets you clear safely." },
  Nasus:      { start:"Red",  route:FARM_RED,  gank:"Lvl 6",              note:"Stack Q on camps + take extra lane minions where safe — the 26.16 Q change means small monsters give more, so a full clear stacks fast." },
  Belveth: { start:"Red",  route:FARM_RED,  gank:"Lvl 6 (R spike)",    note:"Clear fast for the R spike; on-hit build wants attack speed, so full-clear both scuttles and skirmish once R is online." },
  Kindred:    { start:"Red",  route:FARM_RED,  gank:"Around your marks",   note:"Path toward your passive marks — hit them for permanent stacks, so route and gank where the next mark spawns." },
  MasterYi:{ start:"Red",  route:FARM_RED,  gank:"Lvl 6 (R reset)",    note:"Farm to your item spike, then use Q-reset + R to run people down; avoid early skirmishes into CC before items." },
  Trundle:    { start:"Red",  route:FARM_RED,  gank:"Lvl 3-4",            note:"Broken early Q lets you duel most junglers — full-clear, contest scuttle, and pillar-gank a lane you can lock down." },
  Skarner:    { start:"Blue", route:FARM_BLUE, gank:"Lvl 3 (Q-drag)",     note:"Grasp/Heartsteel tank — clear two camps then look to Q-drag + R a lane into your team; strong on early objective contests." },
  Sejuani:    { start:"Blue", route:FARM_BLUE, gank:"Lvl 3-6",            note:"Tanky teamfight engage — clear, then look for Aftershock R engages around scuttle/objectives once you hit 6." },
  Amumu:      { start:"Red",  route:FARM_RED,  gank:"Lvl 3 (Q gank)",     note:"Q-bandage ganks a lane with follow-up CC at level 3; otherwise farm and save R for a multi-man teamfight." },
  Maokai:     { start:"Blue", route:FARM_BLUE, gank:"Lvl 3-6",           note:"Sapling-farm the clear, then use W root ganks; strong objective control with R engage once you're 6." },
  Rammus:     { start:"Red",  route:FARM_RED,  gank:"Lvl 3 (Q roll)",     note:"Q-roll ganks a lane where the enemy has to walk at you; counter-tank build shreds AD, so path toward the fed AD threat." },
  Zac:        { start:"Blue", route:FARM_BLUE, gank:"Lvl 3-6 (E flank)",  note:"E-slingshot flank ganks over walls; tanky pet-scaling clear, so full-clear then look for long-range E engages on grouped enemies." },
  Lillia:     { start:"Blue", route:FARM_BLUE, gank:"Lvl 6 (R)",         note:"Fast mobile clear — kite camps with passive move speed, farm to your Liandry's/R spike, then R for team-wide sleep around objectives." },
  Warwick:    { start:"Blue", route:FARM_BLUE, gank:"Lvl 2-3",           note:"Blood-hunt lets you gank the moment a laner is low — clear two camps to lvl 3, then sniff out low-HP lanes with your passive." },
  Ivern:      { start:"Blue", route:FARM_BLUE, gank:"Lvl 3 (free camps)", note:"No-smite Q-clear frees his camps and lets him permaroam — path to shield-gank a lane, then enchant your carry all game." },
  RekSai:     { start:"Red",  route:FARM_RED,  gank:"Lvl 3 (tunnel)",     note:"Tunnel-gank a lane after raptors; Q burrow damage + knockup make level-3 ganks lethal into no-dash lanes." },

  // ── Early-skirmish / gank-first clears (3 camps → look for a play) ──
  LeeSin:     { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (Q-Q)", note:"Level-3 Q gank into a lane with no dash — his whole game is the early snowball, so path toward the most gankable lane and repeat." },
  Elise:      { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (E stun)", note:"Rappel + E stun make her a lethal early ganker — clear to 3 and dive a lane; falls off, so snowball hard early." },
  XinZhao:    { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (E-Q)", note:"E-dash + knockup is a strong level-3 gank; Sundered Sky duelist wins early skirmishes, so contest scuttle and dive." },
  Nidalee:    { start:"Red",  route:FARM_RED, gank:"Cheese / spears", note:"Fast, healthy clear + long-range spear poke — pressure lanes with spears and cougar-dive low targets; scales via clear speed." },
  Khazix:     { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (isolation)", note:"First Strike economy assassin — gank isolated targets for the Q bonus; evolve for picks and skip fights you can't isolate." },
  Pantheon:   { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (Q-W stun)", note:"Point-and-click W stun makes level-3 ganks near-guaranteed; Sundered Sky spikes hard, so snowball the early game." },
  Vi:         { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 6 (R lock)", note:"Q-engage ganks early, but her real gank spike is R at 6 — a point-and-click lockdown; Sundered Sky keeps her sticky." },
  JarvanIV:   { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (E-Q)", note:"Flag-drag knockup ganks at 3; strong objective setup with R cage — path toward a lane you can E-Q flash." },
  Rengar:     { start:"Red",  route:FARM_RED, gank:"Lvl 6 (R roam)", note:"Bush-leap picks — path bush to bush and use R to roam for isolated kills; snowball or he falls off." },
  Shaco:      { start:"Red",  route:"Red → boxes → gank", gank:"Lvl 3 (box)", note:"Box-and-Q cheese ganks + deep invades — AD crit build one-shots squishies; abuse boxes for vision and fear ganks." },
  Nocturne:   { start:"Red",  route:FARM_RED, gank:"Lvl 6 (R)", note:"Farm to 6, then R for unstoppable global picks; his fear + spellshield make dives lethal once ult is up." },
  Diana:      { start:"Red",  route:FARM_RED, gank:"Lvl 6 (R)", note:"Conqueror bruiser — full clear to 6, then R-engage grouped enemies; strong at diving with the R pull." },
  Ekko:       { start:"Blue", route:FARM_BLUE, gank:"Lvl 3-6", note:"Dark Harvest — W-stun ganks a slowed/CC'd lane, and R gives outplay safety; scale to the AP spike then pick people off." },
  Hecarim:    { start:"Blue", route:FARM_BLUE, gank:"Lvl 6 (R)", note:"Stormraider's speed clear — build move speed and R-fear a lane from fog; strongest ganks come with the R engage at 6." },
  Viego:      { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3-6", note:"W-stun ganks + resets — dive a lane you can lock, then snowball off possessions in every skirmish." },
  MonkeyKing: { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3-6", note:"Clone-fake + Q shred wins early duels; point-and-click damage makes ganks reliable — path toward a lane you can dive." },
  Talon:      { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3 (W-Q)", note:"Fleet/Umbral roamer — wall-hop ganks and permaroam; snowball early with the lethality two-item spike." },
  Naafiri:    { start:"Red",  route:"Red → Krugs → Raptors → gank", gank:"Lvl 3-6", note:"Pack-dog dashes make ganks sticky — dive a no-dash lane and use R to run down a fleeing target." },
  Sylas:      { start:"Red",  route:FARM_RED, gank:"Lvl 3-6", note:"Conqueror bruiser clear — E-chain ganks and steal a game-changing R in fights; scales into a duelling monster." },
  DrMundo:    { start:"Red",  route:FARM_RED, gank:"Lvl 6", note:"Heartsteel/Titanic tank — unkillable full clear, then walk lanes down with cleavers and R; farm through early aggression." },
  Evelynn:    { start:"Blue", route:FARM_BLUE, gank:"Lvl 6 (Charm)", note:"Farm to 6 (stealth online), then Charm-execute isolated squishies; avoid early skirmishes before your R spike." },
  Fizz:       { start:"Red",  route:FARM_RED, gank:"Lvl 6 (R)", note:"Off-meta AP diver — farm to 6, then E-untargetable dive + R for picks; play around the level-6 all-in." },
  Mordekaiser:{ start:"Red",  route:FARM_RED, gank:"Lvl 6 (R realm)", note:"1v1 monster — full clear, then R a key target into the death realm and duel them; path toward an isolatable carry." },
  Aatrox:     { start:"Red",  route:FARM_RED, gank:"Lvl 3-6", note:"Hubris-first snowball — Q-knockup ganks and heals through skirmishes; contest early scuttle and fights." },
  Zyra:       { start:"Blue", route:FARM_BLUE, gank:"Lvl 3-6", note:"Plant-farm the clear + Liandry's — E-root ganks a CC'd lane and zone objectives with plants and R." },
  Taliyah:    { start:"Blue", route:FARM_BLUE, gank:"Lvl 6 (R roam)", note:"Dark Harvest burst ganker — use W knock-aside at 3 and R to cross-map gank; strong pick + roam pressure." },
  Shen:       { start:"Red",  route:FARM_RED, gank:"Lvl 6 (R global)", note:"Off-meta AP tech (C-tier, ~50%): Fleet + Dusk and Dawn ability-haste build. Kite the clear with W's passive shield, farm to your Q-nuke spike, and abuse R for global ganks — his whole edge over other junglers is the ult presence." },
};
