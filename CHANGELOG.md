# Changelog

All notable changes to **FRGE.GG** are recorded here, newest first.

The project follows [Semantic Versioning](https://semver.org) — `MAJOR.MINOR.PATCH`:
- **MINOR** (`0.x.0`) — new features, or champions / builds added or removed.
- **PATCH** (`0.0.x`) — bug fixes, build-data corrections, small tweaks.

Every release that ships a new downloadable build gets an entry below and a
matching GitHub Release. Changes land in **[Unreleased]** as they're made and are
rolled into a numbered version when a build is cut.

## [Unreleased]

_Nothing yet._

## [0.3.0] — 2026-07-23

### Added
- **Side-by-side build workspace** — the item build and the full rune page now
  sit next to each other and are always visible. The rune page is editable and
  imports to the League client **exactly as shown** (what you see is what you get).
- **Summoner spells** for every champion and role, shown above the build path.
- **Toggleable alternate builds** on more champions: Pantheon Top (Lethality
  Carry — PTA/Sorcery; and PTA Bruiser), AP Kai'Sa (Bot), Crit Master Yi
  (Jungle), Full-tank Cho'Gath (Top), and Lethality Varus (Bot) — alongside the
  existing Pantheon Mid / Wukong / Shyvana / Mordekaiser lines.
- **Motion & interaction polish** — class tiles and item cards lift on hover,
  pills give press feedback, and the build panel fades up when you switch
  matchup or build. Tuned to 150–220ms ease-out, animating only transform and
  opacity so nothing touches the layout path.
- **Keyboard access & motion preferences** — the class tiles are now real
  operable controls (Tab to focus, Enter/Space to select, `aria-pressed` state)
  with a visible focus ring, and every animation is disabled automatically for
  users with "reduce motion" enabled.
- **Labelled starting kits** per champion instead of one generic list: a standard
  start matched to the champion (Doran's Ring / Blade / Shield), plus situational
  swaps — *vs poke / ranged harass* (Doran's Shield), *vs heavy damage*
  (Doran's Helm), *greedy / snowball* (Dark Seal, AP builds), and *attack speed
  / on-hit* (Doran's Bow, marksmen).
- **Reserved ad zones** — a top banner, two side rails and a collapsible bottom
  bar. The side rails only appear when there's genuinely empty space beside the
  content, so they never cover the build. All four disappear for VIP users.

### Fixed
- **First-back items now make sense for the champion.** The filler was hardcoded
  to a Long Sword for everyone, so AP champions (e.g. Mordekaiser's Dusk & Dawn
  build) were told to buy an AD component. It's now damage-type aware —
  Amplifying Tome + Dark Seal for AP, Long Sword for AD, Ruby Crystal for tanks —
  alongside the real first-item component.

### Changed
- **New colour theme** — Charcoal / Gunmetal / Molten Orange / Gold / White, for
  a cleaner look that matches the FRGE.GG brand.
- **Tighter, wider layout** — the app fits on one screen at full size, the class
  pills span the full width, and only the situational-item descriptions scroll.
- Alternate builds now live inside each champion's own data file, so a champ's
  whole build picture is in one place (easier to maintain each patch).

### Fixed
- Full-screen scaling: the app fills the whole window with an on-theme dark
  background instead of being boxed in by white gutters.
- Half-screen / narrow windows: the items and rune page stack into one full-width
  column instead of the rune page getting cut off.
- Rune tooltips no longer stick on screen after you move off a rune.
- Pantheon build data: removed a redundant Black Cleaver + Serylda's Grudge
  double armor-pen, and corrected an illegal same-row rune pairing.
- First-back item recommendations resolve to the correct early component again.

### Security
- Hardened the desktop (Electron) app ahead of the planned login / ad-viewer /
  hosting work: a strict navigation allowlist (covering both navigation and
  server redirects), http/https-only external links, a path-traversal fix in the
  local asset server, and integer validation on every League-client request path.
  Reviewed with CodeRabbit.

## [0.2.0] — 2026-07-22
- Rebranded to **FRGE.GG**. Live champ-select assistant (auto-detect your hovered
  champion, auto-match the lane opponent, pre-hover + auto-import). One-click
  build import to the League client. Self-hosted Spartan MB font. Situational
  item counter-categories (Anti-Heal / Heavy Shields / Armor Stacking). First
  batch of alternate builds. First public Windows installer + portable release.
