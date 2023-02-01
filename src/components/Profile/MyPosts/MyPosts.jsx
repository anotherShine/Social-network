import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert (text)
  }

  let postsElements = props.postsData
    .map(element => <Post message={element.message} likesCount={element.likesCount} />)

  return (

    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <input ref={newPostElement}></input>
        <button onClick={ addPost }>Add a new post</button>
      </div>
      <div className={classes.posts}></div>
      {postsElements}
    </div>
  )
}

export default MyPosts;