import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };

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
			{
				name: 'svgTableSolid',
				file: pkg.browser,
				format: 'umd',
				sourcemap: true,
				globals: {
					'@shjeon0730/svg-table-core': 'svgTableCore',
				},
			},
		],
		external: ['solid-js', '@shjeon0730/svg-table-core'],
		plugins: [
			resolve(),
			commonjs(),
			peerDepsExternal({
				includeDependencies: false,
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
];
