import React from "react";
import './AboutMe.scss';
import Input from "../input/Input";


const AboutMe = () => {


    return <div className={'about-me'}>
        <Input
        className = {'aboutMe-input'}
        placeHolder = {'Search or start new chat'} />
    </div>
}
export default AboutMe;
