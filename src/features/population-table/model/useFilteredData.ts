// src/features/population-table/model/useFilteredData.ts
import { useState, useMemo, useEffect } from 'react';
import type { RosstatItem, GeoResponse } from '@/shared/types/russia';
import type { PopulationRecord } from '@/entities/population';
import { transformRosstat } from '@/entities/population/model/transform';

const ROSSTAT_FIELDS = [
	'year',
	'population',
	'birth',
	'death',
	'arrival',
	'departure',
	'male',
	'female',
	'land_area',
	'avg_salary',
	'medicial_facilities',
	'schools',
	'housing_commissioned',
];

interface FiltersState {
	subject: string;
	type: string;
	yearFrom: number;
	yearTo: number;
}

const DEFAULT_FILTERS: FiltersState = {
	subject: '',
	type: '',
	yearFrom: 2006,
	yearTo: 2023,
};

export function useFilteredData() {
	const [data, setData] = useState<PopulationRecord[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function load() {
			try {
				setLoading(true);
				setError(null);

				const [geoRes, rosstatRes] = await Promise.all([
					fetch(`${import.meta.env.VITE_API_URL ?? ''}/api/v1/geo`, {
						headers: { accept: 'application/json' },
						signal: controller.signal,
					}),
					fetch(
						`${import.meta.env.VITE_API_URL ?? ''}/api/v1/rosstat?${new URLSearchParams(
							ROSSTAT_FIELDS.map((f) => ['fields', f]),
						)}`,
						{
							headers: { accept: 'application/json' },
							signal: controller.signal,
						},
					),
				]);

				if (!geoRes.ok) throw new Error(`geo: HTTP ${geoRes.status}`);
				if (!rosstatRes.ok) {
					const json = await rosstatRes.json().catch(() => ({}));
					throw new Error(json.error ?? `rosstat: HTTP ${rosstatRes.status}`);
				}

				const geo: GeoResponse = await geoRes.json();
				const rosstat: RosstatItem[] = await rosstatRes.json();

				setData(transformRosstat(rosstat, geo));
			} catch (err) {
				if ((err as Error).name !== 'AbortError') {
					setError((err as Error).message);
				}
			} finally {
				setLoading(false);
			}
		}

		load();
		return () => controller.abort();
	}, []);

	const [activeFilters, setActiveFilters] = useState<FiltersState>(DEFAULT_FILTERS);
	const [tempFilters, setTempFilters] = useState<FiltersState>(DEFAULT_FILTERS);

	const updateTempFilter = (key: keyof FiltersState, value: string | number) => {
		setTempFilters((prev) => ({ ...prev, [key]: value }));
	};

	const applyFilters = () => setActiveFilters({ ...tempFilters });

	const resetFilters = () => {
		setTempFilters(DEFAULT_FILTERS);
		setActiveFilters(DEFAULT_FILTERS);
	};

	const filteredData = useMemo(() => {
		return data.filter((item) => {
			if (activeFilters.subject && item.subject !== activeFilters.subject) return false;
			if (activeFilters.type && item.type !== activeFilters.type) return false;

			// period вида "2006–2023" или "2020"
			const match = item.period.match(/(\d{4})(?:–(\d{4}))?/);
			if (match) {
				const start = parseInt(match[1]);
				const end = match[2] ? parseInt(match[2]) : start;
				if (start < activeFilters.yearFrom || end > activeFilters.yearTo) return false;
			}

			return true;
		});
	}, [data, activeFilters]);

	const subjectOptions = useMemo(
		() => [...new Set(data.map((d) => d.subject))].filter(Boolean).sort(),
		[data],
	);

	const typeOptions = useMemo(
		() => [...new Set(data.map((d) => d.type))].filter(Boolean).sort(),
		[data],
	);

	const yearRange = useMemo(() => {
		const years = data.flatMap((d) => {
			const match = d.period.match(/(\d{4})(?:–(\d{4}))?/);
			if (!match) return [];
			return match[2] ? [parseInt(match[1]), parseInt(match[2])] : [parseInt(match[1])];
		});
		return years.length
			? { min: Math.min(...years), max: Math.max(...years) }
			: { min: 2004, max: 2025 };
	}, [data]);

	return {
		filteredData,
		loading,
		error,
		tempFilters,
		activeFilters,
		subjectOptions,
		typeOptions,
		updateTempFilter,
		applyFilters,
		resetFilters,
		yearRange,
	};
}
