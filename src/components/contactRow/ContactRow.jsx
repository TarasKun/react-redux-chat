import React, {Component} from "react";
import './ContactRow.scss';
import { Avatar } from '@material-ui/core';

class ContactRow extends Component {
    getDate = () => {
        const messageArray = this.props.contact.messages
        const lastIndex = messageArray.length - 1;
        return messageArray[lastIndex].date
    }

    render() {
        return (
            <div className={'contact-row'}
                 onClick={() => {
                     this.props.setContactToHeaderRender(this.props.contact.id);
                 }}>
                <Avatar src={require(`../../image/${this.props.contact.id}.jpg`)} />
                <div className='contact-row__info'>
                    <div className='name'>{this.props.contact.fullName}</div>
                    <div className='last-message'>
                        <span className='last-message__content'>{this.props.contact.messages[this.props.contact.messages.length - 1].value}</span>
                        <span className='last-message__date'>{this.getDate()}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactRow;