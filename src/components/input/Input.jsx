import React from "react";
import './Input.scss';

const Input = ({className, placeHolder, onChangeHandler}) => {


    return <div>
        <input type="input"
               className={className}
               placeholder={placeHolder}
               onChange={e => onChangeHandler(e.target.value)}
        />
    </div>
}

export default Input;