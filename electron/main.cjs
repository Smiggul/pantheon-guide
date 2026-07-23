// FRGE.GG — Electron shell.
// Serves the built Vite app over a custom app:// scheme so the SPA's absolute
// asset paths (/ddragon/..., /images/...) resolve without a web server.
// `electron . --dev` loads the Vite dev server instead (run `npm run dev` first).

const { app, BrowserWindow, protocol, net, shell, ipcMain } = require("electron");
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

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 1000,
    minHeight: 640,
    autoHideMenuBar: true,
    backgroundColor: "#060a0f",
    title: "FRGE.GG",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.cjs"),
    },
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
  // Never let in-page navigation leave the app bundle / dev server.
  win.webContents.on("will-navigate", (e, url) => {
    const ok = DEV ? url.startsWith("http://localhost:5173") : url.startsWith("app://");
    if (!ok) e.preventDefault();
  });
  win.loadURL(DEV ? "http://localhost:5173" : "app://-/");
  mainWin = win;
  win.on("closed", () => { if (mainWin === win) mainWin = null; });
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

// Any id interpolated into an LCU request path must be a positive integer, so
// nothing user- or response-supplied can inject into the path.
const posInt = (v) => (Number.isInteger(Number(v)) && Number(v) >= 0 ? Number(v) : null);

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

// Pre-hover / hover: PATCH the local player's pick action with a champion id.
ipcMain.handle("frge:hover-champion", async (_e, arg) => {
  const championId = posInt(typeof arg === "object" ? arg?.championId : arg);
  let actionId = (typeof arg === "object" && arg?.actionId != null) ? posInt(arg.actionId) : undefined;
  if (championId == null) return { ok: false, error: "bad-champion" };
  if (actionId === null) return { ok: false, error: "bad-action" };
  try {
    const creds = await getCreds();
    if (!creds) return { ok: false, error: "client-not-running" };
    if (actionId == null) {
      const res = await lcu("GET", "/lol-champ-select/v1/session", creds);
      if (res.status !== 200 || !res.body) return { ok: false, error: "not-in-champ-select" };
      const meId = res.body.localPlayerCellId;
      const flat = [].concat(...(res.body.actions || []));
      const act = flat.find((a) => a.actorCellId === meId && a.type === "pick" && !a.completed);
      if (!act) return { ok: false, error: "no-open-pick" };
      actionId = posInt(act.id);
      if (actionId == null) return { ok: false, error: "no-open-pick" };
    }
    const patch = await lcu(
      "PATCH", `/lol-champ-select/v1/session/actions/${actionId}`, creds, { championId }
    );
    return { ok: patch.status < 300, status: patch.status, body: patch.body };
  } catch (err) {
    return { ok: false, error: err.message };
  }
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
  setInterval(pollChampSelect, 1500); // live champ-select sync
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => app.quit());
