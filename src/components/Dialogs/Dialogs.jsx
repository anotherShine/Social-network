import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData
        .map(element => <DialogItem photo={element.photo} name={element.name} id={element.id} />);

    let messagesElements = props.state.dialogMessage
        .map(element => <Message text={element.message} />);

    // let photosElements = props.state.photo
    //     .map(element => <DialogItem photo={element.photo} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <h3>New messages</h3>
                <div>
                    <input type="text" />
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;