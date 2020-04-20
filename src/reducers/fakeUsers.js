import { 
  ADD_NEW_FAKE_USER_TO_USERS
 } from '../actions/fakeUsers';

export const initalState = [
  //{name:'Mike', email:'Mike@email.com'}
]

const fakeUsersReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NEW_FAKE_USER_TO_USERS:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default fakeUsersReducer;