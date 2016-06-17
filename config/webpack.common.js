var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
    polyfills: './app/polyfills',
		vendor: './app/vendor',
		app: './app/main',
	},
	output: {
		path: __dirname,
		filename: 'dist/[name].bundle.js'
	},
  resolve: {
    extensions: ['', '.js', '.ts']
  },
	devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}