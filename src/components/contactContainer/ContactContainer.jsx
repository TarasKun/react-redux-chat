import React from "react";
import './ContactContainer.scss';
import Contact from "../contact/ContactContainer";

const ContactContainer = () =>{
    return <div className={'contact-container'}>
        <p>Chats</p>
        <Contact/>
    </div>
}

export default ContactContainer;