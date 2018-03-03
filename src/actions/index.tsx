import * as c from '../constants';
import { Member } from '../types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import 'whatwg-fetch';

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

export interface FetchMembers {
  type: c.FETCH_MEMBERS;
  payload: {
    // status: string;
    status: c.STATUS_REQUEST | c.STATUS_ERROR | c.STATUS_SUCCESS;
    members: Member[];
  };
  error?: boolean;
}

// export type Action = PushIncrement | PushDecrement;
export type Action = PushIncrement | PushDecrement |
  SetValueToEditor | SetValueToTable | ChangeValueInEditor | SubmitValueFromEditor |
  FetchMembers;

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

// https://github.com/gaearon/redux-thunk/issues/103
// export function fetchMembers(): ThunkAction<Promise<string>, Action, null> {
export function fetchMembers(): ThunkAction<Promise<Member[]>, Action, null> {

  return function(dispatch: Dispatch<Action>): any {
    dispatch({
      type: c.FETCH_MEMBERS,
      payload: {
        status: c.STATUS_REQUEST,
        members: []
      }
    });

    // https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
    // return fetch(`http://localhost:3000/mockData.json`, {
    //   method: 'GET'
    // })
    // return fetch(`mockData.json`)
    return fetch(`http://localhost:3000/mockData.json`)
      .then( response => {
        let data = response.json();
        // console.log(`response = ${JSON.stringify(data)}`); can't print here
        if (!response.ok) {
          // NOTE: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
          console.log(`!response.ok`);
          throw Error( response.statusText );
        }
        return data; 
      },     error => {
        dispatch({
          type: c.FETCH_MEMBERS,
          payload: {
            status: c.STATUS_ERROR,
            members: []
          }
        });
      })
      .then( members => {
        console.log(`${JSON.stringify(members)}`);
        dispatch({
          type: c.FETCH_MEMBERS,
          payload: {
            status: c.STATUS_SUCCESS,
            members
          }
        });
      });
  };
}
