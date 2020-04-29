import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { startGetUsers } from '../actions/users';
import find from 'lodash/find';
import { checkAndGenerate } from '../helpers/utils';

export const PageAddUser = (props) => {
  const [name, setName] =  useState('');
  const [updateName, setUpdateName] =  useState('');
  const [findUser, setFindUser] =  useState('');
  const [isEdit, setIsEdit] =  useState(false);
  const [selectedUser, setSelectedUser] =  useState({});

  useEffect(() => {
    // only run once on mount.
    props.startGetUsers();
  }, []);

  const handleGetUsersByName=()=>{
       axios.get('http://localhost:9090/api/usersByName').then(res=>{
      console.log({res})
    });
  };

  const handleAddUser=()=>{
    const body = {name};
    axios.post('http://localhost:9090/api/users', body).then(res=>{
      props.startGetUsers();
      setName("");
    });
  };

  const handleDeleteUser=(e)=>{
    let id = e.target.value;
    const params = {id};
    axios.delete('http://localhost:9090/api/users', {params}).then(res=>{
      props.startGetUsers();
    });
  };

  const handleSelectUser=( e )=>{
    let id = e.target.dataset.id * 1;
    let user = find(props.users, {id});
    setSelectedUser(user);
  }

  const handleToggleEdit=()=>{
    setIsEdit(!isEdit);
  }

  const handleCancel=()=>{
    handleToggleEdit();
  }

  const handleGreeting=()=>{
     console.log(checkAndGenerate(selectedUser.user_name))
  }

  const handleSave=()=>{
    handleToggleEdit();
    setSelectedUser({});
    const body = {updateName, id:selectedUser.id};
    axios.put('http://localhost:9090/api/users', body ).then(res=>{
      setUpdateName('');
      props.startGetUsers();
    });
  }

  const renderUsers = () => {
    return props.users.map((user, i)=>(
    <div className="user"  key={i} style={{ display:'flex', justifyContent:'space-between', margin:"2px 0px"}}> 
      <div onClick={handleSelectUser} data-id={user.id} style={{ width:'100%' }} > {user.user_name} </div>
      <button onClick={handleDeleteUser} value={user.id}>Delete</button>
    </div>));
  };

  return (
    <div className="PageAddUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      <div className="user-card" style={{border:"2px solid black", margin:"10px 0px", padding:"10px"}}>
        <div>Selected User</div>
        {isEdit?
          <div>
            <input type="text" className="update-user-name" value={updateName} onChange={(e)=>setUpdateName(e.target.value)}/>
            <div style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
          :
          <div>
            <div>{selectedUser.user_name}</div>
            { selectedUser.user_name ?  <button onClick={handleToggleEdit}>Edit</button>: null}
          </div>
        }
      </div>
      <label htmlFor="name">Name</label>
      <input type="text" className="name" value={name} onChange={(e)=>setName(e.target.value)} style={{margin:"5px 0px"}}/>

      <button onClick={handleAddUser}>Add User</button>

      <label htmlFor="find-user">Find User by Name</label>
      <input type="text" className="find-user" value={findUser} onChange={(e)=>setFindUser(e.target.value)} style={{margin:"5px 0px"}}/>

      <button onClick={handleGetUsersByName}>Get Users By Name</button>
      <button style={{margin:"5px 0px"}} onClick={()=>console.log(props)}>LogProps</button>
      <button style={{margin:"5px 0px"}} onClick={handleGreeting}>greeting</button>

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