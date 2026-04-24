import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  LOCAL IMAGE PATHS
//  Put files in  ./images/champions/   and  ./images/items/
//  Filename rule: spaces → underscores, apostrophes removed
//  e.g.  Eclipse.png  │  Black_Cleaver.png  │  Lords_Dominiks_Regards.png
//  A coloured fallback renders if an image is missing — nothing breaks.
// ─────────────────────────────────────────────────────────────────────────────
const IMG = "./images";
const champImg = (dd)  => `${IMG}/champions/${dd}.png`;
const itemImg  = (name) =>
  `${IMG}/items/${name.replace(/'/g, "").replace(/\s+/g, "_")}.png`;

// ─────────────────────────────────────────────────────────────────────────────
//  ITEM COLOURS  (fallback when image missing)
// ─────────────────────────────────────────────────────────────────────────────
const IC = {
  "Eclipse":"#ffd700","Black Cleaver":"#e74c3c","Sundered Sky":"#ffe066",
  "Spear of Shojin":"#ff9800","Serylda's Grudge":"#f39c12",
  "Lord Dominik's Regards":"#e67e22","Sterak's Gage":"#1abc9c",
  "Death's Dance":"#e91e63","Plated Steelcaps":"#95a5a6",
  "Mercury's Treads":"#3498db","Maw of Malmortius":"#9b59b6",
  "Banshee's Veil":"#673ab7","Mortal Reminder":"#ff5722",
  "Randuin's Omen":"#2ecc71","Frozen Heart":"#00bcd4",
  "Serpent's Fang":"#4caf50","Youmuu's Ghostblade":"#607d8b",
  "Nashor's Tooth":"#9cba00","Liandry's Torment":"#ff6b35",
  "Malignance":"#a855f7","Shadowflame":"#ff4444",
  "Rabadon's Deathcap":"#ff69b4","Void Staff":"#9400d3",
  "Morellonomicon":"#b22222","Zhonya's Hourglass":"#daa520",
  "Rylai's Crystal Scepter":"#4fc3f7","Wit's End":"#40e0d0",
  "Sorcerer's Shoes":"#7986cb","Boots of Swiftness":"#80cbc4",
};
const ic = (n) => IC[n] || "#aaaaaa";

// ─────────────────────────────────────────────────────────────────────────────
//  ENEMY CLASSES
// ─────────────────────────────────────────────────────────────────────────────
const CLASSES = {
  JUGGERNAUT: { label:"Juggernaut",    emoji:"🏋️", color:"#c0392b", glow:"#e74c3c", desc:"High HP, high damage, low mobility. Walks you down.", champions:["Darius","Garen","Sett","Mordekaiser","Nasus","Urgot","Illaoi","Dr. Mundo","Trundle","Sion","Yorick","Olaf","Warwick","Volibear","Aatrox"] },
  DIVER:      { label:"Diver",         emoji:"⚡",  color:"#d35400", glow:"#e67e22", desc:"Mobile fighters who mirror your aggression. Extended fights kill you.", champions:["Irelia","Camille","Renekton","Vi","Lee Sin","Hecarim","Jarvan IV","Briar","Rek'Sai","Diana","Wukong","Xin Zhao","Sylas","Elise","Nocturne","Riven"] },
  ASSASSIN:   { label:"Assassin",      emoji:"🗡️", color:"#7d3c98", glow:"#9b59b6", desc:"One-shot from fog of war. Their burst window is your kill window.", champions:["Zed","Akali","Talon","Katarina","Kha'Zix","Fizz","Evelynn","Kassadin","LeBlanc","Ekko","Qiyana","Rengar","Naafiri","Shaco","Pyke"] },
  SKIRMISHER: { label:"Skirmisher",    emoji:"⚔️", color:"#1a6b3c", glow:"#27ae60", desc:"Win extended fights. Survive your burst and they out-duel you.", champions:["Fiora","Jax","Yasuo","Yone","Tryndamere","Gwen","Master Yi","Kayn","Kled","Viego","Nilah","Lillia"] },
  BURST_MAGE: { label:"Burst Mage",    emoji:"💥", color:"#1a5276", glow:"#2980b9", desc:"Single large combo from range. Often CC you before you can E-block.", champions:["Syndra","Veigar","Orianna","Lissandra","Vex","Annie","Zoe","Aurora","Neeko","Ahri","Karma","Lux"] },
  BATTLEMAGE: { label:"Battlemage",    emoji:"🌀", color:"#0e6655", glow:"#1abc9c", desc:"Sustained AP DPS at medium range, often with significant healing.", champions:["Vladimir","Ryze","Cassiopeia","Swain","Viktor","Karthus","Brand","Malzahar","Azir","Rumble","Taliyah","Aurelion Sol"] },
  ARTILLERY:  { label:"Artillery",     emoji:"🎯", color:"#4a235a", glow:"#8e44ad", desc:"Long-range poke outside your engage range. Whittle you down first.", champions:["Xerath","Vel'Koz","Ziggs","Heimerdinger","Hwei","Mel","Jayce","Lux"] },
  MARKSMAN:   { label:"Marksman",      emoji:"🏹", color:"#7b6d00", glow:"#f1c40f", desc:"Fragile but deal massive sustained DPS if left uncontested.", champions:["Jinx","Caitlyn","Jhin","Kai'Sa","Draven","Aphelios","Ashe","Kalista","Xayah","Lucian","Vayne","Zeri","Tristana","Samira","Miss Fortune","Ezreal","Sivir","Smolder"] },
  ENCHANTER:  { label:"Enchanter",     emoji:"💚", color:"#145a32", glow:"#2ecc71", desc:"Shields and heals negate your burst. Can knock you away mid-engage.", champions:["Janna","Lulu","Soraka","Yuumi","Nami","Sona","Milio","Karma","Taric","Renata Glasc","Seraphine"] },
  CATCHER:    { label:"Catcher",       emoji:"🔒", color:"#2471a3", glow:"#3498db", desc:"CC chains remove your mobility. Hooks kill your dive pattern.", champions:["Thresh","Blitzcrank","Morgana","Nautilus","Skarner","Zac","Bard","Ivern","Zyra","Maokai","Varus","Lissandra"] },
  VANGUARD:   { label:"Vanguard",      emoji:"🛡️", color:"#2e4053", glow:"#5d6d7e", desc:"Engage tanks. Hard CC into team collapse.", champions:["Malphite","Leona","Nautilus","Maokai","Sejuani","Jarvan IV","Gragas","Amumu","Alistar","Ornn","Zac","Rammus","Volibear","Nunu & Willump"] },
  WARDEN:     { label:"Warden",        emoji:"🗿", color:"#4d3319", glow:"#a04000", desc:"Block your damage for their carry. Shield generators and peel machines.", champions:["Braum","Shen","Tahm Kench","Poppy","Galio","K'Sante"] },
  SPECIALIST: { label:"Specialist",    emoji:"🎭", color:"#5f5f5f", glow:"#95a5a6", desc:"Wildly varied kits. Each plays by their own rules — read the matchup.", champions:["Teemo","Singed","Gangplank","Shyvana","Graves","Kayle","Kennen","Nidalee","Quinn","Twisted Fate","Udyr","Fiddlesticks","Gnar","Zilean"] },
};

