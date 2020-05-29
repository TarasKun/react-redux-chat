import React from "react";
import './ContactContainer.scss';
import ContactRow from "../contactRow/ContactRow";

const ContactContainer = ({contacts}) => {
    return <div className={'contact-container'}>
        <p>Chats</p>
        <div className={'contact-container--div'}>
            {
                contacts.map(contact => <ContactRow
                    contact={contact}
                />)
            }
        </div>
    </div>
}

export default ContactContainer;