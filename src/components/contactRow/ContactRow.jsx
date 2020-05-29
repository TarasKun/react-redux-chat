import React, {Component} from "react";
import './ContactRow.scss';

class ContactRow extends Component {

    render() {
        return (
            <div className={'contact-row'}
                 onClick={() => {
                     this.props.setContactToHeaderRender(this.props.contact.id)
                 }}>
                {
                    this.props.contact.fullName
                }
            </div>
        )
    }
}

export default ContactRow;

// [
//     {
//         id:1,
//         time: '12:31:21',
//         date: '12/31/24',
//         value:'hello'
//     }
// ]