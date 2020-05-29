import React, {Component} from "react";
import './AboutMe.scss';
import Input from "../input/Input";


const contacts = [
    {
        id: 1,
        fullName: 'Velazques',
        messagesFrom: [{
            date: '19/05/2020',
            time: '12:21:51',
            value: 'Hi, Taras!'
        }],
        messagesTo: [{
            date: '19/05/2020',
            time: '09:54:51',
            value: 'Hi, Teo!'
        }]
    },
    {
        id:2,
        fullName: 'Barrera',
        messagesFrom: [{
            date: '25/04/2020',
            time: '22:27:51',
            value: 'Hi, Taras!'
        }],
        messagesTo: [{
            date: '26/04/2020',
            time: '19:31:51',
            value: 'Hi, Teo!'
        }]
    },
    {
        id:3,
        fullName: 'Alice Freeman',
        messagesFrom: [{
            date: '21/05/2020',
            time: '14:25:51',
            value: 'Hi, Taras!'
        }],
        messagesTo: [{
            date: '26/04/2020',
            time: '19:46:51',
            value: 'Hi, Teo!'
        }]
    }
];


class AboutMe extends Component {

    componentDidMount() {
        contacts.map(contact => this.props.setContactName(contact))
    };

    render() {
        return (
            <div className={'about-me'}>
                <p className={'about-me--my-name'}>{this.props.fullName}</p>

                <Input
                    className={'aboutMe-input'}
                    placeHolder={'Search or start new chat'}/>
            </div>)
    }
}

export default AboutMe;
