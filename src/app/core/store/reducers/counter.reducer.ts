import '@ngrx/core/add/operator/select';
import { Action } 		from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CounterActions } from '../actions';

export interface CounterState {
	counter: number;
}

const initialState: CounterState = {
	counter: 0
};

export default function (state = initialState, action: Action): CounterState {
	switch (action.type) {
		case CounterActions.INCREMENT:
			return Object.assign({}, state, { counter: state.counter + 1 });
		case CounterActions.DECREMENT:
			return Object.assign({}, state, { counter: state.counter - 1 });
		case CounterActions.RESET:
			return Object.assign({}, state, { counter: 0 });			
		default:
			return state;
	}
};

export function counter() {
	return (state$: Observable<CounterState>) => state$
		.select(s => s.counter);
}