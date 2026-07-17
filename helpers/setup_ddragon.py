"""
setup_ddragon.py
────────────────
Populates public/ddragon/ with the Data Dragon files the app needs,
preserving Data Dragon's exact structure.

Two modes, run from anywhere:

  python helpers/setup_ddragon.py
      Pulls the LATEST patch straight from the community GitHub mirror
      https://github.com/noxelisdev/LoL_DDragon (no download needed).
      Only fetches the files the app uses; images that already exist
      locally are skipped, so re-runs after a patch are fast.

  python helpers/setup_ddragon.py "D:\\Downloads\\dragontail-16.9.1.tgz"
      Legacy mode: extracts from a manually downloaded dragontail .tgz.

  Add --force to re-download images that already exist locally.
"""

import json
import sys
import tarfile
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

PUBLIC_DIR = Path(__file__).resolve().parent.parent / "public" / "ddragon"

RAW = "https://raw.githubusercontent.com/noxelisdev/LoL_DDragon/master"

# Stat shard icons are not listed in runesReforged.json — mirror of
# SHARD_ICONS in src/App.jsx (plus its fallback icon).
SHARD_FILES = [
    "StatModsAttackSpeedIcon.png",
    "StatModsAdaptiveForceIcon.png",
    "StatModsCDRScalingIcon.png",
    "StatModsMovementSpeedIcon.png",
    "StatModsHealthPlusIcon.png",
    "StatModsHealthScalingIcon.png",
    "StatModsTenacityIcon.png",
]


# ── Shared slimming (both modes write identical JSON) ──────────────────────────

def slim_item_json(raw: dict, version: str) -> dict:
    return {
        "version": raw.get("version", version),
        "data": {
            iid: {
                "id":    int(iid),
                "name":  info["name"],
                "image": info["image"]["full"],   # e.g. "3071.png"
            }
            for iid, info in raw["data"].items()
            if info.get("name")
        }
    }


def slim_runes_json(raw: list) -> dict:
    # Flat map: { "Conqueror": "perk-images/Styles/Precision/..." }
    slim = {}
    for tree in raw:
        slim[tree["name"]] = tree["icon"]
        for slot in tree.get("slots", []):
            for rune in slot.get("runes", []):
                slim[rune["name"]] = rune["icon"]
    return slim


def write_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )


# ── GitHub mode ────────────────────────────────────────────────────────────────

def fetch(url: str, tries: int = 3) -> bytes:
    last = None
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "pantheon-guide-setup"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                raise
            last = e
        except Exception as e:
            last = e
    raise last


def download_many(jobs: list, force: bool, label: str) -> None:
    """jobs: list of (url, dest Path). Skips existing files unless force."""
    todo = [(u, d) for u, d in jobs if force or not d.exists()]
    skipped = len(jobs) - len(todo)
    failed = []

    def one(job):
        url, dest = job
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(fetch(url))

    with ThreadPoolExecutor(max_workers=16) as pool:
        futures = {pool.submit(one, j): j for j in todo}
        for fut in as_completed(futures):
            if fut.exception():
                failed.append(futures[fut][0])

    msg = f"  ✓ {label:<15}{len(todo) - len(failed)} downloaded, {skipped} already present"
    if failed:
        msg += f", {len(failed)} FAILED"
    print(msg)
    for url in failed[:5]:
        print(f"      ⚠ {url}")


def sync_from_github(force: bool) -> str:
    print(f"\n→ Fetching latest patch data from noxelisdev/LoL_DDragon ...")

    item_raw = json.loads(fetch(f"{RAW}/latest/data/en_US/item.json"))
    champ_raw = json.loads(fetch(f"{RAW}/latest/data/en_US/champion.json"))
    runes_raw = json.loads(fetch(f"{RAW}/latest/data/en_US/runesReforged.json"))

    version = item_raw.get("version", "latest")
    print(f"  Detected patch: {version}\n")

    # ── data JSONs ─────────────────────────────────────────────────────────
    slim_items = slim_item_json(item_raw, version)
    write_json(PUBLIC_DIR / "data" / "item.json", slim_items)
    print(f"  ✓ item.json:     {len(slim_items['data'])} items indexed")

    slim_runes = slim_runes_json(runes_raw)
    write_json(PUBLIC_DIR / "data" / "runesReforged.json", slim_runes)
    print(f"  ✓ runesReforged: {len(slim_runes)} runes indexed")

    # ── images ─────────────────────────────────────────────────────────────
    champ_jobs = [
        (f"{RAW}/latest/img/champion/{c['image']['full']}",
         PUBLIC_DIR / "img" / "champion" / c["image"]["full"])
        for c in champ_raw["data"].values()
    ]
    item_jobs = [
        (f"{RAW}/latest/img/item/{info['image']}",
         PUBLIC_DIR / "img" / "item" / info["image"])
        for info in slim_items["data"].values()
    ]
    rune_jobs = [
        (f"{RAW}/img/{icon}", PUBLIC_DIR / "img" / Path(icon))
        for icon in set(slim_runes.values())
    ] + [
        (f"{RAW}/img/perk-images/StatMods/{name}",
         PUBLIC_DIR / "img" / "perk-images" / "StatMods" / name)
        for name in SHARD_FILES
    ]

    download_many(champ_jobs, force, "Champions:")
    download_many(item_jobs, force, "Item images:")
    download_many(rune_jobs, force, "Rune images:")

    return version


