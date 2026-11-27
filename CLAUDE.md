# pantheon-guide (FRGE.GG) — Claude Code Context

A League of Legends pre-game itemization and rune guide, shipped as a desktop app (FRGE.GG). Single-page React app (no backend, no router, no state library). User selects champion → role → enemy → ahead/behind → gets item recommendations, an interactive rune page and a game plan, and imports them to the League client.

**Full history and detailed notes live in [`docs/CLAUDE-history.md`](docs/CLAUDE-history.md)** (build-sweep logs, patch notes, research numbers, matchup/starter/boots/game-plan design, redesign spec, roster details, roadmap). It is not loaded automatically: **read the relevant section before working in that area.**

## Stack
- React 19 + Vite 8, JSX only, no TypeScript. 100% inline styles + `src/theme.js` tokens. No CSS framework, no Redux, no external UI libraries.
- Run: `npm run dev`. Electron shell in `electron/main.cjs`.
- **Working files go on D:, in `.scratch/`** (gitignored): downloads, test scripts, screenshots, research output. Never the C: temp scratchpad (C: is the small system drive). Agent worktrees live in `.claude/worktrees/`, also gitignored.

## Key files
- `src/App.jsx` — all UI (~3000 lines): helpers, CLASSES, RUNE_TREES, RunePage, panels. `GAME_PATCH` is derived from `DDRAGON_VERSION` (DD major + 10), never bumped by hand.
- `src/ForgeCards.jsx` + `src/forgeStyle.js` — build-page cards and colour maths, shared with `src/InGameView.jsx` (the in-game view shows exactly what was imported, from `lastImport`).
- `src/data/champs/*.js` — one file per champion; `index.js` assembles CHAMPS. Shared rune constants must be exported/imported: `vite build` does NOT catch a missing cross-file constant (fails only at runtime).
- `src/data/runeHelpers.js` — `I(name, why)` item-entry helper. `src/theme.js` — colour tokens and style objects.
- `src/data/lcuExport.js` — `buildExport()`: the one item-set/rune export. Its `notes` are destructured off and must never reach the client; set title keeps the "FRGE.GG" prefix (main.cjs replaces sets by it); `onceEach()` keeps every item once; block titles ≤ 24 chars; Seraph's is exported as Archangel's (`BUY_AS`).
- `src/data/gamePlan.js` — the ONE item recommendation, by phase (Lane / Mid / Late), used by the plan strip, the core arrow and the export. `bootsTiming.js` (from `npm run gen:boots`) decides boots timing.
- `src/data/matchupAdjust.js` (opponent-trait swaps/adds, same-row rune swaps), `laneOpponent.js` (who your lane opponent is), `enemyTeam.js` (HEAL/SHIELD/CC lists, team threats), `champClasses.js`, `damageTypes.js`.
- `src/data/matchupStarts.js` — real lane starts (from `npm run gen:starts`, lolalytics, report-only, never in CI); read by `dataStartsFor()` in lcuExport.
- `src/data/counterPicker.js` — derives dash/heal/shield traits from `abilities.js` wording; skips meme corePaths.
- `src/data/skillOrders.js` — `SKILL_MAX` / `SKILL_SEQUENCE`; role-specific orders go in the champ file's role block.
- `src/data/abilities.js`, `lcuData.js`, `champSkins.js`, `public/ddragon/data/sr-items.json` — GENERATED; never edit by hand.
- `src/data/appVersion.js` — converts shown ↔ shipped version.

## Commands and checks (run after ANY build/rune data edit)
- `npm run check:items` (every item sold on the Rift, map 11, in store, with a Rift export id), `npm run check:runes` (rune-row legality across all classes, alts, overrides and shard rows), `npm run check:exports` (~136k real exports vs Data Dragon), `npm run build`.
- `npm run audit:builds` — corePaths vs lolalytics' most common opening; report-only, run at the start of every patch sweep.
- Brace balance after editing champion data: `python3 -c "d=sum(1 if c=='{' else -1 if c=='}' else 0 for c in open('src/App.jsx').read()); print('Balance:', d)"`.
- New item name in the data → `node helpers/gen-lcu-data.mjs`, then `check:items`.
- `vite build` and the champion-validator catch NONE of the data problems above.

