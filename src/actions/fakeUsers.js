
import { store } from '../index';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';

import { isNewUserValid } from '../helpers/inputValidator';
export const UPDATE_NEW_FAKE_USER_INPUT = "UPDATE_NEW_FAKE_USER_INPUT";
export const START_ADD_NEW_USER = "START_ADD_NEW_USER";

export const updateNewFakeUserInput = ( e ) => {
  let key = e.target.id
  let state = cloneDeep(store.getState().fakeUsers);
  let value = e.target.value
  let index = findIndex(state.newUser, {key});
  let newObject = {...state.newUser[index], value };
  state.newUser[index] = newObject;

  return {
    type: UPDATE_NEW_FAKE_USER_INPUT,
    payload: state
  }
}


export const startAddNewUser = () => {
  const newUser = store.getState().fakeUsers.newUser

  
  // if is valid
  //// add to list 
  //// clear input

  // if is not valid
  //// dont add to list
  //// set errors to why it was not valid.
  // const state = store.getState()
  // console.log({state})
  // const store = configureStore();
  console.log("here",store.getState(), newUser)
  console.log(isNewUserValid(newUser));


  return {
    type: START_ADD_NEW_USER,
    payload: {}
  }
}