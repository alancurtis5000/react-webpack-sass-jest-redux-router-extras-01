import React from 'react';

export const Header = () => {
  const handleOnClick = () =>{
    console.log('clicked');
    return "clicked";
  }
  return(
    <div data-test="Header"style={{width:'100%', backgroundColor:'red'}}>
      <h1> This is the Header</h1>
      <button className="click-me" data-test="click-me" onClick={handleOnClick}>Click me</button>
    </div>
  )
} 

export default Header;