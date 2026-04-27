import { useState, useEffect } from 'react';

export function useTheme() {
	const getInitialTheme = (): 'light' | 'dark' => {
		const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
		if (saved === 'dark') return 'dark';
		return 'light';
	};

	const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

	// При монтировании сразу применяем тему к body
	useEffect(() => {
		if (theme === 'light') {
			document.body.classList.add('light-theme');
			document.body.classList.remove('dark-theme'); // если есть
		} else {
			document.body.classList.add('dark-theme');
			document.body.classList.remove('light-theme');
		}
	}, [theme]);

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return { theme, toggleTheme };
}
