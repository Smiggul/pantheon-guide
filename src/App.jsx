import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE HELPERS  (local paths — put PNGs in public/images/)
// ─────────────────────────────────────────────────────────────────────────────
const IMG      = "./images";
// Converts any display name to the Data Dragon filename format.
// Examples: "Vel'Koz" → "Velkoz",  "Dr. Mundo" → "DrMundo",
//           "Nunu & Willump" → "Nunu",  "Wukong" → "MonkeyKing"
const DD_OVERRIDES = {
  "Wukong":          "MonkeyKing",
  "Nunu & Willump":  "Nunu",
  "Jarvan IV":       "JarvanIV",
  "K'Sante":         "KSante",
  "Renata Glasc":    "Renata",
  "Aurelion Sol":    "AurelionSol",
  "Bel'Veth":        "Belveth",
  "Kog'Maw":         "KogMaw",
  "Cho'Gath":        "Chogath",
  "Kha'Zix":         "Khazix",
  "Kai'Sa":          "Kaisa",
  "Rek'Sai":         "RekSai",
  "LeBlanc":         "Leblanc",
  "Lee Sin":         "LeeSin",
  "Master Yi":       "MasterYi",
  "Miss Fortune":    "MissFortune",
  "Tahm Kench":      "TahmKench",
  "Twisted Fate":    "TwistedFate",
  "Dr. Mundo":       "DrMundo",
  "Vel'Koz":         "Velkoz",
  "Xin Zhao":        "XinZhao",

};

