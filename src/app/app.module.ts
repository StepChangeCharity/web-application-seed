import { CoreModule } from './core/core.module';
// Angular imports
import { NgModule, APP_INITIALIZER, ErrorHandler }		            from '@angular/core';
import { BrowserModule }																					from '@angular/platform-browser';
import { HttpModule }																							from '@angular/http';
import { CommonModule }																						from '@angular/common';
import { FormsModule }																						from '@angular/forms';
// Application imports
import { appRoutes }																							from './features';
import { AppComponent, HomeComponent, CounterComponent }					from './features';
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
		CoreModule.provideCore('./app.config.json'),
		provideHotStore(reducers),
		appRoutes
	],
	declarations: [
		AppComponent,
		HomeComponent,
		CounterComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		actions
	]
})

export class AppModule { }
