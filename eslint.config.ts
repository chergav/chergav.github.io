import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import svelte from 'eslint-plugin-svelte';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default [
	includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs.recommended,
	stylistic.configs.recommended,
	{
		// ignores: ['public/wall.2.1.1.js'],
	},
	{
		// files: ['**/*.{js,ts}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@stylistic': stylistic,
			'better-tailwindcss': eslintPluginBetterTailwindcss,
		},
		rules: {
			'no-undef': 'off',
			'@stylistic/max-len': ['error', {
				code: 150,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreComments: true,
				ignoreTrailingComments: true,
			}],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/object-curly-newline': ['error', {
				multiline: true,
				consistent: true,
			}],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/quote-props': ['error', 'as-needed', { numbers: true }],
			'@stylistic/semi-style': ['error', 'last'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			}],
			'@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			// 'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error', {
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			}],
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'no-irregular-whitespace': [
				'error',
				{
					skipStrings: true,
					skipTemplates: true,
					skipRegExps: true,
					skipComments: true,
				},
			],

			// Svelte
			'svelte/sort-attributes': [
				'error',
				{
					order: [
						'this',
						'bind:this',
						'id',
						'name',
						'slot',
						{
							match: '/^--/u',
							sort: 'alphabetical',
						},
						['style', '/^style:/u'],
						'class',
						{
							match: '/^class:/u',
							sort: 'alphabetical',
						},
						{
							match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
							sort: 'alphabetical',
						},
						['/^bind:/u', '!bind:this', '/^on:/u'],
						{
							match: '/^use:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^transition:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^in:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^out:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^animate:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^let:/u',
							sort: 'alphabetical',
						},
					],
				},
			],
			'svelte/button-has-type': [
				'error',
				{
					button: true,
					submit: true,
					reset: true,
				},
			],
			'svelte/no-useless-mustaches': [
				'error',
				{
					ignoreIncludesComment: false,
					ignoreStringEscape: false,
				},
			],
			'svelte/html-quotes': [
				'error',
				{
					prefer: 'double', // or "single"
					dynamic: {
						quoted: false,
						avoidInvalidUnquotedInHTML: false,
					},
				},
			],
			'svelte/mustache-spacing': [
				'error',
				{
					textExpressions: 'never', // or "always"
					attributesAndProps: 'never', // or "always"
					directiveExpressions: 'never', // or "always"
					tags: {
						openingBrace: 'never', // or "always"
						closingBrace: 'never', // or "always" or "always-after-expression"
					},
				},
			],
			'svelte/no-extra-reactive-curlies': 'error',
			'svelte/shorthand-attribute': ['error', { prefer: 'always' }],
			'svelte/shorthand-directive': ['error', { prefer: 'always' }],
			'svelte/spaced-html-comment': ['error', 'always'],

			...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
			'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
		},
		settings: { 'better-tailwindcss': { entryPoint: 'src/tailwind.css' } },
	},
	{
		files: [
			'**/*.svelte',
			'**/*.svelte.ts',
			'**/*.svelte.js',
		],
		languageOptions: {
			// parser: eslintParserSvelte,
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: tseslint.parser,
				// svelteConfig,
			},
		},
	},
];
