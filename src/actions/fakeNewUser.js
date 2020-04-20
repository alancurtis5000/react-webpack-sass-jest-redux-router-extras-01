
import { store } from '../index';
import cloneDeep from 'lodash/cloneDeep';
import {initalState} from '../reducers/fakeNewUser';
import {addNewFakeUserToUsers} from './fakeUsers';
import { isNewUserValid } from '../helpers/inputValidator';

export const UPDATE_FAKE_NEW_USER_INPUT = "UPDATE_FAKE_NEW_USER_INPUT";
export const CLEAR_FAKE_NEW_USER_INPUT = "CLEAR_FAKE_NEW_USER_INPUT";
export const SET_ERRORS_FAKE_NEW_USER_INPUT = "SET_ERRORS_FAKE_NEW_USER_INPUT";

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

export const setErrorsFakeNewUserInput = ( newUser ) => {
  return {
    type: SET_ERRORS_FAKE_NEW_USER_INPUT,
    payload: newUser
  };
}

export const startAddFakeNewUser = ( fakeNewUser ) => {
  store.dispatch((dispatch)=>{
    let validator = isNewUserValid(fakeNewUser);
    if( validator.isValid ){
      dispatch(addNewFakeUserToUsers(fakeNewUser));
      dispatch(clearFakeNewUserInput());
    } else {
      dispatch(setErrorsFakeNewUserInput());
    }
  });
  // TODO need to get rid of this  useless return
  return {
    type: "C",
    payload: {}
  };
}