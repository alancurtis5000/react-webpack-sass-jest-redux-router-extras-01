import React from 'react';
import Headline from './Headline';

export const Header = () => {
  const handleOnClick = () =>{
    console.log('clicked');
    return "clicked";
  }

  const tempArr = [
    {
      fName:"Joe",
      lName:"Jonson",
      email:"Joe@gmail.com",
      age: 24,
      onlineStatus: false
    }
  ]
  
  return(
    <div data-test="Header"style={{width:'100%', backgroundColor:'red'}}>
      <h1> This is the Header</h1>
      <button className="click-me" data-test="click-me" onClick={handleOnClick}>Click me</button>
      <Headline header="Post" desc="Click the button to render posts" tempArr={tempArr}/>
    </div>
  )
} 

export default Header;