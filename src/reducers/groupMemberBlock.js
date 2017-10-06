/**
 * Created by Nanduk92 on 1/27/2017.
 */

import {
    membersGroupBlock,
    membersGroupBlockMore,
    blockGroupAction,
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    members:[],
    more:false,
};

export default function groupMemberBlock(state = initialState, action) {
    switch (action.type) {
        case membersGroupBlock.REQUEST:
            return {
                ...state,
                more: false,
                status: 1};
        case membersGroupBlock.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
            return {
                ...state,
                status: 0,
                more:more,
                members:action.json.data.members
            };
        case membersGroupBlockMore.REQUEST:
            return {
                ...state,
                more: false,
            };
        case membersGroupBlockMore.RESPONSE:
            var more = true;
            if(action.json.data.members.length < 20){
                more = false;
            }
            return {
                ...state,
                more:more,
                members:[...state.members,...action.json.data.members]
            };
        case blockGroupAction.REQUEST:
            return {
                ...state,
                status: 1,
            };
        case blockGroupAction.RESPONSE:
            if(action.json.success) {
                var more = true;
                if (action.json.data.members.length < 20) {
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