/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@repo/eslint-config/react-internal.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.app.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-unused-vars': [
			'error',
			{
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			},
		],
		'no-redeclare': 'off',
	},
};
