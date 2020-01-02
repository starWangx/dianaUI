module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true
	},
	extends: "plugin:@typescript-eslint/recommended",
	parser: "@typescript-eslint/parser",
	globals: {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	parserOptions: {
		"ecmaFeatures": {
			module: true,
			ts: true,
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: [
		"react",
		"react-hooks",
		"@typescript-eslint"
	],
	rules: {
		indent: [
			"error",
			2
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		quotes: [
			"error",
			"single"
		],
		semi: [
			"error",
			"always"
		],
		"@typescript-eslint/no-empty-interface": "warn"
	}
};