import React, {Component} from 'react';
import './Input.scss';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from "@material-ui/icons/Send";

class Input extends Component {
    render() {
        const { className, placeHolder, onChangeHandler = () => {}, show, sendMessage } = this.props;
        const button2Click = () => {
            sendMessage(this.input.value);
            this.input.value = '';
        }

        return (<div
            className={className}>
            {!show && <SearchIcon className={className + '__search-icon'}/>}
            <input
                type="input"
                className={className + '__input input'}
                placeholder={placeHolder}
                onChange={e => onChangeHandler(e.target.value.toLowerCase())}
                ref={ref => this.input = ref}
            />
            <div>
                <SendIcon
                    type={'submit'}
                    className={'send-icon'}
                    onClick={button2Click}
                />
            </div>
        </div>)
    }
}

export default Input;

