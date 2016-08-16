import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class CounterActions {
	static INCREMENT = 'INCREMENT';
	increment(): Action {
		return {
			type: CounterActions.INCREMENT
		};
	}

	static DECREMENT = 'DECREMENT';
	decrement(): Action {
		return {
			type: CounterActions.DECREMENT
		};
	}

	static RESET = 'RESET';
	reset(): Action {
		return {
			type: CounterActions.RESET
		};
	}
}