import { Link, useLocation } from 'react-router-dom';

export default function Toolbar() {
  const { pathname } = useLocation();

  return (
    <nav style={styles.bar}>
      <Link to="/" style={styles.logo}>
        INCIDENT ROOM
      </Link>

      <div style={styles.links}>
        <NavLink to="/control-room" label="Control Room" path={pathname} />
        <NavLink to="/dossier-operateur" label="Dossier" path={pathname} />
        <NavLink to="/missions-deployees" label="Missions" path={pathname} />
        <NavLink to="/arsenal-technique" label="Arsenal" path={pathname} />
        <NavLink to="/case-files" label="Case Files" path={pathname} />
        <NavLink to="/canal-direct" label="Contact" path={pathname} />
      </div>
    </nav>
  );
}

function NavLink({ to, label, path }) {
  const active = path === to;

  return (
    <Link
      to={to}
      style={{
        ...styles.link,
        ...(active ? styles.active : {})
      }}
    >
      {label}
    </Link>
  );
}

const styles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: '#020617',
    borderBottom: '1px solid #1f2933'
  },
  logo: {
    fontSize: '11px',
    letterSpacing: '0.2em',
    color: '#93c5fd',
    textDecoration: 'none'
  },
  links: {
    display: 'flex',
    gap: '12px'
  },
  link: {
    fontSize: '11px',
    color: '#9ca3af',
    textDecoration: 'none'
  },
  active: {
    color: '#22c55e'
  }
};