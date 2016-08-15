import { it, describe, expect, beforeEach } from '@angular/core/testing';
import { provide, ReflectiveInjector } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ConfigurationService } from './configuration-service';

describe('configurationService', () => {
	let injector, mockBackend, xhr, httpService;
	let configurationService: ConfigurationService;

	beforeEach(() => {
		injector = ReflectiveInjector.resolveAndCreate([
			HTTP_PROVIDERS,
			MockBackend,
			provide(XHRBackend, {useClass: MockBackend}),
			ConfigurationService
		]);

		mockBackend = injector.get(MockBackend);
		xhr = injector.get(XHRBackend);
		httpService = injector.get(Http);
		configurationService = injector.get(ConfigurationService);
	});


	it('should have configuration service defined', () => {
		expect(configurationService).toBeDefined();
	});


	it('should load the configuration', () => {
		// Send
		xhr.connections.subscribe(connection => {
			let options: ResponseOptions = new ResponseOptions({
				body: {
					'LOGGING_ENDPOINT': 'https://4eb93e8b2b5e4a499a88749fe9f535b5@app.getsentry.com/83794',
					'ENVIRONMENT': 'development',
					'APP_VERSION': '1.2.34567'
				}
			});
			connection.mockRespond(new Response(options));
		});

		// Receive
		configurationService.loadConfiguration('./made-up-config.json').then((content) => {
			expect(content.LOGGING_ENDPOINT).toBe('https://4eb93e8b2b5e4a499a88749fe9f535b5@app.getsentry.com/83794');
			expect(content.ENVIRONMENT).toBe('development');
			expect(content.APP_VERSION).toBe('1.2.34567');
			expect(content.isDevelopment()).toBe(true);
			expect(content.isProduction()).toBe(false);
		});

	});

});
