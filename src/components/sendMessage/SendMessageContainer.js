import {connect} from 'react-redux';
import SendMessage from './SendMessage';
import { getContacts } from '../../selectors';

const mapStateToProps = state => {
    return {
        contacts: getContacts(state)
    }
};

export default connect(mapStateToProps)(SendMessage)