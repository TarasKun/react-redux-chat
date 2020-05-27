import React from 'react';
import './App.scss';
import AboutMe from "./components/aboutMe/AboutMe";
import ContactContainer from "./components/contactContainer/ContactContainer";
import ChatContainer from "./components/chatContainer/ChatContainer";
import {rootReducer} from "./redux/rootReducer";
import {createStore} from "./redux/createStore";

const store = createStore(rootReducer, {})

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
