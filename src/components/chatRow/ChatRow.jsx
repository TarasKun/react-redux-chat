import React from 'react';
import './ChatRow.scss';


const ChatRow = ({message, messageToMe, date, time, reference}) => {
    const messageClass = messageToMe ? 'chat-row__to-me' : 'chat-row__from-me';

    return <div className={'chat-row'} data-testid={'chat-row'}>
        <div className={messageClass} data-testid={'message-container'} ref={reference}>
            <p className={'message'}>{message}</p>
            <span className={'date-time'}>{date}, {time}</span>
        </div>
    </div>
}

export default ChatRow;
