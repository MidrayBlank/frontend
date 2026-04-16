import './style.css';

class Router {
	private routes: Record<string, string> = {
		'/': '/pages/index.html',
		'/about': '/pages/about.html',
	};

	async init() {
		console.log('🚀 Router init');
		await this.loadRoute();
		window.addEventListener('popstate', () => this.loadRoute());
	}

	async loadRoute() {
		const path = location.pathname;
		console.log('📍 Loading:', path);

		// ✅ Правильная проверка!
		const isKnownRoute = path in this.routes; // true/false
		const templatePath = isKnownRoute
			? this.routes[path as keyof typeof this.routes]!
			: '/pages/notfound.html';

		console.log('📄 Template:', templatePath);
		console.log('✅ isKnownRoute:', isKnownRoute);

		try {
			const response = await fetch(templatePath);
			console.log('📥 Response:', response.status);

			if (!response.ok) {
				console.log('❌ Fetch failed, showing error page');
				throw new Error(`HTTP ${response.status}`);
			}

			const html = await response.text();
			document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;
			this.initPage(path);
		} catch (error) {
			console.error('❌ Error:', error);
			this.showErrorPage(); // ✅ сработает!
		}
	}

	private initPage(path: string) {
		console.log('⚙️ Init page:', path);
	}

	private showErrorPage() {
		document.querySelector('#app')!.innerHTML = `
      <div style="text-align:center;padding:50px;color:#ef4444">
        <h1>❌ 404 Страница не найдена</h1>
        <p>Путь: <code>${location.pathname}</code></p>
        <button onclick="router.go('/')">🏠 На главную</button>
      </div>
    `;
	}

	go(path: string) {
		console.log('➡️ Navigate to:', path);
		history.pushState({}, '', path);
		this.loadRoute();
	}
}

const router = new Router();
router.init();
(window as any).router = router;
