// Angular imports
import { OnInit, Component, ChangeDetectionStrategy }	from '@angular/core';
// Third party imports
import { Store, Action }	from '@ngrx/store';
import { Observable }			from 'rxjs/Observable';
// Application imports
import { AppState }				from '../../core';
import { CounterActions }	from '../../core';

@Component({
	selector: 'fcc-counter',
	template: `
		<h3 class="sub-title">NGRX Sample: Seed Count</h3>
		<div>Counter: <span id="count">{{ counter$ | async }}</span></div>
		<button id="increase" type="button" (click)="increase()">Increase</button>
		<button id="decrease" type="button" (click)="decrease()">Decrease</button>
		<button id="reset" type="button" (click)="reset()">Reset</button>
	`,
	styles: [require('./counter.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
	public counter$: Observable<number>;

	constructor( private _store: Store<AppState>, private counterActions: CounterActions) { }

	ngOnInit(): void {
		this.counter$ = this._store.map(x => x.counter.counter);
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