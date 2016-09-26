// Angular imports
import { NgModule, APP_INITIALIZER, ErrorHandler, Provider }		            from '@angular/core';
import { BrowserModule }																					from '@angular/platform-browser';
import { HttpModule, Http, ConnectionBackend, RequestOptions, XHRBackend }																							from '@angular/http';
import { CustomHttp } from './features/list/custom-http';
import { CommonModule }																						from '@angular/common';
import { FormsModule, ReactiveFormsModule }																						from '@angular/forms';
// Application imports
import { appRoutes }																							from './features';
import { LoggingService, LoggingErrorHandler }										from './core/services/logging-service';
import { EmployeeService } from './features/list/employee-service';
import { AppComponent, HomeComponent, CounterComponent, ListComponent }					from './features/';
import { AppConfig }																							from './core/models/app-config';
import { ConfigurationService }																		from './core/services/configuration-service';
import { provideHotStore }																				from './core/bootstrap/hmr';
import reducers																										from './core/store/reducers';
import actions																										from './core/store/actions';
import '../theme/styles.scss';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		provideHotStore(reducers),
		appRoutes
	],
	declarations: [
		AppComponent,
		HomeComponent,
		CounterComponent,
		ListComponent,
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		AppConfig,
		ConfigurationService,
		LoggingService,
		EmployeeService,
		actions,
		{
			provide: ErrorHandler,
			useClass: LoggingErrorHandler
		},
		{
			provide: APP_INITIALIZER,
			useFactory: (configurationService: ConfigurationService) => () => {
				return configurationService.loadConfiguration('./app.config.json');
			},
			deps: [ConfigurationService, HttpModule],
			multi: true
		},
		{
			provide: CustomHttp,
			useFactory: (backend: ConnectionBackend, defaultOptions: RequestOptions) => {
				return new CustomHttp(backend, defaultOptions);
			},
			deps: [XHRBackend, RequestOptions]
		}
	]
})

export class AppModule { }
