import { Action } from '../actions';
import { AuthState } from '../types';
// import { AuthState, User, Credential } from '../types';
import { getStoredAuthState } from '../utils/functions';
import * as c from '../constants';

// @types/auth0-js/index.tsx
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

export const initialState: AuthState = {
  isLoggingIn: false,
  // idToken?: string;
  // idToken?: string;
  // profile?: auth0.Auth0UserProfile;
  // error?: string;
  // auth0-blog/redux-auth/reducers.js
  // isFetching: false,
  // isAuthenticated: localStorage.getItem('id_token') ? true : false
};

// https://github.com/jch254/starter-pack/blob/typescript/src/auth/reducer.ts
export function reducer(
  state: AuthState = {
    ...initialState,
    ...getStoredAuthState()
  },
  action: Action
  // action: LoginAction
  // auth0-blog/redux-auth/reducers.js
  // isFetching: false,
  // isAuthenticated: localStorage.getItem('id_token') ? true : false
  // starter-pack/auth/reducer.ts
): AuthState {
  // const { payload } = action;

  switch (action.type) {
  case c.LOGIN_REQUEST:
    return {
      ...state,
      isLoggingIn: true,
      // idToken: "",
      // profile: "",
      // https://github.com/auth0-blog/redux-auth/blob/master/actions.js
      // isFetching: true,
      // isAuthenticated: false,
      // creds
    };
  case c.LOGIN_SUCCESS:
    return {
      ...state,
      isLoggingIn: false, // isFetching: false,  https://github.com/auth0-blog/redux-auth/blob/master/reducers.js
      // idToken: payload.idToken,
      // profile: payload.profile,
      idToken: action.payload.idToken,
      profile: action.payload.profile,

      // auth0-blog/redux-auth
      // isFetching: false,
      // isAuthenticated: true,
      // id_token: user.id_token
    };
  case c.LOGIN_FAILURE:
    return {
      ...state,
      isLoggingIn: false,
      idToken: undefined,
      profile: undefined,
      // error: payload.error
      error: action.payload.error
      // auth0-blog/redux-auth
      // isFetching: false,
      // isAuthenticated: false
      // message
    };
  case c.LOGOUT_REQUEST:
    return initialState;
    // isFetching = true, https://github.com/auth0-blog/redux-auth/blob/master/reducers.js
    // auth0-blog/redux-auth
    // return {
    //   isFetching: false,
    //   isAuthenticated: false,
    // }
  // case c.LOGOUT_SUCCESS:
  //   return { ...state }
  //   break;
  // case c.LOGOUT_FAILURE:
  //   return { ...state }
  //   break;
  default:
    return { ...state };
  }
}
