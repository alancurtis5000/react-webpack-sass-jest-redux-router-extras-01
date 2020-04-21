import cloneDeep from 'lodash/cloneDeep';
import { 
  UPDATE_FAKE_NEW_USER_INPUT,
  CLEAR_FAKE_NEW_USER_INPUT,
  SET_ERRORS_FAKE_NEW_USER_INPUT
 } from '../actions/fakeNewUser';

export const initalState = {
  name:{key:'name', value:'', errors:[]},
  email:{key:'email', value:'', errors:[]}
}

export default (state = initalState, action) => {
  let updatedState = cloneDeep(state);
  switch (action.type) {
    case UPDATE_FAKE_NEW_USER_INPUT:
      updatedState[action.payload.key].value = action.payload.value
      return  {...updatedState};
    case CLEAR_FAKE_NEW_USER_INPUT:
      return  {...state, ...initalState};
    case SET_ERRORS_FAKE_NEW_USER_INPUT:
      return  {...state, ...action.payload};
    default:
      return state;
  }
};
