// // Angular imports
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { EmployeeService } from './employee-service';

@Component({
	selector: 'fcc-list',
 	template: `
 		<h3 class="sub-title">json-server demo: List</h3>
		<button type="button" (click)="getListItems()">Get List</button>
		<div>
			<table>
				<tr>
					<th>
						ID
					</th>
					<th>
						Name
					</th>
					<th>
						Job Title
					</th>
				</tr>
				<tr *ngFor="let employee of _employees">
					<td>
						{{employee.id}}
					</td>
					<td>
						{{employee.name}}
					</td>
					<td>
						{{employee.jobTitle}}
					</td>
				</tr>
			</table>
		</div>
	`,
 	styles: [require('./list.scss')],
	changeDetection: ChangeDetectionStrategy.Default
})
export class ListComponent {

	_employees: Employee[];

	constructor(
		private http: Http,
		private employeeService: EmployeeService
	) {
		
	}

	getListItems() {
		this.employeeService.loadEmployees().subscribe(res => {
			this._employees = res;
		});
	}
}

export class Employee {
	id: number;
	name: string;
	jobTitle: string;

	constructor(id: number, name: string, jobTitle: string) {
		this.id = id;
		this.name = name;
		this.jobTitle = jobTitle;
	}
}

