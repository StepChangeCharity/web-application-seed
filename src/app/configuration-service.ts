import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from './core/models/app-config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Abstracts away application configuration.
 */
@Injectable()
export class ConfigurationService {
	public currentConfiguration: AppConfig = null;

	constructor(
		private _http: Http
	) {
	}

	public loadConfiguration(fromUrl: string): Promise<AppConfig> {
		let exportCfg: AppConfig = null;
		let promise = this._http.get(fromUrl)
			.map(resp => resp.json())
			.toPromise()
		;
		promise.then(config => this.currentConfiguration = config);

		return promise;
	}

}

