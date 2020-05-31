import React from "react";
import './Input.scss';

const Input = ({className, placeHolder}) => {

    const clickHandler = (e) =>{
        // e.keyCode === 13 && console.log(e.target.value);
    }
    return <div>
        <input type="input"
               className={className}
               placeholder={placeHolder}
               onKeyUp={clickHandler}
        />
    </div>
}

export default Input;