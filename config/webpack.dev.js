// ## Development configuration for the webpack build process

var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

// Webpack constants
const ENV = 'development';
const METADATA = webpackMerge(commonConfig.metadata, {
	host: 'localhost',
  	port: 3000,
	ENV: ENV,
});

// Merge this config with the common config when exporting
module.exports = webpackMerge(commonConfig, {

	// Merged metadata from webpack.common.js
	metadata: METADATA,

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
		}),

		// Set the environment to development
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(METADATA.ENV),
			}
		}),
	],

	// Set options for dev server
	devServer: {
    	port: METADATA.port,
    	host: METADATA.host,
  	}
});