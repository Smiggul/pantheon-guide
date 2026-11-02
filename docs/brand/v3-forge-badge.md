# FRGE.GG: V3 "Forge Badge" (the app icon, 2 Nov 2026)

The owner supplied two forge-frog illustrations (`v3-source-forge-frogs.png`) and asked for one app logo combining them. The badge takes the **gold ring** from the circle illustration and puts the **crouched frog mid-strike at the anvil** from the other inside it, on the illustrations' own charcoal (`#1C1C1C`), with gold `#D49F5B`.

| File | What it is | Used for |
|---|---|---|
| `v3-forge-badge-1024.png` | The full badge | App icon at 48 px and up, window icon, store art, README |
| `v3-forge-badge-small-1024.png` | The same ring with a close-up of the frog's head | 16 to 32 px: the tray, small `.ico` sizes |
| `build/icon.ico` | 256, 128, 64 and 48 from the full badge; 32, 24 and 16 from the close-up | The installer and `.exe` (electron-builder's default icon path) |
| `build/icon.png` | 512 px full badge | Spare, for other targets |
| `electron/app-icon.png` | 256 px full badge | `BrowserWindow` icon (taskbar) |
| `electron/tray-icon.png` | 32 px close-up | The system tray |

**Why two versions.** The rule from V2 still holds: a full scene can't be read at 32 px, so the small sizes use the head close-up. That keeps the same family as the full badge, with the same ring, frog and colours.

**Rebuilding.** `.scratch/logo/build-badge.cjs` (gitignored scratch) keys the frog off the background, fits it inside the ring and writes every file above. It borrows `sharp` from the ModMotive repo's `node_modules`.

**Source art** is a raster (1254 px). If a larger or vector original turns up, re-run the build from it. 1024 px is enough for every icon size Windows uses.
