import React, {useState} from "react";
import ContactContainer from "../contactContainer/ContactContainer";
import AboutMe from "../aboutMe/AboutMe";

const LeftBar = ({contacts, fullName}) => {
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const getFilterContacts = inputValue => {
        setFilteredContacts(contacts.filter(({fullName}) => fullName.toLowerCase().includes(inputValue)));
    }

    return <div className={'chat__left-bar'}>
        <AboutMe
            filterContacts={getFilterContacts}
            fullName={fullName}/>
        <ContactContainer
            contacts={filteredContacts}/>
    </div>
}

export default LeftBar;