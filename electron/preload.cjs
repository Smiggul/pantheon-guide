// FRGE.GG — preload. Exposes a minimal, audited surface to the renderer.
// contextIsolation stays ON; the renderer never touches Node/LCU directly —
// it hands a plain payload to the main process, which does the client calls.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("frge", {
  isDesktop: true,
  // payload: { runePage, itemSet } from buildExport(). Resolves to a result
  // object { ok, runeStatus, itemStatus, error } — never throws to the renderer.
  applyBuild: (payload) => ipcRenderer.invoke("frge:apply-build", payload),

  // Live champ-select sync. cb receives the summary pushed ~every 1.5s:
  //   { active, phase, championId, championPickIntent, assignedPosition,
  //     pickActionId, pickCompleted, myTeam[], theirTeam[] }  (or { active:false }).
  // Returns an unsubscribe function.
  onChampSelect: (cb) => {
    const handler = (_e, data) => cb(data);
    ipcRenderer.on("frge:champ-select", handler);
    return () => ipcRenderer.removeListener("frge:champ-select", handler);
  },

  // Hover (pre-hover / pick-intent) a champion in champ select.
  //   arg: numeric championId, or { championId, actionId }.
  hoverChampion: (arg) => ipcRenderer.invoke("frge:hover-champion", arg),

  // Pre-select a champion in the ban phase (same arg shape as hoverChampion).
  hoverBan: (arg) => ipcRenderer.invoke("frge:hover-ban", arg),

  // Launch-on-startup (minimised to tray) — read/write the OS login item.
  getStartup: () => ipcRenderer.invoke("frge:get-startup"),
  setStartup: (enabled) => ipcRenderer.invoke("frge:set-startup", enabled),

  // Auto-update — subscribe to status, and drive check / download / install.
  onUpdate: (cb) => {
    const h = (_e, data) => cb(data);
    ipcRenderer.on("frge:update", h);
    return () => ipcRenderer.removeListener("frge:update", h);
  },
  getVersion: () => ipcRenderer.invoke("frge:version"),
  getUpdateState: () => ipcRenderer.invoke("frge:update-state"),
  checkUpdate: () => ipcRenderer.invoke("frge:update-check"),
  downloadUpdate: () => ipcRenderer.invoke("frge:update-download"),
  installUpdate: () => ipcRenderer.invoke("frge:update-install"),
});
