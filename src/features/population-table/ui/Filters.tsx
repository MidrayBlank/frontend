interface FiltersProps {
	subject: string;
	type: string;
	periodFrom: number;
	periodTo: number;
	onSubjectChange: (val: string) => void;
	onTypeChange: (val: string) => void;
	onPeriodFromChange: (val: number) => void;
	onPeriodToChange: (val: number) => void;
	onApply: () => void;
	onReset: () => void;
}

export function Filters({
	subject,
	type,
	periodFrom,
	periodTo,
	onSubjectChange,
	onTypeChange,
	onPeriodFromChange,
	onPeriodToChange,
	onApply,
	onReset,
}: FiltersProps) {
	return (
		<div>
			<div className="row mb-4">
				<div className="col-md-3">
					<label className="form-label">Субъект РФ</label>
					<select
						className="form-select"
						value={subject}
						onChange={(e) => onSubjectChange(e.target.value)}
					>
						<option value="">Все</option>
						<option value="Московская область">Московская область</option>
						<option value="Ленинградская область">Ленинградская область</option>
						<option value="Краснодарский край">Краснодарский край</option>
						<option value="Новосибирская область">Новосибирская область</option>
					</select>
				</div>
				<div className="col-md-3">
					<label className="form-label">Тип МО</label>
					<select
						className="form-select"
						value={type}
						onChange={(e) => onTypeChange(e.target.value)}
					>
						<option value="">Все</option>
						<option value="городской округ">Городской округ</option>
						<option value="муниципальный район">Муниципальный район</option>
					</select>
				</div>
				<div className="col-md-3">
					<label className="form-label">Период (год от)</label>
					<input
						type="number"
						className="form-control"
						value={periodFrom}
						onChange={(e) => onPeriodFromChange(Number(e.target.value))}
						min={2004}
						max={2025}
					/>
				</div>
				<div className="col-md-3">
					<label className="form-label">Период (год до)</label>
					<input
						type="number"
						className="form-control"
						value={periodTo}
						onChange={(e) => onPeriodToChange(Number(e.target.value))}
						min={2004}
						max={2025}
					/>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-md-6">
					<button
						className="btn w-100"
						style={{ background: 'var(--primary-500)', color: 'white', borderRadius: 12 }}
						onClick={onApply}
					>
						<i className="fas fa-filter me-2"></i>Применить фильтры
					</button>
				</div>
				<div className="col-md-6">
					<button
						className="btn w-100"
						style={{ background: 'var(--bg-700)', color: 'var(--text-100)', borderRadius: 12 }}
						onClick={onReset}
					>
						<i className="fas fa-undo-alt me-2"></i>Сбросить фильтры
					</button>
				</div>
			</div>
		</div>
	);
}
