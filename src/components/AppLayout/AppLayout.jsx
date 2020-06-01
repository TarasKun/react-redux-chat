import React from 'react';
import ChatContainer from "../chatContainer/ChatContainer";
import LeftBarContainer from "../leftBar/LeftBarContainer";


const AppLayout = () => {
    return <div className={'chat'}>
        <LeftBarContainer/>
        <ChatContainer/>
    </div>
};

export default AppLayout;