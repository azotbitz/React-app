import {createStore, combineReducers, applyMiddleware} from "redux";
import {chatsReducer} from "./reducers/chatsReducer/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";
import {todosReducer} from "./reducers/todosReducer/todosReducer";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    todos: todosReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

