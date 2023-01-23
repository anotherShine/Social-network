import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

  return (
    <div>
      My posts
      <div>
        <input></input>
        <button>Add a new post</button>
      </div>
      <div className={classes.posts}></div>
      <Post message='Hi, how are you?' likeCount="likes 15" />
      <Post message="It's my first post" likeCount="likes 23" />

    </div>
  )
}

export default MyPosts;