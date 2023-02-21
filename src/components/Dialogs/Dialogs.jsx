import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogData
        .map(element => <DialogItem photo={element.photo} name={element.name} id={element.id} />);

    let messagesElements = state.dialogMessage
        .map(element => <Message text={element.message} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <h3>New message</h3>
                <div>
                    <textarea
                        placeholder='Enter your message'
                        value={newMessageBody}
                        onChange={onNewMessageChange} />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;