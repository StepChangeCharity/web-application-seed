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
	public LOGGING_ENDPOINT: string = '';

	/**
	 * Environment application is deployed to (development | staging | production, etc). 
	 */
	public ENVIRONMENT: string = '';

	/**
	 * Version of the deployed application.
	 */
	public APP_VERSION: string = '';

	/**
	 * Flags whether the configured environment is production.
	 */
	public isProduction(): boolean {
		return this.ENVIRONMENT === 'production';
	}

	/**
	 * Flags whether the configured environment is development.
	 */
	public isDevelopment(): boolean {
		return this.ENVIRONMENT === 'development' || this.ENVIRONMENT === 'dev';
	}

}

