import React from "react";
import './ContactContainer.scss';
import SetContactToHeader from "../contactRow/setContactToHeader";


const ContactContainer = ({contacts}) => {


    return (<div className={'contact-container'}>
        <p>Chats</p>
        <div className={'contact-container--div'}>

            {
                contacts.map(contact => <SetContactToHeader
                    contact={contact}
                    key = {contact.id}
                />)
            }

        </div>
    </div>)
}

export default ContactContainer;