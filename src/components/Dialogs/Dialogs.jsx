import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewPostTextActionCreator, sendMessageCreator} from './../../redux/state';



const Dialogs = (props) => {

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewPostTextActionCreator(body));
    }

    let dialogsElements = props.state.dialogData
        .map(element => <DialogItem photo={element.photo} name={element.name} id={element.id} />);

    let messagesElements = props.state.dialogMessage
        .map(element => <Message text={element.message} />);

    let newMessageBody = props.state.newMessageBody;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <h3>New message</h3>
                <div>
                    <input
                        type="text"
                        value={newMessageBody}
                        onChange={onNewMessageChange} />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;