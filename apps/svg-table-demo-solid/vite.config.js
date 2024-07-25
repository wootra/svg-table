import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
	plugins: [
		/* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		// devtools(),
		solidPlugin({
			hot: true,
			ssr: true,
			// solid: {
			// 	hydratable: true,
			// 	// generate: 'ssr',
			// },
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
