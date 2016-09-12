import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from './list.component';

@Injectable()
export class EmployeeService {

	constructor(
		private http: Http
	) { }
		
	loadEmployees(): Observable<Employee[]> {
 		return this.http.get('employees.json')
		 .map(res => <Employee[]>res.json().Employees);
	}
}