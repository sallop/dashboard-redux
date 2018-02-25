import * as c from '../constants';
import { Member } from '../types';

// actions
export interface PushIncrement {
  type: c.PUSH_INCREMENT;
  payload: {};
  error?: boolean;
}

export interface PushDecrement {
  type: c.PUSH_DECREMENT;
  payload: {};
  error?: boolean;
}

export interface SetValueToEditor {
  type: c.SET_VALUE_TO_EDITOR;
  payload: { editor: Member };
  error?: boolean;
}

export interface SetValueToTable {
  type: c.SET_VALUE_TO_TABLE;
  payload: { edited: Member };
  error?: boolean;
}

export interface ChangeValueInEditor {
  type: c.CHANGE_VALUE_IN_EDITOR;
  payload: { name: string, value: string };
  error?: boolean;
}

// export type Action = PushIncrement | PushDecrement;
export type Action = PushIncrement | PushDecrement | SetValueToEditor | SetValueToTable | ChangeValueInEditor;

// action creators
export function pushIncrement(): Action {
  return {
    type: c.PUSH_INCREMENT,
    payload: {}
  };
}

export function pushDecrement(): Action {
  return {
    type: c.PUSH_DECREMENT,
    payload: {}
  };
}

export function setValueToEditor(editor: Member): Action {
  console.log(`SetValueToEditor ${JSON.stringify(editor)}`);
  return {
    type: c.SET_VALUE_TO_EDITOR,
    payload: { editor }
  };
}

export function setValueToTable(edited: Member): Action {
  console.log(`SetValueToTable ${JSON.stringify(edited)}`);
  return {
    type: c.SET_VALUE_TO_TABLE,
    payload: { edited }
  };
}

// export function changeValueInEditor(name: any, value: any) : Action {
//   return {
//     type: c.CHANGE_VALUE_IN_EDITOR,
//     payload: { name, value }
//   }
// }
