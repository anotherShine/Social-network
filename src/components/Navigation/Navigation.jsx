import React from 'react';
import { NavLink } from 'react-router-dom';
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
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item} >Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/message' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
      </div>
    </nav>)
}

export default Navigation;