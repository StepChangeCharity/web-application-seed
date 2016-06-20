var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
    polyfills: './src/app/polyfills',
		vendor: './src/app/vendor',
		app: './src/app/main'
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