import { useMemo } from 'react';
import { geoConicEqualArea, geoPath } from 'd3-geo';
import type { GeoProjection } from 'd3-geo';
import type { FeatureCollection, Geometry } from 'geojson';
import { SubjectProperties } from '@/shared/types/russia';

type Params = {
	geo: FeatureCollection<Geometry, SubjectProperties>;
	width: number;
	height: number;
};

export function useMapProjection({ geo, width, height }: Params) {
	const projection = useMemo<GeoProjection>(
		() => geoConicEqualArea().parallels([47, 75]).rotate([-105, 0]).fitSize([width, height], geo),
		[geo, width, height],
	);

	const path = useMemo(() => geoPath(projection), [projection]);

	return { projection, path };
}
