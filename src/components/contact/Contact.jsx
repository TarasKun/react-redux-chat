import React from "react";
import './Contact.scss';

const Contact = ({contact}) => {

    return (
        <li>
            {contact.fullName}
        </li>
    )
}

export default Contact;
