/**
 * Created by zorig on 4/13/2017.
 */
import {messagesUser,messagesUserMessages,messagesUserMessagesMore,msgRemoveOne,
    receiveFullMessage,allMsgRemove,searchMsgUser,
    uploadImage} from '../constants/actionTypes';
const initialState = {
    users:[],
    channel:{},
    chatUser:{},
    messages:[],
    more:false,
    msgMore:false,
    sentImage: {},
    imageLoading: 1,
    status:1,//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found
};
export default function mainChat(state = initialState, action) {
    switch (action.type) {
        case messagesUser.REQUEST:
            return {
                ...state,
                status:1,
                more:false
            };
        case messagesUser.RESPONSE:
            if(action.json.success){
                var more = true;
                if(action.json.users < 10){
                    more = false;
                }
                return{
                    ...state,
                    users:[...action.json.users],
                    status:0,
                    more:more
                };
            }else{
                return state
            }
        case messagesUserMessages.REQUEST:
            return {...state,
                msgMore:false,
                users:state.users.map((data, index) => {
                    if(data.users[0].slug == action.json.slug){
                        return {...data,
                            new:false,
                        }
                    }
                    return data;
                })
            };
        case messagesUserMessages.RESPONSE:
            if(action.json.success){
                var msgMore = true;
                if(action.json.users < 15){
                    msgMore = false;
                }
                return{
                    ...state,
                    chatUser:action.json.user,
                    channel:action.json.channel,
                    messages:action.json.messages,
                    msgMore:msgMore
                };
            }else{
                return state
            }
        case messagesUserMessagesMore.REQUEST:
            return {
                ...state,
                msgMore:false
            };
        case messagesUserMessagesMore.RESPONSE:
            if(action.json.success){
                var msgMore = true;
                if(action.json.users < 15){
                    msgMore = false;
                }
                return{
                    ...state,
                    chatUser:action.json.user,
                    messages:[...action.json.messages, ...state.messages],
                    msgMore:msgMore
                };
            }else{
                return state
            }
        case msgRemoveOne.REQUEST:
            return state;
        case msgRemoveOne.RESPONSE:
            if(action.json.success){
                var filtered = state.messages.filter(function(val){
                    if(val._id == action.json.id){
                        return false;
                    }else{
                        return true;
                    }
                });
                return {
                    ...state,
                    messages:filtered
                };
            }else{
                return state
            }
        case receiveFullMessage.REQUEST:
            if(state && state.channel && state.chatUser){
                if(state.channel._id == action.channel.channel){
                    return {
                        ...state,
                        messages:[...state.messages,...[action.channel]]
                    };
                }else{
                    return {...state,
                        users:state.users.map((data, index) => {
                            if(data._id == action.channel.channel){
                                return {...data,
                                    new:true,
                                    lastSms:action.channel.text,
                                    last:action.channel.created
                                }
                            }
                            return data;
                        })
                    };
                }
            }else{
                return state;
            }
            return state;
        case allMsgRemove.REQUEST:
            return state;
        case allMsgRemove.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    messages:[]
                };
            }else{
                return state
            }
        case searchMsgUser.REQUEST:
            return state;
        case searchMsgUser.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    users:action.json.users
                };
            }else{
                return state
            }
        case uploadImage.REQUEST:
            return {
                ...state,
                imageLoading: 1,
            };
        case uploadImage.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    imageLoading: 0,
                    sentImage:action.json.result,
                };
            }else{
                return state
            }
        default:
            return state;
    }
}