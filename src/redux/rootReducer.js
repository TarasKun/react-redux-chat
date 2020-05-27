const initialState = {
    fullName: 'Taras Kunyk'
};


export default (state = initialState, action) => {
    switch (action.type) {
        case '1234':
            return {
                ...state,
                name: action.payload,
            };

        default: return state;
    }
}