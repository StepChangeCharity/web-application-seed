import { Injectable } from '@angular/core';
import { CustomHttp } from './custom-http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Employee } from './list.component';

@Injectable()
export class EmployeeService {

	employeeEndpoint: string = 'http://localhost:3000/employees.json'

	constructor(
		private http: CustomHttp
	) { }
		
	public loadEmployees(): Promise<Employee[]> {
 		return this.http.get(this.employeeEndpoint)
			 .map((res: Response) => <Employee[]>res.json().Employees)
			 .toPromise();
	}
}