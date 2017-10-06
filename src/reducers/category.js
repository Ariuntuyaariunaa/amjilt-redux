/**
 * Created by Ganzorig on 2017-01-18.
 */
import {fetchCategory} from '../constants/actionTypes';
const initialState = {
    categories:[],
    status:0//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found
};
export default function category(state = initialState, action) {
    switch (action.type) {
        case fetchCategory.REQUEST:
            return {
                ...state,status:1
            }
        case fetchCategory.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    categories: action.json.category,
                    status: 0
                }
            }
        default:
            return state;
    }
}