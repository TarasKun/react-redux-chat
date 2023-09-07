import React, { Component } from 'react';
import './ContactRow.scss';
import { Avatar } from '@material-ui/core';

class ContactRow extends Component {
    state = {
        lastMessageValue: this.props.contact.messages[this.props.contact.messages?.length - 1].value
    }

    componentDidUpdate(prevProps) {
        const { contacts, contact, currentContact } = this.props;
        const updatedContact = contacts.filter(item => item.fullName === contact.fullName)[0];
        const currentMessage = updatedContact.messages[updatedContact.messages.length - 1].value;
        if(currentContact === contact.id && this.state.lastMessageValue !== currentMessage) {
            if(contact.messages[contact.messages.length - 1].value !==  currentMessage) {this.setState({lastMessageValue: currentMessage})}
        }
    }
    lastMessageInContact = (msgToSlice) => {
        if(msgToSlice.length > 45){
            return msgToSlice.slice(0,46) + '...'
        }else {
            return msgToSlice
        }
    }

    getDate = () => {
        const messageArray = this.props.contact.messages
        const lastIndex = messageArray.length - 1;
        return messageArray[lastIndex].date
    }

    render() {
        return (
            <div data-testid={'contact-row'} className={'contact-row'}
                 onClick={() => {
                     this.props.setContactToHeaderRender(this.props.contact.id);
                 }}>
                <Avatar src={require(`../../image/${this.props.contact.id}.jpg`)} />
                <div className='contact-row__info'>
                    <div className='name'>{this.props.contact.fullName}</div>
                    <div className='last-message'>
                        <span className='last-message__content'>{this.lastMessageInContact(this.state.lastMessageValue)}</span>
                        <span className='last-message__date'>{this.getDate()}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactRow;
