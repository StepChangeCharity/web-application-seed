import { it, describe, expect, beforeEach, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let appComponent: AppComponent;
	beforeEach(() => {
		appComponent = new AppComponent();
	});

	describe('AppComponent', function() {
		it('has a name property', function() {
			expect(appComponent.name).toBe('My First Angular 2 App');
		});
	});
});
