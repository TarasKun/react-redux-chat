import React from "react";
import './ChatHeader.scss';
import {connect} from "react-redux";


const ChatHeader = ({contacts, currentContact}) => {

    const contactToRender = contacts.find(contact => contact.id === currentContact);

    return <div className={'chat-header'}>
        {
            contactToRender && contactToRender.fullName
        }
    </div>
}


const mapStateToProps = ({contacts, currentContact }) => {
    return {
        contacts: contacts,
        currentContact: currentContact
    }
};

export default connect(mapStateToProps)(ChatHeader)