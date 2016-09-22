// // Angular imports
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { EmployeeService } from './employee-service';

@Component({
	selector: 'fcc-list',
 	template: `
 		<h3 class="sub-title">json-server demo: Test</h3>
		<button id="listbutton" (click)="getListItems()">Get List</button>
		<div>
			<table *ngIf="_employees.length > 0">
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
export class ListComponent implements OnInit {
	
	_employees: Array<Employee>;

	constructor(
		private employeeService: EmployeeService
	) { }

	ngOnInit() {
		this._employees = new Array<Employee>();
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

