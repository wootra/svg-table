import dts from 'rollup-plugin-dts';

export default {
	input: './dist/types/index.d.ts',
	external: ['react', 'react-dom', '@shjeon0730/svg-table-react', '@shjeon0730/svg-table-core'],
	output: [{ file: 'dist/index.d.ts', format: 'es' }],
	plugins: [dts()],
};
