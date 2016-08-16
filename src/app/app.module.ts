import { NgModule, enableProdMode, provide, APP_INITIALIZER, ExceptionHandler }		from '@angular/core';
import { HTTP_PROVIDERS, Http, XHRBackend }																				from '@angular/http';
import { BrowserModule }																													from '@angular/platform-browser';
import { bootstrap }																															from '@angular/platform-browser-dynamic';

import { provideStore }																														from '@ngrx/store';

import { LoggingService, LoggingErrorHandler }																		from './core/services/logging-service';
import { AppComponent }																														from './features/app/app.component';
import { AppConfig }																															from './core/models/app-config';
import { ConfigurationService }																										from './core/services/configuration-service';
import reducers																																		from './core/store/reducers';
import actions																																		from './core/store/actions';
import '../theme/styles.scss';

if (process.env.NODE_ENV === 'production') {
	// "enableProdMode" _has_ to be called before bootstrapping the application
	// ... so no choice but to do it as part of the build.
	enableProdMode();
}


@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		AppConfig,
		ConfigurationService,
		LoggingService,
		provideStore(reducers),
		actions,
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
})
export class AppModule {

}
