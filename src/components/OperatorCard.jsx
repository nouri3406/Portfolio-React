export default function OperatorCard() {
  return (
    <aside style={styles.container}>
      <img
        src="https://via.placeholder.com/150"
        alt="Operator"
        style={styles.avatar}
      />

      <h2>IoT / IIoT Engineer</h2>

      <p style={styles.baseline}>
        Je transforme le terrain en décisions fiables.
      </p>

      <p style={styles.layers}>
        Électronique • Terrain • Réseau • Logiciel
      </p>

      <span style={styles.badge}>
        Disponible en alternance — Février 2026
      </span>
    </aside>
  );
}

const styles = {
  container: {
    backgroundColor: '#0f172a',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #1f2933'
  },
  avatar: {
    width: '100%',
    borderRadius: '6px',
    marginBottom: '1rem'
  },
  baseline: {
    fontSize: '0.85rem',
    color: '#9ca3af'
  },
  layers: {
    fontSize: '0.7rem',
    color: '#6b7280',
    marginTop: '0.3rem'
  },
  badge: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.3rem 0.6rem',
    backgroundColor: '#14532d',
    color: '#86efac',
    fontSize: '0.7rem',
    borderRadius: '4px'
  }
};