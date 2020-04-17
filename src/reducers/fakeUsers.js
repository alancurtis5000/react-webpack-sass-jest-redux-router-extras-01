import cloneDeep from 'lodash/cloneDeep';
import { 
  UPDATE_NEW_FAKE_USER_INPUT,
  START_ADD_NEW_USER,
  CANCEL_ADD_NEW_FAKE_USER,
  ADD_NEW_FAKE_USER
 } from '../actions/fakeUsers';

export const initalState = {
  newUser:[
    {key:'name', value:'', errors:[]},
    {key:'email', value:'', errors:[]},
  ],
  usersList:[
    {name:'Mike'}
  ]
}

export default (state = initalState, action) => {
  let cloneState = cloneDeep(state);
  switch (action.type) {
    case   UPDATE_NEW_FAKE_USER_INPUT:
      return  {...cloneState, ...action.payload};
    case START_ADD_NEW_USER:
      return  {...state};
    case ADD_NEW_FAKE_USER:
      return  {...state};
    case CANCEL_ADD_NEW_FAKE_USER:
      return  {...state, ...action.payload};
    default:
      return state;
  }
};
