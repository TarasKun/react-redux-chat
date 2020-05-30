import React from "react";
import './ChatContainer.scss';
import ChatHeader from "../chatHeader/ChatHeader";
import SendMessage from "../sendMessage/SendMessage";
import ChatMain from "../chatMain/ChatMain";
import {connect} from "react-redux";

const ChatContainer = ({contacts, currentContact}) => {

    const contactToRender = contacts.find(contact => contact.id === currentContact);


    return <div className={'chat-container'}>
        <ChatHeader
            fullName={contactToRender && contactToRender.fullName}
        />
        <ChatMain
            messages={contactToRender && contactToRender.messages}
        />
        <SendMessage/>
    </div>
}

const mapStateToProps = ({contacts, currentContact}) => {
    return {
        contacts: contacts,
        currentContact: currentContact
    }
};

export default connect(mapStateToProps)(ChatContainer)