const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
	output: {
		path: helpers.root('dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['to-string-loader', 'css-loader']
			}
		]
	}
});