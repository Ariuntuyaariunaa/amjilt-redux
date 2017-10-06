/**
 * Created by Nanduk92 on 1/16/2017.
 */

import {
    fetchTotalGroup,
    fetchMemberRequestGroup,
    fetchTotalGroupClear
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    totalGroup:[],
    apGroup:[],
    more:false,
};

export default function GroupTotal(state = initialState, action) {
    switch (action.type) {
        case fetchTotalGroup.REQUEST:
            return {
                ...state,
                more: false,
                status: 1,
            };
        case fetchTotalGroup.RESPONSE:
            if(action.json.success){
                var more = true;
                var status = 0;
                if(action.json.totalGroup.length < 20){
                    more = false;
                }
                if(state.totalGroup.length<=0 && action.json.totalGroup.length<=0){
                    status = 4
                }
                return {
                    ...state,
                    totalGroup: [...state.totalGroup, ...action.json.totalGroup],
                    status: status,
                    more:more,
                };
            }else{
                return {
                    ...state,status:5,more:false
                }
            }
        case fetchMemberRequestGroup.REQUEST:
            return {...state,
                totalGroup:state.totalGroup.map((data, index) => {
                    if(data._id == action.json.slug){
                        return {...data,
                            loading:true
                        }
                    }
                    return data;
                })
            };
            return {...state,
                totalGroup:state.totalGroup
            };
        case fetchMemberRequestGroup.RESPONSE:
            var status = 0;
            if(action.json.success){
                var filtered = state.totalGroup.filter(function(val){
                    if(val._id == action.json.slug){
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
                    totalGroup:filtered,
                    status:status
                };
            }else{
                return state;
            }
        case fetchTotalGroupClear.REQUEST:
            return {
                status:0,
                totalGroup:[],
                more:false,
            };
        default:
            return state;
    }
}