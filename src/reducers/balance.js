/**
 * Created by zorig on 3/6/2017.
 */
import {fetchBalance} from '../constants/actionTypes';
const initialState = {
    today:'0',
    yesterday:'0',
    this_month:'0',
    last_month:'0',
    last_result:[],
    total:0,
    status:1//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found
};
export default function balance(state = initialState, action) {
    switch (action.type) {
        case fetchBalance.REQUEST:
            return {
                ...state,status:1
            }
        case fetchBalance.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    status:0,
                    today:action.json.today,
                    yesterday:action.json.yesterday,
                    this_month:action.json.this_month,
                    last_month:action.json.last_month,
                    last_result:action.json.last_result,
                    total:action.json.total,
                };
            }else{
                return {
                    ...state,status:0
                }
            }
        default:
            return state;
    }
}