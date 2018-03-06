import { Action } from '../actions';
import { CounterState } from '../types';
import * as c from '../constants';

export function initialState(): CounterState {
  return {
    value: 0,
  };
}

// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
export function reducer(state: CounterState = initialState(), action: Action): CounterState {

  switch (action.type) {
    case c.PUSH_INCREMENT:
      return { ...state, value: state.value + 1 };
    case c.PUSH_DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
}
