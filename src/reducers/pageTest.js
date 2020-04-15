import { 
  CHANGE_TEXT,
  UPDATE_FORM,
  CLEAR_FORM,
  SET_ERRORS
 } from '../actions/pageTest';

const initalState = {
  firstName:{value:'', errors:[], type:'text', label:'First Name', id:'firstName', placeholder:'', required:true},
  lastName:{value:'', errors:[], type:'text', label:'Last Name', id:'lastName', placeholder:'',  required:false},
  email:{value:'', errors:[], type:'email', label:'Email', id:'email', placeholder:'', required:true},
  phone:{value:'', errors:[], type:'tel', label:'Phone', id:'phone', placeholder:'',  required:false},
  age:{value:'', errors:[], type:'number', label:'Age', id:'age', placeholder:'',  required:false},
  date:{value:'', errors:[], type:'date', label:'Date', id:'date', placeholder:'',  required:false}
}

export default (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return  {...state, ...action.payload};
    case UPDATE_FORM:
      const obj =  { ...state[action.payload.id], ["value"]:action.payload.value }
      return  {...state, [action.payload.id]:obj };
    case CLEAR_FORM:
      return  {...state, ...initalState };
    case SET_ERRORS:
      return  {...state, ...action.payload };
    default:
      return state;
  }
};
