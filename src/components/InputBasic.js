import React from 'react';
import Proptypes from 'prop-types'

const InputBasic = (props) => (
  <div className="InputBasic">
    <label htmlFor={props.id}>{props.label}</label>
    <input 
      className={props.id}
      type={props.type} 
      id={props.id} 
      onChange={props.handleOnChange} 
      placeholder={props.placeholder}
      value={props.value}
    />
    {props.errors.map((error, i)=>(<div key={i} className="error" >{error}</div>))}
  </div>
)

InputBasic.defaultProps = {
  value:"",
  label:"",
  type:"text",
  id:"unique",
  placeholder:"",
  handleOnChange:(e)=>{console.log("handleOnChange", e.target.value)},
  errors:["to many characters", "Missing @ symbol"]
}

InputBasic.propTypes = {
  value: Proptypes.any,
  label: Proptypes.string,
  type: Proptypes.string,
  id: Proptypes.string,
  placeholder: Proptypes.string,
  handleOnChange: Proptypes.func,
  errors: Proptypes.array
}

export default InputBasic;