import React, {useEffect} from "react";
import './SendMessage.scss';
import Input from "../input/Input";
import {useDispatch, useSelector} from 'react-redux';
import {updateMessagesHistory} from '../../actions'
import {getContacts} from "../../selectors";

const SendMessage = ({messages = [], contactToUpdate}) => {
    const dispatch = useDispatch();
    const answer = true;
    const date = new Date();
    const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const currentTime = date.getHours() + ':' + date.getMinutes();
    const {contacts} = useSelector(state => ({
        contacts: getContacts(state)
    }));

    async function joke() {
        await fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(res => getAnswer(res.value))
            .catch(e => console.log(e))
    }

    const ifEnter = (e) => {
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
        dispatch(updateMessagesHistory(objectToUpdate));
        e.target.value = '';
        joke()
    }

    const getAnswer = (joke) => {
        const message = {
            messageToMe: true,
            id: contactToUpdate.messages.length + 1,
            date: currentDate,
            time: currentTime,
            value: joke
        }
        const objectToUpdate = {
            id: contactToUpdate.id,
            fullName: contactToUpdate.fullName,
            messages: [...contactToUpdate.messages, message]
        }
        dispatch(updateMessagesHistory(objectToUpdate));
    }

    const clickHandler = (e) => {
        e.keyCode === 13 && ifEnter(e);
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


