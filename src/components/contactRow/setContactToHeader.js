import { connect } from "react-redux";
import {setContactToHeaderRender} from '../../actions'
import ContactRow from "./ContactRow";

const mapStateToProps = ({contacts}) => {
    return {
        contacts: contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setContactToHeaderRender: id => dispatch(setContactToHeaderRender(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactRow)