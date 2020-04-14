import { 
  CHANGE_TEXT
 } from '../actions/pageTest';

const initalState = {
  text:'',
  form:{
    firstName:{value:'', errors:[]},
    lastName:{value:'', errors:[]},
    email:{value:'', errors:[]},
    phone:{value:'', errors:[]},
    age:{value:0, errors:[]},
    date:{value:0, errors:[]}
  },
}

export default (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
        return  {...state, ...action.payload};
    default:
      return state;
  }
};
