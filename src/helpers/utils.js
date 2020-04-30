import {fetchData} from '../../http';

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

// async functions
export const printTitle=()=>{
  loadTitle().then(title=>{
    return title;
  })
}

export const loadTitle = () =>{
  return fetchData()
  .then((res)=>{
    const title = res.title.toUpperCase();
    return title;
  })
}