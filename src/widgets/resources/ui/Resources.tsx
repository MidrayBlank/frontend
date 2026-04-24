import { useResources } from '../models/useResources';

function ResourceCard({ title, icon, data }: { title: string; icon: string; data: { value: number; change: number; trend: string; unit: string } }) {
  const isUp = data.trend === 'up';
  return (
    <div className="col-md-6">
      <div className="dashboard-card">
        <div className="d-flex justify-content-between">
          <i className={`fas ${icon} resource-icon`}></i>
          <div className="text-end">
            <div className="resource-number">{data.value.toFixed(1)}</div>
            <div className="small">{data.unit}</div>
          </div>
        </div>
        <div className="mt-2 d-flex justify-content-between">
          <span>{title}</span>
          <span className={`stat-change ${isUp ? 'stat-up' : 'stat-down'}`}>
            <i className={`fas fa-arrow-${isUp ? 'up' : 'down'}`}></i>
            {data.change > 0 ? '+' : ''}{data.change}%
          </span>
        </div>
        <div className="mt-1 small text-muted"><i className="fas fa-chart-line"></i> суточное потребление</div>
      </div>
    </div>
  );
}

export function Resources() {
  const resources = useResources();
  return (
    <div className="row g-4">
      <ResourceCard title="Природный газ" icon="fa-fire" data={resources.gas} />
      <ResourceCard title="Электроэнергия" icon="fa-bolt" data={resources.power} />
      <ResourceCard title="Тепло" icon="fa-temperature-high" data={resources.heat} />
      <ResourceCard title="Вода" icon="fa-water" data={resources.water} />
    </div>
  );
}