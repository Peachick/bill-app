const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const eslintFormatter = require("eslint-friendly-formatter");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const terminalNotice = require("friendly-errors-webpack-plugin")

const { resolvePath } = require("./util");
const { DEV_ENV } = require("../config");

const baseConfig = {
	entry: resolvePath("../src/index.js"),
	output: {
		filename: "main.js",
		path: resolvePath("../dist"),
		publicPath: "/",
	},
	resolve: {
		modules: [resolvePath("../node_modules")],
		extensions: [".js", ".jsx", ".css", ".json", ".scss"],
		alias: {
			"@": resolvePath("../src"),
			"@assets": resolvePath("../src/assets"),
			"@components": resolvePath("../src/components"),
			"@router": resolvePath("../src/router"),
			"@views": resolvePath("../src/views"),
			"@api": resolvePath("../src/api"),
			"@util": resolvePath("../src/util"),
			"@style": resolvePath("../src/style"),
			"@locale": resolvePath("../src/locale"),
			"@config": resolvePath("../config"),
		},
	},
	module: {
		noParse: /jQuery/,
		rules: [
			{
				test: /\.js|jsx$/,
				loader: "eslint-loader",
				enforce: "pre",
				options: {
					formatter: eslintFormatter
				},
				include: resolvePath("../src"),
				exclude: /node_modules/,
			},
			{
				test: /\.js|jsx$/,
				loader: "babel-loader?cacheDirectory=true",
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['**/*', '!static/*'],
		}),
		new htmlWebpackPlugin({
			filename: "index.html",
			template: resolvePath("../public/index.html"),
			inject: true,
			minify: !DEV_ENV ? {
				removeAttributeQuotes: true,
				collapseBooleanAttributes: true,
				html5: true,
				removeComments: true,
				minifyCSS: true,
				minifyJS: true,
				preserveLineBreaks: true
			} : null,
		}),
		new copyWebpackPlugin({
			patterns: [
				{ from: resolvePath("../public/static"), to: resolvePath("../dist/static") },
			],
		}),
		new terminalNotice({
			clearConsole: true,
		}),
	],
};

module.exports = baseConfig;
