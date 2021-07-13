module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"parser": "babel-eslint",
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/prop-types": 0,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
