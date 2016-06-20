import { Component } from '@angular/core';

@Component({
	selector: 'fcc-app',
	template: '<h1>{{name}}</h1>'
})
export class AppComponent {
	public name: string = 'My First Angular 2 App';
}
