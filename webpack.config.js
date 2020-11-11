let CopyWebpackPlugin = require('copy-webpack-plugin'),
	FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
	ManifestPlugin = require('webpack-manifest-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	PurgecssPlugin = require('purgecss-webpack-plugin'),
	TerserJSPlugin = require("terser-webpack-plugin"),

	glob = require('glob-all'),
	path = require('path');

const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development',
	isProd = (mode == 'production');


let plugins = [
	new CopyWebpackPlugin({
		patterns: [
			{ from: 'src/svg', to: 'images' },
		],
	}),
	new FriendlyErrorsWebpackPlugin({
		clearConsole: true,
	}),
	new ManifestPlugin({
		fileName: path.resolve(__dirname, 'data', 'manifest.json'),
	}),
	new MiniCssExtractPlugin({
		filename: '[name].css?v=[hash]',
		chunkFilename: '[name].js?v=[hash]',
	}),
];

if (isProd) {
	plugins.push(new PurgecssPlugin({
		paths: glob.sync([
			'content/**/*.md',
			'layouts/**/*.html',
			'src/js/**/*.js',
		]),
		safelist: [
			/^narrow$/,
			/^app-status-/,
			/^fa-/,
		],
	}));
}

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
	performance: {
		maxEntrypointSize: 250000,
		maxAssetSize: 512000,
	},
	optimization: {
		minimize: isProd,
		minimizer: [
			new TerserJSPlugin({
				terserOptions: {
					output: {
						comments: false,
					},
				},
			}),
			new OptimizeCssAssetsPlugin({
				cssProcessor: require('cssnano'),
				cssProcessorPluginOptions: {
					preset: [
						"default",
						{
							discardComments: {
								removeAll: true,
							},
						},
					],
				}
			}),
		],
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
				test: /\.modernizrrc$/,
				loader: 'modernizr-loader!json-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(jpg|png)$/,
				include: [
					path.resolve(__dirname, 'src/images'),
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?v=[hash]',
							outputPath: 'images/'
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
							name: '[name].[ext]?v=[hash]',
							outputPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				exclude: [
					path.resolve(__dirname, 'src/svg'),
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?v=[hash]',
							outputPath: 'fonts/'
						}
					}
				]
			},
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
		],
	},
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, '.modernizrrc'),
		},
	},
	plugins: plugins
};