// ─────────────────────────────────────────────────────────────────────────────
//  ITEM ENTRY HELPER
// ─────────────────────────────────────────────────────────────────────────────
const I = (name, why) => ({ name, why });

// ─────────────────────────────────────────────────────────────────────────────
//  CHAMPION DEFINITIONS
//  corePath   : the concise build order string shown at the top
//  coreNote   : short tooltip on the core path
//  sideItems  : common situational items as a quick reference list
// ─────────────────────────────────────────────────────────────────────────────
const CHAMPS = [
  {
    display: "Pantheon",
    dd:      "Pantheon",
    role:    "Diver / Bruiser · Top · Mid · Support",
    color:   "#c0392b",
    glow:    "#e74c3c",
    corePath: "Eclipse  ›  Sundered Sky  ›  Black Cleaver  ›  Spear of Shojin",
    coreNote: "Eclipse first-item spike is strongest. Sundered Sky or Cleaver second depends on whether you need more burst (Sky) or sustained AoE shred (Cleaver). Shojin amplifies Q-poke in extended trades.",
    sideItems: ["Plated Steelcaps","Mercury's Treads","Sterak's Gage","Death's Dance","Lord Dominik's Regards","Serpent's Fang","Mortal Reminder","Serylda's Grudge","Maw of Malmortius","Banshee's Veil","Randuin's Omen","Frozen Heart"],
    data: {
      JUGGERNAUT: {
        ahead:  [ I("Lord Dominik's Regards","% armor pen + up to 15% bonus dmg vs HP stacks — press your lead."), I("Serylda's Grudge","Q/Ult slow seals the execute. Armor pen on an already-losing Juggernaut."), I("Eclipse","Pure burst to convert gold lead into a one-rotation kill on Darius.") ],
        behind: [ I("Black Cleaver","HP + shred in one item. Survive their damage while peeling their armor."), I("Death's Dance","Delay lethal burst into a bleed — keeps your combo window open from deficit."), I("Sterak's Gage","Shield keeps you alive when they catch you at low HP in a losing position.") ],
      },
      DIVER: {
        ahead:  [ I("Eclipse","Convert your lead fast — burst before they can sustain or disengage."), I("Youmuu's Ghostblade","Active move-speed to chase or re-engage after Ult landing."), I("Death's Dance","Sustain through their mirror-dive while your burst finishes them.") ],
        behind: [ I("Sterak's Gage","Shield at low HP when Camille or Irelia survives burst and all-ins back."), I("Plated Steelcaps","Flat auto reduction on Irelia/Renekton — every auto counts when behind."), I("Death's Dance","Convert their burst to a bleed so your combo window still exists.") ],
      },
      ASSASSIN: {
        ahead:  [ I("Eclipse","Out-burst them — your lead means you delete before they can detonate."), I("Youmuu's Ghostblade","Chase Zed/Akali who try to disengage after failed bursts."), I("Serylda's Grudge","Slow on Q/Ult stops Talon or Katarina re-entering after their dash.") ],
        behind: [ I("Maw of Malmortius","Magic shield at <35% HP — absorbs Akali/Ekko hybrid burst when behind."), I("Banshee's Veil","Block the engagement opener (Akali E, Kata Shunpo) to survive."), I("Sterak's Gage","Second shield layer + HP; combined with E block, hard to one-shot.") ],
      },
      SKIRMISHER: {
        ahead:  [ I("Eclipse","Burst them before they stack defensive items."), I("Lord Dominik's Regards","Pen through early Fiora/Jax armor during your lead window."), I("Serylda's Grudge","Slow stops Yone/Yasuo kiting away and keeps them in your combo.") ],
        behind: [ I("Randuin's Omen","Crit damage reduction — vital vs Yasuo, Yone, Tryndamere crit builds."), I("Frozen Heart","–20% nearby attack speed. Destroys Fiora/Tryndamere who live off autos."), I("Black Cleaver","HP + shred to keep damage relevant even while in deficit.") ],
      },
      BURST_MAGE: {
        ahead:  [ I("Eclipse","Dive in and blow them up before they can land their full combo."), I("Youmuu's Ghostblade","Speed lets you gap-close faster than their cast animations."), I("Serpent's Fang","Orianna/Karma with early shields — 50% reduction on contact.") ],
        behind: [ I("Maw of Malmortius","Magic shield absorbs their 'dump everything' combo when behind."), I("Banshee's Veil","Block first CC (Syndra E / Lissandra Q) to prevent the full chain."), I("Mercury's Treads","Shorter stun/root duration = more time to retaliate or E-block.") ],
      },
      BATTLEMAGE: {
        ahead:  [ I("Eclipse","Short burst window — kill before Vladimir can drain back up."), I("Mortal Reminder","GW 40% eliminates their sustain advantage before they can regen."), I("Lord Dominik's Regards","Swain/Malzahar stack HP — % pen ensures damage stays high.") ],
        behind: [ I("Maw of Malmortius","Survive the sustained AP DPS window with magic shield, then burst."), I("Mortal Reminder","GW is your only offset for their healing when behind."), I("Sterak's Gage","Extra shield gives another window after sustained damage.") ],
      },
      ARTILLERY: {
        ahead:  [ I("Youmuu's Ghostblade","Sprint active closes the poke gap and reaches them instantly."), I("Eclipse","One-shot on landing — they have no escape when you close that fast."), I("Spear of Shojin","Haste + Q reset = more ranged poke pressure during the approach.") ],
        behind: [ I("Banshee's Veil","Block one long-range ability — the safe window to Ult or W onto them."), I("Mercury's Treads","Shorter Xerath/Vel'Koz CC = more time to close the gap."), I("Sterak's Gage","Survive poke damage accumulated while closing distance.") ],
      },
      MARKSMAN: {
        ahead:  [ I("Eclipse","Two-ability proc = guaranteed one-rotation kill on any ADC."), I("Youmuu's Ghostblade","Active speed closes instantly before they can kite or reposition."), I("Serpent's Fang","Kai'Sa/Samira shields get stripped — no escaping your burst.") ],
        behind: [ I("Plated Steelcaps","Flat auto reduction is massive — cuts every Jinx/Caitlyn attack."), I("Eclipse","Still your best damage path even behind — one good Ult = back in game."), I("Sterak's Gage","Shield keeps you alive long enough to find that one combo window.") ],
      },
      ENCHANTER: {
        ahead:  [ I("Serpent's Fang","⭐ PRIORITY — 50% shield strip on contact while ahead to reach carry."), I("Youmuu's Ghostblade","Active speed: Janna/Lulu can't reposition before your W stun lands."), I("Eclipse","Overkill burst — with Serpent's Fang up they simply die.") ],
        behind: [ I("Serpent's Fang","Still priority even behind — skipping it costs you every shield trade."), I("Mortal Reminder","When you can't reach them, Q poke still applies GW to limit heals."), I("Sterak's Gage","Survive Lulu polymorph + their carry's follow-up burst.") ],
      },
      CATCHER: {
        ahead:  [ I("Youmuu's Ghostblade","Outmanoeuvre Blitz/Thresh entirely with active speed advantage."), I("Eclipse","Close range, detonate — one-shot the Catcher before they reset."), I("Serpent's Fang","Zac/Morgana shields absorbed — more damage gets through.") ],
        behind: [ I("Banshee's Veil","Spell shield absorbs Blitz Q / Thresh hook — your single lifeline."), I("Mercury's Treads","Shorter Nautilus root / Morgana bind when you get caught."), I("Sterak's Gage","Survive the team's collapse after their Catcher lands CC on you.") ],
      },
      VANGUARD: {
        ahead:  [ I("Eclipse","Convert lead — Ult in, E their CC, finish with burst before they act."), I("Black Cleaver","Shred Malphite/Ornn armor in 6 Q taps while their team is disrupted."), I("Lord Dominik's Regards","% pen while ahead makes their armor itemisation irrelevant.") ],
        behind: [ I("Mercury's Treads","Default. Malphite Ult, Leona chain, Nautilus root — all shorter."), I("Sterak's Gage","Survive the burst that follows a Vanguard's initiation."), I("Randuin's Omen","AoE slow active peels their engage. Crit reduction vs carry builds.") ],
      },
      WARDEN: {
        ahead:  [ I("Serpent's Fang","Shen Ult + Braum passive shields stripped by 50% on contact."), I("Lord Dominik's Regards","While ahead, % pen turns their armor stacking into irrelevant stats."), I("Serylda's Grudge","Slow on Ult stops Tahm Kench body-blocking at the last second.") ],
        behind: [ I("Black Cleaver","Shred their armor gradually — even behind, 6 stacks still open them."), I("Sterak's Gage","Survive their peel and stay in fight long enough to stack Cleaver."), I("Mercury's Treads","Poppy/Galio CC chains shut down your dives — reduce their duration.") ],
      },
      SPECIALIST: {
        ahead:  [ I("Eclipse","Burst Singed/Shyvana before the poison/dragon stacks get critical."), I("Youmuu's Ghostblade","Active speed lets you chase Singed instead of him kiting forever."), I("Serylda's Grudge","Slow means even Quinn can't disengage from your combo while ahead.") ],
        behind: [ I("Mortal Reminder","GP Orange heal, Kayle sustain, Udyr regen — GW 40% cuts all of it."), I("Banshee's Veil","Teemo blind, TF gold card, Kennen stun — blocks their key setup."), I("Sterak's Gage","Survive the poke damage absorbed while getting to engage range.") ],
      },
    },
  },
  {
    display: "Teemo",
    dd:      "Teemo",
    role:    "AP On-Hit Specialist · Top · Mid",
    color:   "#27ae60",
    glow:    "#2ecc71",
    corePath: "Nashor's Tooth  ›  Liandry's Torment  ›  Malignance  ›  Sorcerer's Shoes",
    coreNote: "Nashor's first for the on-hit AP + attack speed spike. Liandry's second for % max HP burn that tears through tanks. Malignance third for ability haste and shroom density. Sorc Shoes for flat magic pen.",
    sideItems: ["Shadowflame","Rabadon's Deathcap","Void Staff","Morellonomicon","Zhonya's Hourglass","Rylai's Crystal Scepter","Wit's End","Banshee's Veil","Boots of Swiftness"],
    data: {
      JUGGERNAUT: {
        ahead:  [ I("Shadowflame","Flat pen into low-MR Juggernauts while ahead — burst trades hurt them badly."), I("Rabadon's Deathcap","Amplify all AP; shrooms deal enormous burst damage on a gold lead."), I("Void Staff","If they rush Wit's End early — 40% magic pen keeps damage consistent.") ],
        behind: [ I("Liandry's Torment","% max HP burn bypasses their HP stacking entirely — no stats required."), I("Rylai's Crystal Scepter","Every Toxic Shot auto applies a slow — nearly impossible to reach you."), I("Morellonomicon","Dr. Mundo/Warwick passive regen + Nasus stacking — GW on every auto.") ],
      },
      DIVER: {
        ahead:  [ I("Nashor's Tooth","⭐ Blind (Q) completely negates Irelia/Camille empowered auto combos."), I("Shadowflame","Burst in the 2-second blind window — they can't fight back at all."), I("Malignance","Haste = more Q casts + shrooms to zone their approach angles.") ],
        behind: [ I("Zhonya's Hourglass","Stasis during their dive wastes all cooldowns — you emerge poisoning."), I("Rylai's Crystal Scepter","Autos + Q apply slows every hit — Lee Sin and Hecarim can't stick."), I("Wit's End","MR + attack speed + drain for extended kiting vs Sylas/Diana.") ],
      },
      ASSASSIN: {
        ahead:  [ I("Shadowflame","Out-burst them — your lead means you delete first after blinding them."), I("Rabadon's Deathcap","AP advantage wins the trade before their combo can complete."), I("Malignance","Haste = faster Q casts; blind them the moment they dash in.") ],
        behind: [ I("Zhonya's Hourglass","Stasis neutralises Zed Ult / Akali full combo — they waste everything."), I("Banshee's Veil","Block Akali E engage or Kata Shunpo — prevent the opening dash."), I("Morellonomicon","Slow their regen after the skirmish so they can't recover and re-engage.") ],
      },
      SKIRMISHER: {
        ahead:  [ I("Nashor's Tooth","⭐ Blind hard-counters Fiora/Tryndamere/Master Yi who live off autos."), I("Shadowflame","Burst them in the blind window; they have nothing to fight back with."), I("Malignance","More Q casts = more blinds in extended duels vs Jax/Kayn.") ],
        behind: [ I("Zhonya's Hourglass","Jax passive and Fiora riposte eat your burst — stasis buys resets."), I("Wit's End","MR + sustain for the extended trades Skirmishers always force."), I("Rylai's Crystal Scepter","Slows on every auto let you disengage and re-kite even from a bad position.") ],
      },
      BURST_MAGE: {
        ahead:  [ I("Rabadon's Deathcap","Out-AP them — mushrooms and autos deal more than their single combo."), I("Shadowflame","After they miss their opener, burst them before the cooldown resets."), I("Malignance","More shrooms placed faster = they have no safe ground to stand on.") ],
        behind: [ I("Banshee's Veil","Block the CC that starts their combo (Syndra E / Annie stun / Orianna ball)."), I("Zhonya's Hourglass","Survive the full AP detonation; poison and shroom stacks remain."), I("Malignance","Haste for more Q casts and shroom density — outzone them safely.") ],
      },
      BATTLEMAGE: {
        ahead:  [ I("Rabadon's Deathcap","Outscale their sustained damage with raw AP — burst trades win."), I("Void Staff","Ryze/Viktor build early MR — % pen pierces it as you press advantage."), I("Shadowflame","Burst trades in the lead window punish before they can drain back.") ],
        behind: [ I("Morellonomicon","Vladimir Transfusion + Swain drain — GW 40% on every single auto."), I("Malignance","Keep Toxic Shot stacks up constantly from max range — no need to trade."), I("Zhonya's Hourglass","Survive Ryze/Viktor burst on a bad engage, then poison does the work.") ],
      },
      ARTILLERY: {
        ahead:  [ I("Boots of Swiftness","Dodge Xerath/Vel'Koz skillshots freely while pressuring forward."), I("Rabadon's Deathcap","Your AP wins at range — mushrooms in their poke lane are now lethal."), I("Shadowflame","Once you close the gap and blind, flat pen one-shots the Artillery.") ],
        behind: [ I("Malignance","More shrooms = zone out their entire safe poke angle on the map."), I("Boots of Swiftness","Slow resist + speed to dodge skillshots when you can't afford to get hit."), I("Banshee's Veil","Block one long-range stun — the window you need to push in or escape.") ],
      },
      MARKSMAN: {
        ahead:  [ I("Nashor's Tooth","⭐ PRIORITY — Blind completely nullifies every ADC auto for 2–3 seconds."), I("Shadowflame","Post-blind, flat pen + AP one-shots most ADCs before blind wears off."), I("Rabadon's Deathcap","Amplify shroom burst — even one shroom can execute a low ADC.") ],
        behind: [ I("Morellonomicon","Deny lifesteal and Bloodthirster shields — their sustain disappears."), I("Liandry's Torment","Poison stacks melt Kai'Sa/Vayne HP items safely from range."), I("Rylai's Crystal Scepter","Slow on every auto; kite the ADC indefinitely even from deficit.") ],
      },
      ENCHANTER: {
        ahead:  [ I("Shadowflame","10% extra pen vs shielded targets — directly counters Lulu/Janna shield spam."), I("Rabadon's Deathcap","Your mushrooms shred through their shields and one-shot the carry."), I("Malignance","More shrooms under the Enchanter force constant repositioning.") ],
        behind: [ I("Morellonomicon","Soraka/Nami core is healing — GW on every auto makes them nearly useless."), I("Malignance","Shrooms placed faster; zone Enchanters off their peel angles."), I("Liandry's Torment","Poison burn on every auto drains through Soraka's healing output.") ],
      },
      CATCHER: {
        ahead:  [ I("Boots of Swiftness","Outpace Blitzcrank Q and Thresh hook with slow-resist + raw speed."), I("Shadowflame","If you get close, burst the Catcher before they chain another CC."), I("Malignance","Mushrooms in hook angles force Catchers to reposition or take lethal damage.") ],
        behind: [ I("Boots of Swiftness","Slow-resist is your survival tool vs Morgana root / Nautilus CC chain."), I("Banshee's Veil","Spell shield absorbs Blitz hook / Morgana bind — your most critical item."), I("Zhonya's Hourglass","If Nautilus chains you anyway, stasis buys your team time to respond.") ],
      },
      VANGUARD: {
        ahead:  [ I("Void Staff","Press your lead — % magic pen pierces their MR before they can stack it."), I("Liandry's Torment","% HP burn while ahead stacks enormously as they build Warmog's."), I("Rabadon's Deathcap","Amplify all AP; mushrooms deal massive burst to low-MR tanks.") ],
        behind: [ I("Liandry's Torment","% HP burn is the only reliable damage against Malphite/Ornn HP stacking."), I("Malignance","Mushrooms placed ahead of their engage path zone them from initiating."), I("Rylai's Crystal Scepter","Slow on every auto lets you kite Leona/Sejuani initiations indefinitely.") ],
      },
      WARDEN: {
        ahead:  [ I("Void Staff","K'Sante/Galio stack MR — % pen is your answer while ahead."), I("Liandry's Torment","% HP burn stacks enormously against high-HP Wardens while ahead."), I("Rabadon's Deathcap","Amplify your AP so even shielded Wardens take serious shroom damage.") ],
        behind: [ I("Liandry's Torment","% HP burn is your only reliable damage vs Warden HP/MR stacks."), I("Malignance","Mushrooms zone Tahm Kench/Shen from peeling with their body."), I("Morellonomicon","Tahm Kench passive sustain + Shen regen — GW reduces their tankiness.") ],
      },
      SPECIALIST: {
        ahead:  [ I("Shadowflame","Burst Singed before he can apply poison stacks or begin his kite loop."), I("Rabadon's Deathcap","Amplify shroom burst so GP barrels and Shyvana dives become lethal."), I("Malignance","More shroom placement speed = deny Gangplank barrel spots entirely.") ],
        behind: [ I("Boots of Swiftness","Singed chases you infinitely — slow resist + speed is your only out."), I("Morellonomicon","GP Oranges + passive heal, Kayle sustain, Udyr regen — GW cuts all."), I("Malignance","More shroom density to deny Gangplank barrel placement.") ],
      },
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [champ,     setChamp]     = useState(CHAMPS[0]);
  const [openClass, setOpenClass] = useState(null);
  const [mode,      setMode]      = useState("behind"); // "ahead" | "behind"
  const [imgErr,    setImgErr]    = useState({});
  const [showCore,  setShowCore]  = useState(false);

  const onErr = (k) => setImgErr(p => ({ ...p, [k]: true }));

  const switchChamp = (c) => { setChamp(c); setOpenClass(null); setShowCore(false); };
  const classEntry  = openClass ? CLASSES[openClass] : null;
  const classItems  = openClass ? (champ.data[openClass]?.[mode] || []) : [];

  const coreArrow = champ.corePath.split("›").map(s => s.trim());

  return (
    <div style={{
      minHeight:"100vh",
      background:"radial-gradient(ellipse at 15% 5%,#0d1117 0%,#060a0f 55%,#0a0d14 100%)",
      fontFamily:"'Georgia','Times New Roman',serif",
      color:"#e8d5b0",
    }}>

      {/* ── HEADER ── */}
      <div style={{
        textAlign:"center", padding:"22px 20px 10px",
        background:"linear-gradient(180deg,rgba(180,120,20,.13) 0%,transparent 100%)",
        borderBottom:"1px solid rgba(180,120,20,.2)",
      }}>
        <div style={{ fontSize:"10px", letterSpacing:"6px", color:"#b8860b", textTransform:"uppercase", marginBottom:"4px" }}>
          Aspectum Martis · Patch 16.8
        </div>
        <h1 style={{
          fontSize:"clamp(14px,3vw,22px)", fontWeight:"bold",
          color:"#f0d060", margin:"0 0 4px",
          textShadow:"0 0 36px rgba(240,208,96,.45)", letterSpacing:"2px",
        }}>
          {champ.display} — Situational Itemization
        </h1>
        <p style={{ margin:0, fontSize:"10px", color:champ.glow, letterSpacing:"1px" }}>{champ.role}</p>
      </div>

      {/* ── CHAMPION SWITCHER + MODE TOGGLE ── */}
      <div style={{
        display:"flex", justifyContent:"center", alignItems:"center",
        gap:"20px", padding:"12px 20px 10px",
        background:"rgba(0,0,0,.4)",
        borderBottom:"1px solid rgba(180,120,20,.12)",
        flexWrap:"wrap",
      }}>
        {/* Champion portraits */}
        {CHAMPS.map(c => {
          const active = champ.display === c.display;
          const ek     = `champ-${c.dd}`;
          return (
            <div key={c.display} onClick={() => switchChamp(c)}
              style={{ cursor:"pointer", textAlign:"center", transition:"all .2s", transform:active?"scale(1.08)":"scale(1)" }}>
              <div style={{
                width:"64px", height:"64px", borderRadius:"10px", overflow:"hidden",
                border:active?`2.5px solid ${c.glow}`:"2.5px solid rgba(255,255,255,.1)",
                boxShadow:active?`0 0 20px ${c.glow}70`:"none",
                background:"#111", margin:"0 auto 5px", 
              }}>
                {!imgErr[ek]
                  ? <img src={champImg(c.dd)} alt={c.display} onError={() => onErr(ek)}
                      style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  : <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center",
                        justifyContent:"center", fontSize:"20px", fontWeight:"bold",
                        color:c.glow, background:`${c.color}20` }}>{c.display[0]}</div>
                }
              </div>
              <div style={{ fontSize:"11px", fontWeight:"bold", color:active?c.glow:"#9a8a6a" }}>{c.display}</div>
              {active && <div style={{ height:"2px", width:"32px", margin:"3px auto 0",
                background:`linear-gradient(90deg,transparent,${c.glow},transparent)`, borderRadius:"2px" }} />}
            </div>
          );
        })}

        <div style={{ width:"1px", height:"52px", background:"rgba(180,120,20,.2)" }} />

        {/* Game state toggle */}
        <div>
          <div style={{ fontSize:"9px", letterSpacing:"3px", color:"#b8860b", textTransform:"uppercase", textAlign:"center", marginBottom:"7px" }}>
            Game State
          </div>
          <div style={{ display:"flex", borderRadius:"8px", overflow:"hidden",
            border:"1px solid rgba(255,255,255,.1)", background:"rgba(0,0,0,.35)" }}>
            {[
              { key:"ahead",  label:"⚔ Ahead",        on:"#b8860b", text:"#f0d060" },
              { key:"behind", label:"🛡 Even / Behind", on:"#4a6fa5", text:"#7eb8f7" },
            ].map(opt => (
              <button key={opt.key} onClick={() => setMode(opt.key)}
                style={{
                  padding:"8px 14px", cursor:"pointer", border:"none",
                  background: mode===opt.key ? `${opt.on}30` : "transparent",
                  color: mode===opt.key ? opt.text : "#6a7a6a",
                  fontSize:"11px", fontWeight:mode===opt.key?"bold":"normal",
                  letterSpacing:".5px", transition:"all .15s",
                  boxShadow: mode===opt.key ? `inset 0 -2px 0 ${opt.on}` : "none",
                  borderRight: opt.key==="ahead" ? "1px solid rgba(255,255,255,.08)" : "none",
                }}>
                {opt.label}
              </button>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"4px", fontSize:"9px",
            color:"rgba(160,140,80,.5)", fontStyle:"italic" }}>
            {mode==="ahead" ? "Snowball items" : "Survival / scale items"}
          </div>
        </div>
      </div>

      {/* ── CORE BUILD PATH ── */}
      <div style={{ maxWidth:"1100px", margin:"10px auto 0", padding:"0 14px" }}>
        <div style={{
          background:"rgba(5,12,25,.9)",
          border:"1px solid rgba(180,120,20,.25)",
          borderRadius:"10px",
          padding:"12px 16px",
        }}>
          {/* Header row */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
            marginBottom: showCore ? "12px" : "0" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <span style={{ fontSize:"9px", letterSpacing:"3px", color:"#b8860b",
                textTransform:"uppercase" }}>Core Build Path</span>
            </div>
            <button onClick={() => setShowCore(v=>!v)}
              style={{ background:"none", border:"none", cursor:"pointer",
                color:"#6a7a5a", fontSize:"10px", letterSpacing:"1px" }}>
              {showCore ? "▲ Hide" : "▼ Why?"}
            </button>
          </div>

          {/* Arrow chain */}
          <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:"4px", marginBottom: showCore ? "10px" : "0" }}>
            {coreArrow.map((item, idx) => {
              const col    = ic(item);
              const src    = itemImg(item);
              const ek     = `core-${item}`;
              const failed = imgErr[ek];
              return (
                <div key={idx} style={{ display:"flex", alignItems:"center", gap:"4px" }}>
                  {/* Item icon */}
                  <div style={{
                    width:"36px", height:"36px", borderRadius:"6px", overflow:"hidden",
                    border:`1.5px solid ${col}55`, background:`${col}15`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:`0 0 8px ${col}30`,
                  }}>
                    {src && !failed
                      ? <img src={src} alt={item} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"10px", height:"10px", borderRadius:"50%",
                            background:col, boxShadow:`0 0 6px ${col}` }} />
                    }
                  </div>
                  {/* Item name */}
                  <span style={{ fontSize:"11px", fontWeight:"600", color:col,
                    whiteSpace:"nowrap" }}>{item}</span>
                  {/* Arrow separator */}
                  {idx < coreArrow.length - 1 && (
                    <span style={{ color:"rgba(180,120,20,.5)", fontSize:"14px",
                      margin:"0 2px", fontWeight:"300" }}>›</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Expanded note */}
          {showCore && (
            <p style={{ margin:0, fontSize:"11px", color:"#a0896a",
              lineHeight:1.6, borderTop:"1px solid rgba(180,120,20,.15)",
              paddingTop:"10px" }}>
              {champ.coreNote}
            </p>
          )}
        </div>
      </div>

      {/* ── CLASS BUBBLES ── */}
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(106px,1fr))",
        gap:"7px", padding:"10px 14px",
        maxWidth:"1100px", margin:"0 auto",
      }}>
        {Object.keys(CLASSES).map(k => {
          const d  = CLASSES[k];
          const on = openClass === k;
          return (
            <div key={k} onClick={() => setOpenClass(on ? null : k)}
              style={{
                cursor:"pointer", borderRadius:"9px", padding:"10px 6px 8px",
                textAlign:"center",
                background: on
                  ? `radial-gradient(circle at 50% 30%,${d.glow}38 0%,${d.color}22 60%,${d.color}12 100%)`
                  : "rgba(255,255,255,.04)",
                border: on ? `1.5px solid ${d.glow}88` : "1.5px solid rgba(255,255,255,.07)",
                boxShadow: on ? `0 0 14px ${d.glow}40,inset 0 0 12px ${d.glow}10` : "none",
                transform: on ? "scale(1.04)" : "scale(1)",
                transition:"all .2s ease",
              }}>
              <div style={{ fontSize:"20px", marginBottom:"3px" }}>{d.emoji}</div>
              <div style={{ display:"flex", justifyContent:"center", gap:"2px", marginBottom:"4px" }}>
                {d.champions.slice(0, 3).map(c => (
                <img key={c} src={champImg(c)} alt={c} title={c}
                onError={e => e.target.style.display="none"}
                style={{ width:"26px", height:"26px", borderRadius:"3px", objectFit:"cover",
                    border:"1px solid rgba(255,255,255,.15)" }} />
                ))}
              </div>
              <div style={{ fontSize:"9px", fontWeight:"bold", letterSpacing:".7px",
                color: on ? d.glow : "#c8a96a", textTransform:"uppercase", lineHeight:1.2 }}>
                {d.label}
              </div>
              <div style={{ marginTop:"3px", fontSize:"8px", color:"rgba(200,180,140,.38)" }}>
                {d.champions.length} champs
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DETAIL PANEL ── */}
      {classEntry && (
        <div style={{ maxWidth:"1100px", margin:"0 auto 14px", padding:"0 14px" }}>
          <div style={{
            background:`linear-gradient(135deg,rgba(12,12,20,.98) 0%,${classEntry.color}18 100%)`,
            border:`1px solid ${classEntry.glow}50`, borderRadius:"12px",
            padding:"18px", boxShadow:`0 0 28px ${classEntry.glow}18`,
          }}>
            {/* Panel title */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px",
              marginBottom:"14px", flexWrap:"wrap" }}>
              <span style={{ fontSize:"24px" }}>{classEntry.emoji}</span>
              <div style={{ flex:1 }}>
                <h2 style={{ margin:"0 0 1px", fontSize:"15px", color:classEntry.glow,
                  letterSpacing:"2px", textTransform:"uppercase" }}>
                  {champ.display} vs {classEntry.label}
                </h2>
                <p style={{ margin:0, fontSize:"10px", color:"#a0896a", fontStyle:"italic" }}>
                  {classEntry.desc}
                </p>
              </div>
              <div style={{
                padding:"4px 10px", borderRadius:"6px", fontSize:"10px",
                fontWeight:"bold", letterSpacing:"1px", flexShrink:0,
                background: mode==="ahead" ? "rgba(184,134,11,.18)" : "rgba(74,111,165,.18)",
                border: mode==="ahead" ? "1px solid #b8860b60" : "1px solid #4a6fa560",
                color: mode==="ahead" ? "#f0d060" : "#7eb8f7",
              }}>
                {mode==="ahead" ? "⚔ AHEAD" : "🛡 EVEN / BEHIND"}
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"14px" }}>

              {/* Champions in class */}
              <div>
                <div style={{ fontSize:"9px", letterSpacing:"3px", color:classEntry.glow,
                  textTransform:"uppercase", marginBottom:"7px",
                  borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"4px" }}>
                  Champions in class
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
                  {classEntry.champions.map(c => (
                    <span key={c} style={{
                      display:"inline-flex", flexDirection:"column", alignItems:"center", gap:"5px",
                      background:`${classEntry.color}22`, border:`1px solid ${classEntry.glow}30`,
                      borderRadius:"5px", padding:"3px 7px 3px 4px", fontSize:"10px", color:"#d4c090",
                      }}>
                      <img src={champImg(c)} alt={c} title={c}
                        onError={e => e.target.style.display="none"}
                        style={{ width:"45px", height:"45px", borderRadius:"3px",
                                objectFit:"cover", flexShrink:0 }} />
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Items */}
              <div>
                <div style={{ fontSize:"9px", letterSpacing:"3px", color:classEntry.glow,
                  textTransform:"uppercase", marginBottom:"7px",
                  borderBottom:`1px solid ${classEntry.glow}28`, paddingBottom:"4px" }}>
                  Situational Items · {champ.display} · {mode==="ahead"?"Ahead":"Even / Behind"}
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                  {classItems.map((item, i) => {
                    const col    = ic(item.name);
                    const src    = itemImg(item.name);
                    const ek     = `item-${item.name}`;
                    const failed = imgErr[ek];
                    return (
                      <div key={i} style={{
                        background:"rgba(255,255,255,.04)",
                        border:`1px solid rgba(255,255,255,.08)`,
                        borderLeft:`3px solid ${col}`,
                        borderRadius:"7px", padding:"8px 11px",
                        display:"flex", gap:"10px", alignItems:"flex-start",
                      }}>
                        {/* Item icon */}
                        <div style={{
                          width:"38px", height:"38px", flexShrink:0,
                          borderRadius:"6px", overflow:"hidden",
                          border:`1.5px solid ${col}55`,
                          background:`${col}18`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          boxShadow:`0 0 8px ${col}30`,
                        }}>
                          {src && !failed
                            ? <img src={src} alt={item.name} onError={() => onErr(ek)}
                                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                            : <div style={{ width:"10px", height:"10px", borderRadius:"50%",
                                background:col, boxShadow:`0 0 6px ${col}` }} />
                          }
                        </div>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"2px" }}>
                            <span style={{ fontWeight:"bold", fontSize:"12px",
                              color:col, letterSpacing:".3px" }}>{item.name}</span>
                            <span style={{
                              fontSize:"9px", color:classEntry.glow, marginLeft:"auto", flexShrink:0,
                              background:`${classEntry.glow}14`, border:`1px solid ${classEntry.glow}28`,
                              borderRadius:"3px", padding:"1px 5px", letterSpacing:"1px",
                            }}>#{i+1}</span>
                          </div>
                          <p style={{ margin:0, fontSize:"10px", color:"#b0a080", lineHeight:1.5 }}>
                            {item.why}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!classEntry && (
        <div style={{ textAlign:"center", padding:"12px",
          color:"rgba(180,150,80,.26)", fontSize:"11px",
          fontStyle:"italic", letterSpacing:"1px" }}>
          ↑ Click any class bubble to see situational item recommendations
        </div>
      )}

      {/* ── QUICK SIDE ITEMS ── */}
      <div style={{ maxWidth:"1100px", margin:"0 auto 28px", padding:"0 14px" }}>
        <div style={{
          background:"rgba(255,255,255,.02)", border:"1px solid rgba(180,140,60,.12)",
          borderRadius:"10px", padding:"12px 16px",
        }}>
          <div style={{ fontSize:"9px", letterSpacing:"3px", color:"#b8860b",
            textTransform:"uppercase", marginBottom:"8px" }}>
            Common Situational Items — {champ.display}
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
            {champ.sideItems.map(name => {
              const col = ic(name);
              const src = itemImg(name);
              const ek  = `side-${name}`;
              return (
                <div key={name} style={{
                  display:"flex", alignItems:"center", gap:"5px",
                  background:"rgba(255,255,255,.03)",
                  border:`1px solid ${col}30`,
                  borderRadius:"5px", padding:"4px 8px",
                }}>
                  <div style={{
                    width:"20px", height:"20px", borderRadius:"3px", overflow:"hidden",
                    background:`${col}18`, border:`1px solid ${col}40`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    flexShrink:0,
                  }}>
                    {src && !imgErr[ek]
                      ? <img src={src} alt={name} onError={() => onErr(ek)}
                          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      : <div style={{ width:"6px", height:"6px", borderRadius:"50%",
                          background:col }} />
                    }
                  </div>
                  <span style={{ fontSize:"10px", color:col, whiteSpace:"nowrap" }}>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
