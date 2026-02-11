import Layout from "../components/Layout";

export default function Missions() {

  const cases = [
    {
      id: "CASE-01",
      title: "PERTE RÉSEAU SITE DISTANT",
      impact: "Données temps réel interrompues",
      tech: "Python, MQTT, Docker"
    },
    {
      id: "CASE-02",
      title: "BRUIT CAPTEUR INDUSTRIEL",
      impact: "Mesures instables sur turbine",
      tech: "Signal Processing, Node.js"
    }
  ];

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>VUE D'ENSEMBLE DES MISSIONS</h1>

        <div style={styles.list}>
          {cases.map((item) => (
            <div key={item.id} style={styles.card}>
             
              <div style={styles.cardHeader}>
                <span style={styles.idTag}>{item.id}</span>
                <span style={styles.techTag}>{item.tech}</span>
              </div>
             
              <div style={styles.cardBody}>
                <h3 style={styles.caseTitle}>{item.title}</h3>
                <p style={styles.impactText}>
                  <span style={{ color: "#22c55e" }}>STATUS :</span> ANALYSE_COMPLÈTE
                </p>
                <p style={styles.impactText}>
                  <span style={{ color: "#22c55e" }}>IMPACT :</span> {item.impact}
                </p>
              </div>
              
              <div style={styles.scanLine} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/* ================= STYLES CORRIGÉS ================= */

const styles = {
  container: {
    maxWidth: "850px",
    margin: "0 auto",
    padding: "30px",
  },
  mainTitle: {
    color: "#22c55e",
    fontFamily: "monospace",
    fontSize: "1.2rem",
    marginBottom: "40px",
    textAlign: "center",
    letterSpacing: "0.25em"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "30px"
  },
  card: {
    backgroundColor: "#020617",
    border: "1px solid #22c55e", // TA BORDURE VERTE
    borderRadius: "2px",
    position: "relative",
    boxShadow: "0 0 20px rgba(34, 197, 94, 0.05)",
    overflow: "hidden"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    borderBottom: "1px solid #22c55e",
    backgroundColor: "rgba(34, 197, 94, 0.1)"
  },
  idTag: {
    backgroundColor: "#22c55e",
    color: "#020617",
    padding: "2px 10px",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: "0.8rem"
  },
  techTag: {
    color: "#22c55e",
    fontSize: "0.75rem",
    fontFamily: "monospace",
    opacity: 0.8
  },
  cardBody: {
    padding: "20px"
  },
  caseTitle: {
    color: "#22c55e", 
    margin: "0 0 15px 0",
    fontSize: "1.1rem",
    fontFamily: "monospace",
    letterSpacing: "0.1em"
  },
  impactText: {
    color: "#22c55e",
    fontSize: "0.9rem",
    margin: "5px 0",
    fontFamily: "monospace"
  },
  scanLine: {
    height: "1px",
    width: "100%",
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    position: "absolute",
    bottom: "0"
  }
};