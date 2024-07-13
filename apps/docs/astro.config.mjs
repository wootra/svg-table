import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			exclude: ['**/solid.tsx', '**/solid/*.tsx', '**/*-solid/**'],
		}),
		mdx(),
		solidJs({
			include: ['**/solid.tsx', '**/solid/*.tsx', '**/*-solid/**'],
		}),
		sitemap(),
	],
	site: 'https://svg-table.com', // `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`, // 'https://svg-table.vercel.com',
});
