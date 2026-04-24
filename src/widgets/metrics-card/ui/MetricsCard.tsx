import { useForecast } from '@/widgets/forecast-chart/models/useForecast';

export function MetricsCard() {
  const { forecast } = useForecast();
  const { mape, rmse, mae, accuracy } = forecast.metrics;

  return (
    <div className="card bg-primary text-white shadow-sm h-100">
      <div className="card-body">
        <h5><i className="fas fa-chart-simple"></i> Метрики качества</h5>
        <hr />
        <p><strong>MAPE:</strong> {mape}</p>
        <p><strong>RMSE:</strong> {rmse.toLocaleString()}</p>
        <p><strong>MAE:</strong> {mae.toLocaleString()}</p>
        <p><strong>Точность:</strong> {accuracy}%</p>
      </div>
    </div>
  );
}
