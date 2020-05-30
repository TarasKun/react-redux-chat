import React from "react";
import './ChatMain.scss';
import ChatRow from "../chatRow/ChatRow";
import {connect} from "react-redux";
// proptipes
// defaultprops
const ChatMain = ({contacts, currentContact, messages = []}) =>

    <div className={'chat-main'}>
        {
            messages.map(message => <ChatRow
            message={message.value}
            messageToMe={message.messageToMe}
            date = {message.date}
            time={message.time}
            key = {message.id}
            />)
        }
    </div>

const mapStateToProps = ({contacts, currentContact}) => {
    return {
        contacts: contacts,
        currentContact: currentContact
    }
};

export default connect(mapStateToProps)(ChatMain)