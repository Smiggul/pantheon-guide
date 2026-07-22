// FRGE.GG — preload. Exposes a minimal, audited surface to the renderer.
// contextIsolation stays ON; the renderer never touches Node/LCU directly —
// it hands a plain payload to the main process, which does the client calls.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("frge", {
  isDesktop: true,
  // payload: { runePage, itemSet } from buildExport(). Resolves to a result
  // object { ok, runeStatus, itemStatus, error } — never throws to the renderer.
  applyBuild: (payload) => ipcRenderer.invoke("frge:apply-build", payload),
});
