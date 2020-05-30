import React from "react";
import './ChatHeader.scss';


const ChatHeader = ({fullName}) => {
    return <div className={'chat-header'}>
        {fullName}
    </div>
}


export default ChatHeader;