import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  debugger;
  let postsElements = props.postsData
  .map(element => <Post message={element.message} likesCount={element.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (

    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <input
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        <button onClick={onAddPost}>Add a new post</button>
      </div>
      <div className={classes.posts}></div>
      {postsElements}
    </div>
  )
}

export default MyPosts;