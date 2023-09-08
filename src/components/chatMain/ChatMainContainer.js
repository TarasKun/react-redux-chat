import {connect} from 'react-redux';
import ChatMain from './ChatMain';
import {getContacts} from '../../store/selectors';
import {updateMessagesHistoryWithApiResult} from '../../store/actions';

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
