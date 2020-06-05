import React, { Component } from 'react';
import './ChatMain.scss';
import ChatRow from '../chatRow/ChatRow';
import { joke } from '../../ChuckNorrisClient'
import scrollToElement from './chatUtils';

class ChatMain extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidUpdate({ contactToUpdate: prevContactToUpdate, messages: prevMessages }) {
        const { messages, contacts, updateMessagesHistoryWithApiResult, contactToUpdate } = this.props;

        this.myRef.current !== null && scrollToElement(this.myRef);

        if(prevContactToUpdate !== undefined && prevContactToUpdate.fullName !== contactToUpdate.fullName) return;

        if (prevMessages !== messages &&
            prevMessages !== undefined && prevMessages[prevMessages.length - 1].fromApi !== true) {
            joke(contacts, updateMessagesHistoryWithApiResult, contactToUpdate);
        }
    }

    render() {
        const {messages = []} = this.props;
        return (
            <div className={'chat-main'} ref={this.chat}>
                {
                    messages.map(message =>
                            <ChatRow
                                message={message.value}
                                messageToMe={message.messageToMe}
                                date={message.date}
                                time={message.time}
                                key={message.id}
                                reference={this.myRef}
                            />
                    )
                }
            </div>
        )
    }
}

export default ChatMain;