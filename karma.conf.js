// http://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    var configuration = {
        basePath: './',

        frameworks: ['jasmine'],
	    browsers: ['Chrome'],

        reporters: ['progress', 'dots'],

        files: [
            // Polyfills.
            // TODO: This could be important in browsers such as IE that lack support
            //'node_modules/core-js/core-js.js',

            'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            { pattern: 'karma-test-shim.js', included: true, watched: true },

            // paths loaded via module imports
            // Angular itself
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },

            { pattern: 'build/**/*.js', included: false, watched: true },

            // paths to support debugging with source maps in dev tools
            // { pattern: 'app/**/*.ts', included: false, watched: false },
            // { pattern: 'build/**/*.js.map', included: false, watched: false }            
        ],

        // proxied base paths
        proxies: {
            // required for component assets fetched by Angular's compiler
            "/app/": "/base/build/"
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: true,
    };

    config.set(configuration);
}