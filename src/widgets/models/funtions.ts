// Функция установки темы из localStorage
function applyThemeFromStorage() {
	const saved = localStorage.getItem('theme');
	if (saved === 'light') {
		document.body.classList.add('light-theme');
	} else {
		document.body.classList.remove('light-theme');
	}
	// обновим иконку кнопки, если она уже есть
	const btn = document.getElementById('globalThemeToggle');
	if (btn) {
		const isLight = document.body.classList.contains('light-theme');
		btn.innerHTML = isLight
			? '<i class="fas fa-sun me-1"></i> Светлая'
			: '<i class="fas fa-moon me-1"></i> Тёмная';
	}
}

// Переключение темы
function toggleGlobalTheme() {
	if (document.body.classList.contains('light-theme')) {
		document.body.classList.remove('light-theme');
		localStorage.setItem('theme', 'dark');
	} else {
		document.body.classList.add('light-theme');
		localStorage.setItem('theme', 'light');
	}
	const btn = document.getElementById('globalThemeToggle');
	const isLight = document.body.classList.contains('light-theme');
	btn.innerHTML = isLight
		? '<i class="fas fa-sun me-1"></i> Светлая'
		: '<i class="fas fa-moon me-1"></i> Тёмная';
}

// Применяем при загрузке компонента
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', applyThemeFromStorage);
} else {
	applyThemeFromStorage();
}

// Вешаем обработчик после того, как кнопка появится в DOM
const checkInterval = setInterval(() => {
	const btn = document.getElementById('globalThemeToggle');
	if (btn) {
		clearInterval(checkInterval);
		btn.addEventListener('click', toggleGlobalTheme);
	}
}, 50);
