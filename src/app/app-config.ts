import { Injectable } from '@angular/core';

/**
 * Abstracts away application configuration.
 * TODO: This will be loaded from an external configuration file once we look at it
 */
@Injectable()
export class AppConfig {

	/**
	 * URL where logs are recorded (in this instance, it's GetSentry)
	 * To view errors, see: https://app.getsentry.com/stepchange/angular2-component/ 
	 */
	public LOGGING_ENDPOINT: string = 'https://4eb93e8b2b5e4a499a88749fe9f535b5@app.getsentry.com/83794';

	/**
	 * Environment application is deplopyed to. 
	 */
	public ENVIRONMENT: string = 'production';

	/**
	 * Version of the deployed application.
	 */
	public APP_VERSION: string = 'build-1234';

}
