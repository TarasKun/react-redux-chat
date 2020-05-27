import React from 'react';
import './App.scss';
import AboutMe from "./components/aboutMe/AboutMe";
import ContactContainer from "./components/contactContainer/ContactContainer";
import ChatContainer from "./components/chatContainer/ChatContainer";


function App() {
  return (
    <div className="App">
      <AboutMe/>
      <ContactContainer/>
      <ChatContainer/>
    </div>
  );
}

export default App;
