import { Component } from '@angular/core';

@Component({
	selector: 'fcc-app',
	template: '<h1>{{name}}</h1>',
	styles: [
		require('../assets/styles/normalize.css'),
		require('../assets/styles/skeleton.css')
	]
})
export class AppComponent {
	public name: string = 'My First Angular 2 App';
}
