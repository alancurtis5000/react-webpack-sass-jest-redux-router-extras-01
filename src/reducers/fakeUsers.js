import cloneDeep from 'lodash/cloneDeep';
import { 
  UPDATE_NEW_FAKE_USER_INPUT,
  START_ADD_NEW_USER
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
    default:
      return state;
  }
};
