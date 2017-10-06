/**
 * Created by Nanduk92 on 4/7/2017.
 */
import {
    fetchGroupJoined,
    fetchGroupJoinedClear,
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    groupJoined:[],
    more:false,
};

export default function groupJoined(state = initialState, action) {
    switch (action.type) {
        case fetchGroupJoined.REQUEST:
            return {
                ...state,
                more: false,
                status: 1,
            };
        case fetchGroupJoined.RESPONSE:
            if(!action.json.success){
                return {
                    ...state,status:5,more:false
                }
            }
            if(action.json.success){
                var more = true;
                var status = 0;
                if(action.json.groupJoined.length < 20){
                    more = false;
                }
                if(state.groupJoined.length<=0 && action.json.groupJoined.length<=0){
                    status = 4
                }
                return {
                    ...state,
                    groupJoined: [...state.groupJoined, ...action.json.groupJoined],
                    status: status,
                    more:more,
                };
            }
        case fetchGroupJoinedClear.REQUEST:
            return {
                status:0,
                groupJoined:[],
                more:false,
            };
        default:
            return state;
    }
}