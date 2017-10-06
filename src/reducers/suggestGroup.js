/**
 * Created by Ganzorig on 2017-02-02.
 */
import {suggestGroups,fetchMemberRequestGroup} from '../constants/actionTypes';
const initialState = {
    groups:[],
    status:0,
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case suggestGroups.REQUEST:
            return {
                ...state,
                status:1
            };
        case suggestGroups.RESPONSE:
            if(action.json.success){
                var status = 0;
                if(state.groups.length == 0 && action.json.groups.length == 0){
                    status = 4;
                }
                return {
                    ...state,
                    status:status,
                    groups:action.json.groups
                };
            }else{
                return state;
            }
        case fetchMemberRequestGroup.REQUEST:
            return {...state,
                groups:state.groups.map((data, index) => {
                    if(data._id == action.json.slug){
                        return {...data,
                            loading:true
                        }
                    }
                    return data;
                })
            };
            return {...state,
                groups:state.groups
            };
        case fetchMemberRequestGroup.RESPONSE:
            var status = 0;
            if(action.json.success){
                var filtered = state.groups.filter(function(val){
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
                    groups:filtered,
                    status:status
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}