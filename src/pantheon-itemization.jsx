import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE HELPERS  (local paths — put PNGs in public/images/)
// ─────────────────────────────────────────────────────────────────────────────
const IMG      = "./images";
const champImg = (dd)   => `${IMG}/champions/${dd}.png`;
const itemImg  = (name) => `${IMG}/items/${name.replace(/'/g, "").replace(/\s+/g, "_")}.png`;

// ─────────────────────────────────────────────────────────────────────────────
//  ITEM ACCENT COLOURS  (fallback dot colour when image is missing)
// ─────────────────────────────────────────────────────────────────────────────
const IC = {
  "Eclipse":"#ffd700","Black Cleaver":"#e74c3c","Sundered Sky":"#ffe066",
  "Trinity Force":"#ff8c00","Spear of Shojin":"#ff9800",
  "Serylda's Grudge":"#f39c12","Lord Dominik's Regards":"#e67e22",
  "Sterak's Gage":"#1abc9c","Death's Dance":"#e91e63",
  "Plated Steelcaps":"#95a5a6","Mercury's Treads":"#3498db",
  "Maw of Malmortius":"#9b59b6","Banshee's Veil":"#673ab7",
  "Mortal Reminder":"#ff5722","Randuin's Omen":"#2ecc71",
  "Frozen Heart":"#00bcd4","Serpent's Fang":"#4caf50",
  "Youmuu's Ghostblade":"#607d8b","Nashor's Tooth":"#9cba00",
  "Liandry's Torment":"#ff6b35","Malignance":"#a855f7",
  "Shadowflame":"#ff4444","Rabadon's Deathcap":"#ff69b4",
  "Void Staff":"#9400d3","Morellonomicon":"#b22222",
  "Zhonya's Hourglass":"#daa520","Rylai's Crystal Scepter":"#4fc3f7",
  "Wit's End":"#40e0d0","Sorcerer's Shoes":"#7986cb",
  "Boots of Swiftness":"#80cbc4",
};
const ic = (n) => IC[n] || "#aaaaaa";

// ─────────────────────────────────────────────────────────────────────────────
//  ENEMY CLASSES
// ─────────────────────────────────────────────────────────────────────────────
const CLASSES = {
  JUGGERNAUT:  { label:"Juggernaut",   emoji:"🏋️", color:"#c0392b", glow:"#e74c3c", desc:"High HP, high damage, low mobility. Walks you down.", champions:["Darius","Garen","Sett","Mordekaiser","Nasus","Urgot","Illaoi","Dr. Mundo","Trundle","Sion","Yorick","Olaf","Warwick","Volibear","Aatrox"] },
  DIVER:       { label:"Diver",         emoji:"⚡",  color:"#d35400", glow:"#e67e22", desc:"Mobile fighters who mirror your aggression. Extended fights kill you.", champions:["Irelia","Camille","Renekton","Vi","Lee Sin","Hecarim","Jarvan IV","Briar","Rek'Sai","Diana","Wukong","Xin Zhao","Sylas","Elise","Nocturne","Riven"] },
  ASSASSIN:    { label:"Assassin",      emoji:"🗡️", color:"#7d3c98", glow:"#9b59b6", desc:"One-shot from fog of war. Their burst window is your kill window.", champions:["Zed","Akali","Talon","Katarina","Kha'Zix","Fizz","Evelynn","Kassadin","LeBlanc","Ekko","Qiyana","Rengar","Naafiri","Shaco","Pyke"] },
  SKIRMISHER:  { label:"Skirmisher",    emoji:"⚔️", color:"#1a6b3c", glow:"#27ae60", desc:"Win extended fights. Survive your burst and they out-duel you.", champions:["Fiora","Jax","Yasuo","Yone","Tryndamere","Gwen","Master Yi","Kayn","Kled","Viego","Nilah","Lillia"] },
  BURST_MAGE:  { label:"Burst Mage",    emoji:"💥", color:"#1a5276", glow:"#2980b9", desc:"Single large combo from range. Often CC before you can react.", champions:["Syndra","Veigar","Orianna","Lissandra","Vex","Annie","Zoe","Aurora","Neeko","Ahri","Karma","Lux"] },
  BATTLEMAGE:  { label:"Battlemage",    emoji:"🌀", color:"#0e6655", glow:"#1abc9c", desc:"Sustained AP DPS at medium range, often with significant healing.", champions:["Vladimir","Ryze","Cassiopeia","Swain","Viktor","Karthus","Brand","Malzahar","Azir","Rumble","Taliyah","Aurelion Sol"] },
  ARTILLERY:   { label:"Artillery",     emoji:"🎯", color:"#4a235a", glow:"#8e44ad", desc:"Long-range poke outside your engage range. Whittle you down first.", champions:["Xerath","Vel'Koz","Ziggs","Heimerdinger","Hwei","Mel","Jayce","Lux"] },
  MARKSMAN:    { label:"Marksman",      emoji:"🏹", color:"#7b6d00", glow:"#f1c40f", desc:"Fragile but deal massive sustained DPS if left uncontested.", champions:["Jinx","Caitlyn","Jhin","Kai'Sa","Draven","Aphelios","Ashe","Kalista","Xayah","Lucian","Vayne","Zeri","Tristana","Samira","Miss Fortune","Ezreal","Sivir","Smolder"] },
  ENCHANTER:   { label:"Enchanter",     emoji:"💚", color:"#145a32", glow:"#2ecc71", desc:"Shields and heals negate your burst. Can knock you away mid-engage.", champions:["Janna","Lulu","Soraka","Yuumi","Nami","Sona","Milio","Karma","Taric","Renata Glasc","Seraphine"] },
  CATCHER:     { label:"Catcher",       emoji:"🔒", color:"#2471a3", glow:"#3498db", desc:"CC chains remove your mobility. Hooks kill your dive pattern.", champions:["Thresh","Blitzcrank","Morgana","Nautilus","Skarner","Zac","Bard","Ivern","Zyra","Maokai","Varus","Lissandra"] },
  VANGUARD:    { label:"Vanguard",      emoji:"🛡️", color:"#2e4053", glow:"#5d6d7e", desc:"Engage tanks. Hard CC into team collapse.", champions:["Malphite","Leona","Nautilus","Maokai","Sejuani","Jarvan IV","Gragas","Amumu","Alistar","Ornn","Zac","Rammus","Volibear","Nunu & Willump"] },
  WARDEN:      { label:"Warden",        emoji:"🗿", color:"#4d3319", glow:"#a04000", desc:"Block your damage for their carry. Shield generators and peel machines.", champions:["Braum","Shen","Tahm Kench","Poppy","Galio","K'Sante"] },
  SPECIALIST:  { label:"Specialist",    emoji:"🎭", color:"#5f5f5f", glow:"#95a5a6", desc:"Wildly varied kits. Each plays by their own rules — read the matchup.", champions:["Teemo","Singed","Gangplank","Shyvana","Graves","Kayle","Kennen","Nidalee","Quinn","Twisted Fate","Udyr","Fiddlesticks","Gnar","Zilean"] },
};

// ─────────────────────────────────────────────────────────────────────────────
//  ITEM ENTRY HELPER
// ─────────────────────────────────────────────────────────────────────────────
const I = (name, why) => ({ name, why });

