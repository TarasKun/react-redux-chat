import React from 'react';
import './ChatHeader.scss';
import Avatar from '@material-ui/core/Avatar';


const ChatHeader = ({fullName,photoNumber}) => {
    return <div className={'chat-header-wrapper'} data-testid='ChatHeader'>
        {fullName &&  <div  className={'chat-header'}>
            <Avatar data-testid={'avatar'} src={require(`../../image/${photoNumber}.jpg`)}/>
            <span className={'chat-header__name'}>{fullName} </span>
        </div>}
    </div>
}


export default ChatHeader;
