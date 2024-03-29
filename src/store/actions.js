import *as constants from '../constants';

export const setContactName = contact => {
    return {
        type: constants.SET_CONTACT_NAME,
        contact
    }
};

export const setContactToHeaderRender = id => {
    return{
        type: constants.SET_CONTACT_TO_HEADER_RENDER,
        id
    }
}

export const updateMessagesHistory = obj => {
    return {
        type: constants.SET_MESSAGE_TO_MESSAGE_HISTORY,
        obj
    }
}

export const updateMessagesHistoryWithApiResult = obj => {
    return {
        type: constants.SET_MESSAGE_FROM_API,
        obj
    }
}


