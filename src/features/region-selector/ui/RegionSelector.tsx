import type { UpperMunicipality } from '@/shared/types/russia';

type Props = {
	regions: UpperMunicipality[];
	selected: UpperMunicipality;
	onChange: (code: number) => void;
};

export function RegionSelector({ regions, selected, onChange }: Props) {
	return (
		<div className="col-md-6">
			<label className="form-label fw-bold">Выберите регион:</label>
			<select
				className="form-select"
				value={selected.code}
				onChange={(e) => onChange(Number(e.target.value))}
			>
				{regions.map((region) => (
					<option key={region.code} value={region.code}>
						{region.name}
					</option>
				))}
			</select>
		</div>
	);
}
