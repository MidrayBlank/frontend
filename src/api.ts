import './style.css';

class Router {
	private routes: Record<string, string> = {
		'/': '/pages/index.html',
		'/about': '/pages/about.html',
	};

	async init() {
		await this.loadRoute();
		window.addEventListener('popstate', () => this.loadRoute());
	}

	async loadRoute() {
		const path = location.pathname;

		const isKnownRoute = path in this.routes;
		const templatePath = isKnownRoute
			? this.routes[path as keyof typeof this.routes]!
			: '/pages/notfound.html';

		try {
			const response = await fetch(templatePath);

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}`);
			}

			const html = await response.text();
			document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;
		} catch (error) {
			console.error('❌ Error:', error);
		}
	}

	go(path: string) {
		history.pushState({}, '', path);
		this.loadRoute();
	}
}

const router = new Router();
router.init();
(window as any).router = router;
