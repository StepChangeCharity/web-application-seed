import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import counterReducer, * as fromCounter from './counter.reducer';

export interface AppState {
	counter: fromCounter.CounterState;
}

export default compose(storeLogger(), combineReducers)({
	counter: counterReducer
});
