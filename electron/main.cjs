// FRGE.GG — Electron shell.
// Serves the built Vite app over a custom app:// scheme so the SPA's absolute
// asset paths (/ddragon/..., /images/...) resolve without a web server.
// `electron . --dev` loads the Vite dev server instead (run `npm run dev` first).

const { app, BrowserWindow, protocol, net, shell, ipcMain,
        Tray, Menu, screen, nativeImage } = require("electron");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");
const path = require("path");
const https = require("https");
const { execFile } = require("child_process");
const { pathToFileURL } = require("url");

const DIST = path.join(__dirname, "..", "dist");
const DEV = process.argv.includes("--dev");

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { standard: true, secure: true, supportFetchAPI: true } },
]);

let mainWin = null;
let tray = null;
let isQuiting = false;      // true only when the user actually quits (tray → Quit)
let leagueWasUp = false;    // last-poll client presence, to fire once on launch
// Start hidden in the tray when auto-launched at login (the login item passes
// --hidden). A manual double-click has no such flag, so the window shows.
const START_HIDDEN = process.argv.includes("--hidden");
// Login-item identity. BOTH get and set must use the same path + args, or
// getLoginItemSettings() reports openAtLogin:false even when the entry exists
// (Windows matches on the exact command line) — which made the toggle never
// "stick". process.execPath is the installed exe in a packaged build.
const LOGIN_ITEM_OPTS = { path: process.execPath, args: ["--hidden"] };
const isStartupOn = () => app.getLoginItemSettings(LOGIN_ITEM_OPTS).openAtLogin;

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 1000,
    minHeight: 640,
    show: false,             // shown on ready-to-show (unless starting hidden)
    autoHideMenuBar: true,
    backgroundColor: "#060a0f",
    title: "FRGE.GG",
    icon: path.join(__dirname, "tray-icon.png"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.cjs"),
    },
  });
  win.once("ready-to-show", () => { if (!START_HIDDEN) win.show(); });
  // Closing the window (X) minimises to the tray instead of quitting — the app
  // keeps running in the background to watch for League. Real quit is via the
  // tray menu, which sets isQuiting first.
  win.on("close", (e) => {
    if (!isQuiting) { e.preventDefault(); win.hide(); }
  });
  // external links go to the default browser, not a new Electron window —
  // but only http/https, so a compromised/untrusted page (e.g. future ad
  // content) can't invoke dangerous URI schemes via shell.openExternal.
  win.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const proto = new URL(url).protocol;
      if (proto === "http:" || proto === "https:") shell.openExternal(url);
    } catch { /* malformed URL — ignore */ }
    return { action: "deny" };
  });
  // Never let navigation leave the app bundle / dev server. Parse and compare
  // origin/host exactly (startsWith would accept spoofs like
  // "http://localhost:5173@attacker.example/" or "app://attacker/"), and guard
  // BOTH will-navigate and will-redirect — a server-side 302 bypasses
  // will-navigate, so it needs the same allowlist.
  const isInAppUrl = (url) => {
    try {
      const u = new URL(url);
      return DEV ? u.origin === "http://localhost:5173"
                 : (u.protocol === "app:" && u.host === "-");
    } catch { return false; }
  };
  const blockOffAppNav = (e, url) => { if (!isInAppUrl(url)) e.preventDefault(); };
  win.webContents.on("will-navigate", blockOffAppNav);
  win.webContents.on("will-redirect", blockOffAppNav);
  win.loadURL(DEV ? "http://localhost:5173" : "app://-/");
  mainWin = win;
  win.on("closed", () => { if (mainWin === win) mainWin = null; });
}

// Place the window for playing alongside League: on a second monitor if there is
// one (League usually lives on the primary), otherwise docked to the right edge
// of the single screen so it sits beside the client.
function positionWindow(win) {
  const displays = screen.getAllDisplays();
  const primary = screen.getPrimaryDisplay();
  if (displays.length > 1) {
    const secondary = displays.find((d) => d.id !== primary.id) || primary;
    const wa = secondary.workArea;
    const w = Math.min(1500, wa.width);
    const h = Math.min(950, wa.height);
    win.setBounds({
      x: Math.round(wa.x + (wa.width - w) / 2),
      y: Math.round(wa.y + (wa.height - h) / 2),
      width: w, height: h,
    });
  } else {
    const wa = primary.workArea;
    const w = Math.max(560, Math.round(wa.width * 0.42));
    win.setBounds({ x: wa.x + wa.width - w, y: wa.y, width: w, height: wa.height });
  }
}

