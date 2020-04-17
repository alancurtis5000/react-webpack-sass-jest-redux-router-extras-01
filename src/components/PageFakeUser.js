import React from 'react';
import { connect } from 'react-redux';
import { updateFakeUserName } from '../actions/fakeUsers';
import map from 'lodash/map';
import InputBasic from './InputBasic';

export const PageFakeUser = (props) => {
  const renderUsers = () => {
    return map( props.fakeUsers.usersList, (user, i)=>( <div className="user" key={i}> {user.name} </div>));
  };

  return (
    <div className="PageFakeUser" style={{display:"flex", flexDirection:"column", maxWidth:"200px", margin:"auto"}}>
      <InputBasic label={"Name"} value={props.fakeUsers.newUser.name} id={"name"} type={'text'} handleOnChange={props.updateFakeUserName}/>
      <button onClick={()=>console.log(props.fakeUsers)}>Log</button> 
      <button onClick={()=>console.log("add user")}>Add User</button> 
      <div className="user-list">
        {renderUsers()}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  updateFakeUserName
};

function mapStateToProps(state) {
  return {
    fakeUsers: state.fakeUsers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageFakeUser);