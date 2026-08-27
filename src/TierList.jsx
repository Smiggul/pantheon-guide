import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  TierList — a full-page champion tier list. Deliberately not a generic
//  S/A/B row list: each tier is a premium "band" with a glowing tier glyph and
//  a flowing grid of champion tiles that stagger in on load / role switch.
//
//  Data is fetched at runtime from tiers.json so it can refresh on a cron
//  independent of app releases: try the live raw-GitHub copy first (always the
//  latest the workflow committed), fall back to the bundled copy when offline.
// ─────────────────────────────────────────────────────────────────────────────

const ROLES = ["Top", "Jungle", "Mid", "Bot", "Support"];
const ROLE_ICON = {
  Top: "/images/roles/position-top.svg", Jungle: "/images/roles/position-jungle.svg",
  Mid: "/images/roles/position-middle.svg", Bot: "/images/roles/position-bottom.svg",
  Support: "/images/roles/position-utility.svg",
};

// Elo brackets, OP.GG-style. `key` must match the bracket keys in tiers.json.
const BRACKETS = [
  { key: "all",  label: "Overall" },
  { key: "high", label: "High Elo" },
  { key: "low",  label: "Low Elo" },
];

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  EDIT TIER HEADINGS HERE.  `key` is the big glyph, `sub` is the line under │
// │  it, `accent`/`glow` are the colour. Order top→bottom is display order.    │
// │  The `key` must match the tier names used in tiers.json (OP, S, A, B, C).  │
// └──────────────────────────────────────────────────────────────────────────┘
const TIERS = [
  { key: "OP", accent: "#ef4d5a", glow: "rgba(239,77,90,.55)",  sub: '"balanced"' },     // the meme ;)
  { key: "S",  accent: "#e9c25c", glow: "rgba(233,194,92,.55)", sub: "Elite" },
  { key: "A",  accent: "#e8934a", glow: "rgba(232,147,74,.45)", sub: "Strong" },
  { key: "B",  accent: "#9aa7b4", glow: "rgba(154,167,180,.30)", sub: "Okay" },
  { key: "C",  accent: "#6b7682", glow: "rgba(107,118,130,.22)", sub: "Not Great" },
];

const REMOTE = "https://raw.githubusercontent.com/Smiggul/pantheon-guide/frge-gg/public/tiers.json";
const LOCAL = "/tiers.json";

