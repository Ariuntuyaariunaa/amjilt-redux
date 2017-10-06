/**
 * Created by Lkhag on 2017-03-06.
 */

import {
    mutalFriends,fetchFriendList,fetchFriendListMore,checkFriendship,friendAction
} from '../constants/actionTypes';

const initialState = {
    friendsLoading:true,
    more:false,
    mutalfriends:[],
    loading1:false,
    friends:[],
    status: 1,//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found,4 hooson baina,5 Failed to fetch
}


export default function friends(state = initialState, action) {
    switch (action.type) {
        case mutalFriends.REQUEST:
            return state;
        case mutalFriends.RESPONSE:
            return {
                ...state,
                mutalfriends:action.json.mutalfriends,
            };
        case fetchFriendList.REQUEST:
            return {
                ...state,
                friendsLoading:true
            };
        case fetchFriendList.RESPONSE:
            if(action.json.success){
                var more = true;
                if(action.json.friends.friends.length < 20)
                {
                    more = false;
                }
                return {
                    ...state,
                    more:more,
                    friends:action.json.friends,
                    friends_check:action.json.friends_check,
                    friendsLoading:false
                };
            }else {
                return {
                    ...state,status:5
                }
            }
        case fetchFriendListMore.REQUEST:
            return {
                ...state,
                friendsLoading:false
            };
        case fetchFriendListMore.RESPONSE:
            var more = true;
            if(action.json.friends.friends.length < 20)
            {
                more = false;
            }
            return {
                ...state,
                more:more,
                friends:{...state.friends,friends:[...state.friends.friends,...action.json.friends.friends]},
                friendsLoading:false
            };
        case friendAction.REQUEST:
            if(state.friends && state.friends.friends != undefined && state.friends.friends.length > 0 && action.json.id != undefined){
                return {
                    ...state,
                    friends:{...state.friends,
                        friends:state.friends.friends.map((data, index) => {
                            if (data._id == action.json.id) {
                                return {
                                    ...data,
                                    loading: true,
                                }
                            }
                            return data;
                        })
                    }
                }
            }else{
                return state;
            }
        case friendAction.RESPONSE:
            if(state.friends && state.friends.friends != undefined && state.friends.friends.length > 0 && action.json.id != undefined){
                if (action.json.action == 'request') {
                    return {
                        ...state,
                        friends:{...state.friends,
                            friends:state.friends.friends.map((data, index) => {
                                if (data._id == action.json.id) {
                                    return {
                                        ...data,
                                        loading: false,
                                        requester: action.json.requester_user,
                                    }
                                }
                                return data;
                            })
                        }
                    }
                }
                if (action.json.action == 'request_delete') {
                    return {
                        ...state,
                        friends:{...state.friends,
                            friends:state.friends.friends.map((data, index) => {
                                if (data._id == action.json.id) {
                                    return {
                                        ...data,
                                        loading: false,
                                        requester: '',
                                        _id:'',
                                    }
                                }
                                return data;
                            })
                        }
                    }
                }
                if (action.json.action == 'request_ignore') {
                    return {
                        ...state,
                        friends:{...state.friends,
                            friends:state.friends.friends.map((data, index) => {
                                if (data._id == action.json.id) {
                                    return {
                                        ...data,
                                        loading: false,
                                        requester: '',
                                    }
                                }
                                return data;
                            })
                        }
                    }
                }
                else {
                    return state;
                }
            }else{
                return state;
            }
        case checkFriendship.REQUEST:
            return state;
        case checkFriendship.RESPONSE:
            return {
                ...state,
                status:action.json.relation,
                user_id:action.json.user_id,
            };
        default:
            return state;
    }
}