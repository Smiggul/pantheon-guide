"""
download_lol_images.py
──────────────────────
Downloads every League of Legends champion portrait and item icon
from Riot's Data Dragon CDN and saves them to your Desktop, ready
to drop into the pantheon-guide/public/images/ folder.

Output folders
  ~/Desktop/lol_images/champions/   ← champion portraits  (e.g. Pantheon.png)
  ~/Desktop/lol_images/items/       ← item icons          (e.g. Black_Cleaver.png)

Usage
  python download_lol_images.py

No third-party packages needed — uses only the Python standard library.
"""

import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path


# ── Config ────────────────────────────────────────────────────────────────────
DESKTOP   = Path.home() / "Desktop"
OUT_DIR   = DESKTOP / "lol_images"
CHAMP_DIR = OUT_DIR / "champions"
ITEM_DIR  = OUT_DIR / "items"
RUNES_DIR  = OUT_DIR / "runes"

# Polite delay between requests so we don't hammer the CDN
DELAY_SEC = 0.05   # 50 ms — fast but not rude

# ── Helpers ───────────────────────────────────────────────────────────────────
def get(url: str) -> bytes:
    """Fetch a URL and return raw bytes."""
    req = urllib.request.Request(url, headers={"User-Agent": "lol-image-downloader/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read()


def get_json(url: str) -> dict:
    return json.loads(get(url).decode())


def sanitise(name: str) -> str:
    """Convert item/champion name to the filename format the app expects.
    Spaces → underscores, apostrophes removed, other special chars stripped."""
    name = name.replace("'", "").replace("'", "")   # curly + straight apostrophes
    name = re.sub(r"[^\w\s-]", "", name)             # remove any remaining specials
    name = re.sub(r"\s+", "_", name.strip())         # spaces → underscores
    return name


def progress(label: str, done: int, total: int) -> None:
    pct   = int(done / total * 40)
    bar   = "█" * pct + "░" * (40 - pct)
    print(f"\r  [{bar}] {done}/{total}  {label:<40}", end="", flush=True)


# ── Main ──────────────────────────────────────────────────────────────────────
def main() -> None:
    print("\n╔══════════════════════════════════════════════════╗")
    print("║   LoL Data Dragon Image Downloader               ║")
    print("╚══════════════════════════════════════════════════╝\n")

    # 1. Fetch latest patch version
    print("→ Fetching latest patch version...")
    versions = get_json("https://ddragon.leagueoflegends.com/api/versions.json")
    version  = versions[0]
    base     = f"https://ddragon.leagueoflegends.com/cdn/{version}"
    print(f"  Using patch {version}\n")

    # 2. Create output directories
    CHAMP_DIR.mkdir(parents=True, exist_ok=True)
    ITEM_DIR.mkdir(parents=True, exist_ok=True)
    RUNES_DIR.mkdir(parents=True, exist_ok=True)
    print(f"→ Saving to:  {OUT_DIR}\n")

    # 3. Download champion portraits
    print("→ Fetching champion list...")
    champ_data = get_json(f"{base}/data/en_US/champion.json")
    champions  = list(champ_data["data"].keys())   # internal IDs e.g. "MonkeyKing"
    total_c    = len(champions)
    print(f"  Found {total_c} champions\n")

    skipped_c, failed_c = 0, []
    for i, cid in enumerate(champions):
        dest = CHAMP_DIR / f"{cid}.png"
        progress(cid, i + 1, total_c)
        if dest.exists():
            skipped_c += 1
            continue
        url = f"{base}/img/champion/{cid}.png"
        try:
            dest.write_bytes(get(url))
        except Exception as exc:
            failed_c.append((cid, str(exc)))
        time.sleep(DELAY_SEC)

    print()   # newline after progress bar
    print(f"  ✓ Champions done  —  {total_c - skipped_c - len(failed_c)} new, "
          f"{skipped_c} already existed, {len(failed_c)} failed\n")

    # 4. Download item icons
    print("→ Fetching item list...")
    item_data = get_json(f"{base}/data/en_US/item.json")
    items     = list(item_data["data"].items())   # list of (id, info_dict)
    total_i   = len(items)
    print(f"  Found {total_i} items\n")

    skipped_i, failed_i = 0, []
    for i, (item_id, info) in enumerate(items):
        raw_name = info.get("name", item_id)
        filename = sanitise(raw_name) + ".png"
        dest     = ITEM_DIR / filename
        progress(raw_name, i + 1, total_i)
        if dest.exists():
            skipped_i += 1
            continue
        url = f"{base}/img/item/{item_id}.png"
        try:
            dest.write_bytes(get(url))
        except Exception as exc:
            failed_i.append((raw_name, str(exc)))
        time.sleep(DELAY_SEC)

    print()
    print(f"  ✓ Items done  —  {total_i - skipped_i - len(failed_i)} new, "
          f"{skipped_i} already existed, {len(failed_i)} failed\n")

    # 5. Download rune images
    print("→ Fetching rune list...")
    rune_data = get_json(f"{base}/data/en_US/rune.json")
    runes    = list(rune_data["data"].items())   # list of (id, info_dict)
    total_r   = len(runes)
    print(f"  Found {total_r} runes\n")

    skipped_r, failed_r = 0, []
    for i, (rune_id, info) in enumerate(runes):
        raw_name = info.get("name", rune_id)
        filename = sanitise(raw_name) + ".png"
        dest     = RUNES_DIR / filename
        progress(raw_name, i + 1, total_r)
        if dest.exists():
            skipped_r += 1
            continue
        url = f"{base}/img/rune/{rune_id}.png"
        try:
            dest.write_bytes(get(url))
        except Exception as exc:
            failed_r.append((raw_name, str(exc)))
        time.sleep(DELAY_SEC)

    print()
    print(f"  ✓ Runes done  —  {total_r - skipped_r - len(failed_r)} new, "
          f"{skipped_r} already existed, {len(failed_r)} failed\n")


    skipped_i, failed_i = 0, []
    for i, (item_id, info) in enumerate(items):
        raw_name = info.get("name", item_id)
        filename = sanitise(raw_name) + ".png"
        dest     = ITEM_DIR / filename
        progress(raw_name, i + 1, total_i)
        if dest.exists():
            skipped_i += 1
            continue
        url = f"{base}/img/item/{item_id}.png"
        try:
            dest.write_bytes(get(url))
        except Exception as exc:
            failed_i.append((raw_name, str(exc)))
        time.sleep(DELAY_SEC)

    print()
    print(f"  ✓ Items done  —  {total_i - skipped_i - len(failed_i)} new, "
          f"{skipped_i} already existed, {len(failed_i)} failed\n")

    # 6. Summary
    print("╔══════════════════════════════════════════════════╗")
    print("║   All done!                                      ║")
    print("╠══════════════════════════════════════════════════╣")
    print(f"║  Champions → {str(CHAMP_DIR):<36}║")
    print(f"║  Items     → {str(ITEM_DIR):<36}║")
    print(f"║  Runes     → {str(RUNES_DIR):<36}║")  
    print("╠══════════════════════════════════════════════════╣")
    print("║  Next step:                                      ║")
    print("║  Copy both folders into                          ║")
    print("║  pantheon-guide/public/images/                   ║")
    print("╚══════════════════════════════════════════════════╝\n")

    if failed_c or failed_i:
        print("⚠ The following failed (usually removed/legacy items):")
        for name, err in (failed_c + failed_i):
            print(f"   • {name}: {err}")

    if sys.platform == "win32":
        input("\nPress Enter to close...")


if __name__ == "__main__":
    main()
