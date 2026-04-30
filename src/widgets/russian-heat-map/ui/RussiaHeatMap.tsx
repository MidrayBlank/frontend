import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { RussiaData } from '@/shared/types/russia';
import {
	useMapProjection,
	useMapZoom,
	usePopulationColor,
	MapCanvas,
	MapTooltip,
	MapLegend,
	YearSelector,
} from '@/features/russia-map';

type Props = {
	data: RussiaData;
	width?: number;
	height?: number;
};

type HoverState = {
	code: number;
	name: string;
	value: number | null;
	x: number;
	y: number;
} | null;

const wrapperStyle: CSSProperties = {
	width: '100%',
	background: 'transparent',
	borderRadius: 16,
	border: '1px solid #e5e7eb',
	padding: 16,
};

export function RussiaHeatMap({ data, width = 1100, height = 720 }: Props) {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const [yearIndex, setYearIndex] = useState(0);
	const [hover, setHover] = useState<HoverState>(null);

	const years = data.years ?? [];
	const safeYearIndex = years.length ? Math.max(0, Math.min(yearIndex, years.length - 1)) : 0;

	const { path } = useMapProjection({ geo: data.geo, width, height });

	const { transform, zoomToFeature } = useMapZoom({ svgRef, width, height, path });

	const { legend, getColor, getValue } = usePopulationColor({
		rosstat: data.rosstat,
		selectedYear: years[safeYearIndex],
		hasYears: years.length > 0,
	});

	if (!years.length || !data.geo.features.length) {
		return (
			<div style={wrapperStyle}>
				<div>Нет данных для отображения карты.</div>
			</div>
		);
	}

	return (
		<div style={wrapperStyle}>
			<div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
				<YearSelector years={years} selectedIndex={safeYearIndex} onChange={setYearIndex} />
				<div style={{ fontSize: 14, color: 'var(--text-500, #6F82A8)' }}>
					Население · {years[safeYearIndex]}
				</div>
			</div>

			<div style={{ position: 'relative' }}>
				<MapCanvas
					svgRef={svgRef}
					width={width}
					height={height}
					features={data.geo.features}
					transform={transform}
					path={path}
					getColor={getColor}
					getValue={getValue}
					onHoverChange={setHover}
					onFeatureClick={zoomToFeature}
				/>
				{hover && <MapTooltip {...hover} />}
			</div>

			<MapLegend items={legend} />
		</div>
	);
}
