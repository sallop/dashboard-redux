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
  payload: { key: string, value: string };
  error?: boolean;
}

export interface SubmitValueFromEditor {
  type: c.SUBMIT_VALUE_FROM_EDITOR;
  payload: { edited: Member };
  error?: boolean;
}

// export type Action = PushIncrement | PushDecrement;
export type Action = PushIncrement | PushDecrement |
  SetValueToEditor | SetValueToTable | ChangeValueInEditor | SubmitValueFromEditor;

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
  return {
    type: c.SET_VALUE_TO_EDITOR,
    payload: { editor }
  };
}

export function setValueToTable(edited: Member): Action {
  return {
    type: c.SET_VALUE_TO_TABLE,
    payload: { edited }
  };
}

export function submitValueFromEditor(edited: Member): Action {
  return {
    type: c.SUBMIT_VALUE_FROM_EDITOR,
    payload: { edited }
  };
}

export function changeValueInEditor(key: string, value: string): Action {
  return {
    type: c.CHANGE_VALUE_IN_EDITOR,
    payload: { key, value }
  };
}
