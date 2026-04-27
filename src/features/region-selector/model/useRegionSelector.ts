import { useEffect, useState } from 'react';
import { fetchGeo } from '@/shared/api/geoApi';
import type { UpperMunicipality } from '@/shared/types/russia';

type State =
	| { status: 'loading' }
	| { status: 'error'; message: string }
	| { status: 'ready'; regions: UpperMunicipality[]; selected: UpperMunicipality };

export function useRegionSelector() {
	const [state, setState] = useState<State>({ status: 'loading' });

	useEffect(() => {
		let mounted = true;

		fetchGeo()
			.then((geo) => {
				if (!mounted) return;

				const regions = geo.federal_subjects[0]?.upper_municipalities ?? [];

				if (!regions.length) {
					setState({ status: 'error', message: 'Список регионов пуст' });
					return;
				}

				setState({ status: 'ready', regions, selected: regions[0] });
			})
			.catch((err: unknown) => {
				if (!mounted) return;
				setState({
					status: 'error',
					message: err instanceof Error ? err.message : 'Неизвестная ошибка',
				});
			});

		return () => {
			mounted = false;
		};
	}, []);

	const handleRegionChange = (code: number) => {
		if (state.status !== 'ready') return;

		const found = state.regions.find((r) => r.code === code);
		if (found) setState({ ...state, selected: found });
	};

	return { state, handleRegionChange };
}
