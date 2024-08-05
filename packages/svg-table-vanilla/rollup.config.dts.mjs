import dts from 'rollup-plugin-dts';

export default {
	input: './dist/types/index.d.ts',
	output: [
		{ file: 'dist/index.d.ts', format: 'es' },
		{ file: 'dist/index.mjs.d.ts', format: 'es' },
		{ file: 'dist/index.umd.d.ts', format: 'es' },
	],
	plugins: [dts()],
};
