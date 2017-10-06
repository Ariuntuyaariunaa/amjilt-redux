/**
 * Created by Ganzorig on 2017-02-08.
 */
import {fetchLessonUsers} from '../constants/actionTypes';
const initialState = {
    users:[],
    status:0
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case fetchLessonUsers.REQUEST:
            return {
                ...state,
               status:1
            };
        case fetchLessonUsers.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    users:action.json.users,
                    status:0
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}