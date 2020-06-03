import React from "react";
import './Input.scss';
import SearchIcon from '@material-ui/icons/Search';


const Input = ({className, placeHolder, onChangeHandler = () => {}, searchIconClass}) => {

    return <div
        className={className}>
        <SearchIcon className={className + '--searchIcon'}/>
        <input type="input"
               className={className + '--input'}
               placeholder={placeHolder}
               onChange={e => onChangeHandler(e.target.value)}
        />
    </div>
}

export default Input;
