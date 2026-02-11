import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function CaseFiles() {
  return (
    <Layout>
      <div style={styles.container}>

        <header>
          <span style={styles.label}>CASE FILES</span>
          <h1>Incidents & post-mortems</h1>
        </header>

        <Incident
          id="CASE-01"
          title="Perte réseau site distant"
          impact="Données temps réel"
          link="/case-files/case-01"
        />

        <Incident
          id="CASE-02"
          title="Bruit capteur industriel"
          impact="Mesures instables"
        />

        <Incident
          id="CASE-03"
          title="Explosion volume de données"
          impact="Coût & latence"
        />

      </div>
    </Layout>
  );
}

function Incident({ id, title, impact, link }) {
  const content = (
    <>
      <strong>{id}</strong> — {title}
      <div style={styles.impact}>Impact : {impact}</div>
    </>
  );

  return link ? (
    <Link to={link} style={styles.incident}>{content}</Link>
  ) : (
    <div style={styles.incident}>{content}</div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    display: 'grid',
    gap: '12px'
  },
  label: {
    fontSize: '10px',
    letterSpacing: '0.2em',
    color: '#6b7280'
  },
  incident: {
    backgroundColor: '#020617',
    border: '1px solid #1f2933',
    padding: '10px',
    textDecoration: 'none',
    color: '#e5e7eb',
    fontSize: '13px'
  },
  impact: {
    fontSize: '11px',
    color: '#9ca3af'
  }
};