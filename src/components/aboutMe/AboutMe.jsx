import React, {Component} from "react";
import './AboutMe.scss';
import Input from "../input/Input";


class AboutMe extends Component{
    componentDidMount(){
        this.props.setContactName({
            fullName: 'Teo Sem',
                messagesFrom: [{
                date: '27/05/2020',
                time: '22:27:51',
                value: 'Hi, Taras!'
            }],
                messagesTo: [{
                date: '27/05/2020',
                time: '22:28:51',
                value: 'Hi, Teo!'
            }]
        });
    };
    render () {
        return(
        <div className={'about-me'}>
            <Input
                className = {'aboutMe-input'}
                placeHolder = {'Search or start new chat'} />
        </div>)
    }
}
export default AboutMe;
