import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="navbar-brand d-flex align-items-center">
      <div
        style={{
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 12,
        }}
      >
        <span style={{ color: 'white', fontWeight: 600, fontSize: 20 }}>M</span>
      </div>
      <strong
        style={{
          fontWeight: 500,
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Midray
      </strong>
    </Link>
  );
}