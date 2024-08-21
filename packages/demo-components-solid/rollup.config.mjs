import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };
import { babel } from '@rollup/plugin-babel';

export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
			},
		],
		external: ['solid-js'],
		plugins: [
			resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
			babel({
				exclude: 'node_modules/**',
				extensions: ['.js', '.jsx', '.tsx', '.ts'],
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
