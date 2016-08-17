import { provide }	from '@angular/core';
import { async, inject, addProviders, TestBed }	from '@angular/core/testing';
import { HTTP_PROVIDERS }	from '@angular/http';

import { provideStore } from '@ngrx/store';

import { AppComponent } from '../app';
import { ConfigurationService } from '../../core/services/configuration-service';
import { AppConfig } from '../../core/models/app-config';
import reducers from '../../core/store/reducers';
import actions from '../../core/store/actions';

describe('AppComponent', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			providers: [
				ConfigurationService,
				HTTP_PROVIDERS,
				provideStore(reducers),
				actions
			]
		});

		async(() => {
			TestBed.compileComponents();
		});
	});

	it('has a name property', function () {
		let fixture = TestBed.createComponent(AppComponent);
		expect(fixture.componentInstance.name).toBe('My First Angular 2 App');
	});

});
