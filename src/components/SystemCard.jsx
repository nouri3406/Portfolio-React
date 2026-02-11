export default function SystemCard({ title, description, stack }) {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}>{title}</h4>

      <p style={styles.text}>{description}</p>

      <div style={styles.stack}>
        {stack.map((tech) => (
          <span key={tech} style={styles.badge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#0f172a',
    padding: '1rem',
    borderRadius: '6px',
    border: '1px solid #1f2933'
  },
  title: {
    fontSize: '0.9rem',
    letterSpacing: '0.03em'
  },
  text: {
    fontSize: '0.8rem',
    color: '#9ca3af',
    marginBottom: '0.6rem'
  },
  stack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem'
  },
  badge: {
    fontSize: '0.65rem',
    padding: '0.15rem 0.4rem',
    backgroundColor: '#020617',
    border: '1px solid #1f2933',
    borderRadius: '4px',
    color: '#93c5fd'
  }
};
