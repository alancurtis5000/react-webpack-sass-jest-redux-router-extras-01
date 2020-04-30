import React , {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component{
  constructor(props){
    super(props);
  };

  render(){
    const { title, desc } = this.props;

    if(!title){
      return null;
    }
    return(
      <div data-test="ListItem" style={{display:'flex', flexDirection:'column'}} >
        <h3 data-test="title">{title}</h3>
        <div data-test="desc">{desc} </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};



export default ListItem;