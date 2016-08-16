import { AppComponent } from './app.component';
import { ConfigurationService } from '../../core/services/configuration-service';
import { AppConfig } from '../../core/models/app-config';

describe('AppComponent', () => {
	let appComponent: AppComponent;
	let configurationService: ConfigurationService;
	let appConfig: AppConfig = null;

	beforeEach(() => {
		appConfig = new AppConfig();
		configurationService = new ConfigurationService(null);

		appConfig.ENVIRONMENT = 'testing';
		configurationService.currentConfiguration = appConfig;
		appComponent = new AppComponent(configurationService);
	});

	it('should have configuration service defined', () => {
		expect(configurationService).toBeDefined();
	});

	it('has a name property', function() {
		expect(appComponent.name).toBe('My First Angular 2 App');
	});

});
