import { 
  ADD_NEW_FAKE_USER_TO_USERS,
  addFakeNewUserToUsers,
  startAddFakeNewUserToUsers
 } from '../../actions/fakeUsers';
 import CLEAR_FAKE_NEW_USER_INPUT from '../../actions/fakeNewUser';

 import fakeNewUser from '../fixtures/fakeNewUser'

 import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('should setup addFakeNewUserToUsers action object with provided values', ()=>{
  const action = addFakeNewUserToUsers(fakeNewUser);

  let name = fakeNewUser.name.value;
  let email = fakeNewUser.email.value;
  let newUserObj = {name, email}

  expect(action).toEqual({
    type: ADD_NEW_FAKE_USER_TO_USERS,
    payload: newUserObj
  });
});

// test('should setup startAddFakeNewUserToUsers action object with provided values', ()=>{
//   const action = startAddFakeNewUserToUsers(fakeNewUser);

//   const expectedActions = [
//     { type: ADD_NEW_FAKE_USER_TO_USERS },
//     { type: CLEAR_FAKE_NEW_USER_INPUT }
//   ]

//   const store = createMockStore({fakeUsers:[], fakeNewUser:{}});
//   store.dispatch(action)
//   // return of async actions
//   expect(store.getActions()).toEqual(expectedActions)
// });