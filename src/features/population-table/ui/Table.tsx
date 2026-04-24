import { type PopulationRecord } from '@/entities/population';

interface TableProps {
  data: PopulationRecord[];
}

export function Table({ data }: TableProps) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead style={{ background: 'var(--bg-800)' }}>
          <tr>
            <th>ID</th><th>Субъект РФ</th><th>Муниципалитет</th><th>Тип МО</th><th>Период</th>
            <th>Динамика</th><th>Рождаемость</th><th>Смертность</th><th>Ест.прирост</th><th>Миграция</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.subject}</td>
              <td>{item.municipality}</td>
              <td>{item.type}</td>
              <td>{item.period}</td>
              <td className={item.growth.includes('+') ? 'text-success' : 'text-danger'}>{item.growth}</td>
              <td>{item.birth}‰</td>
              <td>{item.death}‰</td>
              <td className={item.natural.includes('+') ? 'text-success' : 'text-danger'}>{item.natural}‰</td>
              <td className={item.migration.includes('+') ? 'text-success' : 'text-danger'}>{item.migration}‰</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
