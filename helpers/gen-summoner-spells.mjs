// Fetches Summoner's Rift summoner-spell icons + a flat name->iconPath map,
// mirroring the existing item.json/runesReforged.json convention so the
// existing runeImg()-style lookup pattern works unchanged for spells.
// Run after a patch: node helpers/gen-summoner-spells.mjs
import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const VERSION = fs.readFileSync("public/ddragon/version.txt", "utf8").trim();
const CDN = `https://ddragon.leagueoflegends.com/cdn/${VERSION}`;

// Only Summoner's Rift-legal spells — DDragon's summoner.json also lists
// Arena/ARAM/URF-only entries (Cherry Flash, Flee, Snowball, Placeholder…).
const SR_KEYS = new Set([
  "SummonerFlash", "SummonerDot", "SummonerTeleport", "SummonerExhaust",
  "SummonerHeal", "SummonerBarrier", "SummonerBoost", "SummonerHaste", "SummonerSmite",
]);

const fetchJson = (url) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => resolve(JSON.parse(data)));
  }).on("error", reject);
});

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} ${url}`));
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on("finish", () => file.close(resolve));
  }).on("error", reject);
});

const raw = await fetchJson(`${CDN}/data/en_US/summoner.json`);
const outDir = "public/ddragon/img/spell";
fs.mkdirSync(outDir, { recursive: true });

const map = {};
const jobs = [];
for (const [key, v] of Object.entries(raw.data)) {
  if (!SR_KEYS.has(key)) continue;
  map[v.name] = `spell/${v.image.full}`;
  jobs.push(download(`${CDN}/img/spell/${v.image.full}`, path.join(outDir, v.image.full)));
}
await Promise.all(jobs);

fs.writeFileSync(
  "public/ddragon/data/summonerSpells.json",
  JSON.stringify(map, null, 2) + "\n"
);
console.log(`Wrote public/ddragon/data/summonerSpells.json (${Object.keys(map).length} spells) + ${jobs.length} icons — ddragon ${VERSION}`);
