import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const badgeMap = {
    "/": "HOME-BASE",
    "/control-room": "CONTROL-CENTER",
    "/dossier-operateur": "OPERATOR-ID",
    "/arsenal-technique": "ARSENAL-TECH",
    "/missions-deployees": "MISSION-LOGS",
    "/case-files": "CASE-ARCHIVES",
    "/canal-direct": "COMM-LINK"
  };

  const pageTitle = badgeMap[location.pathname] || "SYSTEM-DATA";

  const isActive = (path) =>
    location.pathname === path ? styles.linkActive : styles.link;

  return (
    <div style={styles.page}>
     
      <button className="burger-btn" onClick={() => setIsOpen(!isOpen)} style={styles.burgerBtn}>
        {isOpen ? "✕" : "☰"}
      </button>
     
      <aside className={`sidebar-nav ${isOpen ? "active" : ""}`} style={styles.sidebar}>
        <div style={styles.logo}>IIoT<br />INCIDENT ROOM</div>
        <nav style={styles.nav}>
          {Object.keys(badgeMap).map((path) => (
            <Link key={path} to={path} onClick={() => setIsOpen(false)} style={isActive(path)}>
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ").toUpperCase()}
            </Link>
          ))}
        </nav>
        <div style={styles.footerSide}>
          <span style={styles.statusDot}>●</span> System Online
        </div>
      </aside>
     
      <div className="main-content-wrap" style={styles.contentWrap}>
        <main style={styles.main}>
                  
          <div style={styles.missionCard}>
            <div style={styles.missionHeader}>
              <span style={styles.badge}>{pageTitle}</span>
              <span style={styles.headerMeta}>SECURED_ACCESS // 2026</span>
            </div>
            
            <div style={styles.missionBody}>
              {children}
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
}

const SIDEBAR_W = 240;
const GAP = 24;
const PAGE_PAD = 24;

const styles = {
  page: { minHeight: "100vh", backgroundColor: "var(--bg)", color: "inherit", fontFamily: "Inter, monospace" },
  
  sidebar: {
    width: `${SIDEBAR_W}px`, backgroundColor: "var(--bg)", border: "1px solid var(--border)",
    borderRadius: "14px", padding: "1.5rem 1rem", display: "flex", flexDirection: "column",
    justifyContent: "space-between", position: "fixed", left: `${PAGE_PAD}px`, top: "50%",
    transform: "translateY(-50%)", zIndex: 100, transition: "left 0.3s ease"
  },

  contentWrap: {
    padding: `${PAGE_PAD}px`,
    paddingLeft: `${PAGE_PAD + SIDEBAR_W + GAP}px`,
    transition: "padding 0.3s ease"
  },

  main: { width: "100%", maxWidth: "1100px", margin: "0 auto" },

  /* --- STYLE MISSION CARD --- */
  missionCard: {
    border: '1px solid #22c55e',
    backgroundColor: 'rgba(2, 6, 23, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 0 20px rgba(18, 222, 93, 0.87)'
  },

  missionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    borderBottom: '1px solid #22c55e',
    backgroundColor: 'rgba(34, 197, 94, 0.1)'
  },

  badge: {
    backgroundColor: '#22c55e',
    color: '#020617',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '3px 10px',
    fontFamily: 'monospace'
  },

  headerMeta: { fontSize: '10px', color: '#22c55e', fontFamily: 'monospace', opacity: 0.7 },

  missionBody: { padding: '30px', boxSizing: 'border-box' },

  
  nav: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  link: { fontSize: "0.8rem", color: "var(--green-soft)", textDecoration: "none" },
  linkActive: { fontSize: "0.8rem", color: "inherit", textDecoration: "none", borderLeft: "2px solid var(--green)", paddingLeft: "0.5rem" },
  logo: { fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "2rem", color: "#22c55e" },
  footerSide: { fontSize: "0.7rem", color: "var(--green-soft)", marginTop: "1.5rem" },
  statusDot: { color: "#22c55e", marginRight: "0.3rem" },
  pageFooter: { textAlign: 'center', color: '#22c55e', fontSize: '11px', letterSpacing: '0.2em', padding: '30px 0', opacity: 0.6 },
  burgerBtn: { display: "none", position: "fixed", top: "15px", left: "15px", zIndex: 1000, background: "#020617", border: "1px solid #22c55e", color: "#22c55e", padding: "8px 12px", borderRadius: "4px" }
};