import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogMessage = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Where are you from?'},
    ];

    let dialogData = [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Elon'},
        {id: 3, name: 'Tim'},
        {id: 4, name: 'Steve'},
        {id: 5, name: 'Meri'},
        {id: 6, name: 'Katy'},
        {id: 7, name: 'Lui'},
    ];

    let dialogsElements = dialogData
    .map(element => <DialogItem name={element.name} id={element.id} />);

    let messagesElements = dialogMessage
    .map(element => <Message text={element.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;