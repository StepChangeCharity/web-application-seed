exports.config = {
	framework: 'jasmine',
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'http://localhost:3000/',
	specs: ['./build/**/*.e2e.js'],
	directConnect: true,

	/**
	* Angular 2 configuration
	*
	* useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching 'rootEl'
	*/
	useAllAngular2AppRoots: true
}