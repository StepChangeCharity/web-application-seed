import { inject, TestBed, fakeAsync } from '@angular/core/testing';
import { Injectable, Injector, ReflectiveInjector } from '@angular/core';
import { HttpModule, ConnectionBackend, XHRBackend, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ConfigurationService } from './configuration-service';

describe('configurationService', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpModule
			],
			providers: [
				Http,
				ConfigurationService,
				{ provide: MockBackend, useClass: MockBackend },
				{ provide: BaseRequestOptions, useClass: BaseRequestOptions },
				{
					provide: Http,
					useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
						return new Http(backend, defaultOptions);
					},
					deps: [MockBackend, BaseRequestOptions]
				}
			]
		});

	});


	it('should have configuration service defined',
		inject([ConfigurationService, MockBackend], fakeAsync(
			(configurationService: ConfigurationService, mockBackend, MockBackend) => {
			expect(configurationService).toBeDefined();
		}))
	);


	it('should load the configuration',
		inject([ConfigurationService, MockBackend], fakeAsync(
			(configurationService: ConfigurationService, mockBackend, MockBackend) => {

			// Send
			mockBackend.connections.subscribe(connection => {
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
			});

		}))
	);

});
