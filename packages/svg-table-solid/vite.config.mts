import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
export default defineConfig({
	plugins: [
		solid(),
		dts({
			include: ['lib'],
			outDir: './dist/types',
			tsconfigPath: './tsconfig.build.json',
			bundledPackages: ['@shjeon0730/svg-table-core'],
		}),
	],

	build: {
		copyPublicDir: false,
		minify: true,
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			formats: ['es'],
		},

		rollupOptions: {
			external: ['solid-js', 'solid-js/web'],
		},
	},
});
