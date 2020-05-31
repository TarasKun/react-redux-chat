import React from "react";
import './ChatMain.scss';
import ChatRow from "../chatRow/ChatRow";

const ChatMain = ({messages = []}) => {

    return <div className={'chat-main'}>
        {
            messages.map(message => <ChatRow
                message={message.value}
                messageToMe={message.messageToMe}
                date={message.date}
                time={message.time}
                key={message.id}
            />)
        }
    </div>
}

export default ChatMain;