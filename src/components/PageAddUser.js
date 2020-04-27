import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export const PageAddUser = (props) => {
  const handlePingServer=()=>{
    console.log("handlePingServer");
    axios.get('http://localhost:9090/api/users').then(res=>{
      console.log({res})
    });
  }

  return (
    <div className="PageAddUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      PageAddUser
      <label htmlFor="name">Name</label>
      <input type="text" className="name"/>


      <button onClick={handlePingServer}>Add User</button>
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