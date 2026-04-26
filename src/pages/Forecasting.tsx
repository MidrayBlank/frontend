// src/pages/Forecasting.tsx
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { ForecastChart } from '@/widgets/forecast-chart';
import { MetricsCard } from '@/widgets/metrics-card';
import { RegionSelector, useRegionSelector } from '@/features/region-selector';

export function Forecasting() {
  const { selectedRegion, handleRegionChange, regionsList } = useRegionSelector();

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row mb-4 align-items-center">
          <div className="col-12">
            <h1 className="mb-4">
              <i className="fas fa-chart-bar text-primary me-2"></i>
              Прогнозирование численности населения
            </h1>
          </div>
        </div>

        {/* Блок выбора региона */}
        <div className="row mb-4">
          <RegionSelector
            regionsList={regionsList}
            selectedRegion={selectedRegion}
            onChange={handleRegionChange}
          />
          <div className="col-md-6 d-flex align-items-end justify-content-md-end">
            <div className="text-muted small">
              Данные Росстата, прогноз AI
            </div>
          </div>
        </div>

        {/* Вывод выбранного региона (временный) */}
        <div className="alert alert-info mb-4">
          Выбран регион: <strong>{selectedRegion}</strong>
        </div>

        {/* График и метрики */}
        <div className="row">
          <div className="col-md-8">
            <ForecastChart />
          </div>
          <div className="col-md-4">
            <MetricsCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}