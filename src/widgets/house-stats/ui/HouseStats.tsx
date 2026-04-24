import { useState, useEffect } from 'react';

export function HouseStats() {
  const [count, setCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-card h-100 d-flex flex-column justify-content-center text-center">
      <i className="fas fa-building fa-3x mb-3" style={{ color: 'var(--cyan-400)' }}></i>
      <div className="house-number">{count.toLocaleString()}</div>
      <div className="mt-2">многоквартирных домов</div>
      <div className="mt-2 small text-muted">+12 за месяц</div>
    </div>
  );
}