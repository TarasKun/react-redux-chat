import React from "react";
import './SendMessage.scss';
import Input from "../input/Input";


const SendMessage = () => {
    return <div className={'send-message'}>
        <Input
            className = {'sendMessage-input'}
            placeHolder = {'Type your message'}/>

    </div>
}
export default SendMessage;