import type { NavLink, SocialLink } from './footer.types';

export const useFooterLinks = () => {
	const navLinks: NavLink[] = [
		{ to: '/', label: 'Мониторинг' },
		{ to: '/forecasting', label: 'Прогнозирование' },
		{ to: '/ai-report', label: 'AI-справка' },
	];

	const socialLinks: SocialLink[] = [
		{ href: '#', icon: 'fab fa-telegram me-1', label: 'Telegram' },
	];

	return { navLinks, socialLinks };
};
