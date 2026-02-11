export default function IncidentList() {
  return (
    <section>
      <h3>Incidents récents</h3>

      <ul style={styles.list}>
        <li>Case 01 — Perte réseau (résolu)</li>
        <li>Case 02 — Capteur bruité (résolu)</li>
        <li>Case 03 — Explosion coût data (résolu)</li>
      </ul>

      <p style={styles.signature}>
        Un système n’est pas sérieux quand il marche.
        Il est sérieux quand il tombe, et qu’il se relève proprement.
      </p>
    </section>
  );
}

const styles = {
  list: {
    marginTop: '0.5rem',
    color: '#9ca3af',
    fontSize: '0.8rem'
  },
  signature: {
    marginTop: '0.7rem',
    fontSize: '0.7rem',
    color: '#6b7280'
  }
};