const toDD = (name) => {
  if (DD_OVERRIDES[name]) return DD_OVERRIDES[name];
  return name
    .replace(/'([A-Z])/g, (_, c) => c.toLowerCase()) // 'K → k  (Vel'Koz → Velkoz)
    .replace(/\./g,  "")   // remove dots  (Dr. → Dr)
    .replace(/ & .*/g, "") // drop & Willump etc
    .replace(/ /g,   "")   // remove spaces
    .replace(/'/g,   "");  // any leftover apostrophes
};

const champImg = (name) => `${IMG}/champions/${toDD(name)}.png`;
const itemImg  = (name) => `${IMG}/items/${name.replace(/'/g, "").replace(/\s+/g, "_")}.png`;
const ROLE_ICON_NAMES = {
  Top:     "position-top",
  Jungle:  "position-jungle",
  Mid:     "position-middle",
  Bot:     "position-bottom",
  Support: "position-utility",
};
const roleIcon = (role) => `${IMG}/roles/${ROLE_ICON_NAMES[role] || role.toLowerCase()}.svg`;
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
  JUGGERNAUT:  { label:"Juggernaut",  color:"#c0392b", glow:"#e74c3c", desc:"High HP, high damage, low mobility. Walks you down.", champions:["Darius","Garen","Sett","Mordekaiser","Nasus","Urgot","Illaoi","Dr. Mundo","Trundle","Sion","Yorick","Olaf","Warwick","Volibear","Aatrox"] },
  DIVER:       { label:"Diver",        color:"#d35400", glow:"#e67e22", desc:"Mobile fighters who mirror your aggression. Extended fights kill you.", champions:["Irelia","Camille","Renekton","Vi","Lee Sin","Hecarim","Jarvan IV","Briar","Rek'Sai","Diana","Wukong","Xin Zhao","Sylas","Elise","Nocturne","Riven", "Pantheon"] },
  ASSASSIN:    { label:"Assassin",    color:"#7d3c98", glow:"#9b59b6", desc:"One-shot from fog of war. Their burst window is your kill window.", champions:["Zed","Akali","Talon","Katarina","Kha'Zix","Fizz","Evelynn","Kassadin","LeBlanc","Ekko","Qiyana","Rengar","Naafiri","Shaco","Pyke"] },
  SKIRMISHER:  { label:"Skirmisher",  color:"#1a6b3c", glow:"#27ae60", desc:"Win extended fights. Survive your burst and they out-duel you.", champions:["Fiora","Jax","Yasuo","Yone","Tryndamere","Gwen","Master Yi","Kayn","Kled","Viego","Nilah","Lillia"] },
  BURST_MAGE:  { label:"Burst Mage",  color:"#1a5276", glow:"#2980b9", desc:"Single large combo from range. Often CC before you can react.", champions:["Syndra","Veigar","Orianna","Lissandra","Vex","Annie","Zoe","Aurora","Neeko","Ahri","Karma","Lux"] },
  BATTLEMAGE:  { label:"Battlemage",  color:"#0e6655", glow:"#1abc9c", desc:"Sustained AP DPS at medium range, often with significant healing.", champions:["Vladimir","Ryze","Cassiopeia","Swain","Viktor","Karthus","Brand","Malzahar","Azir","Rumble","Taliyah","Aurelion Sol"] },
  ARTILLERY:   { label:"Artillery",   color:"#4a235a", glow:"#8e44ad", desc:"Long-range poke outside your engage range. Whittle you down first.", champions:["Xerath","Vel'Koz","Ziggs","Heimerdinger","Hwei","Mel","Jayce","Lux"] },
  MARKSMAN:    { label:"Marksman",    color:"#7b6d00", glow:"#f1c40f", desc:"Fragile but deal massive sustained DPS if left uncontested.", champions:["Jinx","Caitlyn","Jhin","Kai'Sa","Draven","Aphelios","Ashe","Kalista","Xayah","Lucian","Vayne","Zeri","Tristana","Samira","Miss Fortune","Ezreal","Sivir","Smolder"] },
  ENCHANTER:   { label:"Enchanter",   color:"#145a32", glow:"#2ecc71", desc:"Shields and heals negate your burst. Can knock you away mid-engage.", champions:["Janna","Lulu","Soraka","Yuumi","Nami","Sona","Milio","Karma","Taric","Renata Glasc","Seraphine"] },
  CATCHER:     { label:"Catcher",     color:"#2471a3", glow:"#3498db", desc:"CC chains remove your mobility. Hooks kill your dive pattern.", champions:["Thresh","Blitzcrank","Morgana","Nautilus","Skarner","Zac","Bard","Ivern","Zyra","Maokai","Varus","Lissandra"] },
  VANGUARD:    { label:"Vanguard",    color:"#2e4053", glow:"#5d6d7e", desc:"Engage tanks. Hard CC into team collapse.", champions:["Malphite","Leona","Nautilus","Maokai","Sejuani","Jarvan IV","Gragas","Amumu","Alistar","Ornn","Zac","Rammus","Volibear","Nunu & Willump"] },
  WARDEN:      { label:"Warden",      color:"#4d3319", glow:"#a04000", desc:"Block your damage for their carry. Shield generators and peel machines.", champions:["Braum","Shen","Tahm Kench","Poppy","Galio","K'Sante"] },
  SPECIALIST:  { label:"Specialist",  color:"#5f5f5f", glow:"#95a5a6", desc:"Wildly varied kits. Each plays by their own rules — read the matchup.", champions:["Teemo","Singed","Gangplank","Shyvana","Graves","Kayle","Kennen","Nidalee","Quinn","Twisted Fate","Udyr","Fiddlesticks","Gnar","Zilean"] },
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
    id:      "pantheon",
    display:  "Pantheon",
    dd:       "Pantheon",       // must match filename: champions/Pantheon.png
    color:    "#c0392b",
    glow:     "#e74c3c",
    lanes:    ["Top", "Mid", "Support", "Jungle"],
  
    roles:{
            Top:    {  
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

            Jungle: {  
                corePath: "Eclipse  ›  Black Cleaver  ›  Sundered Sky  ›  Spear of Shojin",
                coreNote: "Jungle Pantheon relies on early tempo and ganks. Eclipse spike enables early kills; Cleaver transitions into mid-game teamfights.",
                sideItems: ["Plated Steelcaps","Mercury's Treads","Youmuu's Ghostblade","Edge of Night","Guardian Angel","Death's Dance","Maw of Malmortius","Serpent's Fang","Serylda's Grudge","Sterak's Gage"],

                data: {
                  DIVER: {
                    ahead:  [ I("Eclipse","Win early skirmishes instantly."), I("Youmuu's Ghostblade","Faster rotations between lanes."), I("Death's Dance","Outlast mirror dive fights.") ],
                    behind: [ I("Plated Steelcaps","Reduces sustained auto damage."), I("Sterak's Gage","Gives survivability during engages."), I("Death's Dance","Keeps you alive after committing.") ],
                  },
                  ASSASSIN: {
                    ahead:  [ I("Eclipse","You win burst race easily when ahead."), I("Edge of Night","Block their engage tool."), I("Youmuu's Ghostblade","Catch them before they reset.") ],
                    behind: [ I("Maw of Malmortius","Essential vs AP assassins."), I("Sterak's Gage","Prevents one-shot after invade."), I("Death's Dance","Extends fight duration.") ],
                  },
                  VANGUARD: {
                    ahead:  [ I("Black Cleaver","Shred tanks for your team."), I("Eclipse","Still gives threat to backline."), I("Serylda's Grudge","Slow helps stick to carries after engage.") ],
                    behind: [ I("Mercury's Treads","Reduce CC chains."), I("Sterak's Gage","Survive engage burst."), I("Black Cleaver","Keep damage relevant.") ],
                  },
                  MARKSMAN: {
                    ahead:  [ I("Youmuu's Ghostblade","Reach backline instantly."), I("Eclipse","Guaranteed one-shot combo."), I("Serpent's Fang","Removes shielding supports’ protection.") ],
                    behind: [ I("Plated Steelcaps","Reduce DPS from ADC."), I("Sterak's Gage","Survive initial burst."), I("Guardian Angel","Second life for risky engages.") ],
                  },
                },
                    },

            Mid:    {  
                        corePath: "Eclipse  ›  Sundered Sky  ›  Black Cleaver  ›  Spear of Shojin",
                        coreNote: "Mid Pantheon is a counterpick into assassins. Eclipse gives kill pressure on short trades; transition into bruiser for mid-game roams and skirmishes.",
                        sideItems: ["Plated Steelcaps","Mercury's Treads","Youmuu's Ghostblade","Edge of Night","Serpent's Fang","Maw of Malmortius","Death's Dance","Serylda's Grudge","Guardian Angel","Black Cleaver"],
                        data: {
                                ASSASSIN: {
                                  ahead:  [ I("Eclipse","You out-burst them — mid lane trades are shorter and lethal."), I("Youmuu's Ghostblade","Roam pressure — convert lane lead into map wins."), I("Serylda's Grudge","Slow prevents escape after their disengage tools.") ],
                                  behind: [ I("Plated Steelcaps","Reduces auto-based assassins like Zed/Qiyana."), I("Death's Dance","Convert burst to bleed so you survive initial combo."), I("Sterak's Gage","Prevents getting one-shot after failed engage.") ],
                                },
                                BURST_MAGE: {
                                  ahead:  [ I("Youmuu's Ghostblade","Close gap before they complete spell rotation."), I("Eclipse","One combo = kill before they kite back."), I("Edge of Night","Spell shield blocks key CC like Syndra E.") ],
                                  behind: [ I("Maw of Malmortius","Critical vs AP burst — gives second life window."), I("Mercury's Treads","Shorter CC chains = more chance to E-block."), I("Banshee's Veil","Blocks engage spell so you can still all-in.") ],
                                },
                                BATTLEMAGE: {
                                  ahead:  [ I("Mortal Reminder","Grievous Wounds denies sustain (Swain/Vlad)."), I("Eclipse","Kill during short trade windows before healing ramps."), I("Black Cleaver","HP + shred vs their scaling durability.") ],
                                  behind: [ I("Maw of Malmortius","Sustain through extended AP damage."), I("Mortal Reminder","Essential vs healing-based mages."), I("Sterak's Gage","Gives second rotation window in extended fights.") ],
                                },
                                ARTILLERY: {
                                  ahead:  [ I("Youmuu's Ghostblade","Gap close instantly from fog or roam."), I("Eclipse","Delete them before they reposition."), I("Edge of Night","Block one long-range CC tool.") ],
                                  behind: [ I("Banshee's Veil","Gives safe engage window vs poke champs."), I("Mercury's Treads","Reduce CC duration so you can reach them."), I("Sterak's Gage","Survive poke before committing.") ],
                                },
                              },
                    },

            Support:{  
                          corePath: "Umbral Glaive  ›  Eclipse  ›  Black Cleaver  ›  Sundered Sky",
                          coreNote: "Support Pantheon focuses on vision denial + early kill lanes. Umbral Glaive spike is mandatory for map control; then transition into bruiser.",
                          sideItems: ["Plated Steelcaps","Mercury's Treads","Youmuu's Ghostblade","Serpent's Fang","Maw of Malmortius","Death's Dance","Knight's Vow","Zeke's Convergence","Edge of Night"],

                          data: {
                            MARKSMAN: {
                              ahead:  [ I("Eclipse","Burst ADC instantly with W engage."), I("Youmuu's Ghostblade","Close gap before they kite."), I("Serpent's Fang","Remove shielding from supports.") ],
                              behind: [ I("Plated Steelcaps","Reduce ADC auto damage."), I("Knight's Vow","Protect your carry while behind."), I("Sterak's Gage","Survive engages.") ],
                            },
                            ENCHANTER: {
                              ahead:  [ I("Serpent's Fang","⭐ CORE — destroys shields (Lulu/Janna)."), I("Eclipse","With shields removed, burst always kills."), I("Youmuu's Ghostblade","No reposition window for them.") ],
                              behind: [ I("Serpent's Fang","Still mandatory — never skip."), I("Mortal Reminder","Reduce healing when fights drag."), I("Knight's Vow","Play peel instead of engage.") ],
                            },
                            CATCHER: {
                              ahead:  [ I("Youmuu's Ghostblade","Dodge hooks and engage first."), I("Eclipse","Kill them before they reset fight."), I("Edge of Night","Block hook/CC entirely.") ],
                              behind: [ I("Banshee's Veil","Spell shield vs hook champs."), I("Mercury's Treads","Reduce CC duration."), I("Knight's Vow","Play defensive around ADC.") ],
                            },
                            VANGUARD: {
                              ahead:  [ I("Black Cleaver","Help team shred tanks."), I("Eclipse","Still threatens backline."), I("Serpent's Fang","Remove shields from tank supports.") ],
                              behind: [ I("Mercury's Treads","Reduce CC lock duration."), I("Knight's Vow","Shift to peel role."), I("Sterak's Gage","Survive engage burst.") ],
                            },
                          },
                    },

          },
  
  },
  // ══════════════════════════════════════════════════════════════════════════
  //  TEEMO — AP On-Hit Specialist
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:      "teemo",
    display:  "Teemo",
    dd:       "Teemo",
    role:     "AP On-Hit Specialist",
    color:    "#27ae60",
    glow:     "#2ecc71",
    lanes:    ["Top", "Mid", "Support", "Jungle"],

    roles:{
      Top:{  
        corePath: "Liandry's Torment  ›  Nashor's Tooth  ›  Malignance  ›  Rylai's Crystal Scepter",
        coreNote: "Teemo top plays for lane dominance and zone control. Liandry's burns tanks, Nashor's enables DPS, Malignance amplifies mushroom map control.",
        sideItems: ["Sorcerer's Shoes","Plated Steelcaps","Mercury's Treads","Morellonomicon","Shadowflame","Void Staff","Zhonya's Hourglass","Banshee's Veil","Demonic Embrace","Cosmic Drive"],

        data: {
          JUGGERNAUT: {
            ahead:  [ I("Liandry's Torment","Burn scales off their HP stacking — perfect into juggernauts."), I("Rylai's Crystal Scepter","Perma-slow prevents them ever reaching you."), I("Nashor's Tooth","Sustained DPS while kiting wins every extended trade.") ],
            behind: [ I("Plated Steelcaps","Reduces auto damage from champs like Darius/Sett."), I("Zhonya's Hourglass","Stall their all-in window and survive burst."), I("Rylai's Crystal Scepter","Utility slow keeps them off you even when weak.") ],
          },
          DIVER: {
            ahead:  [ I("Nashor's Tooth","Higher DPS to punish failed engages."), I("Rylai's Crystal Scepter","Slows their engage follow-up completely."), I("Liandry's Torment","Burn continues even after they disengage.") ],
            behind: [ I("Zhonya's Hourglass","Negates their dive combo timing."), I("Plated Steelcaps","Reduces sustained damage during all-in."), I("Banshee's Veil","Blocks engage abilities like Camille hook.") ],
          },
          SKIRMISHER: {
            ahead:  [ I("Nashor's Tooth","You out-DPS them if they can't stick."), I("Rylai's Crystal Scepter","Stops Yasuo/Yone from chasing."), I("Liandry's Torment","Burn punishes their mid-fight sustain.") ],
            behind: [ I("Plated Steelcaps","Critical vs auto-heavy duelists."), I("Zhonya's Hourglass","Buy time vs burst windows."), I("Morellonomicon","Cut healing from lifesteal champs.") ],
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts high-HP tanks."), I("Void Staff","Penetrates early MR stacking."), I("Rylai's Crystal Scepter","Keeps tanks permanently slowed.") ],
            behind: [ I("Void Staff","Required to deal damage vs MR stack."), I("Zhonya's Hourglass","Survive engage combos."), I("Rylai's Crystal Scepter","Utility even when behind.") ],
          },
          SPECIALIST: {
            ahead:  [ I("Malignance","Mushroom spam controls side lanes."), I("Liandry's Torment","Synergy with poison + traps."), I("Shadowflame","Extra burst vs squishy specialists.") ],
            behind: [ I("Morellonomicon","Anti-heal vs sustain champs."), I("Banshee's Veil","Block key abilities (Teemo blind mirror, Kennen stun)."), I("Zhonya's Hourglass","Survive burst setups.") ],
          },
        },
      },

      Jungle:{  
        corePath: "Malignance  ›  Liandry's Torment  ›  Nashor's Tooth  ›  Rylai's Crystal Scepter",
        coreNote: "Teemo jungle plays for fast clears and map control. Malignance enables constant mushroom pressure on objectives; Liandry's amplifies burn for camps and fights.",
        sideItems: ["Sorcerer's Shoes","Ionian Boots of Lucidity","Morellonomicon","Void Staff","Zhonya's Hourglass","Banshee's Veil","Shadowflame","Demonic Embrace","Cosmic Drive"],

        data: {
          DIVER: {
            ahead:  [ I("Liandry's Torment","Burn punishes their HP stacking during engages."), I("Rylai's Crystal Scepter","Slows completely disrupt their dive pathing."), I("Nashor's Tooth","DPS wins extended skirmishes.") ],
            behind: [ I("Zhonya's Hourglass","Negates their all-in timing."), I("Rylai's Crystal Scepter","Utility slow helps team peel."), I("Morellonomicon","Cuts their sustain in fights.") ],
          },
          ASSASSIN: {
            ahead:  [ I("Nashor's Tooth","Punish melee range with constant DPS."), I("Malignance","Trap jungle paths — denies their mobility."), I("Shadowflame","Burst squishy targets before they escape.") ],
            behind: [ I("Zhonya's Hourglass","Essential vs burst junglers."), I("Banshee's Veil","Blocks engage tools."), I("Rylai's Crystal Scepter","Peel yourself with slows.") ],
          },
          SKIRMISHER: {
            ahead:  [ I("Nashor's Tooth","Out-DPS in extended fights."), I("Liandry's Torment","Burn punishes their sustain."), I("Rylai's Crystal Scepter","Prevents them sticking to you.") ],
            behind: [ I("Morellonomicon","Reduce healing from lifesteal champs."), I("Zhonya's Hourglass","Buy time vs dueling champs."), I("Rylai's Crystal Scepter","Utility remains strong.") ],
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts tank junglers."), I("Void Staff","Penetrates MR stacking."), I("Malignance","Objective control with traps.") ],
            behind: [ I("Void Staff","Required vs MR stack."), I("Zhonya's Hourglass","Survive engage."), I("Rylai's Crystal Scepter","Teamfight utility.") ],
          },
          MARKSMAN: {
            ahead:  [ I("Shadowflame","Extra burst vs squishy backline."), I("Rylai's Crystal Scepter","Slow prevents escape."), I("Liandry's Torment","Burn finishes targets after disengage.") ],
            behind: [ I("Zhonya's Hourglass","Avoid burst from ADC focus."), I("Rylai's Crystal Scepter","Peel and kite."), I("Banshee's Veil","Block engage CC.") ],
          },
          ENCHANTER: {
            ahead:  [ I("Morellonomicon","⭐ Mandatory vs healing/shielding."), I("Liandry's Torment","Burn counters sustain comps."), I("Malignance","Zone objectives with traps.") ],
            behind: [ I("Morellonomicon","Still required anti-heal."), I("Zhonya's Hourglass","Survive buffed carries."), I("Rylai's Crystal Scepter","Utility slows for team.") ],
          },
          CATCHER: {
            ahead:  [ I("Rylai's Crystal Scepter","Punish missed engages."), I("Malignance","Control jungle choke points."), I("Liandry's Torment","Burn during extended fights.") ],
            behind: [ I("Banshee's Veil","Block hooks/pick tools."), I("Zhonya's Hourglass","Survive catches."), I("Ionian Boots of Lucidity","More traps, more control.") ],
          },
        },
      },

      Mid:{
        corePath: "Nashor's Tooth  ›  Liandry's Torment  ›  Malignance  ›  Rylai's Crystal Scepter",

        coreNote: "Mid Teemo plays for lane dominance and anti-melee control. Nashor's enables constant poke and wave pressure; Liandry's amplifies sustained burn; Malignance transitions into map control through mushrooms once lane priority is secured.",

        sideItems: [
          "Sorcerer's Shoes","Mercury's Treads","Plated Steelcaps",
          "Zhonya's Hourglass","Banshee's Veil","Shadowflame",
          "Void Staff","Morellonomicon","Cosmic Drive"
        ],

        data: {

          ASSASSIN: {
            ahead: [
              I("Nashor's Tooth","Constant DPS punishes melee attempts to farm."),
              I("Liandry's Torment","Burn continues after short trades — they can't re-engage safely."),
              I("Rylai's Crystal Scepter","Slow completely disrupts dash-in/out patterns.")
            ],
            behind: [
              I("Zhonya's Hourglass","Essential vs burst all-in (Zed, Talon, Katarina)."),
              I("Plated Steelcaps","Reduces AD assassin auto damage during trades."),
              I("Rylai's Crystal Scepter","Utility slow lets you kite instead of dying instantly.")
            ],
          },

          SKIRMISHER: {
            ahead: [
              I("Nashor's Tooth","Win extended trades through superior DPS."),
              I("Liandry's Torment","Burn punishes sustain fighters over time."),
              I("Rylai's Crystal Scepter","Prevents them sticking to you in duels.")
            ],
            behind: [
              I("Zhonya's Hourglass","Buy time vs all-in duelists."),
              I("Morellonomicon","Reduce healing (Yasuo, Yone lifesteal builds)."),
              I("Rylai's Crystal Scepter","Kiting becomes your primary survival tool.")
            ],
          },

          BURST_MAGE: {
            ahead: [
              I("Nashor's Tooth","Out-trade between cooldown windows."),
              I("Shadowflame","Amplifies burst against low MR targets."),
              I("Liandry's Torment","Punishes them when abilities are down.")
            ],
            behind: [
              I("Banshee's Veil","Blocks key CC (Syndra E, Ahri charm)."),
              I("Mercury's Treads","Reduce CC duration to survive combos."),
              I("Zhonya's Hourglass","Second life vs full spell rotations.")
            ],
          },

          BATTLEMAGE: {
            ahead: [
              I("Liandry's Torment","Burn outscales their sustain in extended fights."),
              I("Morellonomicon","Cuts healing (Vladimir, Swain)."),
              I("Nashor's Tooth","Sustained DPS keeps pressure constant.")
            ],
            behind: [
              I("Morellonomicon","Mandatory vs sustain-heavy kits."),
              I("Banshee's Veil","Prevents getting locked in extended fights."),
              I("Rylai's Crystal Scepter","Control spacing instead of trading.")
            ],
          },

          ARTILLERY: {
            ahead: [
              I("Rylai's Crystal Scepter","Landing one Q → they cannot escape follow-up."),
              I("Nashor's Tooth","Punish when they misposition."),
              I("Malignance","Control choke points — deny safe positioning.")
            ],
            behind: [
              I("Banshee's Veil","Blocks key poke/CC ability."),
              I("Mercury's Treads","Reduce CC duration from long-range abilities."),
              I("Malignance","Play for map control instead of lane dominance.")
            ],
          },

          MARKSMAN: {
            ahead: [
              I("Nashor's Tooth","Blind + autos completely shuts them down."),
              I("Liandry's Torment","Burn punishes their low HP pool."),
              I("Rylai's Crystal Scepter","They cannot kite with permanent slow.")
            ],
            behind: [
              I("Plated Steelcaps","Flat auto reduction vs ADC damage."),
              I("Zhonya's Hourglass","Avoid being burst in fights."),
              I("Rylai's Crystal Scepter","Peel yourself and your team.")
            ],
          },

          ENCHANTER: {
            ahead: [
              I("Morellonomicon","⭐ Mandatory — cuts healing and shielding value."),
              I("Liandry's Torment","Burn negates sustain comps."),
              I("Malignance","Zone fights with mushrooms — deny positioning.")
            ],
            behind: [
              I("Morellonomicon","Still mandatory — never skip vs sustain."),
              I("Banshee's Veil","Block CC that enables buffed carries."),
              I("Rylai's Crystal Scepter","Utility over damage when behind.")
            ],
          },

          CATCHER: {
            ahead: [
              I("Rylai's Crystal Scepter","Punish missed hooks instantly."),
              I("Nashor's Tooth","DPS when they fail engage."),
              I("Malignance","Trap choke points to deny picks.")
            ],
            behind: [
              I("Banshee's Veil","Blocks hook/pick abilities."),
              I("Zhonya's Hourglass","Survive if caught."),
              I("Rylai's Crystal Scepter","Kite after disengage.")
            ],
          },

          VANGUARD: {
            ahead: [
              I("Liandry's Torment","Melts HP-stacking tanks."),
              I("Void Staff","Penetrates MR stacking."),
              I("Malignance","Objective control through traps.")
            ],
            behind: [
              I("Void Staff","Required vs MR stack."),
              I("Zhonya's Hourglass","Survive engage."),
              I("Rylai's Crystal Scepter","Teamfight utility.")
            ],
          },

        },
      },

            Support:{  
        corePath: "Malignance  ›  Liandry's Torment  ›  Rylai's Crystal Scepter  ›  Morellonomicon",
        coreNote: "Support Teemo plays for vision denial and choke control. Mushrooms replace wards as zone tools.",
        sideItems: ["Sorcerer's Shoes","Ionian Boots of Lucidity","Morellonomicon","Zhonya's Hourglass","Banshee's Veil","Void Staff","Demonic Embrace","Shadowflame"],

        data: {
          MARKSMAN: {
            ahead:  [ I("Liandry's Torment","Constant burn poke forces recalls."), I("Rylai's Crystal Scepter","Slow prevents escape after poke."), I("Shadowflame","Extra damage vs squishy ADCs.") ],
            behind: [ I("Zhonya's Hourglass","Survive all-ins."), I("Morellonomicon","Reduce lifesteal sustain."), I("Rylai's Crystal Scepter","Utility slow still valuable.") ],
          },
          ENCHANTER: {
            ahead:  [ I("Morellonomicon","Mandatory vs healing/shielding."), I("Liandry's Torment","Burn counters sustain."), I("Malignance","Zone their positioning.") ],
            behind: [ I("Morellonomicon","Still required anti-heal."), I("Zhonya's Hourglass","Survive polymorph setups."), I("Banshee's Veil","Block engage CC.") ],
          },
          CATCHER: {
            ahead:  [ I("Rylai's Crystal Scepter","Punish missed hooks with slows."), I("Liandry's Torment","Burn during extended trades."), I("Malignance","Control choke points.") ],
            behind: [ I("Banshee's Veil","Block hooks."), I("Zhonya's Hourglass","Survive engages."), I("Ionian Boots of Lucidity","Lower cooldowns for more traps.") ],
          },
          VANGUARD: {
            ahead:  [ I("Liandry's Torment","Melts tank supports."), I("Morellonomicon","Reduce healing."), I("Rylai's Crystal Scepter","Kite engages easily.") ],
            behind: [ I("Zhonya's Hourglass","Avoid engage burst."), I("Morellonomicon","Still needed vs sustain."), I("Banshee's Veil","Block engage abilities.") ],
          },
        },
      },

    },
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
    id:      "renekton",
    display:  "Renekton",
    dd:       "Renekton",       // champions/Renekton.png
    role:     "Diver / Bruiser",
    color:    "#e67e22",
    glow:     "#f39c12",
    lanes:    ["Top"],

    roles:{
          Top:{
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

    },
  },
  // ══════════════════════════════════════════════════════════════════════════
  //  AURELION SOL — Battlemage / Scaling
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "aurelionsol",
    display: "Aurelion Sol",
    dd: "AurelionSol",
    color: "#5dade2",
    glow: "#85c1e9",
    lanes: ["Mid"],

    roles: {
      Mid: {
        corePath: "Rod of Ages  ›  Rylai's Crystal Scepter  ›  Liandry's Torment  ›  Rabadon's Deathcap",
        coreNote: "Stack scaling safely. Rod gives survivability + mana; Rylai's enables perma-slow on Q/E; Liandry's amplifies burn in extended fights.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Void Staff","Zhonya's Hourglass","Banshee's Veil","Shadowflame","Cosmic Drive"],

        data: {
          ASSASSIN: {
            ahead: [
              I("Rylai's Crystal Scepter","Perma-slow denies re-engage from Zed/Katarina."),
              I("Liandry's Torment","Burn punishes their short trades."),
              I("Rabadon's Deathcap","Scaling spike closes game faster.")
            ],
            behind: [
              I("Zhonya's Hourglass","Hard counter to burst windows."),
              I("Rod of Ages","HP + sustain to survive lane phase."),
              I("Banshee's Veil","Blocks key engage abilities.")
            ],
          },

          BURST_MAGE: {
            ahead: [
              I("Rylai's Crystal Scepter","Keeps them inside your damage zones."),
              I("Liandry's Torment","Out-DPS them in extended fights."),
              I("Void Staff","Penetrate early MR stacking.")
            ],
            behind: [
              I("Banshee's Veil","Prevents getting one-shot by opener."),
              I("Mercury's Treads","Shorter CC = more reposition time."),
              I("Zhonya's Hourglass","Second life in teamfights.")
            ],
          },

          ARTILLERY: {
            ahead: [
              I("Rylai's Crystal Scepter","Catch them once → they die."),
              I("Cosmic Drive","Mobility to dodge skillshots."),
              I("Liandry's Torment","Burn while they try to disengage.")
            ],
            behind: [
              I("Banshee's Veil","Blocks key poke ability."),
              I("Mercury's Treads","Reduce CC duration."),
              I("Rod of Ages","Sustain through poke.")
            ],
          },
        },
      },
    },
  },
  // ══════════════════════════════════════════════════════════════════════════
  //  KATARINA — Assassin / Reset
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "katarina",
    display: "Katarina",
    dd: "Katarina",
    color: "#c0392b",
    glow: "#ff6b6b",
    lanes: ["Mid"],

    roles: {
      Mid: {
        corePath: "Nashor's Tooth  ›  Riftmaker  ›  Zhonya's Hourglass  ›  Rabadon's Deathcap",
        coreNote: "Hybrid sustained burst. Nashor enables on-hit resets; Riftmaker gives extended fight power; Zhonya's enables aggressive dives.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Shadowflame","Void Staff","Banshee's Veil","Hextech Rocketbelt"],

        data: {
          BURST_MAGE: {
            ahead: [
              I("Hextech Rocketbelt","Gap-close to force fights."),
              I("Shadowflame","Amplify burst vs low MR targets."),
              I("Rabadon's Deathcap","End fights instantly.")
            ],
            behind: [
              I("Zhonya's Hourglass","Reset cooldowns safely."),
              I("Mercury's Treads","Reduce CC lock."),
              I("Banshee's Veil","Block key CC ability.")
            ],
          },

          ASSASSIN: {
            ahead: [
              I("Nashor's Tooth","Win extended duels."),
              I("Riftmaker","Out-sustain other assassins."),
              I("Shadowflame","Push burst advantage.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive first burst."),
              I("Plated Steelcaps","Reduce AD assassin damage."),
              I("Riftmaker","Stay relevant in longer fights.")
            ],
          },

          MARKSMAN: {
            ahead: [
              I("Hextech Rocketbelt","Reach backline instantly."),
              I("Shadowflame","Delete squishies instantly."),
              I("Rabadon's Deathcap","Guarantee resets.")
            ],
            behind: [
              I("Zhonya's Hourglass","Buy time in teamfights."),
              I("Riftmaker","Sustain through fights."),
              I("Banshee's Veil","Avoid being locked down.")
            ],
          },
        },
      },
    },
  },
  // ══════════════════════════════════════════════════════════════════════════
  //  XERATH — Artillery / Poke
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "xerath",
    display: "Xerath",
    dd: "Xerath",
    color: "#3498db",
    glow: "#5dade2",
    lanes: ["Mid", "Support"],

    roles: {
      Mid: {
        corePath: "Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap  ›  Void Staff",
        coreNote: "Maximize long-range burst. Luden's + Shadowflame spike lets you chunk before fights even start.",

        sideItems: ["Sorcerer's Shoes","Mercury's Treads","Zhonya's Hourglass","Banshee's Veil","Horizon Focus","Cosmic Drive"],

        data: {
          ASSASSIN: {
            ahead: [
              I("Shadowflame","Punish low MR targets."),
              I("Rabadon's Deathcap","End fights before they reach you."),
              I("Horizon Focus","Amplify long-range poke.")
            ],
            behind: [
              I("Zhonya's Hourglass","Essential vs dive."),
              I("Banshee's Veil","Block engage."),
              I("Mercury's Treads","Reduce CC chain.")
            ],
          },

          ARTILLERY: {
            ahead: [
              I("Horizon Focus","Max poke amplification."),
              I("Shadowflame","Out-damage opposing poke."),
              I("Rabadon's Deathcap","Hard scaling spike.")
            ],
            behind: [
              I("Banshee's Veil","Block key poke."),
              I("Cosmic Drive","Mobility to dodge skillshots."),
              I("Void Staff","Deal damage through MR.")
            ],
          },

          MARKSMAN: {
            ahead: [
              I("Shadowflame","Burst ADCs easily."),
              I("Rabadon's Deathcap","Delete them from range."),
              I("Horizon Focus","Amplify ult damage.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive dives."),
              I("Banshee's Veil","Prevent engage."),
              I("Void Staff","Keep damage relevant.")
            ],
          },
        },
      },

      Support: {
        corePath: "Zaz'Zak's Realmspike  ›  Luden's Echo  ›  Shadowflame  ›  Rabadon's Deathcap",
        coreNote: "Support Xerath plays for lane dominance and poke. Realmspike + Q spam creates constant pressure.",

        sideItems: ["Sorcerer's Shoes","Horizon Focus","Zhonya's Hourglass","Banshee's Veil","Void Staff"],

        data: {
          MARKSMAN: {
            ahead: [
              I("Luden's Echo","Burst lane constantly."),
              I("Shadowflame","Punish low MR ADC."),
              I("Horizon Focus","Amplify poke.")
            ],
            behind: [
              I("Zhonya's Hourglass","Survive engages."),
              I("Banshee's Veil","Block engage support."),
              I("Void Staff","Stay relevant.")
            ],
          },

          ENCHANTER: {
            ahead: [
              I("Shadowflame","Punish shielded targets."),
              I("Luden's Echo","Burst through heals."),
              I("Horizon Focus","Long-range pressure.")
            ],
            behind: [
              I("Oblivion Orb","Apply GW vs healing."),
              I("Banshee's Veil","Block CC."),
              I("Zhonya's Hourglass","Survive collapse.")
            ],
          },
        },
      },
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  SION — Scaling Tank / Splitpush Specialist
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:      "sion",
    display: "Sion",
    dd:      "Sion",
    role:    "Scaling Tank / Splitpush Specialist",
    color:   "#7f8c8d",
    glow:    "#95a5a6",
    lanes:   ["Top","Mid","Support","Jungle"],

    roles:{
      Top:{
        corePath: "Heartsteel  ›  Sunfire Aegis  ›  Titanic Hydra  ›  Thornmail",
        coreNote: "Sion top is a scaling HP stacker and wave controller. Heartsteel stacking defines your mid-game; Sunfire + Titanic converts HP into damage while maintaining frontline presence.",

        sideItems: [
          "Plated Steelcaps","Mercury's Treads",
          "Frozen Heart","Randuin's Omen","Force of Nature",
          "Jak'Sho, The Protean","Hullbreaker","Sterak's Gage"
        ],

        data: {

          JUGGERNAUT: {
            ahead: [
              I("Heartsteel","Outscale through infinite HP stacking — they cannot match late."),
              I("Titanic Hydra","HP → AD conversion lets you win extended trades."),
              I("Hullbreaker","Side lane pressure — force them into losing map states.")
            ],
            behind: [
              I("Bramble Vest","Cuts their sustain early (Darius, Aatrox)."),
              I("Sunfire Aegis","Waveclear safely under tower."),
              I("Frozen Heart","Reduces their DPS in extended fights.")
            ],
          },

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Constant burn during their engage window."),
              I("Heartsteel","Stack HP while they commit into you."),
              I("Titanic Hydra","Punish failed dives with sustained damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduces burst from AD divers."),
              I("Frozen Heart","Attack speed slow cripples dive follow-up."),
              I("Thornmail","Punish healing during engages.")
            ],
          },

          SKIRMISHER: {
            ahead: [
              I("Titanic Hydra","Win extended trades via HP scaling damage."),
              I("Heartsteel","They cannot burst through stacked HP."),
              I("Randuin's Omen","Critical vs Yasuo/Yone — deny crit scaling.")
            ],
            behind: [
              I("Frozen Heart","–20% attack speed shuts down duelists."),
              I("Plated Steelcaps","Flat reduction vs auto-heavy champs."),
              I("Sunfire Aegis","Waveclear without contesting fights.")
            ],
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tank vs tank."),
              I("Titanic Hydra","You deal more damage in extended fights."),
              I("Hullbreaker","Force side lane where they cannot match push.")
            ],
            behind: [
              I("Sunfire Aegis","Match waveclear safely."),
              I("Force of Nature","Reduce magic-heavy tank damage."),
              I("Jak'Sho, The Protean","Scale into teamfight durability.")
            ],
          },

          MARKSMAN: {
            ahead: [
              I("Heartsteel","Stack HP safely — they cannot punish early."),
              I("Randuin's Omen","Cripples crit-based ADCs."),
              I("Hullbreaker","Splitpush — avoid teamfight kiting.")
            ],
            behind: [
              I("Randuin's Omen","Essential vs crit DPS."),
              I("Frozen Heart","Attack speed slow reduces DPS massively."),
              I("Thornmail","Punish lifesteal builds.")
            ],
          },

          SPECIALIST: {
            ahead: [
              I("Hullbreaker","Abuse side lane vs unconventional champs."),
              I("Heartsteel","Scale freely when they can't contest."),
              I("Titanic Hydra","Waveclear + tower pressure.")
            ],
            behind: [
              I("Sunfire Aegis","Maintain wave control."),
              I("Force of Nature","Counter AP specialists."),
              I("Thornmail","Reduce sustain patterns.")
            ],
          },
        },
      },

      Mid:{
        corePath: "Heartsteel  ›  Sunfire Aegis  ›  Titanic Hydra  ›  Force of Nature",
        coreNote: "Mid Sion is a wave-control disruptor. You don't win lane — you neutralize it, then impact side lanes with R and shove priority.",

        sideItems: [
          "Mercury's Treads","Plated Steelcaps",
          "Frozen Heart","Randuin's Omen",
          "Abyssal Mask","Jak'Sho, The Protean"
        ],

        data: {

          BURST_MAGE: {
            ahead: [
              I("Mercury's Treads","Reduce CC chains — enables aggression."),
              I("Heartsteel","Stack HP while they lack kill pressure."),
              I("Force of Nature","Completely nullifies their damage over time.")
            ],
            behind: [
              I("Force of Nature","Primary anti-AP spike."),
              I("Mercury's Treads","Shorter CC duration."),
              I("Sunfire Aegis","Waveclear safely under pressure.")
            ],
          },

          ASSASSIN: {
            ahead: [
              I("Plated Steelcaps","Negates AD burst patterns."),
              I("Heartsteel","They cannot one-shot through stacked HP."),
              I("Titanic Hydra","Punish after failed burst.")
            ],
            behind: [
              I("Frozen Heart","Reduces follow-up DPS."),
              I("Plated Steelcaps","Survive lane phase."),
              I("Sunfire Aegis","Waveclear safely.")
            ],
          },

          ARTILLERY: {
            ahead: [
              I("Force of Nature","Shrug off poke."),
              I("Heartsteel","Scale freely under pressure."),
              I("Hullbreaker","Force side lane away from poke.")
            ],
            behind: [
              I("Force of Nature","Mandatory vs poke."),
              I("Mercury's Treads","Reduce CC from long range."),
              I("Sunfire Aegis","Waveclear without interaction.")
            ],
          },
        },
      },

      Jungle:{
        corePath: "Sunfire Aegis  ›  Heartsteel  ›  Titanic Hydra  ›  Thornmail",
        coreNote: "Sion jungle plays for scaling and objective control. Clear speed is stable, but your value comes from mid-game frontline and engage.",

        sideItems: [
          "Plated Steelcaps","Mercury's Treads",
          "Frozen Heart","Randuin's Omen",
          "Force of Nature","Jak'Sho, The Protean"
        ],

        data: {

          DIVER: {
            ahead: [
              I("Sunfire Aegis","Win skirmishes through burn damage."),
              I("Heartsteel","Stack HP during fights."),
              I("Titanic Hydra","Convert HP into damage.")
            ],
            behind: [
              I("Plated Steelcaps","Reduce incoming burst."),
              I("Frozen Heart","Cripples dive follow-up."),
              I("Thornmail","Punish healing.")
            ],
          },

          ASSASSIN: {
            ahead: [
              I("Heartsteel","Outscale burst champs."),
              I("Sunfire Aegis","Punish close fights."),
              I("Titanic Hydra","Win extended skirmishes.")
            ],
            behind: [
              I("Plated Steelcaps","Reduce burst."),
              I("Frozen Heart","Lower DPS window."),
              I("Randuin's Omen","Extra survivability.")
            ],
          },

          VANGUARD: {
            ahead: [
              I("Heartsteel","Outscale tanks."),
              I("Titanic Hydra","Better damage output."),
              I("Sunfire Aegis","Objective control.")
            ],
            behind: [
              I("Jak'Sho, The Protean","Scaling durability."),
              I("Force of Nature","Anti-AP tank option."),
              I("Thornmail","Reduce healing.")
            ],
          },

          MARKSMAN: {
            ahead: [
              I("Randuin's Omen","Cripple ADC damage."),
              I("Heartsteel","Stack freely."),
              I("Titanic Hydra","Punish positioning.")
            ],
            behind: [
              I("Randuin's Omen","Mandatory vs crit."),
              I("Frozen Heart","Reduce DPS."),
              I("Plated Steelcaps","Survive fights.")
            ],
          },
        },
      },

      Support:{
        corePath: "Locket of the Iron Solari  ›  Thornmail  ›  Frozen Heart  ›  Force of Nature",
        coreNote: "Support Sion is engage + disruption. You trade lane dominance for teamfight initiation and soak.",

        sideItems: [
          "Mercury's Treads","Plated Steelcaps",
          "Knight's Vow","Zeke's Convergence",
          "Abyssal Mask","Randuin's Omen"
        ],

        data: {

          MARKSMAN: {
            ahead: [
              I("Locket of the Iron Solari","Protect your ADC in trades."),
              I("Thornmail","Punish sustain."),
              I("Frozen Heart","Reduce their DPS.")
            ],
            behind: [
              I("Locket of the Iron Solari","Teamfight shielding."),
              I("Knight's Vow","Protect carry."),
              I("Frozen Heart","Reduce damage output.")
            ],
          },

          ENCHANTER: {
            ahead: [
              I("Thornmail","Reduce healing/shield comps."),
              I("Locket of the Iron Solari","Mitigate poke."),
              I("Force of Nature","Reduce AP poke.")
            ],
            behind: [
              I("Locket of the Iron Solari","Core defensive value."),
              I("Knight's Vow","Play peel."),
              I("Force of Nature","Anti-AP sustain.")
            ],
          },

          CATCHER: {
            ahead: [
              I("Locket of the Iron Solari","Negate pick attempts."),
              I("Frozen Heart","Reduce follow-up damage."),
              I("Thornmail","Punish engage.")
            ],
            behind: [
              I("Locket of the Iron Solari","Survive picks."),
              I("Mercury's Treads","Reduce CC."),
              I("Knight's Vow","Peel instead of engage.")
            ],
          },
        },
      },

    },
  }, 

];

