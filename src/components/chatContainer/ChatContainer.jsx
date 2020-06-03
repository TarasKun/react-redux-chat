import React from "react";
import './ChatContainer.scss';
import ChatHeader from "../chatHeader/ChatHeader";
import SendMessageContainer from "../sendMessage/SendMessageContainer";
import SendMessage from "../sendMessage/SendMessage";
import ChatMain from "../chatMain/ChatMain";
import {connect} from "react-redux";
import ChatMainContainer from "../chatMain/ChatMainContainer";


const ChatContainer = ({contacts, currentContact=''}) => {
    const contactToRender = contacts.find(contact => contact.id === currentContact);

    return <div className={'chat-container'}>
        <ChatHeader
            fullName={contactToRender && contactToRender.fullName}
        />
        <ChatMainContainer
            contactToUpdate={contactToRender}
            messages={contactToRender && contactToRender.messages}
        />
        {currentContact ?
            <SendMessageContainer
                contactToUpdate={contactToRender}
            className ={'--active'}/> :
            <SendMessageContainer
                contactToUpdate={contactToRender}
                className={'--stand-by'}
        />}
    </div>
}

const mapStateToProps = ({contacts, currentContact}) => {
    return {
        contacts: contacts,
        currentContact: currentContact
    }
};

export default connect(mapStateToProps)(ChatContainer)