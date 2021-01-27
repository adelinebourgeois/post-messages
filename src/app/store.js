import { createStore } from 'redux';
import messagesReducer from "./reducers/messages";

const store = createStore(messagesReducer)

export default store
