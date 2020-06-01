import React, {Component} from "react";
import './AboutMe.scss';
import Input from "../input/Input";


class AboutMe extends Component {

    render() {
        return (
            <div className={'about-me'}>
                <p className={'about-me--my-name'}>{this.props.fullName}</p>

                <Input
                    className={'aboutMe-input'}
                    placeHolder={'Search or start new chat'}
                    onChangeHandler={this.props.filterContacts}/>
            </div>)
    }
}

export default AboutMe;
