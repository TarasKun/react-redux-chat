import { connect } from "react-redux";
import LeftBar from "./LeftBar";
import {getFullName, getContacts} from '../../selectors';

const mapStateToProps = (state) => {
    return {
        fullName: getFullName(state),
        contacts: getContacts(state)
    }
};


export default connect(mapStateToProps)(LeftBar)