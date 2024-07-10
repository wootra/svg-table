import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			exclude: ['**/solid.*', '**/solid/*.*', '**/*-solid/**'],
		}),
		mdx(),
		solidJs({
			include: ['**/solid.*', '**/solid/*.*', '**/*-solid/**'],
		}),
	],
	site: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`, // 'https://svg-table.vercel.com',
});
