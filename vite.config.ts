import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	build: {
		target: 'esnext',
	},
	resolve: {
		alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
	},
	plugins: [tailwindcss(), sveltekit()],
});
