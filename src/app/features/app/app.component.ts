// Angular imports
import { OnInit, Component }	  from '@angular/core';

// Application imports
import { ConfigurationService } from '../../core';

@Component({
	selector: 'fcc-app',
	template: `
		<div class="container">
			<img src='./assets/images/logo.jpg' />
			<ul>
				<li><a href="#" [routerLink]="['/home']">Home</a></li>
				<li><a href="#" [routerLink]="['/counter']">Counter</a></li>
			</ul>
			<router-outlet></router-outlet>
		</div>
	`,
	styles: [require('./app.scss')]
})
export class AppComponent implements OnInit {
	public name: string = 'My First Angular 2 App';
	public version: string = '';

	constructor(private _configurationService: ConfigurationService) { }

	ngOnInit(): void {
		this.version = this._configurationService.currentConfiguration.APP_VERSION;
	}
}
