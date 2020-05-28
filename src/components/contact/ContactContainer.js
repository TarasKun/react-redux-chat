import { connect } from "react-redux";
import Contact from "./Contact";
import {setContactName} from '../../actions'
import {getContacts} from "../../selectors";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        getContacts: getContacts(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setContactName: contact => dispatch(setContactName(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact)