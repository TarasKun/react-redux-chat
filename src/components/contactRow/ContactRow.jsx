import React from "react";
import './ContactRow.scss';


const ContactRow = ({contact}) => {

    return (
        <div className={'contact-row'}>
            {
                contact.fullName
            }
            <hr/>
        </div>
    )
}

export default ContactRow;
