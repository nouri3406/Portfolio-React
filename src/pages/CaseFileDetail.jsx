import Layout from '../components/Layout';

export default function CaseFileDetail() {
  return (
    <Layout>
      <div style={styles.container}>

        <header>
          <span style={styles.label}>CASE-01</span>
          <h1>Perte réseau site distant</h1>
        </header>

        <Block title="Symptôme">
          Perte intermittente de données MQTT.
        </Block>

        <Block title="Hypothèses">
          Couverture réseau · timeout · QoS.
        </Block>

        <Block title="Mesures">
          Logs edge · mesure latence · observation reconnexions.
        </Block>

        <Block title="Correctif">
          Buffer local · QoS ajusté · backoff reconnection.
        </Block>

        <Block title="Résultat">
          Données non perdues · visibilité maintenue.
        </Block>

        <Block title="Leçon">
          Concevoir le mode dégradé dès le départ.
        </Block>

      </div>
    </Layout>
  );
}

function Block({ title, children }) {
  return (
    <div style={styles.panel}>
      <span style={styles.subLabel}>{title}</span>
      <p>{children}</p>
    </div>
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
  panel: {
    backgroundColor: '#020617',
    border: '1px solid #1f2933',
    padding: '12px',
    fontSize: '13px'
  },
  subLabel: {
    fontSize: '10px',
    letterSpacing: '0.15em',
    color: '#9ca3af'
  }
};