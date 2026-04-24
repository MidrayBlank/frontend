import { useState, useEffect } from 'react';

export function useDateTimeWeather() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState({ temp: 0, wind: 0, pressure: 0, icon: '' });

  const updateTime = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const timeStr = now.toLocaleTimeString('ru-RU');
    setTime(`${dayOfYear} дн ${timeStr}`);
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    setDate(`${weekdays[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`);
  };

  const updateWeather = () => {
    const temp = (15 + Math.random() * 10).toFixed(1);
    const wind = (2 + Math.random() * 6).toFixed(1);
    const pressure = 745 + Math.floor(Math.random() * 20);
    const hour = new Date().getHours();
    const icon = hour > 6 && hour < 20 ? 'fa-sun' : 'fa-moon';
    setWeather({ temp: parseFloat(temp), wind: parseFloat(wind), pressure, icon });
  };

  useEffect(() => {
    updateTime();
    updateWeather();
    const timeInterval = setInterval(updateTime, 1000);
    const weatherInterval = setInterval(updateWeather, 60000);
    return () => {
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  return { time, date, weather };
}