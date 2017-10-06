/**
 * Created by Nanduk92 on 1/16/2017.
 */

import {
    fetchGroup,
    fetchTotalGroup,
    fetchTotalMoreGroup,
    postGroup,
    fetchSuggestGroup,
    fetchMemberRequestGroup,
    fetchGroupClear
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    meGroup:[],
    apGroup:[],
    totalGroup:[],
    reqGroup:[],
    suggestUser:[],
    role: false,
};

export default function group(state = initialState, action) {
    switch (action.type) {
        case fetchGroup.REQUEST:
            return {...state, status: 1};
        case fetchGroup.RESPONSE:
            if(!action.json.success){
                return {
                    ...state,status:5
                }
            }
            return {
                ...state,
                meGroup: action.json.meGroup,
                apGroup: action.json.apGroup,
                totalGroup: action.json.totalGroup,
                reqGroup: action.json.reqGroup,
                status: 0,
            };
        case fetchGroupClear.REQUEST:
            return {
                meGroup: [],
                apGroup: [],
                totalGroup: [],
                reqGroup: [],
                status: 0,
            };
        case postGroup.REQUEST:
            return {
                ...state
            };
        case postGroup.RESPONSE:
            return {...state
            };
        case fetchSuggestGroup.REQUEST:
            return {
                ...state,
            }
        case fetchSuggestGroup.RESPONSE:
            return {
                ...state,
                suggestUser: action.json
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
            return {...state,
                totalGroup:state.totalGroup.map((data, index) => {
                    if(data._id == action.json.slug){
                        return {...data,
                            loading:false,
                            request: true,
                        }
                    }
                    return data;
                })
            };
            return {...state,
                totalGroup:state.totalGroup
            };
        default:
            return state;
    }
}