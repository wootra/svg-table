import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx()],
	site: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`, // 'https://svg-table.vercel.com',
});
