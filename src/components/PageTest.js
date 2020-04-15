import React from 'react';
import { connect } from 'react-redux';
import { updateForm, validateForm } from '../actions/pageTest';
import map from 'lodash/map'
import InputBasic from './InputBasic';

export const PageTest = (props) => {
  const handleOnClick = () => {
    // console.log("handleOnClick");
  };
  
  const logProps = () => {
    console.log({props:props});
  }

  const handleSubmit = () =>{
    props.validateForm(props.form);
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
        <input type="text" className="tester-input"/>
        <label htmlFor="comment">Comment</label>
        <textarea className="comment" id="comment" cols="30" rows="10" maxLength="50"></textarea>
        <div className="textarea-limit">{`${50}/${50} characters`}</div>

        <div>drop down</div>
        <div> input with type ahead and drop down</div>
        <input className="submit-button" type="button" value="Submit" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  updateForm,
  validateForm
}

function mapStateToProps(state) {
  return {
    form: state.pageTest,
    redux: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTest);