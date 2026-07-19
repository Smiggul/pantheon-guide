// FRGE.GG — Electron shell.
// Serves the built Vite app over a custom app:// scheme so the SPA's absolute
// asset paths (/ddragon/..., /images/...) resolve without a web server.
// `electron . --dev` loads the Vite dev server instead (run `npm run dev` first).

const { app, BrowserWindow, protocol, net, shell } = require("electron");
const path = require("path");
const { pathToFileURL } = require("url");

const DIST = path.join(__dirname, "..", "dist");
const DEV = process.argv.includes("--dev");

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { standard: true, secure: true, supportFetchAPI: true } },
]);

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 1000,
    minHeight: 640,
    autoHideMenuBar: true,
    backgroundColor: "#060a0f",
    title: "FRGE.GG",
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  // external links go to the default browser, not a new Electron window
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
  win.loadURL(DEV ? "http://localhost:5173" : "app://-/");
}

// module scripts are blocked without a proper MIME type, so map it explicitly
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".txt": "text/plain",
  ".woff": "font/woff", ".woff2": "font/woff2",
};

app.whenReady().then(() => {
  protocol.handle("app", async (req) => {
    const { pathname } = new URL(req.url);
    let rel = decodeURIComponent(pathname);
    if (rel === "/" || rel === "") rel = "/index.html";
    const file = path.normalize(path.join(DIST, rel));
    if (!file.startsWith(DIST)) return new Response("Forbidden", { status: 403 });
    const res = await net.fetch(pathToFileURL(file).toString());
    const type = MIME[path.extname(file).toLowerCase()];
    return type
      ? new Response(res.body, { status: res.status, headers: { "Content-Type": type } })
      : res;
  });
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => app.quit());
