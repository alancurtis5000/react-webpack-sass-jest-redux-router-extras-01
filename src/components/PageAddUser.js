import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { startGetUsers } from '../actions/users';
import find from 'lodash/find';

export const PageAddUser = (props) => {
  const [name, setName] =  useState('');
  const [findUser, setFindUser] =  useState('');
  const [isEdit, setIsEdit] =  useState(false);
  const [selectedUser, setSelectedUser] =  useState({});

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

  const handleGetUsersByName=()=>{
       axios.get('http://localhost:9090/api/usersByName').then(res=>{
      console.log({res})
    });
  };
  const handleGetAllUsers=()=>{
       axios.get('http://localhost:9090/api/usersAll').then(res=>{
      console.log({res})
    });
  };

  const handleAddUser=()=>{
    const body = {name};
    axios.post('http://localhost:9090/api/users', body).then(res=>{
      console.log({res})
      props.startGetUsers();
      setName("");
    });
  };

  const handleDeleteUser=(e)=>{
    let id = e.target.value;
    console.log("handleDeleteUser", id);
 
    const params = {id};
    axios.delete('http://localhost:9090/api/users', {params}).then(res=>{
      console.log({res})
      props.startGetUsers();
    });
  };

  const handleUpdateUser=()=>{
    console.log("handleUpdateUser");
    // const body = {name};
    // axios.delete('http://localhost:9090/api/users', body).then(res=>{
    //   console.log({res})
    // });
  };

  const handleSelectUser=( e )=>{
    let id = e.target.dataset.id * 1;
    let user = find(props.users, {id});
    console.log("handleSelectUser", id, {user, users:props.users});
    setSelectedUser(user);
  }

  const handleToggleEdit=()=>{
    setIsEdit(!isEdit);
  }

  const renderUsers = () => {
    return props.users.map((user, i)=>(
    <div className="user"  key={i} style={{ display:'flex', justifyContent:'space-between' }}> 
      <div onClick={handleSelectUser} data-id={user.id} style={{ width:'100%' }} > {user.user_name} </div>
      <button onClick={handleDeleteUser} value={user.id}>Delete</button>
    </div>));
  };

  const handleCancel=()=>{
    handleToggleEdit();
  }

  const handleSave=()=>{
    handleToggleEdit()
  }

  return (
    <div className="PageAddUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      <div className="user-card" style={{border:"2px solid black", margin:"10px 0px", padding:"10px"}}>
        <div>Selected User</div>
        {isEdit?
          <div>
            <input type="text"/>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
          :
          <div>
            <div>{selectedUser.user_name}</div>
            <button onClick={handleToggleEdit}>Edit</button>
          </div>
        }
      </div>
      <label htmlFor="name">Name</label>
      <input type="text" className="name" value={name} onChange={(e)=>setName(e.target.value)}/>

      <button onClick={handleAddUser}>Add User</button>

      <label htmlFor="find-user">Find User by Name</label>
      <input type="text" className="find-user" value={findUser} onChange={(e)=>setFindUser(e.target.value)}/>

      <button onClick={handleGetUsersByName}>Get Users By Name</button>
      <button onClick={handleGetAllUsers}>Get All Users</button>
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