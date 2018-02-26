import { Action } from '../actions';
import { StoreState } from '../types';
import * as c from '../constants';
// import mockData from '../utils/mockData';
var members = require('../utils/mockData');

function initialState(): StoreState {
  return {
    value: 0,
    editor: members[0],
    members
  };
}

export default function reducer(state: StoreState = initialState(), action: Action): StoreState {

  switch (action.type) {
    case c.PUSH_INCREMENT:
      return { ...state, value: state.value + 1 };
    case c.PUSH_DECREMENT:
      return { ...state, value: state.value - 1 };
    case c.SET_VALUE_TO_EDITOR:
      console.log(`SET_VALUE_TO_EDITOR ${action}`);
      return { ...state, editor: action.payload.editor };
    case c.SET_VALUE_TO_TABLE:
      return { ...state };
    case c.CHANGE_VALUE_IN_EDITOR:
      return { ...state };
    default:
      return state;
  }
}
