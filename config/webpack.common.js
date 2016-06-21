const webpack = require('webpack');
const helpers = require('./helpers');
const copyWebpackPlugin = require('copy-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		polyfills: './src/app/polyfills',
		vendor: './src/app/vendor',
		app: './src/app/main'
	},
	resolve: {
		extensions: ['', '.js', '.ts']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts/,
				loaders: ['ts-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				include: helpers.root('src/theme'),
				loader: extractTextPlugin.extract('style', 'css?postcss!sass')
			},
			{
				test: /\.scss$/,
				include: helpers.root('src/app'),
				loader: 'raw!postcss!sass'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourcemap: true,
			beautify: false,
			mangle: {screw_ie8: true},
			compress: {screw_ie8: true, warnings: false},
			comments: false
		}),
		new copyWebpackPlugin([
			{
				from: './src/assets',
				to: './assets'
			}
		]),
		new extractTextPlugin('[name].bundle.[chunkhash].css')
	]
}