// League just launched — bring FRGE forward and position it beside the client.
function revealForLeague() {
  if (!mainWin || mainWin.isDestroyed()) createWindow();
  positionWindow(mainWin);
  if (mainWin.isMinimized()) mainWin.restore();
  mainWin.show();
  mainWin.focus();
}

function showWindow() {
  if (!mainWin || mainWin.isDestroyed()) createWindow();
  if (mainWin.isMinimized()) mainWin.restore();
  mainWin.show();
  mainWin.focus();
}

function createTray() {
  if (tray) return;
  const icon = nativeImage.createFromPath(path.join(__dirname, "tray-icon.png"));
  tray = new Tray(icon);
  tray.setToolTip("FRGE.GG — League companion");
  const rebuildMenu = () => {
    const atLogin = isStartupOn();
    tray.setContextMenu(Menu.buildFromTemplate([
      { label: "Open FRGE.GG", click: showWindow },
      { type: "separator" },
      {
        label: "Launch on startup", type: "checkbox", checked: atLogin,
        click: (item) => { setStartup(item.checked); },
      },
      { type: "separator" },
      { label: "Quit FRGE.GG", click: () => { isQuiting = true; app.quit(); } },
    ]));
  };
  rebuildMenu();
  tray.on("click", showWindow);          // left-click opens (Windows convention)
  tray.on("double-click", showWindow);
  tray._rebuildMenu = rebuildMenu;       // so the startup toggle can refresh the tick
}

// Register/'unregister the login item (Windows). Only meaningful in the packaged
// app; in dev it would point at the electron binary, so we skip the actual write.
function setStartup(enabled) {
  // Only write a login item from the packaged app — in dev process.execPath is
  // the Electron binary, which we don't want auto-starting.
  if (app.isPackaged) app.setLoginItemSettings({ openAtLogin: !!enabled, ...LOGIN_ITEM_OPTS });
  if (tray && tray._rebuildMenu) tray._rebuildMenu();
  return isStartupOn();
}

// module scripts are blocked without a proper MIME type, so map it explicitly
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".txt": "text/plain",
  ".woff": "font/woff", ".woff2": "font/woff2",
};

// ── LCU (League Client) bridge ───────────────────────────────────────────────
// Discover the running client's port + auth token. The LeagueClientUx process
// carries them on its command line (--app-port / --remoting-auth-token), which
// works regardless of where League is installed (no lockfile path guessing).
function getLcuCreds() {
  return new Promise((resolve, reject) => {
    const ps =
      "Get-CimInstance Win32_Process -Filter \"name='LeagueClientUx.exe'\" " +
      "| Select-Object -ExpandProperty CommandLine";
    execFile(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-Command", ps],
      { windowsHide: true, timeout: 8000 },
      (err, stdout) => {
        if (err) return reject(new Error("Could not query processes: " + err.message));
        const cmd = String(stdout || "");
        const port = cmd.match(/--app-port=(\d+)/)?.[1];
        const token = cmd.match(/--remoting-auth-token=([\w-]+)/)?.[1];
        if (!port || !token)
          return reject(new Error("League client not running (open League first)."));
        resolve({ port, token });
      }
    );
  });
}

// Cache creds — querying the process list is ~hundreds of ms, too slow to run
// on every poll. Refresh is throttled while disconnected; cleared on a dropped
// connection so a client restart is picked up.
let lcuCreds = null;
let lastCredTry = 0;
async function getCreds({ force = false } = {}) {
  if (lcuCreds && !force) return lcuCreds;
  const now = Date.now();
  if (!force && now - lastCredTry < 4000) return null; // don't spam powershell
  lastCredTry = now;
  try { lcuCreds = await getLcuCreds(); } catch { lcuCreds = null; }
  return lcuCreds;
}

