import type { NavLink, SocialLink } from './footer.types';

export const useFooterLinks = () => {
	const navLinks: NavLink[] = [
		{ to: '/', label: 'Мониторинг' },
		{ to: '/forecasting', label: 'Прогнозирование' },
		{ to: '/ai-report', label: 'AI-справка' },
	];

	const socialLinks: SocialLink[] = [
		{
			href: 'mailto:support@midray.ru',
			icon: 'fas fa-envelope me-1',
			label: 'support@midray.ru',
		},
	];

	return { navLinks, socialLinks };
};
