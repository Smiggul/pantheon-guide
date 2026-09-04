import { CHAMPS } from "./data/champs/index.js";
import { matchup, THREAT_LABEL, WEAKNESS_LABEL } from "./data/counterPicker.js";

// Full matchup spread for the selected champion in a role: who they can play
// against (favourable), even lanes, and who hard-counters them. Rendered as a
// full-page overlay like the Tier List.
export default function CounterPicker({ champ, role, champImg, onClose, onPick, S }) {
  const lanesOf = (c) => c.roles ? Object.keys(c.roles) : (c.lanes || []);
  const pool = CHAMPS.filter((c) => c.dd !== champ.dd && lanesOf(c).includes(role));

  const rows = pool.map((c) => ({ c, ...matchup(champ.dd, c.dd) }));
  const favourable = rows.filter((r) => r.score > 0).sort((a, b) => b.score - a.score);
  const even       = rows.filter((r) => r.score === 0);
  const hard       = rows.filter((r) => r.score < 0).sort((a, b) => a.score - b.score);

  const bans = new Set(champ.roles?.[role]?.bans || champ.bans || []);

  const gold = S?.gold || "#D4AF37";
  const dim = "#8A8078";

  // One named ability interaction: the mechanism, when it applies, and the cue
  // that actually changes how you play the lane.
  const Note = ({ n, good }) => {
    const col = good ? "#8fe6a8" : "#f0a39d";
    const head = good ? "#b6f0c6" : "#f6bdb8";
    const rule = good ? "rgba(87,217,119,.45)" : "rgba(217,83,79,.45)";
    return (
      <div style={{ fontSize:"10px", color:col, lineHeight:1.45, borderLeft:`2px solid ${rule}`, paddingLeft:"6px" }}>
        <b style={{ color:head }}>{n.abilities.join(" · ")}</b>
        {n.phase && (
          <span style={{ marginLeft:"5px", fontSize:"8px", fontWeight:800, letterSpacing:".1em",
            textTransform:"uppercase", padding:"1px 4px", borderRadius:"3px",
            color: n.phase === "early" ? "#E0A93B" : "#7FB2E8",
            border: `1px solid ${n.phase === "early" ? "rgba(224,169,59,.5)" : "rgba(127,178,232,.5)"}` }}>
            {n.phase} game
          </span>
        )}
        <br />{n.why}
        {n.cue && (
          <div style={{ marginTop:"4px", color:"#C7C2BA", fontStyle:"italic" }}>
            <b style={{ color:"#E8E3DA", fontStyle:"normal" }}>Watch for:</b> {n.cue}
          </div>
        )}
      </div>
    );
  };

  const Tile = ({ r, tone }) => {
    const c = r.c;
    const border = tone === "good" ? "rgba(87,217,119,.4)" : tone === "bad" ? "rgba(217,83,79,.45)" : "rgba(255,255,255,.1)";
    const scoreCol = tone === "good" ? "#57d977" : tone === "bad" ? "#e8685f" : "#9aa0a6";
    const isBan = [...bans].some((b) => b === c.display);
    return (
      <div onClick={() => onPick?.(c)} title={`Switch to ${c.display}`}
        style={{ cursor:"pointer", borderRadius:"12px", overflow:"hidden", position:"relative",
          border:`1px solid ${border}`, background:"linear-gradient(180deg,rgba(255,255,255,.03),rgba(0,0,0,.15))",
          transition:"transform .15s, box-shadow .15s" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,.45)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", padding:"9px 11px" }}>
          <img src={champImg(c.dd)} alt={c.display} draggable={false}
            style={{ width:"42px", height:"42px", borderRadius:"9px", flexShrink:0, objectFit:"cover",
              border:`1px solid ${border}` }} />
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
              <span style={{ fontSize:"13px", fontWeight:700, color:"#F5F1EA", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{c.display}</span>
              {isBan && <span title="One of this champion's hardest matchups — a recommended ban"
                style={{ fontSize:"8px", fontWeight:800, letterSpacing:".5px", color:"#e8685f",
                  border:"1px solid rgba(217,83,79,.5)", borderRadius:"4px", padding:"1px 4px" }}>BAN</span>}
            </div>
            <div style={{ fontSize:"10px", color:dim, marginTop:"2px", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
              {lanesOf(c).join(" · ")}
            </div>
          </div>
          <div className="frge-display" style={{ fontSize:"16px", color:scoreCol, flexShrink:0 }}>
            {r.score > 0 ? `+${r.score}` : r.score}
          </div>
        </div>
        {(r.youCounter.length > 0 || r.theyCounter.length > 0 ||
          r.youExploit.length > 0 || r.theyExploit.length > 0 ||
          r.youNotes?.length > 0 || r.theyNotes?.length > 0) && (
          <div style={{ padding:"0 11px 9px", display:"flex", flexDirection:"column", gap:"4px" }}>
            {/* Named ability interactions lead — they are the specific, decisive
                reasons, where the trait lines below are broad categories. */}
            {r.youNotes?.map((n, i) => <Note key={`yn${i}`} n={n} good />)}
            {r.theyNotes?.map((n, i) => <Note key={`tn${i}`} n={n} />)}
            {r.youCounter.length > 0 && (
              <div style={{ fontSize:"10px", color:"#8fe6a8", lineHeight:1.4 }}>
                ✓ You shut down their {r.youCounter.map((t) => THREAT_LABEL[t] || t).join(", ")}
              </div>
            )}
            {r.youExploit.length > 0 && (
              <div style={{ fontSize:"10px", color:"#8fe6a8", lineHeight:1.4 }}>
                ✓ They have {r.youExploit.map((w) => WEAKNESS_LABEL[w] || w).join(", ")}
              </div>
            )}
            {r.theyCounter.length > 0 && (
              <div style={{ fontSize:"10px", color:"#f0a39d", lineHeight:1.4 }}>
                ✕ They shut down your {r.theyCounter.map((t) => THREAT_LABEL[t] || t).join(", ")}
              </div>
            )}
            {r.theyExploit.length > 0 && (
              <div style={{ fontSize:"10px", color:"#f0a39d", lineHeight:1.4 }}>
                ✕ They punish you — {r.theyExploit.map((w) => WEAKNESS_LABEL[w] || w).join(", ")}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const Section = ({ title, sub, colour, rows, tone }) => (
    <div style={{ marginBottom:"26px" }}>
      <div style={{ display:"flex", alignItems:"baseline", gap:"10px", marginBottom:"12px" }}>
        <div className="frge-display" style={{ fontSize:"16px", color:colour, letterSpacing:".02em" }}>{title}</div>
        <div style={{ fontSize:"11px", color:dim }}>{sub} · {rows.length}</div>
      </div>
      {rows.length === 0
        ? <div style={{ fontSize:"12px", color:dim, fontStyle:"italic" }}>None in this role.</div>
        : <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:"12px" }}>
            {rows.map((r) => <Tile key={r.c.dd} r={r} tone={tone} />)}
          </div>}
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", padding:"0 0 60px" }}>
      <div style={{ maxWidth:"min(96vw,1500px)", margin:"0 auto", padding:"26px 24px 0" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"6px" }}>
          <img src={champImg(champ.dd)} alt={champ.display}
            style={{ width:"52px", height:"52px", borderRadius:"11px", border:`2px solid ${champ.glow}`, objectFit:"cover" }} />
          <div style={{ flex:1 }}>
            <div className="frge-display" style={{ fontSize:"26px", color:champ.glow, lineHeight:1 }}>
              {champ.display} <span style={{ color:"#F5F1EA" }}>· Counter Picker</span>
            </div>
            <div style={{ fontSize:"12px", color:dim, marginTop:"4px" }}>
              {role} matchups — trait-based. Click any champion to switch to it. Scores compare each side's threats vs the other's answers.
            </div>
          </div>
          <button onClick={onClose} className="frge-pill"
            style={{ cursor:"pointer", borderRadius:"9px", padding:"8px 16px", fontSize:"12px", fontWeight:700,
              border:`1px solid ${gold}55`, background:`${gold}18`, color:gold }}>✕ Close</button>
        </div>
        <hr style={{ height:"1px", border:0, background:"linear-gradient(90deg,transparent,rgba(255,107,53,.5),rgba(212,175,55,.3),transparent)", margin:"14px 0 24px" }} />

        <Section title="You can play against" sub="favourable — you answer more than they do"
          colour="#57d977" rows={favourable} tone="good" />
        <Section title="Hard counters" sub="they answer more than you do — respect or ban"
          colour="#e8685f" rows={hard} tone="bad" />
        <Section title="Even lanes" sub="skill matchup"
          colour="#c9c2b6" rows={even} tone="even" />
      </div>
    </div>
  );
}
