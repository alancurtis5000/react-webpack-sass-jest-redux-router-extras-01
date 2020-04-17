
import { store } from '../index';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import forEach from 'lodash/forEach';

import { isEmail } from '../helpers/inputValidator';
export const ADD_NEW_FAKE_USER = "ADD_NEW_FAKE_USER";
export const UPDATE_NEW_FAKE_USER_INPUT = "UPDATE_NEW_FAKE_USER_INPUT";
export const START_ADD_NEW_USER = "START_ADD_NEW_USER";
export const CANCEL_ADD_NEW_FAKE_USER = "CANCEL_ADD_NEW_FAKE_USER";

export const updateNewFakeUserInput = ( e ) => {
  let state = cloneDeep(store.getState().fakeUsers);
  let key = e.target.id;
  let value = e.target.value;
  let index = findIndex(state.newUser, {key});
  let newObject = {...state.newUser[index], value };
  state.newUser[index] = newObject;

  return {
    type: UPDATE_NEW_FAKE_USER_INPUT,
    payload: state
  };
}


export const addNewFakeUser = () => {
  let state = cloneDeep(store.getState().fakeUsers);
  console.log("addnew")
  return {
    type: ADD_NEW_FAKE_USER,
    payload: state
  };
}

export const cancelAddNewFakeUser = (state) => {
  console.log("cancelAddNewFakeUser")
  return {
    type: CANCEL_ADD_NEW_FAKE_USER,
    payload: state
  };
}

export const startAddNewUser = () => {
  let state = cloneDeep(store.getState().fakeUsers);
  let isNotValid = false;
  forEach(state.newUser, (input)=>{
    console.log(input)
    if(input.key === 'email'){
      let errors = isEmail(input.value)
      if ( errors ){
        let index = findIndex(state.newUser, {key:input.key});
        let newObject = {...state.newUser[index], errors };
        state.newUser[index] = newObject;
        isNotValid = true;
      }
      
    }
  });

  if( isNotValid ){
    return cancelAddNewFakeUser(state);
  } else {
    return addNewFakeUser();
  }
  
  // if is valid
  //// add to list 
  //// clear input

  // if is not valid
  //// dont add to list
  //// set errors to why it was not valid.
  // const state = store.getState()
  // console.log({state})
  // const store = configureStore();
  // console.log("here",store.getState(), newUser)
  // console.log(isNewUserValid(newUser));


  return {
    type: START_ADD_NEW_USER,
    payload: {}
  }
}