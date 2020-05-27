import React from "react";
import './ChatContainer.scss';
import ChatHeader from "../chatHeader/ChatHeader";
import SendMessage from "../sendMessage/SendMessage";
import ChatMain from "../chatMain/ChatMain";

const ChatContainer = () => {
    return <div className={'chat-container'}>
        <ChatHeader/>
        <ChatMain/>
        <SendMessage/>
    </div>
}
export default ChatContainer;