import { Action } from '../action';
//import { AuthState } from '../types';
import { AuthState, User, Credential } from '../types';

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


type LoginAction = LoginRequest | LoginSuccess | LoginFailure;
type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;

// https://github.com/auth0-blog/redux-auth
export function loginRequest(creds): Action {
  return {
    type: c.LOGIN_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated: false,
      creds
    }
  };
}

// https://github.com/auth0-blog/redux-auth
// https://github.com/auth0-blog/nodejs-jwt-authentication-sample

export function loginSuccess(user: User): Action {
  return {
    type: c.LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: true,
      id_token: user.id_token
    }
  };
}

export function loginFailure(message: string): Action {
  return {
    type: c.LOGIN_FAILURE,
    payload: {
      isFetching: false,
      isAuthenticated: false,
      message
    }
  };
}

export function logoutRequest(): Action {
  return {
    type: c.LOGOUT_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated: true
    }
  };
}

export function logoutSuccess(): Action {
  return {
    type: c.LOGOUT_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: false
    }
  };
}

export function logoutFailure(): Action {
  return {
    type: c.LOGOUT_FAILURE,
    payload: {}
  };
}

// https://github.com/auth0-blog/redux-auth/blob/master/actions.js
// Calls the API to get a token and dispatches action along the way
export function loginUser(creds: Credential) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form/urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  };

  //return dispatch => {
  return async function(dispatch: Dispatch<Action>): Promise<void> {
    // we dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    // return fetch('http://localhost:3001/sessions/create', config)
    try {
      const response = await fetch('http://localhost:3000/credential.json', config);
      if (!response.ok) {
        throw Error( response.statusText );
      }
      const user: User = await response.json();
      localStorage.setItem('id_token', user.id_token);
      dispatch(receiveLogin(user));
    } catch (e) {
      console.log("Error: ", err);
      dispatch(loginError(user.message));
      // return Promise.reject(user);
    }
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

// export interface AuthState {
//   isLoggingIn: boolean;
//   idToken?: string;
//   profile?: auth0.Auth0UserProfile;
//   error?: string;
// }

export const initialState: AuthState = {
  isLoggingIn: false,
};

export default function auth(
  state: AuthState = initialState(),
  action: Action
): AuthState {

  switch (action.type) {
  case c.LOGIN_REQUEST:
    return { ...state }
    break;
  case c.LOGIN_SUCCESS:
    return { ...state }
    break;
  case c.LOGIN_FAILURE:
    return { ...state }
    break;
  case c.LOGOUT_REQUEST:
    return { ...state }
    break;
  case c.LOGOUT_SUCCESS:
    return { ...state }
    break;
  case c.LOGOUT_FAILURE:
    return { ...state }
    break;
  default:
    break;
  }
}
