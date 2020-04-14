import { 
  CHANGE_TEXT,
  UPDATE_FORM
 } from '../actions/pageTest';

const initalState = {
  firstName:{value:'', errors:[], type:'text', label:'First Name', id:'firstName', placeholder:''},
  lastName:{value:'', errors:[], type:'text', label:'Last Name', id:'lastName', placeholder:''},
  email:{value:'', errors:[], type:'text', label:'Email', id:'email', placeholder:''},
  phone:{value:'', errors:[], type:'tel', label:'Phone', id:'phone', placeholder:''},
  age:{value:0, errors:[], type:'number', label:'Age', id:'age', placeholder:''},
  date:{value:0, errors:[], type:'date', label:'Date', id:'date', placeholder:''}
}

export default (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return  {...state, ...action.payload};
    case UPDATE_FORM:
      const obj =  { ...state[action.payload.id], ["value"]:action.payload.value }
      return  {...state, [action.payload.id]:obj };
    default:
      return state;
  }
};
