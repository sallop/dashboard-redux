import * as c from '../constants';

// actions
export interface PushIncrement {
  type: c.PUSH_INCREMENT;
  payload: { value: number };
  error?: boolean;
}

export interface PushDecrement {
  type: c.PUSH_DECREMENT;
  payload: { value: number };
  error?: boolean;
}

export type Action = PushIncrement | PushDecrement;

// action creators
export function pushIncrement(value: number): Action {
  return {
    type: c.PUSH_INCREMENT,
    payload: { value: value + 1 }
  };
}

export function pushDecrement(value: number): Action {
  return {
    type: c.PUSH_DECREMENT,
    payload: { value: value - 1 }
  };
}
