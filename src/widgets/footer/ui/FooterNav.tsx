// src/widgets/footer/ui/FooterNav.tsx
import { Link } from 'react-router-dom';
import { useFooterLinks } from '../models/useFooterLinks';

export function FooterNav() {
  const { navLinks } = useFooterLinks();

  return (
    <div className="col-md-4">
      <h5 style={{ color: 'var(--text-100, #F4F8FF)' }}>Навигация</h5>
      <ul className="list-unstyled">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-decoration-none"
              style={{ color: 'var(--text-300, #A9B8D6)', transition: '0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-400, #67E7FF)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-300, #A9B8D6)'}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}