type LegendItem = {
	label: string;
	color: string;
};

type Props = {
	items: LegendItem[];
};

export function MapLegend({ items }: Props) {
	return (
		<div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
			{items.map((item, index) => (
				<div
					key={`${item.label}-${index}`}
					style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}
				>
					<span
						style={{
							width: 14,
							height: 14,
							borderRadius: 3,
							background: item.color,
							display: 'inline-block',
						}}
					/>
					<span>{item.label}</span>
				</div>
			))}
		</div>
	);
}
