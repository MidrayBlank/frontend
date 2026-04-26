import type { RussiaData, RussiaGeoJson } from '../types/russia';

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

function hashString(value: string): number {
	let hash = 0;
	for (let i = 0; i < value.length; i += 1) {
		hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
	}
	return hash;
}

function buildMockPopulation(name: string, yearIndex: number): number {
	const hash = hashString(name);
	const base = 120_000 + (hash % 12_000_000);
	const growth = 0.985 + (hash % 11) * 0.003;
	return Math.round(base * Math.pow(growth, yearIndex));
}

export async function loadRussiaData(): Promise<RussiaData> {
	const raw = (await fetch('/maps/russia.geojson').then((r) => r.json())) as RussiaGeoJson;

	const geo: RussiaGeoJson = {
		...raw,
		features: raw.features.map((feature, index) => {
			const name = feature.properties?.name ?? `Регион ${index + 1}`;
			return {
				...feature,
				properties: {
					name,
					code: feature.properties?.code ?? index + 1,
				},
			};
		}),
	};

	const rosstat = geo.features.map((feature, index) => {
		const name = feature.properties?.name ?? `Регион ${index + 1}`;
		const code = feature.properties?.code ?? index + 1;
		return {
			code,
			by_year: YEARS.map((_, yearIndex) => ({
				population: buildMockPopulation(name, yearIndex),
			})),
		};
	});

	return { years: YEARS, geo, rosstat };
}
