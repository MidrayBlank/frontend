// src/pages/Forecasting.tsx
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { ForecastChart } from '@/widgets/forecast-chart';
import { MetricsCard } from '@/widgets/metrics-card';
import { RegionSelector, useRegionSelector } from '@/features/region-selector';

export function Forecasting() {
	const { state, handleRegionChange } = useRegionSelector();

	if (state.status === 'loading') return <div>Загрузка регионов...</div>;
	if (state.status === 'error') return <div>Ошибка: {state.message}</div>;

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
						regions={state.regions}
						selected={state.selected}
						onChange={handleRegionChange}
					/>
					<div className="col-md-6 d-flex align-items-end justify-content-md-end">
						<div className="text-muted small">Данные Росстата, прогноз AI</div>
					</div>
				</div>

				{/* Вывод выбранного региона (временный) */}
				<div className="alert alert-info mb-4">
					Выбран регион: <strong>{state.selected.name}</strong>
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
