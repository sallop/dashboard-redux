import { Action } from '../actions';
import { StoreState } from '../types';
import * as c from '../constants';

function initialState(): StoreState {
  return {
    value: 0
  };
}

export default function reducer(state: StoreState = initialState(), action: Action): StoreState {
  // let { type, payload, error } = action;
  switch (action.type) {
      case c.PUSH_INCREMENT:
        return { value: action.payload.value + 1 };
        // return { ...state, value: value + 1 };
      case c.PUSH_DECREMENT:
        return { value: action.payload.value - 1 };
        // return { ...state, value: value - 1 };
    default:
      return state;
  }
}
