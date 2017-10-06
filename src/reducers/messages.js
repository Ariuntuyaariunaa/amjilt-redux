/**
 * Created by Ganzorig on 2017-02-21.
 */
import {
    headerMessages,
    fetchMessagesGetCount
} from '../constants/actionTypes';
const initialState = {
    messages:[],
    msgCount: 0,
    status:0//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found
};
export default function lesson(state = initialState, action) {
    switch (action.type) {
        case headerMessages.REQUEST:
            return {
                ...state,
                status:1,
                msgCount: 0,
            };
        case headerMessages.RESPONSE:
            if(action.json.success){
                let more = 1;
                if(action.json.result.length < 18){
                    more = 0;
                }
                return {
                    ...state,
                    messages:[...state.messages,...action.json.result],
                    status:more
                }
            }else{
                return state
            }
        case fetchMessagesGetCount.REQUEST:
            return {
                ...state,
                status:1
            }
        case fetchMessagesGetCount.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    msgCount:action.json.count,
                    status:0
                };
            }else{
                return state
            }
        default:
            return state;
    }
}