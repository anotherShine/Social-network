import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="man" />
      {props.message}
      <div>
        {props.likeCount}
      </div>
    </div>
  )
}

export default Post;