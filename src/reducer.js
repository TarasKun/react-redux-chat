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
                    value: 'Hi, Josephina!'
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
                    value: 'How you doing?!'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '5/05/2020',
                    time: '22:28',
                    value: 'Good!'
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
                    value: 'yeah, why not'
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
                    value: 'perfect'
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
                    value: 'okay'
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

        default: 
            return state;
    }
};



