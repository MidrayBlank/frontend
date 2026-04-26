import type { GeoResponse } from '../types';

const API_BASE = 'https://backend.midray.ru/api/v1';

export async function fetchGeoTree(): Promise<GeoResponse> {
  const res = await fetch(`${API_BASE}/geo`);
  if (!res.ok) throw new Error('Ошибка загрузки справочника регионов');
  return res.json();
}