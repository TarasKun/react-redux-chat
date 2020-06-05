import React from 'react';
import './ChatWrapper.scss';
import ChatHeader from '../chatHeader/ChatHeader';
import SendMessageContainer from '../sendMessage/SendMessageContainer';
import {connect} from 'react-redux';
import ChatMainContainer from '../chatMain/ChatMainContainer';


const ChatWrapper = ({contacts, currentContact=''}) => {
    const contactToRender = contacts.find(contact => contact.id === currentContact);

    return <div className={'chat__chatting-container'}>
        <ChatHeader
            fullName={contactToRender && contactToRender.fullName}
            photoNumber={contactToRender && contactToRender.id}
        />
        <ChatMainContainer
            contactToUpdate={contactToRender}
            messages={contactToRender && contactToRender.messages}
        />
        {currentContact ?
            <SendMessageContainer
                contactToUpdate={contactToRender}
                className ={'_active'}/> :
            <SendMessageContainer
                contactToUpdate={contactToRender}
                className={'_stand-by'}
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