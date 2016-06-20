var path = require("path");
var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].bundle.[chunkhash].js'
	},    
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]	
});