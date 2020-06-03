import React, {Component} from "react";
import './ContactRow.scss';
import { Avatar } from '@material-ui/core';

class ContactRow extends Component {
    getDate = () => {
        const messageArray = this.props.contact.messages
        const lastIndex = messageArray.length - 1;
        return messageArray[lastIndex].date
    }
    getLastMessage = () => {
        const messageArray = this.props.contact.messages
        const lastIndex = messageArray.length - 1;
        return messageArray[lastIndex].value;
    }


    render() {
        return (
            <div className={'contact-row'}
                 onClick={() => {
                     this.props.setContactToHeaderRender(this.props.contact.id);
                 }}>
                <Avatar src={require("../../image/1.jpg")} />
                <div>{this.props.contact.fullName}</div>
                <div>{this.getDate()}</div>
                <div>{this.getLastMessage()}</div>
            </div>
        )
    }
}

export default ContactRow;

