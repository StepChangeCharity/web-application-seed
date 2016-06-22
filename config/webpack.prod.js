var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
	output: {
		path: helpers.root('dist'),
		filename: '[name].bundle.[chunkhash].js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourcemap: true,
			beautify: false,
			mangle: {screw_ie8: true},
			compress: {screw_ie8: true, warnings: false},
			comments: false
		}),
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
	]
});