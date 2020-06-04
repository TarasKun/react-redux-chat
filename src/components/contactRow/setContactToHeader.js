import { connect } from "react-redux";
import {setContactToHeaderRender} from '../../actions'
import ContactRow from "./ContactRow";
import {getContacts, getCurrentContact} from "../../selectors";

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