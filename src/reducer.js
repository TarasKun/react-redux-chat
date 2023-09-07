import *as constants from '../src/constants'

export const initialState = {
    fullName: 'Taras Kunyk',
    contacts: [
        {
            id: 1,
            fullName: 'Josephina',
            messages:  [
                {
                    messageToMe: true,
                    id: 1,
                    date: '2/05/2020',
                    time: '22:27',
                    value: 'Hi, Taras!'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '27/05/2020',
                    time: '22:28',
                    value: 'Hi, Josephina!',
                    // fromApi: true
                }
            ]
        },
        {
            id: 2,
            fullName: 'Joe Biden',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '23/03/2020',
                    time: '22:27',
                    value: 'How can I help?'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '5/05/2020',
                    time: '22:28',
                    value: 'Guns',
                    // fromApi: true
                }
            ]
        },
        {
            id: 3,
            fullName: 'Tim Cook',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '13/04/2020',
                    time: '22:27',
                    value: 'Do you want new MacBook?'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '24/05/2020',
                    time: '22:28',
                    value: 'yeah, why not',
                    // fromApi: true
                }
            ]
        },
        {
            id: 4,
            fullName: 'Michael',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '15/01/2020',
                    time: '22:27',
                    value: 'how are you?'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '23/05/2020',
                    time: '22:28',
                    value: 'perfect',
                    // fromApi: true
                }
            ]
        },
        {
            id: 5,
            fullName: 'Bryan',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '14/05/2020',
                    time: '22:27',
                    value: 'I am so tired'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '15/05/2020',
                    time: '22:28',
                    value: 'okay',
                    // fromApi: true
                }
            ]
        }],
    currentContact:''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_CONTACT_NAME:
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            };
        case constants.SET_CONTACT_TO_HEADER_RENDER:
            return {
                ...state,
                currentContact: action.id
            }
        case constants.SET_MESSAGE_TO_MESSAGE_HISTORY:
            return {
                ...state,
                contacts: [...state.contacts.map(contact => contact.id !== action.obj.id ? contact  : action.obj)]
            }
        case constants.SET_MESSAGE_FROM_API:
            return {
                ...state,
                contacts: [...state.contacts.map(contact => contact.id !== action.obj.id ? contact  : action.obj)]
            }

        default:
            return state;
    }
};



