import { 
  UPDATE_FAKE_USER_NAME
 } from '../actions/fakeUsers';

export const initalState = {
  newUser:{
    name:''
  },
  usersList:[
    {name:'Mike'}
  ]
}

export default (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_FAKE_USER_NAME:
      return  {...state, newUser:{name:action.payload}};
    default:
      return state;
  }
};
