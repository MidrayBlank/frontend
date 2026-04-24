import { Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Мониторинг', icon: 'fa-chart-line' },
  { to: '/forecasting', label: 'Прогнозирование', icon: 'fa-chart-bar' },
  { to: '/ai-report', label: 'AI-справка', icon: 'fa-robot' },
];

export function NavLinks() {
  return (
    <ul className="navbar-nav mx-auto" style={{ gap: '2rem' }}>
      {navItems.map((item) => (
        <li key={item.to} className="nav-item">
          <Link
            to={item.to}
            className="nav-link"
            style={{
              fontWeight: 400,
              fontSize: '1.1rem',
              color: 'var(--text-100, #F4F8FF)',
              transition: '0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-500, #19D7FF)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-100, #F4F8FF)')}
          >
            <i className={`fas ${item.icon} me-2`} style={{ color: 'var(--cyan-400, #67E7FF)' }}></i>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}