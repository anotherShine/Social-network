import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';



const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item} >Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
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
      <div className={classes.friendsSection}>
        <NavLink to='/friends' className={navData => navData.isActive ? classes.active : classes.item}>FRIENDS</NavLink>
        <div className={classes.friends}>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="man" /> <div className='names'>Steve</div> 
        <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" alt="girl" /> <div className='names'>Katy</div>
        <img src="https://lh4.googleusercontent.com/cRKexF-pl7ZNuV8_YVxd99jTiEV7PJNF0ti2MDPR3bxOngDWSoYppE-uXt95FDnQcNjmXFzbICFfzsDnitZ4AeaZmwkpyTksWT0Sazd3aUBiZjTZqqw6oGTUYYo7NOXxpyAL9Yin" alt="man" /> <div className='names'>Lui</div>
        </div>
      </div>
    </nav>)
}

export default Navigation;