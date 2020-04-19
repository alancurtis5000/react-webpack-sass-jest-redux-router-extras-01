import { 
  UPDATE_FAKE_NEW_USER_INPUT,
  CLEAR_FAKE_NEW_USER_INPUT
 } from '../actions/fakeNewUser';

export const initalState = {
  name:{key:'name', value:'', errors:[]},
  email:{key:'email', value:'', errors:[]},
}

export default (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_FAKE_NEW_USER_INPUT:
      return  {...state, ...action.payload};
    case CLEAR_FAKE_NEW_USER_INPUT:
      return  {...state, ...action.payload};
    default:
      return state;
  }
};
