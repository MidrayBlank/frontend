import type { GeoResponse } from '../types/russia';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export async function fetchGeo(): Promise<GeoResponse> {
	const res = await fetch(`${API_BASE}/api/v1/geo`, {
		headers: { accept: 'application/json' },
	});

	if (!res.ok) throw new Error(`HTTP ${res.status} при запросе /api/v1/geo`);

	return res.json() as Promise<GeoResponse>;
}
