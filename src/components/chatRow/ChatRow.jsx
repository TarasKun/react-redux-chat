import React from "react";
import './ChatRow.scss';

const ChatRow = ({message, messageToMe, date, time}) => {

    return <div className={'chat-row'}>
        {
            messageToMe  ?
                <div className={'chat-row--to-me'}> {message}{date}{time}</div> :
                <div className={'chat-row--from-me'}>{message}{date}{time}</div>
        }
    </div>
}

export default ChatRow;