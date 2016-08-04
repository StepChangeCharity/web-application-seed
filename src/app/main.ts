import { enableProdMode, provide, APP_INITIALIZER, ExceptionHandler }  from '@angular/core';
import { HTTP_PROVIDERS, Http, XHRBackend }                            from '@angular/http';
import { bootstrap }                                                   from '@angular/platform-browser-dynamic';
import { LoggingService, LoggingErrorHandler }                         from '../services';
import { AppComponent }                                                from './app.component';
import { AppConfig }                                                   from './app-config';
import { ConfigurationService }                                        from './configuration-service';
import '../theme/styles.scss';

if (process.env.NODE_ENV === 'production') {
	// "enableProdMode" _has_ to be called before bootstrapping the application
	// ... so no choice but to do it as part of the build. 
	enableProdMode();
}

bootstrap(
	AppComponent, [
		ConfigurationService,
		AppConfig,
		LoggingService,
		HTTP_PROVIDERS,
		provide( ExceptionHandler, {useClass: LoggingErrorHandler} ),
		provide(APP_INITIALIZER, {
			useFactory: (configurationService: ConfigurationService) => () => {
				return configurationService.loadConfiguration('./app.config.json');
			},
			deps: [ConfigurationService, HTTP_PROVIDERS],
			multi: true
		})
	]
);

