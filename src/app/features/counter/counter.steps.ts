let chai = require('chai').use(require('chai-as-promised'));
let expect: Chai.ExpectStatic = chai.expect;

import { binding, given, then, when } from "cucumber-tsflow";
import { CounterPageObject }					from "./counter.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class CounterSteps {

	private counterPageObject: CounterPageObject = new CounterPageObject();

	@given(/^I navigate to the counter feature$/)
	public navigateToCounter(callback: Callback): void {
		this.counterPageObject.goToCounter();
		callback();
	};

	@given(/^I have already lent a penny out$/)
	public lendPenny(callback: Callback): void {
		this.counterPageObject.increaseCount();
		expect(this.counterPageObject.getCount()).to.become('1').and.notify(callback)
	};

	@then(/^the counter is increased to (.*)$/)
	public counterIncreasedTo(counterValue: number, callback: Callback): void {
		this.assertCounterValue(counterValue, callback);
	};

	@then(/^the counter is decreased to (.*)$/)
	public counterDecreasedTo(counterValue: number, callback: Callback): void {
		this.assertCounterValue(counterValue, callback);
	};

	@then(/^the counter is reset to (.*)$/)
	public counterResetTo(counterValue: number, callback: Callback): void {
		this.assertCounterValue(counterValue, callback);
	};

	@when(/^I increase my penny lending$/)
	public increaseCount(callback: Callback): void {
		this.counterPageObject.increaseCount();
		callback();
	}

	@when(/^I decrease my penny lending$/)
	public decreaseCount(callback: Callback): void {
		this.counterPageObject.decreaseCount();
		callback();
	}	

	@when(/^I reset my penny lending$/)
	public resetCount(callback: Callback): void {
		this.counterPageObject.resetCount();
		callback();
	}	

	private assertCounterValue(counterValue: number, callback: Callback): void {
		expect(this.counterPageObject.getCount()).to.become(counterValue).and.notify(callback)
	};
}

export = CounterSteps;

