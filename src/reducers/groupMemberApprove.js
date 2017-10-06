/**
 * Created by Nanduk92 on 1/27/2017.
 */

import {
    membersGroupApprove,
    membersMoreGroupApprove,
    approveGroupAction
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    members:[],
    more:false,
    groupSingle:{},
};

export default function groupMemberApprove(state = initialState, action) {
    switch (action.type) {
        case membersGroupApprove.REQUEST:
            return {
                ...state,
                more: false,
                status: 1
            };
        case membersGroupApprove.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
             return {
                 ...state,
                status: 0,
                more:more,
                members: action.json.data.members
            };
        case membersMoreGroupApprove.REQUEST:
            return {
                ...state,
                more: false,
            };
        case membersMoreGroupApprove.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
            return {
                ...state,
                more:more,
                members:[...state.members,...action.json.data.members]
            };
        case approveGroupAction.REQUEST:
            return {
                ...state,
                status: 1,
                more: false
            };
        case approveGroupAction.RESPONSE:
            if(action.json.success) {
                var more = true;
                if (action.json.data.members && action.json.data.members.length < 20) {
                    more = false;
                }
                return {
                    ...state,
                    status: 0,
                    more: more,
                    members: [...action.json.data.members]
                };
            }
            else {
                return state;
            }
        default:
            return state;
    }
}