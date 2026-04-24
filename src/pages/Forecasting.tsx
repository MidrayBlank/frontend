// src/pages/Forecasting.tsx
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { ForecastChart } from '@/widgets/forecast-chart';
import { MetricsCard } from '@/widgets/metrics-card';

export function Forecasting() {
  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">
              <i className="fas fa-chart-bar text-primary"></i> Прогнозирование численности населения
            </h1>
          </div>
        </div>
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