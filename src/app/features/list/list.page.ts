import ElementFinder = protractor.ElementFinder;
import Promise = webdriver.promise.Promise;

export class ListPageObject {

	private getListButton: ElementFinder;
	private employeeTable: ElementFinder;

	constructor() {
		this.getListButton = element(by.id('listbutton'));
		this.employeeTable = element(by.id('employeetable'));
	}

	public goToList(): Promise<void> {
		return browser.get('/#/list');
	}

	getList(): Promise<void> {
		return this.getListButton.click();
	}

	public getCount(): Promise<string> {
		return this.employeeTable.getText();
	}

}