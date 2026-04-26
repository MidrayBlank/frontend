// src/features/population-table/ui/Table.tsx
import type { PopulationRecord } from '@/entities/population';

export function Table({ data }: { data: PopulationRecord[] }) {
  if (data.length === 0) {
    return <div className="text-center py-4">Нет данных по выбранным фильтрам</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead style={{ background: 'var(--bg-800)' }}>
          <tr>
            <th>ID</th><th>Субъект РФ</th><th>Муниципалитет</th><th>Тип МО</th><th>Период</th>
            <th>Динамика</th><th>Население (чел)</th><th>Мужчины</th><th>Женщины</th>
            <th>Рождаемость (‰)</th><th>Смертность (‰)</th><th>Ест.прирост</th><th>Миграция</th>
            <th>Площадь (км²)</th><th>Ср.зарплата (₽)</th><th>Школы</th><th>Жильё (тыс.м²)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.subject}</td>
              <td>{item.municipality}</td>
              <td>{item.type}</td>
              <td>{item.period}</td>
              <td className={item.growth.includes('+') ? 'text-success' : 'text-danger'}>{item.growth}</td>
              <td>{item.population.toLocaleString()}</td>
              <td>{item.male.toLocaleString()}</td>
              <td>{item.female.toLocaleString()}</td>
              <td>{item.birth}</td>
              <td>{item.death}</td>
              <td className={item.natural.includes('+') ? 'text-success' : 'text-danger'}>{item.natural}</td>
              <td className={item.migration.includes('+') ? 'text-success' : 'text-danger'}>{item.migration}</td>
              <td>{item.land_area.toLocaleString()}</td>
              <td>{item.avg_salary.toLocaleString()}</td>
              <td>{item.schools}</td>
              <td>{item.housing_commissioned.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
