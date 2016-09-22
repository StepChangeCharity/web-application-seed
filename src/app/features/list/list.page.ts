import ElementArrayFinder = protractor.ElementArrayFinder;
import ElementFinder = protractor.ElementFinder;
import Promise = webdriver.promise.Promise;

export class ListPageObject {

	private getListButton: ElementFinder;
	private employeeTable: ElementArrayFinder;

	constructor() {
		this.getListButton = element(by.id('listbutton'));
		this.employeeTable = element.all(by.id('employeetable'));
	}

	public goToList(): Promise<void> {
		return browser.get('/#/list');
	}

	getList(): Promise<void> {
		return this.getListButton.click();
	}

	public getListData(): Promise<Object> {
		return this.employeeTable.getText();
	}

}