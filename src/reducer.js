const initialState = {
    fullName: 'Taras Kunyk',
    contacts: [
        {
            id:0,
            fullName: 'Josephina',
            messagesFrom: [{
                date: '27/05/2020',
                time: '22:27:51',
                value: 'Hi, Taras!'
            }],
            messagesTo: [{
                date: '27/05/2020',
                time: '22:28:51',
                value: 'Hi, Josephina!'
            }]
        },

    ],
    currentContact: ''
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

        default:
            return state;
    }
};
