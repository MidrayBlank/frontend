import { useState, useCallback } from 'react';

const historicalYears = [2020, 2021, 2022, 2023, 2024];

export interface ForecastResult {
	labels: (number | string)[];
	historical: (number | null)[];
	forecast: (number | null)[];
	metrics: {
		mape: string;
		rmse: number;
		mae: number;
		accuracy: number;
	};
}

export function useForecast(regionCode: number) {
	const [years, setYears] = useState(10);

	const updateForecast = useCallback((y: number) => {
		setYears(y);
	}, []);

	return { forecast: generateForecast(years, regionCode), updateForecast };
}

function generateForecast(years: number, regionCode: number): ForecastResult {
	const base = 1 + (regionCode % 50) * 0.1;
	const historicalData = [
		+(base * 2.8).toFixed(1),
		+(base * 2.85).toFixed(1),
		+(base * 2.9).toFixed(1),
		+(base * 2.92).toFixed(1),
		+(base * 2.95).toFixed(1),
	];

	const forecastYears: number[] = [];
	const forecastData: number[] = [];
	let lastValue = historicalData[historicalData.length - 1];
	const growth = 0.008 + (regionCode % 5) * 0.001;

	for (let i = 1; i <= years; i++) {
		lastValue = lastValue * (1 + growth);
		forecastYears.push(2024 + i);
		forecastData.push(lastValue);
	}

	const labels = [...historicalYears, ...forecastYears];
	const historical = [...historicalData, ...Array(forecastYears.length).fill(null)];
	const forecast = [...Array(historicalYears.length).fill(null), ...forecastData];

	const mape = (1 + (regionCode % 30) * 0.1).toFixed(2);
	const rmse = 10000 + (regionCode % 50) * 100;
	const mae = 8000 + (regionCode % 40) * 100;
	const accuracy = +(95 + (regionCode % 30) * 0.1).toFixed(1);

	return {
		labels,
		historical,
		forecast,
		metrics: { mape: `${mape}%`, rmse, mae, accuracy },
	};
}
