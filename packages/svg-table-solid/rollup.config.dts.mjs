import dts from 'rollup-plugin-dts';

export default {
	input: './out/types/svg-table-vanilla/src/index.d.ts',
	output: [{ file: 'dist/index.d.ts', format: 'es' }],
	plugins: [dts()],
};
