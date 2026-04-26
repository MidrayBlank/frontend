import { useMemo } from 'react';
import { scaleSequential } from 'd3-scale';
import { RosstatItem } from '@/shared/types/russia';

type LegendItem = {
	label: string;
	color: string;
};

function interpolateHeat(t: number): string {
	const stops = [
		{ t: 0, rgb: [254, 240, 138] },
		{ t: 0.5, rgb: [251, 146, 60] },
		{ t: 1, rgb: [220, 38, 38] },
	];

	const clamped = Math.max(0, Math.min(1, t));
	let left = stops[0];
	let right = stops[stops.length - 1];

	for (let i = 0; i < stops.length - 1; i += 1) {
		if (clamped >= stops[i].t && clamped <= stops[i + 1].t) {
			left = stops[i];
			right = stops[i + 1];
			break;
		}
	}

	const range = right.t - left.t || 1;
	const localT = (clamped - left.t) / range;
	const rgb = left.rgb.map((start, i) => Math.round(start + (right.rgb[i] - start) * localT)) as [
		number,
		number,
		number,
	];

	return `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`;
}

type Params = {
	rosstat: RosstatItem[];
	yearIndex: number;
	hasYears: boolean;
};

export function usePopulationColor({ rosstat, yearIndex, hasYears }: Params) {
	const valueByCode = useMemo(() => {
		const map = new Map<number, number>();
		if (!hasYears) return map;

		for (const item of rosstat) {
			const value = item.by_year[yearIndex]?.population;
			if (typeof value === 'number' && Number.isFinite(value)) {
				map.set(item.code, value);
			}
		}

		return map;
	}, [rosstat, yearIndex, hasYears]);

	const values = useMemo(() => Array.from(valueByCode.values()), [valueByCode]);

	const min = values.length ? Math.min(...values) : 0;
	const max = values.length ? Math.max(...values) : 1;

	const colorScale = useMemo(() => {
		const safeMax = min === max ? min + 1 : max;
		return scaleSequential(interpolateHeat).domain([min, safeMax]);
	}, [min, max]);

	const legend = useMemo<LegendItem[]>(() => {
		if (!values.length) return [];

		return Array.from({ length: 5 }, (_, i) => {
			const t = i / 4;
			const value = min + (max - min) * t;
			return {
				label: Math.round(value).toLocaleString('ru-RU'),
				color: String(colorScale(value)),
			};
		});
	}, [colorScale, values.length, min, max]);

	const getColor = (code: number): string => {
		const value = valueByCode.get(code);
		return value == null ? '#e5e7eb' : String(colorScale(value));
	};

	const getValue = (code: number): number | null => valueByCode.get(code) ?? null;

	return { legend, getColor, getValue };
}
