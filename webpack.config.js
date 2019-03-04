let CopyWebpackPlugin = require('copy-webpack-plugin'),
	FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
	ManifestPlugin = require('webpack-manifest-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	PurgecssPlugin = require('purgecss-webpack-plugin'),

	glob = require('glob-all'),
	path = require('path');

const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development',
	isProd = (mode == 'production');

module.exports = {
	mode: mode,
	devtool: !isProd ? 'source-map' : false,
	stats: {
		hash: false,
		version: false,
		timings: false,
		children: false,
		errorDetails: false,
		entrypoints: false,
		performance: isProd,
		chunks: false,
		modules: false,
		reasons: false,
		source: false,
		publicPath: false,
		builtAt: false,
	},
	optimization: {
		minimize: isProd,
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					reuseExistingChunk: true,
					name: 'vendor',
					priority: -10,
				}
			}
		}
	},
	entry: {
		app: [
			'./src/js/app.js',
			'./src/scss/app.scss',
		]
	},
	output: {
		path: path.resolve(__dirname, 'theme'),
		chunkFilename: '[name].js?v=[hash]',
		filename: '[name].js?v=[hash]',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: !isProd,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: !isProd,
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: !isProd,
						}
					}
				]
			},
			{
				test: /\.svg$/,
				include: [
					path.resolve(__dirname, 'src/svg'),
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				include: [
					path.resolve(__dirname, 'node_modules'),
				],
				loader: 'null-loader',
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				exclude: [
					path.resolve(__dirname, 'src/svg'),
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
		],
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin({
			clearConsole: true,
		}),
		new ManifestPlugin({
			fileName: path.resolve(__dirname, 'theme', 'manifest.json'),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css?v=[chunkhash]',
			chunkFilename: '[id].js?v=[chunkhash]',
		}),
		new PurgecssPlugin({
			paths: glob.sync([
				'content/**/*.md',
				'layouts/**/*.html',
				'src/js/**/*.js',
			]),
			whitelistPatterns: [
				/^narrow$/,
				/^app-status-/,
				/^fa-/,
			],
		}),
		new CopyWebpackPlugin([{
			from: 'src/svg',
			to: 'images',
		}]),
	],
};
