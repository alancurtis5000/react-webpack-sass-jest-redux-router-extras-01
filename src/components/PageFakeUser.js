import React from 'react';
import { connect } from 'react-redux';
import {  startAddFakeNewUserToUsers } from '../actions/fakeUsers';
import { updateFakeNewUserInput  } from '../actions/fakeNewUser';
import map from 'lodash/map';
import InputBasic from './InputBasic';

export const PageFakeUser = (props) => {
  const renderUsers = () => {
    return map( props.fakeUsers, (user, i)=>( <div className="user" key={i}> {user.name} </div>));
  };


  const { name, email } = props.fakeNewUser
  return (
    <div className="PageFakeUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      <InputBasic label={"Name"} value={name.value} id={"name"} type={'text'} errors={name.errors} handleOnChange={props.updateFakeNewUserInput}/>
      <InputBasic label={"Email"} value={email.value} id={"email"} type={'email'} errors={email.errors} handleOnChange={props.updateFakeNewUserInput}/>
      <button onClick={()=>console.log(props)}>Log</button> 
      <button onClick={()=>props.startAddFakeNewUserToUsers(props.fakeNewUser)}>Add New User</button> 
      <div className="user-list">
        {renderUsers()}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  updateFakeNewUserInput,
  startAddFakeNewUserToUsers
};

function mapStateToProps(state) {
  return {
    fakeUsers: state.fakeUsers,
    fakeNewUser: state.fakeNewUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageFakeUser);