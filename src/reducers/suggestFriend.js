/**
 * Created by Ganzorig on 2017-02-02.
 */
import {suggestFriend,friendAction} from '../constants/actionTypes';
const initialState = {
    friends:[],
    status:0,
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case suggestFriend.REQUEST:
            return {
                ...state,
                status:1
            };
        case suggestFriend.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    status:0,
                    friends:action.json.friends
                };
            }else{
                return {
                    ...state,
                    state:0
                };
            }
        case friendAction.REQUEST:
            if(action.json && action.json.id != undefined && state.friends.length > 0){
                return {
                    ...state,
                    friends:state.friends.map((data, index) => {
                        if(data._id == action.json.id){
                            return {...data,
                                loading:true
                            }
                        }
                        return data;
                    })
                }
            }else{
                return state;
            }
        case friendAction.RESPONSE:
            if(action.json && action.json.id != undefined && state.friends.length > 0){
                if(action.json.action == 'request'){
                    return {
                        ...state,
                        friends:state.friends.map((data, index) => {
                            if(data._id == action.json.id){
                                return {...data,
                                    loading:false,
                                    requested:true,
                                }
                            }
                            return data;
                        })
                    }
                }else if(action.json.action == 'request_delete'){
                    return {
                        ...state,
                        friends:state.friends.map((data, index) => {
                            if(data._id == action.json.id){
                                return {...data,
                                    loading:false,
                                    requested:false,
                                }
                            }
                            return data;
                        })
                    }
                }else{
                    return state;
                }
            }else{
                return state;
            }
            return state;
        default:
            return state;
    }
}