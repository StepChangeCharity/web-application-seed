import { inject, TestBed } from '@angular/core/testing';
import { HttpModule }	from '@angular/http';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { ConfigurationService } from '../../core/services/configuration-service';

describe('AppComponent', () => {
	// provide our implementations or mocks to the dependency injector
	beforeEach(() => TestBed.configureTestingModule({
		imports: [
			HttpModule
		],
		providers: [
			AppComponent,
			ConfigurationService
		]}));

	it('has a name property', inject([ AppComponent ], (app) => {
		expect(app.name).toEqual('My First Angular 2 App');
	}));

});
