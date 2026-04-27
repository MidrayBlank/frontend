import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		allowedHosts: ['midray.ru'],
		proxy: {
			'/api': {
				target: 'https://backend.midray.ru',
				changeOrigin: true,
				secure: false,
			},
		},
	},
	preview: {
		allowedHosts: ['midray.ru'],
	},
});
