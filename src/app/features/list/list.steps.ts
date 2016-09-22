let chai = require('chai').use(require('chai-as-promised'));
let expect: Chai.ExpectStatic = chai.expect;

import { binding, given, then, when } from "cucumber-tsflow";
import { ListPageObject }					from "./list.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class ListSteps {

	private listPageObject: ListPageObject = new ListPageObject();
	private expectedTableContents = [
		'1 Joe Bloggs Project Manager',
		'2 John Doe Developer'
	];

	@given(/^I navigate to the list feature$/)
	public navigateToList(callback: Callback): void {
		this.listPageObject.goToList();
		callback();
	};

	@when(/^I click on the Get List button$/)
	public getList(callback: Callback): void {
		this.listPageObject.getList();
		callback();
	}

	@then(/^the two employees are displayed$/)
	public employeesDisplayed(callback: Callback): void {
		this.assertListItems(callback);
	};

	private assertListItems(callback: Callback): void {
		expect(this.listPageObject.getListData()).to.become(this.expectedTableContents).and.notify(callback);
	};
}

export = ListSteps;

