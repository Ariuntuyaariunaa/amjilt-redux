/**
 * Created by Nanduk92 on 5/25/2017.
 */
import {hmo,
    hmc,
    stepStart,
    stepFirst,
    stepSecond,
    stepThird,
    friendAction
} from '../constants/actionTypes';
const initialState = {
    user:{},
    status:0,
    helperModal: false,
    success: false,
    activeKey: 0,
    loading: false,
    friendRequests: [],
    more:false,
    status: 1,//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found,4 hooson baina,5 Failed to fetch
};
export default function helper(state = initialState, action) {
    switch (action.type) {
        case hmo.REQUEST:
            return {
                ...state,
                helperModal: true,
            };
        case hmc.REQUEST:
            return {
                ...state,
                helperModal: false,
            };
        case stepStart.REQUEST:
            return {
                ...state,
                activeKey: 1,
            }
        case stepFirst.REQUEST:
            console.log(state);
            console.log(action);
            return {
                ...state,
                activeKey: 2,
                user: {
                    ...state.user,
                    birthday: action.json.birthday,
                    gander: action.json.gender,
                    phone: action.json.phone,
                }
            };
        case stepSecond.REQUEST:
            return {
                ...state,
                activeKey: 3,
                more: false,
            };
        case stepSecond.RESPONSE:
            if(action.json.success){
                var more = true;
                var status = 0;
                if(action.json.friendRequests.length < 20){
                    more = false;
                }
                if(state.friendRequests.length<=0 && action.json.friendRequests.length<=0){
                    return {
                        ...state,
                        helperModal: false,
                    };
                }
                return {
                    ...state,
                    friendRequests: [...state.friendRequests, ...action.json.friendRequests],
                    status: status,
                    more:more,
                };
            }else{
                return {
                    ...state,status:5,more:false
                }
            }
        case stepThird.REQUEST:
            return {
                ...state,
                helperModal: false,
            };
        case friendAction.REQUEST:
            return {...state,
                friendRequests:state.friendRequests.map((data, index) => {
                    if(data._id == action.json.id){
                        return {...data,
                            loading:true
                        }
                    }
                    return data;
                })
            };
            return {...state,
                friendRequests:state.friendRequests
            };
        case friendAction.RESPONSE:
            var status = 0;
            if(action.json.success){
                var filtered = state.friendRequests.filter(function(val){
                    if(val._id == action.json.id){
                        return false;
                    }else{
                        return true;
                    }
                });
                if(filtered.length == 0){
                    status = 4;
                }
                return {
                    ...state,
                    friendRequests:filtered,
                    status:status
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}
