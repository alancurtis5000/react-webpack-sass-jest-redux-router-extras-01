import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { startGetUsers } from '../actions/users';

export const PageAddUser = (props) => {
  const [name, setName] =  useState('');

  useEffect(() => {
    // only run once on mount.
    props.startGetUsers();
  }, []);

  const handlePingServer=()=>{
    console.log("handlePingServer");
    axios.get('http://localhost:9090/api/users').then(res=>{
      console.log({res})
    });
  }

  const handlePingUsers=()=>{
    props.startGetUsers();
  };

  const handleAddUser=()=>{
    const body = {name};
    axios.post('http://localhost:9090/api/users', body).then(res=>{
      console.log({res})
    });
  };

  const renderUsers = () => {
    return props.users.map((user, i)=>( <div className="user" key={i}> {user.name} </div>));
  };

  return (
    <div className="PageAddUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      PageAddUser
      <label htmlFor="name">Name</label>
      <input type="text" className="name" value={name} onChange={(e)=>setName(e.target.value)}/>


      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handlePingUsers}>Ping Users</button>
      <button onClick={()=>console.log(props)}>LogProps</button>
      <button onClick={handlePingServer}>Ping server</button>
      {renderUsers()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
   users: state.users.items
  };
};

const mapDispatchToProps = (dispatch)=>({
  startGetUsers: () => dispatch(startGetUsers()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(PageAddUser);