import { AppComponent } from './App.Component';

describe('AppComponent', function () {

	beforeEach(() => {
		browser.get('/');
	});

	it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'StepChange Angular 2 Application Seed';
    expect(subject).toEqual(result);
  });
	
})