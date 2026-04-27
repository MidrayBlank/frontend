type Props = {
	years: number[];
	selectedIndex: number;
	onChange: (index: number) => void;
};

export function YearSelector({ years, selectedIndex, onChange }: Props) {
	return (
		<div className="d-flex align-items-center gap-2">
			<label className="mb-0" style={{ fontSize: 14, whiteSpace: 'nowrap' }}>
				Год:
			</label>
			<select
				className="form-select w-auto"
				value={selectedIndex}
				onChange={(e) => onChange(Number(e.target.value))}
			>
				{years.map((year, index) => (
					<option key={year} value={index}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
}
