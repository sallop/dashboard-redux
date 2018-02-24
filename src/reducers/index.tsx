import { Action } from '../actions';
import { StoreState } from '../types';
import * as c from '../constants';

function initialState(): StoreState {
  return {
    value: 0
  };
}

export default function reducer(state: StoreState = initialState(), action: Action): StoreState {

  switch (action.type) {
      case c.PUSH_INCREMENT:
        return { ...state, value: state.value + 1 };
      case c.PUSH_DECREMENT:
        return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
