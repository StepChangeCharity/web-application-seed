var path = require("path");
var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].bundle.js'
	},  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: true, 
      beautify: false,
      mangle: { screw_ie8 : true },
      compress: { screw_ie8: true },
      comments: false
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]	
});