export default function TierList({ S, champImg, onPick, onClose }) {
  const [role, setRole] = useState("Top");
  const [data, setData] = useState(null);
  const [state, setState] = useState("loading"); // loading | ready | error
  const [shown, setShown] = useState(false);      // drives the staggered reveal
  const [q, setQ] = useState("");
  const [bracket, setBracket] = useState("all");  // all | high | low (elo)
  const backdrop = "heat";                         // chosen tier-list treatment: the molten Heat Ladder

  useEffect(() => {
    let cancelled = false;
    const done = (j) => { if (!cancelled) { setData(j); setState("ready"); } };
    fetch(REMOTE, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .catch(() => fetch(LOCAL).then((r) => r.json()))
      .then(done)
      .catch(() => { if (!cancelled) setState("error"); });
    return () => { cancelled = true; };
  }, []);

  // Re-run the stagger on role / bracket change.
  useEffect(() => {
    setShown(false);
    const t = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    return () => cancelAnimationFrame(t);
  }, [role, state, bracket]);

  // New format nests roles under brackets:{all,high,low}; fall back to the old
  // flat {roles} shape (treated as "Overall") so older tiers.json still renders.
  const bracketData = data?.brackets?.[bracket] || data?.brackets?.all || data?.roles || {};
  const roleData = bracketData?.[role] || {};
  const query = q.trim().toLowerCase();
  const matches = (name) => !query || name.toLowerCase().includes(query);

  // Flat index so the stagger delay is continuous across tiers.
  let flatIdx = 0;

  // Win-rate → colour band. Green = winning, gold = even, red = losing.
  const wrColor = (wr) =>
    wr >= 51 ? "#4fd18a" : wr >= 49.5 ? "#e9c25c" : "#e8776f";

  const tile = (name) => {
    const i = flatIdx++;
    const src = champImg(name);
    const wr = roleData.wr?.[name];
    return (
      <button key={name} onClick={() => onPick(name)} title={`Open ${name}'s build`}
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "9px",
          width: "72px", padding: "6px 4px 8px", borderRadius: "12px", cursor: "pointer",
          background: "transparent", border: "1px solid transparent",
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0) scale(1)" : "translateY(14px) scale(.92)",
          transition: "opacity .42s cubic-bezier(.34,1.4,.5,1), transform .42s cubic-bezier(.34,1.4,.5,1), background .16s, border-color .16s",
          transitionDelay: `${Math.min(i, 40) * 22}ms`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,.05)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,.10)";
          const img = e.currentTarget.firstChild;
          img.style.transform = "scale(1.09) translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "transparent";
          const img = e.currentTarget.firstChild;
          img.style.transform = "none";
        }}>
        <span style={{
          position: "relative", width: "54px", height: "54px", borderRadius: "50%",
          display: "block", transition: "transform .18s cubic-bezier(.34,1.5,.6,1)",
        }}>
          {src
            ? <img src={src} alt={name} draggable={false}
                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover",
                  border: "2px solid rgba(0,0,0,.5)" }} />
            : <span style={{ width: "100%", height: "100%", borderRadius: "50%", display: "block",
                background: "rgba(255,255,255,.06)" }} />}
          {wr != null && (
            <span title={`${wr}% win rate`} style={{
              position: "absolute", bottom: "-5px", left: "50%", transform: "translateX(-50%)",
              padding: "1px 5px", borderRadius: "7px", fontSize: "9px", fontWeight: 800,
              lineHeight: 1.4, whiteSpace: "nowrap", color: "#12151a",
              background: wrColor(wr), boxShadow: "0 2px 6px rgba(0,0,0,.45)",
              border: "1.5px solid rgba(18,21,26,.9)" }}>{wr}%</span>
          )}
        </span>
        <span style={{ fontSize: "9.5px", color: "rgba(255,255,255,.62)", textAlign: "center",
          lineHeight: 1.15, maxWidth: "70px", overflow: "hidden", textOverflow: "ellipsis",
          whiteSpace: "nowrap", width: "100%" }}>{name}</span>
      </button>
    );
  };

  return (
    <div style={{ minHeight: "100%", position: "relative",
      background: "linear-gradient(180deg, rgba(239,77,90,.10) 0%, rgba(232,147,74,.06) 22%, rgba(233,194,92,.03) 44%, transparent 62%), radial-gradient(1000px 500px at 50% -10%, rgba(255,107,53,.10), transparent 60%)",
      padding: "22px clamp(16px,4vw,48px) 60px" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        flexWrap: "wrap", gap: "14px", marginBottom: "20px" }}>
        <div>
          <button onClick={onClose} style={{ display: "inline-flex", alignItems: "center", gap: "6px",
            background: "none", border: "none", color: S.goldDim, cursor: "pointer", fontSize: "12px",
            fontWeight: 700, padding: 0, marginBottom: "8px" }}>← Back to builds</button>
          <h1 style={{ margin: 0, fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, letterSpacing: "-.5px",
            lineHeight: 1, color: "#fff", textTransform: "uppercase" }}>
            Champion <span style={{
              background: `linear-gradient(100deg, ${S.gold}, ${S.orange})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tier List</span>
          </h1>
          <div style={{ marginTop: "8px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1px", color: "#15181d",
              background: `linear-gradient(100deg, ${S.gold}, ${S.orange})`, padding: "3px 9px",
              borderRadius: "20px", textTransform: "uppercase" }}>Patch {data?.patch || "—"}</span>
            <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1px", color: "rgba(255,255,255,.72)",
              background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", padding: "3px 9px",
              borderRadius: "20px", textTransform: "uppercase" }}>{data?.region || "EUW"}</span>
            <span style={{ fontSize: "10.5px", color: "rgba(255,255,255,.35)" }}>
              {state === "ready" && data?.updated
                ? `${/seed/i.test(data?.source || "") ? "Seed" : "Live"} · updated ${data.updated}`
                : state === "loading" ? "Loading live data…" : "Offline"}
            </span>
          </div>
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter champions…"
          style={{ width: "min(220px,42vw)", padding: "8px 12px", fontSize: "12px", borderRadius: "9px",
            border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.04)", color: "#e8e8ea", outline: "none" }} />
      </div>

      {/* Selectors — roles on the left, elo bracket on the right (OP.GG-style) */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: "12px", flexWrap: "wrap", marginBottom: "22px" }}>
        {/* Role selector — premium segmented pills */}
        <div style={{ display: "inline-flex", gap: "4px", padding: "4px", borderRadius: "12px",
          background: "rgba(0,0,0,.28)", border: "1px solid rgba(255,255,255,.07)" }}>
          {ROLES.map((r) => {
            const on = role === r;
            return (
              <button key={r} onClick={() => setRole(r)} style={{
                display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 14px", borderRadius: "9px",
                fontSize: "12px", fontWeight: 800, letterSpacing: ".3px", cursor: "pointer", border: "none",
                textTransform: "uppercase", transition: "all .18s",
                background: on ? `linear-gradient(100deg, ${S.gold}, ${S.orange})` : "transparent",
                color: on ? "#15181d" : "rgba(255,255,255,.55)",
                boxShadow: on ? `0 4px 16px ${S.gold}44` : "none" }}>
                <img src={ROLE_ICON[r]} alt="" style={{ width: "15px", height: "15px",
                  filter: on ? "brightness(0) saturate(100%)" : "invert(72%) sepia(6%) saturate(200%) brightness(95%)" }} />
                {r}
              </button>
            );
          })}
        </div>
        {/* Elo bracket selector */}
        <div style={{ display: "inline-flex", gap: "4px", padding: "4px", borderRadius: "12px",
          background: "rgba(0,0,0,.28)", border: "1px solid rgba(255,255,255,.07)" }}>
          {BRACKETS.map((b) => {
            const on = bracket === b.key;
            return (
              <button key={b.key} onClick={() => setBracket(b.key)} style={{
                padding: "7px 14px", borderRadius: "9px", fontSize: "12px", fontWeight: 800,
                letterSpacing: ".3px", cursor: "pointer", border: "none", textTransform: "uppercase",
                transition: "all .18s", whiteSpace: "nowrap",
                background: on ? `linear-gradient(100deg, ${S.gold}, ${S.orange})` : "transparent",
                color: on ? "#15181d" : "rgba(255,255,255,.55)",
                boxShadow: on ? `0 4px 16px ${S.gold}44` : "none" }}>
                {b.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tier bands */}
      {state === "error" && (
        <div style={{ color: "rgba(255,255,255,.5)", fontSize: "13px", padding: "40px 0" }}>
          Couldn't load tier data. It refreshes from live sites on a schedule — try again shortly.
        </div>
      )}
      {state !== "error" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {TIERS.map((t) => {
            const champs = (roleData[t.key] || []).filter(matches);
            return (
              <div key={t.key} style={{ display: "flex", alignItems: "stretch", gap: "0",
                borderRadius: "16px", overflow: "hidden",
                border: backdrop === "heat" ? `1px solid ${t.accent}2e` : "1px solid rgba(255,255,255,.06)",
                background: backdrop === "heat"
                  ? `linear-gradient(180deg, ${t.accent}1e, ${t.accent}07)`
                  : "linear-gradient(180deg, rgba(255,255,255,.022), rgba(255,255,255,.005))",
                boxShadow: backdrop === "heat" ? `0 0 30px ${t.accent}1a, inset 0 1px 0 ${t.accent}22` : "none",
                minHeight: "96px" }}>
                {/* Tier glyph */}
                <div style={{ position: "relative", flexShrink: 0, width: "88px",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px",
                  background: `linear-gradient(160deg, ${t.accent}2a, ${t.accent}0d)`,
                  borderRight: `1px solid ${t.accent}33`,
                  boxShadow: `inset 3px 0 0 ${t.accent}` }}>
                  <span style={{ fontSize: t.key.length > 1 ? "27px" : "40px", fontWeight: 900,
                    lineHeight: 1, color: t.accent, textShadow: `${backdrop === "heat" ? "0 0 34px" : "0 0 22px"} ${t.glow}`, fontStyle: "italic" }}>{t.key}</span>
                  <span style={{ fontSize: "8.5px", fontWeight: 700, letterSpacing: "1px",
                    textTransform: "uppercase", color: `${t.accent}cc` }}>{t.sub}</span>
                </div>
                {/* Champion tiles */}
                <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "2px", alignItems: "flex-start",
                  padding: "10px 8px" }}>
                  {champs.length
                    ? champs.map(tile)
                    : <span style={{ alignSelf: "center", padding: "0 10px", fontSize: "11px",
                        color: "rgba(255,255,255,.28)" }}>{query ? "No matches in this tier" : "—"}</span>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: "26px", fontSize: "10px", color: "rgba(255,255,255,.28)" }}>
        {bracket === "all" ? "Overall" : bracket === "high" ? "High Elo (Master+)" : "Low Elo (Emerald & below)"}
        {" · "}{data?.region || "EUW"} · win rate + presence, refreshed independently of app releases.
        Click any champion to open their FRGE build.{data?.source ? ` · ${data.source}` : ""}
      </div>
    </div>
  );
}
