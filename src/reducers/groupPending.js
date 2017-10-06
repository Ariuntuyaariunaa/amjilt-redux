/**
 * Created by Nanduk92 on 4/7/2017.
 */
import {
    fetchGroupPending,
    fetchGroupPendingClear
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    groupPending:[],
    more:false,
};

export default function groupPending(state = initialState, action) {
    switch (action.type) {
        case fetchGroupPending.REQUEST:
            return {
                ...state,
                more: false,
                status: 1,
            };
        case fetchGroupPending.RESPONSE:
            if(action.json.success){
                var more = true;
                var status = 0;
                if(action.json.groupPending.length < 20){
                    more = false;
                }
                if(state.groupPending.length<=0 && action.json.groupPending.length<=0){
                    status = 4
                }
                return {
                    ...state,
                    groupPending: [...state.groupPending, ...action.json.groupPending],
                    status: status,
                    more:more,
                };
            }else{
                return {
                    ...state,status:5,more:false
                }
            }
        case fetchGroupPendingClear.REQUEST:
            return {
                status:0,
                groupPending:[],
                more:false,
            };
        default:
            return state;
    }
}
