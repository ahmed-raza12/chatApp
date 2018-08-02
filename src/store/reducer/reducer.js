import CON from '../constant';


const INITIAL_STATE = {
    chatData: null,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case CON.MSG:
        // return { 
        //     ...state, 
        //     chatData: action.payload 
        // }
        case CON.GET_CHAT_DATA:
        let newData = Object.assign({}, state.chatData);
        newData[action.payload.key] = action.payload.msgData
        console.log(state.chatData)
        return {
            ...state, 
            chatData: newData
        }
        
        case CON.GET_CHAT_REMOVED:
        let deleteData = Object.assign({}, state.chatData);
        delete deleteData[action.payload.key]
        return { 
            ...state, 
            chatData: deleteData
        }

        case CON.GET_CHAT_UPDATE:
        let updateChat = Object.assign({}, state.chatData);
        updateChat[action.payload.key] = action.payload.msgData;
        return { 
            ...state, 
            chatData: updateChat
        }
            default:
            console.log(state)
            return state;
            }
    }
// console.log(INITIAL_STATE.complaintsData)