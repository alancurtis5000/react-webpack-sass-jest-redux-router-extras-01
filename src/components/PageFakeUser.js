import React from 'react';
import { connect } from 'react-redux';
import { updateNewFakeUserInput, startAddNewUser  } from '../actions/fakeUsers';
import map from 'lodash/map';
import find from 'lodash/find';
import InputBasic from './InputBasic';

export const PageFakeUser = (props) => {
  const renderUsers = () => {
    return map( props.fakeUsers.usersList, (user, i)=>( <div className="user" key={i}> {user.name} </div>));
  };

  const name = find(props.fakeUsers.newUser, {key:"name"}).value;
  const email = find(props.fakeUsers.newUser, {key:"email"}).value
  return (
    <div className="PageFakeUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      <InputBasic label={"Name"} value={name} id={"name"} type={'text'} handleOnChange={props.updateNewFakeUserInput}/>
      <InputBasic label={"Email"} value={email} id={"email"} type={'email'} handleOnChange={props.updateNewFakeUserInput}/>
      <button onClick={()=>console.log(props.fakeUsers)}>Log</button> 
      <button onClick={props.startAddNewUser}>test</button> 
      <button onClick={()=>console.log("add user")}>Add User</button> 
      <div className="user-list">
        {renderUsers()}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  updateNewFakeUserInput,
  startAddNewUser
};

function mapStateToProps(state) {
  return {
    fakeUsers: state.fakeUsers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageFakeUser);