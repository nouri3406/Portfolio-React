import Layout from "../components/Layout";

export default function CanalDirect() {
  return (
    <Layout>
      <div style={styles.container}>
        
        <h1 style={styles.title}>CANAL DIRECT</h1>
        
        <div style={styles.links}>
          {/* GMAIL */}
          <a href="mailto:nouri.foudilbey@gmail.com" style={styles.link}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
              alt="Gmail" 
              style={styles.icon} 
            />
            nouri.foudilbey@gmail.com
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/nouri-foudil-bey"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
              alt="LinkedIn" 
              style={styles.icon} 
            />
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Nouri3406"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
              alt="GitHub" 
              style={{ ...styles.icon, filter: 'invert(1)' }} 
            />
            GitHub
          </a>
          
          {/* CURRICULUM VITAE */}
          <a
            href={`${import.meta.env.BASE_URL}projects/Curriculum%20Vitae.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2989/2989976.png" 
              alt="CV" 
              style={{ ...styles.icon, filter: 'invert(66%) sepia(87%) saturate(406%) hue-rotate(94deg) brightness(95%) contrast(85%)' }} 
            />
            Curriculum Vitae
          </a>
        </div>
      
        <form
          action="https://formsubmit.co/nouri.foudilbey@gmail.com"
          method="POST"
          style={styles.form}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nouveau message - Portfolio" />

          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            required
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            ENVOYER
          </button>
        </form>

      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "28px",
    backgroundColor: "#020617",
    border: "2px solid #0f172a",
    borderRadius: "12px",
    boxShadow: `inset 0 0 30px rgba(34,197,94,0.08), 0 0 25px rgba(0,0,0,0.9)`,
    display: "flex",
    flexDirection: "column",
    gap: "28px"
  },
  title: {
    fontSize: "1.3rem",
    letterSpacing: "0.18em",
    color: "#22c55e",
    textAlign: "center"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  link: {
    color: "#22c55e",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontFamily: "monospace",
    display: "flex",
    alignItems: "center"
  },
  icon: {
    width: "20px",
    height: "20px",
    marginRight: "12px",
    objectFit: "contain"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    backgroundColor: "#020617",
    border: "1px solid #22c55e",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "inset 0 0 20px rgba(34,197,94,0.06)"
  },
  input: {
    backgroundColor: "#020617",
    border: "1px solid #22c55e",
    color: "#22c55e",
    padding: "10px",
    outline: "none",
    fontFamily: "monospace"
  },
  textarea: {
    backgroundColor: "#020617",
    border: "1px solid #22c55e",
    color: "#22c55e",
    padding: "10px",
    outline: "none",
    fontFamily: "monospace"
  },
  button: {
    backgroundColor: "#020617",
    border: "1px solid #22c55e",
    color: "#22c55e",
    padding: "10px",
    cursor: "pointer",
    fontWeight: "600",
    letterSpacing: "0.15em"
  }
};