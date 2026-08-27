import { JUNGLE_FUNDAMENTALS, JUNGLE_CLEARS } from "./data/jungleClears.js";

// ─────────────────────────────────────────────────────────────────────────────
//  JunglePanel — a right-edge slide-out "jungle coach" drawer. Shows the current
//  champion's seeded first-clear + gank plan (when it's a jungler) and evergreen
//  jungle macro fundamentals. Toggled from a tab on the far right of the screen.
// ─────────────────────────────────────────────────────────────────────────────
export default function JunglePanel({ S, champDd, champName, open, onClose }) {
  const clear = champDd ? JUNGLE_CLEARS[champDd] : null;
  const label = { fontSize: "9px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: S.goldDim };
  const val = { fontSize: "12px", fontWeight: 700, color: "#e8e8ea" };
  return (
    <>
      {/* Backdrop — click to close */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, zIndex: 125,
        background: "rgba(0,0,0,.45)", opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none", transition: "opacity .25s",
      }} />
      {/* Drawer */}
      <aside role="dialog" aria-label="Jungle coach" style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 126,
        width: "min(380px, 92vw)", display: "flex", flexDirection: "column",
        background: "linear-gradient(180deg, #12161c, #0b0e13)",
        borderLeft: `1px solid ${S.gold}33`, boxShadow: "-12px 0 40px rgba(0,0,0,.5)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .3s cubic-bezier(.4,0,.2,1)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "15px 18px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <img src="/images/roles/position-jungle.svg" alt="" draggable={false}
              style={{ width: "18px", height: "18px", opacity: .9 }} />
            <span style={{ fontSize: "14px", fontWeight: 900, letterSpacing: ".5px", color: "#fff", textTransform: "uppercase" }}>Jungle Coach</span>
          </span>
          <button onClick={onClose} title="Close" style={{ background: "none", border: "none",
            color: "rgba(255,255,255,.5)", cursor: "pointer", fontSize: "22px", lineHeight: 1, padding: "0 4px" }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px" }}>
          {clear && (
            <div style={{ marginBottom: "18px", padding: "14px", borderRadius: "12px",
              border: `1px solid ${S.gold}30`, background: `${S.gold}0d` }}>
              <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase",
                color: S.gold, marginBottom: "9px" }}>{champName} — optimal first clear</div>
              <div style={{ display: "flex", gap: "18px", marginBottom: "9px", flexWrap: "wrap" }}>
                <span><span style={label}>Start</span><br /><span style={val}>{clear.start} buff</span></span>
                <span><span style={label}>First play</span><br /><span style={val}>{clear.gank}</span></span>
              </div>
              <div style={{ fontSize: "12.5px", color: "#f0d98a", lineHeight: 1.5, marginBottom: "9px", fontWeight: 600 }}>{clear.route}</div>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(200,204,209,.62)", lineHeight: 1.5, fontStyle: "italic" }}>{clear.note}</p>
            </div>
          )}

          <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase",
            color: S.goldDim, marginBottom: "12px" }}>Jungle fundamentals</div>
          {JUNGLE_FUNDAMENTALS.map((t, i) => (
            <div key={i} style={{ marginBottom: "13px", paddingBottom: "13px",
              borderBottom: i < JUNGLE_FUNDAMENTALS.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "baseline", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", fontWeight: 900, color: S.orange, flexShrink: 0 }}>{i + 1}.</span>
                <span style={{ fontSize: "12.5px", fontWeight: 800, color: "#fff" }}>{t.title}</span>
              </div>
              <p style={{ margin: "0 0 0 16px", fontSize: "11.5px", color: "rgba(200,204,209,.72)", lineHeight: 1.55 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
