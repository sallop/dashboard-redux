import { Action } from '../actions';
import { StoreState, Member } from '../types';
import * as c from '../constants';
// import mockData from '../utils/mockData'; Error: ts try to load module
var members = require('../utils/mockData');

function initialState(): StoreState {
  return {
    value: 0,
    editor: members[0],
    members
  };
}

// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
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
      let { key, value } = action.payload;
      let editor = { ...state.editor, [key]: value };
      return { ...state, editor };
      // return { ...state, [key]: value }; Error: shallow copy
    case c.SUBMIT_VALUE_FROM_EDITOR:
      console.log(`c.SUBMIT_VALUE_FROM_EDITOR:`);
      let { edited } = action.payload;
      let ms: Member[] = [...state.members];
      ms.forEach((m, index, array) => {
        if (m.id === edited.id) {
          array[index] = edited;
        }
      });
      console.log(`ms = ${JSON.stringify(ms)}`);
      return { ...state, members: ms };
    default:
      return { ...state };
  }
}
