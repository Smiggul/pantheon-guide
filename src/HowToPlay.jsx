import { abilitiesOf } from "./data/abilities.js";
import { otpGuideOf } from "./data/otpGuides.js";
import { ITEM_RATIONALE } from "./data/itemRationale.js";
import { SKILL_MAX, NO_ULT } from "./data/skillOrders.js";
import { matchup, THREAT_LABEL } from "./data/counterPicker.js";
import { synergiesFor } from "./data/synergies.js";
import { CHAMPS } from "./data/champs/index.js";

const DD = "/ddragon";
const KEYS = ["Q", "W", "E", "R"];
// Champions whose R is available/levels from level 1 like a basic ability
// (transform ultimates) rather than at 6/11/16.
const EARLY_ULT = new Set(["Elise", "Nidalee", "Jayce", "Karma"]);
const champByDisplay = (name) => CHAMPS.find((c) => c.display === name);

// A deep, first-timer "How to Play" guide for the selected champion: identity,
// full ability breakdown, skill order, combos + power spikes (from a champion
// OTP when available), core build & why, runes, situational items, what to look
// out for (with the hardest matchups), and synergies. Full-page overlay.
export default function HowToPlay({ champ, role, activeChampRole, buildCorePath, buildCoreNote, buildSideItems, runeInfo, champImg, itemImg, itemMap, onClose, S }) {
  const ab = abilitiesOf(champ.dd);
  const otp = otpGuideOf(champ.dd);
  const maxOrder = SKILL_MAX[champ.dd] || null;
  const bans = activeChampRole?.bans || champ.bans || [];
  const synergies = (activeChampRole?.synergies || champ.synergies || synergiesFor(champ.dd, champ.display, role) || []).slice(0, 6);
  const coreItems = (buildCorePath || "").split("›").map((s) => s.trim()).filter(Boolean);
  const sideItems = (buildSideItems || []).slice(0, 8);

  const gold = S?.gold || "#D4AF37";
  const goldDim = S?.goldDim || "#a1852a";
  const orange = S?.orange || "#F97316";
  const dim = "#8A8078";
  const glow = champ.glow;

  const Card = ({ children, style }) => (
    <div style={{ border:"1px solid rgba(255,255,255,.08)", background:"rgba(20,19,22,.55)", backdropFilter:"blur(3px)",
      borderRadius:"14px", padding:"18px 20px", ...style }}>{children}</div>
  );
  const Eyebrow = ({ children, colour }) => (
    <div className="frge-display" style={{ fontSize:"14px", color:colour || orange, letterSpacing:".02em", marginBottom:"12px" }}>{children}</div>
  );

  const AbilityRow = ({ slot, a }) => a ? (
    <div style={{ display:"flex", gap:"13px", alignItems:"flex-start", padding:"11px 0", borderTop:"1px solid rgba(255,255,255,.06)" }}>
      <div style={{ position:"relative", flexShrink:0 }}>
        <img src={`${DD}/img/${slot === "P" ? "passive" : "spell"}/${a.img}`} alt={a.name} draggable={false}
          style={{ width:"46px", height:"46px", borderRadius:"9px", border:`1px solid ${glow}55`, background:"#0f0e10" }} />
        <span className="frge-display" style={{ position:"absolute", bottom:"-5px", right:"-5px", width:"19px", height:"19px",
          borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px",
          color:"#151013", background:`linear-gradient(180deg,${gold},${orange})`, boxShadow:"0 2px 6px rgba(0,0,0,.5)" }}>{slot}</span>
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:"flex", alignItems:"baseline", gap:"10px", flexWrap:"wrap" }}>
          <span style={{ fontSize:"14px", fontWeight:700, color:"#F5F1EA" }}>{a.name}</span>
          {a.cd && <span style={{ fontSize:"10px", color:dim }}>CD {a.cd}{a.cost && a.cost !== "0" ? ` · Cost ${a.cost}` : ""}</span>}
        </div>
        <div style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.55, marginTop:"4px" }}>{a.desc}</div>
      </div>
    </div>
  ) : null;

  return (
    <div style={{ minHeight:"100vh", padding:"0 0 60px" }}>
      <div style={{ maxWidth:"min(96vw,1180px)", margin:"0 auto", padding:"26px 24px 0" }}>

        {/* header */}
        <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"8px" }}>
          <img src={champImg(champ.dd)} alt={champ.display}
            style={{ width:"64px", height:"64px", borderRadius:"13px", border:`2.5px solid ${glow}`, objectFit:"cover", boxShadow:`0 0 20px ${glow}55` }} />
          <div style={{ flex:1 }}>
            <div className="frge-display" style={{ fontSize:"30px", color:glow, lineHeight:1 }}>
              {champ.display} <span style={{ color:"#F5F1EA" }}>· How to Play</span>
            </div>
            <div style={{ fontSize:"12px", color:dim, marginTop:"5px" }}>
              {ab?.title ? `“${ab.title}” · ` : ""}{role}
              {otp && <span style={{ color:goldDim }}> · tips from OTP <b style={{ color:gold }}>{otp.otp}</b></span>}
            </div>
          </div>
          <button onClick={onClose} className="frge-pill"
            style={{ cursor:"pointer", borderRadius:"9px", padding:"8px 16px", fontSize:"12px", fontWeight:700,
              border:`1px solid ${gold}55`, background:`${gold}18`, color:gold }}>✕ Close</button>
        </div>
        <hr style={{ height:"1px", border:0, background:"linear-gradient(90deg,transparent,rgba(255,107,53,.5),rgba(212,175,55,.3),transparent)", margin:"12px 0 24px" }} />

        {/* identity */}
        {(otp?.identity || activeChampRole?.role) && (
          <Card style={{ marginBottom:"18px", borderColor:`${glow}30`, background:`linear-gradient(180deg, ${glow}10, rgba(20,19,22,.55))` }}>
            <Eyebrow colour={glow}>Win condition</Eyebrow>
            <div style={{ fontSize:"13.5px", color:"#e7e2d4", lineHeight:1.6 }}>
              {otp?.identity || `${champ.display} plays as a ${activeChampRole.role}. Build around the core path below and look for the fights your kit is strongest in.`}
            </div>
          </Card>
        )}

        {/* abilities */}
        {ab && (
          <Card style={{ marginBottom:"18px" }}>
            <Eyebrow>Abilities</Eyebrow>
            <AbilityRow slot="P" a={ab.passive} />
            {KEYS.map((k) => <AbilityRow key={k} slot={k} a={ab[k]} />)}
            {maxOrder && (
              <div style={{ marginTop:"14px", display:"flex", alignItems:"center", gap:"9px", flexWrap:"wrap" }}>
                <span style={{ fontSize:"10px", letterSpacing:"1px", color:goldDim, textTransform:"uppercase" }}>Max order</span>
                {maxOrder.map((k, i) => (
                  <span key={k} style={{ display:"flex", alignItems:"center", gap:"9px" }}>
                    <span className="frge-display" style={{ fontSize:"14px", color: i === 0 ? gold : "#c7c0b6",
                      border:`1px solid ${i === 0 ? gold : "rgba(255,255,255,.15)"}`, borderRadius:"7px", padding:"3px 11px" }}>{k}</span>
                    {i < maxOrder.length - 1 && <span style={{ color:goldDim }}>›</span>}
                  </span>
                ))}
                <span style={{ fontSize:"11px", color:dim }}>
                  {NO_ULT.has(champ.dd)
                    ? "· no ultimate — four stances (awaken a stance twice to empower it)"
                    : EARLY_ULT.has(champ.dd)
                    ? "· R is a transform, levelled from level 1 like a basic ability (not at 6/11/16)"
                    : "· ult at 6 / 11 / 16"}
                </span>
              </div>
            )}
          </Card>
        )}

        {/* combos + spikes */}
        {otp && (otp.combos?.length || otp.spikes?.length) && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"18px", marginBottom:"18px" }}>
            {otp.combos?.length > 0 && (
              <Card>
                <Eyebrow>Combos</Eyebrow>
                <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                  {otp.combos.map((c) => (
                    <div key={c.name}>
                      <div style={{ fontSize:"12px", fontWeight:700, color:glow, marginBottom:"3px" }}>{c.name}</div>
                      <div style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.55 }}>{c.steps}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
            {otp.spikes?.length > 0 && (
              <Card>
                <Eyebrow colour="#57d977">Power spikes</Eyebrow>
                <ul style={{ margin:0, paddingLeft:"18px", display:"flex", flexDirection:"column", gap:"9px" }}>
                  {otp.spikes.map((s, i) => <li key={i} style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.55 }}>{s}</li>)}
                </ul>
              </Card>
            )}
          </div>
        )}

        {/* core build + why */}
        {coreItems.length > 0 && (
          <Card style={{ marginBottom:"18px" }}>
            <Eyebrow>Core build &amp; why</Eyebrow>
            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
              {coreItems.map((name, i) => {
                const src = itemImg?.(name, itemMap);
                return (
                  <div key={i} style={{ display:"flex", gap:"12px", alignItems:"center" }}>
                    {src ? <img src={src} alt="" draggable={false} style={{ width:"38px", height:"38px", borderRadius:"8px", flexShrink:0, border:"1px solid rgba(255,255,255,.12)" }} />
                      : <div style={{ width:"38px", height:"38px", borderRadius:"8px", flexShrink:0, background:"#0f0e10", border:"1px solid rgba(255,255,255,.12)" }} />}
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:"13px", fontWeight:700, color:"#F5F1EA" }}>{i + 1}. {name}</div>
                      {ITEM_RATIONALE[name] && <div style={{ fontSize:"11.5px", color:dim, lineHeight:1.5, marginTop:"2px" }}>{ITEM_RATIONALE[name]}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
            {buildCoreNote && <div style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.6, marginTop:"14px",
              borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:"12px" }}>{buildCoreNote}</div>}
            {otp?.itemNotes && <div style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.6, marginTop:"10px",
              padding:"10px 12px", borderRadius:"9px", background:`${gold}0f`, border:`1px solid ${gold}22` }}>
              <b style={{ color:gold }}>Itemization: </b>{otp.itemNotes}</div>}
          </Card>
        )}

        {/* runes + situational */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"18px", marginBottom:"18px" }}>
          {runeInfo && (
            <Card>
              <Eyebrow>Runes &amp; why</Eyebrow>
              <div style={{ fontSize:"13px", fontWeight:700, color:gold, marginBottom:"4px" }}>{runeInfo.keystone}{runeInfo.primary ? ` · ${runeInfo.primary}` : ""}</div>
              {runeInfo.reason && <div style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.6 }}>{runeInfo.reason}</div>}
            </Card>
          )}
          {sideItems.length > 0 && (
            <Card>
              <Eyebrow>Common situational items</Eyebrow>
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                {sideItems.map((name) => {
                  const src = itemImg?.(name, itemMap);
                  return (
                    <div key={name} style={{ display:"flex", gap:"10px", alignItems:"center" }} title={ITEM_RATIONALE[name] || ""}>
                      {src && <img src={src} alt="" draggable={false} style={{ width:"26px", height:"26px", borderRadius:"6px", flexShrink:0 }} />}
                      <div style={{ fontSize:"12px", color:"#e7e2d4" }}>{name}
                        {ITEM_RATIONALE[name] && <span style={{ color:dim }}> — {ITEM_RATIONALE[name]}</span>}</div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </div>

        {/* what to look out for */}
        <Card style={{ marginBottom:"18px", borderColor:"rgba(217,83,79,.22)" }}>
          <Eyebrow colour="#e8685f">What to look out for</Eyebrow>
          {otp?.watchOut?.length > 0 && (
            <ul style={{ margin:"0 0 14px", paddingLeft:"18px", display:"flex", flexDirection:"column", gap:"8px" }}>
              {otp.watchOut.map((w, i) => <li key={i} style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.55 }}>{w}</li>)}
            </ul>
          )}
          {bans.length > 0 && (
            <>
              <div style={{ fontSize:"10px", letterSpacing:"1px", color:goldDim, textTransform:"uppercase", marginBottom:"9px" }}>Hardest matchups</div>
              <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
                {bans.map((name) => {
                  const foe = champByDisplay(name);
                  const mu = foe ? matchup(champ.dd, foe.dd) : null;
                  return (
                    <div key={name} style={{ display:"flex", alignItems:"center", gap:"9px", padding:"7px 11px 7px 7px", borderRadius:"10px",
                      border:"1px solid rgba(217,83,79,.3)", background:"rgba(217,83,79,.07)" }}>
                      {foe && <img src={champImg(foe.dd)} alt={name} style={{ width:"32px", height:"32px", borderRadius:"7px", objectFit:"cover" }} />}
                      <div>
                        <div style={{ fontSize:"12px", fontWeight:700, color:"#F5F1EA" }}>{name}</div>
                        {mu?.theyCounter?.length > 0 && <div style={{ fontSize:"10px", color:"#f0a39d" }}>shuts down your {mu.theyCounter.map((t) => THREAT_LABEL[t] || t).join(", ")}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {otp?.matchups && <div style={{ fontSize:"12px", color:"#c7c0b6", lineHeight:1.6, marginTop:"14px" }}>{otp.matchups}</div>}
        </Card>

        {/* synergies */}
        {synergies.length > 0 && (
          <Card>
            <Eyebrow colour="#3a9bd4">Synergises with</Eyebrow>
            <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
              {synergies.map((name) => {
                const c = champByDisplay(name);
                return (
                  <div key={name} style={{ display:"flex", alignItems:"center", gap:"9px", padding:"6px 12px 6px 6px", borderRadius:"999px",
                    border:"1px solid rgba(58,155,212,.3)", background:"rgba(58,155,212,.08)" }}>
                    {c && <img src={champImg(c.dd)} alt={name} style={{ width:"28px", height:"28px", borderRadius:"50%", objectFit:"cover" }} />}
                    <span style={{ fontSize:"12px", fontWeight:600, color:"#e7e2d4" }}>{name}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

      </div>
    </div>
  );
}
