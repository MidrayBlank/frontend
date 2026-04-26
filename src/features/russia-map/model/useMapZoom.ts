import { useEffect, useState } from 'react';
import { zoom, zoomIdentity, type ZoomTransform } from 'd3-zoom';
import { select } from 'd3-selection';
import type { RefObject } from 'react';
import type { GeoPath, GeoPermissibleObjects } from 'd3-geo';
import type { Feature, Geometry } from 'geojson';
import { SubjectProperties } from '@/shared/types/russia';

type Params = {
	svgRef: RefObject<SVGSVGElement | null>;
	width: number;
	height: number;
	path: GeoPath<unknown, GeoPermissibleObjects>;
};

export function useMapZoom({ svgRef, width, height, path }: Params) {
	const [transform, setTransform] = useState<ZoomTransform>(zoomIdentity);

	useEffect(() => {
		const svg = svgRef.current;
		if (!svg) return;

		const behavior = zoom<SVGSVGElement, unknown>()
			.scaleExtent([1, 12])
			.on('zoom', (event) => setTransform(event.transform));

		select(svg).call(behavior);

		return () => {
			select(svg).on('.zoom', null);
		};
	}, [svgRef]);

	const zoomToFeature = (feature: Feature<Geometry, SubjectProperties>) => {
		const bounds = path.bounds(feature);
		const [[x0, y0], [x1, y1]] = bounds;

		const dx = x1 - x0;
		const dy = y1 - y0;

		if (!dx || !dy) return;

		const scale = Math.min(12, 0.9 / Math.max(dx / width, dy / height));
		const tx = width / 2 - (scale * (x0 + x1)) / 2;
		const ty = height / 2 - (scale * (y0 + y1)) / 2;

		setTransform(zoomIdentity.translate(tx, ty).scale(scale));
	};

	return { transform, zoomToFeature };
}
