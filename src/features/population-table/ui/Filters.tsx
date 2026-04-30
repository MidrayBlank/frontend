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
	subjectOptions: string[];
	typeOptions: string[];
	yearMin: number;
	yearMax: number;
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
	subjectOptions,
	typeOptions,
	yearMax,
	yearMin,
}: FiltersProps) {
	return (
		<div>
			<div className="row mb-4">
				<div className="col-md-3">
					<label className="form-label">Субъект РФ</label>
					<select
						value={subject}
						onChange={(e) => onSubjectChange(e.target.value)}
						className="form-select"
					>
						<option value="">Все</option>
						{subjectOptions.map((s) => (
							<option key={s} value={s}>
								{s}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-3">
					<label className="form-label">Тип МО</label>
					<select
						value={type}
						onChange={(e) => onTypeChange(e.target.value)}
						className="form-select"
					>
						<option value="">Все</option>
						{typeOptions.map((t) => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-3">
					<label className="form-label">Период (год от)</label>
					<input
						type="number"
						className="form-control"
						value={periodFrom}
						onChange={(e) => onPeriodFromChange(Number(e.target.value))}
						min={yearMin}
						max={yearMax}
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
