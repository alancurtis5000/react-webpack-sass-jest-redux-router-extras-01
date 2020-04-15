
// error messages
const errorRequiredField = 'Required Field';
const errorRequiredSymbolAt = 'Needs "@" symbol for email';
const errorRequiredSymbolPeriod = 'Needs "." symbol for email';

export const isEmail = ( email ) => {
  const errors = [];
  // validate email
  if ( email === "" ) {
    if (!errors.includes(errorRequiredField)){
      errors.push(errorRequiredField);
    }
    return errors;
  } else {
    let index = errors.indexOf(errorRequiredField);
    if (index !== -1){
      errors.splice(index, 1);
    }
  }
  if ( !email.includes("@") ) {
    if (!errors.includes(errorRequiredSymbolAt)){
      errors.push(errorRequiredSymbolAt);
    }
  } else {
    let index = errors.indexOf(errorRequiredSymbolAt);
    if (index !== -1){
      errors.splice(index, 1);
    }
  }
  if ( !email.includes(".") ) {
    if (!errors.includes(errorRequiredSymbolPeriod)){
      errors.push(errorRequiredSymbolPeriod);
    }
  } else {
    let index = errors.indexOf(errorRequiredSymbolPeriod);
    if (index !== -1){
      errors.splice(index, 1);
    }
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
