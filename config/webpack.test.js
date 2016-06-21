var path = require("path");
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].bundle.js'
	}
});