import * as c from '../constants';
// import { Member } from '../types';
import { Member, Credential, User } from '../types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import 'whatwg-fetch';
import * as auth0 from 'auth0-js';

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
type TableAction = SetValueToEditor | SetValueToTable | ChangeValueInEditor | SubmitValueFromEditor | FetchMembers;
type LoginAction = LoginRequest | LoginSuccess | LoginFailure;
type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;

export type Action = CounterAction | TableAction | LoginAction | LogoutAction;

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
  };
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

// https://github.com/auth0-blog/redux-auth
// https://github.com/auth0-blog/redux-auth/blob/master/components/Login.js
// const username = this.refs.username
// const password = this.refs.password
// const creds = { username: username.value.trim(), password: password.value.trim() }
interface ShowLock {
  profile: auth0.Auth0UserProfile;
  idToken: string;
}

// export function loginUser(cred: Credential): ThunkAction<Promise<void>, Action, null> {
export function loginUser(): ThunkAction<Promise<void>, Action, null> {
  return async function(dispatch: Dispatch<Action>): Promise<void> {
    const creds: Credential = {
      username: "username",
      password: "password",
    };
    dispatch(loginRequest(creds));
    // https://github.com/jch254/starter-pack/blob/typescript/src/auth/sagas.ts
    const lock = new Auth0Lock(
      process.env.AUTH0_CLIENT_ID as string,
      process.env.AUTH0_DOMAIN as string,
      {
        auth: { redirect: false },
        languageDictionary: { title: 'Starter Pack' },
      },
    );

    console.log(`cid = ${process.env.AUTH0_CLIENT_ID}`);
    console.log(`domain = ${process.env.AUTH0_DOMAIN}`);

    const showLock = () => new Promise<ShowLock>((resolve, reject) => {
      lock.on('hide', () => reject('Lock closed'));
      lock.on('authenticated', (authResult: auth0.Auth0DecodedHash) => {
        lock.getUserInfo(
          authResult.accessToken as string,
          (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => {
            if (!error) {
              lock.hide();
              resolve({ profile, idToken: authResult.idToken as string });
            }
          },
        );
      });
      lock.on('unrecoverable_error', (error) => {
        lock.hide();
        reject(error);
      });

      lock.show();
    });

    try {
      // const { profile, idToken }: ShowLock = yield call(showLock);
      showLock.then((args: ShowLock) => {
        const { profile, idToken }: ShowLock = args;

        // dispatch(loginSuccess(user));
        dispatch(loginSuccess(profile, idToken));

      }, (error: auth0.Auth0Error) => {

        console.log(`error description: ${error.errorDescription}`);

        dispatch(loginFailure(error.errorDescription));
      });
    } catch(error) {

      console.log(`error closure: ${JSON.stringify(error)}`);
    }
  }
}

export function loginRequest(creds: Credential): Action {
  return {
    type: c.LOGIN_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated: false,
      creds
    }
  };
}
// export const loginRequest = (): LoginRequest => ({
//     type: LOGIN_REQUEST,
// });

// https://github.com/auth0-blog/redux-auth
// https://github.com/auth0-blog/nodejs-jwt-authentication-sample

// export interface Auth0UserProfile {
//   name: string;
//   nickname: string;
//   picture: string;
//   user_id: string;
//   username?: string;
//   given_name?: string;
//   family_name?: string;
//   email?: string;
//   email_verified?: boolean;
//   clientID: string;
//   gender?: string;
//   locale?: string;
//   identities: Auth0Identity[];
//   created_at: string;
//   updated_at: string;
//   sub: string;
//   user_metadata?: any;
//   app_metadata?: any;
// }

// export function loginSuccess(user: User): Action {
export function loginSuccess(profile: auth0.Auth0UserProfile): Action {
  console.log(`${JSON.stringify(profile)}`);
  return {
    type: c.LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: true,
      id_token: profile.user_id,
    }
  };
}

// export const loginSuccess = (profile: auth0.Auth0UserProfile, idToken: string): LoginSuccess => ({
//   type: LOGIN_SUCCESS,
//   profile,
//   idToken,
// });

export function loginFailure(message: string): Action {
  return {
    type: c.LOGIN_FAILURE,
    payload: {
      isFetching: false,
      isAuthenticated: false,
      message,
    }
  };
}

// export const loginFailure = (error: string): LoginFailure => ({
//   type: LOGIN_FAILURE,
//   error,
// });

export function logoutRequest(): Action {
  return {
    type: c.LOGOUT_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated: true,
    }
  };
}

export function logoutSuccess(): Action {
  return {
    type: c.LOGOUT_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: false,
    }
  };
}

export function logoutFailure(): Action {
  return {
    type: c.LOGOUT_FAILURE,
    payload: {},
  };
}

// https://github.com/auth0-blog/redux-auth/blob/master/actions.js
// Calls the API to get a token and dispatches action along the way
// export function loginUser(creds: Credential) {
//   let config = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form/urlencoded' },
//     body: `username=${creds.username}&password=${creds.password}`
//   };
//
//   //return dispatch => {
//   return async function(dispatch: Dispatch<Action>): Promise<void> {
//     // we dispatch requestLogin to kickoff the call to the API
//     dispatch(requestLogin(creds));
//     // return fetch('http://localhost:3001/sessions/create', config)
//     try {
//       const response = await fetch('http://localhost:3000/credential.json', config);
//       if (!response.ok) {
//         throw Error( response.statusText );
//       }
//       const user: User = await response.json();
//       localStorage.setItem('id_token', user.id_token);
//       dispatch(receiveLogin(user));
//     } catch (e) {
//       console.log("Error: ", err);
//       dispatch(loginError(user.message));
//       // return Promise.reject(user);
//     }
//   };
// }

export function requestLogout() {
  return {
    type: c.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

export function receiveLogout() {
  return {
    type: c.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// https://github.com/auth0-blog/redux-auth/blob/master/actions.js
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  };
}
