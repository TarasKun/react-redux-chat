import {connect} from "react-redux";
import ChatMain from "./ChatMain";
import {getContacts} from '../../selectors';
import {updateMessagesHistoryWithApiResult} from '../../actions';

const mapStateToProps = state => {
    return {
        contacts: getContacts(state)
    }
};

const mapDispatchToProps = dispatch => ({
    updateMessagesHistoryWithApiResult: object => {
        dispatch(updateMessagesHistoryWithApiResult(object))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatMain)