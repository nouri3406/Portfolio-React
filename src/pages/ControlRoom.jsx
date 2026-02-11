import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import avatar from '../assets/avatar.jpg';

export default function ControlRoom() {
  return (
    <Layout>
      <div style={styles.screen}>

        {/* OPERATOR COLUMN */}
        <aside style={styles.left}>
          <div style={styles.panel}>
            <span style={styles.label}>OPERATOR FILE</span>

            <div style={styles.avatar}></div>

            <div style={styles.block}>
              <div style={styles.value}>IoT / IIoT Engineer</div>
              <div style={styles.muted}>Terrain · Réseau · Systèmes</div>
            </div>

            <div style={styles.block}>
              <span style={styles.smallLabel}>STATUS</span>
              <div style={styles.statusOk}>● AVAILABLE</div>
            </div>

            <Link to="/dossier-operateur" style={styles.link}>
              → Dossier opérateur
            </Link>
          </div>
        </aside>

        {/* SYSTEMS COLUMN */}
        <main style={styles.center}>
          <div style={styles.panel}>
            <span style={styles.label}>SYSTEMS IN PRODUCTION</span>

            <System
              title="CHANTIER MONITORING"
              meta="EDGE · MQTT · TIME-SERIES"
              link="/missions-deployees"
            />

            <System
              title="ENERGY WASTE DETECTOR"
              meta="EDGE · INFLUXDB · DASHBOARD"
              link="/missions-deployees"
            />

            <System
              title="PREDICTIVE MAINTENANCE LITE"
              meta="SENSORS · EDGE · ALERTING"
              link="/missions-deployees"
            />
          </div>
        </main>

        {/* INCIDENT COLUMN */}
        <aside style={styles.right}>
          <div style={styles.panel}>
            <span style={styles.label}>INCIDENT LOG</span>

            <Incident
              id="CASE-01"
              title="NETWORK LOSS"
              status="RESOLVED"
              link="/case-files/case-01"
              highlight
            />
            <Incident
              id="CASE-02"
              title="SENSOR NOISE"
              status="RESOLVED"
            />
            <Incident
              id="CASE-03"
              title="DATA COST SPIKE"
              status="RESOLVED"
            />

            <Link to="/case-files" style={styles.link}>
              → Voir tous les dossiers
            </Link>
          </div>
        </aside>

        {/* FOOTER */}
        <footer style={styles.footer}>
          Un système n’est pas sérieux quand il marche.
          Il l’est quand il tombe et se relève proprement.
        </footer>

      </div>
    </Layout>
  );
}

/* ================= COMPONENTS ================= */

function System({ title, meta, link }) {
  const [hover, setHover] = React.useState(false);

  return (
    <Link
      to={link}
      style={{
        ...styles.system,
        ...(hover ? styles.systemHover : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={styles.systemTitle}>{title}</div>
      <div style={styles.systemMeta}>{meta}</div>

      {hover && (
        <div style={styles.preview}>
          Monitoring · Logs · Alertes
        </div>
      )}
    </Link>
  );
}

function Incident({ id, title, status, link, highlight }) {
  const content = (
    <>
      <div style={styles.incidentLine}>
        {id} · {title}
      </div>
      <div style={styles.incidentStatus}>● {status}</div>
    </>
  );

  const style = {
    ...styles.incident,
    ...(highlight ? styles.pulse : {})
  };

  return link ? (
    <Link to={link} style={style}>{content}</Link>
  ) : (
    <div style={style}>{content}</div>
  );
}

/* ================= STYLES ================= */

const styles = {
  screen: {
    display: 'grid',
    gridTemplateColumns: '240px 1fr 280px',
    gridTemplateRows: '1fr auto',
    gap: '12px'
  },

  panel: {
    backgroundColor: '#020617',
    border: '1px solid #1f2933',
    padding: '12px',
    height: '100%'
  },

  left: {
    gridRow: '1 / span 2'
  },

  right: {
    gridRow: '1 / span 2'
  },

  footer: {
    gridColumn: '1 / span 3',
    fontSize: '10px',
    color: '#6b7280',
    padding: '8px 4px'
  },

  label: {
    fontSize: '10px',
    letterSpacing: '0.2em',
    color: '#6b7280',
    display: 'block',
    marginBottom: '10px'
  },

  smallLabel: {
    fontSize: '9px',
    letterSpacing: '0.15em',
    color: '#9ca3af'
  },

  avatar: {
    height: '120px',
    backgroundImage: `url(${avatar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '12px',
    border: '1px solid #1f2933'
  },

  block: {
    marginBottom: '12px'
  },

  value: {
    fontSize: '13px'
  },

  muted: {
    fontSize: '11px',
    color: '#9ca3af'
  },

  statusOk: {
    fontSize: '11px',
    color: '#22c55e'
  },

  link: {
    fontSize: '11px',
    color: '#93c5fd',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '8px'
  },

  system: {
    display: 'block',
    padding: '8px 0',
    borderBottom: '1px solid #1f2933',
    textDecoration: 'none',
    color: '#e5e7eb'
  },

  systemHover: {
    borderLeft: '2px solid #22c55e',
    paddingLeft: '6px',
    backgroundColor: '#020617'
  },

  systemTitle: {
    fontSize: '12px'
  },

  systemMeta: {
    fontSize: '10px',
    color: '#9ca3af'
  },

  preview: {
    fontSize: '9px',
    color: '#6b7280',
    marginTop: '4px'
  },

  incident: {
    padding: '6px 0',
    borderBottom: '1px solid #1f2933',
    textDecoration: 'none',
    color: '#e5e7eb'
  },

  incidentLine: {
    fontSize: '11px'
  },

  incidentStatus: {
    fontSize: '10px',
    color: '#22c55e'
  },

  pulse: {
    animation: 'pulse 2s infinite'
  }
};