import React from 'react';
import './Input.scss';
import SearchIcon from '@material-ui/icons/Search';


const Input = ({className, placeHolder, onChangeHandler = () => {},show}) => {

    return <div
        className={className}>
        {!show && <SearchIcon className={className + '__search-icon'}/>}
        <input type="input"
               className={className + '__input input'}
               placeholder={placeHolder}
               onChange={e => onChangeHandler(e.target.value.toLowerCase())}
        />
    </div>
}

export default Input;

