import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';



const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="dialog/1">Mark</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialog/2">Elon</NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="dialog/3">Tim</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialog/4">Steve</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialog/5">Meri</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>
    )
}

export default Dialogs;