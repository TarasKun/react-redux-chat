import {connect} from 'react-redux';
import SendMessage from './SendMessage';
import { getContacts } from '../../selectors';
import { updateMessagesHistory } from "../../actions";

const mapStateToProps = state => {
    return {
        contacts: getContacts(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessagesHistory: obj => dispatch(updateMessagesHistory(obj))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)