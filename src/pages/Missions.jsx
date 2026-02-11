import Layout from "../components/Layout";
import { useMemo } from "react";

export default function Missions() {
  const projects = useMemo(
    () => [
      {
        title: "Pendu",
        img: `${import.meta.env.BASE_URL}projects/Pendu-Tarot.jpg`,
        desc: "jeu pendu en Python",
        href: "https://github.com/nouri3406/Pendu"
      },
      {
        title: "Universal Converter",
        img: `${import.meta.env.BASE_URL}projects/convertisseur.jpg`,
        desc: "Convertisseur hexadécimal/binaire/SCII en Python",
        href: "https://github.com/nouri3406/Universal-hex-bin-let-converter-"
      },
      {
        title: "Projet portfolio Natif ",
        img: `${import.meta.env.BASE_URL}projects/Portfolio.jpg`,
        desc: "Portfolio en natif ( HTML/CSS/JS)",
        href: "https://nouri3406.github.io/Portfolio-Natif/"
      },   
      {
        title: "API rest",
        img: `${import.meta.env.BASE_URL}projects/API.jpg`,
        desc: "API rest pour un JobBoard",
        href: "/case-files"
      },
      {
        title: "jeu 2 D",
        img: `${import.meta.env.BASE_URL}projects/shoot em up.jpg`,
        desc: "Jeu 2D en Java",
        href: "/case-files"
      },
      {
        title: "tchat temps réél",
        img: `${import.meta.env.BASE_URL}projects/Tchatche.jpg`,
        desc: "Socket.io pour un tchat",
        href: "/case-files"
      },
    ],
    []
  );

  return (
    <Layout>
      <div style={styles.page}>
        <div style={styles.container}>
          <header>
            <span style={styles.label}>MISSIONS DÉPLOYÉES</span>
            <h1 style={styles.h1}>Sélection d'opérations & projets</h1>
          </header>
        
          <Section title="Résumé">
            Missions et livrables : collecte terrain, traitement edge, backend time-series, dashboards.
          </Section>

          <Section title="Capacités">
            Déploiement · supervision · intégration · fiabilisation · documentation.
          </Section>
          
          <div style={styles.carouselSection}>
            <span style={styles.subLabel}>Projets</span>
            <ProjectMarquee items={projects} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* ---------------- SECTION ---------------- */

function Section({ title, children }) {
  return (
    <div style={styles.panel}>
      <span style={styles.subLabel}>{title}</span>
      <div style={styles.panelBody}>{children}</div>
    </div>
  );
}

/* ---------------- CARROUSEL INFINI ---------------- */

function ProjectMarquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee" style={styles.marquee} aria-label="Carrousel projets">
      <div className="marquee-track" style={styles.marqueeTrack}>
        {doubled.map((p, idx) => (
          <a
            key={`${p.title}-${idx}`}
            href={p.href}
            className="tile tile-project"
            style={styles.projectCard}
          >
            <img
              src={p.img}
              alt={p.title}
              className="tile-image"
              style={styles.projectImg}
              draggable="false"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="tile-overlay" style={styles.projectOverlay} />

            <div style={styles.projectText}>
              <div style={styles.projectTitle}>{p.title}</div>
              <div style={styles.projectDesc}>{p.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    width: "100%",
    overflowX: "hidden"
  },

  container: {
    maxWidth: "980px",
    margin: "0 auto",
    display: "grid",
    gap: "18px"
  },

  label: {
    fontSize: "10px",
    letterSpacing: "0.2em",
    opacity: 0.85
  },

  h1: {
    marginTop: "8px",
    marginBottom: 0
  },

  panel: {
    backgroundColor: "#020617",
    border: "1px solid #0f172a",
    padding: "14px",
    borderRadius: "12px",
    boxShadow: "inset 0 0 18px rgba(34,197,94,0.06)"
  },

  subLabel: {
    display: "block",
    fontSize: "10px",
    letterSpacing: "0.15em",
    marginBottom: "8px",
    opacity: 0.9
  },

  panelBody: {
    opacity: 0.95
  },

  carouselSection: {
    marginTop: "28px"
  },

  marquee: {
    width: "100%",
    overflow: "hidden",
    border: "1px solid #0f172a",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: "#020617"
  },

  marqueeTrack: {
    display: "flex",
    gap: "12px",
    width: "max-content",
    alignItems: "center",
    willChange: "transform"
  },

  /* ✅ carte projet (utilise les effets .tile / .tile-image / .tile-overlay déjà dans index.css) */
  projectCard: {
    position: "relative",
    flexShrink: 0,
    minWidth: "320px",
    height: "180px",
    borderRadius: "14px",
    border: "1px solid #0f172a",
    overflow: "hidden",
    backgroundColor: "#020617",
    textDecoration: "none",
    display: "block"
  },

  projectImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  },

  projectOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(2,6,23,0.90), rgba(2,6,23,0.25))"
  },

  projectText: {
    position: "absolute",
    left: "14px",
    right: "14px",
    bottom: "12px"
  },

  projectTitle: {
    fontSize: "12px",
    letterSpacing: "0.14em",
    fontFamily: "monospace",
    opacity: 0.98
  },

  projectDesc: {
    marginTop: "6px",
    fontSize: "12px",
    opacity: 0.85
  }
};