import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useForecast } from '../models/useForecast';

export function ForecastChart({ regionCode }: { regionCode: number }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const chartRef = useRef<Chart | null>(null);
	const { forecast, updateForecast } = useForecast(regionCode);

	// Инициализация и обновление графика
	useEffect(() => {
		if (!canvasRef.current) return;

		if (chartRef.current) {
			chartRef.current.destroy();
		}

		chartRef.current = new Chart(canvasRef.current, {
			type: 'line',
			data: {
				labels: forecast.labels,
				datasets: [
					{
						label: 'Фактические данные',
						data: forecast.historical,
						borderColor: 'rgb(54, 162, 235)',
						backgroundColor: 'rgba(54, 162, 235, 0.1)',
						borderWidth: 3,
						pointRadius: 5,
						tension: 0.1,
					},
					{
						label: 'Прогноз',
						data: forecast.forecast,
						borderColor: 'rgb(128, 128, 128)',
						borderWidth: 3,
						borderDash: [5, 5],
						pointRadius: 4,
						tension: 0.1,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				plugins: {
					tooltip: {
						callbacks: {
							label: (context) => {
								const value = context.raw;
								if (!value) return '';
								if (typeof value === 'number')
									return `${context.dataset.label}: ${value.toFixed(1)} млн чел`;
								return '';
							},
						},
					},
				},
				scales: {
					y: {
						title: { display: true, text: 'Численность (млн чел)' },
						min: 140 - 10,
						max: 165 + 10,
					},
				},
			},
		});

		return () => {
			if (chartRef.current) {
				chartRef.current.destroy();
			}
		};
	}, [forecast]);

	const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const years = parseInt(e.target.value, 10);
		updateForecast(years);
	};

	return (
		<div className="card shadow-sm h-100">
			<div className="card-body d-flex flex-column">
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h5 className="mb-0">
						<i className="fas fa-chart-line"></i> График прогноза
					</h5>
					<select className="form-select w-auto" onChange={handlePeriodChange} defaultValue="10">
						<option value="5">5 лет</option>
						<option value="10">10 лет</option>
						<option value="15">15 лет</option>
					</select>
				</div>
				<div style={{ height: '450px', position: 'relative' }}>
					<canvas
						ref={canvasRef}
						width="100%"
						height="100%"
						style={{ display: 'block', maxHeight: '450px' }}
					></canvas>
				</div>
			</div>
		</div>
	);
}
