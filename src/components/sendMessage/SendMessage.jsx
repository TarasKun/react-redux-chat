import React from "react";
import './SendMessage.scss';
import Input from "../input/Input";
import {useDispatch, useSelector} from 'react-redux';
import {updateMessagesHistory} from '../../actions'
import {getContacts} from "../../selectors";
import SendIcon from '@material-ui/icons/Send';

const SendMessage = ({contactToUpdate = '', className}) => {
    const dispatch = useDispatch();
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
        const contactToRender = contacts.find(contact => contact.id === contactToUpdate.id);
        const message = {
            messageToMe: false,
            id: contactToRender.messages.length + 1,
            date: currentDate,
            time: currentTime,
            value: e.target.value
        }
        const objectToUpdate = {
            id: contactToRender.id,
            fullName: contactToRender.fullName,
            messages: [...contactToRender.messages]
        }
        objectToUpdate.messages.push(message);
        dispatch(updateMessagesHistory(objectToUpdate));

        console.log('contactToRender in ifEnter' + contactToRender.messages);
        e.target.value = '';
        joke();
    }


    const getAnswer = (joke) => {
        const contactToRender = contacts.find(contact => contact.id === contactToUpdate.id);
        console.log('contactToRender in getAnswer' + contactToRender.messages);
        const message = {
            messageToMe: true,
            id: contactToRender.messages.length + 1,
            date: currentDate,
            time: currentTime,
            value: joke
        }
        const objectToUpdate = {
            id: contactToRender.id,
            fullName: contactToRender.fullName,
            messages: [...contactToRender.messages]
        }
        objectToUpdate.messages.push(message)
        dispatch(updateMessagesHistory(objectToUpdate));
    }

    const clickHandler = (e) => {
        // e.keyCode ? e.keyCode === 13ifEnter(e);
        if (e.keyCode){
            if(e.keyCode===13){
                ifEnter(e);
            }
        } else if ()
    }


    return <div className={'send-message'}
                onKeyUp={clickHandler}>
        <div className={'sendMessage-input' + className}>
            <Input
                className={'sendMessage-input' + className}
                placeHolder={'Type your message'}
            />
            <SendIcon className={'sendIcon'}
            onKeyUp={}/>
        </div>
    </div>
}

export default SendMessage


