var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

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
      mangle: { screw_ie8: true },
      compress: { screw_ie8: true, warnings: false },
      comments: false
    }),
    new WebpackNotifierPlugin({ 
      title: 'Web Application Seed',
      excludeWarnings: true,
      alwaysNotify: true,
      contentImage: path.join(__dirname, 'notifier.png')
    })
  ]
}