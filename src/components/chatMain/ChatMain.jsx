import React, { Component } from "react";
import './ChatMain.scss';
import ChatRow from "../chatRow/ChatRow";
import {useDispatch} from "react-redux";

async function joke(contacts,updateMessagesHistoryWithApiResult, contactToUpdate ) {
    debugger;
    await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(res => setApiResult(res.value, contacts, updateMessagesHistoryWithApiResult, contactToUpdate))
        .catch(e => console.log(e))
}

const setApiResult = (msg, contacts, updateMessagesHistoryWithApiResult, contactToUpdate) => {
    console.log(contacts);
    debugger;
    const date = new Date();
    const contactToRender = contacts.find(contact => contact.id === contactToUpdate.id);
    const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const currentTime = date.getHours() + ':' + date.getMinutes();
    const message = {
        messageToMe: true,
        id: contactToRender.messages.length + 1,
        date: currentDate,
        time: currentTime,
        value: msg,
    }
    const objectToUpdate = {
        id: contactToRender.id,
        fullName: contactToRender.fullName,
        messages: [...contactToRender.messages, message]
    }

    updateMessagesHistoryWithApiResult(objectToUpdate);

}

class ChatMain extends Component {

    componentDidUpdate(prevProps) {
        debugger;
        if(prevProps.messages !== this.props.messages) {
            if(prevProps.messages !== undefined && prevProps.messages[prevProps.messages.length - 1].fromApi !== true) {
                joke(this.props.contacts, this.props.updateMessagesHistoryWithApiResult, this.props.contactToUpdate);
            }
        }
    }

    render() {
        const {messages = []} = this.props;
        return (
            <div className={'chat-main'}>
                {
                    messages.map(message => <ChatRow
                        message={message.value}
                        messageToMe={message.messageToMe}
                        date={message.date}
                        time={message.time}
                        key={message.id}
                    />)
                }
            </div>
        )
    }
}

export default ChatMain;