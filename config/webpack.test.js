// ## Test configuration for the webpack build process
var webpack = require('webpack');
var helpers = require('./helpers');

// Webpack constants
const ENV = 'testing';
const METADATA = {
	ENV: ENV,
};

module.exports = function () {

	var config = {};

	// resolve these file types
	config.resolve = {
		extensions: ['', '.ts', '.js', '.scss'],
	};

	config.module = {

		// lint typescript first
		preLoaders: [
			{
				test: /\.ts$/,
				loader: "tslint"
			}
		],

		loaders: [
			{
				// load typescript but exclude the 'e2e' files
				test: /\.ts$/,
				loader: 'ts',
				exclude: [/\.(e2e)\.ts$/]
			},

			// support for .scss files
			// use 'null' loader in test mode (https://github.com/webpack/null-loader)
			// all css in src/style will be bundled in an external css file
			{
				test: /\.scss$/,
				include: helpers.root('src/app'),
				loader: 'raw!postcss!sass'
			},
		],

		postLoaders: [
			{
				// provide test coverage reporting, excluding test scripts
				test: /\.ts/,
				loader: 'istanbul-instrumenter-loader',
				exclude: [/\.spec\.ts/, /\.e2e\.ts/]
			}
		]
	};

	// needed for remap-instanbul
	config.ts = {
		compilerOptions: {
			sourceMap: false,
			sourceRoot: helpers.root('src/app'),
			inlineSourceMap: true
		}
	};

	config.plugins = [

		// set the environment to testing
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(METADATA.ENV)
			}
		})
	]

	return config;

}();
