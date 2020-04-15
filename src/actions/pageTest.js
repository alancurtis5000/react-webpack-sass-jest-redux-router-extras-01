
import forEach from 'lodash/forEach';
import cloneDeep from 'lodash/cloneDeep';
import { isEmail, isRequired } from '../helpers/inputValidator';

export const CHANGE_TEXT = "CHANGE_TEXT";
export const changeText = (text) => ({
  type: CHANGE_TEXT,
  payload: {text}
});

export const UPDATE_FORM = "UPDATE_FORM";
export const updateForm = ( id, value ) => {
  return {
    type: UPDATE_FORM,
    payload: { id, value }
  }
};

export const CLEAR_FORM = "CLEAR_FORM";
export const clearForm = () => {
  return {
    type: CLEAR_FORM,
    payload: {}
  }
}

export const SET_ERRORS = "SET_ERRORS";
export const setErrors = ( newForm ) => {
  return {
    type: SET_ERRORS,
    payload: newForm
  }
}

export const validateForm = ( form ) => {
  form = cloneDeep(form);
  let isValid = true;
  let newForm = {}
  forEach(form, (input)=>{
    if(input.required){
      input.errors = isRequired(input.value);
    }
    switch (input.type) {
      case "email":
        input.errors = isEmail(input.value);
        break;
      default:
        break;
    }
    if( input.errors.length > 0 ){
      isValid = false;
    }
    newForm[input.id] = input;
  });

  if( isValid ){
    return clearForm();
  } else {
    return setErrors( newForm );
  }
};