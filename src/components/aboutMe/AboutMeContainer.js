import { connect } from "react-redux";
import AboutMe from "./AboutMe";
import {getFullName} from '../../selectors';
import {setContactName} from '../../actions'

const mapStateToProps = (state) => {
    return {
        fullName: getFullName(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setContactName: contact => dispatch(setContactName(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)