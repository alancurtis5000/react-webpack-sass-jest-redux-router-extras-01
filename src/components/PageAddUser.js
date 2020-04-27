import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export const PageAddUser = (props) => {
  const handlePingServer=()=>{
    console.log("handlePingServer");
    axios.get('http://localhost:9090/api/test').then(res=>{
      console.log({res})
  })
  }

  return (
    <div className="PageAddUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      PageAddUser
      <button onClick={handlePingServer}>Ping server</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
   state
  };
};

const mapDispatchToProps = (dispatch)=>({
  // updateFakeNewUserInput: (e) => dispatch(updateFakeNewUserInput(e)),
  // startAddFakeNewUserToUsers: ( fakeNewUser ) => dispatch(startAddFakeNewUserToUsers(fakeNewUser)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(PageAddUser);