/**
 * Created by Nanduk92 on 4/7/2017.
 */
import {
    fetchGroupManaged,
    fetchGroupManagedClear
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    groupManaged:[],
    more:false,
};

export default function groupManaged(state = initialState, action) {
    switch (action.type) {
        case fetchGroupManaged.REQUEST:
            return {
                ...state,
                more: false,
                status: 1,
            };
        case fetchGroupManaged.RESPONSE:
            if(action.json.success){
                var more = true;
                var status = 0;
                if(action.json.groupManaged.length < 20){
                    more = false;
                }
                if(state.groupManaged.length<=0 && action.json.groupManaged.length<=0){
                    status = 4
                }
                return {
                    ...state,
                    groupManaged: [...state.groupManaged, ...action.json.groupManaged],
                    status: status,
                    more:more,
                };
            }else{
                return {
                    ...state,status:5,more:false
                }
            }
        case fetchGroupManagedClear.REQUEST:
            return {
                status:0,
                groupManaged:[],
                more:false,
            };
        default:
            return state;
    }
}