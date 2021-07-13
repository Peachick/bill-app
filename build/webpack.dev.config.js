const { merge } = require("webpack-merge");
const webpack = require("webpack");
const config = require("../config");

const { resolvePath } = require("./util");
const baseConfig = require("./webpack.config");

const devConfig = merge(baseConfig, {
	mode: "development",
	devServer: {
		host: "0.0.0.0",
		port: config.PORT,
		disableHostCheck: true,
		contentBase: resolvePath("../dist"),
		useLocalIp: true,
		hot: true,
		// open: true,
		quiet: true,
		clientLogLevel: 'warning',
		stats: "errors-only",
		overlay: {
			warnings: true,
			errors: true,
		},
	},
	devtool: "#source-map",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
				],
			},
			{
				test: /\.s[a|c]ss$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
});

module.exports = devConfig;
