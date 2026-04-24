import { useTheme } from '../models/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="btn btn-sm"
      style={{
        background: 'var(--bg-700, #12386C)',
        color: 'var(--text-100, #F4F8FF)',
        borderRadius: 40,
        padding: '6px 14px',
      }}
      onClick={toggleTheme}
    >
      <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'} me-1`}></i>
      {theme === 'light' ? 'Светлая' : 'Тёмная'}
    </button>
  );
}