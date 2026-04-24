import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { TopMunicipalities } from '@/widgets/top-municipalities';
import { Resources } from '@/widgets/resources';
import { HouseStats } from '@/widgets/house-stats';
import { Heatmap } from '@/widgets/heatmap';
import { DateTimeWeather } from '@/widgets/date-time-weather';
import { Filters, Table, useFilteredData } from '@/features/population-table';

export function Home() {
  const { filteredData, filters, updateFilter, resetFilters } = useFilteredData();
  return (
    <>
      <Header />
      <div className="container-fluid py-4">
        {/* Часы, дата, погода */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <DateTimeWeather />
          </div>
          <div className="col-md-4 text-end">
            {/* Раньше здесь была кнопка темы, теперь она в шапке */}
          </div>
        </div>

        {/* Ресурсы и дома */}
        <div className="row g-4 mb-5">
          <div className="col-lg-8">
            <Resources />
          </div>
          <div className="col-lg-4">
            <HouseStats />
          </div>
        </div>

        {/* Карта и топ-5 */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="dashboard-card">
              <h5 className="mb-3"><i className="fas fa-map me-2" style={{ color: 'var(--cyan-500)' }}></i>Тепловая карта плотности населения</h5>
              <Heatmap />
            </div>
          </div>
          <div className="col-md-4">
            <TopMunicipalities />
          </div>
        </div>

        {/* Таблица и фильтры */}
        <div className="dashboard-card">
          <h5 className="mb-4"><i className="fas fa-table me-2" style={{ color: 'var(--cyan-500)' }}></i>Детальные данные мониторинга</h5>
          <Filters
            subject={filters.subject}
            type={filters.type}
            periodFrom={filters.periodFrom}
            periodTo={filters.periodTo}
            onSubjectChange={(val) => updateFilter('subject', val)}
            onTypeChange={(val) => updateFilter('type', val)}
            onPeriodFromChange={(val) => updateFilter('periodFrom', val)}
            onPeriodToChange={(val) => updateFilter('periodTo', val)}
            onApply={resetFilters}
            onReset={resetFilters}
          />
          <Table data={filteredData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
