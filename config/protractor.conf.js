require('ts-node/register');

var helpers = require('./helpers');

exports.config = {
	useAllAngular2AppRoots: true,
	directConnect: true,
	baseUrl: 'http://localhost:8080/',

	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),

	specs: [
		helpers.root('src/app/**/*.feature')
	],

	cucumberOpts: {
		require: [
			helpers.root('src/app/**/*.steps.ts'),
			helpers.root('src/app/hooks.ts'),
			helpers.root('src/app/reporter.js')
		],
		format: 'json'
	},

	capabilities: {
		'browserName': 'chrome',
		chromeOptions: {
			args: ['--no-sandbox']
		}
	},	

	onPrepare: function () {
		browser.ignoreSynchronization = true;
	}
}