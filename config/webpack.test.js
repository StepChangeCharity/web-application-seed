const path = require("path");
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("testing")
      }
    })
	]
});