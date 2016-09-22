// // Angular imports
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { EmployeeService } from './employee-service';

@Component({
	selector: 'fcc-list',
 	template: `
 		<h3 class="sub-title">json-server demo: Test</h3>
		<button id="listbutton" (click)="getListItems()">Get List</button>
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
				<tr id="employeetable" *ngFor="let employee of _employees">
					<td id="employeeid{{employee.id}}">
						{{employee.id}}
					</td>
					<td id="employeename{{employee.id}}">
						{{employee.name}}
					</td>
					<td id="employeejobtitle{{employee.id}}">
						{{employee.jobTitle}}
					</td>
				</tr>
			</table>
		</div>
	`,
 	styles: [require('./list.scss')]
})
export class ListComponent {
	
	@Input() _employees: Array<Employee>;

	constructor(
		private employeeService: EmployeeService,
		private ref: ChangeDetectorRef
	) {
	}

	getListItems() {
		this.employeeService.loadEmployees().then(res =>
			this._employees = res
		)};
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

