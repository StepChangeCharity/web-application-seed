var webpack = require('webpack');
var webpackNotifierPlugin = require('webpack-notifier');
var helpers = require('./helpers');

module.exports = function() {
  
  var config = {};

  config.resolve = {
    extensions: ['', '.ts', '.js', '.scss'],
  };

  config.module = {
	preLoaders: [
		{
			test: /\.ts$/,
			loader: "tslint"
		}
	],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/\.(e2e)\.ts$/]
      },
      // support for .scss files
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      // all css in src/style will be bundled in an external css file 
	    {
		    test: /\.scss$/,
		    loader: 'null'
	    },
    ],
    postLoaders: [
      {
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
      sourceRoot: helpers.root('src', 'app'),
      inlineSourceMap: true
    }
  };

  config.plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("testing")
      }
    }),
	  new webpackNotifierPlugin({
	    title: 'Web Application Seed',
	    excludeWarnings: true,
	    alwaysNotify: true,
	    contentImage: helpers.root('config/notifier.png')
	  })
  ]

  return config;

}();
