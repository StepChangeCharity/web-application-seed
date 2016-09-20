import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Employee } from './list.component';

@Injectable()
export class EmployeeService {

	constructor(
		private http: Http
	) { }
		
	public loadEmployees(): Promise<Employee[]> {
 		return this.http.get('employees.json')
			 .map((res: Response) => <Employee[]>res.json().Employees)
			 .toPromise();
	}
}