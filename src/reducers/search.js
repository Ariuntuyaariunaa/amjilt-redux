/**
 * Created by Nanduk92 on 1/12/2017.
 */

import {fetchSearch,fetchSearchRecent,fetchSearchRecentreq} from '../constants/actionTypes';

const initialState = {

    status: 1,
    users:[],
    groups:[],
    lessons:[],
    tests:[],
    posts:[],
    searches:[],

};
export default function search(state = initialState, action) {
    switch (action.type) {
        case fetchSearch.REQUEST:
            return state;
        case fetchSearch.RESPONSE:
            return {
                ...state,
                users:action.json.users,
                groups:action.json.groups,
                lessons:action.json.lessons,
                tests:action.json.tests,
                posts:action.json.posts
            };
        case fetchSearchRecent.REQUEST:
            return state;
        case fetchSearchRecent.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    status:0,
                    searches:action.json.text
                };
            }
            return state;

        case fetchSearchRecentreq.REQUEST:
            return state;
        case fetchSearchRecentreq.RESPONSE:
            return {
                ...state,
                status:0,
                searches:action.json.data

            };

        default:
            return state;
    }
}