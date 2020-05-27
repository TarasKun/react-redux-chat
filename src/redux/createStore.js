// export function createStore(rootReducer, initialState) {
//     let state = rootReducer(initialState, {type: '__INIT__'});
//     const subscribers = [];
//
//     return {
//         dispatch(action){
//             state = rootReducer(state, action);
//             subscribers.forEach(sub => sub());
//         },
//         subscribe(callback){
//             subscribers.push(callback)
//         },
//         getState(){
//             return state;
//         }
//     }
// }
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {logger} from "redux-logger/src";


export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger))
    return store;
}