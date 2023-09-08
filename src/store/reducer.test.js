import { reducer, initialState } from './reducer';
import * as constants from '../constants';

describe('Reducer Tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set contact name', () => {
        const contact = {
            id: 6,
            fullName: 'New Contact',
            messages: [],
        };

        const action = {
            type: constants.SET_CONTACT_NAME,
            contact,
        };

        const expectedState = {
            ...initialState,
            contacts: [...initialState.contacts, contact],
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should set current contact for header rendering', () => {
        const action = {
            type: constants.SET_CONTACT_TO_HEADER_RENDER,
            id: 3, // Replace with the ID you want to set as the current contact
        };

        const expectedState = {
            ...initialState,
            currentContact: 3, // Set to the ID from the action
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should set message to message history', () => {
        const messageObj = {
            id: 2,
            fullName: 'Joe Biden',
            messages: [
                // ... updated messages
            ],
        };

        const action = {
            type: constants.SET_MESSAGE_TO_MESSAGE_HISTORY,
            obj: messageObj,
        };

        const updatedContacts = initialState.contacts.map((contact) =>
            contact.id !== messageObj.id ? contact : messageObj
        );

        const expectedState = {
            ...initialState,
            contacts: updatedContacts,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should set message from API', () => {
        const messageObj = {
            id: 1,
            fullName: 'Josephina',
            messages: [
                // ... updated messages
            ],
        };

        const action = {
            type: constants.SET_MESSAGE_FROM_API,
            obj: messageObj,
        };

        const updatedContacts = initialState.contacts.map((contact) =>
            contact.id !== messageObj.id ? contact : messageObj
        );

        const expectedState = {
            ...initialState,
            contacts: updatedContacts,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should return the current state for unknown action', () => {
        const currentState = {
            ...initialState,
            // ... modify state as needed
        };

        const action = {
            type: 'UNKNOWN_ACTION',
        };

        expect(reducer(currentState, action)).toEqual(currentState);
    });
});