## Patch updates
- `helpers/check-patch.mjs` + `.github/workflows/patch-update.yml` run twice a day and open a PR (`auto/ddragon-<ver>`) on a new patch. A green run proves nothing on its own: check a PR actually opened. Never put content at column 0 inside a YAML `run: |` block. Any generator writing under `src/` must be in the PR step's `add-paths`.
- By hand (Windows uses `py`, not `python`): `py helpers/setup_ddragon.py`, then in order `gen-lcu-data`, `gen-sr-items`, `gen-summoner-spells`, `gen-champ-skins`, `gen-abilities` (all pin to `public/ddragon/version.txt`). Never `git clone` the DDragon mirror (~10 GB).
- `gen-abilities` soft-fails when CommunityDragon hasn't published the patch folder yet (keeps the old file, notes it in the PR); re-run it once the folder is up.
- **Patch-day rule:** don't rewrite builds on patch day (stats sites lag); run `audit:builds` a few days later. The patch PR still needs a human pass for new champions, item reworks and meta shifts.
- The repo allows **rebase or merge-commit** merges, not squash.

## Architecture rules (must follow)
1. All sub-renderers inside RunePage MUST be called as plain functions `{primaryContent()}` NOT JSX components `<PrimaryColumn />` — the latter remounts on every render, breaking images and state.
2. After any edit to champion data objects, validate brace balance (command above).
3. `runeImg` must guard against null src: `{src && !imgFail(ek) ? <img src={src} onError={...}/> : <Fallback />}` — never `<img src={null}>`.
4. All rune/perk images in `/ddragon/img/perk-images/` are `.png`, not `.svg`.
5. **Player-facing text says only what changes a decision.** Follow `.claude/skills/player-facing-text/SKILL.md` for any string the player sees (app or exported). Explain the why to the developer in chat, comments and this file, never in the product.

## Build-data rules (each learned the hard way; details in the history)
- **Sources:** never trust a plain fetch of a lolalytics page (it serves the Highest Win tab). Use the build-itemset endpoint `https://a1.lolalytics.com/mega/?ep=build-itemset&v=1&patch=16.NN&c=<champ>&lane=<lane>&tier=emerald_plus&queue=ranked&region=all`, or the raw HTML's `qwik/json`. OP.GG champion build pages are the second source. u.gg, Blitz and Mobalytics return 403; onetricks.gg 429s.
- **Promotion rule (owner):** an alternate becomes the main build only when it is absolutely meta-defining; a plurality or near split is not enough (record the numbers in the coreNote).
- **Alternates** (`altBuilds[role]`: `{label, tag, corePath, coreNote, runes, sideItems, playTips?}`) are selected by index: append, never insert. Labels never carry patch numbers. Off-meta alts are described honestly, not sold as co-equal. Meme builds: `tag: "meme"`, label "Meme Build", a short `hint`; never auto-selected.
- **Verify every kit fact** against Riot's text in `abilities.js` (and item text in Data Dragon) before writing it into a coreNote, tip or trait list.
- **No player names in app text.**
- **Skill orders:** never pin a multi-role champion's sequence globally in `SKILL_SEQUENCE`; put role-specific orders in the role block.
- **Tier data** (`public/tiers.json`) must never name a role the champion data can't open; check both directions.
- **`champOverrides`** (per-opponent rune pages, Pantheon only so far) are partial and apply to the primary build only.
- **Owner's calls:** Pantheon is the owner's main; his Pantheon builds and the deliberate Voltaic/PTA line are his decisions. Leave Shen Top's full-AP alternate exactly as is. Kindred is Jungle only.
- Research method for a sweep: check corePath + keystone/primary/secondary against live data, fix the shared rune constant and corePath, keep every role's 13 classes filled.

## Image paths
- Champions: `/ddragon/img/champion/{DDkey}.png` (via `toDD()` sanitiser)
- Items: `/ddragon/img/item/{numericId}.png` (looked up from `item.json` at runtime; Rift ids)
- Runes: `/ddragon/img/{path}` from `runesReforged.json`
- Stat shards: `/ddragon/img/perk-images/StatMods/StatMods{Name}Icon.png` (hardcoded SHARD_ICONS)
- Role icons: `/images/roles/position-{role}.svg`

