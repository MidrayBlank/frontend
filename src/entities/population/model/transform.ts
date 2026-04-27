// src/entities/population/model/transform.ts
import type { RosstatItem, RosstatByYear, GeoResponse } from '@/shared/types/russia';
import type { PopulationRecord } from './types';

function rate(value: number | undefined, population: number | undefined): string {
	if (!value || !population || population === 0) return '0.0';
	return ((value / population) * 1000).toFixed(1);
}

function signed(value: number): string {
	return value >= 0 ? `+${value.toFixed(1)}` : value.toFixed(1);
}

function findNames(
	code: number,
	geo: GeoResponse,
): { subject: string; municipality: string; type: string } {
	if (code === 0) return { subject: 'Российская Федерация', municipality: '', type: 'страна' };

	for (const fs of geo.federal_subjects) {
		if (fs.code === code) {
			return { subject: fs.name, municipality: '', type: 'субъект РФ' };
		}
		for (const um of fs.upper_municipalities) {
			if (um.code === code) {
				return { subject: fs.name, municipality: um.name, type: 'муниципальный район' };
			}
			for (const lm of um.lower_municipalities ?? []) {
				if (lm.code === code) {
					return { subject: fs.name, municipality: lm.name, type: 'городское/сельское поселение' };
				}
			}
		}
	}

	return { subject: '—', municipality: '—', type: '—' };
}

export function transformRosstat(items: RosstatItem[], geo: GeoResponse): PopulationRecord[] {
	return items.map((item, index) => {
		const years = item.by_year;
		const first: RosstatByYear = years[0] ?? {};
		const last: RosstatByYear = years[years.length - 1] ?? {};

		const popFirst = first.population ?? 0;
		const popLast = last.population ?? 0;
		const growthPct = popFirst > 0 ? ((popLast - popFirst) / popFirst) * 100 : 0;

		const birthRate = parseFloat(rate(last.birth, last.population));
		const deathRate = parseFloat(rate(last.death, last.population));
		const naturalVal = birthRate - deathRate;

		const pop1000 = (last.population ?? 0) / 1000;
		const migrationVal = pop1000 > 0 ? ((last.arrival ?? 0) - (last.departure ?? 0)) / pop1000 : 0;

		const firstYear = first.year ?? 0;
		const lastYear = last.year ?? 0;
		const period = firstYear === lastYear ? `${firstYear}` : `${firstYear}–${lastYear}`;

		const { subject, municipality, type } = findNames(item.code, geo);

		return {
			id: index + 1,
			subject,
			municipality,
			type,
			period,
			growth: `${signed(growthPct)}%`,
			birth: birthRate.toFixed(1),
			death: deathRate.toFixed(1),
			natural: signed(naturalVal),
			migration: signed(migrationVal),
			population: popLast,
			male: last.male ?? 0,
			female: last.female ?? 0,
			land_area: last.land_area ?? 0,
			avg_salary: last.avg_salary ?? 0,
			schools: last.schools ?? 0,
			housing_commissioned: last.housing_commissioned ?? 0,
		};
	});
}
