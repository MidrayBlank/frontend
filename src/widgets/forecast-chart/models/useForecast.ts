// src/widgets/forecast-chart/models/useForecast.ts
import { useState, useCallback } from 'react';

// Исторические данные
const historicalYears = [2020, 2021, 2022, 2023, 2024];
const historicalData = [145.5, 146.2, 146.8, 147.1, 147.5];

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

export function useForecast() {
  const [result, setResult] = useState<ForecastResult>(() => generateForecast(10));

  const updateForecast = useCallback((years: number) => {
    setResult(generateForecast(years));
  }, []);

  return { forecast: result, updateForecast };
}

function generateForecast(years: number): ForecastResult {
  const forecastYears: number[] = [];
  const forecastData: number[] = [];
  let lastValue = historicalData[historicalData.length - 1];

  for (let i = 1; i <= years; i++) {
    const year = 2024 + i;
    const growth = 0.008 + Math.random() * 0.004; // случайный рост от 0.8% до 1.2%
    lastValue = lastValue * (1 + growth);
    forecastYears.push(year);
    forecastData.push(lastValue);
  }

  const labels = [...historicalYears, ...forecastYears];
  const historical = [...historicalData, ...Array(forecastYears.length).fill(null)];
  const forecast = [...Array(historicalYears.length).fill(null), ...forecastData];

  // Генерируем случайные метрики качества
  const mape = (Math.random() * 3 + 1).toFixed(2);
  const rmse = Math.floor(Math.random() * 5000 + 10000);
  const mae = Math.floor(Math.random() * 4000 + 8000);
  const accuracy = +(95 + Math.random() * 3).toFixed(1);

  return {
    labels,
    historical,
    forecast,
    metrics: {
      mape: `${mape}%`,
      rmse,
      mae,
      accuracy,
    },
  };
}