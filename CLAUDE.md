# pantheon-guide — Claude Code Context

## What this is
A League of Legends pre-game itemization and rune guide. Single-page React app (no backend, no router, no state library). User selects champion → role → enemy class → ahead/behind → gets item recommendations + interactive rune page.

## Stack
- React 19 + Vite 8, JSX only, no TypeScript
- 100% inline styles + src/theme.js for style tokens
- No CSS framework, no Redux, no external UI libraries
- Run: `npm run dev` from project root

## Key files
- `src/App.jsx` — the entire app (~3450 lines, single file)
- `src/theme.js` — all colour tokens and reusable style objects
- `public/ddragon/` — Data Dragon assets (populated by helpers/setup_ddragon.py)
- `helpers/setup_ddragon.py` — run after each patch: `python helpers/setup_ddragon.py "path\to\dragontail-XX.X.X.tgz"`

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
Pantheon (Top/Mid/Support/Jungle), Teemo (Top/Mid/Support/Jungle), Renekton (Top), Volibear (Top tank / Jungle bruiser — Lethal Tempo + Dusk and Dawn), Nocturne (Jungle), Briar (Jungle/Top), Wukong (Top/Jungle), Rek'Sai (Jungle), Shyvana (Jungle), Warwick (Jungle), Udyr (Jungle AD bruiser), Sett (Top/Jungle), Locke (Mid AP assassin)

## 13 enemy classes
JUGGERNAUT, DIVER, ASSASSIN, SKIRMISHER, BURST_MAGE, BATTLEMAGE, ARTILLERY, MARKSMAN, ENCHANTER, CATCHER, VANGUARD, WARDEN, SPECIALIST

## Rune trees (patch 26.14)
- Precision row 1: Absorb Life, Triumph, Presence of Mind (NOT Overheal)
- Precision row 2: Legend: Alacrity, Legend: Haste, Legend: Bloodline (NOT Tenacity)
- Domination row 2: Sixth Sense, Grisly Mementos, Deep Ward (renamed from Zombie/Ghost/Eyeball)
- Stat shards row 3: Health (scaling), Tenacity, Health (NO Armor or Magic Resist)

## Roadmap
- Export rune page as Riot runeset JSON for in-game import
- Rule engine: TRAITS + CLASS_RULES for auto-generating item fallbacks
- Riot API integration for Challenger data
- LLM-driven builds for all 5 enemy champions simultaneously