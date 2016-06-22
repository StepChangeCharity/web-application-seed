// ## Development configuration for the webpack build process

var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

// Merge this config with the common config when exporting
module.exports = webpackMerge(commonConfig, {

	// Output the content of the build
	output: {

		// to the 'Dist' folder
		path: helpers.root('dist'),

		// using this file name format
		filename: '[name].bundle.js'
	},

	plugins: [

		// Bundle the output into chunks
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		// Generate the html output, injecting the bundles into a template
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	]
});