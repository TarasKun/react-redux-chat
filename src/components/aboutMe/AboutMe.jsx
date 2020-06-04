import React, {Component} from "react";
import { Avatar } from '@material-ui/core';
import './AboutMe.scss';
import Input from "../input/Input";


class AboutMe extends Component {

    render() {
        return (
            <div className={'about-me'}>
                <div className='about-me__my-name'>
                    <Avatar className='avatar'/>
                    <h2 className='name'>{this.props.fullName}</h2>
                </div>

                <Input
                    className={'about-me__search-field'}
                    placeHolder={'Search or start new chat'}
                    onChangeHandler={this.props.filterContacts}/>
            </div>)
    }
}

export default AboutMe;