# ── Tarball mode (legacy) ──────────────────────────────────────────────────────

def find_version(tar: tarfile.TarFile) -> str:
    for member in tar.getmembers():
        parts = Path(member.name).parts
        if len(parts) >= 1 and parts[0][0].isdigit():
            return parts[0]
    raise RuntimeError("Could not detect version folder in tgz.")


def extract_members(tar: tarfile.TarFile, prefix: str, dest: Path) -> int:
    """
    Extract all members whose path starts with `prefix` into `dest`,
    stripping the prefix so output paths are relative to dest.
    """
    count = 0
    for member in tar.getmembers():
        if not member.name.startswith(prefix):
            continue
        rel = member.name[len(prefix):]
        if not rel:
            continue
        out = dest / rel
        if member.isdir():
            out.mkdir(parents=True, exist_ok=True)
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        f = tar.extractfile(member)
        if f:
            out.write_bytes(f.read())
            count += 1
    return count


def sync_from_tarball(tgz_path: Path) -> str:
    print(f"\n→ Opening {tgz_path.name} ...")

    with tarfile.open(tgz_path, "r:gz") as tar:
        version = find_version(tar)
        print(f"  Detected patch: {version}\n")

        # ── Champions ──────────────────────────────────────────────────────
        dest = PUBLIC_DIR / "img" / "champion"
        dest.mkdir(parents=True, exist_ok=True)
        n = extract_members(tar, f"{version}/img/champion/", dest)
        print(f"  ✓ Champions:     {n} files")

        # ── Items (images) ─────────────────────────────────────────────────
        dest = PUBLIC_DIR / "img" / "item"
        dest.mkdir(parents=True, exist_ok=True)
        n = extract_members(tar, f"{version}/img/item/", dest)
        print(f"  ✓ Item images:   {n} files")

        # ── item.json ──────────────────────────────────────────────────────
        item_json_path = f"{version}/data/en_US/item.json"
        try:
            f = tar.extractfile(tar.getmember(item_json_path))
            slim = slim_item_json(json.loads(f.read().decode("utf-8")), version)
            write_json(PUBLIC_DIR / "data" / "item.json", slim)
            print(f"  ✓ item.json:     {len(slim['data'])} items indexed")
        except KeyError:
            print(f"  ⚠ item.json not found at {item_json_path}")

        # ── Rune images ────────────────────────────────────────────────────
        # perk-images lives at the ROOT of the tgz (not inside the version folder)
        dest = PUBLIC_DIR / "img" / "perk-images"
        dest.mkdir(parents=True, exist_ok=True)
        n = extract_members(tar, "img/perk-images/", dest)
        print(f"  ✓ Rune images:   {n} files")

        # ── runesReforged.json ─────────────────────────────────────────────
        rune_json_path = f"{version}/data/en_US/runesReforged.json"
        try:
            f = tar.extractfile(tar.getmember(rune_json_path))
            slim = slim_runes_json(json.loads(f.read().decode("utf-8")))
            write_json(PUBLIC_DIR / "data" / "runesReforged.json", slim)
            print(f"  ✓ runesReforged: {len(slim)} runes indexed")
        except KeyError:
            print(f"  ⚠ runesReforged.json not found at {rune_json_path}")

    return version


# ── Entry point ────────────────────────────────────────────────────────────────

def main():
    args = [a for a in sys.argv[1:] if a != "--force"]
    force = "--force" in sys.argv[1:]

    if args:
        tgz_path = Path(args[0])
        if not tgz_path.exists():
            print(f"File not found: {tgz_path}")
            sys.exit(1)
        version = sync_from_tarball(tgz_path)
    else:
        version = sync_from_github(force)

    (PUBLIC_DIR / "version.txt").write_text(version)

    print(f"""
╔══════════════════════════════════════════════════╗
║  Done! Patch {version:<36}║
║  public/ddragon/ is ready.                       ║
║                                                  ║
║  To update next patch, just run:                 ║
║  python helpers/setup_ddragon.py                 ║
║  No App.jsx changes needed.                      ║
╚══════════════════════════════════════════════════╝
""")


if __name__ == "__main__":
    main()
