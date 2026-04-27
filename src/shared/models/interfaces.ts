import { ReactNode } from 'react';

export interface InfoCardProps {
	title: string;
	icon: string;
	color: 'info' | 'warning' | 'success' | 'danger';
	children: ReactNode;
}
