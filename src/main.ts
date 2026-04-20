import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Router {
    private routes: Record<string, string> = {
        '/': '/pages/index.html',
        '/monitoring': '/pages/index.html',
        '/forecasting': '/pages/forecasting.html',
        '/ai-report': '/pages/ai-report.html',
    };

    async init() {
        await this.loadRoute();
        window.addEventListener('popstate', () => this.loadRoute());
        
        document.body.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href) {
                    this.go(href);
                }
            }
        });
    }

    async loadRoute() {
        const path = location.pathname;
        const templatePath = this.routes[path] || '/pages/notfound.html';
        
        try {
            // Загружаем шапку, подвал и контент
            const [header, footer, content] = await Promise.all([
                fetch('/components/header.html').then(r => r.text()),
                fetch('/components/footer.html').then(r => r.text()),
                fetch(templatePath).then(r => r.text())
            ]);
            
            // Собираем полную страницу
            const fullHtml = `
                ${header}
                ${content}
                ${footer}
            `;
            
            document.querySelector('#app')!.innerHTML = fullHtml;
            
            // После загрузки вызываем скрипты из контента
            this.executeScripts();
            
        } catch (error) {
            console.error('❌ Ошибка загрузки:', error);
            document.querySelector('#app')!.innerHTML = '<h1>Ошибка загрузки страницы</h1>';
        }
    }
    
    executeScripts() {
        // Находим и выполняем все скрипты в загруженном контенте
        const scripts = document.querySelector('#app')?.querySelectorAll('script');
        scripts?.forEach(oldScript => {
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
        });
    }

    go(path: string) {
        history.pushState({}, '', path);
        this.loadRoute();
    }
}

const router = new Router();
router.init();