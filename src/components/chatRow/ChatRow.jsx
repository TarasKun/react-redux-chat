import React from "react";
import './ChatRow.scss';

const ChatRow = ({message, messageToMe, date, time}) => {

    return <div className={messageToMe ? 'chat-row-to-me' : 'chat-row'}>
        {
            messageToMe ?
                <div>
                    <div className={'chat-row--to-me'}> {message}</div>
                    <div className={'date-time'}>{date},      {time}</div>
                </div>
                :
                <div className={'chat-row--from-me'}>
                    <div>{message}</div>
                    <div className={'date-time'}>{date},      {time}</div>
                </div>

        }
    </div>
}

export default ChatRow;