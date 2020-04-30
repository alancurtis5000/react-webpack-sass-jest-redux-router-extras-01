import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fetchPosts } from '../actions/post'

import Header from './Header';
import SharedButton from './SharedButton';
import ListItem from './ListItem';

class PageTestTut extends Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPosts();
  }


 render(){
  const { posts } = this.props;
  const configButton = {
    buttonText:'Get Posts',
    emitEvent: this.fetch
  }

  

  return (
    <div className="PageTestTut" >
       <Header />
       <SharedButton {...configButton} />
       { posts.length > 0 && 
       <div>
        {posts.map((post,i)=>{
          const {title, body } = post;
          const configListItem = {
            title,
            desc: body
          };
          return(
            <ListItem key={i} {...configListItem} />
          );

        })}
       </div>
       }
       <ListItem />

    </div>
  );
 }
}

const mapStateToProps = state => {
  return{
    posts:state.posts
  }
}


export default connect(mapStateToProps, {fetchPosts})(PageTestTut);