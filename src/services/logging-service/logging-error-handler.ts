import { Injectable, ExceptionHandler } from '@angular/core';
import { LoggingService } from '../';

@Injectable()
export class LoggingErrorHandler {

	/**
	 * Logging service is injected to ensure service is configured.
	 * (in reality it will be set-up _somewhere_else_, but just in case).
	 */
	constructor(
		private _logger: LoggingService
	) {
		if (!this._logger.isSetup()) {
			this._logger.configure();
		}
	}

	call(err: any) {
		this._logger.captureError(err);
	}

}

