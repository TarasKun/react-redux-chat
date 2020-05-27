const initialState = {
    fullName: 'Taras Kunyk',
    contacts: [
        {
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
        }
    ]
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONTACT_NAME':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            };

        default: return state;
    }
};
