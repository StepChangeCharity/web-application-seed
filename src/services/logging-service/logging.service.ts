import { Injectable } from '@angular/core';
import { AppConfig } from '../../app/app-config';
import Raven = require('raven-js');

// FJ Notes / TODO:
// 1 - "services" folder isn't the greatest place for this - can be abstracted out when we look at folder structure.
// 2 - I've abstracted out the Raven code into a separate service as:
//   a) It's got a few things missing (in the type definitions) that are better abstracted out
//   b) It's possible we may go with another logging provider
// 3 - This should probably be part of the main shared component library, but unsure of the workflow with that.  Again we can abstract out later.
// 4 - The config should be installed via a separate config file, which we'll be looking at later ...
// 5 - It is not anticipated this is the finished article, more will be added over time ...
// 6 - Add e2e tests and check the isSetup and getLastEventID methods to verify the report has been made.
//   - see the following for example scenarios - https://github.com/toepoke/raven-webpack/blob/master/src/app/app.component.ts

@Injectable()
export class LoggingService {

	constructor(
		private _appConfig: AppConfig
	) {
		this.configure();
	}

	/**
	 * Initialises the Raven logging provider.
	 */
	public configure(): void {
		// Docs: https://docs.getsentry.com/hosted/clients/javascript/install/
		Raven.config(this._appConfig.LOGGING_ENDPOINT, {
			release: this._appConfig.APP_VERSION
		}).install();

		// Limitation of Raven type definitions (hence quoted property)
		Raven['setTagsContext']({
			environment: this._appConfig.ENVIRONMENT
		});
	}


	/**
	 * Flags whether the third-party logging service has been initialised.
	 */
	public isSetup(): boolean {
		return Raven.isSetup();
	}


	/**
	 * Once authenticated we can improve the quality of our logging by associating
	 * the logged in user with the error messages.
	 */
	public setUser(id: string, username: string, email: string): void {
		// Docs: https://docs.getsentry.com/hosted/clients/javascript/#adding-context
		Raven.setUserContext({
			id: id,
			username: username,
			email: email
		});
	}


	/**
	 * Returns the ID of the last event we sent to the third-party logging provider.
	 */
	public getLastEventID(): string {
		return Raven.lastEventId();
	}


	/**
	 * Shows a dialog where the user can enter additional information about an error, to help diagnosis.
	 */
	public askForFeedback(): void {
		Raven['showReportDialog']();
	}


	/**
	 * Reports an error to the third-party provider.
	 * @remarks - Typically this is used inside a try...catch block where you're looking at a specific scenario.
	 */
	public captureError(err: Error): void {
		Raven.captureException(err['originalException']);
	}

}