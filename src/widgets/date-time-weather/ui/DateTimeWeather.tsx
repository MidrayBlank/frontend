import { useDateTimeWeather } from '../models/useDateTimeWeather';

export function DateTimeWeather() {
  const { time, date, weather } = useDateTimeWeather();

  return (
    <div className="dashboard-card d-flex flex-wrap align-items-center justify-content-between">
      <div>
        <div className="time-digits">{time}</div>
        <div className="small" style={{ color: 'var(--text-300)' }}>{date}</div>
      </div>
      <div className="vr mx-3 d-none d-md-block" style={{ height: 50 }}></div>
      <div className="d-flex align-items-center gap-3">
        <i className={`fas ${weather.icon} fa-2x`} style={{ color: 'var(--cyan-400)' }}></i>
        <div><span className="fw-bold fs-3">{weather.temp}</span> °C</div>
        <div className="vr"></div>
        <div><i className="fas fa-wind"></i> {weather.wind} м/с</div>
        <div><i className="fas fa-tachometer-alt"></i> {weather.pressure} мм</div>
      </div>
    </div>
  );
}