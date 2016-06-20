var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: true, 
      beautify: false,
      mangle: { screw_ie8 : true },
      compress: { screw_ie8: true },
      comments: false
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: './assets'
      }
    ])
  ]	  
}