// ─────────────────────────────────────────────────────────────────────────────
//  CHAMPION DEFINITIONS
//  ─────────────────────────────────────────────────────────────────────────
//  HOW TO ADD A NEW CHAMPION:
//  1. Copy one of the objects below and paste it as a new entry in CHAMPS.
//  2. Change `display` (shown in UI), `dd` (Data Dragon key — must match the
//     filename in your champions/ folder, e.g. "LeeSin"), `role`, `color`,
//     `glow`, and `lanes` (which lane buttons will reveal this champion).
//  3. Update `corePath` and `coreNote` with the champion's core build.
//  4. Update `sideItems` with common situational picks.
//  5. Fill in the `data` block — one entry per class key, each with
//     `ahead` and `behind` arrays of exactly 3 items using I("Name","Why").
//  That's it. The UI handles everything else automatically.
// ─────────────────────────────────────────────────────────────────────────────
const CHAMPS = [

  // ══════════════════════════════════════════════════════════════════════════
  //  PANTHEON — Diver / Bruiser
  // ══════════════════════════════════════════════════════════════════════════
  {
    display:  "Pantheon",
    dd:       "Pantheon",       // must match filename: champions/Pantheon.png
    role:     "Diver / Bruiser",
    color:    "#c0392b",
    glow:     "#e74c3c",
    lanes:    ["Top", "Mid", "Support"],
    corePath: "Eclipse  ›  Sundered Sky  ›  Black Cleaver  ›  Spear of Shojin",
    coreNote: "Eclipse first for the dominant early spike. Sundered Sky second for burst or Black Cleaver for sustained shred — pick based on whether you need one-shot or team-fight presence. Shojin amplifies Q-poke into extended skirmishes.",
    sideItems: ["Plated Steelcaps","Mercury's Treads","Sterak's Gage","Death's Dance","Lord Dominik's Regards","Serpent's Fang","Mortal Reminder","Serylda's Grudge","Maw of Malmortius","Banshee's Veil","Randuin's Omen","Frozen Heart"],
    data: {
      JUGGERNAUT: {
        ahead:  [ I("Lord Dominik's Regards","% armor pen + bonus dmg vs HP stacks — press the lead."), I("Serylda's Grudge","Q/Ult slow seals the execute. Armor pen on a losing Juggernaut."), I("Eclipse","Pure burst to convert lead into a one-rotation kill.") ],
        behind: [ I("Black Cleaver","HP + shred in one item — survive while peeling their armor."), I("Death's Dance","Delay lethal burst into a bleed, keeping combo window open."), I("Sterak's Gage","Shield keeps you alive when they catch you at low HP.") ],
      },
      DIVER: {
        ahead:  [ I("Eclipse","Convert lead fast — burst before they can sustain or disengage."), I("Youmuu's Ghostblade","Active move-speed to chase or re-engage after Ult landing."), I("Death's Dance","Sustain through their mirror-dive while burst finishes them.") ],
        behind: [ I("Sterak's Gage","Shield at low HP when Camille/Irelia survives burst and all-ins."), I("Plated Steelcaps","Flat auto reduction on Irelia/Renekton — every auto counts behind."), I("Death's Dance","Convert their burst to bleed so combo window still exists.") ],
      },
      ASSASSIN: {
        ahead:  [ I("Eclipse","Out-burst them — your lead means you delete first."), I("Youmuu's Ghostblade","Chase Zed/Akali who disengage after failed bursts."), I("Serylda's Grudge","Slow on Q/Ult stops Talon/Katarina re-entering after their dash.") ],
        behind: [ I("Maw of Malmortius","Magic shield at <35% HP — absorbs Akali/Ekko hybrid burst."), I("Banshee's Veil","Block their engagement opener (Akali E, Kata Shunpo) to survive."), I("Sterak's Gage","Second shield layer + HP; combined with E block, hard to one-shot.") ],
      },
      SKIRMISHER: {
        ahead:  [ I("Eclipse","Burst them before they stack defensive items."), I("Lord Dominik's Regards","Pen through early Fiora/Jax armor during your lead window."), I("Serylda's Grudge","Slow stops Yone/Yasuo kiting and keeps them in your combo.") ],
        behind: [ I("Randuin's Omen","Crit damage reduction — vital vs Yasuo, Yone, Tryndamere."), I("Frozen Heart","–20% nearby attack speed. Destroys Fiora/Tryndamere."), I("Black Cleaver","HP + shred to keep damage relevant while in deficit.") ],
      },
      BURST_MAGE: {
        ahead:  [ I("Eclipse","Dive in and blow them up before they land their full combo."), I("Youmuu's Ghostblade","Speed lets you gap-close faster than their cast animations."), I("Serpent's Fang","Orianna/Karma with early shields — 50% reduction on contact.") ],
        behind: [ I("Maw of Malmortius","Magic shield absorbs their dump-everything combo when behind."), I("Banshee's Veil","Block first CC (Syndra E / Lissandra Q) to prevent the chain."), I("Mercury's Treads","Shorter stun/root duration = more time to retaliate or E-block.") ],
      },
      BATTLEMAGE: {
        ahead:  [ I("Eclipse","Short burst window — kill before Vladimir can drain back up."), I("Mortal Reminder","GW 40% eliminates their sustain advantage before they regen."), I("Lord Dominik's Regards","Swain/Malzahar stack HP — % pen keeps damage high.") ],
        behind: [ I("Maw of Malmortius","Survive the sustained AP DPS window with magic shield."), I("Mortal Reminder","GW is your only offset for their healing when behind."), I("Sterak's Gage","Extra shield gives another window after sustained damage.") ],
      },
      ARTILLERY: {
        ahead:  [ I("Youmuu's Ghostblade","Sprint active closes the poke gap instantly."), I("Eclipse","One-shot on landing — no escape when you close that fast."), I("Spear of Shojin","Haste + Q reset = ranged poke pressure during the approach.") ],
        behind: [ I("Banshee's Veil","Block one long-range ability — the window to Ult onto them."), I("Mercury's Treads","Shorter Xerath/Vel'Koz CC = more time to close the gap."), I("Sterak's Gage","Survive poke damage accumulated while closing distance.") ],
      },
      MARKSMAN: {
        ahead:  [ I("Eclipse","Two-ability proc = guaranteed one-rotation kill on any ADC."), I("Youmuu's Ghostblade","Active speed closes before they can kite or reposition."), I("Serpent's Fang","Kai'Sa/Samira shields stripped — no escaping your burst.") ],
        behind: [ I("Plated Steelcaps","Flat auto reduction is massive — cuts every Jinx/Caitlyn attack."), I("Eclipse","Best damage path even behind — one good Ult = back in game."), I("Sterak's Gage","Shield keeps you alive long enough to find that combo window.") ],
      },
      ENCHANTER: {
        ahead:  [ I("Serpent's Fang","⭐ PRIORITY — 50% shield strip on contact while ahead."), I("Youmuu's Ghostblade","Active speed: Janna/Lulu can't reposition before your W stun."), I("Eclipse","Overkill burst — with Serpent's Fang up they simply die.") ],
        behind: [ I("Serpent's Fang","Still priority even behind — skipping costs every shield trade."), I("Mortal Reminder","Q poke applies GW to limit heals when you can't reach them."), I("Sterak's Gage","Survive Lulu polymorph + their carry's follow-up burst.") ],
      },
      CATCHER: {
        ahead:  [ I("Youmuu's Ghostblade","Outmanoeuvre Blitz/Thresh entirely with active speed."), I("Eclipse","Close range, detonate — one-shot the Catcher before they reset."), I("Serpent's Fang","Zac/Morgana shields absorbed — more damage gets through.") ],
        behind: [ I("Banshee's Veil","Spell shield absorbs Blitz Q / Thresh hook — your lifeline."), I("Mercury's Treads","Shorter Nautilus root / Morgana bind when you get caught."), I("Sterak's Gage","Survive the collapse after their Catcher lands CC on you.") ],
      },
      VANGUARD: {
        ahead:  [ I("Eclipse","Ult in, E their CC, finish with burst before they act."), I("Black Cleaver","Shred Malphite/Ornn armor in 6 Q taps while team is disrupted."), I("Lord Dominik's Regards","% pen while ahead makes their armor irrelevant.") ],
        behind: [ I("Mercury's Treads","Default. Malphite Ult, Leona chain, Nautilus root — all shorter."), I("Sterak's Gage","Survive the burst that follows a Vanguard's initiation."), I("Randuin's Omen","AoE slow active peels their engage. Crit reduction vs carry builds.") ],
      },
      WARDEN: {
        ahead:  [ I("Serpent's Fang","Shen Ult + Braum passive shields stripped by 50% on contact."), I("Lord Dominik's Regards","% pen turns their armor stacking into irrelevant stats."), I("Serylda's Grudge","Slow on Ult stops Tahm Kench body-blocking at the last second.") ],
        behind: [ I("Black Cleaver","Shred gradually — even behind, 6 stacks still open them up."), I("Sterak's Gage","Survive their peel long enough to stack Cleaver."), I("Mercury's Treads","Poppy/Galio CC chains shut down your dives — reduce duration.") ],
      },
      SPECIALIST: {
        ahead:  [ I("Eclipse","Burst Singed/Shyvana before their stacks get critical."), I("Youmuu's Ghostblade","Active speed lets you chase Singed instead of him kiting forever."), I("Serylda's Grudge","Slow means even Quinn can't disengage from your combo.") ],
        behind: [ I("Mortal Reminder","GP Orange heal, Kayle sustain, Udyr regen — GW 40% cuts all."), I("Banshee's Veil","Teemo blind, TF gold card, Kennen stun — blocks their key setup."), I("Sterak's Gage","Survive the poke absorbed while getting to engage range.") ],
      },
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  TEEMO — AP On-Hit Specialist
  // ══════════════════════════════════════════════════════════════════════════
  {
    display:  "Teemo",
    dd:       "Teemo",
    role:     "AP On-Hit Specialist",
    color:    "#27ae60",
    glow:     "#2ecc71",
    lanes:    ["Top", "Mid"],
    corePath: "Nashor's Tooth  ›  Liandry's Torment  ›  Malignance  ›  Sorcerer's Shoes",
    coreNote: "Nashor's first for on-hit AP + attack speed spike. Liandry's second for % max HP burn through tanks. Malignance third for ability haste and shroom density. Sorc Shoes for flat magic pen to close out the build.",
    sideItems: ["Shadowflame","Rabadon's Deathcap","Void Staff","Morellonomicon","Zhonya's Hourglass","Rylai's Crystal Scepter","Wit's End","Banshee's Veil","Boots of Swiftness"],
    data: {
      JUGGERNAUT: {
        ahead:  [ I("Shadowflame","Flat pen into low-MR Juggernauts while ahead — burst trades hurt."), I("Rabadon's Deathcap","Amplify all AP; shrooms deal enormous burst on a gold lead."), I("Void Staff","If they rush Wit's End early — 40% magic pen keeps damage up.") ],
        behind: [ I("Liandry's Torment","% max HP burn bypasses their HP stacking — no stats required."), I("Rylai's Crystal Scepter","Every Toxic Shot auto applies a slow — impossible to reach you."), I("Morellonomicon","Dr. Mundo/Warwick regen + Nasus stacking — GW on every auto.") ],
      },
      DIVER: {
        ahead:  [ I("Nashor's Tooth","⭐ Blind (Q) negates Irelia/Camille empowered auto combos entirely."), I("Shadowflame","Burst in the 2-second blind window — they can't fight back."), I("Malignance","Haste = more Q casts + shrooms to zone their approach angles.") ],
        behind: [ I("Zhonya's Hourglass","Stasis during their dive wastes all cooldowns — emerge poisoning."), I("Rylai's Crystal Scepter","Autos + Q apply slows every hit — Lee Sin/Hecarim can't stick."), I("Wit's End","MR + attack speed + drain for extended kiting vs Sylas/Diana.") ],
      },
      ASSASSIN: {
        ahead:  [ I("Shadowflame","Out-burst them — your lead means you delete first after blinding."), I("Rabadon's Deathcap","AP advantage wins the trade before their combo can complete."), I("Malignance","Haste = faster Q casts; blind them the moment they dash in.") ],
        behind: [ I("Zhonya's Hourglass","Stasis neutralises Zed Ult / Akali full combo — they waste all."), I("Banshee's Veil","Block Akali E engage or Kata Shunpo — prevent the opening dash."), I("Morellonomicon","Slow their regen after skirmish so they can't recover and re-engage.") ],
      },
      SKIRMISHER: {
        ahead:  [ I("Nashor's Tooth","⭐ Blind hard-counters Fiora/Tryndamere/Master Yi entirely."), I("Shadowflame","Burst them in the blind window; they have nothing to fight back with."), I("Malignance","More Q casts = more blinds in extended duels vs Jax/Kayn.") ],
        behind: [ I("Zhonya's Hourglass","Jax passive and Fiora riposte eat your burst — stasis buys resets."), I("Wit's End","MR + sustain for the extended trades Skirmishers always force."), I("Rylai's Crystal Scepter","Slows on every auto let you re-kite even from a bad position.") ],
      },
      BURST_MAGE: {
        ahead:  [ I("Rabadon's Deathcap","Out-AP them — mushrooms and autos deal more than their combo."), I("Shadowflame","After they miss their opener, burst before the cooldown resets."), I("Malignance","More shrooms faster = no safe ground for them to stand on.") ],
        behind: [ I("Banshee's Veil","Block the CC that starts their combo (Syndra E / Annie stun)."), I("Zhonya's Hourglass","Survive the full AP detonation; poison and shroom stacks remain."), I("Malignance","Haste for more Q casts and shroom density — outzone them safely.") ],
      },
      BATTLEMAGE: {
        ahead:  [ I("Rabadon's Deathcap","Outscale their sustained damage with raw AP — burst trades win."), I("Void Staff","Ryze/Viktor build early MR — 40% pen pierces it as you press ahead."), I("Shadowflame","Burst trades in the lead window punish before they can drain back.") ],
        behind: [ I("Morellonomicon","Vladimir Transfusion + Swain drain — GW 40% on every auto."), I("Malignance","Keep Toxic Shot stacks up from max range — no need to trade."), I("Zhonya's Hourglass","Survive Ryze/Viktor burst on a bad engage; poison does the work.") ],
      },
      ARTILLERY: {
        ahead:  [ I("Boots of Swiftness","Dodge Xerath/Vel'Koz skillshots freely while pressuring forward."), I("Rabadon's Deathcap","Your AP wins at range — mushrooms in their poke lane are lethal."), I("Shadowflame","Once you close the gap and blind, flat pen one-shots the Artillery.") ],
        behind: [ I("Malignance","More shrooms = zone out their entire safe poke angle on the map."), I("Boots of Swiftness","Slow resist + speed to dodge skillshots when you can't get hit."), I("Banshee's Veil","Block one long-range stun — the window to push in or escape.") ],
      },
      MARKSMAN: {
        ahead:  [ I("Nashor's Tooth","⭐ PRIORITY — Blind nullifies every ADC auto for 2–3 seconds."), I("Shadowflame","Post-blind, flat pen + AP one-shots most ADCs before blind wears off."), I("Rabadon's Deathcap","Amplify shroom burst — one shroom can execute a low ADC.") ],
        behind: [ I("Morellonomicon","Deny lifesteal and Bloodthirster shields — their sustain gone."), I("Liandry's Torment","Poison stacks melt Kai'Sa/Vayne HP items safely from range."), I("Rylai's Crystal Scepter","Slow on every auto; kite the ADC indefinitely even from deficit.") ],
      },
      ENCHANTER: {
        ahead:  [ I("Shadowflame","10% extra pen vs shielded targets — counters Lulu/Janna spam."), I("Rabadon's Deathcap","Mushrooms shred through their shields and one-shot the carry."), I("Malignance","More shrooms under the Enchanter force constant repositioning.") ],
        behind: [ I("Morellonomicon","Soraka/Nami core is healing — GW on every auto neuters them."), I("Malignance","Shrooms placed faster; zone Enchanters off their peel angles."), I("Liandry's Torment","Poison burn on every auto drains through Soraka's healing output.") ],
      },
      CATCHER: {
        ahead:  [ I("Boots of Swiftness","Outpace Blitzcrank Q and Thresh hook with slow-resist + speed."), I("Shadowflame","If you get close, burst the Catcher before they chain another CC."), I("Malignance","Mushrooms in hook angles force Catchers to reposition or die.") ],
        behind: [ I("Boots of Swiftness","Slow-resist is your survival tool vs Morgana root / Nautilus CC."), I("Banshee's Veil","Spell shield absorbs Blitz hook / Morgana bind — most critical item."), I("Zhonya's Hourglass","If Nautilus chains you anyway, stasis buys your team time to respond.") ],
      },
      VANGUARD: {
        ahead:  [ I("Void Staff","Press your lead — % magic pen pierces their MR before they stack."), I("Liandry's Torment","% HP burn while ahead stacks enormously as they build Warmog's."), I("Rabadon's Deathcap","Amplify all AP; mushrooms burst even low-MR tanks heavily.") ],
        behind: [ I("Liandry's Torment","% HP burn is the only reliable damage vs Malphite/Ornn stacking."), I("Malignance","Mushrooms ahead of their engage path zone them from initiating."), I("Rylai's Crystal Scepter","Slow on every auto lets you kite Leona/Sejuani indefinitely.") ],
      },
      WARDEN: {
        ahead:  [ I("Void Staff","K'Sante/Galio stack MR — % pen is your answer while ahead."), I("Liandry's Torment","% HP burn stacks enormously against high-HP Wardens while ahead."), I("Rabadon's Deathcap","Amplify your AP so even shielded Wardens take serious shroom damage.") ],
        behind: [ I("Liandry's Torment","% HP burn is your only reliable damage vs Warden HP/MR stacks."), I("Malignance","Mushrooms zone Tahm Kench/Shen from peeling with their body."), I("Morellonomicon","Tahm Kench passive sustain + Shen regen — GW reduces tankiness.") ],
      },
      SPECIALIST: {
        ahead:  [ I("Shadowflame","Burst Singed before he can begin his kite loop."), I("Rabadon's Deathcap","Amplify shroom burst so GP barrels and Shyvana dives become lethal."), I("Malignance","More shroom speed = deny Gangplank barrel spots entirely.") ],
        behind: [ I("Boots of Swiftness","Singed chases you infinitely — slow resist is your only out."), I("Morellonomicon","GP Oranges, Kayle sustain, Udyr regen — GW 40% cuts all of it."), I("Malignance","More shroom density to deny Gangplank barrel placement.") ],
      },
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  RENEKTON — Diver / Bruiser
  //  ── HOW TO ADD MORE CHAMPIONS: copy this entire block (from the opening
  //     { down to the closing },) and paste it below. Change display, dd,
  //     role, color, glow, lanes, corePath, coreNote, sideItems, and data.
  // ══════════════════════════════════════════════════════════════════════════
  {
    display:  "Renekton",
    dd:       "Renekton",       // champions/Renekton.png
    role:     "Diver / Bruiser",
    color:    "#e67e22",
    glow:     "#f39c12",
    lanes:    ["Top"],
    corePath: "Trinity Force  ›  Sundered Sky  ›  Black Cleaver  ›  Death's Dance",
    coreNote: "Trinity Force first — Sheen procs on empowered W stuns are devastating early. Sundered Sky second for healing burst on Q proc. Black Cleaver third stacks armor shred with every E pass. Death's Dance fourth to sustain through extended teamfights.",
    sideItems: ["Plated Steelcaps","Mercury's Treads","Sterak's Gage","Serylda's Grudge","Lord Dominik's Regards","Serpent's Fang","Mortal Reminder","Frozen Heart","Maw of Malmortius","Randuin's Omen"],
    data: {
      JUGGERNAUT: {
        ahead:  [ I("Serylda's Grudge","Slow + armor pen keeps Juggernauts from walking you down when ahead."), I("Lord Dominik's Regards","% pen into their HP stacks — their armor investment becomes worthless."), I("Trinity Force","Sheen procs in extended trades outdamage their slow cadence.") ],
        behind: [ I("Death's Dance","Delay Darius/Mundo burst into bleed; W stun window reopens."), I("Sterak's Gage","Shield vs their walk-down damage keeps you alive for one more Q."), I("Plated Steelcaps","Flat auto reduction vs every Juggernaut's auto-weave between abilities.") ],
      },
      DIVER: {
        ahead:  [ I("Sundered Sky","Healing burst wins mirror fights — Q proc keeps you healthy."), I("Trinity Force","Sheen proc on empowered W out-bursts mirror Divers who match your dive."), I("Black Cleaver","Shred their armor before they can defensive item.") ],
        behind: [ I("Sterak's Gage","Shield when Camille/Irelia survives your burst and all-ins back."), I("Death's Dance","Bleed delay gives you time to land another empowered W stun."), I("Plated Steelcaps","Auto reduction on Irelia/Lee Sin chains — every hit matters behind.") ],
      },
      ASSASSIN: {
        ahead:  [ I("Trinity Force","Sheen proc punishes their cooldown windows between dashes."), I("Sterak's Gage","Secondary shield vs one-shots when you're ahead and they're desperate."), I("Black Cleaver","Fast shred before they can reset and re-engage.") ],
        behind: [ I("Sterak's Gage","Shield vs Zed Ult / Akali burst — mandatory when behind."), I("Maw of Malmortius","AP assassins (Akali/Ekko) — magic shield + omnivamp covers their combo."), I("Mercury's Treads","Shorter CC durations so your W stun can still land.") ],
      },
      SKIRMISHER: {
        ahead:  [ I("Sundered Sky","Healing wins extended duels vs Fiora/Jax — Q proc sustains you."), I("Trinity Force","Sheen procs outdamage Skirmisher sustained DPS while ahead."), I("Black Cleaver","Shred before they stack armor — win the stat check early.") ],
        behind: [ I("Frozen Heart","–20% nearby attack speed. Completely dismantles Fiora/Tryndamere."), I("Randuin's Omen","Crit reduction vs Yasuo/Yone crit builds — AoE slow helps peel."), I("Sterak's Gage","Shield when they survive your burst and try to extended-fight back.") ],
      },
      BURST_MAGE: {
        ahead:  [ I("Trinity Force","Dash in, W stun during their cast, Sheen proc = kill before they react."), I("Sterak's Gage","Shield absorbs their burst while you complete the W-Q combo ahead."), I("Black Cleaver","Close fast, shred, kill before their cooldowns reset.") ],
        behind: [ I("Maw of Malmortius","<35% magic shield absorbs Syndra/Orianna full combo when behind."), I("Sterak's Gage","Second shield layer — stacked with Maw you often survive one-shots."), I("Mercury's Treads","Shorter stun duration = your W stun can still land on entry.") ],
      },
      BATTLEMAGE: {
        ahead:  [ I("Mortal Reminder","Vladimir/Swain sustain shut down by GW 40% on every auto."), I("Trinity Force","Sheen proc burst defeats their sustained damage when ahead."), I("Black Cleaver","Armor shred while you have the lead — force the fight.") ],
        behind: [ I("Maw of Malmortius","Magic shield sustains through AP DPS window when behind."), I("Mortal Reminder","GW is your only healing counter even behind — buy it."), I("Death's Dance","Bleed delay vs Cassiopeia/Viktor tick damage when item-deficient.") ],
      },
      ARTILLERY: {
        ahead:  [ I("Trinity Force","Sprint passive closes the poke gap; Sheen proc on arrival = kill."), I("Serylda's Grudge","Slow on E prevents Artillery kiting out after you dash in."), I("Black Cleaver","Once you close, fast shred + empowered Q destroys squishy Artillery.") ],
        behind: [ I("Sterak's Gage","Poke accumulated while walking over — shield keeps you alive on arrival."), I("Mercury's Treads","Shorter Xerath root / Vel'Koz CC so your dash arrives uninterrupted."), I("Plated Steelcaps","Reduces auto-weave poke they add between skillshots during approach.") ],
      },
      MARKSMAN: {
        ahead:  [ I("Plated Steelcaps","ADC auto reduction — critical even ahead. Every trade benefits."), I("Trinity Force","Sprint + Sheen proc = delete the ADC before Enchanter can react."), I("Black Cleaver","6-stack shred on a tanky ADC building Bloodthirster/Shieldbow.") ],
        behind: [ I("Plated Steelcaps","Non-negotiable — sustained ADC physical DPS kills you when behind."), I("Sterak's Gage","Shield vs ADC burst + Enchanter follow-up when behind."), I("Death's Dance","Delay their DPS window; empowered W stun can still turn the fight.") ],
      },
      ENCHANTER: {
        ahead:  [ I("Serpent's Fang","⭐ 50% shield strip on dash-in — Lulu/Janna can't save their carry."), I("Trinity Force","Sprint to Enchanter before they cast their next shield."), I("Black Cleaver","Shred the carry once Enchanter is gone.") ],
        behind: [ I("Serpent's Fang","Still priority even behind — their shields negate all your damage."), I("Mortal Reminder","GW limits Soraka/Nami healing even when you can't engage freely."), I("Sterak's Gage","Survive Lulu polymorph + carry burst while item-deficient.") ],
      },
      CATCHER: {
        ahead:  [ I("Mercury's Treads","Shorter hook/root chains — maintain mobility for dash combos."), I("Trinity Force","Sprint past hooks to reach carry; Sheen proc on arrival."), I("Serpent's Fang","Zac/Morgana shields absorbed on dash-in.") ],
        behind: [ I("Mercury's Treads","Nautilus/Morgana CC completely stops your dashes when behind — mandatory."), I("Sterak's Gage","Survive burst after their hook lands when you couldn't dodge."), I("Maw of Malmortius","Zyra/Morgana AP follow-up after root — magic shield buys the W window.") ],
      },
      VANGUARD: {
        ahead:  [ I("Black Cleaver","6 stacks shred Malphite/Ornn while disrupted — kill the engage tank."), I("Trinity Force","Dive in during their engage cooldown, Sheen proc cleans up."), I("Lord Dominik's Regards","% pen while ahead makes their armor investment worthless.") ],
        behind: [ I("Mercury's Treads","Malphite Ult, Leona chain, Ornn CC — all shorter when behind."), I("Sterak's Gage","Survive burst that follows a Vanguard's initiation."), I("Plated Steelcaps","Jarvan IV/Wukong have AD scaling — reduce auto-weave when behind.") ],
      },
      WARDEN: {
        ahead:  [ I("Serpent's Fang","Braum passive / Shen Ult shields stripped on dash-in while ahead."), I("Lord Dominik's Regards","% pen turns their armor stacking into irrelevant stats."), I("Black Cleaver","Shred Warden armor to expose the carry behind them.") ],
        behind: [ I("Black Cleaver","Chip armor gradually — patience behind with Cleaver still opens them."), I("Mercury's Treads","Poppy E / Galio taunt — shorter duration when behind."), I("Sterak's Gage","Survive carry + Warden combined burst when item-deficient.") ],
      },
      SPECIALIST: {
        ahead:  [ I("Trinity Force","Sprint closes on Singed/Quinn before they disengage; Sheen punishes."), I("Serylda's Grudge","Slow on E means Singed's kite loop finally stops working."), I("Black Cleaver","Close on Gangplank, fast shred, kill before he can orange barrel poke.") ],
        behind: [ I("Plated Steelcaps","Graves/Quinn auto reliance — reduce each hit when behind."), I("Sterak's Gage","Survive Kennen stun + ult or Singed flip when item-deficient."), I("Mortal Reminder","GP Oranges / passive heal — GW 40% on all physical damage.") ],
      },
    },
  },

];

// ─────────────────────────────────────────────────────────────────────────────
//  LANE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const LANES = [
  { key:"Top",     label:"Top",     emoji:"🏰" },
  { key:"Jungle",  label:"Jungle",  emoji:"🌲" },
  { key:"Mid",     label:"Mid",     emoji:"🔮" },
  { key:"Bot",     label:"Bot",     emoji:"🏹" },
  { key:"Support", label:"Support", emoji:"💚" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [champ,        setChamp]        = useState(CHAMPS[0]);
  const [openClass,    setOpenClass]    = useState(null);
  const [mode,         setMode]         = useState("behind");
  const [imgErr,       setImgErr]       = useState({});
  const [showCore,     setShowCore]     = useState(false);
  // Lane selector state: null = show lane buttons, string = show champs for that lane
  const [selectedLane, setSelectedLane] = useState(null);

  const onErr   = (k) => setImgErr(p => ({ ...p, [k]: true }));
  const imgFail = (k) => imgErr[k];

  const pickChamp = (c) => {
    setChamp(c);
    setOpenClass(null);
    setShowCore(false);
    setSelectedLane(null);   // collapse selector back to lane buttons
  };

  // Champions visible for the chosen lane, excluding the current champ
  const championsForLane = selectedLane
    ? CHAMPS.filter(c => c.lanes.includes(selectedLane) && c.display !== champ.display)
    : [];

  const classEntry = openClass ? CLASSES[openClass] : null;
  // Filter out the currently selected champion from the opponent list
  const classItems = openClass ? (champ.data[openClass]?.[mode] || []) : [];
  const classChamps = classEntry
    ? classEntry.champions.filter(c => c !== champ.display)
    : [];

  const coreArrow = champ.corePath.split("›").map(s => s.trim());

  // ── Colour helpers ────────────────────────────────────────────────────────
  const S = {                       // shared style tokens
    border:       "rgba(180,120,20,.2)",
    panelBg:      "rgba(5,12,25,.95)",
    textDim:      "#6a7a5a",
    gold:         "#f0d060",
    goldDim:      "#b8860b",
  };

  // ── Reusable: portrait chip ───────────────────────────────────────────────
  const ChampChip = ({ name, size = 56 }) => {
    const ek = `chip-${name}`;
    return (
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"5px" }}>
        <div style={{
          width:size, height:size, borderRadius:"8px", overflow:"hidden",
          border:`1.5px solid rgba(255,255,255,.14)`,
          background:"#0d1a2a",
        }}>
          {!imgFail(ek)
            ? <img src={champImg(name)} alt={name} onError={() => onErr(ek)}
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            : <div style={{ width:"100%", height:"100%", display:"flex",
                alignItems:"center", justifyContent:"center",
                fontSize:size*0.35, color:"#5c6a7a" }}>{name[0]}</div>
          }
        </div>
        <span style={{
          fontSize:"11px", color:"#c8a96a", textAlign:"center",
          maxWidth:size+10, lineHeight:1.2,
          overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
        }}>{name}</span>
      </div>
    );
  };

  // ── Reusable: item card ───────────────────────────────────────────────────
  const ItemCard = ({ item, rank, glow }) => {
    const col = ic(item.name);
    const ek  = `item-${item.name}`;
    return (
      <div style={{
        background:"rgba(255,255,255,.04)",
        border:`1px solid rgba(255,255,255,.08)`,
        borderLeft:`4px solid ${col}`,
        borderRadius:"9px", padding:"12px 14px",
        display:"flex", gap:"14px", alignItems:"flex-start",
      }}>
        <div style={{
          width:"52px", height:"52px", flexShrink:0,
          borderRadius:"8px", overflow:"hidden",
          border:`1.5px solid ${col}55`, background:`${col}18`,
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:`0 0 10px ${col}30`,
        }}>
          {!imgFail(ek)
            ? <img src={itemImg(item.name)} alt={item.name} onError={() => onErr(ek)}
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            : <div style={{ width:"12px", height:"12px", borderRadius:"50%",
                background:col, boxShadow:`0 0 8px ${col}` }} />
          }
        </div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"4px" }}>
            <span style={{ fontWeight:"bold", fontSize:"14px", color:col }}>{item.name}</span>
            <span style={{
              fontSize:"10px", color:glow, marginLeft:"auto", flexShrink:0,
              background:`${glow}14`, border:`1px solid ${glow}30`,
              borderRadius:"4px", padding:"2px 6px", letterSpacing:"1px",
            }}>#{rank}</span>
          </div>
          <p style={{ margin:0, fontSize:"12px", color:"#b0a080", lineHeight:1.6 }}>{item.why}</p>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight:"100vh",
      background:"radial-gradient(ellipse at 15% 5%,#0d1117 0%,#060a0f 55%,#0a0d14 100%)",
      fontFamily:"'Georgia','Times New Roman',serif",
      color:"#e8d5b0",
    }}>

      {/* ── PAGE HEADER ── */}
      <div style={{
        textAlign:"center", padding:"28px 24px 14px",
        background:"linear-gradient(180deg,rgba(180,120,20,.14) 0%,transparent 100%)",
        borderBottom:`1px solid ${S.border}`,
      }}>
        <div style={{ fontSize:"11px", letterSpacing:"6px", color:S.goldDim,
          textTransform:"uppercase", marginBottom:"6px" }}>
          Aspectum Martis · Patch 16.8
        </div>
        <h1 style={{
          fontSize:"clamp(18px,3.5vw,30px)", fontWeight:"bold",
          color:S.gold, margin:"0 0 6px",
          textShadow:"0 0 40px rgba(240,208,96,.45)", letterSpacing:"2px",
        }}>
          {champ.display} — Situational Itemization
        </h1>
        <p style={{ margin:0, fontSize:"12px", color:champ.glow, letterSpacing:"1px" }}>
          {champ.role}
        </p>
      </div>

      {/* ── LANE SELECTOR ── */}
      <div style={{
        background:"rgba(0,0,0,.45)",
        borderBottom:`1px solid rgba(180,120,20,.14)`,
        padding:"16px 24px",
      }}>
        <div style={{ maxWidth:"1400px", margin:"0 auto" }}>

          {/* Currently playing as — always visible */}
          <div style={{ display:"flex", alignItems:"center", gap:"14px",
            marginBottom: selectedLane || !selectedLane ? "14px" : "0",
            flexWrap:"wrap" }}>
            <span style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
              textTransform:"uppercase", flexShrink:0 }}>Playing as</span>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{
                width:"52px", height:"52px", borderRadius:"9px", overflow:"hidden",
                border:`2.5px solid ${champ.glow}`,
                boxShadow:`0 0 18px ${champ.glow}60`, background:"#111",
              }}>
                {!imgFail(`me-${champ.dd}`)
                  ? <img src={champImg(champ.dd)} alt={champ.display}
                      onError={() => onErr(`me-${champ.dd}`)}
                      style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  : <div style={{ width:"100%", height:"100%", display:"flex",
                      alignItems:"center", justifyContent:"center",
                      fontSize:"20px", color:champ.glow }}>{champ.display[0]}</div>
                }
              </div>
              <div>
                <div style={{ fontSize:"16px", fontWeight:"bold", color:champ.glow }}>
                  {champ.display}
                </div>
                <div style={{ fontSize:"11px", color:S.textDim, marginTop:"2px" }}>
                  {champ.lanes.join(" · ")}
                </div>
              </div>
            </div>
            <button onClick={() => setSelectedLane(selectedLane ? null : "Top")}
              style={{
                marginLeft:"auto", background:"none",
                border:`1px solid ${S.border}`, borderRadius:"6px",
                padding:"7px 14px", cursor:"pointer",
                color:S.goldDim, fontSize:"11px", letterSpacing:"1px",
                transition:"all .18s",
              }}>
              {selectedLane ? "✕ Cancel" : "⇄ Change Champion"}
            </button>
          </div>

          {/* Lane buttons — shown when no lane is selected yet */}
          {!selectedLane && (
            <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
              <span style={{ fontSize:"10px", letterSpacing:"2px", color:S.textDim,
                textTransform:"uppercase", alignSelf:"center", marginRight:"4px" }}>
                Select lane to change:
              </span>
              {LANES.map(lane => {
                const hasChamps = CHAMPS.some(
                  c => c.lanes.includes(lane.key) && c.display !== champ.display
                );
                return (
                  <button key={lane.key} onClick={() => hasChamps && setSelectedLane(lane.key)}
                    style={{
                      padding:"9px 18px", borderRadius:"7px", cursor:hasChamps?"pointer":"not-allowed",
                      border:`1px solid ${hasChamps ? S.border : "rgba(255,255,255,.05)"}`,
                      background:"rgba(255,255,255,.04)",
                      color: hasChamps ? "#c8a96a" : "#3a3a3a",
                      fontSize:"13px", letterSpacing:".5px",
                      transition:"all .18s",
                      opacity: hasChamps ? 1 : 0.4,
                    }}>
                    {lane.emoji} {lane.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Champion picker — shown after lane is selected */}
          {selectedLane && (
            <div>
              <div style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
                textTransform:"uppercase", marginBottom:"12px" }}>
                {LANES.find(l=>l.key===selectedLane)?.emoji} {selectedLane} Champions
              </div>
              <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
                {championsForLane.length > 0 ? championsForLane.map(c => (
                  <div key={c.display} onClick={() => pickChamp(c)}
                    style={{ cursor:"pointer", textAlign:"center", transition:"all .18s" }}>
                    <div style={{
                      width:"72px", height:"72px", borderRadius:"10px", overflow:"hidden",
                      border:`2px solid rgba(255,255,255,.12)`,
                      background:"#111", margin:"0 auto 6px",
                      transition:"all .18s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.border = `2px solid ${c.glow}`;
                      e.currentTarget.style.boxShadow = `0 0 14px ${c.glow}60`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.border = "2px solid rgba(255,255,255,.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                      {!imgFail(`pick-${c.dd}`)
                        ? <img src={champImg(c.dd)} alt={c.display}
                            onError={() => onErr(`pick-${c.dd}`)}
                            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                        : <div style={{ width:"100%", height:"100%", display:"flex",
                            alignItems:"center", justifyContent:"center",
                            fontSize:"24px", color:c.glow, background:`${c.color}20` }}>
                            {c.display[0]}
                          </div>
                      }
                    </div>
                    <div style={{ fontSize:"12px", color:"#c8a96a" }}>{c.display}</div>
                    <div style={{ fontSize:"10px", color:S.textDim, marginTop:"2px" }}>
                      {c.lanes.join(" / ")}
                    </div>
                  </div>
                )) : (
                  <div style={{ fontSize:"13px", color:S.textDim, fontStyle:"italic", padding:"8px 0" }}>
                    No other champions available for this lane yet.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── GAME STATE TOGGLE ── */}
      <div style={{
        display:"flex", justifyContent:"center", padding:"16px 24px 8px",
        gap:"0",
      }}>
        <div style={{ borderRadius:"10px", overflow:"hidden",
          border:"1px solid rgba(255,255,255,.1)", background:"rgba(0,0,0,.4)",
          display:"flex" }}>
          {[
            { key:"ahead",  label:"⚔  Ahead",        activeColor:"#b8860b", textColor:"#f0d060" },
            { key:"behind", label:"🛡  Even / Behind", activeColor:"#4a6fa5", textColor:"#7eb8f7" },
          ].map(opt => (
            <button key={opt.key} onClick={() => setMode(opt.key)} style={{
              padding:"11px 26px", cursor:"pointer", border:"none",
              background: mode===opt.key ? `${opt.activeColor}30` : "transparent",
              color: mode===opt.key ? opt.textColor : "#5a6a5a",
              fontSize:"13px", fontWeight: mode===opt.key ? "bold" : "normal",
              letterSpacing:".8px", transition:"all .15s",
              boxShadow: mode===opt.key ? `inset 0 -2px 0 ${opt.activeColor}` : "none",
              borderRight: opt.key==="ahead" ? "1px solid rgba(255,255,255,.08)" : "none",
            }}>
              {opt.label}
            </button>
          ))}
        </div>
        <div style={{ alignSelf:"center", marginLeft:"14px", fontSize:"11px",
          color:S.textDim, fontStyle:"italic" }}>
          {mode==="ahead" ? "Snowball your lead" : "Survive and scale back"}
        </div>
      </div>

      {/* ── CORE BUILD PATH ── */}
      <div style={{ maxWidth:"1400px", margin:"8px auto 0", padding:"0 24px" }}>
        <div style={{
          background:S.panelBg,
          border:`1px solid ${S.border}`,
          borderRadius:"12px", padding:"16px 20px",
        }}>
          <div style={{ display:"flex", alignItems:"center",
            marginBottom: showCore ? "14px" : "0" }}>
            <span style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
              textTransform:"uppercase" }}>Core Build Path</span>
            <button onClick={() => setShowCore(v => !v)} style={{
              marginLeft:"auto", background:"none", border:"none",
              cursor:"pointer", color:S.textDim, fontSize:"11px", letterSpacing:"1px",
            }}>
              {showCore ? "▲ Hide" : "▼ Why?"}
            </button>
          </div>

          {/* Arrow chain */}
          <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:"6px",
            marginTop:"12px", marginBottom: showCore ? "14px" : "0" }}>
            {coreArrow.map((item, idx) => {
              const col = ic(item);
              const ek  = `core-${item}`;
              return (
                <div key={idx} style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                  <div style={{
                    width:"44px", height:"44px", borderRadius:"8px", overflow:"hidden",
                    border:`2px solid ${col}55`, background:`${col}15`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:`0 0 10px ${col}30`, flexShrink:0,
                  }}>
                    {!imgFail(ek)
                      ? <img src={itemImg(item)} alt={item} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"12px", height:"12px", borderRadius:"50%",
                          background:col, boxShadow:`0 0 6px ${col}` }} />
                    }
                  </div>
                  <span style={{ fontSize:"13px", fontWeight:"600", color:col,
                    whiteSpace:"nowrap" }}>{item}</span>
                  {idx < coreArrow.length - 1 && (
                    <span style={{ color:"rgba(180,120,20,.45)", fontSize:"18px",
                      margin:"0 2px", fontWeight:"300" }}>›</span>
                  )}
                </div>
              );
            })}
          </div>

          {showCore && (
            <p style={{ margin:0, fontSize:"13px", color:"#a0896a", lineHeight:1.7,
              borderTop:`1px solid ${S.border}`, paddingTop:"12px" }}>
              {champ.coreNote}
            </p>
          )}
        </div>
      </div>

      {/* ── CLASS BUBBLES ── */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(148px, 1fr))",
        gap:"10px", padding:"14px 24px",
        maxWidth:"1400px", margin:"0 auto",
      }}>
        {Object.keys(CLASSES).map(k => {
          const d  = CLASSES[k];
          const on = openClass === k;
          // First 3 champions in this class, excluding the one we're playing
          const previewChamps = d.champions
            .filter(c => c !== champ.display)
            .slice(0, 3);
          return (
            <div key={k} onClick={() => setOpenClass(on ? null : k)} style={{
              cursor:"pointer", borderRadius:"12px",
              padding:"14px 10px 12px", textAlign:"center",
              background: on
                ? `radial-gradient(circle at 50% 30%,${d.glow}38 0%,${d.color}22 60%,${d.color}12 100%)`
                : "rgba(255,255,255,.04)",
              border: on ? `1.5px solid ${d.glow}90` : "1.5px solid rgba(255,255,255,.07)",
              boxShadow: on ? `0 0 18px ${d.glow}45,inset 0 0 16px ${d.glow}10` : "none",
              transform: on ? "scale(1.04)" : "scale(1)",
              transition:"all .2s ease",
            }}>
              <div style={{ fontSize:"26px", marginBottom:"6px" }}>{d.emoji}</div>

              {/* 3 champion portrait previews */}
              <div style={{ display:"flex", justifyContent:"center", gap:"3px", marginBottom:"7px" }}>
                {previewChamps.map(c => {
                  const ek = `bubble-${c}`;
                  return (
                    <div key={c} style={{
                      width:"28px", height:"28px", borderRadius:"5px", overflow:"hidden",
                      border:`1px solid rgba(255,255,255,.18)`,
                      background:"#0d1a2a", flexShrink:0,
                    }}>
                      {!imgFail(ek)
                        ? <img src={champImg(c)} alt={c} title={c} onError={() => onErr(ek)}
                            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                        : <div style={{ width:"100%", height:"100%", display:"flex",
                            alignItems:"center", justifyContent:"center",
                            fontSize:"9px", color:"#5c6a7a" }}>{c[0]}</div>
                      }
                    </div>
                  );
                })}
              </div>

              <div style={{ fontSize:"11px", fontWeight:"bold", letterSpacing:".8px",
                color: on ? d.glow : "#c8a96a", textTransform:"uppercase", lineHeight:1.2 }}>
                {d.label}
              </div>
              <div style={{ marginTop:"4px", fontSize:"10px", color:"rgba(200,180,140,.38)" }}>
                {d.champions.length} champs
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DETAIL PANEL ── */}
      {classEntry && (
        <div style={{ maxWidth:"1400px", margin:"0 auto 16px", padding:"0 24px" }}>
          <div style={{
            background:`linear-gradient(135deg,rgba(12,12,20,.98) 0%,${classEntry.color}18 100%)`,
            border:`1px solid ${classEntry.glow}55`,
            borderRadius:"14px", padding:"24px",
            boxShadow:`0 0 34px ${classEntry.glow}20`,
          }}>
            {/* Panel header */}
            <div style={{ display:"flex", alignItems:"center", gap:"12px",
              marginBottom:"18px", flexWrap:"wrap" }}>
              <span style={{ fontSize:"30px" }}>{classEntry.emoji}</span>
              <div style={{ flex:1 }}>
                <h2 style={{ margin:"0 0 3px", fontSize:"20px", color:classEntry.glow,
                  letterSpacing:"2px", textTransform:"uppercase" }}>
                  {champ.display} vs {classEntry.label}
                </h2>
                <p style={{ margin:0, fontSize:"12px", color:"#a0896a", fontStyle:"italic" }}>
                  {classEntry.desc}
                </p>
              </div>
              <div style={{
                padding:"6px 14px", borderRadius:"7px", fontSize:"12px",
                fontWeight:"bold", letterSpacing:"1px", flexShrink:0,
                background: mode==="ahead" ? "rgba(184,134,11,.18)" : "rgba(74,111,165,.18)",
                border: mode==="ahead" ? "1px solid #b8860b60" : "1px solid #4a6fa560",
                color: mode==="ahead" ? "#f0d060" : "#7eb8f7",
              }}>
                {mode==="ahead" ? "⚔ AHEAD" : "🛡 EVEN / BEHIND"}
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1.35fr", gap:"20px" }}>

              {/* Champions in class */}
              <div>
                <div style={{ fontSize:"10px", letterSpacing:"3px", color:classEntry.glow,
                  textTransform:"uppercase", marginBottom:"12px",
                  borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"6px" }}>
                  Champions in class
                </div>
                {/* GRID OF PORTRAIT CARDS — image is the focus, name below */}
                <div style={{
                  display:"grid",
                  gridTemplateColumns:"repeat(auto-fill, minmax(72px, 1fr))",
                  gap:"10px",
                }}>
                  {classChamps.map(c => {
                    const ek = `cls-${c}`;
                    return (
                      <div key={c} style={{
                        display:"flex", flexDirection:"column", alignItems:"center", gap:"5px",
                        background:`${classEntry.color}18`,
                        border:`1px solid ${classEntry.glow}28`,
                        borderRadius:"8px", padding:"8px 4px 6px",
                      }}>
                        <div style={{
                          width:"52px", height:"52px", borderRadius:"7px", overflow:"hidden",
                          border:`1.5px solid ${classEntry.glow}45`,
                          background:"#0d1a2a",
                        }}>
                          {!imgFail(ek)
                            ? <img src={champImg(c)} alt={c} title={c} onError={() => onErr(ek)}
                                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                            : <div style={{ width:"100%", height:"100%", display:"flex",
                                alignItems:"center", justifyContent:"center",
                                fontSize:"14px", color:"#5c6a7a" }}>{c[0]}</div>
                          }
                        </div>
                        <span style={{
                          fontSize:"10px", color:"#c8a96a", textAlign:"center",
                          lineHeight:1.2, maxWidth:"68px",
                          overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
                        }}>{c}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Item recommendations */}
              <div>
                <div style={{ fontSize:"10px", letterSpacing:"3px", color:classEntry.glow,
                  textTransform:"uppercase", marginBottom:"12px",
                  borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"6px" }}>
                  Items · {champ.display} · {mode==="ahead" ? "Ahead" : "Even / Behind"}
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                  {classItems.map((item, i) => (
                    <ItemCard key={i} item={item} rank={i+1} glow={classEntry.glow} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!classEntry && (
        <div style={{ textAlign:"center", padding:"16px",
          color:"rgba(180,150,80,.25)", fontSize:"13px",
          fontStyle:"italic", letterSpacing:"1px" }}>
          ↑ Click any class bubble to see {champ.display}'s situational items
        </div>
      )}

      {/* ── SITUATIONAL ITEMS STRIP ── */}
      <div style={{ maxWidth:"1400px", margin:"0 auto 32px", padding:"0 24px" }}>
        <div style={{
          background:"rgba(255,255,255,.02)", border:`1px solid rgba(180,140,60,.13)`,
          borderRadius:"12px", padding:"16px 20px",
        }}>
          <div style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
            textTransform:"uppercase", marginBottom:"12px" }}>
            Common Situational Items — {champ.display}
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
            {champ.sideItems.map(name => {
              const col = ic(name);
              const ek  = `side-${name}`;
              return (
                <div key={name} style={{
                  display:"flex", alignItems:"center", gap:"7px",
                  background:"rgba(255,255,255,.03)",
                  border:`1px solid ${col}30`, borderRadius:"7px",
                  padding:"6px 10px",
                }}>
                  <div style={{
                    width:"26px", height:"26px", borderRadius:"4px", overflow:"hidden",
                    background:`${col}18`, border:`1px solid ${col}40`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    flexShrink:0,
                  }}>
                    {!imgFail(ek)
                      ? <img src={itemImg(name)} alt={name} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"8px", height:"8px", borderRadius:"50%",
                          background:col }} />
                    }
                  </div>
                  <span style={{ fontSize:"12px", color:col, whiteSpace:"nowrap" }}>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
