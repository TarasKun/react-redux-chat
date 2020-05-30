import React from "react";
import './Input.scss';

const Input = ({className, placeHolder}) => {
    const clickHandler = () =>{

    }
    return <div>
        <input type="input"
               className={className}
               placeholder={placeHolder}
               onClick={clickHandler}
        />
    </div>
}

export default Input;