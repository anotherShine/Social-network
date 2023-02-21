import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let MapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()) },
    updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) }
  }
}

const MyPostsContainer = connect(MapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;