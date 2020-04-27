import { 
  GET_USERS_REQUEST,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS
 } from '../actions/users';

export const initalState = {
  isPending: false,
  error: '',
  items: []

};

const usersReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return  {...state, isPending:true, error:''};
    case GET_USERS_FAILURE:
      return  {...state, isPending:false, error: action.payload, items:[] };
    case GET_USERS_SUCCESS:
      return  {...state, isPending:false, error: '', items:action.payload};
    default:
      return state;
  }
};

export default usersReducer;
