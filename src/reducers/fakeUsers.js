import cloneDeep from 'lodash/cloneDeep';
import { 
  ADD_NEW_FAKE_USER_TO_USERS
 } from '../actions/fakeUsers';

export const initalState = [
    {name:'Mike', email:'MikesEmail@email.com'}
]

export default (state = initalState, action) => {
  let cloneState = cloneDeep(state);
  switch (action.type) {
    case ADD_NEW_FAKE_USER_TO_USERS:
      return [...cloneState, action.payload]
    default:
      return state;
  }
};
