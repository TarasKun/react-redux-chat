import React from "react";
import './ChatRow.scss';


const ChatRow = ({message, messageToMe, date, time}) => {

    return <div className={'chat-row'}>
        {
            messageToMe ?
                <div className='chat-row__to-me'>
                    <p className={'message'}> {message}</p>
                    <span className={'date-time'}>{date}, {time}</span>
                </div>
                :
                <div className='chat-row__from-me'>
                    <p className={'message'}>{message}</p>
                    <span className={'date-time'}>{date}, {time}</span>
                </div>
        }
    </div>
}

export default ChatRow;