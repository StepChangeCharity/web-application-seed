import { enableProdMode, provide, ExceptionHandler }  from '@angular/core';
import { bootstrap }                                  from '@angular/platform-browser-dynamic';
import { LoggingService, LoggingErrorHandler }        from '../services';
import { AppComponent }                               from './app.component';
import { AppConfig }                                  from './app-config';
import '../theme/styles.scss';

if (process.env.NODE_ENV === 'production') {
	enableProdMode();
}

bootstrap(
	AppComponent, [
		AppConfig,
		LoggingService,
		provide( ExceptionHandler, {useClass: LoggingErrorHandler} )
	]
);
