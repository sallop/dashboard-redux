import * as c from '../constants';
import { Member } from '../types';

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

export interface LoginRequest {
  type: c.LOGIN_REQUEST;
  payload: {};
  error?: boolean;
}

export interface LoginSuccess {
  type: c.LOGIN_SUCCESS;
  payload: {};
  error?: boolean;
}

export interface LoginFailure {
  type: c.LOGIN_FAILURE;
  payload: {};
  error?: boolean;
}

export interface LogoutRequest {
  type: c.LOGOUT_REQUEST;
  payload: {};
  error?: boolean;
}

export interface LogoutSuccess {
  type: c.LOGOUT_SUCCESS;
  payload: {};
  error?: boolean;
}

export interface LogoutFailure {
  type: c.LOGOUT_FAILURE;
  payload: {};
  error?: boolean;
}

type TableAction = SetValueToEditor | SetValueToTable | ChangeValueInEditor | SubmitValueFromEditor;
type LoginAction = LoginRequest | LoginSuccess | LoginFailure;
type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;

export type Action = TableAction | LoginAction | LogoutAction;

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

export function loginRequest(): Action {
  return {
    type: c.LOGIN_REQUEST,
    payload: {}
  };
}

export function loginSuccess(): Action {
  return {
    type: c.LOGIN_SUCCESS,
    payload: {}
  };
}

export function loginFailure(): Action {
  return {
    type: c.LOGIN_FAILURE,
    payload: {}
  };
}

export function logoutRequest(): Action {
  return {
    type: c.LOGOUT_REQUEST,
    payload: {}
  };
}

export function logoutSuccess(): Action {
  return {
    type: c.LOGOUT_SUCCESS,
    payload: {}
  };
}

export function logoutFailure(): Action {
  return {
    type: c.LOGOUT_FAILURE,
    payload: {}
  };
}
