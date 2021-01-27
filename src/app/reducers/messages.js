const initialState = require('../messages.json');

const nextMessageId = (messages) => {
    const maxId = messages.reduce((maxId, message) => Math.max(message.id, maxId), -1);
    return maxId + 1;
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'init':
            return {
                ...state,
                messages: action.payload
            };
        case 'post':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        // Use an auto-incrementing numeric ID
                        id: nextMessageId(state.messages),
                        userName: action.payload.userName,
                        text: action.payload.text,
                        type: action.payload.type
                    }
                ]
            }
        default:
            return state
    }
}

export default messagesReducer;