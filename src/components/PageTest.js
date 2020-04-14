import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions/pageTest';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

class PageTest extends Component {
  constructor(props){
    super(props);
  }

  handleOnClick = () => {
    console.log("handleOnClick");
    this.props.changeText("cheese")
  };
  
  logProps = () => {
    console.log({props:this.props});
    console.log(isEmpty({}))
    console.log(moment())
  }

  render() {
    return (
      <div style={{display:"flex", justifyContent:"center", flexDirection:'column'}} >
        <h2>React PageTest!</h2>

        <div style={{display:"flex"}}>
          <button onClick={this.handleOnClick}>test click</button>
          <button onClick={this.logProps}>log props</button>
        </div>

        <div style={{display:"flex", justifyContent:"center", flexDirection:'column', width:'300px', margin:"auto"}}>
            
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="firstName" id="firstName"/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="lastName" id="lastName"/>

          <label htmlFor="email"> Email </label>
          <input type="email" className="email" id="email"/>

          <label htmlFor="phone">Phone</label>
          <input type="tel" className="phone" id="phone"/>

          <label htmlFor="comment">Comment</label>
          <textarea className="comment" id="comment" cols="30" rows="10" maxlength="50"></textarea>
          <div className="textarea-limit">{`${50}/${50} characters`}</div>

          <label htmlFor="age">Age</label>
          <input type="number" className="age" id="age" min="1" max="130"/>

          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate"
            value="2018-07-22"
            min="2018-01-01" 
            max="2018-12-31">
          </input>

          <div>drop down</div>
          <div> input with type ahead and drop down</div>
          <input type="button" value="Submit"/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeText
}

function mapStateToProps(state) {
  return {
    redux: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTest);