import React from "react";
import './ChatWropper.scss';
import ChatHeader from "../chatHeader/ChatHeader";
import SendMessageContainer from "../sendMessage/SendMessageContainer";
import {connect} from "react-redux";
import ChatMainContainer from "../chatMain/ChatMainContainer";


const ChatWrapper = ({contacts, currentContact=''}) => {
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

export default connect(mapStateToProps)(ChatWrapper)