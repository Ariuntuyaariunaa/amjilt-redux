/**
 * Created by Lkhag on 2017-03-09.
 */

import {
    fetchFriendRequest,requestsClear,friendAction
} from '../constants/actionTypes';

const initialState = {
    requests:[],
    request:[],
    requestMore:false,
    status:1,
}

export default function friendRequests(state = initialState, action) {
    switch (action.type) {
        case fetchFriendRequest.REQUEST:
            return {...state
            };
        case fetchFriendRequest.RESPONSE:
            if(action.json.success){
                var more = true;
                if(action.json.data.length < 20){
                    more = false;
                }
                return {
                    ...state,
                    requestMore:more,
                    requests:[...state.requests,...action.json.data],
                    status:0
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case requestsClear.REQUEST:
            return{
                ...state,
                requests:[],
                friends:{}
            };
        case friendAction.RESPONSE:
            if(state.requests && state.requests != undefined && action.json.id != undefined) {
                if (action.json.action == 'accept') {
                    var filtered = state.requests.filter(function(val){
                        if(val.requester._id == action.json.id){
                            return false;
                        }else{
                            return true;
                        }
                    });
                    return {...state,
                        requests:filtered,
                    };
                }
                if (action.json.action == 'request_ignore') {
                    var filtered = state.requests.filter(function(val){
                        if(val.requester._id == action.json.id){
                            return false;
                        }else{
                            return true;
                        }
                    });
                    return {...state,
                        requests:filtered,
                    };
                } else {
                    return state;
                }
            }else {
                return state;
            }
        default:
            return state;
    }
}