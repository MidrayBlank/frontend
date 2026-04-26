import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { TopMunicipalities } from '@/widgets/top-municipalities';
import { Resources } from '@/widgets/resources';
import { HouseStats } from '@/widgets/house-stats';
import { ChoroplethMap } from '@/widgets/choropleth-map';
import { DateTimeWeather } from '@/widgets/date-time-weather';
import { Filters, Table, useFilteredData } from '@/features/population-table';

export function Home() {
  const {
    filteredData,
    tempFilters,
    updateTempFilter,
    applyFilters,
    resetFilters,
  } = useFilteredData();

  return (
    <>
      <Header />
      <div className="container-fluid py-4">
        {/* Часы/погода */}
        <div className="row mb-4">
          <div className="col-12">
            <DateTimeWeather />
          </div>
        </div>

        {/* Карта + топ-5 + виджеты */}
        <div className="row g-4 mb-4">
          {/* Левая колонка: виджеты в столбик */}
          <div className="col-md-3">
            <div className="d-flex flex-column gap-4">
              <Resources />
              <HouseStats />
            </div>
          </div>

          {/* Центральная колонка: карта */}
          <div className="col-md-6">
            <ChoroplethMap />
          </div>

          {/* Правая колонка: топ-5 */}
          <div className="col-md-3">
            <TopMunicipalities />
          </div>
        </div>

        {/* Таблица с фильтрами */}
        <div className="dashboard-card">
          <h5 className="mb-4">
            <i className="fas fa-table me-2" style={{ color: 'var(--cyan-500)' }}></i>
            Детальные данные мониторинга
          </h5>
          <Filters
            subject={tempFilters.subject}
            type={tempFilters.type}
            periodFrom={tempFilters.periodFrom}
            periodTo={tempFilters.periodTo}
            onSubjectChange={(val) => updateTempFilter('subject', val)}
            onTypeChange={(val) => updateTempFilter('type', val)}
            onPeriodFromChange={(val) => updateTempFilter('periodFrom', val)}
            onPeriodToChange={(val) => updateTempFilter('periodTo', val)}
            onApply={applyFilters}
            onReset={resetFilters}
          />
          <Table data={filteredData} />
        </div>
      </div>
      <Footer />
    </>
  );
}