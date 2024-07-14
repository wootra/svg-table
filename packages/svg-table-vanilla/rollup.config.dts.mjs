import dts from 'rollup-plugin-dts';

export default {
	input: './dist/types/index.d.ts',
	external: ['@shjeon0730/svg-table-core'],
	output: [
		{ file: 'dist/index.d.ts', format: 'es' },
		{ file: 'dist/index.mjs.d.ts', format: 'es' },
		{ file: 'dist/index.umd.d.ts', format: 'es' },
	],
	plugins: [dts()],
};
