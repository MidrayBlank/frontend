// src/widgets/choropleth-map/ui/ChoroplethMap.tsx
export function ChoroplethMap() {
  return (
    <div className="dashboard-card p-3">
      <h5 className="mb-3">
        <i className="fas fa-map me-2" style={{ color: 'var(--cyan-500)' }}></i>
        Тепловая карта плотности населения
      </h5>
      <div 
        className="d-flex align-items-center justify-content-center rounded"
        style={{ height: '500px', borderRadius: '16px', background: 'var(--bg-700)' }}
      >
        <p className="text-muted mb-0">Карта загружается...</p>
      </div>
    </div>
  );
}