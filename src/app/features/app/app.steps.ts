let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, then } from "cucumber-tsflow";
import { ApplicationPageObject	 } from "./app.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class ApplicationFeatureSteps {

	private appPageObject: ApplicationPageObject = new ApplicationPageObject();

	@given(/^anyone opens the application$/)
	public givenAnyoneOpensTheApplication(callback: Callback): void {

		this.appPageObject.openApp();
		callback();
	};

	@then(/^the title should be '(.*)'$/)
	public thenTitleShouldBe(title: string, callback: Callback): void {

		expect(this.appPageObject.pageTitle()).to.become(title).and.notify(callback);
	};

}

export = ApplicationFeatureSteps;

