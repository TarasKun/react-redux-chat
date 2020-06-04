const initialState = {
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
            fullName: 'Donald Trump',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '23/03/2020',
                    time: '22:27',
                    value: 'Make America Great Again!'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '5/05/2020',
                    time: '22:28',
                    value: 'no',
                    // fromApi: true
                }
            ]
        },
        {
            id: 3,
            fullName: 'Elon Musk',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '13/04/2020',
                    time: '22:27',
                    value: 'Do you want new Tesla?'
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
        case 'SET_CONTACT_NAME':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            };
        case 'SET_CONTACT_TO_HEADER_RENDER':
            return {
                ...state,
                currentContact: action.id
            }
        case 'SET_MESSAGE_TO_MESSAGE_HISTORY':
            return {
                ...state,
                contacts: [...state.contacts.map(contact => contact.id !== action.obj.id ? contact  : action.obj)]
            }
        case 'SET_MESSAGE_FROM_API':
            return {
                ...state,
                contacts: [...state.contacts.map(contact => contact.id !== action.obj.id ? contact  : action.obj)]
            }

        default: 
            return state;
    }
};



