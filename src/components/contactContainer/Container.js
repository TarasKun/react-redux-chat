import { connect } from "react-redux";
import {setContactName} from '../../actions'
import ContactContainer from "./ContactContainer";

const mapStateToProps = ({contacts}) => {
    return {
        contacts: contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setContactName: contact => dispatch(setContactName(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)