import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class ApplicationPageObject {

	constructor() {
	}

	openApp(): Promise<void> {
		return browser.get('');
	}

	pageTitle(): Promise<string> {
		return browser.getTitle();
	}

}
