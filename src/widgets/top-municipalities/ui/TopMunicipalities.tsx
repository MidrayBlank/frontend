import { useState } from 'react';
import { growthData, declineData, type TopItem } from '@/entities/population';

export function TopMunicipalities() {
  const [type, setType] = useState<'growth' | 'decline'>('growth');
  const data: TopItem[] = type === 'growth' ? growthData : declineData;

  return (
    <div className="dashboard-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0"><i className="fas fa-trophy me-2" style={{ color: 'var(--cyan-500)' }}></i>Топ-5 муниципалитетов</h5>
        <div className="btn-group">
          <button className={`btn btn-sm ${type === 'growth' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setType('growth')} style={{ borderRadius: 20 }}>📈 Рост</button>
          <button className={`btn btn-sm ${type === 'decline' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setType('decline')} style={{ borderRadius: 20 }}>📉 Снижение</button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead><tr><th>#</th><th>Муниципалитет</th><th>Динамика</th></tr></thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td className={item.growth.includes('+') ? 'text-success fw-bold' : 'text-danger fw-bold'}>{item.growth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}