import type { RussiaData, RussiaGeoJson, RosstatItem } from '../types/russia';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

async function fetchJson<T>(url: string): Promise<T> {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`HTTP ${res.status} при запросе ${url}`);
	return res.json() as Promise<T>;
}

export async function loadRussiaData(): Promise<RussiaData> {
	const years = [2020, 2021, 2022, 2023];

	const raw = await fetchJson<RussiaGeoJson>('/maps/russia.geojson');

	const geo: RussiaGeoJson = {
		...raw,
		features: raw.features.map((feature, index) => ({
			...feature,
			properties: {
				name: feature.properties?.name ?? `Регион ${index + 1}`,
				code: feature.properties?.code ?? index + 1,
			},
		})),
	};

	const codes = geo.features.map((f) => `codes=${f.properties.code}`).join('&');

	const rosstat = await fetchJson<RosstatItem[]>(
		`${API_BASE}/api/v1/rosstat?fields=population&${codes}`,
	);

	return { years, geo, rosstat };
}
