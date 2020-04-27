import {clearFakeNewUserInput, setErrorsFakeNewUserInput} from './fakeNewUser';
import { isNewUserValid } from '../helpers/inputValidator';

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

export const startAddFakeNewUserToUsers = (fakeNewUser) => {
  let validator = isNewUserValid(fakeNewUser);
  if( validator.isValid ){
    const test = dispatch => {
      dispatch(addFakeNewUserToUsers(fakeNewUser)),
      dispatch(clearFakeNewUserInput())
    }
    console.log({test})
    return  test
  } else {
    return dispatch => dispatch(setErrorsFakeNewUserInput(fakeNewUser));
  }
}