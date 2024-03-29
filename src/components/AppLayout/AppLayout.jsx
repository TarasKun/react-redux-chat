import React from 'react';
import ChatWrapper from '../../components/chatWrapper/ChatWrapper';
import LeftBarContainer from '../leftBar/LeftBarContainer';

import './AppLayout.scss'

const AppLayout = () => {
    return <div data-testid='chat' className={'chat'}>
        <LeftBarContainer/>
        <ChatWrapper/>
    </div>
};

export default AppLayout;
