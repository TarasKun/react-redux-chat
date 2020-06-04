import React, {Component} from "react";
import './ChatMain.scss';
import ChatRow from "../chatRow/ChatRow";
import {joke} from '../../ChuckNorrisClient'

class ChatMain extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.messages !== this.props.messages &&
            prevProps.messages !== undefined && prevProps.messages[prevProps.messages.length - 1].fromApi !== true) {
            joke(this.props.contacts, this.props.updateMessagesHistoryWithApiResult, this.props.contactToUpdate);
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