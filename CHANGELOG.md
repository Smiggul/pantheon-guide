# Changelog

All notable changes to **FRGE.GG** are recorded here, newest first.

The project follows [Semantic Versioning](https://semver.org) — `MAJOR.MINOR.PATCH`:
- **MINOR** (`0.x.0`) — new features, or champions / builds added or removed.
- **PATCH** (`0.0.x`) — bug fixes, build-data corrections, small tweaks.

Every release that ships a new downloadable build gets an entry below and a
matching GitHub Release. Changes land in **[Unreleased]** as they're made and are
rolled into a numbered version when a build is cut.

## [Unreleased]

_Single-role skill-order validation continues; Custom Build import/export next._

## [0.8.1] — 2026-08-12

> Ships as 0.8.1 because the 0.8.0 tag got stuck in GitHub's immutable-release
> state on a failed first publish; 0.8.1 is the same content plus the first
> single-role skill fixes (Viktor/Anivia/Kassadin/Vex/Aurelion Sol/Darius/Gnar).

### Added
- **Patch 26.16.** Updated to Data Dragon **16.16.1** — the retuned AD-fighter
  items (Sundered Sky nerf, Eclipse/Sunfire/Tiamat/Sterak's buffs), jungle-
  companion buffs, and champion changes (Azir/Gwen/Kennen up, Bel'Veth down,
  Camille/Nasus/Poppy power-curve reworks) — and regenerated the in-client
  rune/item id tables. Existing build data carries forward as 26.15-verified;
  a 26.16 meta re-sweep follows once the new-patch data settles on the build
  sites (they were still serving 26.15 on release day).

### Changed
- **Per-role skill-order sweep — all 67 multi-role champions.** Validated every
  multi-role champion's ability max order against live build sites and split it
  per-role wherever the roles diverge (~26 champs were wrong). Base-order fixes:
  **Zac, Jax, Volibear, Briar, Fizz, Cassiopeia, Warwick, Sett, Renekton,
  Camille, Poppy, Veigar, Fiddlesticks, TahmKench, Sejuani, Sylas, Zyra, Morgana,
  Galio** and more were maxing the wrong ability. Per-role splits added for
  **Pantheon** (Top Q›E›W vs Mid/Jungle/Support Q›W›E), **Sion** (Mid),
  **Nasus/Malphite/Fizz/Zyra** (Jungle), **Varus/Zac** (Top),
  **Annie/Maokai/Galio** (Support), **Brand/Morgana** (Mid).
- **Udyr now renders the skill-order grid** for all three builds — the AP pages
  max R first, the AD jungle maxes Q with R dipped at 6/11/16 for the awaken CC.
- **Pantheon per-role skill orders fixed** — a Support-only sequence had leaked
  onto all four roles; each role now shows its own validated order.

## [0.7.8] — 2026-08-11

### Added
- **Skill-order grid & strip views.** The build panel now shows the full
  18-level skill sequence beneath the max-order header, in two switchable
  layouts: a u.gg-style **grid** (abilities × 18 level columns) or a
  Pantheon-style **strip** (one row of level pills, ultimate highlighted). A
  `grid / strip` toggle sits in the skill-order header and your choice is saved.
  Sequences are derived from the max-priority order, with exact per-champ pins
  where reality differs (Pantheon ships pinned to its real W-first order).
- **AP Udyr (Jungle).** A new "AP Bruiser" build toggle on Udyr's jungle page —
  Conqueror, Malignance › Boots of Swiftness › Liandry's › Riftmaker, R-max —
  alongside the existing AD bruiser build.

### Changed
- **Build/rune verification sweep — batches 5 & 6: the roster is now 100%
  verified.** Every one of the 173 champions × each role has been checked
  against live build sites (patch 26.15) across six batches. Batch 5 (52 champs)
  fixed **Aurelion Sol** (Blackfire Torch-first). Batch 6 (the final 52) fixed
  **Gragas Jungle** (Stormsurge-first) and **Hwei Mid** (Arcane Comet).
  Everything else matched current meta.
- **Udyr skill order now includes his R** (Wingborne Storm) and adapts to the
  build instead of hiding it — AD Jungle maxes Q with R last (`Q › E › W › R`),
  the AP pages max R (`R › E › W › Q`).

## [0.7.7] — 2026-08-09

### Changed
- **Build/rune verification sweep — batch 3 + 4** (39 more champions checked
  against live build sites). Batch 3 (jungle-heavy) was **all correct**. Batch 4
  fixes: **Fiora** (Press the Attack over Conqueror), **Renekton** (Eclipse-first
  core), **Irelia** (Triple Tonic), **Gwen** (Sorcerer's Shoes), **Nautilus**
  (Knight's Vow), **Nami** (Echoes of Helia). ~40 champion-roles now verified
  against sources across four batches; the rest are on the roadmap.

## [0.7.6] — 2026-08-09

### Changed
- **Build/rune verification sweep — batch 2** (13 more champions, checked against
  live build sites): corrected **Thresh** & **Leona** (Bone Plating/Unflinching +
  Inspiration secondary), **Ahri** (Taste of Blood), and **Darius** (Conqueror +
  Sorcery, Youmuu's-first tempo core — was on Grasp). Verified already-correct and
  left untouched: **Jinx, Caitlyn, Kai'Sa, Ezreal, Lux, Morgana, Katarina, Master
  Yi, Garen**.

## [0.7.5] — 2026-08-09

### Changed
- **Build/rune verification sweep — batch 1** (verified against live build sites,
  patch 26.15): corrected **Zed** (Electrocute page + Eclipse core, was First
  Strike), **Yasuo Mid** (Resolve secondary + Absorb Life), **Yone** (Absorb Life
  + Blade-of-the-Ruined-King-first core), **Wukong Top** (Resolve secondary +
  Death's Dance core), **Pantheon Jungle** (Conqueror + Inspiration — the real
  meta page; core Guardian Angel), and **Mel** (Zhonya's in core). Verified
  already-correct and left untouched: Volibear, Viego, Akali, Fiddlesticks,
  Naafiri, Zoe, Locke.
- **Skill order now covers all 173 champions** — Mel added (Q › E › W).

## [0.7.4] — 2026-08-09

### Fixed
- **Auto-import now uses the role you're actually assigned**, not the champion's
  first role. Being assigned jungle on Pantheon/Wukong used to import the Top
  build; it now resolves the build role from the client's assigned position.
- **Pantheon Jungle runes** corrected — the gimmick Inspiration secondary
  (Hextech Flashtraption) is replaced with the standard aggressive Domination
  page (Sudden Impact + Relentless Hunter).

### Changed
- **Skill order now covers 172 of 173 champions**, verified against build sites.
  The special-kit champs are handled too — Udyr shows a "stance priority (no
  ultimate)" order instead of a wrong "R at 6/11/16". (Only the newest champion,
  Mel, is still pending reliable data.)

## [0.7.3] — 2026-08-09

### Fixed
- **Enemy damage-type classification is now per-champion, not per-class.** Morgana
  (and other AP catchers like Zyra) were being counted as AD and as tanks; AP
  skirmishers (Gwen, Lillia), the AP juggernaut Mordekaiser, and AD tanks (Sion,
  Poppy) were also mis-typed. All 173 champions are now hand-classified, so the
  AD/AP split and counter recommendations are accurate.

### Changed
- **More champions now show a skill order** (89 of 173, including Viego). Coverage
  is being expanded champion by champion; the ones not yet covered stay hidden
  rather than show a guess.

## [0.7.2] — 2026-08-09

### Fixed
- **Auto-update download now works** (it was failing with "Update check failed").
  The installer/portable filenames contained spaces, which GitHub and
  electron-updater normalise differently (dots vs hyphens) — so the download URL
  pointed at a file that didn't exist and 404'd. Artifacts are now named without
  spaces (`FRGE.GG-Setup-x.y.z.exe`) so both agree. Auto-update works for anyone
  who reaches v0.7.2.
- **Picking a champion in FRGE now hovers it in the League client** during champ
  select. Previously only the one-shot pre-hover (at champ-select open) pushed to
  the client; changing your pick in FRGE afterwards did nothing.

## [0.7.1] — 2026-08-09

### Added
- **The build stays on screen after the game starts.** The matchup readout and the
  enemy-team panel (damage split, threats, counter-items) no longer disappear when
  champ select ends — they stay pinned as an in-game build reference (status shows
  "In game — build reference") until League closes.
- **Champion icons** in the live "You: _champ_ vs _enemy_" matchup readout.
- **Skill order** on the build — a row in the Core Build Path shows the ultimate
  (leveled at 6 / 11 / 16) then the basic abilities in max-priority order as
  Q / W / E badges with rank numbers. Curated for ~40 champions so far and growing;
  it's hidden for champions not yet covered.

## [0.7.0] — 2026-08-07

### Added
- **In-app auto-update** (desktop) — FRGE checks GitHub for new releases on launch
  (and every few hours). When one's available, an **Update** button appears top-
  right: click to download (with progress), then it turns into **Restart & update**
  to install. Nothing downloads or installs without you clicking. There's also an
  **Updates** section in Settings → General showing your version and a manual
  Check button. Built on `electron-updater` against the public releases.
  _Note: auto-update works from this version forward — v0.7.0 is the first build
  that ships the updater, so earlier installs need a one-time manual update._

## [0.6.0] — 2026-08-07

### Added
- **Favourite champion** — hit the ☆ next to your champion in the "Playing as"
  bar to make it your favourite, and FRGE opens straight to it every launch with
  the build ready.

### Fixed
- **Launch on startup now actually sticks.** The login item was written with a
  `--hidden` argument but read back without it, so Windows always reported it as
  off and the toggle never held (and the tray checkmark stayed empty). Both the
  read and the write now use the same command line.

## [0.5.0] — 2026-08-06

### Added
- **Tray companion mode** (desktop) — FRGE.GG now lives in the Windows system
  tray (hidden-icons area). Closing the window minimises it there instead of
  quitting; the tray menu has Open, Launch-on-startup, and Quit.
- **Auto-reveal when League launches** — while it sits in the tray, FRGE watches
  for the League client and, the moment it starts, brings itself forward **on a
  second monitor if you have one**, otherwise **docked beside League** on a single
  screen.
- **Launch on startup** setting — start FRGE with Windows, minimised to the tray,
  so it's ready to pop up when you load into League. Toggles the OS login item;
  also available from the tray menu.
- **Tabbed Settings** — the Settings popout is now organised into **Display**
  (themes), **General** (launch-on-startup + champ-select auto-sync / pre-hover),
  **Integrations** (live League-client status; Discord planned), and **Account**.

## [0.4.0] — 2026-08-06

### Added
- **Versus-team view** (desktop, live champ select) — once enemies lock in, a new
  panel lists all five in a column: portrait, role, class and damage type, with
  your lane opponent highlighted. A header sums up the team's **damage split**
  (AD / AP / hybrid / tank) and flags **threats** (heavy CC, dive, enemy
  shielding, healing, poke), and a **Consider** row recommends up to four
  counter-items tailored to your champion — anti-heal, the right boots + resist
  for the dominant damage type, shield-shred, and anti-dive.
- **Synergies** draft tile — alongside Recommended Ban and Recommended
  Replacement, a third tile suggests three teammates whose kit complements yours
  (the bot-lane duo partner, a jungler's gank buddies, a laner's dive jungler).
  Picked by role + class, and overridable per champion like the other draft tiles.
  Display-only (not clickable) — it's team-planning info, not a champion swap.
- **Click a Recommended Ban to pre-select it in the client's ban phase** (desktop)
  — the ban suggestions are now ranked **worst matchup first** with a numbered
  priority badge (#1 = the must-ban), so it's obvious which pick hurts you most.
  Clicking one hovers it in your ban slot when it's your turn.
- **Theme switcher** in a new Settings popout (⚙, top-right): **Classic** (the
  default look), **Refined Depth** (layered shadows, glow, a living empty-state),
  and **Esports HUD** (notched panels, orange accents, mono stat labels). The
  choice persists across sessions, and the picker already supports VIP-locked
  themes for the future account tier.
- **Account entry point** in Settings — a Sign in / Sign up section (currently a
  "coming soon" preview: link your Riot account, sync builds, opt into update
  emails). Deliberately not a working credential form until the backend exists.
- **Jungle pets** (smite companions) now show in every Jungle build — the
  recommended pet sits beside the summoner spells, and it's included in the
  "Import to League" item set (a jungle pet start + alt pets in place of the
  laning starters). **All 61 junglers are individually curated** to their meta
  pet — Scorchclaw for aggressive early duelists, Mosstomper for durable/scaling
  frontline, Gustwalker for mobility/kite/roam — with the why shown on hover.

### Internal
- **Auto patch updater** — a scheduled GitHub Action (`patch-update.yml`, every
  3 days) detects a new Data Dragon patch and opens a PR that refreshes the
  bundled assets and regenerated id tables, with the build verified in CI. Keeps
  FRGE.GG current with League's ~2-week patch cadence with a human review gate.

### Changed
- **Updated to Data Dragon patch 16.15.1** — champion/item/rune assets and the
  LCU export id tables refreshed to the live patch. The id generator stays pinned
  to the bundled asset version, so the export always matches what's on disk.

### Fixed
- **Patch label in the header no longer goes stale** — it's now derived from the
  bundled Data Dragon version (exported as `DDRAGON_VERSION`) instead of a
  hardcoded string, so it tracks every patch update automatically. Now reads
  "Patch 26.15".
- **Champion predictor** no longer breaks when several enemies could play your
  lane: it prefers the enemy whose *primary* role is yours, only considers picks
  it can resolve (so the "vs …" readout can't silently blank), and shows a
  "waiting for enemy picks" state instead of nothing.
- The LCU-id generator now pins to the project's ddragon version instead of
  always-latest, so regenerating can't drift export ids off the runtime data.

## [0.3.1] — 2026-07-23

### Changed
- **Removed the ad placeholders from the public build.** Ad zones are now hidden
  behind a single `ADS_ENABLED` switch in `src/App.jsx` (off). The layout, VIP
  gating and placeholders remain implemented — flip the flag once a real ad
  network is wired up. The "Preview VIP" toggle is hidden while ads are off.
- Supersedes 0.3.0, whose build still displayed the placeholders.

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
