
import { store } from '../index';
import cloneDeep from 'lodash/cloneDeep';
import {initalState} from '../reducers/fakeNewUser';

export const UPDATE_FAKE_NEW_USER_INPUT = "UPDATE_FAKE_NEW_USER_INPUT";
export const CLEAR_FAKE_NEW_USER_INPUT = "CLEAR_FAKE_NEW_USER_INPUT";

export const updateFakeNewUserInput = ( e ) => {
  let state = cloneDeep(store.getState().fakeNewUser);
  let key = e.target.id;
  let value = e.target.value;

  state[key].value = value;

  return {
    type: UPDATE_FAKE_NEW_USER_INPUT,
    payload: state
  };
}


export const clearFakeNewUserInput = ( ) => {
  let state = initalState;
  return {
    type: CLEAR_FAKE_NEW_USER_INPUT,
    payload: state
  };
}

export const startAddFakeNewUser = ( fakeNewUser ) => {
  let state = initalState;
  // if valid 
  //// add new user to users array
  //// clear data from fake new user input
  // else 
  //// keep values 
  //// add errors
  console.log("startAddFakeUser")

  return {
    type: CLEAR_FAKE_NEW_USER_INPUT,
    payload: state
  };
}