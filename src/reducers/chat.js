/**
 * Created by Nanduk92 on 2/6/2017.
 */
import {
    requestFriendList,
    fetchMessages,
    fetchMessagesMore,
    receiveChannel,
    receiveMessage,
    closeChannel,
    searchMsgUser,

} from '../constants/actionTypes';

const initialState = {
    status: 1,
    loaded:false,
    loading: false,
    friends:[],
    channels:[],
    data: []
};

export default function chat(state = initialState, action) {
    switch (action.type) {
        case requestFriendList.REQUEST:
            return {...state,
                loading: true,
                status: 1,
            };
        case requestFriendList.RESPONSE:
            return {...state,
                loading: false,
                loaded:true,
                status: 0,
                friends: action.json.result
            };
        case fetchMessages.REQUEST:
            return {...state,
                channels:state.channels.map((data, index) => {
                    if(data._id == action.id){
                        return {...data,
                            more:false,
                        }
                    }
                    return data;
                })
            };
        case fetchMessages.RESPONSE:
            var more = true;
            if(!action.json.success){
                return state;
            }
            if(action.json.result.length < 10){
                more = false;
            }
            return {...state,
                channels:state.channels.map((data, index) => {
                    if(data._id == action.json.channel){
                        return {...data,
                            loaded:true,
                            more:more,
                            messages:action.json.result
                        }

                    }
                    return data;
                })
            };
        case fetchMessagesMore.REQUEST:
            return {...state,
                channels:state.channels.map((data, index) => {
                    if(data._id == action.json.id){
                        return {...data,
                            more:false
                        }

                    }
                    return data;
                })
            };
        case fetchMessagesMore.RESPONSE:
            var more = true;
            if(action.json.result.length < 10){
                more = false;
            }
            return {...state,
                channels:state.channels.map((data, index) => {
                    if(data._id == action.json.channel){
                        return {...data,
                            loaded:true,
                            more:more,
                            messages:[...action.json.result, ...data.messages]
                        }

                    }
                    return data;
                })
            };
        case receiveChannel.REQUEST:
            return {...state,
                channels:[...state.channels,...[action.channel]]
            };
        case receiveMessage.REQUEST:
            return {...state,
                channels:state.channels.map((data, index) => {
                    if(data._id == action.message.channel){
                        if(data.messages)
                            return {...data,
                                messages:[...data.messages,...[action.message]]
                            };
                        return {...data,
                            messages:[action.message]
                        }

                    }
                    return data;
                })
            };
        case closeChannel.REQUEST:
            return {...state,
                channels:state.channels.filter(function(v){
                    return (v._id != action.id);
                })
            };
        default:
            return state;
    }
}
