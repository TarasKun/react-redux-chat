import React from "react";
import './SendMessage.scss';
import Input from "../input/Input";
import {useDispatch, useSelector} from 'react-redux';
import {updateMessagesHistory} from '../../actions'
import {getContacts} from "../../selectors";

const SendMessage = ({messages = [], contactToUpdate}) => {
    const dispatch = useDispatch();
    const date = new Date();
    const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const currentTime = date.getHours() + ':' + date.getMinutes();
    const {contacts} = useSelector(state => ({
        contacts: getContacts(state)}))

    const clickHandler = (e) => {
        if (e.keyCode === 13) {
            const message = {
                messageToMe: false,
                id: contactToUpdate.messages.length + 1,
                date: currentDate,
                time: currentTime,
                value: e.target.value
            }
            const objectToUpdate = {
                    id: contactToUpdate.id,
                    fullName: contactToUpdate.fullName,
                    messages: [...contactToUpdate.messages, message]
                }
            console.log(objectToUpdate);
            dispatch(updateMessagesHistory(objectToUpdate))
        }

    }

    return <div className={'send-message'}
                onKeyUp={clickHandler}>
        <Input
            className={'sendMessage-input'}
            placeHolder={'Type your message'}
        />

    </div>
}
export default SendMessage


