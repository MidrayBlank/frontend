import { useEffect, useState } from 'react';
import { fetchGeo } from '@/shared/api/geoApi';
import type { FederalSubject } from '@/shared/types/russia';

type State =
	| { status: 'loading' }
	| { status: 'error'; message: string }
	| { status: 'ready'; regions: FederalSubject[]; selected: FederalSubject };

export function useRegionSelector() {
	const [state, setState] = useState<State>({ status: 'loading' });

	useEffect(() => {
		let mounted = true;

		fetchGeo()
			.then((geo) => {
				if (!mounted) return;

				if (!geo.length) {
					setState({ status: 'error', message: 'Список регионов пуст' });
					return;
				}

				setState({ status: 'ready', regions: geo, selected: geo[0] });
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
