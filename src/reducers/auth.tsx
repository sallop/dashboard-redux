// import { Action } from '../action';
// import { AuthState } from '../types';
// 
// export interface LoginRequest {
//   type: c.LOGIN_REQUEST;
//   payload: {};
//   error?: boolean;
// }
// 
// export interface LoginSuccess {
//   type: c.LOGIN_SUCCESS;
//   payload: {};
//   error?: boolean;
// }
// 
// export interface LoginFailure {
//   type: c.LOGIN_FAILURE;
//   payload: {};
//   error?: boolean;
// }
// 
// export interface LogoutRequest {
//   type: c.LOGOUT_REQUEST;
//   payload: {};
//   error?: boolean;
// }
// 
// export interface LogoutSuccess {
//   type: c.LOGOUT_SUCCESS;
//   payload: {};
//   error?: boolean;
// }
// 
// export interface LogoutFailure {
//   type: c.LOGOUT_FAILURE;
//   payload: {};
//   error?: boolean;
// }
// 
// 
// type LoginAction = LoginRequest | LoginSuccess | LoginFailure;
// type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;
// 
// // https://github.com/auth0-blog/redux-auth
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
// export function loginUser(creds) {
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
// 
// export interface AuthState {
//   isLoggingIn: boolean;
//   idToken?: string;
//   profile?: auth0.Auth0UserProfile;
//   error?: string;
// }
// 
// export const initialState: AuthState = {
//   isLoggingIn: false,
// };
// 
// export default function auth(
//   state: AuthState = initialState(),
//   action: Action
// ): AuthState {
// 
//   switch (action.type) {
//   case c.LOGIN_REQUEST:
//     return { ...state }
//     break;
//   case c.LOGIN_SUCCESS:
//     return { ...state }
//     break;
//   case c.LOGIN_FAILURE:
//     return { ...state }
//     break;
//   case c.LOGOUT_REQUEST:
//     return { ...state }
//     break;
//   case c.LOGOUT_SUCCESS:
//     return { ...state }
//     break;
//   case c.LOGOUT_FAILURE:
//     return { ...state }
//     break;
//   default:
//     break;
//   }
// }
