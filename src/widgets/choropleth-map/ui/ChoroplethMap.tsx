import { loadRussiaData } from '@/shared/api';
import { RussiaData } from '@/shared/types/russia';
import { RussiaHeatMap } from '@/widgets/russian-heat-map';
import { useEffect, useState } from 'react';

export function ChoroplethMap() {
	const [data, setData] = useState<RussiaData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;

		loadRussiaData()
			.then((result) => {
				if (mounted) setData(result);
			})
			.catch((err: unknown) => {
				if (!mounted) return;
				setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
			});

		return () => {
			mounted = false;
		};
	}, []);

	if (error) {
		return <div style={{ padding: 24, fontFamily: 'sans-serif' }}>Ошибка: {error}</div>;
	}

	if (!data) {
		return <div style={{ padding: 24, fontFamily: 'sans-serif' }}>Загрузка...</div>;
	}

	return (
		<div className="dashboard-card p-3">
			<h5 className="mb-3">
				<i className="fas fa-map me-2" style={{ color: 'var(--cyan-500)' }}></i>
				Тепловая карта плотности населения
			</h5>
			<div
				className="d-flex align-items-center justify-content-center rounded"
				style={{ borderRadius: '16px', background: 'var(--bg-700)' }}
			>
				<RussiaHeatMap data={data} width={800} height={400} />
			</div>
		</div>
	);
}
