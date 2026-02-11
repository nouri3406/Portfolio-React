import Layout from "../components/Layout";
import { useMemo } from "react";

export default function ArsenalTechnique() {
  const items = useMemo(
    () => [
      { name: "HTML", src: "/logos/html.svg" },
      { name: "CSS", src: "/logos/css.svg" },
      { name: "JavaScript", src: "/logos/javascript.svg" },
      { name: "NestJS", src: "/logos/nestjs.svg" },
      { name: "Node.js", src: "/logos/nodejs.svg" },
      { name: "Docker", src: "/logos/docker.svg" },
      { name: "Python", src: "/logos/python.svg" },
      { name: "Java", src: "/logos/java.svg" },
      { name: "React", src: "/logos/nestjs.svg" },
      { name: "Linux", src: "/logos/linux.svg" }
    ],
    []
  );

  return (
    <Layout>
      <div style={styles.page}>
        <div style={styles.container}>
         
          <header>
            <span style={styles.label}>ARSENAL TECHNIQUE</span>
            <h1 style={styles.h1}>Outils et technologies maîtrisés</h1>
          </header>
          
          <Section title="Langages de développement">
            Langages de programmation et frameworks utilisés régulièrement
          </Section>

          <Section title="Capteurs & Hardware">
            Capteurs analogiques / numériques · MCU basse conso · gestion énergie · mesures terrain
          </Section>

          <Section title="Réseaux & Protocoles">
            MQTT · HTTP · latence · pertes · reconnexion
          </Section>

          <Section title="Edge & Traitement">
            Bufferisation · filtrage · tolérance aux coupures · amélioration
          </Section>

          <Section title="Backend & Data">
            InfluxDB · time-series · stockage · structuration des flux
          </Section>

          <Section title="Méthode">
            Logs · tests · documentation · amélioration continue
          </Section>
         
          <div style={styles.carouselSection}>
            <span style={styles.subLabel}>Langages & technologies</span>
            <LogoMarquee items={items} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* ---------------- SECTIONS ---------------- */

function Section({ title, children }) {
  return (
    <div style={styles.panel}>
      <span style={styles.subLabel}>{title}</span>
      <div style={styles.panelBody}>{children}</div>
    </div>
  );
}

/* ---------------- CARROUSEL INFINI ---------------- */


function LogoMarquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee" style={styles.marquee} aria-label="Carrousel de logos">
      <div className="marquee-track" style={styles.marqueeTrack}>
        {doubled.map((it, idx) => (
          <div key={`${it.name}-${idx}`} style={styles.logoCard}>
            <img
              src={it.src}
              alt={it.name}
              style={styles.logoImg}
              draggable="false"
              onError={(e) => {                
                e.currentTarget.style.display = "none";
              }}
            />
            <div style={styles.logoName}>{it.name}</div>
          </div>
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

  // 🔥 zone carrousel en bas
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

  logoCard: {
    flexShrink: 0,
    minWidth: "170px",
    border: "1px solid #0f172a",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: "#020617",
    textAlign: "center",
    boxShadow: "inset 0 0 18px rgba(34,197,94,0.04)"
  },

  logoImg: {
    height: "56px",
    width: "100%",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
    padding: "6px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.03)",
    filter: "drop-shadow(0 0 8px rgba(34,197,94,0.10))"
  },

  logoName: {
    marginTop: "8px",
    fontSize: "12px",
    fontFamily: "monospace",
    letterSpacing: "0.12em",
    opacity: 0.95
  }
};