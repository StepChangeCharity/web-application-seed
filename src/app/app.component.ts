import { Component } from '@angular/core';

@Component({
	selector: 'fcc-app',
	template: `
		<h1 class="title">{{name}}</h1>
		<h2 class="sub-title">Subtitle</h2>
	`,
	styles: [ require('./app.scss') ]
})
export class AppComponent {
	public name: string = 'My First Angular 2 App';
}
