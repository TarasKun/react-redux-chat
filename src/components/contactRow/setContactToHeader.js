import { connect } from 'react-redux';
import {setContactToHeaderRender} from '../../store/actions'
import ContactRow from './ContactRow';
import {getContacts, getCurrentContact} from '../../store/selectors';

const mapStateToProps = state => {
    return {
        contacts: getContacts(state),
        currentContact: getCurrentContact(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setContactToHeaderRender: id => dispatch(setContactToHeaderRender(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactRow)
