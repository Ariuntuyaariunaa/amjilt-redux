/**
 * Created by Nanduk92 on 1/27/2017.
 */

import {
    membersGroupPending,
    membersGroupPendingMore,
    pendingGroupAction,
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    members:[],
    more:false,
};

export default function groupMemberPending(state = initialState, action) {
    switch (action.type) {
        case membersGroupPending.REQUEST:
            return {...state, status: 1};
        case membersGroupPending.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
            return {
                ...state,
                status: 0,
                more:more,
                members: [...action.json.data.members]
            };
        case membersGroupPendingMore.REQUEST:
            return {
                ...state,
                more: false,
            };
        case membersGroupPendingMore.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
            return {
                ...state,
                more:more,
                members:[...state.members,...action.json.data.members]
            };
        case pendingGroupAction.REQUEST:
            return {
                ...state,
                status: 1,
            };
        case pendingGroupAction.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
            return {
                ...state,
                status: 0,
                more:more,
                members: [...action.json.data.members]
            };
        default:
            return state;
    }
}