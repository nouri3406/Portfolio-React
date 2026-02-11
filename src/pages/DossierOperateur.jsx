import Layout from '../components/Layout';

export default function DossierOperateur() {
  return (
    <Layout>
      <div style={styles.container}>
        
        <div style={styles.header}>
          <span style={styles.label}>DOSSIER OPÉRATEUR</span>
          <h1 style={styles.title}>
            Rendre le réel mesurable, fiable et exploitable.
          </h1>
        </div>
        
        <div style={styles.panel}>
          <p>
            Je m'intéresse aux objets connectés quand ils deviennent
            <strong> produit</strong> : basse consommation, robuste,
            traçable.
          </p>

          <p>
            Mon parcours en électronique et électronique, terrain et réseau m'a donné de sérieuses bases
            qui compte en industrie : <strong>mesurer, tester, diagnostiquer,
            corriger, documenter</strong>.
          </p>

          <p>
            Aujourd'hui, je souhaite construire des systèmes et des outils reproductibles
            qui renforcent la maturité des solutions IoT / IIoT.
          </p>
        </div>
        
        <div style={styles.panel}>
          <span style={styles.subLabel}>ORIGINE</span>

          <p>
            Certains apprennent seulement par la théorie.
            <br />
            J'ai appris par les deux visions.
          </p>
         
          <p>
            C'est là que j'ai pris une habitude théorie et pratique :
            <strong> mesurer, diagnostiquer, corriger, documenter</strong>.
          </p>
        </div>
       
        <div style={styles.panel}>
          <span style={styles.subLabel}>TRAJECTOIRE EN COUCHES</span>

          <ul style={styles.list}>
            <li>
              <strong>Couche 1 — Électronique :</strong> capteurs, signaux,
              précision. Ce que je construis doit être mesurable.
            </li>
            <li>
              <strong>Couche 2 — Terrain :</strong> contraintes, délais,
              coordination. Ce que je propose doit être modulable et fiable.
            </li>
            <li>
              <strong>Couche 3 — Réseau :</strong> pertes, latence, fiabilité.
              Si le transport tombe, tout tombe.
            </li>
            <li>
              <strong>Couche 4 — Logiciel :</strong> architecture, logs,
              dashboards, alertes, validation. Le système doit être fonctionnel.
            </li>
          </ul>
        </div>
       
        <div style={styles.lock}>
          Ce n'est pas qu'une reconversion.
          <br />
          C'est l'assemblage logique de couches qui finissent au même endroit :
          rendre le réel mesurable et fiable.
        </div>
      
        <div style={styles.panel}>
          <span style={styles.subLabel}>POURQUOI IoT / IIoT MAINTENANT</span>

          <p>
            L'industrie naa pas besoin de promesses.
            <br />
            Elle a besoin de maturité.
          </p>

          <p>
            J'aime l'IoT/IIot parce que c'est polydisciplinaire :
            consommation, performances, taux de pertes, temps de réaction,
            stabilité.
          </p>

          <p>
            Mon objectif : <strong>relier l'IOT/IIoT au pilotage</strong> sans perdre
            le terrain en route.
          </p>
        </div>

        <div style={styles.panel}>
          <span style={styles.subLabel}>CE QUE JE CHERCHE</span>

          <p>
            Je cherche une alternance où je peux contribuer à des sujets
            d'intégration, validation et fiabilisation :
          </p>

          <ul style={styles.list}>
            <li>rendre une plateforme plus robuste</li>
            <li>rendre un test reproductible</li>
            <li>rendre un système observable</li>
          </ul>

          <p>
            Je suis particulièrement motivé par les environnements IoT/IIoT basse
            consommation et ses systèmes de communication, où chaque détail
            compte.
          </p>
        </div>

      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    display: 'grid',
    gap: '16px'
  },

  header: {
    marginBottom: '8px'
  },

  label: {
    fontSize: '10px',
    letterSpacing: '0.2em',
    color: '#6b7280'
  },

  title: {
    fontSize: '18px',
    marginTop: '4px'
  },

  panel: {
    backgroundColor: '#020617',
    border: '1px solid #1f2933',
    padding: '12px',
    fontSize: '13px',
    lineHeight: '1.6'
  },

  subLabel: {
    display: 'block',
    fontSize: '10px',
    letterSpacing: '0.15em',
    color: '#9ca3af',
    marginBottom: '8px'
  },

  list: {
    paddingLeft: '16px'
  },

  lock: {
    borderLeft: '2px solid #22c55e',
    paddingLeft: '12px',
    fontSize: '13px',
    color: '#22c55e'
  }
};