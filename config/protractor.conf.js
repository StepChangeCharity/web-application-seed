require('ts-node/register');

var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var helpers = require('./helpers');

exports.config = {
	framework: 'jasmine',
	baseUrl: 'http://localhost:8080/',
	specs: ['../src/app/**/*.e2e.ts'],
	directConnect: true,

	onPrepare: function () {
		jasmine.getEnv().addReporter(
			new jasmine2HtmlReporter({
				savePath: helpers.root('./automation/'),
				screenshotsFolder: 'images',
				takeScreenshots: true,
				fixedScreenshotName: true,
				filePrefix: 'index'
			})
		);
	},

	/**
	* Angular 2 configuration
	*
	* useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching 'rootEl'
	*/
	useAllAngular2AppRoots: true
}