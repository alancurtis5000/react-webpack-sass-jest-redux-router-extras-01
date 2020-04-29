export const generateGreeting=(name)=>{
  return `Hello ${name}!`;
}

export const validateInput=(name)=>{
  if(!name){
    return false;
  }
  return true;
}

export const checkAndGenerate=(name)=>{
  if (!validateInput(name)){
    return false;
  }
  return generateGreeting(name)
}