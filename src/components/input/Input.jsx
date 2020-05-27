import React from "react";
import './Input.scss';

const Input = ({className, placeHolder}) => {
    return <div>
        <input type="input"
               className={className}
               placeholder={placeHolder}
        />
    </div>
}

export default Input;