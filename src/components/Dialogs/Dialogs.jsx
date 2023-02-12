import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let newPostElement = React.createRef();
    let alertMessage = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    let dialogsElements = props.state.dialogData
        .map(element => <DialogItem photo={element.photo} name={element.name} id={element.id} />);

    let messagesElements = props.state.dialogMessage
        .map(element => <Message text={element.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <h3>New message</h3>
                <div>
                    <input type="text" ref={newPostElement} />
                    <button onClick={alertMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;