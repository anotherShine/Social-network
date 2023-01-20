import React from 'react';
import classes from './Navigation.module.css';


// let classes = {
//   nav: '.Navigation_nav__D7wqm',
//   item: 'Navigation_item__zmAH9',
//   active: 'Navigation_item__zm23424'
// }

// let classes1 = "item"
// let classes2 = "active"
// item active
// let classes = classes1 + " " + classes2

const Navigation = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <a href='/message'>Messages</a>
    </div>
    <div className={classes.item}>
      <a>News</a>
    </div>
    <div className={classes.item}>
      <a>Music</a>
    </div>
    <div className={classes.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navigation;