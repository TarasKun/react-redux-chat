const initialObjects = {
    fullName: 'Taras Kunyk',
    contacts: [
        {
            id: 0,
            fullName: 'Josephina',
            messages: [
                {
                    id: 1,
                    date: '27/05/2020',
                    time: '22:27:51',
                    value: 'Hi, Taras!'
                },
                {
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
                    id: 1,
                    date: '27/05/2020',
                    time: '22:27:51',
                    value: 'How you doing?!'
                },
                {
                    id: 2,
                    date: '27/05/2020',
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
                    id: 1,
                    date: '27/05/2020',
                    time: '22:27:51',
                    value: 'Do you want new Tesla?'
                },
                {
                    id: 2,
                    date: '27/05/2020',
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
                    id: 1,
                    date: '27/05/2020',
                    time: '22:27:51',
                    value: 'how are you?'
                },
                {
                    id: 2,
                    date: '27/05/2020',
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
                    id: 1,
                    date: '27/05/2020',
                    time: '22:27:51',
                    value: 'I am so tired'
                },
                {
                    id: 2,
                    date: '27/05/2020',
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



