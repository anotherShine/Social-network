import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addPost } from './../../../redux/state';


const MyPosts = (props) => {
  let newPostElement = React.createRef();
  
  let postsElements = props.postsData
  .map(element => <Post message={element.message} likesCount={element.likesCount} />)
  
  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
    
  }
  return (

    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <input type="text"
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        <button onClick={addPost}>Add a new post</button>
      </div>
      <div className={classes.posts}></div>
      {postsElements}
    </div>
  )
}

export default MyPosts;