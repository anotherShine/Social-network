import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogs-reducer';




const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let dialogsElements = state.dialogData
        .map(element => <DialogItem photo={element.photo} name={element.name} id={element.id} />);

    let messagesElements = state.dialogMessage
        .map(element => <Message text={element.message} />);

    let newMessageBody = state.newMessageBody;
    console.log(newMessageBody)
    

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