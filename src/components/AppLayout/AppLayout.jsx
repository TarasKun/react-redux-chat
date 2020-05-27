import React from 'react';
import AboutMeContainer from "../aboutMe/AboutMeContainer";
import ContactContainer from "../contactContainer/ContactContainer";
import ChatContainer from "../chatContainer/ChatContainer";


const AppLayout = () => {
  return <div className={'chat'}>
      <AboutMeContainer/>
      <ContactContainer/>
      <ChatContainer/>
  </div>
};

export default AppLayout;