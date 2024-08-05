import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };
import babel from 'rollup-plugin-babel';

export default [
	{
		input: './dist/index.js',
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
			// {
			// 	name: 'svgTableSolid',
			// 	file: pkg.browser,
			// 	format: 'umd',
			// 	sourcemap: true,
			// 	globals: {
			// 		'@shjeon0730/svg-table-core': 'svgTableCore',
			// 	},
			// },
		],
		external: ['solid-js'],
		plugins: [
			resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/env', 'babel-preset-solid'],
			}),
			commonjs(),
			peerDepsExternal({
				includeDependencies: false,
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
];
