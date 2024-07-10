import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx()],
	site: process.env.VERCEL_URL, // 'https://svg-table.vercel.com',
});
