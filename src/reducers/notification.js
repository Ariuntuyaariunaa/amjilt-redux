import {fetchNotification,fetchNotificationClear,fetchNotificationNew,fetchNotificationCount,fetchNotificationAlt,
    fetchFriendReqNotificationGetCount,
    fetchFriendRequestNotification
} from '../constants/actionTypes';
const initialState = {
    notiCount:0,
    notifications:[],
    page:false,
    frnotiCount:0,
    status:0//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found
};
export default function lesson(state = initialState, action) {
    switch (action.type) {
        case fetchNotificationAlt.RESPONSE:
            if (action.json.success){
                let more = 1;
                if (action.json.data.length < 18){
                    more = 1;
                }
                return {
                    ...state,
                    notifications:action.json.data,
                    status:more
                }
            } else {
                return {
                    ...state,
                    status:5
                }
            }
        case fetchNotification.REQUEST:
            return {
                ...state,
                notiCount:0
            };
        case fetchNotification.RESPONSE:
            if (action.json.success){
                let more = 1;
                if (action.json.data.length < 18){
                    more = 0;
                }
                return {
                    ...state,
                    notifications:[...state.notifications,...action.json.data],
                    status:more
                }
            } else {
                return {
                    ...state,
                    status:5
                }
            }
        case fetchNotificationClear.REQUEST:
            return {
                ...state,
                notifications:[],
                page:false,
                status:1
            };
        case fetchNotificationNew.REQUEST:
            return {
                ...state,
                notiCount:state.notiCount + 1
            };
        case fetchNotificationCount.REQUEST:
            return state;
        case fetchNotificationCount.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    notiCount:action.json.count
                }
            }
            return state;
        case fetchFriendReqNotificationGetCount.REQUEST:
            return {
                ...state
            }
        case fetchFriendReqNotificationGetCount.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    frnotiCount:action.json.frcount
                }
            }
        case fetchFriendRequestNotification.REQUEST:
            return {
                ...state,
                frnotiCount:0
            };
        case fetchFriendRequestNotification.RESPONSE:
            return {
                ...state
            }
        default:
            return state;
    }
}