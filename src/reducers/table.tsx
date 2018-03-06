import { Action } from '../actions';
import { TableState, Member } from '../types';
import * as c from '../constants';

function initialState(): TableState {
  const editor: Member = {
    id: '',
    group: '',
    name: '',
    pronounce: '',
    spiritualName: '',
    birthday: '',
    postcode: '',
    address: '',
    info: ''
  };

  const members: Member[] = [];
  return {
    // value: 0,
    editor,
    members
  };
}

// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
export function reducer(state: TableState = initialState(), action: Action): TableState {

  switch (action.type) {
      // case c.PUSH_INCREMENT:
      //  return { ...state, value: state.value + 1 };
      // case c.PUSH_DECREMENT:
      // return { ...state, value: state.value - 1 };
    case c.SET_VALUE_TO_EDITOR:
      return { ...state, editor: action.payload.editor };
    case c.SET_VALUE_TO_TABLE:
      return { ...state };
    case c.CHANGE_VALUE_IN_EDITOR:
      let { key, value } = action.payload;
      let editor = { ...state.editor, [key]: value };
      return { ...state, editor };
      // return { ...state, [key]: value }; Error: shallow copy
    case c.SUBMIT_VALUE_FROM_EDITOR:
      let { edited } = action.payload;
      let ms: Member[] = [...state.members];
      ms.forEach((m, index, array) => {
        if (m.id === edited.id) {
          array[index] = edited;
        }
      });
      return { ...state, members: ms };
    case c.FETCH_MEMBERS:
      let status = action.payload.status;
      let fetched = action.payload.members;
      switch (status) {
        case c.STATUS_REQUEST:
            // start progressive bar
          break;
        case c.STATUS_ERROR:
            // stop progressive bar with Error process
          break;
        case c.STATUS_SUCCESS:
            // stop progressive bar with success
          return { ...state, members: fetched };
        default:
          // huh?
          break;
        }
      return { ...state, members: fetched };
    default:
      return { ...state };
  }
}
