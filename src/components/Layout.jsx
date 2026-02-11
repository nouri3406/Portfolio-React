import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? styles.linkActive : styles.link;

  const pageTitleMap = {
    "/": "HOME",
    "/control-room": "CONTROL ROOM",
    "/dossier-operateur": "DOSSIER OPÉRATEUR",
    "/arsenal-technique": "ARSENAL TECHNIQUE",
    "/missions-deployees": "MISSIONS DÉPLOYÉES",
    "/case-files": "CASE FILES",
    "/canal-direct": "CANAL DIRECT"
  };

  return (
    <div style={styles.page}>
      {/* ✅ SIDEBAR FIXE (toujours visible) */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          IIoT<br />INCIDENT ROOM
        </div>

        <nav style={styles.nav}>
          <Link to="/" style={isActive("/")}>Home</Link>
          <Link to="/control-room" style={isActive("/control-room")}>Control Room</Link>
          <Link to="/dossier-operateur" style={isActive("/dossier-operateur")}>Dossier Opérateur</Link>
          <Link to="/arsenal-technique" style={isActive("/arsenal-technique")}>Arsenal Technique</Link>
          <Link to="/missions-deployees" style={isActive("/missions-deployees")}>Missions Déployées</Link>
          <Link to="/case-files" style={isActive("/case-files")}>Case Files</Link>
          <Link to="/canal-direct" style={isActive("/canal-direct")}>Canal Direct</Link>
        </nav>

        <div style={styles.footer}>
          <span style={styles.statusDot}>●</span> System Online
        </div>
      </aside>

      {/* ✅ CONTENU : on pousse à droite (réserve la place de la sidebar) */}
      <div style={styles.contentWrap}>
        <main style={styles.main}>
          <header style={styles.header}>
            <span style={styles.headerTitle}>
              {pageTitleMap[location.pathname] || "INCIDENT ROOM"}
            </span>
          </header>

          <section style={styles.content}>{children}</section>
        </main>
      </div>
    </div>
  );
}

const SIDEBAR_W = 240;
const GAP = 24;
const PAGE_PAD = 24;

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "var(--bg)",
    color: "inherit",
    fontFamily: "Inter, system-ui, sans-serif"
  },

  /* ✅ sidebar toujours affichée + centrée */
  sidebar: {
    width: `${SIDEBAR_W}px`,
    backgroundColor: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "14px",
    padding: "1.5rem 1rem",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    position: "fixed",
    left: `${PAGE_PAD}px`,
    top: "50%",
    transform: "translateY(-50%)",

    zIndex: 50
  },

  /* ✅ on laisse une “colonne” vide à gauche pour ne pas passer sous la sidebar */
  contentWrap: {
    padding: `${PAGE_PAD}px`,
    paddingLeft: `${PAGE_PAD + SIDEBAR_W + GAP}px`
  },

  main: {
    width: "100%",
    maxWidth: "1100px"
  },

  header: {
    height: "48px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    padding: "0 1.5rem"
  },

  headerTitle: {
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    color: "var(--green-soft)"
  },

  content: {
    padding: "2rem"
  },

  logo: {
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    lineHeight: "1.4",
    marginBottom: "2rem",
    opacity: 0.9
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },

  link: {
    fontSize: "0.8rem",
    color: "var(--green-soft)",
    textDecoration: "none"
  },

  linkActive: {
    fontSize: "0.8rem",
    color: "inherit",
    textDecoration: "none",
    borderLeft: "2px solid var(--green)",
    paddingLeft: "0.5rem"
  },

  footer: {
    fontSize: "0.7rem",
    color: "var(--green-soft)",
    marginTop: "1.5rem"
  },

  statusDot: {
    color: "var(--green)",
    marginRight: "0.3rem"
  }
};