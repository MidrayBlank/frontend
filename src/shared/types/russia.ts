import type { FeatureCollection, Geometry } from 'geojson';

export type SubjectProperties = {
	code: number;
	name: string;
};

export type RussiaGeoJson = FeatureCollection<Geometry, SubjectProperties>;

// --- Rosstat ---

export type RosstatByAge = {
	age: number;
	male: number;
	female: number;
};

export type RosstatByYear = {
	year?: number;
	population?: number;
	birth?: number;
	death?: number;
	arrival?: number;
	departure?: number;
	male?: number;
	female?: number;
	land_area?: number;
	avg_salary?: number;
	medicial_facilities?: number;
	schools?: number;
	housing_commissioned?: number;
	by_age?: RosstatByAge[];
};

export type RosstatItem = {
	code: number;
	by_year: RosstatByYear[];
};

export type RussiaData = {
	years: number[];
	geo: RussiaGeoJson;
	rosstat: RosstatItem[];
};

// --- GeoApi ---
export type LowerMunicipality = {
	name: string;
	code: number;
};

export type UpperMunicipality = {
	name: string;
	code: number;
	upper_municipalities: UpperMunicipality[] | null;
};

export type FederalSubject = {
	name: string;
	code: number;
	upper_municipalities: UpperMunicipality[];
};

export type GeoResponse = UpperMunicipality[];
