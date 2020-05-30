const initialObjects = {
    fullName: 'Taras Kunyk',
    contacts: [
        {
            id: 0,
            fullName: 'Josephina',
            messages:  [
                {
                    messageToMe: true,
                    id: 1,
                    date: '02/05/2020',
                    time: '22:27:51',
                    value: 'Hi, Taras!'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '27/05/2020',
                    time: '22:28:51',
                    value: 'Hi, Josephina!'
                }
            ]
        },
        {
            id: 1,
            fullName: 'Donald Trump',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '23/03/2020',
                    time: '22:27:51',
                    value: 'How you doing?!'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '05/05/2020',
                    time: '22:28:51',
                    value: 'Good!'
                }
            ]
        },
        {
            id: 2,
            fullName: 'Elon Musk',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '13/04/2020',
                    time: '22:27:51',
                    value: 'Do you want new Tesla?'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '24/05/2020',
                    time: '22:28:51',
                    value: 'yeah, why not'
                }
            ]
        },
        {
            id: 3,
            fullName: 'Michael',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '15/01/2020',
                    time: '22:27:51',
                    value: 'how are you?'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '23/05/2020',
                    time: '22:28:51',
                    value: 'perfect'
                }
            ]
        },
        {
            id: 4,
            fullName: 'Bryan',
            messages: [
                {
                    messageToMe: true,
                    id: 1,
                    date: '14/05/2020',
                    time: '22:27:51',
                    value: 'I am so tired'
                },
                {
                    messageToMe: false,
                    id: 2,
                    date: '15/05/2020',
                    time: '22:28:51',
                    value: 'okay'
                }
            ]
        }],
        currentContact:''
}

const initialState = initialObjects;

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

        default:
            return state;
    }
};



