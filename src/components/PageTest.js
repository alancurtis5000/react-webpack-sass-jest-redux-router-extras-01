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
      <div>
        <h1>React PageTest!</h1>
        <button onClick={this.handleOnClick}>test click</button>
        <button onClick={this.logProps}>log props</button>
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