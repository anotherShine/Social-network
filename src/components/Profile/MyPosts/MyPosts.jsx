import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 'likes 15' },
    { id: 2, message: 'It\'s my first post', likesCount: 'likes 23' },
  ]
  let postsElements = postsData
    .map(element => <Post message={element.message} likesCount={element.likesCount} />)

  return (

    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <input></input>
        <button>Add a new post</button>

      </div>
      <div className={classes.posts}></div>
      {postsElements}
    </div>
  )
}

export default MyPosts;