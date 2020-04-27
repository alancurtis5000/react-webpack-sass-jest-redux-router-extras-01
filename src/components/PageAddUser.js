import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { startGetUsers } from '../actions/users';

export const PageAddUser = (props) => {
  const handlePingServer=()=>{
    console.log("handlePingServer");
    axios.get('http://localhost:9090/api/users').then(res=>{
      console.log({res})
    });
  }

  const handleAddUser=()=>{
    props.startGetUsers();
  };

  return (
    <div className="PageAddUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      PageAddUser
      <label htmlFor="name">Name</label>
      <input type="text" className="name"/>


      <button onClick={handleAddUser}>Add User</button>
      <button onClick={()=>console.log(props)}>LogProps</button>
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
  startGetUsers: () => dispatch(startGetUsers()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(PageAddUser);