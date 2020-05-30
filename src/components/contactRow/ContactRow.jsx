import React, {Component} from "react";
import './ContactRow.scss';

class ContactRow extends Component {
    getDate = () => {
        const messageArray = this.props.contact.messages
        const lastIndex = messageArray.length -1;
         return messageArray[lastIndex].date
    }
    getLastMessage = () => {
        const messageArray = this.props.contact.messages
        const lastIndex = messageArray.length -1;
        return messageArray[lastIndex].value;
}

    render() {
        return (
            <div className={'contact-row'}
                 onClick={() => {
                     this.props.setContactToHeaderRender(this.props.contact.id);
                 }}>
                <div>{this.props.contact.fullName}</div>
                <div>{this.getDate()}</div>
                <div>{this.getLastMessage()}</div>
            </div>
        )
    }
}

export default ContactRow;

