import React, { useEffect } from "react";
import './SendMessage.scss';
import Input from "../input/Input";
import {useDispatch, useSelector} from 'react-redux';
import {updateMessagesHistory, updateMessagesHistoryWithApiResult} from '../../actions'
import {getContacts} from "../../selectors";
import SendIcon from '@material-ui/icons/Send';

const SendMessage = ({contactToUpdate = '', className, contacts }) => {
    debugger;

    const dispatch = useDispatch();
    const date = new Date();
    const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const currentTime = date.getHours() + ':' + date.getMinutes();

    const ifEnter = (msg, willRender) => {
        debugger;
        const contactToRender = contacts.find(contact => contact.id === contactToUpdate.id);
        const message = {
            messageToMe: false,
            id: contactToRender.messages.length + 1,
            date: currentDate,
            time: currentTime,
            value: msg,
            fromApi: true
        }
        const objectToUpdate = {
            id: contactToRender.id,
            fullName: contactToRender.fullName,
            messages: [...contactToRender.messages, message]
        }

        dispatch(updateMessagesHistory(objectToUpdate));
    }

    const clickHandler = (e) => {
        e.keyCode === 13 && ifEnter(e.target.value, true);


    }

    return <div className={'send-message'}
                onKeyUp={clickHandler}>
        <div className={'sendMessage-input' + className}>
            <Input
                className={'sendMessage-input' + className}
                placeHolder={'Type your message'}
            />
            <SendIcon className={'sendIcon'}
            />
        </div>
    </div>

}
export default SendMessage;


