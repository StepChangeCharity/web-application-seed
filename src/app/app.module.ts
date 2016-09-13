// Angular imports
import { NgModule, APP_INITIALIZER, ErrorHandler }		            from '@angular/core';
import { BrowserModule }																					from '@angular/platform-browser';
import { HttpModule }																							from '@angular/http';
import { CommonModule }																						from '@angular/common';
import { FormsModule }																						from '@angular/forms';
// Application Core imports
import { CoreModule }                                             from './core/core.module';

// Application imports
import { appRoutes }																							from './features';
import { AppComponent, HomeComponent, CounterComponent }					from './features';
import '../theme/styles.scss';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		CommonModule,
		FormsModule,
		CoreModule.provideCore('./app.config.json'),
		appRoutes
	],
	declarations: [
		AppComponent,
		HomeComponent,
		CounterComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
