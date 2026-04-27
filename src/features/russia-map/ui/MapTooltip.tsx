type Props = {
	name: string;
	code: number;
	value: number | null;
	x: number;
	y: number;
};

export function MapTooltip({ name, code, value, x, y }: Props) {
	return (
		<div
			style={{
				position: 'absolute',
				left: x + 12,
				top: y + 12,
				background: '#fff',
				border: '1px solid #e5e7eb',
				borderRadius: 10,
				padding: '8px 10px',
				boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
				pointerEvents: 'none',
				zIndex: 50,
				fontSize: 14,
				minWidth: 180,
			}}
		>
			<div>
				<strong>{name}</strong>
			</div>
			<div>Код: {code}</div>
			<div>Население: {value == null ? 'нет данных' : value.toLocaleString('ru-RU')}</div>
		</div>
	);
}
