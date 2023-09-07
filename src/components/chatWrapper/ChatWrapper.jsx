import React from 'react';
import './ChatWrapper.scss';
import ChatHeader from '../chatHeader/ChatHeader';
import SendMessageContainer from '../sendMessage/SendMessageContainer';
import {connect} from 'react-redux';
import ChatMainContainer from '../chatMain/ChatMainContainer';

const ChatWrapper = ({contacts, currentContact = ''}) => {
    const contactToRender = contacts.find(contact => contact.id === currentContact);

    return <div className={'chat__chatting-container'}>
        <ChatHeader
            fullName={contactToRender?.fullName}
            photoNumber={contactToRender?.id}
        />
        <ChatMainContainer
            contactToUpdate={contactToRender}
            messages={contactToRender?.messages}
        />
        <SendMessageContainer
            contactToUpdate={contactToRender}
            className={currentContact ? '_active' : '_stand-by'}
        />
    </div>
}

const mapStateToProps = ({contacts, currentContact}) => {
    return {
        contacts: contacts,
        currentContact: currentContact
    }
};

export default connect(mapStateToProps)(ChatWrapper)
