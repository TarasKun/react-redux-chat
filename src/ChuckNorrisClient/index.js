export async function joke(contacts, updateMessagesHistoryWithApiResult, contactToUpdate) {
    await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(res => setApiResult(res.value, contacts, updateMessagesHistoryWithApiResult, contactToUpdate))
        .catch(e => console.log(e))
}

const setApiResult = (msg, contacts, updateMessagesHistoryWithApiResult, contactToUpdate) => {
    const date = new Date();
    const contactToRender = contacts.find(contact => contact.id === contactToUpdate.id);
    const currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const currentTime = date.getHours() + ':' + date.getMinutes();
    const message = {
        messageToMe: true,
        id: contactToRender.messages.length + 1,
        date: currentDate,
        time: currentTime,
        value: msg,
        // fromApi: true
    }
    const objectToUpdate = {
        id: contactToRender.id,
        fullName: contactToRender.fullName,
        messages: [...contactToRender.messages, message]
    }
    updateMessagesHistoryWithApiResult(objectToUpdate);
}