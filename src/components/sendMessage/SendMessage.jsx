import React, {useState} from 'react';
import './SendMessage.scss';
import Input from '../input/Input';
import {useDispatch} from 'react-redux';
import {updateMessagesHistory} from '../../actions'
import SendIcon from '@material-ui/icons/Send';


const SendMessage = ({contactToUpdate = '', className, contacts}) => {
    const dispatch = useDispatch();
    const date = new Date();
    const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const currentTime = date.getHours() + ':' + date.getMinutes();
    const [msg, setMsg,] = useState();
    const messageIsEmpty = msg => msg.split('').some(item => item !== ' ');
    const sendMsgIconHandler = () => sendMessage(msg);

    const sendMessage = (msg) => {
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
    };

    const clickHandler = e => {
        setMsg(e.target.value)
        if (e.keyCode === 13) {
            messageIsEmpty(e.target.value) && sendMessage(e.target.value);
            e.target.value = '';
        }
    }

    return <div className={'send-message'}
                onKeyUp={e => clickHandler(e)}>
        <div className={'send-message__input' + className}>
            <Input
                className={'send-message__input' + className}
                placeHolder={'Type your message'}
                show={true}
                clickHandler={clickHandler}
            />
            <SendIcon
                className={'send-icon'}
                onClick={sendMsgIconHandler}/>
        </div>
    </div>
}

export default SendMessage;


