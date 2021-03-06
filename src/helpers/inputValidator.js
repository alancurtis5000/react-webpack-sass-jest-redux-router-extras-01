import forEach from 'lodash/forEach';
// error messages
export const errorRequiredField = 'Required Field';
export const errorRequiredSymbolAt = 'Needs "@" symbol for email';
export const errorRequiredSymbolPeriod = 'Needs "." symbol for email';

export const isEmail = ( email ) => {
  const errors = [];
  // validate email
  if ( email === "" ) {
    errors.push(errorRequiredField);
    return errors;
  } 
  if ( !email.includes("@") ) {
    errors.push(errorRequiredSymbolAt);
  } 
  if ( !email.includes(".") ) {
    errors.push(errorRequiredSymbolPeriod);
  } 
  return errors;
}

export const isRequired = ( value ) => {
  const errors = [];
  if ( value === "" ) {
    errors.push(errorRequiredField);
  }
  return errors;
}

export const isNewUserValid = ( newUser ) => {
  let validation = {
    isValid:true,
    newUser:{...newUser}
  }

  forEach(newUser, (input)=>{
    let errors = []
    if(input.key === 'email'){
      errors = isEmail(input.value);
      input.errors = errors;
      validation.isValid = errors.length > 0 ? false: validation.isValid ;
    }
  });

  return validation
}
