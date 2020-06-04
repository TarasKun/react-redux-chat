import React from "react";
import './ContactContainer.scss';
import SetContactToHeader from "../contactRow/setContactToHeader";


const ContactContainer = ({contacts}) => {

    return (
        <div className={'contact-container'}>
            <h3 className={'contact-container__title'}>Chats</h3>
            <div className={'contact-container__contacts'}>
                {
                    contacts.map(contact => <SetContactToHeader
                        contact={contact}
                        key={contact.id}
                    />)
                }

            </div>
        </div>)
}

export default ContactContainer;