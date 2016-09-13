// Angular imports
import { Component, OnInit }		from '@angular/core';
// Application imports
import { ConfigurationService }	from '../../core/core.module';

@Component({
	selector: 'fcc-home',
	template: `
		<h1 class="title">{{name}} - version {{version}}</h1>
		<h2 class="sub-title">I feel the need, the need for seed!</h2>
	`,
	styles: [require('./home.scss')]
})
export class HomeComponent implements OnInit {
	public name: string = 'My First Angular 2 App';
	public version: string = '';

	constructor(private _configurationService: ConfigurationService) { }

	ngOnInit(): void {
		this.version = this._configurationService.currentConfiguration.APP_VERSION;
	}
}
