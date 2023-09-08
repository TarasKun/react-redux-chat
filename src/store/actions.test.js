import * as actions from './actions';
import * as constants from '../constants';

describe('Action Creators', () => {
    it('should create an action to set a contact name', () => {
        const contact = {
            id: 1,
            fullName: 'John Doe',
            messages: [
                { value: 'test', date: '2023-08-31' },
            ],
        };

        const expectedAction = {
            type: constants.SET_CONTACT_NAME,
            contact,
        };
        expect(actions.setContactName(contact)).toEqual(expectedAction);
    });

    it('should create an action to set a contact to header render', () => {
        const id = 123; // Your contact id
        const expectedAction = {
            type: constants.SET_CONTACT_TO_HEADER_RENDER,
            id,
        };
        expect(actions.setContactToHeaderRender(id)).toEqual(expectedAction);
    });

    it('should create an action to update messages history', () => {
        const obj = { value: 'test', date: '2023-08-31' }
        const expectedAction = {
            type: constants.SET_MESSAGE_TO_MESSAGE_HISTORY,
            obj,
        };
        expect(actions.updateMessagesHistory(obj)).toEqual(expectedAction);
    });

    it('should create an action to update messages history with API result', () => {
        const obj = { value: 'test', date: '2023-08-31' }
        const expectedAction = {
            type: constants.SET_MESSAGE_FROM_API,
            obj,
        };
        expect(actions.updateMessagesHistoryWithApiResult(obj)).toEqual(expectedAction);
    });
});
