import dts from 'rollup-plugin-dts';

export default {
	input: './dist/types/index.d.ts',
	external: ['react', 'react-dom', '@shjeon0730/svg-table-core'],
	output: [
		{ file: 'dist/index.d.ts', format: 'cjs' },
		{ file: 'dist/index.mjs.d.ts', format: 'es' },
		{ file: 'dist/index.umd.d.ts', format: 'umd' },
	],

	plugins: [dts()],
};
