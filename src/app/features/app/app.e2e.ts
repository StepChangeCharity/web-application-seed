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

	it('can load an image from the assets folder', () => {
		let src = element(by.tagName('img')).getAttribute('src');
		
		expect(src).toContain('logo.jpg');
	});
	
})