// ## Configuratioin settings for karma tests

// Get webpack build config specific to karma tests
var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // testing frameworks to use
    frameworks: ['jasmine'],

    plugins: [
        'karma-jasmine',
        'karma-coverage',
        'karma-webpack',
        'karma-sourcemap-loader',
        'karma-phantomjs-launcher',
        'karma-mocha-reporter',
        'karma-teamcity-reporter'
    ],

    // list of files / patterns to load in the browser
    files: [
      { pattern: './karma-test-shim.js', watched: false }
    ],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      './karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

		// load in the test webpack config
    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    // Creates JSON file for use by npm run coverage command
    coverageReporter: {
      reporters: [{
        type: 'json',
        dir: '../coverage',
        subdir: 'json',
        file: 'coverage-final.json'
      }]
    },

    webpackServer: {
			// please don't spam the console when running in karma!
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'teamcity'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['PhantomJS'], // you can also use Chrome

    // Continuous Integration mode, if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };

  config.set(_config);

};