## Data structure — adding a champion
```js
// 1. Rune constant before const CHAMPS = [
const CHAMPNAME_ROLE_DEFAULT_RUNES = { keystone, primary, primaryRunes, secondary, secondaryRunes, shards, reason };

// 2. CHAMPS entry — multi-role uses roles:{}, single-role uses flat data:{}
{ id:"champname", display:"ChampName", dd:"DDKey", color:"#hex", glow:"#hex",
  roles: { Top: { role, corePath, coreNote, sideItems, bans, replacements,
    data: { JUGGERNAUT:{ahead:[I(...)x3],behind:[I(...)x3],runes:{...DEFAULT}}, ... all 13 classes } } } }
```
- Every role needs all 13 classes (a missing class renders blank, it doesn't fail the build). `"Bot"` is a valid role key. New champions ship with full multi-role depth where genuinely played; run `gen-skin-themes.mjs` before gen-abilities and gen-champ-skins.
- **Draft data:** `bans:[3]` (worst matchups) and `replacements:[3]` (pocket picks, roster champs preferred) per role (`activeChampRole.bans || champ.bans`). Names are Data Dragon display names.
- Roster: **173 of 173 complete**; per-champion role notes are in the history.

## 13 enemy classes
JUGGERNAUT, DIVER, ASSASSIN, SKIRMISHER, BURST_MAGE, BATTLEMAGE, ARTILLERY, MARKSMAN, ENCHANTER, CATCHER, VANGUARD, WARDEN, SPECIALIST (aligned to Riot's subclasses; the four deliberate exceptions are in the history).

## Rune trees
- Precision row 1: Absorb Life, Triumph, Presence of Mind. Row 2: Legend: Alacrity, Legend: Haste, Legend: Bloodline.
- Domination row 2: Sixth Sense, Grisly Mementos, Deep Ward.
- Stat shards: offense Adaptive / AS / AH; flex Adaptive / MS / Health scaling; defense Health / Tenacity / Health scaling (no Armor or MR).

## Desktop app
- Tray companion: closing hides to tray (quit only from the tray menu); login item starts `--hidden`; reveals on League client launch (second monitor, else docked right ~42%).
- `npm run app` (built dist), `npm run app:dev` (Vite dev server), `npm run dist:win` (installer + portable into `release/`). electron-builder uses `electronDist: node_modules/electron/dist`.
- This environment sets `ELECTRON_RUN_AS_NODE=1`: unset it before launching Electron or `npm run dist:win`.
- Auto-update via `electron-updater` from public GitHub releases (Smiggul/pantheon-guide). Builds are unsigned (SmartScreen warns).

## Versioning and releases
- Shown version `0.<LoL patch>.<features>.<build updates>` (patch 26.23 = `0.23`; a new patch starts at `.1.1`; season 27 → `1.x`). Installer/updater take three numbers, so `package.json` and the tag carry `0.<patch>.<features × 100 + builds>`: `0.23.1.1` ships as `0.23.101`. Never put the game patch itself in the version: the updater only moves up, so a wrong high version can't be undone. **State the shown and shipped version back to the owner before bumping.**
- Release: bump `package.json` (and lock), roll CHANGELOG, run the checks, commit, `npm run dist:win`, then `gh release create vX.Y.Z --repo Smiggul/pantheon-guide --target frge-gg --title "FRGE.GG <shown>" --notes-file <notes> release/FRGE.GG-Setup-X.Y.Z.exe release/FRGE.GG-Portable-X.Y.Z.exe release/latest.yml release/FRGE.GG-Setup-X.Y.Z.exe.blockmap`. `latest.yml` MUST be attached (installed apps read it). Claude runs releases; merging the patch PR is the owner's.

## Research tooling
- Reading YouTube without a browser: yt-dlp from claudetube's env with Deno and ffmpeg on PATH (`PATH="/d/tools/deno:/d/tools/ffmpeg/ffmpeg-9.0.1-essentials_build/bin:$PATH" D:/venvs/claudetube/Scripts/python.exe -m yt_dlp ...`), then frames via ffmpeg. Never open videos in Playwright (it shows a window on the owner's PC). Subtitles rate-limit after ~8 pulls.
- `.scratch/meme/match_items.py` matches item-slot crops to Data Dragon icons (reliable on post-game screens).

## Roadmap (details in the history)
Custom Build Studio + local profiles, settings expansion, item "good against" radar, ban ordering by matchup win rate, ARAM Mayhem augment overlay (`docs/research/2026-11-18-aram-mayhem-augments.md`), postgame breakdown, accounts/ads/VIP (backend- and Riot-RSO-gated; security prerequisites in the history).
