// ## Test configuration for the webpack build process
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
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

		// Set the environment to testing
		new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("testing")
      }
    })
	]
});