import * as c from '../constants';
import { Member } from '../types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import 'whatwg-fetch';

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

export interface FetchMembers {
  type: c.FETCH_MEMBERS;
  payload: {
    // status: string;
    status: c.STATUS_REQUEST | c.STATUS_ERROR | c.STATUS_SUCCESS;
    members: Member[];
  };
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

type CounterAction = PushIncrement | PushDecrement;
type TableAction = SetValueToEditor | SetValueToTable | ChangeValueInEditor | SubmitValueFromEditor;
type LoginAction = LoginRequest | LoginSuccess | LoginFailure;
type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;

export type Action = CounterAction | TableAction | LoginAction | LogoutAction;

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

// https://github.com/gaearon/redux-thunk/issues/103
export function fetchMembers(): ThunkAction<Promise<void>, Action, null> {
  return async function(dispatch: Dispatch<Action>): Promise<void> {
    // start progress bar
    dispatch({
      type: c.FETCH_MEMBERS,
      payload: {
        status: c.STATUS_REQUEST,
        members: []
      }
    });

    // https://medium.com/@kkomaz/react-to-async-await-553c43f243e2
    // https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
    // wrap in try to listen for Promise rejection - equivalent of '.catch()'
    try {
      // wait for the fetch to finish then dispatch the result
      const response = await fetch(`http://localhost:3000/mockData.json`);

      if (!response.ok) {
        // NOTE: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
        throw Error( response.statusText );
      }

      const members = await response.json();

      dispatch({
        type: c.FETCH_MEMBERS,
        payload: {
          status: c.STATUS_SUCCESS,
          members
        }
      });
    } catch (e) {
      dispatch({
        type: c.FETCH_MEMBERS,
        payload: {
          status: c.STATUS_ERROR,
          members: []
        }
      });
    }
  }
}

// https://github.com/auth0-blog/redux-auth
// export function loginRequest(creds): Action {
//   return {
//     type: c.LOGIN_REQUEST,
//     payload: {
//       isFetching: true,
//       isAuthenticated: false,
//       creds
//     }
//   };
// }
// 
// export function loginSuccess(user): Action {
//   return {
//     type: c.LOGIN_SUCCESS,
//     payload: {
//       isFetching: false,
//       isAuthenticated: true,
//       id_token: user.id_token
//     }
//   };
// }
// 
// export function loginFailure(message): Action {
//   return {
//     type: c.LOGIN_FAILURE,
//     payload: {
//       isFetching: false,
//       isAuthenticated: false,
//       message
//     }
//   };
// }
// 
// export function logoutRequest(): Action {
//   return {
//     type: c.LOGOUT_REQUEST,
//     payload: {
//       isFetching: true,
//       isAuthenticated: true
//     }
//   };
// }
// 
// export function logoutSuccess(): Action {
//   return {
//     type: c.LOGOUT_SUCCESS,
//     payload: {
//       isFetching: false,
//       isAuthenticated: false
//     }
//   };
// }
// 
// export function logoutFailure(): Action {
//   return {
//     type: c.LOGOUT_FAILURE,
//     payload: {}
//   };
// }
// 
// // Calls the API to get a token and dispatches action along the way
// export loginUser(creds) {
//   let config = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form/urlencoded' },
//     body: `username=${creds.username}&password=${creds.password}`
//   };
// 
//   return dispatch => {
//   };
// }
// 
// export function logoutUser() {
//   return dispatch => {
//   };
// }
