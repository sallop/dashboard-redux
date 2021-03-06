import { combineReducers } from 'redux';
// import { Action } from '../actions';
// import { StoreState, Member } from '../types';
// import { CounterState, TableState, Member } from '../types';
// import { Member } from '../types';
// import * as c from '../constants';

import { CounterState, TableState, AuthState } from '../types';
import * as counter from './counter';
import * as table from './table';
import * as auth from './auth';

// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
// export default function reducer(state: StoreState = initialState(), action: Action): StoreState {}

export interface GlobalState {
  counter: CounterState;
  table: TableState;
  auth: AuthState;
}

export default combineReducers<GlobalState>({
  counter: counter.reducer,
  table: table.reducer,
  auth: auth.reducer,
});
