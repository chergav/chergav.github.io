import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// pages: 'build',
			fallback: '404.html',
		}),
		paths: {
			// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
			base: '',
		},
	},
};

export default config;
