// ## Shared configuration for the webpack build process

var webpack = require('webpack');
var helpers = require('./helpers');
var copyWebpackPlugin = require('copy-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var webpackNotifierPlugin = require('webpack-notifier');

const METADATA = {
	title: 'StepChange Angular 2 Application Seed'
}

module.exports = {

	// Static metadata for index.html
	metadata: METADATA,

	// Work on these folders
	entry: {
		polyfills: './src/app/polyfills',
		vendor: './src/app/vendor',
		app: './src/app/main'
	},

	// Process these files types
	resolve: {
		extensions: ['', '.js', '.ts']
	},

	// Enable source maps
	devtool: 'source-map',

	module: {

		// Lint typescript files before starting to package
		preLoaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: "tslint"
			}
		],

		loaders: [
			{
				// Load typescript
				test: /\.ts/,
				loaders: ['ts-loader'],
				exclude: /node_modules/
			},
			{
				// Load sass files from the theme folder only then convert to css and bundle them
				test: /\.scss$/,
				include: helpers.root('src/theme'),
				loader: extractTextPlugin.extract('style', 'css?postcss!sass')
			},
			{
				// Load sass files from within the application folder then convert to a string, then css and include in the javascript module
				test: /\.scss$/,
				include: helpers.root('src/app'),
				loader: 'raw!postcss!sass'
			}
		]
	},
	plugins: [

		// Copy static assets to the output folder
		new copyWebpackPlugin([
			{
				from: helpers.root('src/assets'),
				to: helpers.root('dist/assets')
			}
		]),

		// Setup system tray notifications
		new webpackNotifierPlugin({
			title: 'Web Application Seed',
			excludeWarnings: true,
			alwaysNotify: true,
			contentImage: helpers.root('config/notifier.png')
		}),

		// Bundle and output the css to
		new extractTextPlugin('[name].bundle.[chunkhash].css')
	]
}