const { merge } = require("webpack-merge");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolvePath } = require("./util");
const baseConfig = require("./webpack.config");

const prodConfig = merge(baseConfig, {
	mode: "production",
	stats: {
		assets: true,
		assetsSort: "size",
		modules: false,
		entrypoints: false,
		chunks: false,
		chunkModules: false,
		colors: true,
	},
	performance: {
		hints: 'warning',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					miniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
				],
			},
			{
				test: /\.s[a|c]ss$/,
				use: [
					miniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
		],
	},
	plugins: [
		new miniCssExtractPlugin({
			filename: "style/[name].[contenthash:4].css",
		})
	],
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 2,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: false,
			cacheGroups: {
				vender: {
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					minSize: 0,
					minChunks: 2,
					priority: -10,
					name: "vendor"
				},
				common: {
					chunks: "all",
					minSize: 20000,
					minChunks: 2,
					name: "common",
					priority: -20,
				},
			},
		},
	},
});

module.exports = prodConfig;
