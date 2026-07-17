# pantheon-guide — Claude Code Context

## What this is
A League of Legends pre-game itemization and rune guide. Single-page React app (no backend, no router, no state library). User selects champion → role → enemy class → ahead/behind → gets item recommendations + interactive rune page.

## Stack
- React 19 + Vite 8, JSX only, no TypeScript
- 100% inline styles + src/theme.js for style tokens
- No CSS framework, no Redux, no external UI libraries
- Run: `npm run dev` from project root

## Key files
- `src/App.jsx` — all UI (~1670 lines): helpers, CLASSES, RUNE_TREES, RunePage, panels
- `src/data/champs/*.js` — one file per champion (rune constants + default-exported champ object); `index.js` assembles the CHAMPS array. Shared rune constants must be exported/imported (e.g. RENEKTON_TOP_DEFAULT_RUNES) — a `vite build` does NOT catch a missing cross-file constant, it only fails at runtime
- `src/data/runeHelpers.js` — `I(name, why)` item-entry helper used by all champ files
- `src/theme.js` — all colour tokens and reusable style objects
- `electron/main.cjs` — desktop shell; serves dist/ over app:// (MIME map required for module scripts). `npm run dist:win` builds installer + portable exe into release/
- `public/ddragon/` — Data Dragon assets (populated by helpers/setup_ddragon.py)
- `helpers/setup_ddragon.py` — run after each patch: `python helpers/setup_ddragon.py` (no args = pulls latest patch from the noxelisdev/LoL_DDragon GitHub mirror, incremental — skips images already on disk; `--force` re-downloads). Passing a dragontail `.tgz` path still works as offline fallback. NEVER `git clone` that mirror — it is ~10 GB.

## Architecture rules (must follow)
1. All sub-renderers inside RunePage MUST be called as plain functions `{primaryContent()}` NOT JSX components `<PrimaryColumn />` — the latter causes React to remount on every render, breaking images and state
2. After any edit to champion data objects, validate brace balance: `python3 -c "d=sum(1 if c=='{' else -1 if c=='}' else 0 for c in open('src/App.jsx').read()); print('Balance:', d)"`
3. `runeImg` must guard against null src: `{src && !imgFail(ek) ? <img src={src} onError={...}/> : <Fallback />}` — never `<img src={null}>`
4. All rune/perk images in `/ddragon/img/perk-images/` are `.png`, not `.svg`

## Image paths
- Champions: `/ddragon/img/champion/{DDkey}.png` (via `toDD()` sanitiser)
- Items: `/ddragon/img/item/{numericId}.png` (looked up from `item.json` at runtime)
- Runes: `/ddragon/img/{path}` where path comes from `runesReforged.json` flat map
- Stat shards: `/ddragon/img/perk-images/StatMods/StatMods{Name}Icon.png` (hardcoded SHARD_ICONS)
- Role icons: `/images/roles/position-{role}.svg`

## Data structure — adding a champion
```js
// 1. Add rune constant before const CHAMPS = [
const CHAMPNAME_ROLE_DEFAULT_RUNES = { keystone, primary, primaryRunes, secondary, secondaryRunes, shards, reason };

// 2. Add to CHAMPS array — multi-role uses roles:{}, single-role uses flat data:{}
{ id:"champname", display:"ChampName", dd:"DDKey", color:"#hex", glow:"#hex",
  roles: { Top: { role, corePath, coreNote, sideItems, data: { JUGGERNAUT:{ahead:[I(...)x3],behind:[I(...)x3],runes:{...DEFAULT}}, ... all 13 classes } } } }
```

## Current champion roster
Pantheon (Top/Mid/Support/Jungle), Teemo (Top/Mid/Support/Jungle), Renekton (Top), Aurelion Sol (Mid), Katarina (Mid), Xerath (Mid/Support), Sion (Top/Mid/Support/Jungle), Wukong (Top/Jungle), Rek'Sai (Jungle), Shyvana (Jungle), Warwick (Jungle), Udyr (Jungle AD bruiser), Sett (Top/Jungle), Volibear (Top tank / Jungle bruiser), Nocturne (Jungle), Briar (Jungle/Top), Locke (Mid AP assassin)

## Draft data (per role)
`bans:[3 champ names]` (worst matchups — recommended bans) and `replacements:[3 champ names]` (pocket picks if banned; roster champs preferred — they render as clickable chips in the "Playing as" bar that switch the active champion). Multi-role champs carry them inside each `roles:{Top:{bans,replacements,...}}` block (matchups differ per lane); single-role champs keep them at champ level as fallback — the tiles read `activeChampRole.bans || champ.bans`. Names must be Data Dragon display names (resolved via `toDD()`/DD_OVERRIDES).

## 13 enemy classes
JUGGERNAUT, DIVER, ASSASSIN, SKIRMISHER, BURST_MAGE, BATTLEMAGE, ARTILLERY, MARKSMAN, ENCHANTER, CATCHER, VANGUARD, WARDEN, SPECIALIST

## Rune trees (patch 26.14)
- Precision row 1: Absorb Life, Triumph, Presence of Mind (NOT Overheal)
- Precision row 2: Legend: Alacrity, Legend: Haste, Legend: Bloodline (NOT Tenacity)
- Domination row 2: Sixth Sense, Grisly Mementos, Deep Ward (renamed from Zombie/Ghost/Eyeball)
- Stat shards row 3: Health (scaling), Tenacity, Health (NO Armor or Magic Resist)

## Desktop app
Electron shell in `electron/main.cjs`. `npm run app` runs against built dist/; `npm run app:dev` loads the Vite dev server (run `npm run dev` first); `npm run dist:win` produces `release/Pantheon Guide Setup <ver>.exe` (installer) + `release/Pantheon Guide <ver>.exe` (portable). electron-builder uses `electronDist: node_modules/electron/dist` (its own download/rename step fails on this machine). NOTE: this dev environment sets ELECTRON_RUN_AS_NODE=1 — clear it before launching any Electron binary or `require("electron")` returns a path string and the app instantly exits.

## Roadmap
- Export rune page as Riot runeset JSON for in-game import
- Live game data: poll League Client APIs from the Electron main process — champ select via LCU (`lockfile` port/token, `/lol-champ-select/v1/session`) and in-game via Live Client Data API (`https://127.0.0.1:2999/liveclientdata/allgamedata`, self-signed cert) — then recommend picks/builds against the revealed enemy team
- Rule engine: TRAITS + CLASS_RULES for auto-generating item fallbacks
- Riot API integration for Challenger data
- LLM-driven builds for all 5 enemy champions simultaneously