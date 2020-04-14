import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm } from '../actions/pageTest';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map'
import moment from 'moment';
import InputBasic from './InputBasic';



const PageTest = (props) => {

  const handleOnClick = () => {
    // console.log("handleOnClick");
  };
  
  const logProps = () => {
    console.log({props:props});
  }

  const renderInputs = () => {
    const inputs = map( props.form, (key,i)=>{
      const { label, type, id, placeholder, errors, value} = key;
      return (
        <InputBasic 
          key={i}
          label={label}
          type={type}
          id={id}
          errors={errors}
          placeholder={placeholder}
          value={value}
          handleOnChange={(e)=>props.updateForm(id, e.target.value)}
        />
      )
    })
    return inputs;
  }

    return (
      <div style={{display:"flex", justifyContent:"center", flexDirection:'column'}} >
        <h2>React PageTest!</h2>

        <div style={{display:"flex"}}>
          <button onClick={handleOnClick}>test click</button>
          <button onClick={logProps}>log props</button>
        </div>

        <div className="form" style={{display:"flex", justifyContent:"center", flexDirection:'column', width:'300px', margin:"auto"}}>
          {renderInputs()}
          <input type="button" value="Submit"/>
          {/*  
          <label htmlFor="firstName1">First Name</label>
          <input type="text" className="firstName1" id="firstName1"/>

          <InputBasic  label="First Name" id="firstName" type="text"/>
          <InputBasic  label="Last Name" id="lastName" type="text"/>
          <InputBasic  label="Email" id="email" type="email"/>
          <InputBasic  label="Phone" id="phone" type="tel"/>


          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="lastName" id="lastName"/>

          <label htmlFor="email"> Email </label>
          <input type="email" className="email" id="email"/>

          <label htmlFor="phone">Phone</label>
          <input type="tel" className="phone" id="phone"/>

          <label htmlFor="comment">Comment</label>
          <textarea className="comment" id="comment" cols="30" rows="10" maxLength="50"></textarea>
          <div className="textarea-limit">{`${50}/${50} characters`}</div>

          <label htmlFor="age">Age</label>
          <input type="number" className="age" id="age" min="1" max="130"/>

          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate"
            min="2018-01-01" 
            max="2018-12-31">
          </input>

          <div>drop down</div>
          <div> input with type ahead and drop down</div>
          <input type="button" value="Submit"/>
          */}
          <div>drop down</div>
          <div> input with type ahead and drop down</div>

        </div>
      </div>
    )
}

const mapDispatchToProps = {
  updateForm
}

function mapStateToProps(state) {
  return {
    form: state.pageTest,
    redux: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTest);