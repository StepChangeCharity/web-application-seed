import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttp extends Http {

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		let testUrl = undefined;
		// process.env.NODE_ENV == 'testing'
		if (global['e2erunning'] == true) {
			if (url = 'http://localhost:3000/employees.json') {
				console.log('Using alternate endpoint...');
				return(super.get('http://localhost:3004/getEmployees', options));
			}
		}
		else {
			console.log('Using regular endpoint...');
			return(super.get(url, options));
		}
	}
} 