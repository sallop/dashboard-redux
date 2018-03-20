import { Action } from '../action';
import { AuthState } from '../types';
// import { AuthState, User, Credential } from '../types';
import * as c from '../constants';

// export interface AuthState {
//   isLoggingIn: boolean;
//   idToken?: string;
//   profile?: auth0.Auth0UserProfile;
//   error?: string;
// }

export const initialState: AuthState = {
  isLoggingIn: false,
};

export function reducer(
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
