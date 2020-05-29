export const setContactName = contact => {
    return {
        type: 'SET_CONTACT_NAME',
        contact
    }
};

export const setContactToHeaderRender = id => {
    return{
        type: 'SET_CONTACT_TO_HEADER_RENDER',
        id
    }
}


