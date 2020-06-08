import React, {Component} from 'react';
import './SendMessage.scss';
import Input from '../input/Input';


class SendMessage extends Component {
    render() {
        const {contactToUpdate = '', className, contacts} = this.props;
        const date = new Date();
        const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        const currentTime = date.getHours() + ':' + date.getMinutes();
        const messageIsEmpty = msg => msg.split('').some(item => item !== ' ');


        const sendMessage = (msg) => {
            console.log('go');
            const contactToRender = contacts.find(contact => contact.id === contactToUpdate.id);
            const message = {
                messageToMe: false,
                id: contactToRender.messages.length + 1,
                date: currentDate,
                time: currentTime,
                value: msg,
                fromApi: true
            }
            const objectToUpdate = {
                id: contactToRender.id,
                fullName: contactToRender.fullName,
                messages: [...contactToRender.messages, message]
            }
            this.props.updateMessagesHistory(objectToUpdate);
        };

        const clickHandler = e => {

            if (e.keyCode === 13) {
                messageIsEmpty(e.target.value) && sendMessage(e.target.value);
                e.target.value = '';
            }
        }
        return (
            <div className={'send-message'}
                 onKeyUp={e => clickHandler(e)}>
                <div className={'send-message__input' + className}>
                    <Input
                        className={'send-message__input' + className}
                        placeHolder={'Type your message'}
                        show={true}
                        sendMessage={sendMessage}
                    />
                </div>
            </div>
        )
    }
}

export default SendMessage;


