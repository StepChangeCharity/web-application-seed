import { OnInit, Component, ChangeDetectionStrategy }	from '@angular/core';

import { Store, Action }	from '@ngrx/store';
import { Observable }			from 'rxjs/Observable';

import { ConfigurationService }	from '../../core/services/configuration-service';
import { AppState }							from '../../core/store/reducers';
import { CounterActions }				from '../../core/store/actions';

@Component({
	selector: 'fcc-app',
	template: `
		<div class="container">
			<img src='./assets/images/logo.jpg' />
			<h1 class="title">{{name}} - version {{version}}</h1>
			<h2 class="sub-title">I feel the need, the need for seed!</h2>
			<div class="encapsulate">
				<h3 class="sub-title">NGRX Sample: Seed Count</h3>
				<p>Counter: {{ counter$ | async }}</p>
				<button type="button" (click)="increase()">Increase</button>
				<button type="button" (click)="decrease()">Decrease</button>
				<button type="button" (click)="reset()">Reset</button>
			</div>
		</div>
	`,
	styles: [require('./app.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	public name: string = 'My First Angular 2 App';
	public version: string = '';
	public counter$: Observable<number>;

	constructor(
		private _configurationService: ConfigurationService,
		private _store: Store<AppState>,
		private counterActions: CounterActions
	) {
		this.counter$ = _store.map(x => x.counter.counter);
	}

	ngOnInit(): void {
		this.version = this._configurationService.currentConfiguration.APP_VERSION;
	}

	public increase(): void {
		this.dispatch(this.counterActions.increment());
	}

	public decrease(): void {
		this.dispatch(this.counterActions.decrement());
	}

	public reset(): void {
		this.dispatch(this.counterActions.reset());
	}

	private dispatch(action: Action) {
		this._store.dispatch(action);
	}

}

