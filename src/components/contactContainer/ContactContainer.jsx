import React from "react";
import './ContactContainer.scss';
import Contact from "../contact/Contact";

const ContactContainer = ({contacts}) =>{
    console.log(contacts);
    return <div className={'contact-container'}>
        <p>Chats</p>
       <ul>
           {
               contacts.map(contact=><Contact contact = {contact}/>)
           }
       </ul>
    </div>
}

export default ContactContainer;