import { Component } from '@angular/core';

@Component({
	selector: 'fcc-app',
	template: `
		<img src='./assets/images/logo.jpg'>
		<h1>{{name}}</h1>			
`
})
export class AppComponent {
	public name: string = 'My First Angular 2 App';
}
