import {Component} from '@angular/core';
import '../theme/styles.scss';

@Component({
    selector: 'fcc-app',
    template: `
        <div class="container">
            <img src='./assets/images/logo.jpg' />
            <h1 class="title">{{name}}</h1>
            <h2 class="sub-title">Subtitle</h2>
		</div>
	`,
    styles: [require('./app.scss')]
})
export class AppComponent {
    public name:string = 'My First Angular 2 App';
}