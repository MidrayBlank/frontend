import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm fixed-top"
        style={{
          background: 'var(--card-bg, #0B2347)',
          borderBottom: '1px solid var(--border-1, rgba(84,138,255,0.18))',
          backdropFilter: 'blur(2px)',
        }}
      >
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ borderColor: 'var(--primary-500, #1E74FF)' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavLinks />
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {/* Отступ для фиксированной шапки */}
      <div style={{ height: 80 }}></div>
    </>
  );
}