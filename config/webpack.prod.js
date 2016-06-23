// ## Production configuration for the webpack build process

var webpackMerge = require('webpack-merge');  //  Used to merge in the common config
var webpack = require('webpack');  //  Include the build tool
var htmlWebpackPlugin = require('html-webpack-plugin');  //  Allows webpack to inject paths to bundles
var commonConfig = require('./webpack.common.js');  //  The common configuration used across builds
var helpers = require('./helpers');  //  Include any shared helper functions

module.exports = webpackMerge(commonConfig, {

	//  Output the content of the build to the 'Dist' folder including a hash per chunk in the file name to bust the cache
	output: {
		path: helpers.root('dist'),
		filename: '[name].bundle.[chunkhash].js'
	},
	plugins: [

		// Bundle the output into chunks
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		// Uglify the JavaScript
		new webpack.optimize.UglifyJsPlugin({
			sourcemap: true,
			beautify: false,
			mangle: {screw_ie8: true},
			compress: {screw_ie8: true, warnings: false},
			comments: false
		}),

		// Generate the html output, injecting the bundles into a template
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),

		// Set the environment to production
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	]
});