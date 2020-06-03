import {setApiResult} from '../components/chatMain/ChatMain'

export async function joke(contacts, updateMessagesHistoryWithApiResult, contactToUpdate) {
    await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(res => setApiResult(res.value, contacts, updateMessagesHistoryWithApiResult, contactToUpdate))
        .catch(e => console.log(e))
}