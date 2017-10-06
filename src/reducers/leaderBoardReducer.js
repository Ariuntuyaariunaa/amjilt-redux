/**
 * Created by Nanduk92 on 5/25/2017.
 */
import {fetchBoard} from '../constants/actionTypes';
const initialState = {
    board:[],
    status:0,
};
export default function leaderBoard(state = initialState, action) {
    switch (action.type) {
        case fetchBoard.REQUEST:
            return {
                ...state,
            };
        case fetchBoard.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    board: action.json.result
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}
