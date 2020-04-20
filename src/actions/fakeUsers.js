import {clearFakeNewUserInput, setErrorsFakeNewUserInput} from './fakeNewUser';
import { isNewUserValid } from '../helpers/inputValidator';
import { store } from '../index';

export const ADD_NEW_FAKE_USER_TO_USERS = "ADD_NEW_FAKE_USER_TO_USERS";

export const addFakeNewUserToUsers = (newUser) => {
  let name = newUser.name.value;
  let email = newUser.email.value;
  let newUserObj = {name, email}

  return {
    type: ADD_NEW_FAKE_USER_TO_USERS,
    payload: newUserObj
  };
} 

export const startAddFakeNewUserToUsers = ( fakeNewUser ) => {
  store.dispatch((dispatch)=>{
    let validator = isNewUserValid(fakeNewUser);
    if( validator.isValid ){
      dispatch(addFakeNewUserToUsers(fakeNewUser));
      dispatch(clearFakeNewUserInput());
    } else {
      dispatch(setErrorsFakeNewUserInput(fakeNewUser));
      console.log("errors")
    }
  });
  // TODO need to get rid of this  useless return
  return {
    type: "C",
    payload: {}
  };
}