// One authenticated LCU request over the client's self-signed HTTPS cert.
function lcu(method, apiPath, { port, token }, body) {
  return new Promise((resolve, reject) => {
    const data = body != null ? JSON.stringify(body) : null;
    const req = https.request(
      {
        hostname: "127.0.0.1",
        port,
        path: apiPath,
        method,
        rejectUnauthorized: false, // client uses a self-signed cert
        headers: {
          Authorization: "Basic " + Buffer.from("riot:" + token).toString("base64"),
          Accept: "application/json",
          ...(data ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) } : {}),
        },
      },
      (res) => {
        let out = "";
        res.on("data", (c) => (out += c));
        res.on("end", () => {
          let parsed = null;
          try { parsed = out ? JSON.parse(out) : null; } catch { parsed = out; }
          resolve({ status: res.statusCode, body: parsed });
        });
      }
    );
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

// Any id interpolated into an LCU request path must be a real non-negative
// integer, so nothing user- or response-supplied can inject into the path. The
// typeof guard is essential: Number(false)/Number(null)/Number("") all coerce to
// 0 and Number(true) to 1, so without it, junk renderer input becomes a "valid"
// id. (>= 0 not > 0: LCU champ-select action ids are 0-indexed in blind pick.)
const posInt = (v) => {
  if (typeof v !== "number" && typeof v !== "string") return null;
  const n = Number(v);
  return Number.isSafeInteger(n) && n >= 0 ? n : null;
};

// Apply a build: replace the current rune page and push the item set.
// Runes are the reliable, high-value part; the item set is best-effort.
ipcMain.handle("frge:apply-build", async (_e, payload) => {
  const { runePage, itemSet } = payload || {};
  try {
    const creds = (await getCreds()) || (await getCreds({ force: true }));
    if (!creds) throw new Error("League client not running (open League first).");

    // ── Runes: delete the live page, then create ours as current ────────────
    let runeStatus = null;
    if (runePage) {
      const cur = await lcu("GET", "/lol-perks/v1/currentpage", creds);
      const curId = posInt(cur.body?.id);
      if (cur.status === 200 && curId != null && cur.body.isDeletable !== false) {
        await lcu("DELETE", `/lol-perks/v1/pages/${curId}`, creds);
      }
      const made = await lcu("POST", "/lol-perks/v1/pages", creds, runePage);
      runeStatus = made.status;
    }

    // ── Item set: fetch summoner id, merge our set into the existing list ────
    let itemStatus = null;
    if (itemSet) {
      const summ = await lcu("GET", "/lol-summoner/v1/current-summoner", creds);
      const sid = summ.status === 200 ? posInt(summ.body?.summonerId) : null;
      if (sid != null) {
        const existing = await lcu("GET", `/lol-item-sets/v1/item-sets/${sid}/sets`, creds);
        const prev = existing.status === 200 && existing.body ? existing.body : {};
        const kept = Array.isArray(prev.itemSets)
          ? prev.itemSets.filter((s) => !String(s?.title || "").startsWith("FRGE.GG"))
          : [];
        const put = await lcu("PUT", `/lol-item-sets/v1/item-sets/${sid}/sets`, creds, {
          ...prev,
          accountId: prev.accountId ?? 0,
          timestamp: Date.now(),
          itemSets: [itemSet, ...kept],
        });
        itemStatus = put.status;
      }
    }

    const ok = runeStatus == null || runeStatus < 300;
    return { ok, runeStatus, itemStatus };
  } catch (err) {
    return { ok: false, error: err.message };
  }
});

// ── Champ select: poll the session and push a compact summary to the renderer ─
function summarizeChampSelect(s) {
  const meId = s.localPlayerCellId;
  const flat = [].concat(...(s.actions || []));
  const me = (s.myTeam || []).find((p) => p.cellId === meId) || {};
  const myPick = flat.find((a) => a.actorCellId === meId && a.type === "pick");
  const myBan = flat.find((a) => a.actorCellId === meId && a.type === "ban");
  const banned = new Set();
  for (const a of flat) if (a.type === "ban" && a.completed && a.championId) banned.add(a.championId);
  for (const id of (s.bans?.myTeamBans || [])) banned.add(id);
  for (const id of (s.bans?.theirTeamBans || [])) banned.add(id);
  const trim = (p) => ({
    cellId: p.cellId,
    championId: p.championId || 0,
    championPickIntent: p.championPickIntent || 0,
    assignedPosition: p.assignedPosition || "",
  });
  return {
    active: true,
    phase: s.timer?.phase || null,
    localCellId: meId,
    championId: me.championId || 0, // locked in
    championPickIntent: me.championPickIntent || 0, // hovered
    assignedPosition: me.assignedPosition || "",
    pickActionId: myPick ? myPick.id : null,
    pickCompleted: myPick ? !!myPick.completed : false,
    isPickInProgress: myPick ? (!!myPick.isInProgress && !myPick.completed) : false,
    banActionId: myBan ? myBan.id : null,
    banCompleted: myBan ? !!myBan.completed : false,
    isBanInProgress: myBan ? (!!myBan.isInProgress && !myBan.completed) : false,
    bannedChampionIds: [...banned],
    myTeam: (s.myTeam || []).map(trim),
    theirTeam: (s.theirTeam || []).map(trim),
  };
}

function sendChampSelect(data) {
  if (mainWin && !mainWin.isDestroyed()) mainWin.webContents.send("frge:champ-select", data);
}

let pollBusy = false;
async function pollChampSelect() {
  if (pollBusy || !mainWin || mainWin.isDestroyed()) return;
  pollBusy = true;
  try {
    const creds = await getCreds();
    // League just came up (client detected after being absent) → bring FRGE
    // forward beside it. Fires once per launch; hiding it again won't re-trigger.
    const up = !!creds;
    if (up && !leagueWasUp) revealForLeague();
    leagueWasUp = up;
    if (!creds) { sendChampSelect({ active: false, reason: "no-client" }); return; }
    let res;
    try {
      res = await lcu("GET", "/lol-champ-select/v1/session", creds);
    } catch {
      lcuCreds = null; // client closed / connection refused
      sendChampSelect({ active: false, reason: "no-client" });
      return;
    }
    if (res.status === 404) { sendChampSelect({ active: false, reason: "not-in-select" }); return; }
    if (res.status !== 200 || !res.body) { sendChampSelect({ active: false, reason: "unavailable" }); return; }
    sendChampSelect(summarizeChampSelect(res.body));
  } finally {
    pollBusy = false;
  }
}

// Pre-hover: PATCH the local player's open pick OR ban action with a champion id.
// `type` is "pick" or "ban" — the ban path pre-selects a champion during the ban
// phase (it does not lock the ban in; the player still confirms in-client).
async function hoverAction(arg, type) {
  const championId = posInt(typeof arg === "object" ? arg?.championId : arg);
  let actionId = (typeof arg === "object" && arg?.actionId != null) ? posInt(arg.actionId) : undefined;
  if (championId == null || championId < 1) return { ok: false, error: "bad-champion" };
  if (actionId === null) return { ok: false, error: "bad-action" };
  try {
    const creds = await getCreds();
    if (!creds) return { ok: false, error: "client-not-running" };
    if (actionId == null) {
      const res = await lcu("GET", "/lol-champ-select/v1/session", creds);
      if (res.status !== 200 || !res.body) return { ok: false, error: "not-in-champ-select" };
      const meId = res.body.localPlayerCellId;
      const flat = [].concat(...(res.body.actions || []));
      const act = flat.find((a) => a.actorCellId === meId && a.type === type && !a.completed);
      if (!act) return { ok: false, error: `no-open-${type}` };
      actionId = posInt(act.id);
      if (actionId == null) return { ok: false, error: `no-open-${type}` };
    }
    const patch = await lcu(
      "PATCH", `/lol-champ-select/v1/session/actions/${actionId}`, creds, { championId }
    );
    return { ok: patch.status < 300, status: patch.status, body: patch.body };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
ipcMain.handle("frge:hover-champion", (_e, arg) => hoverAction(arg, "pick"));
ipcMain.handle("frge:hover-ban", (_e, arg) => hoverAction(arg, "ban"));

// Launch-on-startup (minimised to tray) — read/write the OS login item.
ipcMain.handle("frge:get-startup", () => isStartupOn());
ipcMain.handle("frge:set-startup", (_e, enabled) => setStartup(enabled));

// ── Auto-update (electron-updater → GitHub Releases) ─────────────────────────
// The user drives it: a button appears when an update is available, downloads on
// click, then offers a restart. autoDownload is off so nothing happens silently.
autoUpdater.logger = log;
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;
let latestUpdate = { state: "idle" }; // remembered so a late-opening window can ask
function sendUpdate(payload) {
  latestUpdate = payload;
  if (mainWin && !mainWin.isDestroyed()) mainWin.webContents.send("frge:update", payload);
}
autoUpdater.on("checking-for-update", () => sendUpdate({ state: "checking" }));
autoUpdater.on("update-available", (info) => sendUpdate({ state: "available", version: info?.version }));
autoUpdater.on("update-not-available", () => sendUpdate({ state: "none" }));
autoUpdater.on("download-progress", (p) => sendUpdate({ state: "downloading", percent: Math.round(p?.percent || 0) }));
autoUpdater.on("update-downloaded", (info) => sendUpdate({ state: "downloaded", version: info?.version }));
autoUpdater.on("error", (err) => sendUpdate({ state: "error", message: String(err?.message || err) }));

function checkForUpdates() {
  if (!app.isPackaged) return; // no updater metadata in dev
  autoUpdater.checkForUpdates().catch((e) => sendUpdate({ state: "error", message: String(e?.message || e) }));
}
ipcMain.handle("frge:version", () => app.getVersion());
ipcMain.handle("frge:update-state", () => latestUpdate);
ipcMain.handle("frge:update-check", () => { checkForUpdates(); });
ipcMain.handle("frge:update-download", () => {
  autoUpdater.downloadUpdate().catch((e) => sendUpdate({ state: "error", message: String(e?.message || e) }));
});
ipcMain.handle("frge:update-install", () => {
  isQuiting = true;
  // Destroy the tray so nothing keeps the process alive once the window closes,
  // then hand off to the installer (relaunch after install). A short force-exit
  // fallback guarantees FRGE.GG.exe is actually gone, so the NSIS installer never
  // reports "app is still running" when replacing the files.
  if (tray) { try { tray.destroy(); } catch { /* already gone */ } tray = null; }
  autoUpdater.quitAndInstall(false, true);
  setTimeout(() => app.exit(0), 1200);
});

app.whenReady().then(() => {
  protocol.handle("app", async (req) => {
    const { pathname } = new URL(req.url);
    let rel = decodeURIComponent(pathname);
    if (rel === "/" || rel === "") rel = "/index.html";
    const file = path.normalize(path.join(DIST, rel));
    // Require the resolved path to be DIST itself or strictly inside it (with a
    // separator boundary) — a bare startsWith would let "dist-evil" slip past.
    if (file !== DIST && !file.startsWith(DIST + path.sep)) {
      return new Response("Forbidden", { status: 403 });
    }
    const res = await net.fetch(pathToFileURL(file).toString());
    const type = MIME[path.extname(file).toLowerCase()];
    return type
      ? new Response(res.body, { status: res.status, headers: { "Content-Type": type } })
      : res;
  });
  createWindow();
  createTray();               // system-tray (hidden-icons) presence
  setInterval(pollChampSelect, 1500); // live champ-select sync + League-launch watch
  setTimeout(checkForUpdates, 4000);  // check for updates shortly after launch
  setInterval(checkForUpdates, 6 * 60 * 60 * 1000); // and every 6 hours
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
    else showWindow();
  });
});

app.on("before-quit", () => { isQuiting = true; });
// The window closing minimises to the tray, so the app intentionally keeps
// running with no window. But when we're actually quitting (tray → Quit, or an
// update install), the last window closing must let the process exit — otherwise
// the tray keeps FRGE.GG.exe alive and the update installer reports "app is still
// running". So only stay alive while NOT quitting.
app.on("window-all-closed", () => { if (isQuiting) app.quit(); });
