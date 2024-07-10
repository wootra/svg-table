import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };

export default [
	{
		input: './out/svg-table-react/src/index.js',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
			},
			{
				name: 'shjeon0730-svg-table',
				file: pkg.browser,
				format: 'umd',
				sourcemap: true,
			},
		],
		external: ['react', 'react-dom'],
		plugins: [
			resolve(),
			commonjs(),
			peerDepsExternal(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
];
