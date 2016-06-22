// ## Configuratioin settings for karma tests

var path = require('path');

// Get webpack build config specific to karma tests
var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // testing frameworks to use
    frameworks: ['jasmine'],

    plugins: [
        'karma-webpack',
        'karma-sourcemap-loader',
        'karma-jasmine',
        'karma-chrome-launcher'
    ],

    // list of files / patterns to load in the browser
    files: [
      { pattern: './karma-test-shim.js', watched: false }
    ],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

		// load in the test webpack config
    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
			// please don't spam the console when running in karma!
      noInfo: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['Chrome'], // you can also use Chrome

    // Continuous Integration mode, if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };

  config.set(_config);

};