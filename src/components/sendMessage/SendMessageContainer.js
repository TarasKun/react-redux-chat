import {connect} from 'react-redux';
import SendMessage from './SendMessage';
import { getContacts } from '../../store/selectors';
import { updateMessagesHistory } from "../../store/actions";

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
