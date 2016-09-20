import { Component, Injectable } from '@angular/core';
import { TestBed, async, inject, tick, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
	HttpModule,
	Http,
	ConnectionBackend,
	RequestOptions,
	BaseRequestOptions,
	Response,
	ResponseOptions,
	Headers
} from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from './list.component';
import { ListComponent } from './list.component';
import { EmployeeService } from './employee-service';

class MockEmployeeService {
		
	public loadEmployees(): Observable<Employee[]> {
 		let employees = [{id: 1, name: 'Joe Bloggs', jobTitle: 'Project Manager'}, {id: 2, name: 'John Doe', jobTitle: 'Developer'}];
		return Observable.of(employees);
	}
}

let fixture: ComponentFixture<ListComponent>;
let comp: ListComponent;

describe('ListComponent', () => {

	beforeEach(() => {

		TestBed.configureTestingModule({
			declarations: [
				ListComponent
			],
			providers: [
				// * Use mock service *
				// {provide: EmployeeService, useClass: MockEmployeeService}

				// * Use mock backend
				EmployeeService,
				BaseRequestOptions,
				MockBackend,
				{
					provide: Http,
					useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
						return new Http(backend, defaultOptions);
					},
					deps: [MockBackend, BaseRequestOptions]
				},
			],
			imports: [
				HttpModule
			]
		})
		
		fixture = TestBed.createComponent(ListComponent);
		comp = fixture.componentInstance;

		this.employeeService = fixture.debugElement.injector.get(EmployeeService);
	});

	// * Use mock backend *
	beforeEach(inject([MockBackend], (backend: MockBackend) => {
		const mockResponse = new Response(new ResponseOptions({body: {
				"Employees": [{
					"id": 1,
					"name": "Joe Bloggs",
					"jobTitle": "Project Manager"
				}, {
					"id": 2,
					"name": "John Doe",
					"jobTitle": "Developer"
				}]
			}}));
		backend.connections.subscribe((c: MockConnection) => c.mockRespond(mockResponse));
	}))

	// * Use mock backend *
	it('should retrieve employee list from service', inject([EmployeeService],
		(employeeService: EmployeeService) => {
	// * Use mock service *
	// it('should retrieve employee list from service (async)', async(() => {
		fixture.detectChanges();
		comp.getListItems();
		fixture.whenStable().then(() => {
			expect(comp._employees).toEqual([{id: 1, name: 'Joe Bloggs', jobTitle: 'Project Manager'}, {id: 2, name: 'John Doe', jobTitle: 'Developer'}]);
		});
	}));

})



