import { AppComponent } from './App.Component';

describe('AppComponent', function () {

	beforeEach(() => {
		browser.get('/');
	});

	// it('should have headerzzz', function() {

	// 	let header = element(by.css('h1'));
	// 	expect(header).toContain('My First Angular 2 App');
	// });

	it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Boobs';
    expect(subject).toEqual(result);
  });
})