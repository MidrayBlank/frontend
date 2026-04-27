import { useEffect, useRef } from 'react';

declare const ymaps: any;

export function Heatmap() {
	const mapRef = useRef<HTMLDivElement>(null);
	const initialized = useRef(false);

	useEffect(() => {
		if (!mapRef.current || initialized.current) return;
		if (typeof ymaps === 'undefined') {
			console.error('Яндекс.Карты не загружены');
			return;
		}

		ymaps.ready(() => {
			const map = new ymaps.Map(mapRef.current, {
				center: [62.0, 100.0],
				zoom: 3,
				controls: ['zoomControl', 'fullscreenControl'],
			});

			const points = [
				{ coords: [55.751244, 37.618423], weight: 4900 },
				{ coords: [59.931058, 30.360913], weight: 3800 },
				{ coords: [55.755826, 37.6173], weight: 1600 },
				{ coords: [45.03547, 38.975313], weight: 750 },
				{ coords: [55.030199, 82.92043], weight: 150 },
			];

			const heatmap = new ymaps.Heatmap({
				radius: 30,
				opacity: 0.7,
				gradient: {
					0.0: 'rgba(135,206,235,0.8)',
					0.2: '#90EE90',
					0.4: '#FFD700',
					0.6: '#FF8C42',
					0.8: '#FF4500',
					1.0: '#FF0000',
				},
			});
			heatmap.setData(points.map((p) => ({ coordinates: p.coords, weight: p.weight / 1000 })));
			map.geoObjects.add(heatmap);

			const search = new ymaps.control.SearchControl({
				options: { noPlacemark: true, useMapBounds: false },
			});
			map.controls.add(search);
			search.events.add('resultselect', (e: any) => {
				search.getResult(e.get('index')).then((res: any) => {
					map.setCenter(res.geometry.getCoordinates(), 8, { duration: 500 });
				});
			});
			initialized.current = true;
		});
	}, []);

	return (
		<div
			id="map"
			ref={mapRef}
			style={{ width: '100%', height: '500px', borderRadius: '16px' }}
		></div>
	);
}
