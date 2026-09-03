import { useState, useMemo } from "react";
import { CHAMPS } from "./data/champs/index.js";
import { compProfile, compInteractions, bestCountersVsComp, THREAT_LABEL } from "./data/counterPicker.js";

// ─────────────────────────────────────────────────────────────────────────────
//  DraftCoach — what the enemy team, as drafted so far, means for YOUR game.
//
//  Every other surface in FRGE answers "me vs one enemy". This answers "me vs
//  the five of them": what damage they actually deal, which of your abilities
//  already answer them, and who to pick if you are not locked yet.
//
//  It fills itself from live champ select when the client is connected, and is
//  fully usable by hand when it isn't — the enemy slots are clickable either way,
//  so it works while planning as well as while drafting.
// ─────────────────────────────────────────────────────────────────────────────
export default function DraftCoach({ champ, role, champImg, onClose, onPick, S, liveEnemies = [], isLive = false }) {
  // Enemy slots: seeded from champ select, editable by hand.
  const [manual, setManual] = useState([]);
  const [picking, setPicking] = useState(null);   // slot index being filled
  const [q, setQ] = useState("");

  const enemies = isLive && liveEnemies.length ? liveEnemies : manual;
  const enemyDds = enemies.filter(Boolean).map((c) => c.dd);

  const gold = S?.gold || "#D4AF37";
  const orange = S?.orange || "#F97316";
  const dim = "#8A8078";

  const profile = useMemo(() => (enemyDds.length ? compProfile(enemyDds) : null), [enemyDds.join(",")]);
  const inter   = useMemo(() => (enemyDds.length ? compInteractions(champ.dd, enemyDds) : null), [champ.dd, enemyDds.join(",")]);

  const lanesOf = (c) => (c.roles ? Object.keys(c.roles) : (c.lanes || []));
  const picks = useMemo(() => {
    if (!enemyDds.length) return [];
    const pool = CHAMPS.filter((c) => lanesOf(c).includes(role)).map((c) => c.dd);
    const ranked = bestCountersVsComp(enemyDds, pool);
    return ranked.slice(0, 8).map((r) => ({ ...r, champ: CHAMPS.find((c) => c.dd === r.dd) }));
  }, [enemyDds.join(","), role]);

  const setSlot = (i, c) => {
    const next = [...manual];
    next[i] = c;
    setManual(next);
    setPicking(null);
    setQ("");
  };

  const searchResults = q.trim()
    ? CHAMPS.filter((c) => c.display.toLowerCase().includes(q.trim().toLowerCase())).slice(0, 24)
    : CHAMPS.slice(0, 24);

  const Card = ({ title, children, accent }) => (
    <div className="frge-panel" style={{ background:"rgba(27,27,30,.96)", padding:"16px 18px" }}>
      <div className="frge-display" style={{ fontSize:"13px", color: accent || gold, letterSpacing:".08em",
        textTransform:"uppercase", marginBottom:"12px" }}>{title}</div>
      {children}
    </div>
  );

  const Bar = ({ label, value, total, colour }) => (
    <div style={{ marginBottom:"9px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:"11.5px", color:"#C7C2BA", marginBottom:"4px" }}>
        <span>{label}</span><span style={{ fontVariantNumeric:"tabular-nums" }}>{value} / {total}</span>
      </div>
      <div style={{ height:"7px", background:"rgba(0,0,0,.4)", borderRadius:"4px", overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${total ? (value / total) * 100 : 0}%`, background:colour, borderRadius:"4px" }} />
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", padding:"0 0 60px" }}>
      <div style={{ maxWidth:"min(96vw,1500px)", margin:"0 auto", padding:"26px 24px 0" }}>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"6px" }}>
          <img src={champImg(champ.dd)} alt={champ.display}
            style={{ width:"52px", height:"52px", borderRadius:"11px", border:`2px solid ${champ.glow}`, objectFit:"cover" }} />
          <div style={{ flex:1 }}>
            <div className="frge-display" style={{ fontSize:"26px", color:champ.glow, lineHeight:1 }}>
              {champ.display} <span style={{ color:"#F5F1EA" }}>· Draft Coach</span>
            </div>
            <div style={{ fontSize:"12px", color:dim, marginTop:"4px" }}>
              {isLive
                ? "Reading champ select live — enemy picks fill in as they lock."
                : "Add the enemy champions to see what their comp actually threatens you with."}
            </div>
          </div>
          {isLive && (
            <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:".14em", textTransform:"uppercase",
              color:"#57d977", border:"1px solid rgba(87,217,119,.5)", borderRadius:"3px", padding:"4px 9px" }}>
              ● Live
            </span>
          )}
          <button onClick={onClose} className="frge-pill"
            style={{ cursor:"pointer", padding:"8px 16px", fontSize:"12px", fontWeight:700,
              border:`1px solid ${gold}55`, background:`${gold}18`, color:gold }}>✕ Close</button>
        </div>
        <hr style={{ height:"1px", border:0, background:`linear-gradient(90deg,transparent,${orange}80,${gold}4d,transparent)`, margin:"14px 0 24px" }} />

        {/* Enemy slots */}
        <div style={{ marginBottom:"22px" }}>
          <div style={{ fontSize:"11px", letterSpacing:".18em", textTransform:"uppercase", color:dim, marginBottom:"10px" }}>
            Enemy team {isLive && "(from champ select)"}
          </div>
          <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
            {[0, 1, 2, 3, 4].map((i) => {
              const c = enemies[i];
              return (
                <button key={i} onClick={() => !isLive && setPicking(picking === i ? null : i)}
                  title={isLive ? "Filled from champ select" : c ? `Change ${c.display}` : "Add an enemy champion"}
                  className="frge-tile"
                  style={{ cursor: isLive ? "default" : "pointer", width:"92px", padding:"9px 6px",
                    background: c ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.015)",
                    border: `1px solid ${picking === i ? orange : c ? "rgba(255,255,255,.14)" : "rgba(255,255,255,.08)"}`,
                    borderRadius:"11px", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px",
                    fontFamily:"inherit" }}>
                  {c ? (
                    <>
                      <img src={champImg(c.dd)} alt={c.display}
                        style={{ width:"52px", height:"52px", borderRadius:"9px", objectFit:"cover" }} />
                      <span style={{ fontSize:"11px", color:"#F5F1EA", fontWeight:600, whiteSpace:"nowrap",
                        overflow:"hidden", textOverflow:"ellipsis", maxWidth:"84px" }}>{c.display}</span>
                    </>
                  ) : (
                    <>
                      <div style={{ width:"52px", height:"52px", borderRadius:"9px", display:"flex",
                        alignItems:"center", justifyContent:"center", border:"1px dashed rgba(255,255,255,.18)",
                        color:dim, fontSize:"20px" }}>+</div>
                      <span style={{ fontSize:"11px", color:dim }}>Empty</span>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {picking !== null && !isLive && (
            <div className="frge-panel" style={{ marginTop:"12px", padding:"12px 14px", background:"rgba(20,20,23,.98)" }}>
              <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search champion…"
                style={{ width:"100%", padding:"8px 11px", borderRadius:"8px", fontFamily:"inherit", fontSize:"13px",
                  background:"rgba(0,0,0,.35)", border:"1px solid rgba(255,255,255,.14)", color:"#F5F1EA", marginBottom:"10px" }} />
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", maxHeight:"210px", overflowY:"auto" }}>
                {searchResults.map((c) => (
                  <button key={c.dd} onClick={() => setSlot(picking, c)} title={c.display}
                    style={{ cursor:"pointer", background:"none", border:"1px solid rgba(255,255,255,.1)",
                      borderRadius:"8px", padding:"4px", lineHeight:0 }}>
                    <img src={champImg(c.dd)} alt={c.display}
                      style={{ width:"38px", height:"38px", borderRadius:"6px", objectFit:"cover" }} />
                  </button>
                ))}
              </div>
              {manual[picking] && (
                <button onClick={() => setSlot(picking, null)}
                  style={{ marginTop:"10px", cursor:"pointer", background:"none", border:"1px solid rgba(217,83,79,.4)",
                    borderRadius:"7px", padding:"5px 11px", color:"#e8685f", fontSize:"11.5px", fontFamily:"inherit" }}>
                  Clear this slot
                </button>
              )}
            </div>
          )}
        </div>

        {!enemyDds.length ? (
          <div className="frge-empty" style={{ padding:"46px 20px", textAlign:"center", color:dim, fontSize:"13px" }}>
            Add at least one enemy champion above{isLive ? " — waiting for them to lock in." : "."}
          </div>
        ) : (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(330px,1fr))", gap:"16px", alignItems:"start" }}>

            {/* Damage profile */}
            <Card title="What they actually deal">
              <Bar label="Physical damage" value={profile.dmg.ad} total={profile.count} colour="#E0A93B" />
              <Bar label="Magic damage" value={profile.dmg.ap} total={profile.count} colour="#8B7BF5" />
              {profile.auto > 0 && <Bar label="Auto-attack reliant" value={profile.auto} total={profile.count} colour="#22D3EE" />}
              <div style={{ marginTop:"14px", padding:"11px 13px", borderRadius:"9px",
                background:`${orange}14`, border:`1px solid ${orange}44`, fontSize:"12.5px", lineHeight:1.55, color:"#E8E3DA" }}>
                <b style={{ color:orange }}>Build into it:</b> {profile.buildAdvice}
              </div>
            </Card>

            {/* Threat profile */}
            <Card title="How they win fights">
              {profile.topThreats.length === 0 ? (
                <div style={{ fontSize:"12.5px", color:dim }}>Nothing dominant yet — add more picks.</div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:"7px" }}>
                  {profile.topThreats.map(([t, n]) => (
                    <div key={t} style={{ display:"flex", alignItems:"center", gap:"9px", fontSize:"12.5px" }}>
                      <span style={{ minWidth:"26px", height:"22px", borderRadius:"5px", display:"flex",
                        alignItems:"center", justifyContent:"center", fontWeight:700, fontVariantNumeric:"tabular-nums",
                        background: n >= 3 ? "rgba(217,83,79,.22)" : "rgba(255,255,255,.06)",
                        color: n >= 3 ? "#e8685f" : "#C7C2BA", fontSize:"11.5px" }}>{n}×</span>
                      <span style={{ color:"#E8E3DA" }}>{THREAT_LABEL[t] || t}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Your kit's answers */}
            <Card title={`What ${champ.display} answers`} accent="#57d977">
              {inter.mine.length === 0 ? (
                <div style={{ fontSize:"12.5px", color:dim, lineHeight:1.6 }}>
                  No specific ability interaction against this comp — play the matchup on fundamentals and itemise off the damage split.
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:"11px" }}>
                  {inter.mine.map((n, i) => (
                    <div key={i} style={{ borderLeft:"2px solid rgba(87,217,119,.5)", paddingLeft:"9px" }}>
                      <div style={{ fontSize:"12px", fontWeight:700, color:"#8fe6a8", marginBottom:"3px" }}>
                        vs {n.vs} — {n.abilities.join(" · ")}
                      </div>
                      <div style={{ fontSize:"11.5px", color:"#C7C2BA", lineHeight:1.5 }}>{n.why}</div>
                    </div>
                  ))}
                </div>
              )}
              {inter.theirs.length > 0 && (
                <div style={{ marginTop:"14px", paddingTop:"12px", borderTop:"1px solid rgba(255,255,255,.08)" }}>
                  <div style={{ fontSize:"11px", letterSpacing:".14em", textTransform:"uppercase", color:"#e8685f", marginBottom:"9px" }}>
                    Careful of
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"11px" }}>
                    {inter.theirs.map((n, i) => (
                      <div key={i} style={{ borderLeft:"2px solid rgba(217,83,79,.5)", paddingLeft:"9px" }}>
                        <div style={{ fontSize:"12px", fontWeight:700, color:"#f0a39d", marginBottom:"3px" }}>
                          {n.vs} — {n.abilities.join(" · ")}
                        </div>
                        <div style={{ fontSize:"11.5px", color:"#C7C2BA", lineHeight:1.5 }}>{n.why}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Better picks */}
            <Card title={`Stronger ${role} picks into this comp`}>
              <div style={{ fontSize:"11.5px", color:dim, marginBottom:"11px", lineHeight:1.5 }}>
                Ranked by how much of this comp each answers. Click to switch champion.
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                {picks.map((p) => {
                  const isMe = p.dd === champ.dd;
                  return (
                    <button key={p.dd} onClick={() => !isMe && onPick?.(p.champ)}
                      title={isMe ? "Your current pick" : `Switch to ${p.champ?.display}`}
                      style={{ cursor: isMe ? "default" : "pointer", display:"flex", alignItems:"center", gap:"10px",
                        padding:"7px 9px", borderRadius:"9px", fontFamily:"inherit", textAlign:"left",
                        background: isMe ? `${gold}14` : "rgba(255,255,255,.03)",
                        border: `1px solid ${isMe ? `${gold}55` : "rgba(255,255,255,.08)"}` }}>
                      <img src={champImg(p.dd)} alt={p.champ?.display}
                        style={{ width:"32px", height:"32px", borderRadius:"7px", objectFit:"cover", flexShrink:0 }} />
                      <span style={{ flex:1, fontSize:"12.5px", fontWeight:600, color:"#F5F1EA" }}>
                        {p.champ?.display}{isMe && <span style={{ color:gold, fontWeight:400 }}> · your pick</span>}
                      </span>
                      <span className="frge-display" style={{ fontSize:"14px", fontVariantNumeric:"tabular-nums",
                        color: p.score > 0 ? "#57d977" : p.score < 0 ? "#e8685f" : "#9aa0a6" }}>
                        {p.score > 0 ? `+${p.score}` : p.score}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Card>

          </div>
        )}
      </div>
    </div>
  );
}