// Ensure lanes always reflects reality for role-based champions.
// This means you only need to update `roles` — lanes stays in sync automatically.
CHAMPS.forEach(c => {
  if (c.roles) {
    c.lanes = Object.keys(c.roles);
  }
});


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
  const [activeRole,   setActiveRole]   = useState(null); 
  const [openClass,    setOpenClass]    = useState(null);
  const [mode,         setMode]         = useState("behind");
  const [imgErr,       setImgErr]       = useState({});
  const [showCore,     setShowCore]     = useState(false);
  // Lane selector state: null = show lane buttons, string = show champs for that lane
  const [showPicker,      setShowPicker]      = useState(false);
  const [champSearch,     setChampSearch]     = useState("");
  const [champRoleFilter, setChampRoleFilter] = useState("All");
  // Resolve which role/lane is currently active for this champion
  const currentRole = (activeRole && champ.roles?.[activeRole])
    ? activeRole
    : champ.lanes?.[0];

  // If the champion has a roles object (Pantheon), read from that.
  // Otherwise (Teemo, Renekton) fall back to the champion object itself.
  const activeChampRole = champ.roles
    ? (champ.roles[currentRole] || champ.roles[champ.lanes[0]])
    : champ;

  const onErr   = (k) => setImgErr(p => ({ ...p, [k]: true }));
  const imgFail = (k) => imgErr[k];

  
  const pickChamp = (c) => {
    setChamp(c);
    setActiveRole(c.roles ? Object.keys(c.roles)[0] : null);
    setOpenClass(null);
    setShowCore(false);
    setShowPicker(false);       // close the floating picker
    setChampSearch("");         // reset search
    setChampRoleFilter("All");  // reset filter
  };

  const classEntry = openClass ? CLASSES[openClass] : null;
  // Filter out the currently selected champion from the opponent list
  const classItems = openClass
  ? (activeChampRole.data?.[openClass]?.[mode]
     || champ.data?.[openClass]?.[mode]
     || [])
  : [];
  const classChamps = classEntry
    ? classEntry.champions.filter(c => c !== champ.display)
    : [];

  const coreArrow = activeChampRole.corePath.split("›").map(s => s.trim());

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
      position:"relative",
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
          Aspectum Martis · Patch 16.9
        </div>
        <h1 style={{
          fontSize:"clamp(18px,3.5vw,30px)", fontWeight:"bold",
          color:S.gold, margin:"0 0 6px",
          textShadow:"0 0 40px rgba(240,208,96,.45)", letterSpacing:"2px",
        }}>
          {champ.display} — Situational Itemization
        </h1>
      <p style={{ margin:0, fontSize:"12px", color:champ.glow, letterSpacing:"1px" }}>
        {activeChampRole.role}
        {champ.roles && (
         <span style={{ color:"rgba(255,255,255,.3)", margin:"0 8px" }}>·</span>
      )}
      {champ.roles && (
         <span style={{ fontSize:"11px", color:"rgba(255,255,255,.4)" }}>{currentRole}</span>
      )}
      </p>
      </div>

      {/* ── CHAMPION SELECTOR BAR ── */}
      <div style={{
        background:"rgba(0,0,0,.45)",
        borderBottom:`1px solid rgba(180,120,20,.14)`,
        padding:"12px 24px",
      }}>
        <div style={{
          maxWidth:"1400px", margin:"0 auto",
          display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap",
        }}>

          <span style={{ fontSize:"10px", letterSpacing:"3px", color:S.goldDim,
            textTransform:"uppercase", flexShrink:0 }}>Playing as</span>

          {/* Active portrait — clicking opens the picker */}
          <div
            onClick={() => setShowPicker(true)}
            title="Click to change champion"
            style={{
              width:"56px", height:"56px", borderRadius:"9px", overflow:"hidden",
              border:`2.5px solid ${champ.glow}`,
              boxShadow:`0 0 18px ${champ.glow}60`, background:"#111",
              flexShrink:0, cursor:"pointer", position:"relative",
              transition:"all .18s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 0 26px ${champ.glow}90`;
              e.currentTarget.style.filter = "brightness(1.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 0 18px ${champ.glow}60`;
              e.currentTarget.style.filter = "none";
            }}
          >
            {!imgFail(`me-${champ.dd}`)
              ? <img src={champImg(champ.dd)} alt={champ.display}
                  onError={() => onErr(`me-${champ.dd}`)}
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              : <div style={{ width:"100%", height:"100%", display:"flex",
                  alignItems:"center", justifyContent:"center",
                  fontSize:"20px", color:champ.glow }}>{champ.display[0]}</div>
            }
            {/* Small swap hint icon */}
            <div style={{
              position:"absolute", bottom:2, right:2,
              background:"rgba(0,0,0,.7)", borderRadius:"3px",
              padding:"1px 3px", fontSize:"9px", lineHeight:1,
            }}>⇄</div>
          </div>

          {/* Name + role icons */}
          <div>
            <div style={{ fontSize:"16px", fontWeight:"bold", color:champ.glow, marginBottom:"6px" }}>
              {champ.display}
            </div>
            {champ.roles ? (
              <div style={{ display:"flex", gap:"6px" }}>
                {Object.keys(champ.roles).map(roleKey => {
                  const isActive = currentRole === roleKey;
                  const ek = `role-${roleKey}`;
                  return (
                    <div key={roleKey} onClick={() => setActiveRole(roleKey)} title={roleKey}
                      style={{
                        width:"30px", height:"30px", borderRadius:"6px", overflow:"hidden",
                        cursor:"pointer",
                        border: isActive ? `2px solid ${champ.glow}` : "1px solid rgba(255,255,255,.15)",
                        background: isActive ? `${champ.color}30` : "#111",
                        boxShadow: isActive ? `0 0 10px ${champ.glow}60` : "none",
                        opacity: isActive ? 1 : 0.4,
                        transition:"all .15s",
                        display:"flex", alignItems:"center", justifyContent:"center",
                      }}>
                      {!imgFail(ek)
                        ? <img src={roleIcon(roleKey)} alt={roleKey} onError={() => onErr(ek)}
                            style={{ width:"20px", height:"20px", objectFit:"contain",
                              filter: isActive ? "brightness(1)" : "grayscale(80%) brightness(0.5)" }} />
                        : <span style={{ fontSize:"9px", fontWeight:"bold",
                            color: isActive ? champ.glow : "#555" }}>{roleKey[0]}</span>
                      }
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ fontSize:"11px", color:S.textDim }}>{champ.lanes.join(" · ")}</div>
            )}
          </div>

        </div>
      </div>

      {/* ── FLOATING CHAMPION PICKER MODAL ── */}
      {showPicker && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowPicker(false)}
            style={{
              position:"fixed", inset:0, zIndex:999,
              background:"rgba(0,0,0,.72)",
              backdropFilter:"blur(4px)",
            }}
          />

          {/* Modal */}
          <div style={{
            position:"fixed", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            zIndex:1000,
            width:"min(680px, 92vw)",
            maxHeight:"78vh",
            background:"rgba(6,12,28,.98)",
            border:`1px solid rgba(180,120,20,.35)`,
            borderRadius:"16px",
            boxShadow:"0 24px 80px rgba(0,0,0,.8), 0 0 0 1px rgba(180,120,20,.1)",
            display:"flex", flexDirection:"column",
            overflow:"hidden",
          }}>

            {/* Modal header */}
            <div style={{
              padding:"18px 20px 14px",
              borderBottom:"1px solid rgba(255,255,255,.06)",
              display:"flex", alignItems:"center", gap:"14px",
            }}>
              <span style={{ fontSize:"11px", letterSpacing:"3px", color:S.goldDim,
                textTransform:"uppercase", flex:1 }}>Select Champion</span>

              {/* Search */}
              <input
                autoFocus
                value={champSearch}
                onChange={e => setChampSearch(e.target.value)}
                placeholder="Search..."
                style={{
                  background:"rgba(255,255,255,.06)",
                  border:"1px solid rgba(255,255,255,.12)",
                  borderRadius:"7px", padding:"7px 12px",
                  color:"#e8d5b0", fontSize:"13px",
                  outline:"none", width:"180px",
                  fontFamily:"inherit",
                }}
              />

              {/* Close */}
              <button onClick={() => setShowPicker(false)} style={{
                background:"none", border:"none", cursor:"pointer",
                color:"rgba(255,255,255,.35)", fontSize:"20px",
                lineHeight:1, padding:"0 2px",
                transition:"color .15s",
              }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,.8)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.35)"}
              >✕</button>
            </div>

            {/* Role filter pills */}
            <div style={{
              display:"flex", gap:"6px", padding:"12px 20px 10px",
              borderBottom:"1px solid rgba(255,255,255,.05)",
              flexWrap:"wrap",
            }}>
              {["All", "Top", "Jungle", "Mid", "Bot", "Support"].map(role => {
                const isActive = champRoleFilter === role;
                const ek = `rf-${role}`;
                return (
                  <button key={role} onClick={() => setChampRoleFilter(role)} style={{
                    display:"flex", alignItems:"center", gap:"5px",
                    padding:"5px 12px", borderRadius:"20px", cursor:"pointer",
                    border: isActive ? `1px solid ${S.goldDim}` : "1px solid rgba(255,255,255,.1)",
                    background: isActive ? `rgba(184,134,11,.2)` : "rgba(255,255,255,.04)",
                    color: isActive ? S.gold : "#6a7a5a",
                    fontSize:"11px", fontWeight: isActive ? "bold" : "normal",
                    letterSpacing:".5px", transition:"all .15s",
                  }}>
                    {role !== "All" && (
                      <img src={roleIcon(role)} alt={role} style={{
                        width:"14px", height:"14px", objectFit:"contain",
                        filter: isActive ? "brightness(1.4)" : "grayscale(80%) brightness(0.6)",
                      }} />
                    )}
                    {role}
                  </button>
                );
              })}
            </div>

            {/* Champion grid — scrollable */}
            <div style={{
              overflowY:"auto", padding:"16px 20px 20px",
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill, minmax(78px, 1fr))",
              gap:"10px",
              flex:1,
            }}>
              {CHAMPS
                .filter(c => {
                  const matchSearch = champSearch === ""
                    || c.display.toLowerCase().includes(champSearch.toLowerCase());
                  const matchRole = champRoleFilter === "All"
                    || c.lanes.includes(champRoleFilter);
                  return matchSearch && matchRole;
                })
                .map(c => {
                  const isCurrent = c.id === champ.id;
                  const ek = `pk-${c.dd}`;
                  return (
                    <div key={c.id} onClick={() => !isCurrent && pickChamp(c)}
                      style={{
                        cursor: isCurrent ? "default" : "pointer",
                        textAlign:"center",
                        opacity: isCurrent ? 0.4 : 1,
                        transition:"all .15s",
                      }}>
                      <div style={{
                        width:"60px", height:"60px", borderRadius:"9px", overflow:"hidden",
                        border: isCurrent
                          ? `2px solid ${c.glow}`
                          : "1.5px solid rgba(255,255,255,.1)",
                        background:"#111", margin:"0 auto 6px",
                        transition:"all .15s",
                      }}
                      onMouseEnter={e => {
                        if (!isCurrent) {
                          e.currentTarget.style.border = `2px solid ${c.glow}`;
                          e.currentTarget.style.boxShadow = `0 0 14px ${c.glow}55`;
                          e.currentTarget.style.transform = "scale(1.08)";
                        }
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.border = isCurrent
                          ? `2px solid ${c.glow}`
                          : "1.5px solid rgba(255,255,255,.1)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "scale(1)";
                      }}>
                        {!imgFail(ek)
                          ? <img src={champImg(c.dd)} alt={c.display} onError={() => onErr(ek)}
                              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                          : <div style={{ width:"100%", height:"100%", display:"flex",
                              alignItems:"center", justifyContent:"center",
                              fontSize:"20px", color:c.glow, background:`${c.color}20` }}>
                              {c.display[0]}
                            </div>
                        }
                      </div>
                      <div style={{
                        fontSize:"10px", color: isCurrent ? c.glow : "#9a8a6a",
                        whiteSpace:"nowrap", overflow:"hidden",
                        textOverflow:"ellipsis", maxWidth:"78px", margin:"0 auto",
                      }}>{c.display}</div>

                      {/* Role icons under each champion in picker */}
                      <div style={{ display:"flex", justifyContent:"center", gap:"2px", marginTop:"3px" }}>
                        {c.lanes.map(lane => (
                          <img key={lane} src={roleIcon(lane)} alt={lane} title={lane}
                            style={{ width:"10px", height:"10px", objectFit:"contain",
                              opacity:0.5, filter:"grayscale(40%)" }} />
                        ))}
                      </div>
                    </div>
                  );
                })}

              {/* Empty state */}
              {CHAMPS.filter(c => {
                const matchSearch = champSearch === ""
                  || c.display.toLowerCase().includes(champSearch.toLowerCase());
                const matchRole = champRoleFilter === "All"
                  || c.lanes.includes(champRoleFilter);
                return matchSearch && matchRole;
              }).length === 0 && (
                <div style={{
                  gridColumn:"1/-1", textAlign:"center",
                  padding:"32px 0", color:S.textDim,
                  fontSize:"13px", fontStyle:"italic",
                }}>
                  No champions match "{champSearch}" in {champRoleFilter}.
                </div>
              )}
            </div>

          </div>
        </>
      )}

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
              {activeChampRole.coreNote}
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
                <button onClick={() => setMode(mode === "ahead" ? "behind" : "ahead")}
                  style={{
                  padding:"16px 22px",
                  cursor:"pointer",
                  border:"1px solid rgba(255,255,255,.1)",
                  background: mode==="ahead" ? "rgba(184,134,11,.18)" : "rgba(74,111,165,.18)",
                  color: mode==="ahead" ? "#f0d060" : "#7eb8f7",
                  borderRadius:"7px",
                  fontSize:"18px",
                  transition:"all .15s",                  
                  }}>
                  {mode === "ahead" ? "⚔ AHEAD" : "🛡 EVEN / BEHIND"}
                </button>
              
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
            {activeChampRole.sideItems.map(name => {
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

      {/* ── FLOATING GAME STATE TOGGLE ── */}
      <div style={{
        position: "fixed",
        bottom: "30px",
        right: "25px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}>
      
      {/* SINGLE TOGGLE BUTTON */}
      <button
        onClick={() => setMode(mode === "ahead" ? "behind" : "ahead")}
        style={{
          padding:"16px 22px",
          cursor:"pointer",
          border:"1px solid rgba(255,255,255,.1)",
          borderRadius:"10px",
          background: mode === "ahead"
            ? "rgba(184,134,11,.25)"
            : "rgba(74,111,165,.25)",
          color: mode === "ahead" ? "#f0d060" : "#7eb8f7",
          fontSize:"24px",
          transition:"all .15s",
          backdropFilter:"blur(6px)",
          boxShadow: mode === "ahead"
            ? "0 0 12px rgba(184,134,11,.35)"
            : "0 0 12px rgba(74,111,165,.35)",
        }}
      >
        {mode === "ahead" ? "⚔" : "🛡"}
      </button>

      {/* TEXT UNDERNEATH */}
      <div style={{
        fontSize:"16px",
        color:"rgba(200,180,140,.5)",
        fontStyle:"italic",
        textAlign:"center",
        lineHeight:1.2,
      }}>
        {mode === "ahead"
          ? "Snowball your lead"
          : "Survive & Scale"}
      </div>
      </div>

    </div>
  );
}
