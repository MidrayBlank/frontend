import type { RefObject } from 'react';
import type { ZoomTransform } from 'd3-zoom';
import type { GeoPath, GeoPermissibleObjects } from 'd3-geo';
import type { Feature, Geometry } from 'geojson';
import type { SubjectProperties } from '../../../shared/types/russia';

type HoverState = {
	code: number;
	name: string;
	value: number | null;
	x: number;
	y: number;
} | null;

type Props = {
	svgRef: RefObject<SVGSVGElement | null>;
	width: number;
	height: number;
	features: Feature<Geometry, SubjectProperties>[];
	transform: ZoomTransform;
	path: GeoPath<unknown, GeoPermissibleObjects>;
	getColor: (code: number) => string;
	getValue: (code: number) => number | null;
	onHoverChange: (state: HoverState) => void;
	onFeatureClick: (feature: Feature<Geometry, SubjectProperties>) => void;
};

export function MapCanvas({
	svgRef,
	width,
	height,
	features,
	transform,
	path,
	getColor,
	getValue,
	onHoverChange,
	onFeatureClick,
}: Props) {
	return (
		<svg
			ref={svgRef}
			width="100%"
			viewBox={`0 0 ${width} ${height}`}
			style={{ display: 'block', background: '#fff' }}
		>
			<g transform={transform.toString()}>
				{features.map((feature) => {
					const { code, name } = feature.properties;
					const fill = getColor(code);

					return (
						<path
							key={code}
							d={path(feature) ?? undefined}
							fill={fill}
							stroke="#ffffff"
							strokeWidth={1}
							onMouseEnter={(e) =>
								onHoverChange({
									code,
									name,
									value: getValue(code),
									x: e.pageX - 180,
									y: e.pageY - 200,
								})
							}
							onMouseMove={(e) =>
								onHoverChange({
									code,
									name,
									value: getValue(code),
									x: e.pageX - 180,
									y: e.pageY - 200,
								})
							}
							onMouseLeave={() => onHoverChange(null)}
							onClick={() => onFeatureClick(feature)}
							style={{ cursor: 'pointer' }}
						/>
					);
				})}
			</g>
		</svg>
	);
}
